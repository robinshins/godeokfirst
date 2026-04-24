// 남은 슬러그 전체를 Anthropic API (claude-sonnet-4-6)로 병렬 생성.
// /tmp/goduk-prompts/*.md 파일을 그대로 프롬프트로 사용 (서브에이전트 지시문 부분만 제거).
//
// 실행:
//   node --env-file=.env.local scripts/generate-articles-api.mjs
//   node --env-file=.env.local scripts/generate-articles-api.mjs --concurrency 20
//   node --env-file=.env.local scripts/generate-articles-api.mjs --only slug1,slug2
//   node --env-file=.env.local scripts/generate-articles-api.mjs --all   # 이미 발행된 것도 덮어쓰기

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const PROMPTS_DIR = '/tmp/goduk-prompts';
const STAGING_DIR = '/tmp/goduk-insights';
const ARTICLES_FILE = path.join(ROOT, 'data', 'insights-articles.json');

const MODELS = ['claude-sonnet-4-6', 'claude-opus-4-7'];
const MAX_TOKENS = 16000;
const MAX_RETRIES_PER_SLUG = 3;

function parseArgs() {
  const argv = process.argv.slice(2);
  const get = (flag, def) => {
    const i = argv.indexOf(flag);
    return i !== -1 && argv[i + 1] ? argv[i + 1] : def;
  };
  return {
    concurrency: parseInt(get('--concurrency', '15'), 10),
    only: (get('--only', null) || '').split(',').filter(Boolean),
    all: argv.includes('--all'),
  };
}

// 프롬프트 파일에서 서브에이전트 전용 지시문(Write/Bash/저장 경로) 제거하고
// "JSON만 출력하라"는 지시로 대체.
function adaptPromptForApi(markdown, slug) {
  // "## 실행 절차" 섹션 제거 — API에서는 클라이언트가 저장
  let s = markdown.replace(/## 실행 절차[\s\S]*$/m, '').trim();
  // "## 결과물 저장" 섹션 제거 — Write 도구 언급이 있음
  s = s.replace(/## 결과물 저장[\s\S]*?(?=^## )/m, '');
  // API 출력 지시 추가
  s += `

## 출력 지시
JSON 오브젝트 **하나만** 응답하세요. 마크다운 코드펜스(\`\`\`) 금지, 설명·주석·전후 텍스트 금지.
응답 첫 문자는 "{" 이며 마지막 문자는 "}"입니다.
slug "${slug}"로 고정된 메타 값과 15개 허용 top-level 필드만 사용하세요.`;
  return s.trim();
}

function extractJsonObject(text) {
  if (!text) return null;
  let s = text
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();
  // 응답 중 첫 번째 balanced JSON 오브젝트 파싱
  const start = s.indexOf('{');
  if (start === -1) return null;
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start; i < s.length; i++) {
    const ch = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === '\\') esc = true;
      else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') inStr = true;
    else if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        const candidate = s.slice(start, i + 1);
        try {
          return JSON.parse(candidate);
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

async function generateOne(client, entry) {
  const mdFile = path.join(PROMPTS_DIR, `${entry.slug}.md`);
  if (!fs.existsSync(mdFile)) {
    throw new Error(`prompt file not found: ${mdFile}`);
  }
  const md = fs.readFileSync(mdFile, 'utf-8');
  const prompt = adaptPromptForApi(md, entry.slug);

  let lastErr = null;
  for (let attempt = 1; attempt <= MAX_RETRIES_PER_SLUG; attempt++) {
    for (const model of MODELS) {
      try {
        const resp = await client.messages.create({
          model,
          max_tokens: MAX_TOKENS,
          messages: [{ role: 'user', content: prompt }],
        });
        const text = resp.content?.[0]?.text ?? '';
        const json = extractJsonObject(text);
        if (!json) {
          lastErr = new Error('JSON parse failed');
          continue;
        }
        json._model = model;
        json._usage = resp.usage;
        return json;
      } catch (e) {
        lastErr = e;
        const msg = String(e?.message || e);
        // Rate limit → 짧게 대기 후 재시도 (같은 모델)
        if (/rate.?limit|429/i.test(msg)) {
          const waitMs = 2000 * attempt;
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }
        // 모델 미지원 → 다음 모델로 폴백
        if (/404|not.?found|invalid|model_not_found|does not exist/i.test(msg)) {
          continue;
        }
        // 기타 오류는 짧게 대기 후 같은 모델 재시도
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  }
  throw lastErr ?? new Error('all retries exhausted');
}

async function runPool(items, worker, concurrency, onProgress) {
  const results = new Array(items.length);
  const errors = [];
  let idx = 0;
  async function pull() {
    while (idx < items.length) {
      const my = idx++;
      try {
        const v = await worker(items[my]);
        results[my] = v;
      } catch (e) {
        const msg = String(e?.message || e);
        errors.push({ slug: items[my].slug, error: msg });
        results[my] = { __error: msg };
      }
      if (onProgress) onProgress(results, errors);
    }
  }
  const workers = Array.from({ length: Math.max(1, concurrency) }, () => pull());
  await Promise.all(workers);
  return { results, errors };
}

async function main() {
  const args = parseArgs();

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('[error] ANTHROPIC_API_KEY 미설정. node --env-file=.env.local ...');
    process.exit(2);
  }
  if (!fs.existsSync(PROMPTS_DIR)) {
    console.error(`[error] ${PROMPTS_DIR} 없음. prep-agent-prompts.mjs 먼저 실행`);
    process.exit(1);
  }

  // 대상 선정
  const pub = new Set(
    fs.existsSync(ARTICLES_FILE)
      ? (JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf-8')).articles ?? []).map(
          (a) => a.slug,
        )
      : [],
  );
  const promptsIdx = JSON.parse(
    fs.readFileSync(path.join(PROMPTS_DIR, 'index.json'), 'utf-8'),
  );
  let targets = promptsIdx.entries;
  if (args.only.length > 0) {
    targets = targets.filter((e) => args.only.includes(e.slug));
  } else if (!args.all) {
    targets = targets.filter((e) => !pub.has(e.slug));
  }
  if (targets.length === 0) {
    console.log('[done] 처리할 슬러그 없음');
    return;
  }

  fs.mkdirSync(STAGING_DIR, { recursive: true });

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  console.log(`[api-gen] targets=${targets.length} concurrency=${args.concurrency}`);
  console.log(`[api-gen] models: ${MODELS.join(' → ')}`);

  const started = Date.now();
  let completed = 0;
  const { errors } = await runPool(
    targets,
    async (entry) => {
      const json = await generateOne(client, entry);
      // 메타 필수 필드 덮어쓰기 — 슬러그·키워드 등은 인덱스 권위
      json.slug = entry.slug;
      json.keyword = entry.keyword;
      json.region = entry.region;
      json.regionSlug = entry.regionSlug;
      json.treatment = entry.treatment;
      json.angle = entry.angle;
      if (!json.publishedAt) json.publishedAt = '2026-04-24T00:00:00.000Z';
      if (!json.updatedAt) json.updatedAt = json.publishedAt;

      // 상태 필드 제거 (_model, _usage)
      const clean = { ...json };
      delete clean._model;
      delete clean._usage;

      const outFile = path.join(STAGING_DIR, `${entry.slug}.json`);
      fs.writeFileSync(outFile, JSON.stringify(clean, null, 2), 'utf-8');

      completed++;
      const elapsed = Math.round((Date.now() - started) / 1000);
      process.stdout.write(
        `[${completed}/${targets.length}] ${entry.slug} (${json._model}, ${elapsed}s)\n`,
      );
      return entry.slug;
    },
    args.concurrency,
  );

  const elapsed = Math.round((Date.now() - started) / 1000);
  console.log('─'.repeat(60));
  console.log(`완료: ${completed}/${targets.length} 성공, ${errors.length} 실패`);
  console.log(`소요: ${elapsed}초`);
  if (errors.length > 0) {
    console.log('\n실패 슬러그:');
    for (const e of errors.slice(0, 20)) {
      console.log(`  - ${e.slug}: ${e.error.slice(0, 200)}`);
    }
    process.exitCode = 1;
  }
  console.log(`\n다음: node scripts/merge-insights-articles.mjs`);
}

main().catch((e) => {
  console.error('fatal:', e);
  process.exit(1);
});
