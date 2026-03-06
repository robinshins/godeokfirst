'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
      image: '/images/implant-reason-seminar-1.png',
      title: '전국 치과의사 대상',
      subtitle: '학술 강연'
    },
    {
      image: '/images/implant-reason-seminar-2.png',
      title: '메가젠 임플란트',
      subtitle: '주요 자문의'
    },
    {
      image: '/images/implant-reason-seminar-3.png',
      title: '조선대학교',
      subtitle: '외래교수'
    },
    {
      image: '/images/implant-reason-seminar-4.png',
      title: '10년 간',
      subtitle: '재수술 0건'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          고덕에서 <span className="text-[#008095]">최고 수준</span><br />
          임플란트를 하는 이유
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
