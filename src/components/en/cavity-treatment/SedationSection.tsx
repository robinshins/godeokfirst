'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SedationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'Patient Monitoring Equipment',
      title: 'Patient Monitoring Equipment',
      objectFit: 'object-cover'
    },
    {
      image: '/images/sedation-dental-cpr.png',
      alt: 'Dental Resuscitation Certification',
      title: 'Dental Resuscitation Certification',
      objectFit: 'object-contain'
    },
    {
      image: '/images/sedation-certificate-overseas.png',
      alt: 'International Sedation Certification',
      title: 'Professional Training Certification',
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
              Worried About<br />
              Dental Pain?
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  With Conscious Sedation
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  Sleep Through Treatment
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
                  What is Conscious Sedation?
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    A treatment method where you receive dental care in a slightly drowsy state, with little to no memory of what happened during the procedure.
                    <br /><br />
                    Since you remain conscious while relaxed and comfortable, you can express yourself and respond during treatment, making it extremely safe.
                  </p>
                </div>
              </div>

              {/* Safety */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    Safety
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'Procedure performed while consciousness is maintained',
                    'Specialist monitors blood pressure, pulse, and oxygen saturation',
                    'Uses globally recognized pharmaceuticals',
                    'Not general anesthesia - significantly lower side effects and aftereffects',
                    'Reversal medication available to wake you up at any time',
                    'Prevents sudden movements caused by fear and anxiety during dental treatment'
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
                    Comfort
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'Sedation possible with simple injection',
                    'After treatment, only comfortable feelings remain',
                    'Only comfortable and stable memories remain, building confidence in dental care',
                    'Affordable and simple procedure'
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
                    💡 A Special Treatment Not Everyone Can Provide
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    Conscious sedation is not a simple treatment. It can only be performed at dental clinics equipped with <span className="font-bold text-[#006aff]">professionally trained medical staff</span> and <span className="font-bold text-[#006aff]">patient monitoring equipment and emergency equipment</span>.
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
                  Anesthesia Process
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
                        Topical/Gargle Anesthesia
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Surface anesthesia to eliminate<br />
                        injection needle pain
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
                        Computerized Anesthesia Device
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Computer automatically controls injection speed<br />
                        to minimize pain
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
                        Nerve Block Anesthesia
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Direct anesthesia near the nerve<br />
                        for complete pain-free treatment
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
