'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: '心血管疾病风险增加3倍↑',
      titleHighlight: '3倍↑',
      process: [
        '牙周细菌侵入血管',
        '引发血管壁炎症',
        '促进血栓形成'
      ],
      details: [
        { text: '心脏病减少10%', note: '定期口腔检查' },
        { text: '心肌梗塞风险2.8倍' },
        { text: '脑卒中风险减少16% (每年洗牙1次)' }
      ],
      source: '盆唐首尔大学医院研究团队 2024，美国心脏协会 AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: '糖尿病恶化·并发症增加',
      titleHighlight: '恶化',
      titleHighlight2: '增加',
      process: [
        '牙龈炎症',
        '胰岛素抵抗增加',
        '血糖控制失败'
      ],
      details: [
        { text: 'HbA1c降低0.4% (牙周治疗时)' },
        { text: '糖尿病并发症进展快2倍' },
        { text: '有牙周炎血糖控制失败增加6倍' }
      ],
      source: '天主教大学恩平圣母医院研究 2023，韩国糖尿病学会'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: '痴呆风险增加70%↑',
      titleHighlight: '70%↑',
      process: [
        '牙周细菌穿过血脑屏障',
        '脑部炎症',
        'β淀粉样蛋白积累'
      ],
      details: [
        { text: '40%阿尔茨海默病患者发现牙周细菌' },
        { text: '放任10年以上痴呆风险急增' }
      ],
      source: '哈佛大学Kantarci博士团队 2024，Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: '妊娠并发症风险增加7倍↑',
      titleHighlight: '7倍↑',
      process: [
        '炎症物质通过胎盘',
        '引发早期阵痛',
        '早产及低体重儿'
      ],
      details: [
        { text: '早产风险增加7倍' },
        { text: '低体重儿(2kg以下)出生增加2倍' },
        { text: '可能影响孩子发育·学习能力' }
      ],
      source: '美国·欧洲牙周病学会'
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
              <div className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
                <p className="mb-0">如果牙龈炎症</p>
                <p>扩散到全身...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard,_sans-serif'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            放任不管会扩散到多种疾病的风险很大
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
                    <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-[28px] text-black text-center tracking-[-0.56px] w-full">
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
                          <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full">
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
                      <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.5] text-lg tracking-[-0.36px]">
                        {detail.text}
                      </p>
                      {'note' in detail && detail.note && (
                        <p className="font-['Pretendard,_sans-serif'] font-semibold leading-[1.4] opacity-60 text-base tracking-[-0.32px]">
                          {detail.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-['Pretendard,_sans-serif'] font-normal leading-[1.4] opacity-60 text-xs tracking-[-0.24px] w-full">
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
