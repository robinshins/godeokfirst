'use client';

import Image from 'next/image';

export default function SymptomsSection() {
  const symptoms = [
    {
      icon: '/icons/tooth.svg',
      title: '누운 사랑니',
      description: '옆으로 누워 자라며\n옆 치아를 압박할 수 있습니다'
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: '염증 발생',
      description: '방치된 사랑니로 인해\n잇몸이 붓고 염증이 생길 수 있습니다'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] relative">
      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-[60px] items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">SYMPTOMS</p>
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f]">
                사랑니로 인해<br />
                <span className="text-[#008095]">발생할 수 있는 증상</span>
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582]">
                사랑니가 자라는 형태나<br />
                위치에 따라 여러 증상이 나타날 수 있습니다
              </p>
            </div>
          </div>

          {/* Symptoms Cards */}
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
