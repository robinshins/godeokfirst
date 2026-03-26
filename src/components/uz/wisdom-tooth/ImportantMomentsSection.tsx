'use client';

import Image from 'next/image';

export default function ImportantMomentsSection() {
  const moments = [
    { icon: '/images/military.png', label: 'Harbiy xizmat', description: 'Armiyada toʼsatdan\nogʼriq boshlasa hal qilish qiyin' },
    { icon: '/images/exam.png', label: 'Imtihon davri', description: 'Muhim imtihon oldidan\ntoʼsatdan ogʼriq' },
    { icon: '/images/wedding.png', label: 'Toʼy · Suhbat', description: 'Hayotdagi eng muhim kun\nyuz shishgan...' },
    { icon: '/images/travel.png', label: 'Sayohat · Xizmat safari', description: 'Xorijda tez yordam\nqimmat davolash' }
  ];

  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-[26px] items-center justify-center w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">DON&apos;T WAIT</p>
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f]">Ogohlantirishsiz keladi<br /><span className="text-[#008095]">Aql tishi ogʼrigʼi...</span></h2>
            </div>
            <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">Tinch paytda oldindan hal qiling va muhim lahzalarni himoya qiling</p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 w-full">
              {moments.slice(0, 2).map((m, i) => (
                <div key={i} className="flex-1 bg-[#f3f6fb] rounded-[24px] p-6 flex flex-col gap-12 items-center justify-center">
                  <div className="flex flex-col gap-[6px] items-center justify-center w-full">
                    <div className="w-20 h-20 relative"><Image src={m.icon} alt={m.label} width={80} height={80} className="w-full h-full object-contain" /></div>
                    <div className="flex flex-col gap-2 items-center justify-center text-center w-full">
                      <p className="font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e]">{m.label}</p>
                      <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#5d5f6d] whitespace-pre-line">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 w-full">
              {moments.slice(2, 4).map((m, i) => (
                <div key={i + 2} className="flex-1 bg-[#f3f6fb] rounded-[24px] p-6 flex flex-col gap-12 items-center justify-center">
                  <div className="flex flex-col gap-[6px] items-center justify-center w-full">
                    <div className="w-20 h-20 relative"><Image src={m.icon} alt={m.label} width={80} height={80} className="w-full h-full object-contain" /></div>
                    <div className="flex flex-col gap-2 items-center justify-center text-center w-full">
                      <p className="font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e]">{m.label}</p>
                      <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#5d5f6d] whitespace-pre-line">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
