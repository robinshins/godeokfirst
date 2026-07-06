import { Metadata } from 'next';
import Link from 'next/link';
import GNB from '@/components/home/GNB';
import FooterSection from '@/components/home/FooterSection';
import {
  loadAllInsights,
  regionLabel,
  treatmentLabel,
  groupInsights,
  type InsightRegionSlug,
  type InsightTreatment,
} from '@/lib/insights';

export const metadata: Metadata = {
  title: '치과 의학정보 | 고덕퍼스트치과 인사이트',
  description:
    '평택 고덕동 고덕퍼스트치과의원이 정리한 임플란트·크라운·사랑니·신경치료·잇몸·미백 등 치과 의학정보 모음. 대표원장 이동현(통합치의학과 전문의) 직접 작성·감수.',
  alternates: { canonical: 'https://gdfirstdent.co.kr/insights' },
  openGraph: {
    title: '치과 의학정보 | 고덕퍼스트치과 인사이트',
    description:
      '평택 고덕동 기반 치과 의학 정보 아카이브. 진료 분야별·지역별 상세 가이드.',
    url: 'https://gdfirstdent.co.kr/insights',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const REGION_ORDER: InsightRegionSlug[] = [
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
];

const TREATMENT_ORDER: InsightTreatment[] = [
  'implant',
  'full-implant',
  'denture',
  'crown',
  'cavity-treatment',
  'wisdom-tooth',
  'gum-care',
  'whitening',
  'tmj',
  'general',
];

export default function InsightsHubPage() {
  const all = loadAllInsights();
  const { byRegion, byTreatment } = groupInsights();

  return (
    <>
      <GNB />
      <main className="bg-white min-h-screen pb-16">
        <section className="px-5 pt-6 pb-8 border-b border-gray-100">
          <p className="text-[11px] text-[#008095] font-semibold tracking-wider uppercase mb-2">
            Medical Insights
          </p>
          <h1 className="text-[22px] font-bold text-gray-900 leading-snug">
            평택 고덕동 치과 의학정보
          </h1>
          <p className="text-[13px] text-[#4F5971] mt-3 leading-relaxed">
            임플란트·사랑니·신경치료·잇몸관리·치아 미백까지, 고덕퍼스트치과가
            통합치의학과 전문의 감수로 정리한 일반 의학 정보입니다.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-[11px] text-gray-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#008095]" />
            현재 {all.length}개 아티클 · 경기 평택시 고덕로 250 소재
          </div>
        </section>

        {all.length === 0 ? (
          <section className="px-5 py-12 text-center">
            <p className="text-[14px] text-gray-500">
              곧 의학정보 아티클이 공개됩니다.
            </p>
          </section>
        ) : (
          <>
            <section className="px-5 pt-8">
              <h2 className="text-[16px] font-bold text-gray-900 mb-4">
                진료 분야별
              </h2>
              <div className="space-y-5">
                {TREATMENT_ORDER.map((t) => {
                  const list = byTreatment.get(t);
                  if (!list || list.length === 0) return null;
                  return (
                    <div key={t}>
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-[14px] font-semibold text-[#008095]">
                          {treatmentLabel(t)}
                        </h3>
                        <span className="text-[11px] text-gray-400">
                          {list.length}개
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {list.map((a) => (
                          <li key={a.slug}>
                            <Link
                              href={`/insights/${a.slug}`}
                              className="block rounded-lg border border-gray-100 px-3 py-2.5 hover:border-[#008095]/30 hover:bg-[#008095]/[0.02] transition-colors"
                            >
                              <p className="text-[13px] font-medium text-gray-900 leading-snug">
                                {a.title}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-1">
                                {a.region} · {a.keyword}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="px-5 pt-10">
              <h2 className="text-[16px] font-bold text-gray-900 mb-4">
                지역별
              </h2>
              <div className="flex flex-wrap gap-2">
                {REGION_ORDER.map((r) => {
                  const list = byRegion.get(r);
                  if (!list || list.length === 0) return null;
                  return (
                    <a
                      key={r}
                      href={`#region-${r}`}
                      className="text-[12px] rounded-full border border-gray-200 px-3 py-1.5 text-gray-700 hover:border-[#008095] hover:text-[#008095]"
                    >
                      {regionLabel(r)} · {list.length}
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 space-y-6">
                {REGION_ORDER.map((r) => {
                  const list = byRegion.get(r);
                  if (!list || list.length === 0) return null;
                  return (
                    <div key={r} id={`region-${r}`} className="scroll-mt-20">
                      <h3 className="text-[14px] font-semibold text-gray-900 mb-2">
                        {regionLabel(r)}
                      </h3>
                      <ul className="space-y-1.5">
                        {list.map((a) => (
                          <li key={a.slug}>
                            <Link
                              href={`/insights/${a.slug}`}
                              className="block rounded-lg border border-gray-100 px-3 py-2.5 hover:border-[#008095]/30 hover:bg-[#008095]/[0.02] transition-colors"
                            >
                              <p className="text-[13px] font-medium text-gray-900 leading-snug">
                                {a.title}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-1">
                                {treatmentLabel(a.treatment)} · {a.keyword}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        <section className="px-5 pt-10">
          <div className="rounded-xl bg-gray-50 px-4 py-4 text-[11px] text-gray-500 leading-relaxed">
            본 문서들은 진료를 대체하지 않는 일반 의학 정보입니다. 증상이나
            치료 계획은 반드시 내원 상담을 통해 개별적으로 판단해야 합니다.
            고덕퍼스트치과는 경기 평택시 고덕로 250 에듀스카이 4층에 위치한
            의료기관이며, 본 콘텐츠는 해당 기관 내부 감수를 거쳐 공개되었습니다.
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
