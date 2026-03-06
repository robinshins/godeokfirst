'use client';

import Image from 'next/image';

export default function StatsSection() {
  const stats = [
    { number: '80', unit: '%', label: 'Kattalarda milk kasalligi darajasi', source: 'Koreya Parodontologiya jamiyati 2024' },
    { number: '14', unit: '% kamayish', label: 'Tish tozalashda yurak-qon tomir kasalligi kamayishi', source: 'Bundang Seoul National University Hospital 2024' },
    { number: '6', unit: ' baravar', label: 'Parodontit bilan qon shakari nazorati qiyinlashishi', source: 'Catholic University Medical School 2023' }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0b1727] from-[0.541%] to-white w-full relative">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/stats-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              {/* Logo */}
              <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
                <Image
                  src="/icons/Logo.svg"
                  alt="Kyungsung Medis Dental"
                  width={168}
                  height={24}
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <h2 className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[30px] text-center text-white tracking-[-0.64px] w-full">
                Milk kasalligi,<br />
                og'iz muammosi bilan tugamaydi
              </h2>

              {/* Subtitle */}
              <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full">
                Butun tana salomatligiga jiddiy ta'sir ko'rsatadigan<br />
                milk kasalliklarining xavfi
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-5 items-start relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
                  <div className="flex gap-2 items-baseline justify-center relative shrink-0 w-full">
                    <p
                      className="font-['Pretendard_JP'] font-bold leading-none text-[72px] text-center text-nowrap tracking-[-2.88px]"
                      style={{
                        background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {stat.number}
                    </p>
                    <p className="font-['Pretendard_JP'] font-bold leading-none text-[#006aff] text-2xl text-center tracking-[-0.48px]">
                      {stat.unit}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-start leading-[1.4] not-italic relative shrink-0 text-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[#37373e] text-[22px] tracking-[-0.44px] w-full">
                      {stat.label}
                    </p>
                    <p className="font-['Pretendard_JP'] font-medium text-[#9298a6] text-[14px] tracking-[-0.28px] w-full">
                      {stat.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
