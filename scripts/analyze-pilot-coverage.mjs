// 파일럿 10개 슬러그와 실제 키워드 리서치 결과를 대조해 적중 여부/누락 키워드 리포트.
//
// 실행:
//   node scripts/analyze-pilot-coverage.mjs
//
// 입력:
//   data/keyword-research.json
//   data/insights-articles.json (또는 data/insights-index.json)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const RESEARCH = path.join(ROOT, 'data', 'keyword-research.json');
const ARTICLES = path.join(ROOT, 'data', 'insights-articles.json');
const INDEX = path.join(ROOT, 'data', 'insights-index.json');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function tokenize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 0);
}

function jaccard(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function bestMatch(pilotKeyword, pool) {
  const p = tokenize(pilotKeyword);
  let best = { score: 0, keyword: null };
  for (const k of pool) {
    const score = jaccard(p, tokenize(k));
    if (score > best.score) best = { score, keyword: k };
  }
  return best;
}

function main() {
  if (!fs.existsSync(RESEARCH)) {
    console.error(`[error] ${RESEARCH} 없음. 먼저 keyword-research.mjs 실행`);
    process.exit(1);
  }

  const research = readJson(RESEARCH);
  const articlesSrc = fs.existsSync(ARTICLES)
    ? readJson(ARTICLES)
    : fs.existsSync(INDEX)
      ? readJson(INDEX)
      : null;
  if (!articlesSrc) {
    console.error('[error] insights-articles.json / insights-index.json 없음');
    process.exit(1);
  }

  const pilots = articlesSrc.articles || articlesSrc.entries || [];

  // 리서치 결과를 region/treatment별로 인덱싱
  const byRT = new Map();
  for (const r of research.results) {
    const key = `${r.regionSlug}|${r.treatment}`;
    byRT.set(key, r);
  }

  console.log('═'.repeat(70));
  console.log('파일럿 10개 × 키워드 리서치 매칭 분석');
  console.log('═'.repeat(70));
  console.log();

  // 1. 각 파일럿 슬러그의 매칭 분석
  console.log('─'.repeat(70));
  console.log('1. 파일럿 슬러그별 실제 검색어 매칭');
  console.log('─'.repeat(70));

  const matchReport = [];
  for (const p of pilots) {
    const rtKey = `${p.regionSlug}|${p.treatment}`;
    const research = byRT.get(rtKey);
    if (!research) {
      matchReport.push({ slug: p.slug, status: 'NO_RESEARCH', pilotKeyword: p.keyword });
      continue;
    }
    const pool = [
      ...(research.longTailKeywords || []),
      ...(research.topKeywords || []),
    ];
    const best = bestMatch(p.keyword, pool);
    matchReport.push({
      slug: p.slug,
      pilotKeyword: p.keyword,
      bestMatch: best.keyword,
      score: best.score,
      status: best.score >= 0.4 ? 'STRONG' : best.score >= 0.2 ? 'WEAK' : 'MISS',
    });
  }

  for (const r of matchReport) {
    const badge =
      r.status === 'STRONG'
        ? '✓ 강'
        : r.status === 'WEAK'
          ? '△ 약'
          : r.status === 'NO_RESEARCH'
            ? '? 리서치없음'
            : '✗ 미적중';
    console.log(`\n${badge}  ${r.slug}`);
    console.log(`    파일럿: ${r.pilotKeyword}`);
    if (r.bestMatch) {
      console.log(`    최근접: ${r.bestMatch} (score=${r.score.toFixed(2)})`);
    }
  }

  const strong = matchReport.filter((r) => r.status === 'STRONG').length;
  const weak = matchReport.filter((r) => r.status === 'WEAK').length;
  const miss = matchReport.filter((r) => r.status === 'MISS').length;
  console.log(`\n요약: 강 ${strong} / 약 ${weak} / 미적중 ${miss} / 전체 ${matchReport.length}`);

  // 2. 파일럿이 놓친 고가치 longTail TOP 20
  console.log();
  console.log('─'.repeat(70));
  console.log('2. 파일럿이 다루지 않은 고가치 롱테일 (region/treatment 조합별 TOP 3)');
  console.log('─'.repeat(70));

  const pilotKeywords = new Set(pilots.map((p) => p.keyword));
  const pilotTokenSets = pilots.map((p) => new Set(tokenize(p.keyword)));

  function isSimilarToAnyPilot(kw) {
    const t = tokenize(kw);
    for (const ps of pilotTokenSets) {
      const a = new Set(t);
      let inter = 0;
      for (const x of a) if (ps.has(x)) inter++;
      const jac = inter / (a.size + ps.size - inter);
      if (jac >= 0.5) return true;
    }
    return false;
  }

  for (const r of research.results) {
    const uncovered = (r.longTailKeywords || [])
      .filter((k) => !pilotKeywords.has(k))
      .filter((k) => !isSimilarToAnyPilot(k))
      .slice(0, 3);
    if (uncovered.length === 0) continue;
    console.log(`\n[${r.regionSlug} · ${r.treatment}]`);
    for (const k of uncovered) {
      console.log(`  · ${k}`);
    }
  }

  // 3. 지역 × 치료 yield 테이블 (longTail 수)
  console.log();
  console.log('─'.repeat(70));
  console.log('3. 리서치 수확량 (longTail 개수, region × treatment)');
  console.log('─'.repeat(70));

  const regions = [...new Set(research.results.map((r) => r.regionSlug))];
  const treatments = [...new Set(research.results.map((r) => r.treatment))];

  // header
  const pad = (s, n) => String(s).padEnd(n);
  process.stdout.write(pad('region', 14));
  for (const t of treatments) process.stdout.write(pad(t.slice(0, 10), 12));
  console.log();

  for (const rg of regions) {
    process.stdout.write(pad(rg, 14));
    for (const t of treatments) {
      const r = byRT.get(`${rg}|${t}`);
      const n = r?.longTailKeywords?.length ?? 0;
      process.stdout.write(pad(String(n), 12));
    }
    console.log();
  }

  // 4. JSON 리포트도 저장
  const outFile = path.join(ROOT, 'data', 'pilot-coverage-report.json');
  fs.writeFileSync(
    outFile,
    JSON.stringify({ generatedAt: new Date().toISOString(), matchReport }, null, 2),
    'utf-8',
  );
  console.log();
  console.log(`상세 리포트 저장: ${outFile}`);
}

main();
