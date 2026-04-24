// Keyword research for 평택 고덕퍼스트치과 insights.
// OpenAI Responses API + web_search_preview 도구로 네이버/구글 상위 결과를 크롤링하여
// longTailKeywords, topKeywords, titlePatterns, commonPhrases, competitorUrls 추출.
//
// 실행:
//   node --env-file=.env.local scripts/keyword-research.mjs
//
// 산출물:
//   data/keyword-research.json

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const MODELS = ['gpt-5.4-mini', 'gpt-5-mini', 'gpt-4o-mini'];
const CONCURRENCY = Number(process.env.KR_CONCURRENCY || 4);
const OUT_FILE = path.join(ROOT, 'data', 'keyword-research.json');
const PARTIAL_FILE = path.join(ROOT, 'data', 'keyword-research.partial.json');

// 지역별 검색 쿼리 표기 — 넓은 단위(평택)와 좁은 단위(고덕동 등) 혼합
const REGIONS = [
  { slug: 'pyeongtaek',  label: '평택',           prefix: '평택' },
  { slug: 'godeok',      label: '고덕동',         prefix: '고덕동' },
  { slug: 'godeok-intl', label: '고덕국제신도시', prefix: '고덕국제신도시' },
  { slug: 'dongsak',     label: '동삭동',         prefix: '평택 동삭동' },
  { slug: 'seojeong',    label: '서정동',         prefix: '평택 서정동' },
  { slug: 'songtan',     label: '송탄',           prefix: '평택 송탄' },
  { slug: 'jije',        label: '지제역',         prefix: '평택 지제역' },
  { slug: 'anjung',      label: '안중읍',         prefix: '평택 안중' },
  { slug: 'cheongbuk',   label: '청북읍',         prefix: '평택 청북' },
  { slug: 'segyo',       label: '세교동',         prefix: '평택 세교' },
];

const TREATMENTS = [
  { slug: 'implant',          phrase: '임플란트 추천',       label: '임플란트' },
  { slug: 'denture',          phrase: '틀니',                 label: '틀니' },
  { slug: 'cavity-treatment', phrase: '충치 신경치료',       label: '충치·신경치료' },
  { slug: 'wisdom-tooth',     phrase: '사랑니 발치',         label: '사랑니 발치' },
  { slug: 'whitening',        phrase: '치아 미백',           label: '치아 미백' },
  { slug: 'gum-care',         phrase: '잇몸치료 스케일링',   label: '잇몸치료·스케일링' },
  { slug: 'tmj',              phrase: '턱관절 치료',         label: '턱관절 치료' },
];

function buildQueries() {
  const all = [];
  for (const r of REGIONS) {
    for (const t of TREATMENTS) {
      all.push({
        query: `${r.prefix} ${t.phrase}`.trim(),
        region: r.label,
        regionSlug: r.slug,
        treatment: t.slug,
        treatmentLabel: t.label,
      });
    }
  }
  return all;
}

const PROMPT_TEMPLATE = ({ query, region, treatment, treatmentLabel }) => `
당신은 한국 치과 지역 SEO 리서처입니다.
구글과 네이버 웹 검색을 사용해 아래 쿼리의 상위 결과들을 조사하고, 지정된 JSON 스키마만 출력하세요.

## 조사 쿼리
"${query}"

## 메타
- region: ${region}
- treatment: ${treatment} (${treatmentLabel})

## 수행 절차
1. web_search_preview 툴로 "${query}"를 구글/네이버 관점에서 검색.
2. 상위 결과 8~10개의 페이지 제목(title), 메타 설명, 본문 발췌를 분석.
3. 해당 키워드 생태계에서 반복되는 키워드·문구·타이틀 패턴 추출.
4. 환자(검색자)의 실제 검색 의도 1문장 요약.

## 출력 JSON 스키마 (이것만, 다른 텍스트 금지)
{
  "query": "${query}",
  "region": "${region}",
  "regionSlug": "",
  "treatment": "${treatment}",
  "topKeywords": ["...", "..."],          // 경쟁 상위 페이지에서 가장 자주 등장하는 키워드 10개
  "longTailKeywords": ["...", "..."],     // 3~5단어 롱테일 키워드 10~15개, 지역명 포함 우선
  "titlePatterns": ["...", "..."],         // 경쟁 페이지 title에 반복되는 구조/패턴 5개
  "commonPhrases": ["...", "..."],         // 본문에서 자주 보이는 마케팅/의학 문구 5개
  "userIntent": "...",                     // 한 문장으로 검색 의도
  "competitorUrls": ["https://...", "..."] // 상위 경쟁 페이지 URL 5개
}

## 제약
- JSON 외 텍스트 절대 금지 (주석, 설명, 마크다운 코드펜스 포함 금지).
- longTailKeywords는 실제로 사람들이 검색할 법한 구체적 조합만. 너무 일반적("임플란트 비용")보다는 지역·치료·상황이 결합된 것 선호.
- 광고·홍보 문구가 아닌 실제 검색어 형태로 추출.
- regionSlug는 빈 문자열로 두면 호출부에서 채움.
`.trim();

function parseJsonFromOutput(text) {
  if (!text) return null;
  const cleaned = text
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    // 응답 내 첫 번째 JSON 오브젝트 추출 시도
    const m = cleaned.match(/\{[\s\S]*\}/);
    if (m) {
      try { return JSON.parse(m[0]); } catch { /* fallthrough */ }
    }
  }
  return null;
}

async function researchOne(client, q) {
  let lastErr = null;
  for (const model of MODELS) {
    try {
      const resp = await client.responses.create({
        model,
        tools: [{ type: 'web_search_preview' }],
        input: PROMPT_TEMPLATE(q),
      });
      const text = resp.output_text ?? '';
      const json = parseJsonFromOutput(text);
      if (!json) {
        lastErr = new Error('parse failed');
        continue;
      }
      json.regionSlug = q.regionSlug;
      json._model = model;
      return json;
    } catch (e) {
      lastErr = e;
      const msg = String(e?.message || e);
      // 모델 미지원/404 등 폴백 가능 에러인지 판단
      if (/404|not.?found|invalid|unsupported|does not exist|model_not_found/i.test(msg)) {
        continue;
      }
      throw e;
    }
  }
  throw lastErr ?? new Error('all models failed');
}

async function runPool(items, worker, concurrency, onProgress) {
  const results = new Array(items.length);
  let idx = 0;
  const errors = [];
  async function pull() {
    while (true) {
      const my = idx++;
      if (my >= items.length) return;
      try {
        const v = await worker(items[my], my);
        results[my] = v;
      } catch (e) {
        const msg = String(e?.message || e);
        errors.push({ index: my, item: items[my], error: msg });
        results[my] = { __error: msg, __q: items[my] };
      }
      if (onProgress) onProgress(results, errors);
    }
  }
  const workers = Array.from({ length: Math.max(1, concurrency) }, () => pull());
  await Promise.all(workers);
  return { results, errors };
}

function savePartial(results) {
  fs.mkdirSync(path.dirname(PARTIAL_FILE), { recursive: true });
  fs.writeFileSync(
    PARTIAL_FILE,
    JSON.stringify(
      { generatedAt: new Date().toISOString(), results: results.filter(Boolean) },
      null,
      2,
    ),
    'utf-8',
  );
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY 미설정. node --env-file=.env.local ...');
    process.exit(2);
  }
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  let queries = buildQueries();

  // --limit N 지원 (스모크 테스트용)
  const limitArg = process.argv.findIndex((a) => a === '--limit');
  if (limitArg !== -1 && process.argv[limitArg + 1]) {
    const n = parseInt(process.argv[limitArg + 1], 10);
    if (Number.isFinite(n) && n > 0) {
      queries = queries.slice(0, n);
      console.log(`[keyword-research] --limit ${n} 적용`);
    }
  }
  const started = Date.now();
  console.log(`[keyword-research] queries=${queries.length} concurrency=${CONCURRENCY}`);
  console.log(`[keyword-research] models: ${MODELS.join(' → ')}`);

  let completed = 0;
  const { results, errors } = await runPool(
    queries,
    async (q) => {
      const r = await researchOne(client, q);
      completed++;
      process.stdout.write(
        `[${completed}/${queries.length}] ${q.regionSlug}/${q.treatment} (${r._model})\n`,
      );
      return r;
    },
    CONCURRENCY,
    (partialResults) => savePartial(partialResults),
  );

  const success = results.filter((r) => r && !r.__error);
  const out = {
    generatedAt: new Date().toISOString(),
    elapsedSec: Math.round((Date.now() - started) / 1000),
    count: success.length,
    failed: errors.length,
    queries: queries.length,
    modelChain: MODELS,
    results: success,
    errors,
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2), 'utf-8');

  // partial 정리
  if (fs.existsSync(PARTIAL_FILE)) fs.unlinkSync(PARTIAL_FILE);

  console.log('─'.repeat(60));
  console.log(`완료: ${success.length}/${queries.length} 성공, ${errors.length} 실패`);
  console.log(`소요: ${out.elapsedSec}초`);
  console.log(`저장: ${OUT_FILE}`);
  if (errors.length > 0) {
    console.log('\n실패 쿼리:');
    for (const e of errors.slice(0, 10)) {
      console.log(`  - ${e.item.query} (${e.item.regionSlug}/${e.item.treatment}): ${e.error.slice(0, 120)}`);
    }
  }
}

main().catch((e) => {
  console.error('fatal:', e);
  process.exit(1);
});
