'use client';

import Image from 'next/image';

export default function BestReasonSection() {
  const reasons = [
    {
 image:'/images/goduk_images/ квалификация и т.д. фото.jpg',
      title: 'стоматологической больницы Чосонбольница',
      subtitle: 'Бывший приглашенный профессор'
    },
    {
 image:'/images/goduk_images/ сертификация.png',
      title: 'Osstem·Point·Dentis',
      subtitle: 'Имплант консультативный советвон'
    },
    {
 image:'/images/goduk_images/.jpg',
      title: 'цифровая навигация',
      subtitle: 'точный операция система'
    },
    {
      image: '/images/goduk_images/сканерфото.jpg',
      title: '3D CT · полость ртасканер',
 subtitle:'новейший оборудование стоимость'
    }
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-10">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
 Годок <span className="text-[#008095]"> Имплант</span><br />
          почему необходимо
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
