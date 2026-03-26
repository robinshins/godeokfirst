'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhiteningLaminateSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full text-center">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Laminate</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              コドクファースト歯科の<br /><span className="text-[#008095]">無削除・最小削除ラミネート</span>
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              デジタル精密製作で自然な笑顔を<br />お作りします
            </p>
          </div>

          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>ラミネートとは？</p>
              <p className="font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                0.3〜0.7mmの薄いセラミック（ポーセレン）片を歯の表面に貼り付ける施術です。
                爪にネイルアートをするように、歯に「永久的なホワイトニングコーティング」を施すとお考えください。
              </p>
            </div>

            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: '歯の削除なし', desc: '無削除または最小削除(0.3mm)で天然歯保存' },
                { title: '自然な色調', desc: 'VITA MARK IIセラミック — 歯に最も近い強度と透明度' },
                { title: '精密オーダーメイド製作', desc: 'デジタルスキャンデータ基盤で誤差のないフィット' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 w-full">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0 mt-[2px]"><circle cx="11" cy="11" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" /><path d="M7 11l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="flex flex-col gap-0.5 text-white">
                    <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.34px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.title}</p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.3px] opacity-75" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>コドクファースト歯科の専門性</h3>
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L2 5.5v5C2 15 5.6 18.6 10 20c4.4-1.4 8-5 8-9.5v-5L10 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /><path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>統合歯科専門医が直接施術</p>
              </div>
              <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5">
                {[
                  '審美結果を事前にデジタルシミュレーションで確認後進行',
                  '顔型・肌トーンに似合う自然な笑顔デザイン',
                  '施術後の不快感最小化、即座に修正可能',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-white/60 text-sm shrink-0 mt-[1px]">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { title: 'デジタル3Dスキャン', desc: '不快な型取りなしに精密データ採得' },
                { title: 'VITA MARK IIセラミック', desc: '天然歯に最も近い強度と色調' },
                { title: '最小削除・無削除施術', desc: '歯の損傷を最小化して天然歯保存' },
              ].map((item, i) => (
                <div key={i} className="bg-[#f3f6fb] rounded-[16px] p-4 flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]"><circle cx="10" cy="10" r="9" stroke="#008095" strokeWidth="1.5" /><path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.title}</p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link href="/jp/consultation" className="w-full">
            <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>ラミネート相談を予約する</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
