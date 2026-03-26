'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhiteningPeroxideSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              стоматология и специалист отбеливание<br />
              перекись водорода отбеливание
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
 высококонцентрированный тоже отбеливание<br />
 безопасность и эффект отбеливание опытлет 
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Отбеливающий гель Osstem Beautis */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Osstem Beautis(Beautis) отбеливание система
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
 внутри 1 Имплант Osstem специалист отбеливание система
              </p>

              {/* Beautis отбеливание уже */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Отбеливающий гель Osstem Beautis"
                  fill
                  className="object-contain"
                />
              </div>

 {/* Beautis уже */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
 alt="Osstem Beautis"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">Beautis 15 отбеливание:</span> 15% перекись водорода + быстрый отбеливание эффект
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">Beautis:</span> тоже LED линия(150-220mW/㎠) отбеливание эффект и 
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">гиперчувствительность предотвращение:</span> чувствительность симптом минимальный безопасностьодин назначение
                  </p>
                </div>
              </div>
            </div>

            {/* Принцип процедуры */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Принцип процедуры
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
 высококонцентрированный тоже перекись водорода(15%) зуб качество качество внутри окрашивание минут ·минут <br />
 процесс окрашивание материалкачество бесплатный минут натуральный зуб 
                </p>
 {/* H2O2 уже */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="перекись водорода отбеливание вон"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* процедура процесс */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  процедура процесс
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'десна защита нанесение (десна повреждение предотвращение)',
                    'высококонцентрированный тоже отбеливание нанесение',
'LED линия (15-20минут)',
'2-3раз (Завершение в тот же день)',
                    'фтор нанесение завершение'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#008095] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
 { title:'зуб удаление ZERO', desc:'качество повреждение нет'},
 { title:'Мгновенный эффект', desc:'процедура сразу после 2-8этап'},
 { title:'натуральный цвет', desc:'зуб'}
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* специалист отбеливание vs домашний отбеливание */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
 почему специалист отбеливание?
            </h3>

 {/* безопасность */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5v5c0 4.1 3.1 7.9 7 9 3.9-1.1 7-4.9 7-9V5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  до лет стоматологияврач примерноодин безопасность
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
 отбеливаниеДо лечения лет стоматологи примерноодин самый безопасностьодин зублечение метод. много исследование и клинический безопасность, стоматологияврач мониторинг проведение специалист отбеливание повторный до зуб стоматология побочные эффекты сообщается.
              </p>
            </div>

            {/* эффект и разница */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#008095] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">специалист отбеливание</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">домашний отбеливание</p>
                </div>

 {/* тоже */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% высококонцентрированный</p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]"> </p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% низкоконцентрированный</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">эффект и </p>
                </div>

                {/* эффект и */}
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">день </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4этап </p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4неделя и более</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]"> один эффект</p>
                </div>

                {/* безопасность */}
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">предварительный полость рта </p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ фторнанесение процедура</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]"> процедура</p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">десна риск</p>
                </div>
              </div>
            </div>

            {/* побочные эффекты минимальный */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
 побочные эффекты уход
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]">процедура до:</span> кариес, десна заболевание проверка после безопасность проведение
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]">десна защита:</span> защита год 100% профилактика
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]">процедура после уход:</span> фторнанесение·повторный процедура чувствительность симптом минимальный
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">специалист мониторинг:</span> время состояние проверка безопасностьодин отбеливание
                  </p>
                </div>
              </div>
            </div>

            {/* клинический опыт */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  богатый клинический опыт
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">1,000случаев и более отбеливание процедура опыт</span> различные зуб состояние о ноу-хау хранение и. окрашивание около, зуб, существующий протезматериал и т.д. один индивидуальнотип отбеливание план.
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Часто задаваемые вопросы
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
 question:'После отбеливания зуб?',
 answer:'временно симптом может, Beautis отбеливание гиперчувствительность предотвращение и чувствительность симптом минимальный. процедура после фторнанесение и повторный процедура через тоже более, большинствоминут внутри. 10лет и более клинический опыт пациент индивидуальный зуб состояние подходящий безопасность проведение.'
                },
                {
 question:'отбеливание эффект и продолжительно?',
 answer:'специалист отбеливание эффект и обычный 1-2лет и более продолжительно. индивидуальный, курение или нет, полость рта уход состояние в зависимости от разница и, кофе, вино, карри и т.д. окрашивание еда неделя курение случай эффект и продолжительно период качество может. периодически чистка и правильный чистка зубовкачество отбеливание эффект и более долго поддержание может.'
                },
                {
 question:'окрашивание снова повторныйпроцедура возможный?',
 answer:'Да, повторныйпроцедура возможно. начальный После отбеливания 6месяцев~1лет примерно тоже повторныйпроцедура, начальный процедура более время и количество раз тоже эффект и может. периодически стоматология (touch-up) процедура зуб внутри поддержание и, стоимость тоже начальный процедура.'
                },
                {
 question:'После отбеливания неделяврач?',
 answer:'После отбеливания 24-48время окрашивание вызывать еда(кофе, вино, карри, кимчи, шоколад и т.д.) и сигарета неделялет. период зуб поверхность летодин окрашивание. также разница еда еда временно чувствительность может вызвать может установка, фтор стоматология.'
                },
                {
                  question: 'существующий протезматериал(коронка, композит) тоже отбеливание ?',
 answer:'Нет, протезматериал отбеливание. перекись водорода отбеливание натуральный зуб окрашивание материалкачество только минут, коронка, композит, виниры и т.д. протезматериал оригинальный цвет поддержание. в зависимости от протезматериал случай, После отбеливания протезматериал и натуральный зуб цвет разница протезматериал должен может. процедура до консультация через точный информирование получить может.'
                },
                {
 question:'беременность во время грудное вскармливание во время тоже отбеливание возможный?',
 answer:'беременность во время грудное вскармливание во время отбеливание процедура. перекись водорода плод грудное молоко стоматология влияние о достаточноодин исследование без, безопасность для беременность и грудное вскармливание конец после процедураполучить.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f3f6fb] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-5 flex items-start justify-between gap-3 text-left hover:bg-[#e9ebf1] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#008095] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#008095] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#008095] font-bold text-[16px] shrink-0">A.</span>
                        <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
