'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: 'кариес лечение',
    title: 'жевательные зубы кариес, композит реставрация',
 summary:'кариес область точный удаление и натуральный зуб цвет композит реставрация',
    steps: [
      {
        img: '/клиническийфото/кариес/Ким Хёён_кариес_before.jpg',
        label: 'Состояние до лечения',
 desc:'жевательные зубы кариес проведение состояние. зуб поверхность кариес один и повреждение проверка.',
      },
      {
        img: '/клиническийфото/кариес/Ким Хёён_кариес_after.jpg',
        label: 'Лечение завершено',
 desc:'кариес до удаление и натуральный зуб цвет композит реставрация. зуб тип восстановление.',
      },
    ],
  },
  {
    num: '02',
    tag: 'кариес лечение',
    title: 'множество кариес, точный реставрация',
 summary:'зуб возникновениеодин кариес этап точный удаление и реставрация',
    steps: [
      {
 img:'/клиническийфото/кариес-1/ _кариес_before.jpg',
        label: 'Состояние до лечения',
 desc:'жевательные зубы кариес проведение состояние. существующий реставрацияматериал неделя 2разница кариес проверка.',
      },
      {
 img:'/клиническийфото/кариес-1/ _кариес_after.jpg',
        label: 'Лечение завершено',
 desc:'все кариес удаление и зуб подходящий реставрацияматериал натуральный завершение.',
      },
    ],
  },
  {
    num: '03',
    tag: 'трещина лечение',
    title: 'зуб трещина, золото коронка реставрация',
    summary: 'трещина возникновениеодин зуб точный диагностика после золото коронка защита',
    steps: [
      {
        img: '/клиническийфото/трещина/Ким Гоун — трещина — до.jpg',
 label:'диагностика',
 desc:'зуб трещина местоположение и диапазон примерно проверка.',
      },
      {
        img: '/клиническийфото/трещина/Ким Гоун — трещина — после.jpg',
 label:'золото коронка установка',
 desc:'трещина зуб золото коронка защита предотвращение. внутри золото повторный период примерно может.',
      },
    ],
  },
  {
    num: '04',
    tag: 'передние зубы протез',
    title: 'передние зубы протез реставрация',
    summary: 'повреждение передние зубы точный  протез реставрация  натуральный эстетический восстановление',
    steps: [
      {
        img: '/клиническийфото/Чон Чеюн_передние зубыпротез/Чон Чеюн_передние зубыпротез_реальныйфото_before.jpg',
        label: 'Состояние до лечения',
 desc:'передние зубы повреждение эстетический, линия необходимый состояние.',
      },
      {
        img: '/клиническийфото/Чон Чеюн_передние зубыпротез/Чон Чеюн_передние зубыпротез_реальныйфото_after.jpg',
 label:'протез реставрация',
 desc:'точный протез реставрация натуральный зуб и один тип и цвет.',
      },
    ],
  },
  {
    num: '05',
    tag: 'повторное протезирование передних зубов',
    title: 'повторное протезирование передних зубов лечение',
 summary:'существующий протезматериал удаление и новый протез повторныйреставрация эстетический и линия',
    steps: [
      {
        img: '/клиническийфото/повторное протезирование передних зубов/передние зубыповторныйпротез_реальное фото_before.jpg',
        label: 'Состояние до лечения',
 desc:'существующий протезматериал и подходит тоже повторныйпротез необходимый состояние.',
      },
      {
        img: '/клиническийфото/повторное протезирование передних зубов/передние зубыповторныйпротез_реальное фото_after.jpg',
 label:'повторныйпротез',
 desc:'существующий протезматериал удаление и новый протезматериал натуральный реставрация.',
      },
    ],
  },
  {
    num: '06',
    tag: 'передние зубы эстетическийпротез',
    title: 'передние зубы эстетическийпротез коронка',
 summary:'передние зубы эстетический коронка линия натуральный восстановление',
    steps: [
      {
        img: '/клиническийфото/Чон МинаB_передние зубы протез/Чон МинаB_передние зубыэстетическийпротезкоронка_before.jpg',
        label: 'Состояние до лечения',
        desc: 'передние зубы тип и цвет линия необходимый состояние.',
      },
      {
        img: '/клиническийфото/Чон МинаB_передние зубы протез/Чон МинаB_передние зубыэстетическийпротезкоронка_after.jpg',
 label:'эстетическийпротез',
 desc:'эстетическийпротез коронка натуральный тип и цвет.',
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
            кариес лечение клинический,<br />
            процесс от завершениедо
          </h2>
          <p
            className="font-semibold text-[15px] leading-[1.6] text-[#727582]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            диагностика от завершение до этап<br />
 реальный лечение процесс проверкалет 
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
 {c.steps.length}этап лечение процесс
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
 все случай Godeok First Dental реальный клинический. Trios5 полость рта сканер точный, Специалист комплексной стоматологии лично лечение.
          </p>
        </div>
      </div>
    </div>
  );
}
