'use client';

import Image from 'next/image';

export default function InHouseLabSection() {
  const benefits = [
    {
      icon: '/icons/shield.svg',
      title: '最高強度の仮歯',
      description: '独占パートナーシップの特殊素材で\n手術直後から通常の食事が可能です'
    },
    {
      icon: '/icons/tooth-xray-spot.svg',
      title: '破損時即時交換',
      description: '万が一発生しうる破損にも心配ありません\n院内技工所で即時交換いたします'
    },
    {
      icon: '/icons/smile.svg',
      title: '歯のない日ゼロ',
      description: '手術直後から最終補綴物装着まで歯なしで生活する日は1日もありません'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          即時補綴<br />
          インプラントシステム
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        デジタルプロセスとデジタル院内技工所で <br />
        迅速な補綴製作を目指しています。<br />
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Fast and Precise Prosthetics */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="迅速で精巧な補綴物製作"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              迅速で精巧な補綴物製作
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              代表院長は豊富な臨床経験を基に快適な診療を提供し、ミリングマシンを使用して補綴物を直接製作しています<br />
              <br />
              製作後は不快感や副作用がないか再度確認し、治療後も継続的にケアし、患者様の満足度を高めるために最善を尽くしています
            </p>
          </div>
        </div>

        {/* Without In-House Lab */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="院内技工所がなければ？"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              院内技工所がなければ？
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              院内に技工所がなければ外注技工所に補綴物製作を依頼することになり時間がかかります<br />
              <br />
              製作と修正過程を反映するために外部に再度依頼する手間と微細な修正事項が難しいという短所があります
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
