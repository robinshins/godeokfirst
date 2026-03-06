'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: 'Yurak-qon tomir kasalligi xavfi 3 baravar↑',
      titleHighlight: '3 baravar↑',
      process: [
        'Milk bakteriyalarining qon tomirga kirishi',
        'Qon tomir devorida yallig\'lanish',
        'Qon quyilishini tezlashtirish'
      ],
      details: [
        { text: 'Og\'iz tekshiruvi yurak kasalligini 10% kamaytiradi', note: '' },
        { text: 'Miokard infarkti xavfi 2.8 baravar' },
        { text: 'Insult xavfi 16% kamayishi (yiliga 1 marta tish tozalash)' }
      ],
      source: 'Bundang Seoul National University Hospital 2024, AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: 'Diabet og\'irlashishi · Asoratlar ko\'payishi',
      titleHighlight: 'og\'irlashishi',
      titleHighlight2: 'ko\'payishi',
      process: [
        'Milk yallig\'lanishi',
        'Insulin qarshiligi oshishi',
        'Qon shakarini nazorat qilish imkonsizligi'
      ],
      details: [
        { text: 'HbA1c 0.4% kamayishi (milk davolashda)' },
        { text: 'Diabet asoratlari 2 baravar tez rivojlanadi' },
        { text: 'Parodontit bilan qon shakari nazorati 6 baravar qiyinlashadi' }
      ],
      source: 'Catholic University Eunpyeong St. Mary\'s Hospital 2023'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: 'Demensiya xavfi 70%↑',
      titleHighlight: '70%↑',
      process: [
        'Milk bakteriyalari miya to\'sig\'ini kesib o\'tadi',
        'Miyada yallig\'lanish',
        'Beta-amiloid to\'planishi'
      ],
      details: [
        { text: 'Alzheimer bemorlarining 40% da milk bakteriyalari topilgan' },
        { text: '10 yildan ortiq e\'tiborsiz qoldirilsa demensiya xavfi keskin oshadi' }
      ],
      source: 'Harvard University Dr. Kantarci jamoasi 2024'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: 'Homiladorlik asoratlari xavfi 7 baravar↑',
      titleHighlight: '7 baravar↑',
      process: [
        'Yallig\'lanish moddalari yo\'ldoshdan o\'tadi',
        'Erta tug\'ruq qo\'zg\'atilishi',
        'Erta tug\'ruq va kam vazn'
      ],
      details: [
        { text: 'Erta tug\'ruq xavfi 7 baravar oshadi' },
        { text: 'Kam vaznli (2 kg dan kam) tug\'ilish 2 baravar oshadi' },
        { text: 'Bolaning rivojlanishi va o\'rganish qobiliyatiga ta\'sir qilishi mumkin' }
      ],
      source: 'Amerika va Yevropa Parodontologiya jamiyatlari'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[26px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
              <p className="font-['Nanum_Myeongjo'] font-extrabold leading-[0.2] text-[60px] tracking-[-3.6px] w-full">
                &ldquo;
              </p>
              <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
                <p className="mb-0">Milk yallig'lanishi</p>
                <p>butun tanaga tarqalsa...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            E'tiborsiz qoldirilsa bir nechta kasalliklarga tarqalish xavfi katta
          </p>
        </div>

        {/* Divider */}
        <div className="bg-white h-10 opacity-50 shrink-0 w-0.5" />

        {/* Risk Cards */}
        <div className="flex flex-col gap-4 items-start w-full">
          {risks.map((risk, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* White Card */}
              <div className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-10 items-center justify-center p-6 rounded-t-[24px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-center w-full">
                  <div className="relative shrink-0 w-[100px] h-[100px]">
                    <Image
                      src={risk.icon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[28px] text-black text-center tracking-[-0.56px] w-full">
                      {risk.title.split(risk.titleHighlight)[0]}
                      <span className="text-[#ff1616]">{risk.titleHighlight}</span>
                      {risk.titleHighlight2 && (
                        <>
                          {risk.title.split(risk.titleHighlight)[1].split(risk.titleHighlight2)[0]}
                          <span className="text-[#ff1616]">{risk.titleHighlight2}</span>
                        </>
                      )}
                    </p>
                    <div className="flex flex-col gap-1 items-center w-full">
                      {risk.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex flex-col items-center w-full">
                          <p className="font-['Pretendard_JP'] font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full">
                            {step}
                          </p>
                          {stepIndex < risk.process.length - 1 && (
                            <div className="relative shrink-0 w-6 h-6">
                              <Image
                                src="/icons/arrow-big-down-filled.svg"
                                alt=""
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue Card */}
              <div className="bg-[#006aff] box-border flex flex-col gap-2 items-center justify-center p-6 rounded-b-[24px] shadow-[0px_32px_64px_-12px_rgba(45,54,67,0.08)] text-white w-full">
                <div className="flex flex-col gap-1 items-start w-full">
                  {risk.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex gap-1.5 items-center w-full text-nowrap whitespace-pre">
                      <p className="font-['Pretendard_JP'] font-bold leading-[1.5] text-lg tracking-[-0.36px]">
                        {detail.text}
                      </p>
                      {'note' in detail && detail.note && (
                        <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-60 text-base tracking-[-0.32px]">
                          {detail.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-['Pretendard_JP'] font-normal leading-[1.4] opacity-60 text-xs tracking-[-0.24px] w-full">
                  {risk.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
