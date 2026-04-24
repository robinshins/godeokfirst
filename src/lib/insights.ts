import fs from 'node:fs';
import path from 'node:path';

export type InsightRegionSlug =
  | 'godeok'
  | 'godeok-intl'
  | 'dongsak'
  | 'seojeong'
  | 'songtan'
  | 'jije'
  | 'anjung'
  | 'cheongbuk'
  | 'segyo'
  | 'pyeongtaek';

export type InsightTreatment =
  | 'implant'
  | 'denture'
  | 'cavity-treatment'
  | 'wisdom-tooth'
  | 'whitening'
  | 'gum-care'
  | 'tmj';

export type InsightAngle =
  | 'digital-guide'
  | 'integrated-specialist'
  | 'natural-preservation'
  | 'insurance';

export interface InsightFaq {
  question: string;
  answerShort: string;
  answerDetail: string;
}

export interface InsightSection {
  heading: string;
  paragraphs: string[];
}

export interface InsightArticle {
  slug: string;
  keyword: string;
  region: string;
  regionSlug: InsightRegionSlug;
  treatment: InsightTreatment;
  angle: InsightAngle;
  title: string;
  subtitle: string;
  tldr: string;
  heroDescription: string;
  sections: InsightSection[];
  conclusion: string;
  faqs: InsightFaq[];
  publishedAt: string;
  updatedAt: string;
}

const REGION_LABEL: Record<InsightRegionSlug, string> = {
  godeok: '고덕동',
  'godeok-intl': '고덕국제신도시',
  dongsak: '동삭동',
  seojeong: '서정동',
  songtan: '송탄',
  jije: '지제역',
  anjung: '안중읍',
  cheongbuk: '청북읍',
  segyo: '세교동',
  pyeongtaek: '평택',
};

const TREATMENT_LABEL: Record<InsightTreatment, string> = {
  implant: '임플란트',
  denture: '틀니·전체 임플란트',
  'cavity-treatment': '충치·신경치료',
  'wisdom-tooth': '사랑니 발치',
  whitening: '치아 미백',
  'gum-care': '잇몸치료·스케일링',
  tmj: '턱관절 치료',
};

export function regionLabel(slug: InsightRegionSlug): string {
  return REGION_LABEL[slug] ?? slug;
}

export function treatmentLabel(t: InsightTreatment): string {
  return TREATMENT_LABEL[t] ?? t;
}

let cached: InsightArticle[] | null = null;

export function loadAllInsights(): InsightArticle[] {
  if (cached) return cached;
  const file = path.join(process.cwd(), 'data', 'insights-articles.json');
  if (!fs.existsSync(file)) {
    cached = [];
    return cached;
  }
  const raw = fs.readFileSync(file, 'utf-8');
  const parsed = JSON.parse(raw);
  const entries = Array.isArray(parsed) ? parsed : parsed.articles;
  cached = entries as InsightArticle[];
  return cached;
}

export function getInsightBySlug(slug: string): InsightArticle | null {
  return loadAllInsights().find((a) => a.slug === slug) ?? null;
}

export function getRelatedInsights(
  article: InsightArticle,
  limit = 5,
): InsightArticle[] {
  const all = loadAllInsights().filter((a) => a.slug !== article.slug);
  const score = (a: InsightArticle) => {
    let s = 0;
    if (a.regionSlug === article.regionSlug) s += 3;
    if (a.treatment === article.treatment) s += 2;
    if (a.angle === article.angle) s += 1;
    return s;
  };
  return [...all].sort((a, b) => score(b) - score(a)).slice(0, limit);
}

export function groupInsights() {
  const all = loadAllInsights();
  const byRegion = new Map<InsightRegionSlug, InsightArticle[]>();
  const byTreatment = new Map<InsightTreatment, InsightArticle[]>();
  for (const a of all) {
    const r = byRegion.get(a.regionSlug) ?? [];
    r.push(a);
    byRegion.set(a.regionSlug, r);
    const t = byTreatment.get(a.treatment) ?? [];
    t.push(a);
    byTreatment.set(a.treatment, t);
  }
  return { byRegion, byTreatment };
}
