'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function RealPatientResultsSection() {
  const [showMore, setShowMore] = useState(false);
  // 전체임플란트 케이스
  const implantCases = [
    {
      name: '김●●',
      gender: '60대 남성',
      description: '상악 전체 임플란트',
      beforeImage: '/images/cases/full-implant/upper-male-before-xray.jpg',
      afterImage: '/images/cases/full-implant/upper-male-after-xray.jpg'
    },
    {
      name: '이●●',
      gender: '60대 여성',
      description: '상악 전체 임플란트',
      beforeImage: '/images/cases/full-implant/upper-female-before-xray.jpg',
      afterImage: '/images/cases/full-implant/upper-female-after-xray.jpg'
    },
    {
      name: '박●●',
      gender: '70대 남성',
      description: '하악 전체 임플란트',
      beforeImage: '/images/cases/full-implant/lower-before-panorama.jpg',
      afterImage: '/images/cases/full-implant/lower-after-panorama.jpg'
    },
    {
      name: '최●●',
      gender: '50대 남성',
      description: '상하악 전체 임플란트',
      beforeImage: '/images/cases/full-implant/upper-lower-before-panorama.jpg',
      afterImage: '/images/cases/full-implant/upper-lower-after-panorama.jpg'
    },
    {
      name: '정●●',
      gender: '60대 여성',
      description: '상악전체 + 하악부분 임플란트',
      beforeImage: '/images/cases/full-implant/upper-full-lower-partial-before-panorama.jpg',
      afterImage: '/images/cases/full-implant/upper-full-lower-partial-after-panorama.jpg'
    },
    {
      name: '한●●',
      gender: '70대 남성',
      description: '당일 임시치아 장착',
      beforeImage: '/images/cases/full-implant/same-day-temp-before.jpg',
      afterImage: '/images/cases/full-implant/same-day-temp-after.jpg'
    }
  ];

  // 틀니 케이스
  const dentureCases = [
    {
      name: '김●●',
      gender: '70대 여성',
      description: '상하악 완전틀니',
      beforeImage: '/images/cases/denture/upper-lower-full-2/preop.jpg',
      afterImage: '/images/cases/denture/upper-lower-full-2/postop.jpg'
    },
    {
      name: '박●●',
      gender: '80대 남성',
      description: '상하악 완전틀니',
      beforeImage: '/images/cases/denture/upper-lower-full/preop-1.jpg',
      afterImage: '/images/cases/denture/upper-lower-full/postop.jpg'
    },
    {
      name: '이●●',
      gender: '70대 여성',
      description: '상악 완전틀니 + 하악 임플란트 부분틀니',
      beforeImage: '/images/cases/denture/upper-full-lower-implant-partial/preop-2.jpg',
      afterImage: '/images/cases/denture/upper-full-lower-implant-partial/postop.jpg'
    }
  ];

  // 구강재건 케이스
  const reconstructionCases = [
    {
      name: '강●●',
      gender: '50대 남성',
      description: '임플란트 + 크라운 + 브릿지 조합',
      beforeImage: '/images/cases/oral-reconstruction/before-panorama-1.jpg',
      afterImage: '/images/cases/oral-reconstruction/after-panorama-1.jpg'
    },
    {
      name: '송●●',
      gender: '60대 여성',
      description: '맞춤형 보철 조합 치료',
      beforeImage: '/images/cases/oral-reconstruction/implant-prosthetics-before-photo.jpg',
      afterImage: '/images/cases/oral-reconstruction/implant-prosthetics-after-photo.jpg'
    },
    {
      name: '조●●',
      gender: '50대 여성',
      description: '비용 효율적 맞춤 치료',
      beforeImage: '/images/cases/oral-reconstruction/implant-prosthetics-before-photo-2.jpg',
      afterImage: '/images/cases/oral-reconstruction/implant-prosthetics-after-photo-2.jpg'
    }
  ];

  const displayedImplantCases = showMore ? implantCases : implantCases.slice(0, 3);

  return (
    <div className="bg-[#0b1727] w-full flex flex-col items-center">
      {/* 전체임플란트 섹션 */}
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 text-center w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              REAL PATIENT RESULTS
            </p>
            <h2 className="font-bold leading-[1.35] text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              전체임플란트 전후 사례
            </h2>
            <p className="font-medium leading-[1.6] text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              실제 환자분들의 놀라운 변화를 확인하세요
            </p>
          </div>
        </FadeInSection>

        {/* Cases */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {displayedImplantCases.map((caseItem, index) => (
            <FadeInSection key={index} delay={100 + index * 100} className="bg-white border border-[#d2e9f3] border-solid rounded-[24px] shrink-0 w-full shadow-[0px_4px_20px_-4px_rgba(0,143,210,0.15)]">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
                    {/* Before */}
                    <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.beforeImage}
                          alt="Before"
                          fill
                          className="object-cover"
                          sizes="400px"
                          loading="eager"
                        />
                      </div>
                      {/* Blur overlay for non-logged in users */}                      {/* Before Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-[#3e3a3a] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0">
                          <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            Before
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.afterImage}
                          alt="After"
                          fill
                          className="object-cover"
                          sizes="400px"
                          loading="eager"
                        />
                      </div>
                      {/* After Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-gradient-to-r from-[#008fd2] to-[#6eb7bc] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0 shadow-md">
                          <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            After ✨
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-center relative shrink-0 w-full">
                    <p className="font-semibold leading-[1.4] not-italic text-[#008fd2] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {caseItem.name} · {caseItem.gender}
                    </p>
                    <p className="font-medium leading-[1.4] not-italic text-[#666] text-[13px] text-center tracking-[-0.26px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}

          {/* More Button */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="bg-gradient-to-r from-[#008fd2] to-[#6eb7bc] box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:opacity-90 transition-opacity shadow-lg"
            >
              <span className="font-bold leading-[1.5] not-italic text-white text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                후기 더보기
              </span>
            </button>
          )}
        </div>
      </div>

      {/* 틀니 케이스 섹션 */}
      <div className="bg-gradient-to-b from-[#0b1727] to-[#162233] w-full flex justify-center">
        <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
          {/* Header */}
          <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 text-center w-full">
              <p className="text-[14px] font-bold text-[#90cdf4] tracking-[3px] uppercase">
                DENTURE CASES
              </p>
              <h2 className="font-bold leading-[1.35] text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                틀니 전후 사례
              </h2>
              <p className="font-medium leading-[1.6] text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                자연스럽고 편안한 틀니로<br />삶의 질을 높여드립니다
              </p>
            </div>
          </FadeInSection>

          {/* Cases */}
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {dentureCases.map((caseItem, index) => (
              <FadeInSection key={index} delay={100 + index * 100} className="bg-white border border-[#d2e9f3] border-solid rounded-[24px] shrink-0 w-full shadow-[0px_4px_20px_-4px_rgba(0,143,210,0.15)]">
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                  <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                    <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
                      {/* Before */}
                      <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={caseItem.beforeImage}
                            alt="Before"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Blur overlay for non-logged in users */}                        {/* Before Badge */}
                        <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                          <div className="bg-[#3e3a3a] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0">
                            <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                              Before
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={caseItem.afterImage}
                            alt="After"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* After Badge */}
                        <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                          <div className="bg-gradient-to-r from-[#63b3ed] to-[#90cdf4] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0 shadow-md">
                            <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                              After ✨
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-center relative shrink-0 w-full">
                      <p className="font-semibold leading-[1.4] not-italic text-[#63b3ed] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {caseItem.name} · {caseItem.gender}
                      </p>
                      <p className="font-medium leading-[1.4] not-italic text-[#666] text-[13px] text-center tracking-[-0.26px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* 틀니 장점 카드 */}
          <FadeInSection delay={400} className="bg-white/10 backdrop-blur-sm rounded-[20px] p-5 w-full border border-white/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#90cdf4] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#0b1727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,4 12,14.01 9,11.01" stroke="#0b1727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    정밀 맞춤 틀니 제작
                  </p>
                  <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    원내 기공소에서 환자 맞춤 제작
                  </p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#90cdf4] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      자연스러운 잇몸색과 치아 배열
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#90cdf4] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      편안한 착용감으로 식사와 대화가 자유로움
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#90cdf4] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      임플란트와 조합하여 안정적인 고정 가능
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* 구강재건 섹션 (보철과 전문의 비용 효율적 치료 어필) */}
      <div className="bg-gradient-to-b from-[#162233] to-[#1a2d44] w-full flex justify-center">
        <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
          {/* Header */}
          <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 text-center w-full">
              <p className="text-[14px] font-bold text-[#ffc107] tracking-[3px] uppercase">
                COST-EFFECTIVE TREATMENT
              </p>
              <h2 className="font-bold leading-[1.35] text-[28px] text-white tracking-[-0.56px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                통합치의학전문의의<br/>맞춤형 구강재건
              </h2>
              <p className="font-medium leading-[1.6] text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                임플란트, 크라운, 브릿지 등<br/>
                환자 상태에 맞는 <span className="text-[#ffc107] font-bold">최적의 치료 조합</span>으로<br/>
                합리적인 비용에 최상의 결과를 완성합니다
              </p>
            </div>
          </FadeInSection>

          {/* 전문의 강점 어필 카드 */}
          <FadeInSection delay={100} className="bg-white/10 backdrop-blur-sm rounded-[20px] p-5 w-full border border-white/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#ffc107] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#0b1727" stroke="#0b1727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    이동현 대표원장
                  </p>
                  <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    조선대 치과병원 외래교수 역임 · 통합치의학과 전문의
                  </p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffc107] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      모든 치아를 임플란트로 하지 않아도 됩니다
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffc107] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      크라운, 브릿지, 부분틀니를 적절히 조합하여 비용 부담 최소화
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffc107] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      환자 상태에 맞는 최적의 치료 설계
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ffc107] text-sm mt-0.5">✓</span>
                    <p className="text-white/90 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      무이자 할부 가능, 상담 시 맞춤 비용 안내
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>

          {/* 구강재건 케이스 */}
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {reconstructionCases.map((caseItem, index) => (
              <FadeInSection key={index} delay={200 + index * 100} className="bg-white border border-[#d2e9f3] border-solid rounded-[24px] shrink-0 w-full shadow-[0px_4px_20px_-4px_rgba(0,143,210,0.15)]">
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                  <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                    <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
                      {/* Before */}
                      <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={caseItem.beforeImage}
                            alt="Before"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Blur overlay for non-logged in users */}                        {/* Before Badge */}
                        <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                          <div className="bg-[#3e3a3a] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0">
                            <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                              Before
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="bg-[#f8fbfd] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={caseItem.afterImage}
                            alt="After"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* After Badge */}
                        <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                          <div className="bg-gradient-to-r from-[#ffc107] to-[#ffcd38] box-border flex flex-col gap-2.5 items-center justify-center px-3 py-[6px] relative rounded-xl shrink-0 shadow-md">
                            <p className="font-bold leading-[1.4] not-italic text-[13px] text-nowrap text-[#0b1727] tracking-[-0.26px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                              After ✨
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-center relative shrink-0 w-full">
                      <p className="font-semibold leading-[1.4] not-italic text-[#ffc107] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {caseItem.name} · {caseItem.gender}
                      </p>
                      <p className="font-medium leading-[1.4] not-italic text-[#666] text-[13px] text-center tracking-[-0.26px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* CTA */}
          <FadeInSection delay={500} className="bg-gradient-to-r from-[#ffc107] to-[#ffcd38] rounded-[20px] p-5 w-full">
            <div className="flex flex-col gap-3 items-center text-center">
              <p className="font-bold text-[#0b1727] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                비용 걱정 없이 먼저 상담받아 보세요
              </p>
              <p className="text-[#0b1727]/80 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                환자분 상태에 맞는 최적의 치료 조합과<br/>
                합리적인 비용을 안내해 드립니다
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
