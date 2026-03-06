'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: 'Риск сердечно-сосудистых заболеваний в 3 раза',
      titleHighlight: 'в 3 раза',
      process: [
        'Бактерии проникают в сосуды',
        'Вызывают воспаление стенок',
        'Способствуют образованию тромбов'
      ],
      details: [
        { text: 'Снижение болезней сердца на 10%', note: 'при осмотре полости рта' },
        { text: 'Риск инфаркта в 2.8 раза выше' },
        { text: 'Риск инсульта снижается на 16% (скейлинг 1 раз в год)' }
      ],
      source: 'Исследования больницы Бундан 2024, AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: 'Ухудшение диабета и увеличение осложнений',
      titleHighlight: 'Ухудшение',
      titleHighlight2: 'увеличение',
      process: [
        'Воспаление десен',
        'Повышение инсулинорезистентности',
        'Неудача контроля сахара'
      ],
      details: [
        { text: 'Снижение HbA1c на 0.4% (при лечении пародонта)' },
        { text: 'Осложнения диабета прогрессируют в 2 раза быстрее' },
        { text: 'При пародонтите неудача контроля сахара в 6 раз чаще' }
      ],
      source: 'Исследования Католического университета 2023'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: 'Риск деменции на 70% выше',
      titleHighlight: 'на 70% выше',
      process: [
        'Бактерии проникают через ГЭБ',
        'Воспаление мозга',
        'Накопление бета-амилоида'
      ],
      details: [
        { text: 'У 40% пациентов с Альцгеймером обнаружены пародонтальные бактерии' },
        { text: 'При игнорировании более 10 лет риск деменции резко возрастает' }
      ],
      source: 'Исследования Гарварда 2024, Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: 'Риск осложнений беременности в 7 раз выше',
      titleHighlight: 'в 7 раз выше',
      process: [
        'Воспалительные вещества проникают через плаценту',
        'Провоцируют преждевременные роды',
        'Преждевременные роды и низкий вес'
      ],
      details: [
        { text: 'Риск преждевременных родов в 7 раз выше' },
        { text: 'Риск рождения с низким весом (менее 2 кг) в 2 раза выше' },
        { text: 'Возможны проблемы с развитием и обучением ребенка' }
      ],
      source: 'Американская и Европейская ассоциации пародонтологии'
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
                <p className="mb-0">Когда воспаление десен</p>
                <p>распространяется по телу...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            При игнорировании высокий риск распространения на другие органы
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
