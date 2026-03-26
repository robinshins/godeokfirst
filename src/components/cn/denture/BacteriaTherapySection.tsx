'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          种植牙 炎症 预防<br />
          <span className="text-[#008095]">牙周 细菌 检查 · 治疗</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="牙周 细菌 检查 和 治疗"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            通过种植牙手术前的<span className="font-bold text-[#0b1727]">牙周细菌检查</span><br />
            提前掌握并治疗引发炎症的细菌。
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            炎症 风险 最小化后<br />
            提高种植牙的长期成功率。
          </p>
        </div>
      </div>
    </section>
  );
}
