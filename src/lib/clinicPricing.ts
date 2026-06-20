import type { InsightArticle, InsightTreatment } from './insights';

/**
 * 고덕퍼스트치과의원 비급여 진료비용 — 의료법 제45조(비급여 진료비용 고지)에 따른
 * 사실 기반 표준가 게시 데이터. 할인/이벤트 표현 없이 표준 금액만 표기한다.
 * 가격 변경 시 이 파일 한 곳만 수정하면 모든 비용 글에 반영된다.
 */

export interface PriceItem {
  name: string;
  /** 원 단위 정수. 범위가 있으면 priceText 사용 */
  price?: number;
  /** 금액을 직접 문자열로 표기해야 할 때 (예: 범위) */
  priceText?: string;
  note?: string;
  /** 부가세 별도 과세 항목 여부 (치과 의료비는 대부분 면세) */
  vatExtra?: boolean;
}

export interface PriceGroup {
  title: string;
  items: PriceItem[];
}

// ── 품목 카탈로그 (가격표 원본) ───────────────────────────────

const IMPLANT_FIXTURES: PriceItem[] = [
  { name: '포인트 SLA 임플란트', price: 550000, note: '식립 보증 2년 · 보철 보증 2년' },
  { name: '오스템 SA 임플란트', price: 790000, note: '식립 보증 3년 · 보철 보증 2년' },
  { name: '오스템 BA 임플란트', price: 890000, note: '식립 보증 5년 · 보철 보증 2년' },
];

const IMPLANT_EXTRAS: PriceItem[] = [
  { name: '단순 골이식', price: 200000 },
  { name: '복잡 골이식', price: 350000 },
  { name: '상악동 거상술 (치조정 접근)', price: 350000 },
  { name: '상악동 거상술 (측방 접근)', price: 1000000 },
  { name: '내비게이션 가이드 수술', price: 100000 },
  { name: '커스텀 어버트먼트', price: 100000 },
];

const IMPLANT_PROSTHETICS: PriceItem[] = [
  { name: '지르코니아 보철 (전치부)', price: 550000 },
  { name: '지르코니아 보철 (구치부)', price: 450000 },
  { name: 'PFM 보철', price: 450000 },
];

const CROWNS: PriceItem[] = [
  { name: '지르코니아 크라운 (전치부)', price: 550000, note: '보증 1년' },
  { name: '지르코니아 크라운 (구치부)', price: 450000, note: '보증 1년' },
  { name: 'PFM 크라운', price: 450000, note: '보증 1년' },
  { name: '라미네이트', price: 550000, vatExtra: true },
];

const DENTURES: PriceItem[] = [
  { name: '부분 틀니', price: 1500000 },
  { name: '전체 틀니', price: 1500000 },
  { name: '임시 틀니', price: 300000 },
  { name: '틀니 개상 (리베이스)', price: 300000 },
  { name: '틀니 수리', price: 100000 },
];

const CONSERVATIVE: PriceItem[] = [
  { name: '레진 충전', price: 100000 },
  { name: '레진 충전 (인접면)', price: 150000 },
  { name: '레진 충전 (치아 사이 공간)', price: 150000 },
  { name: '레진 충전 (치경부)', price: 60000, note: '보증 1년' },
  { name: '세라믹 인레이', price: 280000, note: '보증 1년' },
  { name: '레진 코어', price: 50000, note: '전치부 · 구치부' },
  { name: '포스트', price: 150000 },
];

const WHITENING: PriceItem[] = [
  { name: '전문가 치아 미백 (3회)', price: 400000, vatExtra: true },
];

const NON_COVERED_SCALING: PriceItem[] = [
  { name: '비보험 스케일링', price: 60000, note: '보험 적용 외 추가 스케일링' },
];

const TMJ_APPLIANCE: PriceItem[] = [
  { name: '이갈이 장치', price: 450000 },
];

// ── 대표 항목 (진료비 비교 방법 등 일반 글) ──────────────────

const REPRESENTATIVE: PriceItem[] = [
  { name: '오스템 SA 임플란트', price: 790000, note: '식립 보증 3년' },
  { name: '지르코니아 크라운 (구치부)', price: 450000, note: '보증 1년' },
  { name: '레진 충전', price: 100000 },
  { name: '세라믹 인레이', price: 280000, note: '보증 1년' },
  { name: '부분 / 전체 틀니', price: 1500000 },
  { name: '전문가 치아 미백 (3회)', price: 400000, vatExtra: true },
];

// ── 치료별 그룹 매핑 ─────────────────────────────────────────

const COVERED_NOTE: Partial<Record<InsightTreatment, string>> = {
  'wisdom-tooth':
    '사랑니 발치는 건강보험 급여 항목으로, 난이도(단순·복잡·완전매복)에 따라 보험 수가가 적용됩니다. 아래는 발치와 함께 진행될 수 있는 비급여 처치 안내입니다.',
  'cavity-treatment':
    '신경치료(근관치료) 자체는 건강보험 급여 항목입니다. 아래는 충치 충전재와 신경치료 후 보철 등 비급여 항목 안내입니다.',
  'gum-care':
    '만 19세 이상 연 1회 스케일링과 치주소파술·치근활택술 등 잇몸치료는 건강보험 급여 항목입니다. 아래는 보험 적용 외 항목 안내입니다.',
};

export function getPricingGroups(treatment: InsightTreatment): PriceGroup[] {
  switch (treatment) {
    case 'implant':
      return [
        { title: '임플란트 (픽스처 종류별)', items: IMPLANT_FIXTURES },
        { title: '부가 처치', items: IMPLANT_EXTRAS },
      ];
    case 'full-implant':
      return [
        { title: '임플란트 (픽스처 종류별)', items: IMPLANT_FIXTURES },
        { title: '임플란트 보철', items: IMPLANT_PROSTHETICS },
        { title: '틀니 (임플란트 틀니·전체 틀니 비교 시)', items: DENTURES },
      ];
    case 'denture':
      return [{ title: '틀니', items: DENTURES }];
    case 'crown':
      return [{ title: '크라운 · 보철', items: CROWNS }];
    case 'cavity-treatment':
      return [
        { title: '충치 충전 (보존 치료)', items: CONSERVATIVE },
        { title: '신경치료 후 크라운', items: CROWNS },
      ];
    case 'whitening':
      return [{ title: '치아 미백', items: WHITENING }];
    case 'gum-care':
      return [{ title: '비급여 항목', items: NON_COVERED_SCALING }];
    case 'tmj':
      return [{ title: '턱관절 · 이갈이', items: TMJ_APPLIANCE }];
    case 'general':
      return [{ title: '대표 진료비 (일부 항목)', items: REPRESENTATIVE }];
    case 'wisdom-tooth':
    default:
      return [];
  }
}

export function getCoveredNote(treatment: InsightTreatment): string | undefined {
  return COVERED_NOTE[treatment];
}

/** keyword에 비용·가격이 있거나 slug에 -cost가 포함된 비용 안내 글 */
export function isCostArticle(article: Pick<InsightArticle, 'keyword' | 'slug'>): boolean {
  return /비용|가격/.test(article.keyword) || /-cost/.test(article.slug);
}

export function formatPrice(item: PriceItem): string {
  if (item.priceText) return item.priceText;
  if (typeof item.price === 'number') return `${item.price.toLocaleString('ko-KR')}원`;
  return '상담 후 안내';
}

/** JSON-LD OfferCatalog용 평면 목록 (가격 있는 항목만) */
export function getClinicOffers(
  treatment: InsightTreatment,
): { name: string; price: number; vatExtra: boolean }[] {
  const seen = new Set<string>();
  const offers: { name: string; price: number; vatExtra: boolean }[] = [];
  for (const group of getPricingGroups(treatment)) {
    for (const item of group.items) {
      if (typeof item.price !== 'number') continue;
      if (seen.has(item.name)) continue;
      seen.add(item.name);
      offers.push({ name: item.name, price: item.price, vatExtra: !!item.vatExtra });
    }
  }
  return offers;
}
