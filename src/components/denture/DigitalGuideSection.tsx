'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: '구강 내부를 스캐닝하는\n3D구강 스캐닝 시스템으로 정밀 진단'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: '컴퓨터상에서 구현된 구강 구조를 고려해 절개없이 치아를 심는 계획'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: '직립 유도 장치를 시술 부위에 장착해 1mm의 오차 최소화'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: '최소 절개로 타 시술에 비해 시술시간 단축과 통증 및 부기 최소화'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: '상황에 따른 모의수술 진행으로 오차 최소화와 시술 만족도 상승'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            고덕퍼스트치과는 항상 <br /> 2번 수술합니다
            </h2>
            <div className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              대표원장이 직접 가상 임플란트 수술로<br />
              최적의 식립 위치를 설계한 후<br />
              실제 수술을 진행합니다<br />
              <br />
              <span className="font-bold text-[#008095]">빠르고 편안한 수술</span>로<br />
              붓기와 통증을 최소화하고<br />
              뼈이식도 최소화합니다
            </div>
          </div>
        </div>



        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-[#f3f6fb] rounded-[24px] overflow-hidden w-full">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8f9fa]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-[#008095] flex items-center justify-center rounded-lg w-10 h-10">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6">
                <p className="font-semibold leading-[1.6] text-[15px] text-black tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col gap-6 items-center relative shrink-0 w-full mt-10">
          <h3 className="font-bold leading-[1.35] text-[28px] text-black tracking-[-0.56px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            실제 시술 사례
          </h3>
          <div className="flex flex-col gap-4 w-full">
            {caseStudies.map((image, index) => (
              <div key={index} className="relative w-full aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`전체 임플란트 시술 사례 ${index + 1}`}
                  fill
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
