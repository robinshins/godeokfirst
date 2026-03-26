'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
      image: '/images/implant-reason-seminar-1.png',
      title: '面向全国牙科医生',
      subtitle: '学术演讲'
    },
    {
      image: '/images/implant-reason-seminar-2.png',
      title: 'MegaGen种植牙',
      subtitle: '主要顾问'
    },
    {
      image: '/images/implant-reason-seminar-3.png',
      title: '朝鲜大学',
      subtitle: '客座教授'
    },
    {
      image: '/images/implant-reason-seminar-4.png',
      title: '10年间',
      subtitle: '再手术 0例'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          在高德拥有<span className="text-[#008095]">最高水平</span><br />
          种植牙的理由
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
