'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DoctorIntroSection() {
  const [showDetails, setShowDetails] = useState(false);

  const doctors = [
    {
      name: 'Доктор Ким Донсок',
      position: 'Главный врач',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Магистр интегративной стоматологии',
        'Продвинутая стоматология, Сеульский национальный университет',
        'Директор Всемирного общества оральных имплантатов',
        'Директор Корейской академии челюстно-лицевой имплантологии',
        'Член исследовательской группы протезирования, Техасский университет A&M',
        'Сертифицированный стоматолог-специалист (Министерство здравоохранения)',
        'Консультант Osstem/Neo Implant',
        '№1 по операциям с цифровым направителем (Пусан Намгу)',
        '0 повторных операций за 10 лет'
      ],
      details: [
        'Имплантология, Сеульский национальный университет',
        'Консультант по исследованиям, Hiossen Implant',
        'Член Корейской академии эстетической стоматологии',
        'Член Корейской академии интегративной стоматологии',
        'Член Корейской академии консервативной стоматологии',
        'Сертификат курса лечения ВНЧС (HIRA)'
      ]
    },
    {
      name: 'Доктор Пэ Инхе',
      position: 'Директор консервативного лечения',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'Двойная лицензия: стоматолог и фармацевт',
        'Сертифицированный специалист по консервативной стоматологии (Министерство здравоохранения)'
      ],
      details: [
        'Ординатура, Стоматологическая больница Пусанского национального университета',
        'Доктор наук, консервативная стоматология (Пусанский национальный университет)',
        'Магистр стоматологии с отличием',
        'Член Корейской академии консервативной стоматологии',
        'Член Корейской академии эндодонтии',
        'Член Корейской академии адгезивной стоматологии',
        'Член Корейского общества стоматологических материалов',
        'Член Корейской академии эстетической стоматологии',
        'Бывший директор стоматологической клиники Good Smile',
        'Бывший директор стоматологической клиники Plante'
      ]
    }
  ];

  const mainDoctor = doctors[0];

  return (
    <div className="bg-white w-full py-8">
      <div className="max-w-[375px] mx-auto px-4">
        {/* Doctor Card */}
        <div className="bg-white border border-[#e9ebf1] rounded-[24px] p-6">
          {/* Header with Image */}
          <div className="flex items-start gap-5 mb-5">
            <div className="flex-shrink-0 h-[120px] w-[90px] rounded-[16px] overflow-hidden">
              <div className="relative w-full h-[200px]">
                <Image
                  src={mainDoctor.image}
                  alt={`${mainDoctor.name}, ${mainDoctor.position}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="flex gap-1.5 items-end mb-3">
                <h2 className="font-['Noto_Sans',sans-serif] font-bold text-[22px] text-black tracking-[-0.44px]">
                  {mainDoctor.name}
                </h2>
              </div>
              <p className="font-['Noto_Sans',sans-serif] font-semibold text-[15px] text-[#5d5f6d] tracking-[-0.3px] mb-2">
                {mainDoctor.position}
              </p>
              <div className="font-['Noto_Sans',sans-serif] font-medium text-[11.5px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px]">
                {mainDoctor.credentials.slice(0, 3).map((cred, index) => (
                  <p key={index} className="mb-0.5">{cred}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Main Credentials */}
          <div className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
            {mainDoctor.credentials.slice(3).map((cred, index) => (
              <p key={index} className="mb-0">{cred}</p>
            ))}
          </div>

          {/* Expandable Details */}
          {showDetails && (
            <div>
              {/* Additional credentials for Dr. Kim */}
              <div className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
                {mainDoctor.details.map((detail, index) => (
                  <p key={index} className="mb-0">{detail}</p>
                ))}
              </div>

              {/* Dr. Bae information */}
              {doctors[1] && (
                <div className="mt-5 pt-5 border-t border-[#e9ebf1]">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 h-[80px] w-[60px] rounded-[12px] overflow-hidden">
                      <div className="relative h-full w-full">
                        <Image
                          src={doctors[1].image}
                          alt={`${doctors[1].name}, ${doctors[1].position}`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="flex-1 pt-0.5">
                      <div className="flex gap-1.5 items-end mb-2">
                        <h3 className="font-['Noto_Sans',sans-serif] font-bold text-[18px] text-black tracking-[-0.36px]">
                          {doctors[1].name}
                        </h3>
                      </div>
                      <p className="font-['Noto_Sans',sans-serif] font-semibold text-[13px] text-[#5d5f6d] tracking-[-0.26px] mb-2">
                        {doctors[1].position}
                      </p>
                      <div className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.6] tracking-[-0.26px]">
                        {doctors[1].credentials.map((cred, index) => (
                          <p key={index} className="mb-0.5">{cred}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
                    {doctors[1].details.map((detail, index) => (
                      <p key={index} className="mb-0">{detail}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full mt-5 pt-5 border-t border-[#e9ebf1] flex items-center justify-center gap-1 transition-colors hover:opacity-80"
          >
            <span className="font-['Noto_Sans',sans-serif] font-bold text-[15px] text-[#006aff] tracking-[-0.3px]">
              {showDetails ? 'Свернуть' : 'Показать все квалификации'}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#006aff"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
