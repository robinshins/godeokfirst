'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: '인레이 재치료',
    title: '인레이 경계 불량, 완전 재치료',
    summary: '기존 인레이 변연 부적합으로 발생한 2차 우식을 제거하고 트리오스5 스캔으로 새 인레이 재제작',
    steps: [
      {
        img: '/cases/충치치료/인레이경계불량.jpg',
        label: '치료 전 상태 확인',
        desc: '기존 인레이 주변으로 경계 불량과 변색이 육안으로 확인됩니다. 하부에 2차 우식이 진행 중인 상태입니다.',
      },
      {
        img: '/cases/충치치료/인레이경계불량_엑스레이.jpg',
        label: '엑스레이 진단',
        desc: '엑스레이상 인레이 변연부의 불량이 명확히 보입니다. 경계 틈새로 충치균이 침투해 2차 우식이 형성되어 있습니다.',
      },
      {
        img: '/cases/충치치료/기존인레이제거후모양형성.jpg',
        label: '기존 인레이 제거 및 모양 형성',
        desc: '불량 인레이를 완전히 제거하고 2차 우식까지 깨끗이 삭제합니다. 새 인레이 제작을 위한 치아 형태를 정밀하게 형성합니다.',
      },
      {
        img: '/cases/충치치료/인레이제거후스캔채득.jpg',
        label: '트리오스5 구강 스캔 채득',
        desc: '3Shape 트리오스5로 형성된 치아를 디지털 스캔합니다. 끈적한 인상재 없이 초정밀 3D 데이터를 획득합니다.',
      },
      {
        img: '/cases/충치치료/인레이경계불량치료이후.jpg',
        label: '새 세라믹 인레이 장착 완료',
        desc: '스캔 데이터로 제작된 세라믹 인레이를 장착합니다. 경계면이 치아에 완벽하게 밀착되어 재발 위험이 최소화됩니다.',
      },
      {
        img: '/cases/충치치료/인레이경계불량치료후_엑스레이.jpg',
        label: '치료 후 엑스레이 확인',
        desc: '치료 후 엑스레이에서 인레이 변연부가 치아에 완전히 적합된 것이 확인됩니다. 틈새 없이 밀착되어 있습니다.',
      },
    ],
  },
  {
    num: '02',
    tag: '세라믹 인레이',
    title: '옆면 충치, 단계별 정밀 수복',
    summary: '육안으로 발견하기 어려운 치아 옆면 충치를 정확히 제거하고 인접면 접촉까지 살려 인레이 완성',
    steps: [
      {
        img: '/cases/충치치료/옆면충치케이스2_치료전사진.jpg',
        label: '치료 전 상태',
        desc: '치아 옆면(인접면)에 발생한 충치로 겉으로 보기엔 정상처럼 보이지만 내부에 충치가 진행 중입니다.',
      },
      {
        img: '/cases/충치치료/옆면충치케이스2_엑스레이.jpg',
        label: '엑스레이로 충치 범위 파악',
        desc: '엑스레이 촬영으로 인접면 충치의 정확한 위치와 범위를 확인합니다. 진단 없이 치료하면 충치를 남길 수 있습니다.',
      },
      {
        img: '/cases/충치치료/옆면충치케이스2_충치삭제및치아모양다듬기.jpg',
        label: '충치 제거 및 치아 형성',
        desc: '충치 부위를 정확히 삭제하고 인레이가 잘 맞을 수 있도록 치아 형태를 다듬습니다. 건강한 치아 조직은 최대한 보존합니다.',
      },
      {
        img: '/cases/충치치료/옆면충치케이스2_치료완료.jpg',
        label: '세라믹 인레이 완성',
        desc: '인접 치아와의 접촉점과 교합을 맞춰 세라믹 인레이를 장착합니다. 자연 치아 색상으로 심미성도 함께 살렸습니다.',
      },
    ],
  },
  {
    num: '03',
    tag: '파절 치료',
    title: '파절된 어금니, 단계별 수복',
    summary: '파절 범위와 깊이를 정확히 파악하고 임시 치아 단계를 거쳐 최종 세라믹 인레이로 완성',
    steps: [
      {
        img: '/cases/충치치료/치아파절치료전.jpg',
        label: '치료 전 — 파절 상태 확인',
        desc: '외부 충격이나 과도한 교합력으로 치아 일부가 파절된 상태입니다. 파절 위치와 깊이를 정밀하게 진단합니다.',
      },
      {
        img: '/cases/충치치료/치아파절_치아모양형성.jpg',
        label: '파절면 정리 및 모양 형성',
        desc: '파절된 부위를 정리하고 인레이가 안정적으로 자리 잡을 수 있도록 치아 형태를 형성합니다.',
      },
      {
        img: '/cases/충치치료/치아파절_임시치아.jpg',
        label: '임시 치아 장착',
        desc: '최종 보철물 제작 기간 동안 임시 치아를 장착합니다. 치아를 보호하고 환자분이 일상생활에 지장 없도록 합니다.',
      },
      {
        img: '/cases/충치치료/치아파절_치료완료.jpg',
        label: '최종 세라믹 인레이 완성',
        desc: '정밀 제작된 세라믹 인레이를 장착합니다. 파절 이전 치아의 형태와 색상을 완벽하게 재현했습니다.',
      },
    ],
  },
  {
    num: '04',
    tag: '세라믹 인레이',
    title: '옆면 충치 제거 및 수복',
    summary: '초기 옆면 충치를 최소 삭제로 제거하고 세라믹 인레이로 자연스럽게 수복',
    steps: [
      {
        img: '/cases/충치치료/옆면충치치료전.jpg',
        label: '치료 전',
        desc: '치아 옆면에 발생한 충치입니다. 초기 단계에서 발견되어 최소한의 삭제로 치료가 가능한 상태입니다.',
      },
      {
        img: '/cases/충치치료/옆면충치제거.jpg',
        label: '충치 제거',
        desc: '건강한 치아 조직을 최대한 보존하면서 충치 부위만 정확하게 제거합니다.',
      },
      {
        img: '/cases/충치치료/옆면충치치료완료.jpg',
        label: '인레이 장착 완료',
        desc: '세라믹 인레이를 장착해 자연 치아와 동일한 색상으로 수복했습니다. 인접면 접촉도 정밀하게 회복되었습니다.',
      },
    ],
  },
  {
    num: '05',
    tag: '비포 / 애프터',
    title: '깨진 치아, 원형 복원',
    summary: '파절된 치아를 발치 없이 세라믹 인레이로 원래 형태로 복원',
    steps: [
      {
        img: '/cases/충치치료/깨진치아치료_before.jpg',
        label: '치료 전',
        desc: '치아가 파절되어 형태가 무너진 상태입니다. 교합과 인접 치아 접촉도 함께 무너져 있습니다.',
      },
      {
        img: '/cases/충치치료/깨진치아치료_after.jpg',
        label: '치료 완료',
        desc: '세라믹 인레이로 파절 이전의 치아 형태, 교합, 인접 접촉을 완벽하게 재현했습니다.',
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
