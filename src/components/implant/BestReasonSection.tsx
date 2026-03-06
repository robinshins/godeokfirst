'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
      image: '/images/goduk_images/원장이력 등 걸려있는사진.jpg',
      title: '조선대 치과병원',
      subtitle: '외래교수 역임'
    },
    {
      image: '/images/goduk_images/각종인증서.png',
      title: '오스템·포인트·덴티스',
      subtitle: '임플란트 자문위원'
    },
    {
      image: '/images/goduk_images/수술실.jpg',
      title: '디지털 가이드',
      subtitle: '정밀 수술 시스템'
    },
    {
      image: '/images/goduk_images/스캐너사진.jpg',
      title: '3D CT · 구강스캐너',
      subtitle: '최신 장비 완비'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          고덕에서 <span className="text-[#008095]">최고의 임플란트</span>를<br />
          받아야 하는 이유
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
