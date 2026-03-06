'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: '心血管疾患リスク 3倍↑',
      titleHighlight: '3倍↑',
      process: [
        '歯周病菌が血管に侵入',
        '血管壁の炎症を誘発',
        '血栓生成を促進'
      ],
      details: [
        { text: '心臓疾患 10% 減少', note: '口腔検診時' },
        { text: '心筋梗塞リスク 2.8倍' },
        { text: '脳卒中リスク 16% 減少 (年1回スケーリング)' }
      ],
      source: '盆唐ソウル大病院研究チーム 2024,米国心臓協会 AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: '糖尿病の悪化・合併症増加',
      titleHighlight: '悪化',
      titleHighlight2: '増加',
      process: [
        '歯肉の炎症',
        'インスリン抵抗性の増加',
        '血糖コントロール失敗'
      ],
      details: [
        { text: 'HbA1c 0.4% 減少 (歯周治療時)' },
        { text: '糖尿病合併症の進行 2倍速い' },
        { text: '歯周炎があると血糖コントロール失敗 6倍増加' }
      ],
      source: 'カトリック大恩平聖母病院研究 2023, 大韓糖尿病学会'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: '認知症リスク 70%↑',
      titleHighlight: '70%↑',
      process: [
        '歯周病菌が血液脳関門を通過',
        '脳の炎症',
        'ベータアミロイドの蓄積'
      ],
      details: [
        { text: 'アルツハイマー患者の40%で歯周病菌を発見' },
        { text: '10年以上放置すると認知症リスク急増' }
      ],
      source: 'ハーバード大カンタルシ博士チーム 2024, Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: '妊娠合併症リスク 7倍↑',
      titleHighlight: '7倍↑',
      process: [
        '炎症物質が胎盤を通過',
        '早期陣痛を誘発',
        '早産および低体重児'
      ],
      details: [
        { text: '早産リスク 7倍増加' },
        { text: '低体重児 (2kg未満) 出産 2倍増加' },
        { text: '今後の子供の発育・学習能力に問題の可能性' }
      ],
      source: '米国・欧州歯周学会'
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
                <p className="mb-0">歯肉の炎症が</p>
                <p>全身に広がると...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            放置すると様々な疾患に広がるリスクが高いです
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
