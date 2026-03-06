'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DoctorIntroSection() {
  const [showDetails, setShowDetails] = useState(false);

  const doctors = [
    {
      name: 'Доктор Ким Донсок',
      position: 'Ерөнхий захирал',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Нэгдсэн шүдний эмчилгээний магистр',
        'Дэвшилтэт шүдний эмчилгээ, Сөүлийн Үндэсний Их Сургууль',
        'Дэлхийн амны имплантын нийгэмлэгийн захирал',
        'Солонгосын эрүү нүүрний имплантын академийн захирал',
        'Техасын A&M Их Сургуулийн протезийн судалгааны гишүүн',
        'Баталгаажсан шүдний мэргэжилтэн (Эрүүл мэндийн яам)',
        'Osstem/Neo Implant зөвлөх',
        'Дижитал гайд имплант мэс заслаар №1 (Пусан Намгү)',
        '10 жилд 0 дахин мэс засал'
      ],
      details: [
        'Имплант шүдний эмчилгээ, Сөүлийн Үндэсний Их Сургууль',
        'Hiossen Implant судалгааны зөвлөх',
        'Солонгосын гоо зүйн шүдний академийн гишүүн',
        'Солонгосын нэгдсэн шүдний академийн гишүүн',
        'Солонгосын хадгалах шүдний академийн гишүүн',
        'Эрүү үений эмчилгээний баталгаажсан курс (HIRA)'
      ]
    },
    {
      name: 'Доктор Бэ Инхё',
      position: 'Хадгалах эмчилгээний захирал',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'Хос лиценз: Шүдний эмч & Эм зүйч',
        'Баталгаажсан хадгалах шүдний мэргэжилтэн (Эрүүл мэндийн яам)'
      ],
      details: [
        'Резидент, Пусаны Үндэсний Их Сургуулийн Шүдний Эмнэлэг',
        'Доктор (PhD), Хадгалах шүдний эмчилгээ (Пусаны Үндэсний Их Сургууль)',
        'Шүдний анагаах ухааны магистр, хамгийн өндөр үнэлгээтэй',
        'Солонгосын хадгалах шүдний академийн гишүүн',
        'Солонгосын эндодонтийн академийн гишүүн',
        'Солонгосын наалдамхай шүдний академийн гишүүн',
        'Солонгосын шүдний материалын нийгэмлэгийн гишүүн',
        'Солонгосын гоо зүйн шүдний академийн гишүүн',
        'Good Smile шүдний эмнэлгийн өмнөх захирал',
        'Plante шүдний эмнэлгийн өмнөх захирал'
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
              {showDetails ? 'Хураах' : 'Бүх мэдээллийг харах'}
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
