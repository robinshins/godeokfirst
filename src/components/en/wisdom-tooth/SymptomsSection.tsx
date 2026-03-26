'use client';

import Image from 'next/image';

export default function SymptomsSection() {
  const symptoms = [
    {
      icon: '/icons/tooth.svg',
      title: 'Impacted Wisdom Tooth',
      description: 'Growing sideways,\nit can press against adjacent teeth'
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: 'Inflammation',
      description: 'Neglected wisdom teeth can cause\nswollen gums and infection'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] relative">
      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-[60px] items-start w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">SYMPTOMS</p>
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f]">
                Symptoms That Can<br />
                <span className="text-[#008095]">Be Caused by Wisdom Teeth</span>
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582]">
                Various symptoms may appear depending on<br />
                the shape and position of the wisdom tooth
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start w-full">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.08)] p-6 flex flex-col gap-5 items-center justify-center w-full"
              >
                <div className="w-20 h-20 relative">
                  <Image
                    src={symptom.icon}
                    alt={symptom.title}
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                  {symptom.title}
                </p>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#5d5f6d] text-center whitespace-pre-line w-full">
                  {symptom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
