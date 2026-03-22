'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: '충치 치료',
    title: '어금니 충치, 레진 수복',
    summary: '충치 부위를 정밀하게 제거하고 자연 치아 색상의 레진으로 깔끔하게 수복',
    steps: [
      {
        img: '/임상사진/충치/김효연_충치_before.jpg',
        label: '치료 전 상태',
        desc: '어금니에 충치가 진행된 상태입니다. 치아 표면에 충치로 인한 변색과 손상이 확인됩니다.',
      },
      {
        img: '/임상사진/충치/김효연_충치_after.jpg',
        label: '치료 완료',
        desc: '충치를 완전히 제거하고 자연 치아 색상의 레진으로 수복했습니다. 치아 형태가 깔끔하게 회복되었습니다.',
      },
    ],
  },
  {
    num: '02',
    tag: '충치 치료',
    title: '다수 충치, 정밀 수복',
    summary: '여러 치아에 발생한 충치를 단계별로 정밀하게 제거하고 수복',
    steps: [
      {
        img: '/임상사진/충치-1/방준영_충치_before.jpg',
        label: '치료 전 상태',
        desc: '여러 어금니에 충치가 진행된 상태입니다. 기존 수복물 주변으로 2차 충치가 확인됩니다.',
      },
      {
        img: '/임상사진/충치-1/방준영_충치_after.jpg',
        label: '치료 완료',
        desc: '모든 충치를 제거하고 각 치아에 맞는 수복물로 자연스럽게 완성했습니다.',
      },
    ],
  },
  {
    num: '03',
    tag: '크랙 치료',
    title: '치아 균열, 골드 크라운 수복',
    summary: '균열이 발생한 치아를 정밀 진단 후 골드 크라운으로 보호',
    steps: [
      {
        img: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
        label: '엑스레이 진단',
        desc: '엑스레이 촬영으로 치아 균열의 위치와 범위를 정확히 확인합니다.',
      },
      {
        img: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
        label: '골드 크라운 장착 완료',
        desc: '균열 치아를 골드 크라운으로 보호하여 추가 파절을 방지합니다. 내구성이 뛰어난 골드 소재로 장기간 안정적으로 사용할 수 있습니다.',
      },
    ],
  },
  {
    num: '04',
    tag: '앞니 보철',
    title: '앞니 보철 수복',
    summary: '손상된 앞니를 정밀하게 보철 수복하여 자연스러운 심미성 회복',
    steps: [
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
        label: '치료 전 상태',
        desc: '앞니가 손상되어 심미적, 기능적으로 개선이 필요한 상태입니다.',
      },
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
        label: '보철 수복 완료',
        desc: '정밀한 보철 수복으로 자연 치아와 유사한 형태와 색상을 구현했습니다.',
      },
    ],
  },
  {
    num: '05',
    tag: '앞니 재보철',
    title: '앞니 재보철 치료',
    summary: '기존 보철물을 제거하고 새로운 보철로 재수복하여 심미성과 기능 개선',
    steps: [
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
        label: '치료 전 상태',
        desc: '기존 보철물의 변색 및 적합도 저하로 재보철이 필요한 상태입니다.',
      },
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
        label: '재보철 완료',
        desc: '기존 보철물을 제거하고 새로운 보철물로 자연스럽게 수복했습니다.',
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
            충치 치료 임상,<br />
            과정부터 완성까지
          </h2>
          <p
            className="font-semibold text-[15px] leading-[1.6] text-[#727582]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            진단부터 마무리까지 단계별로<br />
            실제 치료 과정을 확인하세요
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
                        총 {c.steps.length}단계 치료 과정
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
            모든 케이스는 고덕퍼스트치과 실제 임상입니다. 트리오스5 구강 스캐너로 정밀 채득하고, 통합치의학과 전문의가 직접 진료합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
