'use client';

import Image from 'next/image';

export default function SpecialTechSection() {
  const features = [
    '瑞典卡罗琳斯卡医科大学开发的技术',
    '直接附着在牙齿和牙龈上的益生菌',
    '在牙膏和漱口水中也能存活的强大菌株',
    '不产生糖分和蛀牙酸的安全菌株'
  ];

  return (
    <div className="bg-white w-full relative flex justify-center">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/special-tech-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              庆星美迪斯的独特<br />
              特殊技术
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {/* Features Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                我们诊所引以为豪的
              </p>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 w-6 h-6">
                      <Image
                        src="/icons/check-blue.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 items-start justify-center">
                      <p className="font-bold leading-[1.5] not-italic text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Oral Bacteria Therapy Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 box-border flex flex-col gap-4 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full border border-blue-200">
              <h3 className="font-bold leading-[1.35] not-italic text-xl text-black tracking-[-0.4px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                终身口腔护理
              </h3>
              <div className="bg-white h-[200px] overflow-hidden relative rounded-[16px] shrink-0 w-full">
                <Image
                  src="/images/beneficial-bacteria.jpg"
                  alt="口腔益生菌疗法"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 items-start w-full">
                <p className="font-bold leading-[1.4] not-italic text-lg text-black tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  口腔益生菌疗法
                </p>
                <p className="font-medium leading-[1.5] not-italic text-[15px] text-[#5d5f6d] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  使用瑞典卡罗琳斯卡医科大学开发的益生菌，长期保持种植牙健康
                </p>
              </div>
            </div>

            {/* Waterpik Gift Card */}
            <div className="bg-[#006aff] box-border flex flex-col gap-6 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full">
              <div className="bg-white h-[245px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                <Image
                  src="/images/waterpik.jpeg"
                  alt="冲牙器"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <div className="flex flex-col gap-2 items-start leading-[1.35] not-italic relative shrink-0 text-center text-white w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="font-bold relative shrink-0 text-2xl tracking-[-0.48px] w-full">
                    价值90美元
                  </p>
                  <p className="font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">
                    冲牙器赠送
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.2)] box-border flex flex-col gap-6 items-start p-6 relative rounded-[20px] shrink-0 w-full">
                  <p className="font-bold leading-[1.5] not-italic text-[17px] text-center text-white tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    参加全口种植牙评估活动即可获得！
                  </p>
                  <div className="h-0 relative shrink-0 w-full">
                    <Image
                      src="/icons/line-divider.svg"
                      alt=""
                      width={247}
                      height={1}
                      className="w-full"
                    />
                  </div>
                  <div className="font-bold leading-[1.5] not-italic text-lg text-center text-white tracking-[-0.36px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    有效清除种植牙周围的食物残渣<br />
                    并按摩牙龈！<br />
                    我们赠送您口腔护理<br />
                    必备的冲牙器
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
