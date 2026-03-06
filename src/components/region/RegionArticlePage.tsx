'use client';

import Link from 'next/link';
import Image from 'next/image';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';

export interface ArticleSection {
  title: string;
  content: string[];
}

export interface RegionArticleData {
  regionName: string;
  regionSlug: string;
  treatmentType: 'implant' | 'cavity-treatment' | 'wisdom-tooth';
  title: string;
  subtitle: string;
  sections: ArticleSection[];
  tips: string[];
  conclusion: string;
  faqs: { question: string; answer: string }[];
}

const treatmentConfig = {
  'implant': {
    label: '임플란트',
    color: '#008095',
    bgColor: '#e6f7fa',
    gradientFrom: '#008095',
    gradientTo: '#006B7A',
  },
  'cavity-treatment': {
    label: '충치치료',
    color: '#10b981',
    bgColor: '#ecfdf5',
    gradientFrom: '#10b981',
    gradientTo: '#059669',
  },
  'wisdom-tooth': {
    label: '사랑니',
    color: '#8b5cf6',
    bgColor: '#f5f3ff',
    gradientFrom: '#8b5cf6',
    gradientTo: '#7c3aed',
  },
};

const relatedTreatments: Record<string, ('implant' | 'cavity-treatment' | 'wisdom-tooth')[]> = {
  'implant': ['cavity-treatment', 'wisdom-tooth'],
  'cavity-treatment': ['implant', 'wisdom-tooth'],
  'wisdom-tooth': ['implant', 'cavity-treatment'],
};

export default function RegionArticlePage({ data }: { data: RegionArticleData }) {
  const config = treatmentConfig[data.treatmentType];
  const related = relatedTreatments[data.treatmentType];

  return (
    <div className="bg-white min-h-screen">
      <GNB />
      <FixedCTAButton />
      <div className="h-[52px]" />

      {/* Breadcrumb */}
      <div className="bg-[#f8f9fb]">
        <div className="max-w-[430px] mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-[13px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            <Link href="/" className="hover:text-[#008095] transition-colors">홈</Link>
            <span>›</span>
            <Link href={`/${data.regionSlug}`} className="hover:text-[#008095] transition-colors">{data.regionName} 치과</Link>
            <span>›</span>
            <span style={{ color: config.color }} className="font-medium">{config.label}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, ${config.bgColor} 0%, white 100%)` }}>
        <div className="max-w-[430px] mx-auto px-4 py-[48px]">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-[12px] font-bold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: config.bgColor, color: config.color }}
            >
              {config.label}
            </span>
            <span className="text-[12px] font-bold px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[#64748b]">
              {data.regionName}
            </span>
          </div>

          <h1
            className="text-[28px] font-bold text-[#0f172a] leading-[1.35] tracking-[-0.56px] mb-4"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            {data.title}
          </h1>

          <p className="text-[15px] text-[#475569] leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            {data.subtitle}
          </p>

          {/* Author Card */}
          <div className="mt-8 bg-white rounded-2xl p-5 shadow-sm border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden relative flex-shrink-0 bg-[#f1f5f9]">
                <Image src="/images/goduk_images/이동현원장사진.jpg" alt="이동현 대표원장" fill className="object-cover" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#0f172a]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  이동현 대표원장
                </p>
                <p className="text-[12px] text-[#64748b]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  통합치의학과 전문의 · 고덕퍼스트치과
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[430px] mx-auto px-4 py-[40px]">
        <div className="space-y-12">
          {data.sections.map((section, index) => (
            <div key={index}>
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: config.bgColor }}
                >
                  <span className="text-[13px] font-bold" style={{ color: config.color }}>{index + 1}</span>
                </div>
                <h2 className="text-[20px] font-bold text-[#0f172a] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 pl-10">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-[15px] text-[#334155] leading-[1.8]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Box */}
      <div className="max-w-[430px] mx-auto px-4 pb-10">
        <div className="rounded-2xl p-6 border" style={{ backgroundColor: config.bgColor, borderColor: `${config.color}20` }}>
          <h3 className="text-[17px] font-bold mb-4" style={{ color: config.color, fontFamily: 'Pretendard, sans-serif' }}>
            알아두면 좋은 팁
          </h3>
          <ul className="space-y-3">
            {data.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: config.color }} />
                <p className="text-[14px] text-[#334155] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {tip}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-[430px] mx-auto px-4 pb-[40px]">
        <div className="bg-[#f8f9fb] rounded-2xl p-6">
          <h3 className="text-[17px] font-bold text-[#0f172a] mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            마무리하며
          </h3>
          <p className="text-[15px] text-[#475569] leading-[1.8]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            {data.conclusion}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[430px] mx-auto px-4 pb-[40px]">
        <Link href="/consultation" className="block w-full">
          <button
            className="w-full h-16 rounded-[18px] flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: config.color }}
          >
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              AI 무료 상담받기
            </span>
          </button>
        </Link>
        <Link href="tel:031-611-3222" className="block w-full mt-3">
          <button
            className="w-full h-14 rounded-[18px] border-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            style={{ borderColor: config.color }}
          >
            <span className="text-lg font-bold" style={{ color: config.color, fontFamily: 'Pretendard, sans-serif' }}>
              전화 상담
            </span>
          </button>
        </Link>
      </div>

      {/* FAQ Section */}
      {data.faqs.length > 0 && (
        <div className="bg-white">
          <div className="max-w-[430px] mx-auto px-4 py-[60px]">
            <h2 className="text-[24px] font-bold text-[#292a2f] text-center mb-[40px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              자주 묻는 질문
            </h2>
            <div className="space-y-0">
              {data.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`py-8 space-y-4 ${index !== data.faqs.length - 1 ? 'border-b border-[#e9ebf1]' : ''}`}
                >
                  <h3 className="text-[18px] font-bold text-black leading-[1.4] whitespace-pre-line">
                    {faq.question}
                  </h3>
                  <p className="text-[15px] font-medium text-[#5d5f6d] leading-[1.6]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Articles */}
      <div className="bg-[#f8f9fb]">
        <div className="max-w-[430px] mx-auto px-4 py-[40px]">
          <h3 className="text-[18px] font-bold text-[#292a2f] mb-5" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            다른 칼럼도 읽어보세요
          </h3>
          <div className="space-y-3">
            {related.map((type) => {
              const relConfig = treatmentConfig[type];
              return (
                <Link key={type} href={`/${data.regionSlug}/${type}`}>
                  <div className="bg-white rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition-shadow mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[12px] font-bold px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: relConfig.bgColor, color: relConfig.color }}
                      >
                        {relConfig.label}
                      </span>
                      <span className="text-[14px] font-semibold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {data.regionName} {relConfig.label}
                      </span>
                    </div>
                    <span className="text-[#94a3b8] text-sm">→</span>
                  </div>
                </Link>
              );
            })}
            <Link href={`/${data.regionSlug}`}>
              <div className="bg-white rounded-xl p-4 flex items-center justify-between hover:shadow-sm transition-shadow">
                <span className="text-[14px] font-semibold text-[#008095]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {data.regionName} 치과 메인으로
                </span>
                <span className="text-[#94a3b8] text-sm">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
      <div className="h-[88px]" />
    </div>
  );
}
