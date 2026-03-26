'use client';

import Image from 'next/image';

export default function BacteriaTherapySection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          รากฟันเทียม การอักเสบ ป้องกัน<br />
          <span className="text-[#008095]">ปริทันต์ เชื้อแบคทีเรีย ตรวจ · รักษา</span>
        </h2>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden">
          <Image
            src="/images/implant-bacteria-therapy.png"
            alt="ปริทันต์ เชื้อแบคทีเรีย ตรวจและรักษา"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
            การผ่าตัดรากฟันเทียม ก่อน <span className="font-bold text-[#0b1727]">ปริทันต์ เชื้อแบคทีเรีย การตรวจ</span>ผ่าน<br />
            ตรวจหาเชื้อแบคทีเรียที่ก่อการอักเสบล่วงหน้าและรักษาค่ะ.
          </p>
          <p className="text-sm text-[#64748b] text-center leading-[1.5] tracking-[-0.01em]">
            การอักเสบ ความเสี่ยง น้อยที่สุดการเพื่อ<br />
            เพิ่มอัตราความสำเร็จระยะยาวของรากฟันเทียมค่ะ.
          </p>
        </div>
      </div>
    </section>
  );
}
