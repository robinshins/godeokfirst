'use client';

import Image from 'next/image';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/icons/Logo_black.svg"
            alt="Стоматология Medis Kyungsung"
            width={168}
            height={24}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Почему клиника Medis<br />
          особенная
          </h2>
        </div>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        {/* Reason 1: Врач, обучающий врачей */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="box-border flex flex-col gap-[14px] items-center justify-center px-4 py-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[#006aff] text-[32px] text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                1
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h3 className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Врач, обучающий<br />
                  других врачей
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6 w-full">
              <div className="flex gap-3 w-max">
                {[
                  { img: '/images/seminar-2.png', caption: 'Выступление на конференции' },
                  { img: '/images/seminar-3.png', caption: 'Лекция по имплантологии для врачей' },
                  { img: '/images/seminar-1.png', caption: 'Специальная лекция для стоматологов Пусана' },
                  { img: '/images/seminar-4.png', caption: 'Курс по цифровой имплантации' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-[6px] w-[243px] flex-shrink-0">
                    <div className="relative w-full aspect-[950/1148] rounded-[20px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.caption || `Семинар ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-bold leading-[1.5] not-italic text-[#727582] text-[13px] tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reason 2: 3-этапный протокол временных зубов */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="leading-[1.35] text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  2
                </p>
                <div className="flex flex-col gap-2 items-center w-full">
                  <h3 className="leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full">
                    3-этапный протокол<br />
                    временных зубов
                  </h3>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#006aff]/10 rounded-full">
                    <span className="text-[13px] font-semibold text-[#006aff] tracking-[-0.26px]">
                      *Только для полной имплантации
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                В отличие от одноэтапных временных зубов других клиник,<br />
                наша 3-этапная система обеспечивает идеальный прикус
              </p>
            </div>

            {/* Comparison table */}
            <div className="box-border flex gap-10 h-[263px] items-start justify-center p-6 relative shrink-0 w-full">
              {/* Обычная клиника */}
              <div className="absolute flex flex-col gap-2.5 items-start left-6 top-[17px] w-[133px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] tracking-[-0.44px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Другие клиники
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      1 этап — конец
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      2 этапа нет
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      3 этапа нет
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      4 этапа нет
                    </p>
                  </div>
                </div>
              </div>

              {/* Клиника Medis */}
              <div className="absolute bg-white border-2 border-[#006aff] box-border flex flex-col gap-2.5 items-center justify-center left-[151px] px-[15px] py-[13px] rounded-[11px] top-[1px] w-[182px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[22px] text-black tracking-[-0.44px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Medis
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      1: Мгновенное восст.
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      2: Настройка прикуса
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      3: Проверка прикуса
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      4: Финальный протез
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 3: Операция за 24 часа */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  3
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  Операция за 24 часа
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Благодаря собственной зуботехнической лаборатории<br />
                вы ни дня не проведете без зубов
              </p>
            </div>

            <div className="box-border flex flex-col gap-10 items-start justify-center p-6 relative shrink-0 w-full">
              <div className="flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                {/* 10:00 Утренняя операция */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f2f5ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[80px] h-[80px] -left-[5px] -top-2">
                      <Image
                        src="/images/same-day-morning.png"
                        alt="Утренняя операция"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      10:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Утренняя операция
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      <span className="text-[#0b1727]">Цифровая навигационная хирургия</span> для точной и быстрой установки имплантов
                    </p>
                  </div>
                </div>

                {/* 14:00 Изготовление временных зубов */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#fff9ec] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[70px] h-[70px]">
                      <Image
                        src="/images/same-day-temporary.png"
                        alt="Изготовление временных зубов"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      14:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Изготовление временных зубов
                    </p>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p className="font-semibold leading-[1.4] not-italic text-[#0b1727] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        Индивидуальное изготовление
                      </p>
                      <p className="font-semibold leading-[1.4] not-italic text-[#006aff] text-[13px] tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        Готово за 24 часа в собственной лаборатории
                      </p>
                    </div>
                  </div>
                </div>

                {/* 18:00 Ужин */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f5f4ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[86px] h-[86px] -left-[7px] -top-[7px]">
                      <Image
                        src="/images/same-day-dinner.png"
                        alt="Ужин"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      18:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Ужин и возвращение к жизни
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      <span className="text-[#0b1727]">Ни дня без зубов —</span> социальная жизнь и общение без перерыва
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 4: Тщательный послеоперационный уход */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  4
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  Тщательный послеоперационный уход
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Не просто установка — качественный уход<br />
                для службы 10-20 лет и дольше
              </p>
            </div>

            <div className="box-border flex flex-col gap-6 items-center px-6 pb-6 relative shrink-0 w-full">
              {/* 1. Пожизненный уход за полостью рта */}
              <div className="flex flex-col gap-3 w-full">
                <div className="relative h-[180px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
                  <Image
                    src="/images/beneficial-bacteria.jpg"
                    alt="Пожизненный уход за полостью рта"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Пожизненный уход за полостью рта
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Бактериальная терапия полости рта
                  </p>
                </div>
              </div>

              {/* 2. Защитная каппа для имплантов */}
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full overflow-x-auto">
                  <div className="flex gap-3 pb-2">
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint.webp"
                        alt="Защитная каппа 1"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint2.tif"
                        alt="Защитная каппа 2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Защитная каппа для имплантов
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Лечение бруксизма и проблем с челюстным суставом
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 5: Все виды имплантации */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  5
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  От одиночных имплантов<br />
                  до сложной полной имплантации
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Богатый опыт в различных случаях.<br />
                <span className="text-[#006aff] font-bold">Официально признаны лидером по цифровой навигационной имплантации</span><br />
                в южном районе Пусана
              </p>
            </div>

            {/* Сертификат лидера по имплантации */}
            <div className="flex justify-center w-full px-6">
              <div className="relative w-full max-w-[343px] aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/most-implant-hospital.jpg"
                  alt="Сертификат: лидер по цифровой навигационной имплантации"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Сертификаты Osstem */}
            <div className="w-full overflow-x-auto px-6 mt-4">
              <div className="flex gap-4 pb-2">
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem2.jpg"
                    alt="Сертификат Osstem 2"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem1.jpg"
                    alt="Сертификат Osstem 1"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
              </div>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Одиночный имплант
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Отсутствие 1-2 зубов
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Частичная имплантация
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Отсутствие нескольких зубов, замена мостов
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Полная имплантация
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Беззубая челюсть, All-on-4/6 и другие<br />
                      сложные случаи полной имплантации
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#006aff]/5 border border-[#006aff]/20 rounded-2xl p-4 w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">✨</div>
                  <p className="font-bold text-[#006aff] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Костная пластика, синус-лифтинг и другие сложные случаи — наша специализация
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 6: Минимальное вмешательство */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  6
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  Минимум имплантов,<br />
                  минимум разрезов,<br />
                  минимум костной пластики
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Точная цифровая диагностика позволяет<br />
                проводить только необходимые процедуры
              </p>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Минимум имплантов
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      6 на верхнюю и 4 на нижнюю челюсть —<br />
                      эффективная и надежная фиксация
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Минимум разрезов
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Быстрое восстановление с минимальными разрезами
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Минимум костной пластики
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Точная диагностика — минимальная костная пластика
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
