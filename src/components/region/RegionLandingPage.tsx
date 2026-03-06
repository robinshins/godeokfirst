'use client';

import Link from 'next/link';
import Image from 'next/image';
import StatsSection from '@/components/home/StatsSection';
import DoctorSection from '@/components/home/DoctorSection';
import CTASection from '@/components/home/CTASection';
import FooterSection from '@/components/home/FooterSection';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import GNB from '@/components/home/GNB';

export interface RegionTreatment {
  type: 'implant' | 'cavity-treatment' | 'wisdom-tooth';
  title: string;
  description: string;
  features: string[];
}

export interface RegionDirection {
  type: 'subway' | 'bus' | 'car' | 'walk';
  description: string;
}

export interface RegionArticlePreview {
  type: 'implant' | 'cavity-treatment' | 'wisdom-tooth';
  title: string;
  summary: string;
}

export interface RegionFAQ {
  question: string;
  answer: string;
}

export interface RegionData {
  name: string;
  fullName: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  accessBadges: string[];
  treatments: RegionTreatment[];
  directions: RegionDirection[];
  articles: RegionArticlePreview[];
  faqs: RegionFAQ[];
}

const treatmentConfig: Record<string, { icon: string; color: string; bgColor: string }> = {
  'implant': { icon: '🦷', color: '#008095', bgColor: '#e6f7fa' },
  'cavity-treatment': { icon: '🔬', color: '#10b981', bgColor: '#ecfdf5' },
  'wisdom-tooth': { icon: '🏥', color: '#8b5cf6', bgColor: '#f5f3ff' },
};

const treatmentLabel: Record<string, string> = {
  'implant': '임플란트',
  'cavity-treatment': '충치치료',
  'wisdom-tooth': '사랑니',
};

const directionIcons: Record<string, string> = {
  'subway': '🚇',
  'bus': '🚌',
  'car': '🚗',
  'walk': '🚶',
};

export default function RegionLandingPage({ data }: { data: RegionData }) {
  return (
    <div className="bg-white min-h-screen">
      <GNB />
      <FixedCTAButton />
      <div className="h-[52px]" />

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)' }}>
        <div className="max-w-[430px] mx-auto px-4 py-[60px]">
          <div className="flex flex-col items-center gap-6">
            {/* Access Badges */}
            <div className="flex flex-wrap gap-2 justify-center">
              {data.accessBadges.map((badge, i) => (
                <span key={i} className="bg-white/10 text-white/90 text-[13px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex justify-center">
              <Image src="/images/goduk_images/고덕퍼스트치과_Logo_white.svg" alt="고덕퍼스트치과" width={180} height={32} />
            </div>

            <h1
              className="text-[32px] font-bold text-white text-center leading-[1.35] tracking-[-0.64px]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              {data.heroTitle}
            </h1>

            <p
              className="text-[#e9ebf1] text-base font-semibold text-center leading-[1.5] tracking-[-0.32px]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              {data.heroSubtitle}
            </p>

            <Link href="/consultation" className="w-full">
              <button className="w-full bg-[#008095] h-16 rounded-[18px] flex items-center justify-center hover:bg-[#006B7A] transition-colors">
                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  AI 무료 상담받기
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Treatment Cards */}
      <div className="bg-[#f8f9fb]">
        <div className="max-w-[430px] mx-auto px-4 py-[60px]">
          <h2
            className="text-[28px] font-bold text-[#292a2f] text-center mb-3 leading-[1.35]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            {data.name} 치과 진료과목
          </h2>
          <p className="text-[15px] text-[#5d5f6d] text-center mb-10" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            고덕퍼스트치과의 전문 진료 분야
          </p>

          <div className="flex flex-col gap-4">
            {data.treatments.map((treatment, index) => {
              const config = treatmentConfig[treatment.type];
              return (
                <Link key={index} href={`/${data.slug}/${treatment.type}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: config.bgColor }}
                      >
                        {config.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[18px] font-bold text-[#292a2f] mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                          {treatment.title}
                        </h3>
                        <p className="text-[14px] text-[#5d5f6d] leading-[1.6] mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                          {treatment.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {treatment.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-[12px] font-medium px-2.5 py-1 rounded-md"
                              style={{ backgroundColor: config.bgColor, color: config.color }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3">
                      <span className="text-[13px] font-semibold" style={{ color: config.color }}>
                        자세히 보기 →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reuse existing sections */}
      <StatsSection />
      <DoctorSection />

      {/* Directions Section */}
      <div className="bg-white">
        <div className="max-w-[430px] mx-auto px-4 py-[60px]">
          <h2 className="text-[28px] font-bold text-[#292a2f] text-center mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            {data.name}에서 오시는 길
          </h2>
          <p className="text-[15px] text-[#5d5f6d] text-center mb-10" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            경기 평택시 고덕로 250 에듀스카이 4층
          </p>

          {/* Map Image + 길찾기 */}
          <div className="relative border-[5px] border-[#f0f0f0] rounded-2xl overflow-hidden h-[480px] mb-8">
            <Image
              src="/images/goduk_images/네이버지도캡처.png"
              alt="고덕퍼스트치과 위치"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[205px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 space-y-3">
              <div className="text-black font-semibold text-[15px] leading-[1.6]">
                <p className="mb-0">경기 평택시 고덕로 250 에듀스카이 4층 401, 402호</p>
              </div>
              <Link
                href="https://naver.me/GSD1OqoS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white shadow-md text-[#01c17e] font-bold text-base py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                자세히 길찾기
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Direction Details */}
          <div className="space-y-4">
            {data.directions.map((dir, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#f8f9fb] rounded-2xl p-5">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                  {directionIcons[dir.type]}
                </div>
                <p className="text-[15px] text-[#37373e] leading-[1.6] font-medium pt-1.5" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {dir.description}
                </p>
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="mt-8">
            <Link
              href="tel:031-611-3222"
              className="w-full bg-white border-2 border-[#008095] text-[#008095] font-bold text-base py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              전화 상담: 031-611-3222
            </Link>
          </div>
        </div>
      </div>

      {/* Article Preview Section */}
      <div className="bg-[#f8f9fb]">
        <div className="max-w-[430px] mx-auto px-4 py-[60px]">
          <h2 className="text-[28px] font-bold text-[#292a2f] text-center mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            {data.name} 치과 칼럼
          </h2>
          <p className="text-[15px] text-[#5d5f6d] text-center mb-10" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            전문의가 알려주는 치과 이야기
          </p>

          <div className="flex flex-col gap-4">
            {data.articles.map((article, index) => {
              const config = treatmentConfig[article.type];
              return (
                <Link key={index} href={`/${data.slug}/${article.type}`}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{config.icon}</span>
                      <span
                        className="text-[12px] font-bold px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: config.bgColor, color: config.color }}
                      >
                        {treatmentLabel[article.type]}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-[#292a2f] mb-2 leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {article.title}
                    </h3>
                    <p className="text-[13px] text-[#5d5f6d] leading-[1.6] mb-3 line-clamp-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {article.summary}
                    </p>
                    <span className="text-[13px] font-semibold" style={{ color: config.color }}>
                      더 읽기 →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white">
        <div className="max-w-[430px] mx-auto px-4 py-[60px]">
          <h2 className="text-4xl font-bold text-[#292a2f] text-center mb-[60px]">
            {data.name} 치과<br />자주 묻는 질문
          </h2>
          <div className="space-y-0">
            {data.faqs.map((faq, index) => (
              <div
                key={index}
                className={`py-10 space-y-5 ${index !== data.faqs.length - 1 ? 'border-b border-[#e9ebf1]' : ''}`}
              >
                <h3 className="text-[22px] font-bold text-black leading-[1.4] whitespace-pre-line">
                  {faq.question}
                </h3>
                <p className="text-[17px] font-medium text-[#5d5f6d] leading-[1.59] pr-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
      <FooterSection />
      <div className="h-[88px]" />
    </div>
  );
}
