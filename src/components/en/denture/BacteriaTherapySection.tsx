'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          Implant Inflammation Prevention<br />
          <span className="text-[#008095]">Periodontal Bacteria Testing & Treatment</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="Periodontal Bacteria Testing and Treatment"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            Before implant surgery, a <span className="font-bold text-[#0b1727]">periodontal bacteria test</span> identifies<br />
            and treats bacteria that cause inflammation in advance.
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            By minimizing the risk of inflammation,<br />
            we increase the long-term success rate of implants.
          </p>
        </div>
      </div>
    </section>
  );
}
