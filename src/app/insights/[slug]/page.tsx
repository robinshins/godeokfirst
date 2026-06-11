import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GNB from '@/components/home/GNB';
import FooterSection from '@/components/home/FooterSection';
import ClinicProfile from '@/components/insights/ClinicProfile';
import {
  loadAllInsights,
  getInsightBySlug,
  getRelatedInsights,
  regionLabel,
  treatmentLabel,
} from '@/lib/insights';
import { generateInsightArticleSchema } from '@/lib/schema';

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return loadAllInsights().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};

  const description = `평택 고덕퍼스트치과의원 대표원장 이동현(통합치의학과 전문의) 작성 — ${article.heroDescription.slice(0, 150)}`;
  const url = `https://gdfirstdent.co.kr/insights/${article.slug}`;

  return {
    title: `${article.title} | 고덕퍼스트치과 인사이트`,
    description,
    authors: [{ name: '이동현', url: 'https://gdfirstdent.co.kr' }],
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description,
      url,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
    },
    keywords: [
      article.keyword,
      `${article.region} ${treatmentLabel(article.treatment)}`,
      '고덕퍼스트치과',
      '평택 고덕동 치과',
      treatmentLabel(article.treatment),
    ],
    robots: { index: true, follow: true },
  };
}

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  } catch {
    return iso;
  }
}

export default async function InsightArticlePage({ params }: RouteParams) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const related = getRelatedInsights(article, 5);
  const url = `https://gdfirstdent.co.kr/insights/${article.slug}`;

  const schema = generateInsightArticleSchema({
    title: article.title,
    description: `평택 고덕퍼스트치과의원 대표원장 이동현(통합치의학과 전문의) 작성 — ${article.heroDescription.slice(0, 150)}`,
    url,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    keywords: [
      article.keyword,
      article.region,
      treatmentLabel(article.treatment),
    ],
    faqs: article.faqs.map((f) => ({
      question: f.question,
      answer: `${f.answerShort} ${f.answerDetail}`.trim(),
    })),
    breadcrumbs: [
      { name: '홈', url: 'https://gdfirstdent.co.kr' },
      { name: '의학정보', url: 'https://gdfirstdent.co.kr/insights' },
      { name: article.title, url },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GNB />
      <main className="bg-white min-h-screen pb-16">
        {/* Breadcrumb */}
        <nav className="px-5 pt-5 text-[11px] text-gray-400">
          <Link href="/" className="hover:text-gray-600">
            홈
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/insights" className="hover:text-gray-600">
            의학정보
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-600">{regionLabel(article.regionSlug)}</span>
        </nav>

        {/* Tags */}
        <div className="px-5 pt-4 flex flex-wrap items-center gap-1.5">
          <span className="inline-block rounded-full bg-[#008095]/10 text-[#008095] text-[10px] font-semibold px-2 py-0.5">
            {treatmentLabel(article.treatment)}
          </span>
          <span className="inline-block rounded-full bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5">
            {regionLabel(article.regionSlug)}
          </span>
        </div>

        {/* Title */}
        <section className="px-5 pt-3">
          <h1 className="text-[21px] font-bold text-gray-900 leading-[1.4]">
            {article.title}
          </h1>
          {article.subtitle ? (
            <p className="text-[13px] text-[#4F5971] mt-2 leading-relaxed">
              {article.subtitle}
            </p>
          ) : null}
          <div className="mt-4 flex items-center gap-3 text-[11px] text-gray-400">
            <span>작성일 {formatDate(article.publishedAt)}</span>
            <span className="h-3 w-px bg-gray-200" />
            <span>최종검토 {formatDate(article.updatedAt)}</span>
            <span className="h-3 w-px bg-gray-200" />
            <span>작성 · 이동현 대표원장 (통합치의학과 전문의)</span>
          </div>
        </section>

        {/* TL;DR */}
        {article.tldr ? (
          <section className="px-5 pt-6">
            <div className="rounded-xl border border-[#008095]/20 bg-[#008095]/[0.04] px-4 py-4">
              <p className="text-[10px] font-semibold text-[#008095] tracking-wider uppercase mb-1.5">
                핵심 요약
              </p>
              <p className="text-[13.5px] text-gray-800 leading-relaxed">
                {article.tldr}
              </p>
            </div>
          </section>
        ) : null}

        {/* Hero description */}
        <section className="px-5 pt-6">
          <p className="text-[14px] text-gray-800 leading-[1.75]">
            {article.heroDescription}
          </p>
        </section>

        {/* Sections */}
        <article className="px-5 pt-8 space-y-8">
          {article.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-[17px] font-bold text-gray-900 mb-3 leading-snug">
                {section.heading}
              </h2>
              <div className="space-y-3.5">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[14px] text-gray-700 leading-[1.8]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>

        {/* Conclusion */}
        <section className="px-5 pt-10">
          <div className="rounded-xl bg-gray-50 px-4 py-5">
            <p className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase mb-2">
              정리
            </p>
            <p className="text-[13.5px] text-gray-800 leading-[1.8]">
              {article.conclusion}
            </p>
          </div>
        </section>

        {/* FAQ — 2-tier (short + detail) */}
        {article.faqs.length > 0 ? (
          <section className="px-5 pt-10">
            <h2 className="text-[17px] font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-100 px-4 py-4"
                >
                  <p className="text-[13.5px] font-bold text-gray-900 leading-snug mb-2">
                    Q. {faq.question}
                  </p>
                  <p className="text-[13px] font-semibold text-[#008095] leading-relaxed mb-2">
                    {faq.answerShort}
                  </p>
                  <p className="text-[12.5px] text-gray-600 leading-[1.75]">
                    {faq.answerDetail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Related articles */}
        {related.length > 0 ? (
          <section className="px-5 pt-10">
            <h2 className="text-[15px] font-bold text-gray-900 mb-3">
              관련 아티클
            </h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/insights/${r.slug}`}
                    className="block rounded-lg border border-gray-100 px-3 py-2.5 hover:border-[#008095]/30 hover:bg-[#008095]/[0.02]"
                  >
                    <p className="text-[12.5px] font-medium text-gray-900 leading-snug">
                      {r.title}
                    </p>
                    <p className="text-[10.5px] text-gray-400 mt-1">
                      {regionLabel(r.regionSlug)} ·{' '}
                      {treatmentLabel(r.treatment)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Clinic profile — visually separate from article body */}
        <section className="px-5">
          <ClinicProfile />
        </section>

        {/* Compliance notice */}
        <section className="px-5 pt-10">
          <div className="rounded-xl bg-gray-100 px-4 py-4 text-[11px] text-gray-500 leading-relaxed">
            본 글은 진료를 대체하지 않는 일반 의학 정보이며, 개별 증상에 대한
            정확한 진단은 반드시 내원 상담을 통해 결정해야 합니다. 본 콘텐츠는
            경기 평택시 고덕로 250 에듀스카이 4층에 소재한 고덕퍼스트치과의원
            대표원장 이동현(통합치의학과 전문의)이 직접 작성·검토하여
            공개하였습니다.
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
