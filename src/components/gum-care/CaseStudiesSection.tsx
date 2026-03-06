'use client';

import Image from 'next/image';

export default function CaseStudiesSection() {
  const cases = [
    {
      quote: [
        '"뼈가 심하게 녹았는데',
        '잇몸치료로 뼈가 차올랐어요"',
      ],
      beforeImage: '/images/gum-treatment-cases/bone-recovery/step1-extraction-needed.jpg',
      afterImage: '/images/gum-treatment-cases/bone-recovery/step4-molar-saved.jpg',
      title: '심한 잇몸병으로 뼈가 많이 녹은 상태',
      result: '잇몸치료와 뼈이식으로 뼈 재생 후 임플란트 식립',
    },
    {
      quote: [
        '"정기적인 관리 덕분에',
        '50대에도 모든 치아가 건강해요"',
      ],
      beforeImage: '/images/gum-treatment-cases/regular-care/first-visit.jpg',
      afterImage: '/images/gum-treatment-cases/regular-care/under-management.jpg',
      title: '치석과 잇몸 염증이 심했던 상태',
      result: '정기적인 스케일링과 관리로 건강하게 유지',
    },
  ];

  return (
    <div className="bg-[#f8f9fb] w-full px-4 py-[60px]">
      <div className="max-w-[430px] mx-auto flex flex-col gap-5 items-start">

        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <p
            className="font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            실제 치료 사례
          </p>
          <p
            className="font-semibold leading-[1.4] text-[#727582] text-sm text-center tracking-[-0.28px] w-full"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            정기적인 잇몸 치료로 임플란트 없이 건강한 치아 유지
          </p>
        </div>

        {/* Case Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center overflow-hidden rounded-[24px] w-full"
              style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)' }}
            >
              <div className="flex flex-col gap-5 items-center justify-center px-4 py-6 w-full">
                {/* Quote */}
                <div
                  className="font-bold leading-[1.4] text-[22px] text-black text-center tracking-[-0.44px] w-full"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  <p className="mb-0">{caseItem.quote[0]}</p>
                  <p>{caseItem.quote[1]}</p>
                </div>

                {/* Images */}
                <div className="flex flex-col gap-3 items-start w-full">
                  {/* Before Image */}
                  <div className="relative w-full">
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src={caseItem.beforeImage}
                        alt="치료 전"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                      <p
                        className="font-semibold leading-[1.4] text-[13px] text-white tracking-[-0.26px]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        Before
                      </p>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative w-full">
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src={caseItem.afterImage}
                        alt="치료 후"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute left-3 top-3 bg-[#008095] px-2.5 py-[5px] rounded-[10px] z-10">
                      <p
                        className="font-semibold leading-[1.4] text-[13px] text-white tracking-[-0.26px]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        After
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2 items-start leading-[1.4] text-center w-full">
                  <p
                    className="font-bold text-base text-black tracking-[-0.32px] w-full"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {caseItem.title}
                  </p>
                  <p
                    className="font-semibold text-[15px] text-[#5d5f6d] tracking-[-0.3px] w-full"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {caseItem.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
