// Phase B: 리서치 결과(910개 longTail)에서 의료광고법 필터·중복 제거·앵글 부여를
// 거쳐 180~220개 슬러그 인덱스를 자동 생성.
//
// 입력:  data/keyword-research.json
// 출력:  data/insights-index.json (기존 파일럿 10개 보존 + 확장)
//
// 실행:
//   node scripts/build-insights-index.mjs
//   node scripts/build-insights-index.mjs --target 200
//   node scripts/build-insights-index.mjs --dry-run

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const RESEARCH_FILE = path.join(ROOT, 'data', 'keyword-research.json');
const INDEX_FILE = path.join(ROOT, 'data', 'insights-index.json');
const ARTICLES_FILE = path.join(ROOT, 'data', 'insights-articles.json');

// ─────────────────────────────────────────────────────────────
// 필터
// ─────────────────────────────────────────────────────────────

// 본문에 들어가면 안 되는 단어가 키워드 자체에 들어있다면 슬러그 후보에서 제외
const EXCLUDED_REGIONS_IN_KEYWORD = [
  // 평택시 밖 타 시·도
  '강동구',
  '강동',
  '서울',
  '부산',
  '대구',
  '광주',
  '대전',
  '인천',
  '울산',
  '세종',
  '제주',
  '수원',
  '용인',
  '화성시', // 경기 화성시 — 단, 본문 "화성" 검출은 별도 로직
  '오산',
  '안성',
  '천안',
  '아산',
  '공주',
  // 지하철 혼동 (서울 5호선 고덕역)
  '고덕역',
];

const EXCLUDED_PATTERNS = [
  /(최고|1\s?위|넘버원|완치|보장|100\s?%|절대\s?안전)/,
  /\d+위/,
  // 특정 치과·원장 명명 의심 패턴
  /치과의원\s*\[|\]\s*치과/,
];

// 지나치게 일반적(지역 없음) 키워드는 Phase B에서 제외 (지역 SEO 목적)
function hasRegionContext(keyword, regionLabel) {
  const ks = keyword.toLowerCase();
  // regionLabel 자체 또는 평택이 들어있으면 OK
  return (
    ks.includes(regionLabel.toLowerCase()) ||
    ks.includes('평택') ||
    ks.includes('고덕') ||
    ks.includes('지제') ||
    ks.includes('송탄') ||
    ks.includes('안중') ||
    ks.includes('청북') ||
    ks.includes('세교') ||
    ks.includes('동삭') ||
    ks.includes('서정')
  );
}

function isExcluded(keyword) {
  for (const bad of EXCLUDED_REGIONS_IN_KEYWORD) {
    if (keyword.includes(bad)) return `타지역 "${bad}"`;
  }
  for (const re of EXCLUDED_PATTERNS) {
    const m = keyword.match(re);
    if (m) return `패턴 "${m[0]}"`;
  }
  if (keyword.length < 5) return '길이 <5';
  if (keyword.length > 40) return '길이 >40';
  return null;
}

// ─────────────────────────────────────────────────────────────
// 앵글 부여
// ─────────────────────────────────────────────────────────────

const DEFAULT_ANGLE_BY_TREATMENT = {
  implant: 'digital-guide',
  denture: 'digital-guide',
  'cavity-treatment': 'natural-preservation',
  'wisdom-tooth': 'digital-guide',
  whitening: 'digital-guide',
  'gum-care': 'natural-preservation',
  tmj: 'natural-preservation',
};

function assignAngle(keyword, treatment) {
  const k = keyword.toLowerCase();
  if (/(보험|건강보험|65\s?세|의료급여|본인부담|수가|급여)/.test(k))
    return 'insurance';
  if (/(가격|비용|견적)/.test(k) && treatment === 'implant')
    return 'insurance';
  if (/(전문의|통합치의학|포괄|통합\s*진료|잘하는|추천|좋은|고르는|선택|기준|비교)/.test(k))
    return 'integrated-specialist';
  if (
    /(디지털|3d|cbct|가이드|네비|당일|즉시|스캐너|cad|cam|정밀|장비|수면|무통|가글)/.test(
      k,
    )
  )
    return 'digital-guide';
  if (
    /(자연치|보존|살리|신경치료|치수|재근관|회복|관리|유지|회복기간|주의사항|합병증|드라이소켓|재발)/.test(
      k,
    )
  )
    return 'natural-preservation';
  return DEFAULT_ANGLE_BY_TREATMENT[treatment] || 'digital-guide';
}

// 앵글 + 주제 단서에서 짧은 슬러그 단편 추출
function slugFragment(keyword, angle) {
  const k = keyword.toLowerCase();
  const map = [
    { re: /65\s?세|노인|시니어/, frag: 'senior-insurance' },
    { re: /건강보험|보험\s?적용|급여/, frag: 'insurance' },
    { re: /가격|비용|견적/, frag: 'cost' },
    { re: /후기|리뷰/, frag: 'review' },
    { re: /매복/, frag: 'impacted' },
    { re: /수면|진정/, frag: 'sedation' },
    { re: /당일|즉시/, frag: 'same-day' },
    { re: /디지털|cbct|가이드/, frag: 'digital' },
    { re: /전문의|통합치의학/, frag: 'specialist' },
    { re: /자연치|살리|보존/, frag: 'preservation' },
    { re: /신경치료|근관|치수/, frag: 'endo' },
    { re: /회복|주의사항|드라이소켓|합병증/, frag: 'recovery' },
    { re: /스케일링|페리오/, frag: 'scaling' },
    { re: /치주|잇몸/, frag: 'perio' },
    { re: /이갈이|스플린트/, frag: 'bruxism' },
    { re: /보험틀니|부분틀니|완전틀니|노인틀니/, frag: 'denture-insurance' },
    { re: /올온|all.?on/, frag: 'allon4' },
    { re: /임플란트\s?틀니|오버덴쳐/, frag: 'overdenture' },
    { re: /브리지/, frag: 'bridge' },
    { re: /미백\s?가격|미백\s?비용/, frag: 'whitening-cost' },
    { re: /자가\s?미백/, frag: 'home-whitening' },
    { re: /후유증|부작용/, frag: 'risks' },
    { re: /역세권|역\s|역\s?근처/, frag: 'station' },
  ];
  for (const m of map) {
    if (m.re.test(k)) return m.frag;
  }
  // angle fallback
  const af = {
    'digital-guide': 'digital',
    'integrated-specialist': 'specialist',
    'natural-preservation': 'preservation',
    insurance: 'insurance',
  };
  return af[angle] || 'general';
}

// ─────────────────────────────────────────────────────────────
// 중복 제거 (Jaccard + 토큰 정규화)
// ─────────────────────────────────────────────────────────────

function tokens(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(
      (t) =>
        t.length > 1 &&
        !['치과', '추천', '잘하는', '곳', '치료', '병원', '평택', '평택시'].includes(
          t,
        ),
    );
}

function jaccard(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

// ─────────────────────────────────────────────────────────────
// 타깃 분포 — 핵심 지역 더 많이, 위성 지역 적당히
// ─────────────────────────────────────────────────────────────

const PER_COMBO_TARGET = {
  pyeongtaek: 4,
  godeok: 4,
  'godeok-intl': 4,
  dongsak: 2,
  seojeong: 2,
  songtan: 2,
  jije: 2,
  anjung: 2,
  cheongbuk: 2,
  segyo: 2,
};

// ─────────────────────────────────────────────────────────────
// 메인
// ─────────────────────────────────────────────────────────────

function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const targetArgIdx = argv.findIndex((a) => a === '--target');
  const target =
    targetArgIdx !== -1 && argv[targetArgIdx + 1]
      ? parseInt(argv[targetArgIdx + 1], 10)
      : null;

  if (!fs.existsSync(RESEARCH_FILE)) {
    console.error(`[error] ${RESEARCH_FILE} 없음. keyword-research.mjs 먼저 실행`);
    process.exit(1);
  }
  const research = JSON.parse(fs.readFileSync(RESEARCH_FILE, 'utf-8'));

  // 기존 파일럿 보존: 이미 발행된 슬러그는 지키고 확장만 추가
  const existingArticles = fs.existsSync(ARTICLES_FILE)
    ? JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf-8'))
    : null;
  const existingEntries = existingArticles?.articles ?? [];

  // 기존 키워드 토큰셋 (중복 방지용)
  const existingTokenSets = existingEntries.map((e) => new Set(tokens(e.keyword)));

  // 리전/치료 combo별 순서 카운터 (기존 슬러그 번호 이어받기)
  const counterByCombo = new Map();
  for (const e of existingEntries) {
    const k = `${e.regionSlug}|${e.treatment}`;
    const m = e.slug?.match(/-(\d{3})$/);
    const n = m ? parseInt(m[1], 10) : 0;
    const prev = counterByCombo.get(k) ?? 0;
    if (n > prev) counterByCombo.set(k, n);
  }

  const picked = []; // 새로 추가되는 슬러그
  const stats = {
    considered: 0,
    excluded_region: 0,
    excluded_pattern: 0,
    excluded_short: 0,
    excluded_nocontext: 0,
    excluded_duplicate: 0,
    excluded_target_full: 0,
  };

  const perComboPicked = new Map(); // comboKey → []

  // 각 리서치 결과 순회
  for (const r of research.results) {
    const comboKey = `${r.regionSlug}|${r.treatment}`;
    const cap =
      target != null
        ? Math.max(1, Math.ceil(target / 70))
        : PER_COMBO_TARGET[r.regionSlug] ?? 2;
    const already = perComboPicked.get(comboKey) ?? [];
    if (already.length >= cap) continue;

    // longTail 후보를 순회하며 필터·중복 체크
    for (const rawKw of r.longTailKeywords ?? []) {
      stats.considered++;
      const kw = rawKw.trim();
      const reason = isExcluded(kw);
      if (reason) {
        if (reason.startsWith('타지역')) stats.excluded_region++;
        else if (reason.startsWith('패턴')) stats.excluded_pattern++;
        else stats.excluded_short++;
        continue;
      }
      if (!hasRegionContext(kw, r.region)) {
        stats.excluded_nocontext++;
        continue;
      }

      // 기존·신규 중복 체크
      const ktoks = tokens(kw);
      let dup = false;
      for (const ts of existingTokenSets) {
        if (jaccard(ktoks, [...ts]) >= 0.65) {
          dup = true;
          break;
        }
      }
      if (dup) {
        stats.excluded_duplicate++;
        continue;
      }
      for (const p of already) {
        if (jaccard(ktoks, tokens(p.keyword)) >= 0.55) {
          dup = true;
          break;
        }
      }
      if (dup) {
        stats.excluded_duplicate++;
        continue;
      }

      // 앵글 부여 + 앵글 다양성 완화 (core 지역은 combo 당 동일 앵글 3개까지 허용)
      const angle = assignAngle(kw, r.treatment);
      const isCore =
        r.regionSlug === 'pyeongtaek' ||
        r.regionSlug === 'godeok' ||
        r.regionSlug === 'godeok-intl';
      const sameAngleCap = isCore ? 3 : 2;
      const angleCountInCombo = already.filter((p) => p.angle === angle).length;
      if (angleCountInCombo >= sameAngleCap) continue;

      // 슬러그 번호
      const prev = counterByCombo.get(comboKey) ?? 0;
      const n = prev + 1;
      counterByCombo.set(comboKey, n);
      let fragment = slugFragment(kw, angle);
      // 치료 슬러그와 fragment 중복 제거 (e.g. denture + denture-insurance → insurance)
      const tslug = r.treatment;
      if (fragment === tslug) {
        fragment = angle.replace(/-/g, '');
      } else if (fragment.startsWith(`${tslug}-`)) {
        fragment = fragment.slice(tslug.length + 1);
      }
      const slug = `${r.regionSlug}-${r.treatment}-${fragment}-${String(n).padStart(3, '0')}`;

      const entry = {
        slug,
        keyword: kw,
        region: r.region,
        regionSlug: r.regionSlug,
        treatment: r.treatment,
        angle,
        userIntent: r.userIntent,
      };
      picked.push(entry);
      already.push(entry);
      perComboPicked.set(comboKey, already);

      if (already.length >= cap) break;
    }

    if (target != null && existingEntries.length + picked.length >= target) break;
  }

  // 최종 인덱스 조립 (기존 파일럿 + 신규)
  const finalEntries = [
    ...existingEntries.map((e) => ({
      slug: e.slug,
      keyword: e.keyword,
      region: e.region,
      regionSlug: e.regionSlug,
      treatment: e.treatment,
      angle: e.angle,
      userIntent: `(pilot) ${e.slug}`,
    })),
    ...picked,
  ];

  const output = {
    generatedAt: new Date().toISOString(),
    count: finalEntries.length,
    newlyAdded: picked.length,
    preservedPilots: existingEntries.length,
    entries: finalEntries,
  };

  // 리포트
  console.log('═'.repeat(70));
  console.log('Phase B 인덱스 빌더 결과');
  console.log('═'.repeat(70));
  console.log(`기존 파일럿 보존: ${existingEntries.length}`);
  console.log(`신규 추가:        ${picked.length}`);
  console.log(`총합:            ${finalEntries.length}`);
  console.log();
  console.log('필터 통계:');
  console.log(`  검토된 후보:      ${stats.considered}`);
  console.log(`  타지역명 제외:    ${stats.excluded_region}`);
  console.log(`  금칙 패턴 제외:   ${stats.excluded_pattern}`);
  console.log(`  길이 부적합:      ${stats.excluded_short}`);
  console.log(`  지역 맥락 없음:   ${stats.excluded_nocontext}`);
  console.log(`  중복:            ${stats.excluded_duplicate}`);

  // 리전별 분포
  console.log('\n리전 × 치료 분포 (신규만):');
  const regions = [...new Set(picked.map((e) => e.regionSlug))];
  const treatments = [...new Set(picked.map((e) => e.treatment))];
  const pad = (s, n) => String(s).padEnd(n);
  process.stdout.write(pad('region', 14));
  for (const t of treatments) process.stdout.write(pad(t.slice(0, 10), 12));
  console.log();
  for (const rg of regions) {
    process.stdout.write(pad(rg, 14));
    for (const t of treatments) {
      const n = picked.filter(
        (e) => e.regionSlug === rg && e.treatment === t,
      ).length;
      process.stdout.write(pad(String(n), 12));
    }
    console.log();
  }

  // 앵글 분포
  const angleCount = {};
  for (const e of picked) angleCount[e.angle] = (angleCount[e.angle] ?? 0) + 1;
  console.log('\n앵글 분포 (신규):');
  for (const [k, v] of Object.entries(angleCount)) {
    console.log(`  ${k.padEnd(24)}${v}`);
  }

  // 샘플 15개
  console.log('\n신규 슬러그 샘플 (처음 15개):');
  for (const e of picked.slice(0, 15)) {
    console.log(`  ${e.slug}`);
    console.log(`    → ${e.keyword}`);
  }
  if (picked.length > 15) console.log(`  ... 외 ${picked.length - 15}개`);

  if (dryRun) {
    console.log('\n[--dry-run] 파일 저장 건너뜀.');
    return;
  }

  fs.writeFileSync(INDEX_FILE, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`\n저장: ${INDEX_FILE}`);
}

main();
