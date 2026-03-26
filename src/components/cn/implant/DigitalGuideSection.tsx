'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: '通过扫描口腔内部的\n3D口腔扫描系统进行精密诊断'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: '根据电脑上呈现的口腔结构，规划无切口植牙方案'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: '将引导装置安装在手术部位，将误差最小化至1mm'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: '最小切口使手术时间缩短，疼痛和肿胀最小化'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: '通过模拟手术最小化误差，提高手术满意度'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="text-center w-full">
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            高德First牙科始终
            <br />
            <span className="text-[#008095] relative inline-block">
              进行2次手术
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-medium leading-[1.6] text-[#666] text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            代表院长亲自进行虚拟种植手术
            <br />
            设计最佳植入位置后
            <br />
            再进行实际手术
          </p>
          <div className="mt-5 inline-block bg-gradient-to-r from-[#008095] to-[#006d80] px-6 py-4 rounded-2xl shadow-lg shadow-[#008095]/20">
            <p className="font-bold text-white text-[15px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              快速舒适的手术
              <br />
              肿胀、疼痛和骨移植最小化
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
