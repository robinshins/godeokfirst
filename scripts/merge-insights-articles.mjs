// Merge validated insight articles from /tmp/goduk-insights/*.json into
// data/insights-articles.json. Only validated articles are merged; the rest
// are reported for regeneration.
//
// Usage: node scripts/merge-insights-articles.mjs
//
// Env:
//   STAGING_DIR (default: /tmp/goduk-insights)
//   OUT_FILE    (default: data/insights-articles.json)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateArticle } from './validate-insights-article.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const STAGING_DIR = process.env.STAGING_DIR || '/tmp/goduk-insights';
const OUT_FILE =
  process.env.OUT_FILE || path.join(ROOT, 'data', 'insights-articles.json');
const INDEX_FILE = path.join(ROOT, 'data', 'insights-index.json');

function readJson(file) {
  const raw = fs.readFileSync(file, 'utf-8');
  return JSON.parse(raw);
}

function loadExisting() {
  if (!fs.existsSync(OUT_FILE)) return [];
  try {
    const parsed = readJson(OUT_FILE);
    const entries = Array.isArray(parsed) ? parsed : parsed.articles;
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function main() {
  if (!fs.existsSync(STAGING_DIR)) {
    console.error(`[error] staging dir not found: ${STAGING_DIR}`);
    process.exit(1);
  }

  const index = fs.existsSync(INDEX_FILE) ? readJson(INDEX_FILE) : null;
  const indexMap = new Map();
  if (index?.entries) {
    for (const e of index.entries) indexMap.set(e.slug, e);
  }

  const files = fs
    .readdirSync(STAGING_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => path.join(STAGING_DIR, f));

  if (files.length === 0) {
    console.error(`[error] no .json files in ${STAGING_DIR}`);
    process.exit(1);
  }

  const existing = loadExisting();
  const existingMap = new Map(existing.map((a) => [a.slug, a]));

  const accepted = [];
  const rejected = [];
  const allWarnings = [];

  for (const file of files) {
    let obj;
    try {
      obj = readJson(file);
    } catch (e) {
      rejected.push({ file, errors: [`parse error: ${e.message}`] });
      continue;
    }

    // Auto-inject publishedAt/updatedAt if missing
    if (!obj.publishedAt) obj.publishedAt = new Date().toISOString();
    if (!obj.updatedAt) obj.updatedAt = obj.publishedAt;

    // Cross-check against index if present
    const idx = indexMap.get(obj.slug);
    if (idx) {
      const mismatches = [];
      if (idx.regionSlug !== obj.regionSlug)
        mismatches.push(
          `regionSlug index=${idx.regionSlug} article=${obj.regionSlug}`,
        );
      if (idx.treatment !== obj.treatment)
        mismatches.push(
          `treatment index=${idx.treatment} article=${obj.treatment}`,
        );
      if (idx.angle !== obj.angle)
        mismatches.push(`angle index=${idx.angle} article=${obj.angle}`);
      if (mismatches.length > 0) {
        rejected.push({ file, errors: mismatches });
        continue;
      }
    }

    const result = validateArticle(obj, { filename: file });
    if (result.warnings.length > 0) {
      allWarnings.push({ file, warnings: result.warnings });
    }
    if (!result.ok) {
      rejected.push({ file, errors: result.errors });
      continue;
    }
    accepted.push(obj);
  }

  // Merge: accepted overwrites existing; keep existing entries not in accepted
  const merged = new Map(existingMap);
  for (const a of accepted) merged.set(a.slug, a);

  const sorted = [...merged.values()].sort((a, b) =>
    a.slug.localeCompare(b.slug),
  );

  const output = {
    generatedAt: new Date().toISOString(),
    count: sorted.length,
    articles: sorted,
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2), 'utf-8');

  // Report
  console.log('─'.repeat(60));
  console.log(`staging : ${STAGING_DIR}`);
  console.log(`output  : ${OUT_FILE}`);
  console.log(
    `merged  : ${accepted.length} accepted / ${rejected.length} rejected / total ${sorted.length}`,
  );

  if (allWarnings.length > 0) {
    console.log('\n[warnings]');
    for (const w of allWarnings) {
      console.log(`  ${path.basename(w.file)}`);
      for (const msg of w.warnings) console.log(`    · ${msg}`);
    }
  }

  if (rejected.length > 0) {
    console.log('\n[rejected — regenerate these slugs]');
    for (const r of rejected) {
      console.log(`  ${path.basename(r.file)}`);
      for (const msg of r.errors) console.log(`    × ${msg}`);
    }
    process.exitCode = 1;
  }
}

main();
