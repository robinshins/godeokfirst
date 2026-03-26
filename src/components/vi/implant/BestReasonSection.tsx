'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
      image: '/images/goduk_images/원장력 등 걸려있사진.jpg',
      title: 'BV Nha khoa ĐH Chosun',
      subtitle: 'Từng là giáo sư thỉnh giảng'
    },
    {
      image: '/images/goduk_images/각종인증서.png',
      title: 'Osstem·Point·Dentis',
      subtitle: 'Cố vấn Implant'
    },
    {
      image: '/images/goduk_images/수술실.jpg',
      title: 'Hướng dẫn kỹ thuật số',
      subtitle: 'Hệ thống phẫu thuật chính xác'
    },
    {
      image: '/images/goduk_images/스캐너사진.jpg',
      title: '3D CT · Máy quét miệng',
      subtitle: 'Trang bị đầy đủ thiết bị mới nhất'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          Lý do Implant <span className="text-[#008095]">Implant tốt nhất</span><br />
          Lý do nên chọn
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
