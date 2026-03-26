'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BeforeAfterSection() {
  const [showMore, setShowMore] = useState(false);
  const cases = [
    {
      name: 'Пак●●',
      gender: 'Мужчина',
      type: 'полная челюсть Имплант · Рентген до и после',
      beforeImage: '/клиническийфото/Пак Кюнджо_полная имплантация/Пак Кюнджо_полныйимплант_рентген_before.jpg',
      afterImage: '/клиническийфото/Пак Кюнджо_полная имплантация/Пак Кюнджо_полныйимплант_рентген_after.jpg'
    },
    {
      name: 'Пак●●',
      gender: 'Мужчина',
      type: 'полная челюсть Имплант · реальныйфото допосле',
      beforeImage: '/клиническийфото/Пак Кюнджо_полная имплантация/Пак Кюнджо_полныйимплант_реальныйфото_before.jpg',
      afterImage: '/клиническийфото/Пак Кюнджо_полная имплантация/Пак Кюнджо_полныйимплант_реальныйфото_after.jpg'
    }
  ];

  const displayedCases = showMore ? cases : cases.slice(0, 3);

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                цифровая навигация<br />
                Имплант До и после
              </h2>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {displayedCases.map((caseItem, index) => (
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
                          {/* Blur overlay for non-logged in users */}                          {/* Before Badge */}
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
          ))}

          {/* More Button */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="bg-white border border-[#e9ebf1] border-solid box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold leading-[1.5] not-italic text-[#008095] text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                после болеесмотреть
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
