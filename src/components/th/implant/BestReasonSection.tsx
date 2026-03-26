'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
      image: '/images/goduk_images/원장이력 등 걸려있는사진.jpg',
      title: 'ร.พ.ทันตกรรม ม.โชซอน',
      subtitle: 'อดีตอาจารย์พิเศษ'
    },
    {
      image: '/images/goduk_images/각종인증서.png',
      title: 'Osstem·Point·Dentis',
      subtitle: 'ที่ปรึกษารากฟันเทียม'
    },
    {
      image: '/images/goduk_images/수술실.jpg',
      title: 'ไกด์ดิจิทัล',
      subtitle: 'ระบบผ่าตัดแม่นยำ'
    },
    {
      image: '/images/goduk_images/스캐너사진.jpg',
      title: '3D CT · สแกนเนอร์ช่องปาก',
      subtitle: 'อุปกรณ์ทันสมัยครบครัน'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          เหตุผลที่ต้องเลือก<br /><span className="text-[#008095]">รากฟันเทียมที่ดีที่สุด</span>ที่ Godeok
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
                <p className="text-lg font-extrabold text-[#008095] leading-[1.3]">
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
