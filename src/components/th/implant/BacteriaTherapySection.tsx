'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          ป้องกันการอักเสบของรากฟันเทียม<br />
          <span className="text-[#006aff]">ตรวจและรักษาแบคทีเรียปริทันต์</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="การตรวจและรักษาแบคทีเรียปริทันต์"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            ก่อนการผ่าตัดรากฟันเทียม <span className="font-bold text-[#0b1727]">ตรวจแบคทีเรียปริทันต์</span><br />
            เพื่อระบุและรักษาแบคทีเรียที่ก่อให้เกิดการอักเสบล่วงหน้า
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            ลดความเสี่ยงการอักเสบให้น้อยที่สุด<br />
            เพิ่มอัตราความสำเร็จในระยะยาวของรากฟันเทียม
          </p>
        </div>
      </div>
    </section>
  );
}
