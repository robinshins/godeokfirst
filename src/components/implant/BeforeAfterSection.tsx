'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function BeforeAfterSection() {
  const [showMoreReconstruction, setShowMoreReconstruction] = useState(false);
  const [showMoreImplant, setShowMoreImplant] = useState(false);
  // 구강재건 케이스 (고난도)
  const reconstructionCases = [
    {
      name: '송●●',
      gender: '70대 남성',
      type: '전악 구강재건',
      beforeImage: '/images/cases/oral-reconstruction/implant-prosthetics-before-photo.jpg',
      afterImage: '/images/cases/oral-reconstruction/implant-prosthetics-after-photo.jpg'
    },
    {
      name: '오●●',
      gender: '60대 남성',
      type: '전악 구강재건',
      beforeImage: '/images/cases/oral-reconstruction/implant-prosthetics-before-photo-2.jpg',
      afterImage: '/images/cases/oral-reconstruction/implant-prosthetics-after-photo-2.jpg'
    },
    {
      name: '서●●',
      gender: '60대 여성',
      type: '전악 구강재건',
      beforeImage: '/images/cases/oral-reconstruction/before-panorama-1.jpg',
      afterImage: '/images/cases/oral-reconstruction/after-panorama-1.jpg'
    }
  ];

  // 임플란트 케이스
  const implantCases = [
    {
      name: '김●●',
      gender: '50대 여성',
      type: '앞니 임플란트',
      beforeImage: '/images/cases/implant/front-teeth-before-panorama.jpg',
      afterImage: '/images/cases/implant/front-teeth-after-panorama.jpg'
    },
    {
      name: '이●●',
      gender: '60대 남성',
      type: '앞니 임플란트',
      beforeImage: '/images/cases/implant/front-teeth-before-panorama-2.jpg',
      afterImage: '/images/cases/implant/front-teeth-after-panorama-2.jpg'
    },
    {
      name: '박●●',
      gender: '50대 남성',
      type: '어금니 임플란트',
      beforeImage: '/images/cases/implant/molar-before.jpg',
      afterImage: '/images/cases/implant/molar-after.jpg'
    },
    {
      name: '최●●',
      gender: '60대 여성',
      type: '어금니 임플란트',
      beforeImage: '/images/cases/implant/molar-before-2.jpg',
      afterImage: '/images/cases/implant/molar-after-2.jpg'
    },
    {
      name: '정●●',
      gender: '60대 남성',
      type: '상악동거상술 임플란트',
      beforeImage: '/images/cases/implant/sinus-lift-before.jpg',
      afterImage: '/images/cases/implant/sinus-lift-after.jpg'
    },
    {
      name: '한●●',
      gender: '70대 여성',
      type: '상악동거상술 임플란트',
      beforeImage: '/images/cases/implant/sinus-lift-before-2.jpg',
      afterImage: '/images/cases/implant/sinus-lift-after-2.jpg'
    },
    {
      name: '윤●●',
      gender: '50대 남성',
      type: '타병원 실패 임플란트 재수술',
      beforeImage: '/images/cases/implant/failed-revision-before-panorama.jpg',
      afterImage: '/images/cases/implant/failed-revision-after-panorama.jpg'
    },
    {
      name: '강●●',
      gender: '60대 여성',
      type: '타병원 불량 임플란트 재수술',
      beforeImage: '/images/cases/implant/revision-molar-before-panorama.jpg',
      afterImage: '/images/cases/implant/revision-molar-after-panorama.jpg'
    },
    {
      name: '조●●',
      gender: '50대 여성',
      type: '타병원 부적합 보철 재수복',
      beforeImage: '/images/cases/implant/wrong-restoration-before-panorama.jpg',
      afterImage: '/images/cases/implant/wrong-restoration-after-panorama.jpg'
    }
  ];

  const displayedReconstructionCases = showMoreReconstruction ? reconstructionCases : reconstructionCases.slice(0, 2);
  const displayedImplantCases = showMoreImplant ? implantCases : implantCases.slice(0, 3);

  // 케이스 카드 렌더링 함수
  const renderCaseCard = (caseItem: { name: string; gender: string; type: string; beforeImage: string; afterImage: string }, index: number) => (
    <div key={index} className="bg-white border border-[#f3f6fb] border-solid rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
        <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
          <div className="flex flex-col gap-2 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-2 items-center justify-center relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                {/* Before Image */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
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
                  {/* Before Badge */}
                  <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                    <div className="bg-[#292a2f] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                      <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
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
                    <div className="bg-[#008095] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                      <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[1.4] not-italic text-[#9298a6] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {caseItem.type} · {caseItem.name} · {caseItem.gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">

        {/* 구강재건 섹션 */}
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          {/* Header */}
          <FadeInSection className="flex flex-col gap-3 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
              <div className="bg-[#008095] px-4 py-2 rounded-full">
                <p className="font-semibold text-white text-sm" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  고난도 치료
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h2 className="font-bold leading-[1.35] not-italic text-[28px] text-black text-center tracking-[-0.56px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  전악 구강재건<br />
                  전후 사례
                </h2>
                <p className="text-[#6b7280] text-[15px] text-center leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  완전히 망가진 구강을<br />
                  건강한 일상으로 복귀시킨 케이스
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 전문의 설명 박스 */}
          <FadeInSection delay={100}>
          <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#008095] rounded-full" />
                <p className="font-bold text-[15px] text-[#008095]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  통합치의학과 전문의의 통합 치료
                </p>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                통합치의학과 전문의가 <span className="font-semibold text-black">임플란트, 크라운, 브릿지</span> 등 다양한 치료를 환자 상태에 맞게 최적으로 조합하여, <span className="font-semibold text-black">합리적인 비용</span>으로 <span className="font-semibold text-black">최상의 결과</span>를 만들어 드립니다.
              </p>
            </div>
          </div>
          </FadeInSection>

          {/* 구강재건 Cases */}
          <FadeInSection delay={200} className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {displayedReconstructionCases.map((caseItem, index) => renderCaseCard(caseItem, index))}

            {/* More Button */}
            {!showMoreReconstruction && reconstructionCases.length > 2 && (
              <button
                onClick={() => setShowMoreReconstruction(true)}
                className="bg-white border border-[#e9ebf1] border-solid box-border flex h-14 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold leading-[1.5] not-italic text-[#008095] text-lg text-nowrap tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  구강재건 사례 더보기
                </span>
              </button>
            )}
          </FadeInSection>
        </div>

        {/* 구분선 */}
        <div className="w-full h-[1px] bg-[#e5e7eb]" />

        {/* 임플란트 섹션 */}
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          {/* Header */}
          <FadeInSection className="flex flex-col gap-3 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
              <div className="flex flex-col gap-2 items-center justify-center relative shrink-0 w-full">
                <h2 className="font-bold leading-[1.35] not-italic text-[28px] text-black text-center tracking-[-0.56px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  디지털 가이드<br />
                  임플란트 전후 사례
                </h2>
              </div>
            </div>
          </FadeInSection>

          {/* 임플란트 Cases */}
          <FadeInSection delay={100} className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {displayedImplantCases.map((caseItem, index) => renderCaseCard(caseItem, index))}

            {/* More Button */}
            {!showMoreImplant && implantCases.length > 3 && (
              <button
                onClick={() => setShowMoreImplant(true)}
                className="bg-white border border-[#e9ebf1] border-solid box-border flex h-14 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold leading-[1.5] not-italic text-[#008095] text-lg text-nowrap tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  임플란트 사례 더보기
                </span>
              </button>
            )}
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
