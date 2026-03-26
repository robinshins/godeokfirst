'use client';

import Image from 'next/image';

export default function TreatmentMethodsSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4 relative">
      {/* Background gradient */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/cavity-treatment-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                  лечение метод и оборудование
                </h2>
                <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
 состояние подходящий лечениеметод линия <br />
                  точный оборудование завершение тоже высокий
                </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* кариес лечение Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    кариес лечение
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* начальный кариес лечение */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            начальный кариес лечение
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
 точный диагностика кариес до 
                          </p>
                        </div>
                      </div>

                      {/* композит лечение */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            композит лечение
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
 натуральный зуб и цвет эстетический вон
                          </p>
                        </div>
                      </div>

 {/* вкладка · */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            вкладка · накладка
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
 кариес тоже удалениенет точный сохранение лечение
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* нерв лечение Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    нерв лечение
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* боль облегчение */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            боль облегчение
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
 тяжелый стоматология удаление комфортный повседневность восстановление
                          </p>
                        </div>
                      </div>

                      {/* зуб сохранение */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            зуб сохранение
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
 удалениенет натуральный зуб 
                          </p>
                        </div>
                      </div>

                      {/* точный нерв лечение */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            точный нерв лечение
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Специалист комплексной стоматологии лично проведение операции
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* оборудование и преимущество Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    специалист оборудование
                  </h3>

 {/* Trios5 полость рта сканер - раздел */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    <div className="flex gap-[22px] items-center w-full">
                      <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                        <Image
                          src="/images/트리오스5.jpg"
                          alt="Trios5 полость рта сканер"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start flex-1">
                        <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#008095] w-full">
                          Trios5 полость рта сканер
                        </p>
                        <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
 новейший сканер<br />
 один нет точный 
                        </p>
                      </div>
                    </div>

 {/* преимущество */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
 один повторный нет начальныйвнутри 3D сканирование
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
 более точный протезизготовление конструкции
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            кариес удаление сразу после сразу сканирование индивидуально изготовление
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            комфортный лечение опыт, минимизация погрешности
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#008095]/10 to-[#00aabb]/10 p-4 rounded-xl w-full border border-[#008095]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
 Trios5 3Shape новейшийтип полость рта сканер, минут тоже точный зуб тип может. вкладка·накладка·коронка лечение примерно и комфортный лечение возможно.
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
