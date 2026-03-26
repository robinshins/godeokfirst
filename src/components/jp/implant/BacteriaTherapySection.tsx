'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          インプラント炎症予防<br />
          <span className="text-[#008095]">歯周細菌検査・治療</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="歯周細菌検査および治療"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            インプラント手術前に <span className="font-bold text-[#0b1727]">歯周細菌検査</span>を通じて<br />
            炎症を引き起こす細菌を事前に把握し治療します。
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            炎症リスクを最小化して<br />
            インプラントの長期的な成功率を高めます。
          </p>
        </div>
      </div>
    </section>
  );
}
