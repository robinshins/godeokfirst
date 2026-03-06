'use client';

import Image from 'next/image';

export default function SymptomsSection() {
  const symptoms = [
    {
      icon: '/icons/tooth.svg',
      title: 'Хэвтсэн агшин зуурын шүд',
      description: 'Хажуу тийш хэвтэж ургаж\nхажуугийн шүдийг дарж болно'
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: 'Үрэвсэл үүсэх',
      description: 'Үл тоомсорлосон агшин зуурын шүдээс\nбуйл хавдаж үрэвсэл үүсч болно'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0b1727] from-[0.541%] to-white w-full py-[60px] relative">
      {/* Background gradient ellipse */}
      <div className="absolute left-1/2 top-[217.35px] -translate-x-1/2 w-[480px] h-[711px] pointer-events-none">
        <Image
          src="/images/ellipse-gradient.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-[60px] items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white whitespace-pre-line">
                {'Агшин зуурын шүднээс\nүүсч болох шинж тэмдэг'}
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#e9ebf1] whitespace-pre-line">
                {'Агшин зуурын шүд ургах хэлбэр эсвэл\nбайрлалаас хамаарч олон шинж тэмдэг гарч болно'}
              </p>
            </div>
          </div>

          {/* Symptoms Cards */}
          <div className="flex flex-col gap-[40px] items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 items-center justify-center w-full"
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
    </div>
  );
}
