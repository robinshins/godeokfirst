'use client';

import Image from 'next/image';

export default function PhilosophySection() {
  return (
    <div className="bg-white w-full px-4 py-[60px] relative">
      {/* Background gradient */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/ellipse-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[343px] mx-auto flex flex-col gap-10 items-start relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full">
              Критерии хорошей клиники
            </p>
            <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">Клиника, которая активно лечит десны —</p>
              <p>это хорошая клиника</p>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Bad Reasons Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
              <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full">
                <p className="mb-0">Почему многие клиники</p>
                <p>избегают лечения десен</p>
              </div>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-3.5 items-start p-5 rounded-2xl w-full">
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    Имплантация после удаления выгоднее
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    Пациенты не любят боль при лечении десен
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    Опасения жалоб при удалении после лечения
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    Низкая прибыль относительно времени и усилий
                  </p>
                </div>
              </div>
            </div>

            {/* Good Reasons Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
              <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full">
                <p className="mb-0">Почему наша клиника</p>
                <p>настаивает на лечении десен</p>
              </div>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-3.5 items-start p-5 rounded-2xl w-full">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span className="text-[#006aff]">Сохранение своих зубов</span>
                    <span> — всегда </span>приоритет
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span className="text-[#006aff]">4-этапная система анестезии</span>
                    <span> для </span>комфортного лечения
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span className="text-[#006aff]">Консилиум специалистов</span> для высокой успешности
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard_JP'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span>Здоровье </span>
                    <span className="text-[#006aff]">зубов пациента на всю жизнь</span> — главное
                  </p>
                </div>
              </div>
            </div>

            {/* Blue Conclusion Card */}
            <div className="bg-[#006aff] box-border flex flex-col font-['Pretendard_JP'] font-bold gap-5 items-center justify-center leading-[0] p-6 rounded-[24px] text-center text-white w-full">
              <div className="leading-[1.35] text-2xl tracking-[-0.48px] w-full">
                <p className="mb-0">Сохранение своих зубов —</p>
                <p>лучшее лечение</p>
              </div>
              <div className="leading-[1.5] opacity-80 text-[17px] tracking-[-0.34px] w-full">
                <p className="mb-0">Даже если это немного неудобно, регулярное</p>
                <p className="mb-0">лечение десен для сохранения своих зубов —</p>
                <p>гораздо ценнее имплантации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
