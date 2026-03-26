'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 专用设备',
      description: '使用日本NSK公司最新超声波洁治器，精密去除牙龈深处的细菌',
      features: [
        { label: 'iPiezo引擎', text: '自动频率调节保障稳定输出' },
        { label: '超精密探头', text: '可深入牙周袋深处' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Perio Clean抗生素软膏治疗',
      description: '以米诺环素成分的局部抗生素直接注入牙龈深处进行治疗',
      features: [
        { label: '临床验证', text: '国内外多个研究团队临床试验认证效果' },
        { label: '持续一周', text: '一次注入药效维持一周' },
        { label: '细菌减少', text: 'Red Complex细菌从87.5%降至12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4阶段疼痛缓解系统',
      description: [
        '"原来牙科治疗也可以这么舒适"',
        '让很多患者惊叹的分阶段疼痛阻断系统'
      ],
      features: [
        { label: '漱口麻醉', text: '用麻醉液漱口进行第1次钝化' },
        { label: '涂布麻醉', text: '在注射部位涂抹麻醉软膏进行第2次阻断' },
        { label: '疼痛缓解电动麻醉器', text: '计算机控制以恒定速度缓解注入' },
        { label: '神经管麻醉器', text: '深部位也能完美阻断疼痛' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">高德First牙科的</p>
            <p>牙周治疗系统</p>
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
