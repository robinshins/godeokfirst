'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: '口腔内部をスキャンする\n3D口腔スキャニングシステムで精密診断'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: 'コンピューター上で再現された口腔構造を考慮し切開なしで歯を埋入する計画'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: '埋入誘導装置を施術部位に装着し1mmの誤差を最小化'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: '最小切開で他の施術に比べ施術時間短縮と痛みおよび腫れ最小化'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: '状況に応じた模擬手術で誤差最小化と施術満足度向上'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="text-center w-full">
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            コドクファースト歯科は常に
            <br />
            <span className="text-[#008095] relative inline-block">
              2回手術します
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-medium leading-[1.6] text-[#666] text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            代表院長が直接バーチャルインプラント手術で
            <br />
            最適な埋入位置を設計した後
            <br />
            実際の手術を行います
          </p>
          <div className="mt-5 inline-block bg-gradient-to-r from-[#008095] to-[#006d80] px-6 py-4 rounded-2xl shadow-lg shadow-[#008095]/20">
            <p className="font-bold text-white text-[15px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              早くて快適な手術で
              <br />
              腫れと痛み、骨移植を最小化
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
