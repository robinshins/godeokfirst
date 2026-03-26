'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
      image: '/images/implant-reason-seminar-1.png',
      title: 'สำหรับทันตแพทย์ทั่วประเทศ',
      subtitle: 'บรรยายวิชาการ'
    },
    {
      image: '/images/implant-reason-seminar-2.png',
      title: 'Megagen รากฟันเทียม',
      subtitle: 'ที่ปรึกษาหลัก'
    },
    {
      image: '/images/implant-reason-seminar-3.png',
      title: 'ม.โชซอน',
      subtitle: 'อาจารย์พิเศษ'
    },
    {
      image: '/images/implant-reason-seminar-4.png',
      title: 'ตลอด 10 ปี',
      subtitle: 'ผ่าตัดซ้ำ 0ครั้ง'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          ที่โกด็อก <span className="text-[#008095]">ระดับสูงสุด</span><br />
          รากฟันเทียมเหตุผลที่ทำ
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src={reason.image}
                  alt={`${reason.title} ${reason.subtitle}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#0b1727] leading-[1.4]">
                  {reason.title}
                </p>
                <p className="text-lg font-extrabold text-[#0b1727] leading-[1.3]">
                  {reason.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
