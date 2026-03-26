'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          Phòng ngừa viêm Implant<br />
          <span className="text-[#008095]">Xét nghiệm vi khuẩn nha chu · Điều trị</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="Xét nghiệm và điều trị vi khuẩn nha chu"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            Trước Phẫu thuật cấy ghép Implant <span className="font-bold text-[#0b1727]">xét nghiệm vi khuẩn nha chu</span> thông qua<br />
            xác định trước vi khuẩn gây viêm và điều trị.
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            Giảm thiểu nguy cơ viêm nhiễm<br />
            nâng cao tỷ lệ thành công lâu dài của Implant.
          </p>
        </div>
      </div>
    </section>
  );
}
