// Strict whitelist validator for insight articles.
// Exits non-zero if validation fails. Usage:
//   node scripts/validate-insights-article.mjs <file.json>
// or import { validateArticle } from this module.

import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_TOP_LEVEL = new Set([
  'slug',
  'keyword',
  'region',
  'regionSlug',
  'treatment',
  'angle',
  'title',
  'subtitle',
  'tldr',
  'heroDescription',
  'sections',
  'conclusion',
  'faqs',
  'sources',
  'publishedAt',
  'updatedAt',
]);

const REQUIRED_STRINGS = [
  'slug',
  'keyword',
  'region',
  'regionSlug',
  'treatment',
  'angle',
  'title',
  'subtitle',
  'tldr',
  'heroDescription',
  'conclusion',
];

const ALLOWED_REGION_SLUGS = new Set([
  'godeok',
  'godeok-intl',
  'dongsak',
  'seojeong',
  'songtan',
  'jije',
  'anjung',
  'cheongbuk',
  'segyo',
  'pyeongtaek',
]);

const ALLOWED_TREATMENTS = new Set([
  'implant',
  'denture',
  'cavity-treatment',
  'wisdom-tooth',
  'whitening',
  'gum-care',
  'tmj',
  'crown',
  'full-implant',
  'general',
]);

const ALLOWED_ANGLES = new Set([
  'digital-guide',
  'integrated-specialist',
  'natural-preservation',
  'insurance',
]);

// 의료광고법 금칙 — 본문 내 직접 금지
// 2026-10부터 병원명·대표원장 이름·주소는 본문에 사실로 적는다(금지 해제).
const FORBIDDEN_PATTERNS = [
  { re: /031[-\s]?611[-\s]?3222/, why: '병원 전화번호 언급 금지' },
  {
    re: /(최고|최상급|최우수|1위|넘버원|넘버\s?1|국내\s?최초|세계\s?최초|완치|효과\s?보장|성공\s?보장|100\s?%|100퍼센트|절대\s?안전|반드시\s?성공)/,
    why: '의료광고법상 단정·최상급 표현 금지',
  },
  {
    // 지역명을 단독 단어로만 매칭 (예: "노화성"의 "화성" 같은 부분일치 방지).
    // 뒤에 한글이 오면 compound일 가능성이 높음 (화성구/부산포/서울랜드 같은 고유명은 제외)
    re: /(?<![가-힣])(오산|용인|수원|화성|천안|아산|안성|서울|부산|대전)(?![가-힣])/,
    why: '평택시 외 타 지역명 본문 노출 금지 (의료광고법 권역 이슈)',
  },
  {
    re: /(저희\s?치과|저희\s?병원|본원|우리\s?치과)/,
    why: '1인칭 자사 호칭 금지 (3인칭 중립 톤 유지)',
  },
];

export function validateArticle(obj, { filename = '' } = {}) {
  const errors = [];
  const warnings = [];

  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    errors.push('root: must be a plain object');
    return { ok: false, errors, warnings };
  }

  // 1. Whitelist check
  for (const key of Object.keys(obj)) {
    if (!ALLOWED_TOP_LEVEL.has(key)) {
      errors.push(`top-level: unexpected field "${key}"`);
    }
  }

  // 2. Required string fields
  for (const k of REQUIRED_STRINGS) {
    if (typeof obj[k] !== 'string' || obj[k].trim().length === 0) {
      errors.push(`top-level: "${k}" missing or empty`);
    }
  }

  // 3. Enum checks
  if (obj.regionSlug && !ALLOWED_REGION_SLUGS.has(obj.regionSlug)) {
    errors.push(`regionSlug: "${obj.regionSlug}" not in allowed set`);
  }
  if (obj.treatment && !ALLOWED_TREATMENTS.has(obj.treatment)) {
    errors.push(`treatment: "${obj.treatment}" not in allowed set`);
  }
  if (obj.angle && !ALLOWED_ANGLES.has(obj.angle)) {
    errors.push(`angle: "${obj.angle}" not in allowed set`);
  }

  // 4. Length targets
  if (obj.tldr && (obj.tldr.length < 60 || obj.tldr.length > 260)) {
    warnings.push(
      `tldr: length ${obj.tldr.length} outside recommended 60-260`,
    );
  }
  if (obj.heroDescription) {
    if (obj.heroDescription.length < 180 || obj.heroDescription.length > 360) {
      warnings.push(
        `heroDescription: length ${obj.heroDescription.length} outside 180-360`,
      );
    }
  }
  if (obj.conclusion) {
    if (obj.conclusion.length < 200 || obj.conclusion.length > 500) {
      warnings.push(
        `conclusion: length ${obj.conclusion.length} outside 200-500`,
      );
    }
  }

  // 5. Sections
  if (!Array.isArray(obj.sections) || obj.sections.length < 4) {
    errors.push(
      `sections: must be array of >= 4 items (got ${obj.sections?.length ?? 0})`,
    );
  } else {
    obj.sections.forEach((s, i) => {
      const extra = Object.keys(s).filter(
        (k) => k !== 'heading' && k !== 'paragraphs' && k !== 'table',
      );
      if (extra.length > 0) {
        errors.push(
          `sections[${i}]: unexpected field(s) ${extra.join(', ')}`,
        );
      }
      if (s.table !== undefined) {
        const t = s.table;
        const headers = Array.isArray(t?.headers) ? t.headers : [];
        const rows = Array.isArray(t?.rows) ? t.rows : [];
        if (typeof t?.caption !== 'string' || t.caption.trim().length === 0) {
          errors.push(`sections[${i}].table.caption missing`);
        }
        if (headers.length < 2 || headers.length > 4) {
          errors.push(
            `sections[${i}].table.headers must have 2-4 columns (got ${headers.length})`,
          );
        }
        if (rows.length < 2) {
          errors.push(`sections[${i}].table.rows must have >= 2 rows`);
        }
        rows.forEach((r, ri) => {
          if (
            !Array.isArray(r) ||
            r.length !== headers.length ||
            r.some((c) => typeof c !== 'string' || c.trim().length === 0)
          ) {
            errors.push(
              `sections[${i}].table.rows[${ri}] must be ${headers.length} non-empty strings`,
            );
          }
        });
      }
      if (typeof s.heading !== 'string' || s.heading.trim().length === 0) {
        errors.push(`sections[${i}].heading missing`);
      }
      if (!Array.isArray(s.paragraphs) || s.paragraphs.length < 2) {
        errors.push(
          `sections[${i}].paragraphs must be array of >= 2 strings`,
        );
      } else {
        s.paragraphs.forEach((p, j) => {
          if (typeof p !== 'string') {
            errors.push(`sections[${i}].paragraphs[${j}] must be string`);
          } else if (p.length < 80) {
            warnings.push(
              `sections[${i}].paragraphs[${j}] short (${p.length} chars)`,
            );
          }
        });
      }
    });
  }

  // 6. FAQs (2-tier)
  if (!Array.isArray(obj.faqs) || obj.faqs.length < 4) {
    errors.push(
      `faqs: must be array of >= 4 items (got ${obj.faqs?.length ?? 0})`,
    );
  } else {
    obj.faqs.forEach((f, i) => {
      const extra = Object.keys(f).filter(
        (k) =>
          k !== 'question' && k !== 'answerShort' && k !== 'answerDetail',
      );
      if (extra.length > 0) {
        errors.push(`faqs[${i}]: unexpected field(s) ${extra.join(', ')}`);
      }
      if (typeof f.question !== 'string' || f.question.trim().length === 0) {
        errors.push(`faqs[${i}].question missing`);
      }
      if (
        typeof f.answerShort !== 'string' ||
        f.answerShort.trim().length < 20 ||
        f.answerShort.length > 200
      ) {
        errors.push(
          `faqs[${i}].answerShort must be 20-200 chars (got ${f.answerShort?.length ?? 0})`,
        );
      }
      if (
        typeof f.answerDetail !== 'string' ||
        f.answerDetail.trim().length < 100
      ) {
        errors.push(
          `faqs[${i}].answerDetail must be >= 100 chars (got ${f.answerDetail?.length ?? 0})`,
        );
      }
    });
  }

  // 6-1. Sources (optional, 참고 문헌)
  if (obj.sources !== undefined) {
    if (!Array.isArray(obj.sources)) {
      errors.push('sources: must be an array');
    } else {
      obj.sources.forEach((s, i) => {
        if (
          typeof s?.title !== 'string' ||
          s.title.trim().length < 5 ||
          typeof s?.url !== 'string' ||
          !/^https?:\/\/\S+$/.test(s.url)
        ) {
          errors.push(`sources[${i}] must be { title, url(http) }`);
        }
      });
    }
  }

  // 7. Slug filename match
  if (filename) {
    const fname = path.basename(filename, '.json');
    if (obj.slug && obj.slug !== fname) {
      errors.push(`slug "${obj.slug}" does not match filename "${fname}"`);
    }
  }

  // 8. 의료광고법 금칙어 (본문 전체 스캔)
  const scannable = [
    obj.title,
    obj.subtitle,
    obj.tldr,
    obj.heroDescription,
    obj.conclusion,
    ...(Array.isArray(obj.sections)
      ? obj.sections.flatMap((s) => [
          s.heading,
          ...(s.paragraphs ?? []),
          ...(s.table
            ? [
                s.table.caption,
                s.table.note,
                ...(s.table.headers ?? []),
                ...(s.table.rows ?? []).flat(),
              ]
            : []),
        ])
      : []),
    ...(Array.isArray(obj.faqs)
      ? obj.faqs.flatMap((f) => [f.question, f.answerShort, f.answerDetail])
      : []),
  ]
    .filter((x) => typeof x === 'string')
    .join('\n');

  for (const { re, why } of FORBIDDEN_PATTERNS) {
    const m = scannable.match(re);
    if (m) {
      errors.push(`forbidden phrase "${m[0]}" — ${why}`);
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

// CLI mode
if (import.meta.url === `file://${process.argv[1]}`) {
  const file = process.argv[2];
  if (!file) {
    console.error(
      'Usage: node scripts/validate-insights-article.mjs <file.json>',
    );
    process.exit(2);
  }
  const raw = fs.readFileSync(file, 'utf-8');
  let obj;
  try {
    obj = JSON.parse(raw);
  } catch (e) {
    console.error(`parse error: ${e.message}`);
    process.exit(2);
  }
  const result = validateArticle(obj, { filename: file });
  if (result.warnings.length) {
    console.log(`[warn] ${file}`);
    for (const w of result.warnings) console.log(`  - ${w}`);
  }
  if (!result.ok) {
    console.error(`[FAIL] ${file}`);
    for (const e of result.errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`[ok] ${file}`);
}
