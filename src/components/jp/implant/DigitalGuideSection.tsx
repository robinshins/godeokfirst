'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/digital1.svg',
      description: '3D口腔スキャンシステムで\n口腔内をスキャンし精密診断'
    },
    {
      number: 2,
      image: '/images/digital2.svg',
      description: '口腔構造を考慮してコンピューター上で実現\n切開なしで歯を配置する計画'
    },
    {
      number: 3,
      image: '/images/digital3.svg',
      description: '治療部位に直立ガイド装置を装着\n1mmの誤差を最小化'
    },
    {
      number: 4,
      image: '/images/digital4.svg',
      description: '最小限の切開で他の施術より治療時間を短縮\n痛みと腫れを最小化'
    },
    {
      number: 5,
      image: '/images/digital5.svg',
      description: '状況に応じたシミュレーション手術\nエラーを最小化し治療満足度を向上'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
            メディス歯科は常に <br /> 2回手術を行います
            </h2>
            <div className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
              院長が仮想インプラント手術を通じて<br />
              最適な配置位置を直接設計し、<br />
              その後実際の手術を進行<br />
              <br />
              <span className="font-bold text-[#006aff]">迅速で快適な手術</span>で<br />
              腫れと痛みを最小化し、<br />
              骨移植を最小化
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
                  <div className="bg-[#006aff] flex items-center justify-center rounded-lg w-10 h-10">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6">
                <p className="font-semibold leading-[1.6] text-[15px] text-black tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col gap-6 items-center relative shrink-0 w-full mt-10">
          <h3 className="font-bold leading-[1.35] text-[28px] text-black tracking-[-0.56px] text-center w-full" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
            実際の施術事例
          </h3>
          <div className="flex flex-col gap-4 w-full">
            {caseStudies.map((image, index) => (
              <div key={index} className="relative w-full aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`全体インプラント施術事例 ${index + 1}`}
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
