'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4 bg-[#21314E]">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              Специалист комплексной стоматологии<br />лично лечение
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[20px] leading-[1.6] tracking-[-0.4px] w-full text-[#4DC8D8]">
              Godeok First Dental Главный врач
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Ли Донхён Главный врач"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    Ли Донхён
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Главный врач
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>Минздрав Кореи сертификация Специалист комплексной стоматологии</p>
                  <p>Приглашенный профессор стоматологической больницы университета Чосон</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
 <li>стоматологической больницы Чосон </li>
 <li>стоматологической больницы Чосонбольница стоматология и до окончание курса</li>
 <li>о стоматологияраз примерноразвон</li>
 <li>ополость рта Имплантраз примерноразвон</li>
 <li> внутристоимость Имплант специалист</li>
                <li>Имплант·протез·нервлечение комплексное лечение</li>
              </ul>

 {/* сохранение и специалист лечение */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
 натуральныйзуб для<br />особый сохранениелечение
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
 натуральныйзуб стоматологияврач натуральныйзуб о сохранение.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* лечение пункт */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            нервлечение, повторныйнервлечение
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
 летодин требование нервлечение стоматологиясохранение и специалист.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
 стоматология повторный 
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
 нервлечение стоматология повторный стоматология нерв зуб внутри.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
 зуб процедура
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
 различные клиническийопыт через после зуб после диагностика и внутри.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
 стоматология 
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
 существующий удалениедолжен зуб воспаление удаление сохранение сложное лечение.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
 зуб повторный 
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
 зуб удаление после воспаление причина минут удаление и снова установка неделя лечение.
                          </p>
                        </div>
                      </div>
                    </div>

 {/* пациент индивидуально консультация */}
                    <div className="bg-[#008095]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#008095]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
 💡 сохранение и специалист все лечение о богатый опыт сразу, пациентминут и достаточноодин консультация через самый необходимый лечение проведение.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

 {/* Trios5 + специалист */}
          <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[20px] p-6 w-full">
            <p className="font-['Pretendard_JP'] text-[12px] font-bold text-white/60 uppercase tracking-[2px] mb-3">WHY GODUK FIRST</p>
            <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] text-white mb-4">
 Специалист комплексной стоматологии<br />кариес от нервлечение до лично 
            </p>
            <div className="flex flex-col gap-2">
              {[
                'стоматологической больницы Чосонбольница Бывший приглашенный профессор',
'Trios5 полость рта сканер — точный',
                'кариес·вкладка·нервлечение богатый клинический опыт',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#4DC8D8] text-[13px]">✓</span>
                  <span className="text-white/90 text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
