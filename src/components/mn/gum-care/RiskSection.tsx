'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: 'Зүрхний өвчний эрсдэл 3 дахин↑',
      titleHighlight: '3 дахин↑',
      process: [
        'Буйлны нян судсанд нэвтрэх',
        'Судасны ханан дээр үрэвсэл',
        'Цус бүлэгнэхийг түргэсгэх'
      ],
      details: [
        { text: 'Зүрхний өвчин 10% буурдаг', note: 'Амны үзлэгт' },
        { text: 'Зүрхний шигдээсийн эрсдэл 2.8 дахин' },
        { text: 'Тархины цус харвалт 16% буурдаг (жилд 1 удаа скейлинг)' }
      ],
      source: 'Бунданг Сөүл их сургуулийн эмнэлэг 2024, АНУ-ын зүрхний холбоо AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: 'Чихрийн шижин хүндрэлт · нэмэгдэл',
      titleHighlight: 'хүндрэлт',
      titleHighlight2: 'нэмэгдэл',
      process: [
        'Буйлны үрэвсэл',
        'Инсулины эсэргүүцэл нэмэгдэх',
        'Цусан дахь сахар хянахгүй'
      ],
      details: [
        { text: 'HbA1c 0.4% буурдаг (буйлны эмчилгээнд)' },
        { text: 'Чихрийн шижин хүндрэл 2 дахин хурдан' },
        { text: 'Буйлны үрэвсэлтэй бол сахар хянахгүй 6 дахин' }
      ],
      source: 'Католик их сургуулийн Ынпён эмнэлэг судалгаа 2023, Солонгосын чихрийн шижин холбоо'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: 'Мартамхай өвчний эрсдэл 70%↑',
      titleHighlight: '70%↑',
      process: [
        'Буйлны нян тархины хориг давах',
        'Тархины үрэвсэл',
        'Бета-амилойд хуримтлагдах'
      ],
      details: [
        { text: 'Альцгеймерийн өвчтөнүүдийн 40%-д буйлны нян илэрсэн' },
        { text: '10+ жил хайхрамжгүй орхивол мартамхай өвчний эрсдэл' }
      ],
      source: 'Харвардын их сургуулийн Кантарси багийн судалгаа 2024, Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: 'Жирэмслэлтийн хүндрэлийн эрсдэл 7 дахин↑',
      titleHighlight: '7 дахин↑',
      process: [
        'Үрэвслийн бодис ихсээр дамжих',
        'Эрт төрөлтийг өдөөх',
        'Дутуу төрөлт болон бага жинтэй хүүхэд'
      ],
      details: [
        { text: 'Дутуу төрөлтийн эрсдэл 7 дахин' },
        { text: 'Бага жинтэй хүүхэд (2кг-аас бага) төрөх 2 дахин' },
        { text: 'Хүүхдийн өсөлт хөгжил, суралцах чадварт нөлөөлөх' }
      ],
      source: 'АНУ·Европын буйлны эмч нарын холбоо'
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
                <p className="mb-0">Буйлны үрэвсэл</p>
                <p>бүх биед тархвал...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            Хайхрамжгүй орхивол олон өвчинд тархах эрсдэлтэй
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
