'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SedationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'Patient Monitoring Equipment',
      title: '患者监测设备',
      objectFit: 'object-cover'
    },
    {
      image: '/images/sedation-dental-cpr.png',
      alt: 'Dental Resuscitation Certification',
      title: '牙科专业急救认证',
      objectFit: 'object-contain'
    },
    {
      image: '/images/sedation-certificate-overseas.png',
      alt: 'International Sedation Certification',
      title: '专业教育认证',
      objectFit: 'object-contain'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % certifications.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Main Title */}
            <h2 className="font-['Pretendard,sans-serif'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              害怕牙科治疗吗？
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard,sans-serif'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  采用意识镇静法
                </p>
                <p className="font-['Pretendard,sans-serif'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  睡眠中完成治疗
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* What is Conscious Sedation */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard,sans-serif'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  什么是意识镇静法？
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    在轻度昏昏欲睡的状态下接受牙科治疗，几乎不记得治疗过程的治疗方法。
                    <br /><br />
                    保持意识的同时维持放松舒适的状态，治疗过程中可以表达自己的意愿并做出反应，因此非常安全。
                  </p>
                </div>
              </div>

              {/* Safety */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard,sans-serif'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    安全性
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '保持意识状态下进行治疗',
                    '专科医生监测血压、脉搏、血氧饱和度',
                    '使用世界公认的药物',
                    '并非全身麻醉，副作用和后遗症大幅减少',
                    '配备苏醒药物，可随时唤醒',
                    '预防牙科治疗中因恐惧和焦虑导致的突然动作'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-blue.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comfort */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard,sans-serif'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    舒适性
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '通过简单注射即可镇静',
                    '治疗后只留下舒适的感觉',
                    '只留下舒适稳定的记忆，建立对牙科治疗的信心',
                    '价格合理且操作简便'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-blue.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Treatment Highlight */}
              <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl w-full border border-[#006aff]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff]">
                    💡 并非所有医院都能进行的治疗
                  </p>
                  <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    意识镇静法并非简单的治疗。只有具备<span className="font-bold text-[#006aff]">接受专业教育的医疗团队</span>以及<span className="font-bold text-[#006aff]">患者监测设备和急救设备</span>的牙科医院才能进行治疗。
                  </p>
                </div>
              </div>

              {/* Professional Equipment & Certification - Auto-switching tabs */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                {/* Image Area */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        activeTab === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        className={cert.objectFit}
                      />
                    </div>
                  ))}
                </div>

                {/* Tab Indicators */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex gap-2 justify-center w-full">
                    {certifications.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeTab === index
                            ? 'w-8 bg-[#006aff]'
                            : 'w-1.5 bg-[#d1d5db]'
                        }`}
                        aria-label={`Image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <p className="font-['Pretendard,sans-serif'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center">
                    {certifications[activeTab].title}
                  </p>
                </div>
              </div>

              {/* Anesthesia Process */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard,sans-serif'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  麻醉流程
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: Topical/Gargle Anesthesia */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard,sans-serif'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        表面麻醉/漱口麻醉
                      </p>
                      <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        消除注射针头疼痛的<br />
                        表面麻醉
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Computerized Anesthesia */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard,sans-serif'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        计算机麻醉设备
                      </p>
                      <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        计算机自动控制注射速度<br />
                        最大程度减少疼痛
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Nerve Block Anesthesia */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard,sans-serif'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard,sans-serif'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        神经阻滞麻醉
                      </p>
                      <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        在神经附近直接麻醉<br />
                        实现完全无痛治疗
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
