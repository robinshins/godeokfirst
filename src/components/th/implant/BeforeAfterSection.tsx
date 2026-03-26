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
      name: 'จ●●',
      gender: 'ชาย',
      type: 'รากฟันเทียมหลายซี่ · เอกซเรย์',
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg'
    },
    {
      name: 'จ●●',
      gender: 'ชาย',
      type: 'รากฟันเทียมหลายซี่ · ภาพจริง',
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg'
    }
  ];

  // 임플란트 케이스
  const implantCases = [
    {
      name: 'จ●●',
      gender: 'ชาย',
      type: 'ครอบฟันรากเทียม · เอกซเรย์',
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_엑스레이_after.jpg'
    },
    {
      name: 'จ●●',
      gender: 'ชาย',
      type: 'ครอบฟันรากเทียม · ภาพจริง',
      beforeImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_before.jpg',
      afterImage: '/임상사진/지종환_임플란트/지종환_어금니임플란트_실제사진_after.jpg'
    },
    {
      name: 'อ●●',
      gender: 'หญิง',
      type: 'รากฟันเทียม · ภาพจริง',
      beforeImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_before.jpg',
      afterImage: '/임상사진/이영주_임플란트/이영주_임플란트_실사_after.jpg'
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
                  การรักษาระดับสูง
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h2 className="font-bold leading-[1.35] not-italic text-[28px] text-black text-center tracking-[-0.56px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  การบูรณะช่องปากทั้งปาก<br />
                  ตัวอย่างก่อนและหลัง
                </h2>
                <p className="text-[#6b7280] text-[15px] text-center leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  เคสที่ฟื้นฟูช่องปากที่เสียหายทั้งหมด<br />
                  กลับสู่ชีวิตประจำวันที่แข็งแรง
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
                  การรักษาแบบบูรณาการโดยผู้เชี่ยวชาญทันตกรรมบูรณาการ
                </p>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                ผู้เชี่ยวชาญทันตกรรมบูรณาการผสมผสานการรักษาหลากหลายรูปแบบ เช่น <span className="font-semibold text-black">รากฟันเทียม ครอบฟัน สะพานฟัน</span> ให้เหมาะกับสภาพผู้ป่วยแต่ละคน เพื่อ<span className="font-semibold text-black">ผลลัพธ์ที่ดีที่สุด</span>ใน<span className="font-semibold text-black">ราคาที่สมเหตุสมผล</span>
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
                  ดูเคสบูรณะช่องปากเพิ่มเติม
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
                  ตัวอย่างก่อนและหลัง<br />
                  รากฟันเทียมด้วยไกด์ดิจิทัล
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
                  ดูเคสรากฟันเทียมเพิ่มเติม
                </span>
              </button>
            )}
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
