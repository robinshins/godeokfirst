'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/surgeon.png',
      title: '丰富的临床经验',
      description: '综合口腔医学专科医生院长\n安全准确的智齿拔除'
    },
    {
      icon: '/images/clinic.png',
      title: '一站式诊疗体系',
      description: '从诊断到拔除，\n术后护理当日完成'
    },
    {
      icon: '/images/otoscope.png',
      title: '疼痛缓解麻醉系统',
      description: '采用最新疼痛缓解麻醉设备\n无需担心疼痛'
    }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black whitespace-pre-line">
                {'本院\n智齿拔除的特别之处'}
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] whitespace-pre-line">
                {'2,700例以上的智齿拔除经验和\n系统化体系，提供与众不同的诊疗服务'}
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-[24px] px-5 py-10 flex flex-col gap-5 items-center justify-end w-full"
                style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}
              >
                <div className="w-20 h-20 relative rounded-full overflow-hidden">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start text-center w-full">
                  <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-white w-full">
                    {feature.title}
                  </p>
                  <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#e9ebf1] whitespace-pre-line w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 대학병원급 난이도 발치 - 별도 강조 섹션 */}
          <div className="rounded-[24px] border-2 border-[#006aff] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#006aff] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                大学医院级难度拔除
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center whitespace-pre-line">
                {'在普通牙科被告知\n"请去大医院"、"需到专科医院拔除"\n您是否有过这样的经历？'}
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">复杂埋伏智齿</span> - 即使深埋牙龈也能处理
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">临近神经智齿</span> - 无需担心神经损伤的安全拔除
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">水平埋伏智齿</span> - 横向生长的疑难病例也能处理
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                凭借2,700例以上的拔除经验<br />
                大学医院级难度也能安全解决
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
