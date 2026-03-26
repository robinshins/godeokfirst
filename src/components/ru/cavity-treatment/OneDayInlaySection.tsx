'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'Без слепков',
      description: 'Вместо липкого слепка — быстрое 3D сканирование\nдля комфортного снятия формы зубов'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Точные протезы',
      description: 'На основе цифровых данных\nизготавливаем вкладки с минимальной погрешностью'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Проверенная лаборатория',
      description: 'В отобранной лаборатории\nизготавливаем керамические протезы'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Точнее с TRIOS5<br />
          цифровым сканером
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          3D сканирование без слепков<br />
          для точных вкладок и коронок
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* TRIOS5 Digital Scan */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/트리오스5.jpg"
              alt="TRIOS5 сканер"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              TRIOS5 сканер
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Новейший сканер 3Shape для быстрого 3D сканирования без слепков<br />
              <br />
              Точно снимает форму зубов даже во влажной среде для идеально подходящих вкладок
            </p>
          </div>
        </div>

        {/* Real Cases - Scanner */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/cases/충치치료/인레이제거후스캔채득.jpg"
              alt="Scan after inlay removal"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Сканирование сразу после лечения
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Сканирование проводится сразу после удаления кариеса<br />
              <br />
              Данные отправляются в лабораторию для точного изготовления вкладки
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#e6f7f8] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
