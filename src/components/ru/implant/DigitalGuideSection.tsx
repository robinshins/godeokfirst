'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/digital1.svg',
      description: 'Точная диагностика с помощью 3D системы сканирования полости рта'
    },
    {
      number: 2,
      image: '/images/digital2.svg',
      description: 'Планирование установки без разрезов с учетом структуры полости рта на компьютере'
    },
    {
      number: 3,
      image: '/images/digital3.svg',
      description: 'Минимизация погрешности до 1 мм с помощью направляющего устройства'
    },
    {
      number: 4,
      image: '/images/digital4.svg',
      description: 'Минимальный разрез — сокращение времени операции, уменьшение боли и отека'
    },
    {
      number: 5,
      image: '/images/digital5.svg',
      description: 'Виртуальная операция для минимизации погрешностей и повышения удовлетворенности'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Medis всегда проводит <br /> 2 операции
            </h2>
            <div className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Главный врач лично проводит<br />
              виртуальную имплантацию для<br />
              определения оптимального положения<br />
              <br />
              <span className="font-bold text-[#006aff]">Быстрая и комфортная операция</span><br />
              минимизирует отек и боль,<br />
              а также костную пластику
            </div>
          </div>
        </div>



        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-[#f3f6fb] rounded-[24px] overflow-hidden w-full">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8f9fa]">
                <Image
                  src={step.image}
                  alt={`Шаг ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-[#006aff] flex items-center justify-center rounded-lg w-10 h-10">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6">
                <p className="font-semibold leading-[1.6] text-[15px] text-black tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
