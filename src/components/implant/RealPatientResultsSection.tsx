'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RealPatientResultsSection() {
  const [showMore, setShowMore] = useState(false);
  const cases = [
    {
      name: '김●●',
      gender: '60대 여성',
      faceBeforeImage: '/images/digital-implant-before-after/face-before-1.jpg',
      faceAfterImage: '/images/digital-implant-before-after/face-after-1.jpg',
      teethBeforeImage: '/images/digital-implant-before-after/teeth-before-1.jpg',
      teethAfterImage: '/images/digital-implant-before-after/teeth-after-1.jpg'
    },
    {
      name: '이●●',
      gender: '60대 남성',
      faceBeforeImage: '/images/digital-implant-before-after/face-before-2.jpg',
      faceAfterImage: '/images/digital-implant-before-after/face-after-2.jpg',
      teethBeforeImage: '/images/digital-implant-before-after/teeth-before-2.jpg',
      teethAfterImage: '/images/digital-implant-before-after/teeth-after-2.jpg'
    },
    {
      name: '박●●',
      gender: '70대 여성',
      faceBeforeImage: '/images/digital-implant-before-after/face-before-3.jpg',
      faceAfterImage: '/images/digital-implant-before-after/face-after-3.jpg',
      teethBeforeImage: '/images/digital-implant-before-after/teeth-before-3.jpg',
      teethAfterImage: '/images/digital-implant-before-after/teeth-after-3.jpg'
    },
    {
      name: '최●●',
      gender: '60대 남성',
      faceBeforeImage: '/images/digital-implant-before-after/face-before-4.jpg',
      faceAfterImage: '/images/digital-implant-before-after/face-after-4.jpg',
      teethBeforeImage: '/images/digital-implant-before-after/teeth-before-4.jpg',
      teethAfterImage: '/images/digital-implant-before-after/teeth-after-4.jpg'
    },
    {
      name: '정●●',
      gender: '60대 여성',
      faceBeforeImage: '/images/digital-implant-before-after/face-before-5.jpg',
      faceAfterImage: '/images/digital-implant-before-after/face-after-5.jpg',
      teethBeforeImage: '/images/digital-implant-before-after/teeth-before-5.jpg',
      teethAfterImage: '/images/digital-implant-before-after/teeth-after-5.jpg'
    },
    {
      name: '한●●',
      gender: '70대 남성',
      teethBeforeImage: '/images/digital-implant-before-after/teeth-before-6.jpg',
      teethAfterImage: '/images/digital-implant-before-after/teeth-after-6.jpg'
    }
  ];

  const displayedCases = showMore ? cases : cases.slice(0, 3);

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-white tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              디지털가이드  <br />전체임플란트 전후 사례
            </h2>
          </div>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {displayedCases.map((caseItem, index) => (
            <div key={index} className="bg-white border border-[#f3f6fb] border-solid rounded-[24px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
                    {/* 얼굴 사진 Before */}
                    {caseItem.faceBeforeImage && (
                      <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={caseItem.faceBeforeImage}
                            alt="얼굴 Before"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Blur overlay for non-logged in users */}                        {/* Before Badge */}
                        <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                          <div className="bg-[#292a2f] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                            <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                              얼굴 Before
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 얼굴 사진 After */}
                    {caseItem.faceAfterImage && (
                      <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={caseItem.faceAfterImage}
                            alt="얼굴 After"
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* After Badge */}
                        <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                          <div className="bg-[#008095] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                            <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                              얼굴 After
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 치아 사진 Before */}
                    <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.teethBeforeImage}
                          alt="치아 Before"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Blur overlay for non-logged in users */}                      {/* Before Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-[#292a2f] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                          <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                            치아 Before
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 치아 사진 After */}
                    <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={caseItem.teethAfterImage}
                          alt="치아 After"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* After Badge */}
                      <div className="absolute box-border flex flex-col gap-2.5 items-start left-0 p-3 top-0 z-10">
                        <div className="bg-[#008095] box-border flex flex-col gap-2.5 items-center justify-center px-2.5 py-[5px] relative rounded-[10px] shrink-0">
                          <p className="font-semibold leading-[1.4] not-italic text-[13px] text-nowrap text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                            치아 After
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <p className="font-semibold leading-[1.4] not-italic text-[#9298a6] text-[15px] text-center tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {caseItem.name} · {caseItem.gender}
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
              className="bg-white box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold leading-[1.5] not-italic text-[#008095] text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                후기 더보기
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
