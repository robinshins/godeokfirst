'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    { title: '急性炎症', description: '激しい痛みと顔の腫れ' },
    { title: '隣接歯の虫歯', description: '隣の歯まで損傷' },
    { title: '顎関節障害', description: '慢性頭痛と顎の痛み' },
    { title: '歯列不均衡', description: '矯正治療が必要' }
  ];
  const benefits = [
    { title: '早い回復', description: '若いほど回復速度が速い' },
    { title: '合併症予防', description: '炎症がない時は安全' },
    { title: '費用節減', description: '問題発生前に処置' },
    { title: '快適な施術', description: '炎症がないと麻酔がよく効く' }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">WHY NOW</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">
              なぜ<span className="text-[#008095]">今</span>抜歯すべきなのか？
            </h2>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">親知らず放置時に起こる問題</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/x-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{problem.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{problem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">早期抜歯のメリット</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/check-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{benefit.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                我慢し続けて救急外来に<br />行かれる方が多いです
              </h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80">
                炎症がひどくなり明け方に救急外来を訪れる<br />
                患者さんが毎週いらっしゃいます<br />
                早めの抜歯でこの苦痛を予防できます
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
