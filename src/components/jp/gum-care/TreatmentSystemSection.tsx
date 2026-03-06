'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 特殊機器',
      description: '日本NSK社の最新超音波スケーラーで歯肉の奥深くの細菌まで精密に除去',
      features: [
        { label: 'iPiezoエンジン', text: '自動周波数調整で安定した出力を保証' },
        { label: '超精密チップ', text: '歯周ポケットの深部までアクセス可能' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'ペリオクリン抗生軟膏治療',
      description: 'ミノサイクリン成分の局所抗生剤を歯肉の深部に直接注入して治療',
      features: [
        { label: '臨床検証', text: '国内外の複数の研究チームの臨床試験で効果を認証' },
        { label: '一週間持続', text: '1回の注入で薬効が一週間持続' },
        { label: '細菌減少', text: 'Red Complex細菌 87.5% → 12.5%に減少' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4段階痛み軽減システム',
      description: [
        '"歯科治療がこんなに楽だとは"',
        '多くの患者様が驚かれる段階別痛み遮断システム'
      ],
      features: [
        { label: 'うがい麻酔', text: '口腔全体を麻酔液でうがいして1次鈍感化' },
        { label: '塗布麻酔', text: '注射部位に麻酔軟膏を塗布して2次遮断' },
        { label: '痛み軽減電動麻酔器', text: 'コンピューター制御で一定速度で痛みを軽減注入' },
        { label: '神経管麻酔器', text: '深部まで完璧な痛み遮断' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">経成大メディスだけの</p>
            <p>歯肉治療システム</p>
          </div>
        </div>

        {/* System Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {systems.map((system, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden rounded-[24px] w-full">
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start p-6 w-full">
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
