'use client';

import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 top-[149px] w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image src="/images/hero-gradient.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                セルフホワイトニングと<br />歯科専門ホワイトニングの違い
              </h2>
              <div className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                <p className="mb-0">歯科で使用するホワイトニング剤は <span className="text-[#008095]">医薬品に分類される</span></p>
                <p className="mb-0"><span className="text-[#008095]">高濃度過酸化水素</span>を使用します</p>
                <p className="mb-0">歯茎に触れると損傷する可能性があるため <span className="text-[#008095]">専門家が</span></p>
                <p className="mb-0"><span className="text-[#008095]">完璧な保護措置後に施術</span>するのではるかに安全で</p>
                <p>即時効果を得られます</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">セルフホワイトニング</p>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: '低濃度ホワイトニング剤', desc: '一般医薬品で効果が限定的' },
                      { title: '遅い効果', desc: '数週間から数ヶ月所要' },
                      { title: '安全性リスク', desc: '誤用時に歯茎損傷の可能性' },
                      { title: '不均一な結果', desc: 'ムラのあるホワイトニング効果' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#FF1616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">{item.title}</p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">歯科専門ホワイトニング</p>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: '高濃度医薬品', desc: '専門過酸化水素で強力な効果' },
                      { title: '即時効果', desc: '1〜3時間以内に確実な変化' },
                      { title: '完璧な安全性', desc: '歯茎保護措置で損傷防止' },
                      { title: '均一なホワイトニング', desc: '専門家の精密な施術' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image src="/icons/check-teal.svg" alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">{item.title}</p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
