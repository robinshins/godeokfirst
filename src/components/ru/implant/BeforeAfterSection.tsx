'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function BeforeAfterSection() {
  const [showMoreReconstruction, setShowMoreReconstruction] = useState(false);
  const [showMoreImplant, setShowMoreImplant] = useState(false);
 // полость ртаповторныйслучаев случай ()
  const reconstructionCases = [
    {
      name: '●●',
      gender: 'Мужчина',
      type: 'множество Имплант · рентген',
      beforeImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_рентген_before.jpg',
      afterImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_рентген_after.jpg'
    },
    {
      name: '●●',
      gender: 'Мужчина',
      type: 'множество Имплант · реальныйфото',
      beforeImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_реальныйфото_before.jpg',
      afterImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_реальныйфото_after.jpg'
    }
  ];

  // Имплант случай
  const implantCases = [
    {
      name: '●●',
      gender: 'Мужчина',
      type: 'Имплант протез · рентген',
      beforeImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_рентген_before.jpg',
      afterImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_рентген_after.jpg'
    },
    {
      name: '●●',
      gender: 'Мужчина',
      type: 'Имплант протез · реальныйфото',
      beforeImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_реальныйфото_before.jpg',
      afterImage: '/клиническийфото/Чи Чонхван_имплант/Чи Чонхван_имплантация жевательных зубов_реальныйфото_after.jpg'
    },
    {
      name: '●●',
      gender: 'Женщина',
      type: 'Имплант · реальныйфото',
      beforeImage: '/клиническийфото/Ли Ёнджу_имплант/Ли Ёнджу_имплант_реальное фото_before.jpg',
      afterImage: '/клиническийфото/Ли Ёнджу_имплант/Ли Ёнджу_имплант_реальное фото_after.jpg'
    }
  ];

  const displayedReconstructionCases = showMoreReconstruction ? reconstructionCases : reconstructionCases.slice(0, 2);
  const displayedImplantCases = showMoreImplant ? implantCases : implantCases.slice(0, 3);

 // случай более 
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

        {/* полость ртаповторныйслучаев раздел */}
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          {/* Header */}
          <FadeInSection className="flex flex-col gap-3 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
              <div className="bg-[#008095] px-4 py-2 rounded-full">
                <p className="font-semibold text-white text-sm" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  сложное лечение
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h2 className="font-bold leading-[1.35] not-italic text-[28px] text-black text-center tracking-[-0.56px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  полная челюсть полость ртаповторныйслучаев<br />
                  До и после
                </h2>
                <p className="text-[#6b7280] text-[15px] text-center leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
 до полость рта<br />
 здороводин повседневность случай
                </p>
              </div>
            </div>
          </FadeInSection>

 {/* специалист объяснение Пак */}
          <FadeInSection delay={100}>
          <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-5 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#008095] rounded-full" />
                <p className="font-bold text-[15px] text-[#008095]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
 Специалист комплексной стоматологии лечение
                </p>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
 Специалист комплексной стоматологии <span className="font-semibold text-black">Имплант, коронка, мост</span> и т.д. различные лечение пациент состояние подходящий оптимальный, <span className="font-semibold text-black"> стоимость</span> <span className="font-semibold text-black"> результат</span> предоставляем.
              </p>
            </div>
          </div>
          </FadeInSection>

          {/* полость ртаповторныйслучаев Cases */}
          <FadeInSection delay={200} className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {displayedReconstructionCases.map((caseItem, index) => renderCaseCard(caseItem, index))}

            {/* More Button */}
            {!showMoreReconstruction && reconstructionCases.length > 2 && (
              <button
                onClick={() => setShowMoreReconstruction(true)}
                className="bg-white border border-[#e9ebf1] border-solid box-border flex h-14 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold leading-[1.5] not-italic text-[#008095] text-lg text-nowrap tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  полость ртаповторныйслучаев случай болеесмотреть
                </span>
              </button>
            )}
          </FadeInSection>
        </div>

 {/* минутлиния */}
        <div className="w-full h-[1px] bg-[#e5e7eb]" />

        {/* Имплант раздел */}
        <div className="flex flex-col gap-[30px] items-start relative shrink-0 w-full">
          {/* Header */}
          <FadeInSection className="flex flex-col gap-3 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
              <div className="flex flex-col gap-2 items-center justify-center relative shrink-0 w-full">
                <h2 className="font-bold leading-[1.35] not-italic text-[28px] text-black text-center tracking-[-0.56px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  цифровая навигация<br />
                  Имплант До и после
                </h2>
              </div>
            </div>
          </FadeInSection>

          {/* Имплант Cases */}
          <FadeInSection delay={100} className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {displayedImplantCases.map((caseItem, index) => renderCaseCard(caseItem, index))}

            {/* More Button */}
            {!showMoreImplant && implantCases.length > 3 && (
              <button
                onClick={() => setShowMoreImplant(true)}
                className="bg-white border border-[#e9ebf1] border-solid box-border flex h-14 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold leading-[1.5] not-italic text-[#008095] text-lg text-nowrap tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Имплант случай болеесмотреть
                </span>
              </button>
            )}
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
