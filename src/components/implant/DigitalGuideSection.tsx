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
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="text-center w-full">
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            고덕퍼스트치과는 항상
            <br />
            <span className="text-[#008095] relative inline-block">
              2번 수술합니다
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-medium leading-[1.6] text-[#666] text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            대표원장이 직접 가상 임플란트 수술로
            <br />
            최적의 식립 위치를 설계한 후
            <br />
            실제 수술을 진행합니다
          </p>
          <div className="mt-5 inline-block bg-gradient-to-r from-[#008095] to-[#006d80] px-6 py-4 rounded-2xl shadow-lg shadow-[#008095]/20">
            <p className="font-bold text-white text-[15px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              빠르고 편안한 수술로
              <br />
              붓기와 통증, 뼈이식 최소화
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="group bg-white border border-[#edf2f7] rounded-3xl overflow-hidden w-full shadow-sm hover:border-[#008095] hover:shadow-lg transition-all duration-300">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8fbfd]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-gradient-to-br from-[#008095] to-[#006d80] flex items-center justify-center rounded-xl w-10 h-10 shadow-lg shadow-[#008095]/30">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-5">
                <p className="font-medium leading-[1.6] text-[15px] text-[#3e3a3a] tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
