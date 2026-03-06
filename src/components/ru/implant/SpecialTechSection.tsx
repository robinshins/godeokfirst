'use client';

import Image from 'next/image';

export default function SpecialTechSection() {
  const features = [
    'Технология, разработанная в Каролинском институте (Швеция)',
    'Пробиотики, прикрепляющиеся непосредственно к зубам и деснам',
    'Сильные штаммы, выживающие даже в зубной пасте и ополаскивателе',
    'Безопасные штаммы без сахара и кислотообразования'
  ];

  return (
    <div className="bg-white w-full relative flex justify-center">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/special-tech-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Особые технологии<br />
              Medis Kyungsung
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {/* Features Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Мы гордимся нашей клиникой
              </p>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 w-6 h-6">
                      <Image
                        src="/icons/check-blue.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 items-start justify-center">
                      <p className="font-bold leading-[1.5] not-italic text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Oral Bacteria Therapy Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 box-border flex flex-col gap-4 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full border border-blue-200">
              <h3 className="font-bold leading-[1.35] not-italic text-xl text-black tracking-[-0.4px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Пожизненный уход за полостью рта
              </h3>
              <div className="bg-white h-[200px] overflow-hidden relative rounded-[16px] shrink-0 w-full">
                <Image
                  src="/images/beneficial-bacteria.jpg"
                  alt="Терапия бактерий полости рта"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 items-start w-full">
                <p className="font-bold leading-[1.4] not-italic text-lg text-black tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Терапия бактерий полости рта
                </p>
                <p className="font-medium leading-[1.5] not-italic text-[15px] text-[#5d5f6d] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Пробиотики, разработанные в Каролинском институте Швеции, поддерживают здоровье имплантов на долгие годы
                </p>
              </div>
            </div>

            {/* Waterpik Gift Card */}
            <div className="bg-[#006aff] box-border flex flex-col gap-6 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full">
              <div className="bg-white h-[245px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                <Image
                  src="/images/waterpik.jpeg"
                  alt="Waterpik"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <div className="flex flex-col gap-2 items-start leading-[1.35] not-italic relative shrink-0 text-center text-white w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="font-bold relative shrink-0 text-2xl tracking-[-0.48px] w-full">
                    Стоимостью 90 000 вон
                  </p>
                  <p className="font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">
                    Waterpik в подарок
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.2)] box-border flex flex-col gap-6 items-start p-6 relative rounded-[20px] shrink-0 w-full">
                  <p className="font-bold leading-[1.5] not-italic text-[17px] text-center text-white tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    При участии в акции отзывов о полной имплантации!
                  </p>
                  <div className="h-0 relative shrink-0 w-full">
                    <Image
                      src="/icons/line-divider.svg"
                      alt=""
                      width={247}
                      height={1}
                      className="w-full"
                    />
                  </div>
                  <div className="font-bold leading-[1.5] not-italic text-lg text-center text-white tracking-[-0.36px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Эффективен для удаления остатков пищи<br />
                    вокруг имплантов и массажа десен!<br />
                    Дарим Waterpik —<br />
                    незаменимый инструмент для ухода за полостью рта
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
