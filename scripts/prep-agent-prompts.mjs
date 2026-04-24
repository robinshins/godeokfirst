// 인덱스 엔트리마다 Claude Sonnet 4.6 에이전트에 줄 프롬프트 파일 생성.
//
// 입력:  data/insights-index.json
// 출력:  /tmp/goduk-prompts/{slug}.md
//        /tmp/goduk-prompts/index.json (슬러그 ↔ 메타 매핑)
//
// 실행:
//   node scripts/prep-agent-prompts.mjs            # 이미 발행된 것 건너뛰기
//   node scripts/prep-agent-prompts.mjs --all      # 전체 재생성
//   node scripts/prep-agent-prompts.mjs --only godeok-implant-cost-011,...

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const INDEX_FILE = path.join(ROOT, 'data', 'insights-index.json');
const ARTICLES_FILE = path.join(ROOT, 'data', 'insights-articles.json');
const OUT_DIR = '/tmp/goduk-prompts';

const TREATMENT_LABEL = {
  implant: '임플란트',
  denture: '틀니·전체 임플란트',
  'cavity-treatment': '충치·신경치료',
  'wisdom-tooth': '사랑니 발치',
  whitening: '치아 미백',
  'gum-care': '잇몸치료·스케일링',
  tmj: '턱관절 치료',
};

// 앵글별 콘텐츠 방향
const ANGLE_GUIDE = {
  'digital-guide': {
    description: '장비·기술·수술 과정 관점',
    points: [
      '관련 디지털 장비(3D CT, 구강 스캐너, CAD/CAM, 가이드 스탠트 등)의 역할을 설명',
      '전통 방식과의 비교 — 정확도·절개 범위·안전성·회복 속도',
      '해당 기술이 특히 유리한 케이스와 한계 케이스를 균형 있게 서술',
      '장비의 한계·부작용·비용 증가 등 단점도 함께 기술',
    ],
  },
  'integrated-specialist': {
    description: '포괄 진료·치과 선택 기준 관점',
    points: [
      '통합치의학과 전문의 제도(2017 도입, 보건복지부 인증) 개요',
      '단순 시술이 아닌 포괄적 진단(교합·치주·보철·인접치 고려)의 중요성',
      '환자가 객관적으로 확인할 수 있는 치과 선택 기준(자격·장비·사후관리 체계)',
      '전문의 유무만으로 결과가 결정되지 않음 — 케이스 적합성·환자 협조·사후관리가 동등하게 중요함을 환기',
    ],
  },
  'natural-preservation': {
    description: '자연치 보존·회복·관리 관점',
    points: [
      '자연치 보존의 장기적 이점(저작 효율·고유수용감각·주변 치아 보호)',
      '발치·수술의 기준, 그 전 단계 대안(신경치료·잇몸치료 등)',
      '치료 후 단계별 회복 타임라인과 주의사항',
      '정기 유지관리가 재발을 막는 데 중요한 이유',
    ],
  },
  insurance: {
    description: '건강보험·비용·제도 관점',
    points: [
      '해당 치료의 건강보험 급여·비급여 구분',
      '65세 이상·의료급여·차상위계층 등 대상자별 적용',
      '본인부담률과 총비용 구성 요소(재료비·수술비·보철비 등)',
      '비용 편차가 발생하는 이유(치료 복잡도·재료·추가 처치)와 합리적 비용 평가법',
    ],
  },
};

// 치료별 콘텐츠 범위
const TREATMENT_FOCUS = {
  implant: [
    '임플란트의 기본 구조(고정체·지대주·보철)',
    '수술 적응증·금기 케이스',
    '골이식·상악동 거상 등 부가 술식 개요',
    '치유 기간과 최종 보철까지의 타임라인',
    '사후관리(정기 점검, 위생, 야간 이갈이 등) 필요성',
  ],
  denture: [
    '총의치·부분틀니·임플란트 틀니(오버덴쳐)·All-on-4/6 비교',
    '심한 골 소실·당뇨·골다공증 등 주의가 필요한 환자군',
    '적응 기간과 초기 불편감',
    '유지관리(정기 재선·수리·복제)와 교체 시기',
    '건강보험 틀니 제도(7년 주기, 65세 이상) 언급',
  ],
  'cavity-treatment': [
    '충치 진행 단계(C1~C4)별 치료 옵션',
    '신경치료(근관치료) 적응증과 과정',
    '발치와 신경치료의 경계선',
    '치료 후 크라운·인레이 보철의 역할',
    '재근관치료·치근단 절제술 등 재치료 옵션',
  ],
  'wisdom-tooth': [
    '사랑니 유형(완전맹출·부분맹출·수직/수평/근심/원심 매복)',
    '발치 필요성 판단 기준과 예방적 발치 논의',
    '3D CT 진단의 역할(신경관·치근 형태 확인)',
    '발치 난이도 분류와 수술 시간 예상',
    '회복 과정·드라이소켓·합병증 조기신호',
  ],
  whitening: [
    '치아 변색 원인(외인성·내인성·조합형)',
    '오피스 미백·홈 미백·OTC 비교',
    '주요 오피스 미백 시스템(뷰티스·줌·오패시) 중립적 비교',
    '미백이 제한되는 경우(보철물·내인성 심한 변색·형성부전)',
    '민감도 관리·미백 후 색소 음식 제한 등 사후 관리',
  ],
  'gum-care': [
    '잇몸 질환 단계(치은염→치주염 경도/중등도/중증)',
    '스케일링(치은연상) vs 치주 스케일링(SRP, 치은연하) 차이',
    '루트플래닝·페리오클린 등 국소 항생제의 보조적 역할',
    '치주수술 종류(치은절제·치주판막·재생술) 개요',
    '유지치주치료(3~6개월 주기)의 장기 관리 의미',
    '전신질환(당뇨·심혈관)과의 연관',
  ],
  tmj: [
    '턱관절 장애의 주요 증상(통증·개구 제한·관절음)',
    '원인(이갈이·외상·교합 부조화·스트레스)',
    '진단 과정(임상검사·영상·교합 분석)',
    '치료 옵션(물리치료·약물·교합안정장치 스플린트)',
    '생활 습관 교정과 자가 관리법',
    '수술이 고려되는 매우 드문 케이스',
  ],
};

function regionHint(regionSlug, region) {
  if (regionSlug === 'pyeongtaek') {
    return `평택시 전반을 포괄. 본문에 "평택"을 2~3회 자연스럽게 삽입 (특정 동 중심 표현은 피하고 광역 톤).`;
  }
  if (regionSlug === 'godeok-intl') {
    return `"고덕국제신도시"(에듀타운 포함) 맥락. 젊은 가족·직장인 인구 비중 높음을 자연스럽게 시사.`;
  }
  if (regionSlug === 'godeok') {
    return `"고덕동" 맥락. 고덕 에듀타운·초중고 학군 주변을 자연스럽게 스침.`;
  }
  return `"${region}" 지역을 본문에 1~2회 자연 삽입. 평택시 소속 지역임을 암시(예: "평택 ${region}")해도 됨.`;
}

function buildPrompt(entry) {
  const tlabel = TREATMENT_LABEL[entry.treatment] ?? entry.treatment;
  const angle = ANGLE_GUIDE[entry.angle] ?? ANGLE_GUIDE['digital-guide'];
  const treatmentPoints = TREATMENT_FOCUS[entry.treatment] ?? [];
  return `당신은 고덕퍼스트치과(평택 고덕동 소재) 인사이트 블로그에 게재할 한국어 치과 의학정보 아티클 1개를 작성합니다. 이 글은 구글·네이버 검색엔진 + ChatGPT/Perplexity 같은 AI 답변창에 동시 노출되는 것을 목표로 합니다.

## 결과물 저장
Write 도구로 아래 경로에 JSON 파일을 저장 (디렉토리는 이미 존재):
**/tmp/goduk-insights/${entry.slug}.json**

## 메타 고정값 (JSON에 그대로 박아넣음, 수정 금지)
- slug: "${entry.slug}"
- keyword: "${entry.keyword}"
- region: "${entry.region}"
- regionSlug: "${entry.regionSlug}"
- treatment: "${entry.treatment}"
- angle: "${entry.angle}"
- publishedAt: "2026-04-24T00:00:00.000Z"
- updatedAt: "2026-04-24T00:00:00.000Z"

## 허용된 top-level 필드 (정확히 15개만, 다른 필드 금지)
slug, keyword, region, regionSlug, treatment, angle, title, subtitle, tldr, heroDescription, sections, conclusion, faqs, publishedAt, updatedAt

## 필드별 스펙
- **title** (35~60자, 한국어 질문형 권장): 글 핵심 질문을 제목으로. 예: "${entry.region} ${tlabel} ${entry.keyword.split(' ').slice(-1)[0]}, 무엇을 먼저 확인해야 하나요?"
- **subtitle** (25~60자): 글의 결론 한 줄.
- **tldr** (80~240자): 핵심 요약 박스. 3~4문장 직답 + 핵심 포인트 — AI 답변창 발췌 타깃.
- **heroDescription** (200~340자): 도입부 단락.
- **sections** (5~7개): 각 {heading(질문형 권장), paragraphs[2~4개, 각 150~350자]}. 키는 heading/paragraphs 2개만.
- **conclusion** (220~480자): 마무리 + 다음 단계 중립 안내.
- **faqs** (5~6개): 각 {question, answerShort(40~180자 직답), answerDetail(120~320자 보충)}. 키는 정확히 이 3개만.

## 금지 필드 (발견 시 merge 단계에서 reject)
top-level: body, content, content_blocks, hero, summary, intro, meta_description, metaDescription, target_keyword, keywords, faq, references, disclaimer, checklist, summary_points
sections 내부: content, text, body (반드시 paragraphs 배열)
faqs 내부: q, a, answer, answer_short, answer_detail, displayOrder

## 의료광고법 엄수 (제목·본문·FAQ 전 영역)
1. 자사 치과명 "고덕퍼스트" 언급 절대 금지.
2. 원장명 "이동현" 금지.
3. 병원 주소·건물명(고덕로 250, 에듀스카이)·전화번호 금지.
4. 1인칭 자사 호칭("저희/본원/우리 치과") 금지 → 3인칭 중립 ("일반적으로", "많은 치과에서는", "임상적으로").
5. 단정·최상급 표현 금지: "최고", "최상급", "1위", "넘버원", "100%", "완치", "효과 보장", "성공 보장", "절대 안전", "반드시 성공", "국내 최초".
6. 평택시 외 지역명 금지 (본문 노출): 용인, 수원, 오산, 화성, 천안, 아산, 안성, 서울, 부산, 대전, 강동. 단, "국내" "국내외" 같은 일반 표현은 허용.
7. 특정 병원의 시술 건수·사례·수치 단정 금지. 일반 통계는 "일반적으로 알려진~", "국내외 연구에서는~" 완곡 어법.
8. 효과 보장·전후 비교 암시 금지.
9. 개별 환자마다 다름을 본문 2~3회 환기.
10. 타 병원 비교·폄하 금지.
11. "잘하는 치과" 같은 키워드를 제목·본문에 그대로 답습하지 말 것 — 의학 정보 관점으로 리프레임 (예: "어떤 기준으로 ${tlabel} 치과를 평가할 수 있나요?").

## 이 아티클의 앵글
**${entry.angle}** — ${angle.description}

이 앵글에서 반드시 포함할 포인트:
${angle.points.map((p) => `- ${p}`).join('\n')}

## 치료 분야 (${entry.treatment}: ${tlabel}) 관련 포함 포인트
${treatmentPoints.map((p) => `- ${p}`).join('\n')}

## 타깃 키워드 & 지역 맥락
- 타깃 키워드: "${entry.keyword}"
- 지역 맥락: ${regionHint(entry.regionSlug, entry.region)}
- 검색 의도: ${entry.userIntent ?? '(미지정 — 키워드에서 자연스러운 검색자 의도를 추론)'}
- 지역명은 자연스럽게 1~3회만. 키워드 스터핑 금지.

## 글 품질 목표
- 총 한글 3000자 이상.
- 섹션 5~7개, 각 섹션 paragraphs 2~4개.
- FAQ 5~6개.
- 질문형 소제목 권장 (AI 답변창 픽업 최적화).
- 숫자 단계 열거(1단계/2단계/...) 또는 짧은 리스트가 본문 1~2개 섹션에 등장하면 유리.
- 흐름: 기초 이해 → 진단/치료 과정 → 주의사항 → 대안/회복 → 결론.

## 실행 절차
1. 스펙대로 JSON 객체 구성. 15개 top-level 키만 있는지 재확인.
2. Write 도구로 \`/tmp/goduk-insights/${entry.slug}.json\` 에 저장.
3. Bash로 즉시 자체 검증:
   \`\`\`
   node -e "const fs=require('fs'); const o=JSON.parse(fs.readFileSync('/tmp/goduk-insights/${entry.slug}.json','utf-8')); const allow=['slug','keyword','region','regionSlug','treatment','angle','title','subtitle','tldr','heroDescription','sections','conclusion','faqs','publishedAt','updatedAt']; const extra=Object.keys(o).filter(k=>!allow.includes(k)); console.log('extra:', extra); console.log('sec:', o.sections.length, 'faq:', o.faqs.length, 'tldr:', o.tldr.length, 'hero:', o.heroDescription.length, 'concl:', o.conclusion.length);"
   \`\`\`
4. 한 줄 완료 보고: "완료: ${entry.slug} | sections=N | faqs=M"`;
}

function main() {
  const argv = process.argv.slice(2);
  const all = argv.includes('--all');
  const onlyIdx = argv.findIndex((a) => a === '--only');
  const onlyList =
    onlyIdx !== -1 && argv[onlyIdx + 1] ? argv[onlyIdx + 1].split(',') : null;

  if (!fs.existsSync(INDEX_FILE)) {
    console.error(`[error] ${INDEX_FILE} 없음. 먼저 build-insights-index.mjs 실행`);
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));

  // 이미 발행된 슬러그 (articles.json 내) — 기본은 skip
  const existingSlugs = new Set();
  if (fs.existsSync(ARTICLES_FILE)) {
    const a = JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf-8'));
    for (const e of a.articles ?? []) existingSlugs.add(e.slug);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  // 출력 인덱스
  const outputIndex = [];

  let written = 0;
  let skipped = 0;
  for (const entry of index.entries) {
    if (onlyList && !onlyList.includes(entry.slug)) continue;
    if (!all && existingSlugs.has(entry.slug)) {
      skipped++;
      continue;
    }
    const prompt = buildPrompt(entry);
    fs.writeFileSync(path.join(OUT_DIR, `${entry.slug}.md`), prompt, 'utf-8');
    outputIndex.push({
      slug: entry.slug,
      keyword: entry.keyword,
      region: entry.region,
      regionSlug: entry.regionSlug,
      treatment: entry.treatment,
      angle: entry.angle,
      promptPath: path.join(OUT_DIR, `${entry.slug}.md`),
    });
    written++;
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify(
      { generatedAt: new Date().toISOString(), count: outputIndex.length, entries: outputIndex },
      null,
      2,
    ),
    'utf-8',
  );

  console.log(`쓴 프롬프트: ${written}`);
  console.log(`건너뜀(이미 발행됨): ${skipped}`);
  console.log(`프롬프트 인덱스: ${OUT_DIR}/index.json`);
}

main();
