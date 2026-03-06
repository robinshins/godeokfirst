'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/surgeon.png',
      title: '十分な臨床経験',
      description: '統合歯科医学専門医院長による\n安全で正確な親知らず抜歯'
    },
    {
      icon: '/images/clinic.png',
      title: 'ワンストップ診療システム',
      description: '診断から抜歯、\nアフターケアまで当日完了'
    },
    {
      icon: '/images/otoscope.png',
      title: '痛み緩和麻酔システム',
      description: '最新の痛み緩和麻酔装置で\n痛みの心配のない施術'
    }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black whitespace-pre-line">
                {'当院の\n親知らず抜歯の特別さ'}
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] whitespace-pre-line">
                {'2,700件以上の親知らず抜歯経験と\n体系的なシステムで次元の違う診療を行います'}
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-[24px] px-5 py-10 flex flex-col gap-5 items-center justify-end w-full"
                style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}
              >
                <div className="w-20 h-20 relative rounded-full overflow-hidden">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start text-center w-full">
                  <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-white w-full">
                    {feature.title}
                  </p>
                  <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#e9ebf1] whitespace-pre-line w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 대학병원급 난이도 발치 - 별도 강조 섹션 */}
          <div className="rounded-[24px] border-2 border-[#006aff] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#006aff] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                大学病院レベルの難易度抜歯
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center whitespace-pre-line">
                {'一般歯科で\n「大きな病院へ行ってください」「専門病院で抜いてください」\nこんな言葉を聞いたことはありませんか？'}
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">複雑な埋伏親知らず</span> - 歯茎の奥深く埋まっていてもOK
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">神経接近親知らず</span> - 神経損傷の心配のない安全な抜歯
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">水平埋伏親知らず</span> - 横に倒れている難しいケースも可能
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                2,700件以上の抜歯経験で<br />
                大学病院レベルの難易度も安全に解決します
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
