'use client';

import Image from 'next/image';

export default function ThreeStepNewSection() {
  const steps = [
    {
      icon: '/icons/tooth.svg',
      label: '1st Temporary',
      title: 'Immediate Restoration',
      description: 'Placed immediately after surgery\nso daily life can resume right away'
    },
    {
      icon: '/icons/crown.svg',
      label: '2nd Bite Stabilization',
      title: 'Precision Bite Adjustment',
      description: 'After 2 weeks, custom fine-tuning\nof the bite alignment'
    },
    {
      icon: '/icons/implant-group.svg',
      label: '3rd Final Temporary',
      title: 'Perfect Bite Verification',
      description: 'Before final prosthetics fabrication,\nthe perfect bite is verified once more'
    },
    {
      icon: '/icons/tooth-shine.svg',
      label: 'Final Prosthetics',
      title: 'Lifetime Teeth',
      description: 'Perfectly personalized final prosthetics\nare placed after all adjustments are complete'
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
            alt="Godeok First Dental"
            width={375}
            height={84}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Godeok First Dental&apos;s Exclusive<br />
            3-Step Temporary Teeth
          </h2>
          <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Not just one round of temporary teeth,<br />
            but 3 steps of precision adjustment<br />
            for the comfort of your own teeth
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
