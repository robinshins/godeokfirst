'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          Implant yallig'lanishining oldini olish<br />
          <span className="text-[#006aff]">Parodontal bakteriya tekshiruvi va davolash</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="Parodontal bakteriya tekshiruvi va davolash"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            Implant operatsiyasidan oldin <span className="font-bold text-[#0b1727]">parodontal bakteriya tekshiruvi</span> orqali<br />
            yallig'lanishga sabab bo'ladigan bakteriyalarni oldindan aniqlash va davolash amalga oshiriladi.
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            Yallig'lanish xavfini minimallashtirib,<br />
            implantning uzoq muddatli muvaffaqiyat darajasini oshiradi.
          </p>
        </div>
      </div>
    </section>
  );
}
