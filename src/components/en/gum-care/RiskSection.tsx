'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: 'Cardiovascular Disease Risk 3x Higher↑',
      titleHighlight: '3x Higher↑',
      process: [
        'Periodontal Bacteria Enter Bloodstream',
        'Cause Vascular Inflammation',
        'Promote Blood Clot Formation'
      ],
      details: [
        { text: '10% Reduction in Heart Disease', note: 'With Regular Checkups' },
        { text: '2.8x Higher Risk of Myocardial Infarction' },
        { text: '16% Lower Stroke Risk (Annual Scaling)' }
      ],
      source: 'Seoul National University Bundang Hospital Research Team 2024, American Heart Association AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: 'Diabetes Worsening · Increased Complications',
      titleHighlight: 'Worsening',
      titleHighlight2: 'Increased',
      process: [
        'Gum Inflammation',
        'Increased Insulin Resistance',
        'Blood Sugar Control Failure'
      ],
      details: [
        { text: '0.4% Reduction in HbA1c (With Periodontal Treatment)' },
        { text: '2x Faster Diabetic Complication Progression' },
        { text: '6x Higher Blood Sugar Control Failure with Periodontitis' }
      ],
      source: 'Catholic University Eunpyeong St. Mary\'s Hospital Research 2023, Korean Diabetes Association'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: 'Dementia Risk 70% Higher↑',
      titleHighlight: '70% Higher↑',
      process: [
        'Periodontal Bacteria Cross Blood-Brain Barrier',
        'Brain Inflammation',
        'Beta-Amyloid Accumulation'
      ],
      details: [
        { text: 'Periodontal Bacteria Found in 40% of Alzheimer\'s Patients' },
        { text: 'Dementia Risk Increases Sharply if Neglected for 10+ Years' }
      ],
      source: 'Harvard Dr. Kantarci Research Team 2024, Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: 'Pregnancy Complications Risk 7x Higher↑',
      titleHighlight: '7x Higher↑',
      process: [
        'Inflammatory Substances Cross Placenta',
        'Induce Premature Labor',
        'Premature Birth & Low Birth Weight'
      ],
      details: [
        { text: '7x Higher Risk of Premature Birth' },
        { text: '2x Higher Risk of Low Birth Weight (Under 2kg)' },
        { text: 'Potential Development & Learning Issues for Child' }
      ],
      source: 'American & European Periodontal Associations'
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
              <div className="font-['Pretendard'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
                <p className="mb-0">When Gum Inflammation</p>
                <p>Spreads Throughout the Body...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            High Risk of Spreading to Various Diseases if Neglected
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
                    <p className="font-['Pretendard'] font-bold leading-[1.35] text-[28px] text-black text-center tracking-[-0.56px] w-full">
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
                          <p className="font-['Pretendard'] font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full">
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
                      <p className="font-['Pretendard'] font-bold leading-[1.5] text-lg tracking-[-0.36px]">
                        {detail.text}
                      </p>
                      {'note' in detail && detail.note && (
                        <p className="font-['Pretendard'] font-semibold leading-[1.4] opacity-60 text-base tracking-[-0.32px]">
                          {detail.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-['Pretendard'] font-normal leading-[1.4] opacity-60 text-xs tracking-[-0.24px] w-full">
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
