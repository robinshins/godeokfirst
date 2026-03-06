'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SedationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'Patient Monitoring Equipment',
      title: '患者モニタリング装置',
      objectFit: 'object-cover'
    },
    {
      image: '/images/sedation-dental-cpr.png',
      alt: 'Dental Resuscitation Certification',
      title: '歯科専門蘇生術認定',
      objectFit: 'object-contain'
    },
    {
      image: '/images/sedation-certificate-overseas.png',
      alt: 'International Sedation Certification',
      title: '専門教育認定',
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
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              歯科治療が<br />
              怖いですか？
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  意識下鎮静法で
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  寝ている間に治療完了
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* What is Conscious Sedation */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  意識下鎮静法とは？
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    少しウトウトした状態で歯科治療を受け、施術中のことをほとんど覚えていない治療法です。
                    <br /><br />
                    意識はあるままリラックスして快適な状態を保つため、治療中に自分の意思を表現し反応できるため、非常に安全です。
                  </p>
                </div>
              </div>

              {/* Safety */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    安全性
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '意識を保ったまま施術を進行',
                    '専門医が血圧、脈拍、酸素飽和度をモニタリング',
                    '世界的に認められた医薬品を使用',
                    '全身麻酔ではなく、副作用と後遺症が大幅に少ない',
                    '覚醒薬があり、いつでも目覚めさせることが可能',
                    '歯科治療中の恐怖と不安による突然の動きを予防'
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
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
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
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    快適性
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    '簡単な注射で鎮静可能',
                    '治療後は快適な感覚だけが残る',
                    '快適で安定した記憶だけが残り、歯科治療への自信を構築',
                    '手頃で簡単な施術'
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
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Treatment Highlight */}
              <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl w-full border border-[#006aff]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff]">
                    💡 誰でもできる治療ではありません
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    意識下鎮静法は単純な治療ではありません。<span className="font-bold text-[#006aff]">専門教育を受けた医療スタッフ</span>と<span className="font-bold text-[#006aff]">患者モニタリング装置と応急装置</span>を備えた歯科医院でのみ施術可能です。
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
                  <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center">
                    {certifications[activeTab].title}
                  </p>
                </div>
              </div>

              {/* Anesthesia Process */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  麻酔プロセス
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: Topical/Gargle Anesthesia */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        表面麻酔/うがい麻酔
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        注射針の痛みをなくす<br />
                        表面麻酔
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Computerized Anesthesia */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        コンピューター麻酔装置
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        コンピューターが自動で注射速度を制御し<br />
                        痛みを最小化
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Nerve Block Anesthesia */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        神経ブロック麻酔
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        神経近くに直接麻酔し<br />
                        完全無痛治療を実現
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
