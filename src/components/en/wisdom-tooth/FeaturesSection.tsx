'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/surgeon.png',
      title: 'Extensive Clinical Experience',
      description: 'Safe and precise wisdom tooth extraction by\nour specialist director in integrated dentistry'
    },
    {
      icon: '/images/clinic.png',
      title: 'One-Stop Treatment System',
      description: 'From diagnosis to extraction\nand follow-up care, all completed in one day'
    },
    {
      icon: '/images/otoscope.png',
      title: 'Pain Relief Anesthesia System',
      description: 'State-of-the-art pain relief anesthesia equipment\nfor a worry-free procedure'
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
                {'What Makes Our\nWisdom Tooth Extraction Special'}
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] whitespace-pre-line">
                {'Over 2,700 wisdom tooth extractions and\na systematic approach for next-level care'}
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

          {/* University Hospital-Level Difficulty Section */}
          <div className="rounded-[24px] border-2 border-[#006aff] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#006aff] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                University Hospital-Level Difficult Extractions
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center whitespace-pre-line">
                {'Have you ever heard from a regular dental clinic\n"Please visit a larger hospital" or "Get it done at a specialist clinic"?'}
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Complex impacted wisdom teeth</span> - Deeply buried wisdom teeth are OK
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Nerve-adjacent wisdom teeth</span> - Safe extraction without nerve damage
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Horizontally impacted wisdom teeth</span> - Even difficult sideways cases possible
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                With over 2,700 extractions,<br />
                we safely handle university hospital-level difficulty cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
