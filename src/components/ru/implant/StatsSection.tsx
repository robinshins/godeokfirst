'use client';

import Image from 'next/image';

export default function StatsSection() {
  const stats = [
    { number: '1,500 +', unit: 'операций', label: 'Цифровая навигационная хирургия' },
    { number: '500 +', unit: 'врачей', label: 'Обучено стоматологов', subtitle: 'Обучение цифровой и полной имплантации' },
    { number: '4.9', unit: '/ 5.0', label: 'Удовлетворенность пациентов', subtitle: 'На основе Kakao, Google, Naver Maps' },
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
              alt="Стоматология Medis Kyungsung"
              width={168}
              height={24}
              className="w-full h-full"
            />
          </div>

          {/* Title */}
          <h2 className="font-bold leading-[1.35] not-italic text-[31px] text-center text-white tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Полная имплантация —<br />
            вкус жизни и улыбка
          </h2>

          {/* Subtitle */}
          <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Забытое удовольствие от еды и яркая улыбка<br />
          Ваша вторая жизнь начинается сейчас
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col gap-5 items-start relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-2 items-start justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-normal not-italic text-[72px] text-center text-nowrap tracking-[-2.88px]"
                  style={{
                    fontFamily: 'Pretendard, sans-serif',
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.number}
                </p>
                <div className="box-border flex flex-col gap-2.5 items-center justify-center pb-3 pt-2.5 px-0 relative self-stretch shrink-0">
                  <div className="flex flex-col grow justify-end leading-[0] not-italic relative shrink-0 text-[#006aff] text-2xl text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    <p className="leading-[1.35] font-bold">{stat.unit}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center w-full">
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {stat.label}
                </p>
                {stat.subtitle && (
                  <p className="text-sm text-[#5d5f6d] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    {stat.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Description Section */}
          <div className="bg-[#f8f9fb] box-border flex flex-col gap-4 items-start px-5 py-6 relative rounded-2xl shrink-0 w-full mt-2">
            <p className="font-bold text-[18px] text-[#37373e] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Столько операций за 10 лет<br />
              на одном месте — это значит...
            </p>
            <div className="flex flex-col gap-3 text-[15px] text-[#5d5f6d] leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              <p>
                При возникновении проблем сложно<br />долго работать на одном месте.
              </p>
              <p>
                При частой смене врачей<br />
                неясно, кто несет ответственность.
              </p>
              <p className="text-[#006aff] font-medium">
                В Medis Kyungsung главный врач лично<br />
                консультирует, оперирует и ведет<br />
                послеоперационный уход до конца.
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
