'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full mb-4">
          <div className="flex justify-center mb-6 opacity-80">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={140}
              height={84}
              className="object-contain grayscale opacity-60"
            />
          </div>
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight">
            Почему Godeok First Dental
            <br />
            <span className="text-[#008095] relative inline-block">
              особенны
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Reason 1 */}
          <FadeInSection delay={100}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[22px] font-bold text-[#3e3a3a] leading-[1.4] mb-4 break-keep">
 Университетская больница <br />
                <span className="text-[#008095] text-[24px]">Имплант о<br/>имплантологии</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
 Имплант операция, самый важно.
 Университетская больница тоже высокий операция проведение операции 
                <span className="font-bold text-[#333]"> Приглашенный профессор стоматологической больницы университета Чосон</span> оперирует лично.
              </p>

              {/* врач квалификация уже Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
 alt="Доктор Ли Донхён сертификация"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="Доктор Ли Донхён квалификация и Минздрав Кореи сертификация"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
              </div>
              {/* врач операция фото */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="Доктор Ли Донхён операция "
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">Специалист комплексной стоматологии ответственность лечение</p>
 <p className="text-[13px] text-[#777] leading-[1.5]"> тоже Имплант от финальный протездо<br/>Минздрав Кореи сертификация специалист лично ответственность</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M22 10v6M2 10v6" /><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M12 22V12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">Osstem·Point·Dentis Имплант исследованиеконсультативный советвон</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">Член консультативного совета ведущих имплантологических компаний Кореи<br/>мы используем новейшие технологии и оборудование</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 2 */}
          <FadeInSection delay={200}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Godeok First Dental всегда
                <br />
                <span className="text-[#008095]">делает операцию дважды</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                Главный врач лично проводит виртуальную имплантацию
                <br />
                проектирует оптимальное положение и затем выполняет реальную операцию
              </p>

              {/* 3D цифровая навигация уже */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="3D цифровая навигация операция"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              {/* ключевой преимущество раз */}
              <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-4 mb-5 shadow-lg shadow-[#008095]/20">
                <p className="font-bold text-white text-[14px] text-center leading-[1.5]">
                  Быстрая и комфортная операция —
                  <br />
                  минимум отека, боли и костной пластики
                </p>
              </div>

              {/* 5этап процесс */}
              <div className="space-y-2">
                {[
                  { step: 1, title: '3D сканирование полости рта', desc: 'Сканирование полости рта для точной диагностики' },
                  { step: 2, title: 'Виртуальное планирование операции', desc: 'Планирование оптимальной установки на компьютере' },
                  { step: 3, title: 'Установка направляющей', desc: 'Точная направляющая без отклонений в 1 мм' },
                  { step: 4, title: 'Операция с минимальным разрезом', desc: 'Сокращение времени операции, минимум боли/отека' },
                  { step: 5, title: 'Проверка виртуальной операции', desc: 'Повышение удовлетворенности за счет минимизации ошибок' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3 bg-[#f8fbfd] p-3 rounded-xl border border-[#eef4f8]">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#008095] to-[#006B7A] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-white text-[12px] font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#333]">{item.title}</p>
                      <p className="text-[12px] text-[#888]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 3 */}
          <FadeInSection delay={300}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Безразрезная имплантация &
                <br />
                <span className="text-[#008095]">установка в тот же день</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                Без разреза десны — меньше боли и отека,
                <br />
                Быстрое восстановление возможно
              </p>

              {/* операция уже */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/goduk_images/flapless-implant-surgery.webp"
                    alt="Безразрезная имплантация операция"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-5 text-white shadow-lg shadow-[#008095]/20">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                    <span className="font-black text-lg">01</span>
                    <span className="font-bold">Безразрезная имплантация</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-white font-medium">
                    <li>• Установка через маленькое отверстие без разреза десны</li>
                    <li>• Минимум кровотечения, боли, отека</li>
                    <li>• Быстрое возвращение к обычной жизни после операции</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#edf2f7] rounded-xl p-5 text-[#333]">
                   <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <span className="font-black text-lg text-[#008095]">02</span>
                    <span className="font-bold">удаление после установка в тот же день</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
 <li>• удаление и Имплант установка</li>
                    <li>• Сокращение визитов и сроков лечения</li>
                    <li>• Минимизация потери костной ткани</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 4 */}
          <FadeInSection delay={400}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
 Имплант результатпримерно
                <br />
                <span className="text-[#008095]">Научный послеоперационный уход</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
 Имплант неделяпричина &apos;воспаление&apos;.<br/>
                невидимые <span className="font-bold text-[#333]">вредные бактерии полости рта</span>, которые мы анализируем<br/>
 Имплант периимплантит вон разница.
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] mb-3 space-y-4">
                <div>
                   <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Уход важнее, чем установка
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
 натуральный зуб воспаление один Имплант.<br/>
                    Определяем распределение бактерий точным обследованием<br/>
                    и значительно продлеваем срок службы индивидуальным уходом.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    Система профилактики периимплантита на основе данных
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
 Имплант периимплантит вызывать 
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      Превентивные меры до возникновения воспаления
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      Пожизненный уход на основе объективных данных
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-[13px] text-[#888] bg-gray-50 p-3 rounded-lg leading-[1.5] border border-gray-100">
                <span className="font-bold text-[#008095]">Doctor&apos;s Note.</span> Ценность естественного зуба — около 30 млн вон. Точное обследование защитит ваши зубы.
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 5 */}
          <FadeInSection delay={500}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">5</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 05</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Минимальная установка, минимальный разрез
                <br />
                <span className="text-[#008095]">Минимальная костная пластика</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                Благодаря точной цифровой диагностике
                <br />
                проводим минимально необходимые процедуры
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Мин. установка', desc: '6 на верхней, 4 на нижней челюсти — надежная фиксация' },
                  { title: 'Мин. разрез', desc: 'восстановление быстрый Операция с минимальным разрезом' },
                  { title: 'Минимальная костная пластика', desc: 'Минимальная костная пластика по результатам точной диагностики' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#f0f9ff] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#333] mb-0.5">{item.title}</p>
                      <p className="text-[13px] text-[#777] leading-[1.4]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
