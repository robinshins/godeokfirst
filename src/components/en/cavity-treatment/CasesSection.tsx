'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: 'Cavity Treatment',
    title: 'Molar Cavity, Resin Restoration',
    summary: 'Cavity area precisely removed and cleanly restored with natural tooth-colored resin',
    steps: [
      {
        img: '/임상사진/Cavity/김효연_Cavity_before.jpg',
        label: 'Before Treatment',
        desc: 'Cavity has progressed in the molar. Discoloration and damage from the cavity are visible on the tooth surface.',
      },
      {
        img: '/임상사진/Cavity/김효연_Cavity_after.jpg',
        label: 'Treatment Complete',
        desc: 'Cavity completely removed and restored with natural tooth-colored resin. The tooth shape has been cleanly restored.',
      },
    ],
  },
  {
    num: '02',
    tag: 'Cavity Treatment',
    title: 'Multiple Cavities, Precise Restoration',
    summary: 'Cavities in multiple teeth precisely removed and restored step by step',
    steps: [
      {
        img: '/임상사진/Cavity-1/방준영_Cavity_before.jpg',
        label: 'Before Treatment',
        desc: 'Cavities have progressed in multiple molars. Secondary cavities are found around existing restorations.',
      },
      {
        img: '/임상사진/Cavity-1/방준영_Cavity_after.jpg',
        label: 'Treatment Complete',
        desc: 'All cavities removed and naturally completed with appropriate restorations for each tooth.',
      },
    ],
  },
  {
    num: '03',
    tag: 'Crack Treatment',
    title: 'Tooth Crack, Gold Crown Restoration',
    summary: 'Cracked tooth precisely diagnosed and protected with gold crown',
    steps: [
      {
        img: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
        label: 'X-ray Diagnosis',
        desc: 'X-ray imaging precisely identifies the location and extent of the tooth crack.',
      },
      {
        img: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
        label: 'Gold Crown Placement Complete',
        desc: 'Cracked tooth protected with gold crown to prevent further fracture. Durable gold material ensures long-term stable use.',
      },
    ],
  },
  {
    num: '04',
    tag: 'Front Teeth Prosthetics',
    title: 'Front Teeth Prosthetics Restoration',
    summary: 'Damaged front teeth precisely restored with prosthetics for natural aesthetics',
    steps: [
      {
        img: '/임상사진/정재윤_Front TeethProsthetics/정재윤_Front TeethProsthetics_실제사진_before.jpg',
        label: 'Before Treatment',
        desc: 'Front teeth are damaged and need aesthetic and functional improvement.',
      },
      {
        img: '/임상사진/정재윤_Front TeethProsthetics/정재윤_Front TeethProsthetics_실제사진_after.jpg',
        label: 'Prosthetics Restoration Complete',
        desc: 'Precise prosthetics restoration achieved a shape and color similar to natural teeth.',
      },
    ],
  },
  {
    num: '05',
    tag: 'Front Teeth Re-Prosthetics',
    title: 'Front Teeth Re-Prosthetics Treatment',
    summary: 'Existing prosthetics removed and re-restored with new prosthetics for improved aesthetics and function',
    steps: [
      {
        img: '/임상사진/Front Teeth 재Prosthetics/Front Teeth재Prosthetics_실사_before.jpg',
        label: 'Before Treatment',
        desc: 'Existing prosthetics show discoloration and reduced fit, requiring re-prosthetics.',
      },
      {
        img: '/임상사진/Front Teeth 재Prosthetics/Front Teeth재Prosthetics_실사_after.jpg',
        label: 'Re-Prosthetics Complete',
        desc: 'Existing prosthetics removed and naturally restored with new prosthetics.',
      },
    ],
  },
  {
    num: '06',
    tag: 'Front Teeth Aesthetic Prosthetics',
    title: 'Front Teeth Aesthetic Prosthetics Crown',
    summary: 'Front teeth aesthetics improved with crown for a natural smile',
    steps: [
      {
        img: '/임상사진/정민아B_Front Teeth Prosthetics/정민아B_Front Teeth심미ProstheticsCrown_before.jpg',
        label: 'Before Treatment',
        desc: 'Front teeth shape and color need improvement.',
      },
      {
        img: '/임상사진/정민아B_Front Teeth Prosthetics/정민아B_Front Teeth심미ProstheticsCrown_after.jpg',
        label: 'Aesthetic Prosthetics Complete',
        desc: 'Natural shape and color achieved with aesthetic prosthetics crown.',
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
            Cavity Treatment Cases,<br />
            From Process to Completion
          </h2>
          <p
            className="font-semibold text-[15px] leading-[1.6] text-[#727582]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            See the actual treatment process<br />
            step by step from diagnosis to finish
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
                        {c.steps.length}-step treatment process
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
            All cases are actual clinical results from Godeok First Dental. Precisely captured with the TRIOS5 Oral Scanner and treated directly by a Comprehensive Dentistry Specialist.
          </p>
        </div>
      </div>
    </div>
  );
}
