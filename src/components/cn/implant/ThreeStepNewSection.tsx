'use client';

import Image from 'next/image';

export default function ThreeStepNewSection() {
  const steps = [
    {
      icon: '/icons/tooth.svg',
      label: '第1阶段临时牙',
      title: '即刻恢复',
      description: '手术后立即安装\n可即刻恢复日常生活'
    },
    {
      icon: '/icons/crown.svg',
      label: '第2阶段咬合稳定',
      title: '精密咬合调整',
      description: '2周后根据个人情况\n精细调整咬合状态'
    },
    {
      icon: '/icons/implant-group.svg',
      label: '第3阶段最终临时',
      title: '完美咬合确认',
      description: '最终修复体制作前\n再次确认完美咬合'
    },
    {
      icon: '/icons/tooth-shine.svg',
      label: '最终修复',
      title: '终身我的牙齿',
      description: '安装所有调整完成后\n完美个性化的最终修复体'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Background gradient effect */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[379px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/three-step-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/고덕퍼스트치과-로고-(블랙).png"
            alt="高德First牙科"
            width={375}
            height={84}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            高德First牙科独有的<br />
            3阶段临时牙
          </h2>
          <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            不是一次临时牙就结束<br />
            通过3个阶段的精密调整<br />
            打造如同自己牙齿般的舒适感
          </p>
        </div>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col gap-10 items-start relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {steps.map((step, index) => (
            <div key={index} className="bg-white box-border flex flex-col gap-[14px] items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
              {/* Icon */}
              <div className="relative shrink-0 size-[80px]">
                <Image
                  src={step.icon}
                  alt={step.label}
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>

              {/* Label */}
              <p className="font-bold leading-[1.5] not-italic text-[#008095] text-[17px] text-center tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {step.label}
              </p>

              {/* Title */}
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {step.title}
              </p>

              {/* Description */}
              <p className="font-bold leading-[1.5] not-italic text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
