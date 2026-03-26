'use client';

import Image from 'next/image';

export default function SedationSection() {

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: '患者 监测 设备',
      title: '患者 监测 设备',
      objectFit: 'object-cover'
    }
  ];


  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Main Title */}
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              牙科 治疗,<br />
              不疼吗？
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  意识镇静疗法地
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  睡着接受治疗
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* What is 意识镇静疗法 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  什么是意识镇静疗法？
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    在略微昏昏欲睡的状态下接受治疗，治疗期间发生的事情不太能记住的治疗方法。
                    <br /><br />
                    在保持意识的状态下舒适地放松紧张状态，因此治疗中也能表达和回应自己的状态，十分安全。
                  </p>
                </div>
              </div>

              {/* 安全성 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    安全性
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '在保持意识的状态下进行治疗',
                    '专家监测血压、脉搏、血氧饱和度',
                    '使用国际认证的药物',
                    '非全身麻醉，后遗症和副作用显著降低',
                    '随时配备可唤醒的逆转药物',
                    '预防牙科治疗中因恐惧和不安导致的突然动作'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 舒适度 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    舒适度
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '简单注射即可进行镇静疗法',
                    '治疗结束后只留下治疗中舒适的感觉',
                    '只留下舒适安稳的记忆，对牙科治疗产生信心',
                    '费用负担小，可简单治疗'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 특별함 强调 */}
              <div className="bg-gradient-to-r from-[#008095]/10 to-[#006d80]/10 p-5 rounded-2xl w-full border border-[#008095]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#008095]">
                    💡 并非任何人都能做的特别治疗
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    意识镇静疗法并非简单的治疗。是只有配备了<span className="font-bold text-[#008095]">经过专业培训的医疗团队</span>和<span className="font-bold text-[#008095]">患者监测设备、急救设备</span>等的牙科才能施行的专业治疗方法。
                  </p>
                </div>
              </div>

              {/* 专业 设备 */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={certifications[0].image}
                    alt={certifications[0].alt}
                    fill
                    className={certifications[0].objectFit}
                  />
                </div>
                <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center w-full">
                  {certifications[0].title}
                </p>
              </div>

              {/* 麻醉 进行 过程 */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  麻醉 进行 过程
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: 涂布/漱口麻醉 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        涂布/漱口麻醉
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        麻醉 前 注射 针的 疼痛<br />
                        消除注射针疼痛的表面麻醉
                      </p>
                    </div>
                  </div>

                  {/* Step 2: 疼痛缓解 电动麻醉器 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        疼痛缓解电动麻醉器
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        电脑自动调节注入速度<br />
                        疼痛 最小化
                      </p>
                    </div>
                  </div>

                  {/* Step 3: 神经管麻醉器 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        神经管麻醉器
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        直达神经进行麻醉后<br />
                        完美的 疼痛缓解 治疗 完成
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
