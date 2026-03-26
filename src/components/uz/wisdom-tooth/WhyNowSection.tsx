'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    { title: 'Oʼtkir yalligʼlanish', description: 'Kuchli ogʼriq va yuz shishishi' },
    { title: 'Yondagi tish chirishi', description: 'Zarar yondagi tishga tarqaladi' },
    { title: 'Jag boʼgʼimi kasalligi', description: 'Surunkali bosh ogʼrigʼi va jag ogʼrigʼi' },
    { title: 'Tish qatori buzilishi', description: 'Ortodontik davolash kerak boʼlishi mumkin' }
  ];
  const benefits = [
    { title: 'Tez tiklanish', description: 'Yoshroq boʼlsa tezroq tiklanadi' },
    { title: 'Asoratlarni oldini olish', description: 'Yalligʼlanish yoʼq paytda xavfsizroq' },
    { title: 'Xarajatni tejash', description: 'Muammo paydo boʼlishidan oldin davolash' },
    { title: 'Qulay jarrohlik', description: 'Yalligʼlanishsiz anestezia yaxshiroq ishlaydi' }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">WHY NOW</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">Nega <span className="text-[#008095]">hozir</span> sugʼurish kerak?</h2>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">Aql tishini eʼtiborsiz qoldirganda yuzaga keladigan muammolar</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((p, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/x-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{p.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">Erta sugʼurishning afzalliklari</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/check-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{b.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">Koʼp bemorlar chidab-chidab<br />tez yordamga murojaat qiladi</h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80">Har hafta yalligʼlanish kuchayib<br />tongda tez yordamga kelgan bemorlar bor<br />Erta sugʼurish bu azobni oldini oladi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
