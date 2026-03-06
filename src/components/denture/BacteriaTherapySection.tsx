'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          임플란트 염증 예방<br />
          <span className="text-[#008095]">치주 세균 검사 · 치료</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="치주 세균 검사 및 치료"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            임플란트 수술 전 <span className="font-bold text-[#0b1727]">치주 세균 검사</span>를 통해<br />
            염증을 일으키는 세균을 미리 파악하고 치료합니다.
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            염증 위험을 최소화하여<br />
            임플란트의 장기적인 성공률을 높입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
