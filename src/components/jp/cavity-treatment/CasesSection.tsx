'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: '虫歯治療',
    title: '奥歯虫歯、レジン修復',
    summary: '虫歯部位を精密に除去し天然歯の色のレジンできれいに修復',
    steps: [
      {
        img: '/임상사진/충치/김효연_충치_before.jpg',
        label: '治療前の状態',
        desc: '奥歯に虫歯が進行した状態です。歯の表面に虫歯による変色と損傷が確認されます。',
      },
      {
        img: '/임상사진/충치/김효연_충치_after.jpg',
        label: '治療完了',
        desc: '虫歯を完全に除去し天然歯の色のレジンで修復しました。歯の形態がきれいに回復されました。',
      },
    ],
  },
  {
    num: '02',
    tag: '虫歯治療',
    title: '多数虫歯、精密修復',
    summary: '複数の歯に発生した虫歯を段階的に精密に除去し修復',
    steps: [
      {
        img: '/임상사진/충치-1/방준영_충치_before.jpg',
        label: '治療前の状態',
        desc: '複数の奥歯に虫歯が進行した状態です。既存修復物周辺に二次虫歯が確認されます。',
      },
      {
        img: '/임상사진/충치-1/방준영_충치_after.jpg',
        label: '治療完了',
        desc: '全ての虫歯を除去し各歯に合った修復物で自然に仕上げました。',
      },
    ],
  },
  {
    num: '03',
    tag: 'クラック治療',
    title: '歯の亀裂、ゴールドクラウン修復',
    summary: '亀裂が発生した歯を精密診断後ゴールドクラウンで保護',
    steps: [
      {
        img: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
        label: 'レントゲン診断',
        desc: 'レントゲン撮影で歯の亀裂の位置と範囲を正確に確認します。',
      },
      {
        img: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
        label: 'ゴールドクラウン装着完了',
        desc: '亀裂歯をゴールドクラウンで保護し追加破折を防止します。耐久性に優れたゴールド素材で長期間安定的に使用できます。',
      },
    ],
  },
  {
    num: '04',
    tag: '前歯補綴',
    title: '前歯補綴修復',
    summary: '損傷した前歯を精密に補綴修復して自然な審美性を回復',
    steps: [
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
        label: '治療前の状態',
        desc: '前歯が損傷し審美的・機能的に改善が必要な状態です。',
      },
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
        label: '補綴修復完了',
        desc: '精密な補綴修復で天然歯に似た形態と色調を実現しました。',
      },
    ],
  },
  {
    num: '05',
    tag: '前歯再補綴',
    title: '前歯再補綴治療',
    summary: '既存の補綴物を除去し新しい補綴で再修復して審美性と機能を改善',
    steps: [
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
        label: '治療前の状態',
        desc: '既存補綴物の変色および適合度低下で再補綴が必要な状態です。',
      },
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
        label: '再補綴完了',
        desc: '既存補綴物を除去し新しい補綴物で自然に修復しました。',
      },
    ],
  },
  {
    num: '06',
    tag: '前歯審美補綴',
    title: '前歯審美補綴クラウン',
    summary: '前歯の審美性をクラウンで改善し自然な笑顔を回復',
    steps: [
      {
        img: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
        label: '治療前の状態',
        desc: '前歯の形態および色調改善が必要な状態です。',
      },
      {
        img: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
        label: '審美補綴完了',
        desc: '審美補綴クラウンで自然な形態と色調を実現しました。',
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

        <div className="flex flex-col gap-3">
          <p className="text-[#008095] font-bold text-xs tracking-[0.12em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Clinical Results
          </p>
          <h2 className="font-bold text-[28px] leading-[1.35] tracking-[-0.56px] text-[#151a24]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            虫歯治療の臨床、<br />
            過程から完成まで
          </h2>
          <p className="font-semibold text-[15px] leading-[1.6] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            診断から仕上げまで段階別に<br />
            実際の治療過程をご確認ください
          </p>
        </div>

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
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-5 py-4 flex items-center gap-3 text-left"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#e6f7f8] flex items-center justify-center">
                    <span className="text-[#008095] font-bold text-[13px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {c.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[#008095] text-[11px] font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {c.tag}
                    </span>
                    <p className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#151a24] mt-0.5" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {c.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#9298a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 flex flex-col gap-1">
                    <p className="text-[13px] font-medium text-[#727582] leading-[1.6] mb-5 pb-4 border-b border-[#f0f3f8]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {c.summary}
                    </p>

                    <div className="flex flex-col">
                      {c.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex gap-0">
                          <div className="flex flex-col items-center w-8 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-[#008095] flex items-center justify-center flex-shrink-0 z-10">
                              <span className="text-white font-bold text-[10px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                                {sIdx + 1}
                              </span>
                            </div>
                            {sIdx < c.steps.length - 1 && (
                              <div className="w-px flex-1 bg-[#d1e8eb] my-1" />
                            )}
                          </div>

                          <div className={`flex-1 pl-3 ${sIdx < c.steps.length - 1 ? 'pb-6' : ''}`}>
                            <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#151a24] mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
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
                            <p className="text-[13px] font-medium text-[#727582] leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 pt-4 border-t border-[#f0f3f8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#008095]" />
                      <span className="text-[#008095] text-[12px] font-semibold" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        全{c.steps.length}段階の治療過程
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3" style={{ boxShadow: '0 2px 12px -4px rgba(21,26,36,0.08)' }}>
          <div className="w-8 h-8 rounded-xl bg-[#e6f7f8] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.5 11H7.5V7H8.5V11ZM8.5 6H7.5V5H8.5V6Z" fill="#008095" />
            </svg>
          </div>
          <p className="font-medium text-[13px] leading-[1.6] text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            全てのケースはコドクファースト歯科の実際の臨床です。TRIOS5口腔スキャナーで精密採得し、統合歯科専門医が直接診療します。
          </p>
        </div>
      </div>
    </div>
  );
}
