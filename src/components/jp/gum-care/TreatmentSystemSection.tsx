'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 特殊設備',
      description: '日本NSK社の最新超音波スケーラーで歯茎の奥深くの細菌まで精密に除去',
      features: [
        { label: 'iPiezoエンジン', text: '自動周波数調整で安定した出力を保証' },
        { label: '超精密チップ', text: '歯周ポケットの奥深くまでアクセス可能' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'ペリオクリン抗生軟膏治療',
      description: 'ミノサイクリン成分の局所抗生剤を歯茎の奥深くに直接注入して治療',
      features: [
        { label: '臨床検証', text: '国内外複数の研究チームの臨床試験で効果認証' },
        { label: '1週間持続', text: '1回の注入で薬効が1週間維持' },
        { label: '細菌減少', text: 'Red Complex細菌 87.5% → 12.5%に減少' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4段階痛み緩和システム',
      description: [
        '「歯科治療がこんなに楽なこともあるんだ」',
        '多くの患者様が驚かれる段階別痛み遮断システム'
      ],
      features: [
        { label: 'ガーグル麻酔', text: '口全体を麻酔液でガーグルして1次鈍感化' },
        { label: '塗布麻酔', text: '注射部位に麻酔軟膏塗布で2次遮断' },
        { label: '痛み緩和電動麻酔器', text: 'コンピューター制御で一定速度で痛み緩和注入' },
        { label: '神経管麻酔器', text: '深い部位まで完璧な痛み遮断' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">コドクファースト歯科の</p>
            <p>歯周病治療システム</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start w-full">
          {systems.map((system, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden rounded-[24px] w-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={system.image} alt={system.title} fill className="object-cover" />
              </div>
              <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start p-6 w-full">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-center text-white tracking-[-0.48px] w-full">
                  {system.title}
                </p>
                {Array.isArray(system.description) ? (
                  <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    <p className="mb-0">{system.description[0]}</p>
                    <p>{system.description[1]}</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    {system.description}
                  </p>
                )}
                <div className="flex flex-col gap-2.5 items-start w-full">
                  {system.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="font-['Pretendard'] text-white text-sm leading-[23px] tracking-[-0.56px] w-full">
                      <span className="font-bold">{feature.label}</span>
                      <span> : {feature.text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
