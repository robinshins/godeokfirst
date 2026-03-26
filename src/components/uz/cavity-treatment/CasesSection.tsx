'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: 'Kariyes davolash',
    title: 'Oziq tish kariyesi, rezin bilan tiklash',
    summary: 'Kariyes sohasini aniq olib tashlab, tabiiy tish rangidagi rezin bilan toza tiklash',
    steps: [
      {
        img: '/임상사진/충치/김효연_충치_before.jpg',
        label: 'Davolashdan oldingi holat',
        desc: 'Oziq tishda kariyes rivojlangan holat. Tish yuzasida kariyes sababli rangning oʼzgarishi va shikastlanish aniqlangan.',
      },
      {
        img: '/임상사진/충치/김효연_충치_after.jpg',
        label: 'Davolash tugallandi',
        desc: 'Kariyes toʼliq olib tashlandi va tabiiy tish rangidagi rezin bilan tiklandi. Tish shakli toza tiklandi.',
      },
    ],
  },
  {
    num: '02',
    tag: 'Kariyes davolash',
    title: 'Koʼp sonli kariyes, aniq tiklash',
    summary: 'Bir nechta tishda paydo boʼlgan kariyesni bosqichma-bosqich aniq olib tashlab tiklash',
    steps: [
      {
        img: '/임상사진/충치-1/방준영_충치_before.jpg',
        label: 'Davolashdan oldingi holat',
        desc: 'Bir nechta oziq tishda kariyes rivojlangan holat. Mavjud tiklanma atrofida ikkilamchi kariyes aniqlangan.',
      },
      {
        img: '/임상사진/충치-1/방준영_충치_after.jpg',
        label: 'Davolash tugallandi',
        desc: 'Barcha kariyeslar olib tashlandi va har bir tishga mos tiklanma bilan tabiiy tarzda yakunlandi.',
      },
    ],
  },
  {
    num: '03',
    tag: 'Yoriq davolash',
    title: 'Tish yorilishi, oltin toj bilan tiklash',
    summary: 'Yorilgan tishni aniq tashxisdan soʼng oltin toj bilan himoya qilish',
    steps: [
      {
        img: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
        label: 'Rentgen tashxisi',
        desc: 'Rentgen surati orqali tish yorilishining joylashuvi va koʼlami aniq tekshiriladi.',
      },
      {
        img: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
        label: 'Oltin toj oʼrnatish tugallandi',
        desc: 'Yorilgan tish oltin toj bilan himoyalandi va qoʼshimcha sinishning oldini oladi. Yuqori chidamli oltin material bilan uzoq muddat barqaror foydalanish mumkin.',
      },
    ],
  },
  {
    num: '04',
    tag: 'Old tish protezi',
    title: 'Old tish protez bilan tiklash',
    summary: 'Shikastlangan old tishni aniq protezlash orqali tabiiy estetikani tiklash',
    steps: [
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
        label: 'Davolashdan oldingi holat',
        desc: 'Old tish shikastlangan boʼlib, estetik va funksional jihatdan yaxshilash kerak holat.',
      },
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
        label: 'Protez tiklash tugallandi',
        desc: 'Aniq protezlash orqali tabiiy tishga oʼxshash shakl va rang yaratildi.',
      },
    ],
  },
  {
    num: '05',
    tag: 'Old tish qayta protezlash',
    title: 'Old tish qayta protez davolash',
    summary: 'Mavjud protezni olib tashlab, yangi protez bilan qayta tiklab estetika va funksiyani yaxshilash',
    steps: [
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
        label: 'Davolashdan oldingi holat',
        desc: 'Mavjud protezning rangi oʼzgarishi va moslik pasayishi sababli qayta protezlash kerak holat.',
      },
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
        label: 'Qayta protezlash tugallandi',
        desc: 'Mavjud protez olib tashlandi va yangi protez bilan tabiiy tarzda tiklandi.',
      },
    ],
  },
  {
    num: '06',
    tag: 'Old tish estetik protez',
    title: 'Old tish estetik protez toj',
    summary: 'Old tish estetikasini toj bilan yaxshilab, tabiiy tabassumni tiklash',
    steps: [
      {
        img: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
        label: 'Davolashdan oldingi holat',
        desc: 'Old tish shakli va rangini yaxshilash kerak boʼlgan holat.',
      },
      {
        img: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
        label: 'Estetik protezlash tugallandi',
        desc: 'Estetik protez toj bilan tabiiy shakl va rang yaratildi.',
      },
    ],
  },
];

export default function CasesSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px]">
      <div className="px-5 max-w-[430px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[#008095] font-bold text-xs tracking-[0.12em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Clinical Results
          </p>
          <h2
            className="font-bold text-[28px] leading-[1.35] tracking-[-0.56px] text-[#151a24]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Kariyes davolash klinik natijalari,<br />
            jarayondan yakunigacha
          </h2>
          <p
            className="font-semibold text-[15px] leading-[1.6] text-[#727582]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Tashxisdan yakunigacha bosqichma-bosqich<br />
            haqiqiy davolash jarayonini tekshiring
          </p>
        </div>

        {/* Case Accordion */}
        <div className="flex flex-col gap-3">
          {cases.map((c, idx) => {
            const isOpen = openSet.has(idx);
            return (
              <div
                key={c.num}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)', scrollMarginTop: '64px' }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-5 py-4 flex items-center gap-3 text-left"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#e6f7f8] flex items-center justify-center">
                    <span
                      className="text-[#008095] font-bold text-[13px]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[#008095] text-[11px] font-bold"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.tag}
                    </span>
                    <p
                      className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#151a24] mt-0.5"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#9298a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-6 flex flex-col gap-1">
                    {/* Summary */}
                    <p
                      className="text-[13px] font-medium text-[#727582] leading-[1.6] mb-5 pb-4 border-b border-[#f0f3f8]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.summary}
                    </p>

                    {/* Steps */}
                    <div className="flex flex-col">
                      {c.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex gap-0">
                          {/* Timeline */}
                          <div className="flex flex-col items-center w-8 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-[#008095] flex items-center justify-center flex-shrink-0 z-10">
                              <span
                                className="text-white font-bold text-[10px]"
                                style={{ fontFamily: 'Pretendard, sans-serif' }}
                              >
                                {sIdx + 1}
                              </span>
                            </div>
                            {sIdx < c.steps.length - 1 && (
                              <div className="w-px flex-1 bg-[#d1e8eb] my-1" />
                            )}
                          </div>

                          {/* Content */}
                          <div className={`flex-1 pl-3 ${sIdx < c.steps.length - 1 ? 'pb-6' : ''}`}>
                            <p
                              className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#151a24] mb-2"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              {step.label}
                            </p>
                            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-[#f3f6fb] mb-2">
                              <Image
                                src={step.img}
                                alt={step.label}
                                fill
                                className="object-cover"
                                sizes="(max-width: 430px) 100vw, 390px"
                              />
                            </div>
                            <p
                              className="text-[13px] font-medium text-[#727582] leading-[1.6]"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Step count badge */}
                    <div className="mt-4 flex items-center gap-2 pt-4 border-t border-[#f0f3f8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#008095]" />
                      <span
                        className="text-[#008095] text-[12px] font-semibold"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        Jami {c.steps.length} bosqichli davolash jarayoni
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3" style={{ boxShadow: '0 2px 12px -4px rgba(21,26,36,0.08)' }}>
          <div className="w-8 h-8 rounded-xl bg-[#e6f7f8] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.5 11H7.5V7H8.5V11ZM8.5 6H7.5V5H8.5V6Z" fill="#008095" />
            </svg>
          </div>
          <p
            className="font-medium text-[13px] leading-[1.6] text-[#5d5f6d]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Barcha holatlar Godeok First Dental klinikasining haqiqiy klinik natijalaridir. Trios5 ogʼiz skaneri bilan aniq qoʼlga kiritiladi va Kompleks stomatologiya mutaxassisi shaxsan davolaydi.
          </p>
        </div>
      </div>
    </div>
  );
}
