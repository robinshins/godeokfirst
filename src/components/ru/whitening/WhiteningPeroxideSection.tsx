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
              Профессиональное<br />
              перекисное отбеливание
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Безопасное и эффективное отбеливание<br />
              с медицинским высококонцентрированным гелем
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Ostem Beautis System */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Система отбеливания Ostem Beautis
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                Премиум система профессионального отбеливания от ведущего производителя имплантатов №1 в Корее
              </p>

              {/* Beautis Gel Image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Ostem Beautis гель для отбеливания"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light Device Image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="Ostem Beautis LED устройство"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis 15 гель:</span> 15% перекись водорода + специальные активаторы для быстрого эффекта
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> Высокоинтенсивный LED (150-220mW/cm2) для максимального эффекта
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Защита от чувствительности:</span> Безопасная формула, минимизирующая дискомфорт
                  </p>
                </div>
              </div>
            </div>

            {/* Procedure Principle */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Принцип действия
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Медицинская высококонцентрированная перекись водорода (15%) проникает через эмаль и окисляет пигментные молекулы в дентине.<br />
                  В этом процессе пигменты превращаются в бесцветные молекулы, делая зубы естественно белыми.
                </p>
                {/* H2O2 Reaction Image */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Принцип перекисного отбеливания"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Procedure Steps */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Этапы процедуры
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'Защита десен (предотвращение повреждений)',
                    'Нанесение отбеливающего геля',
                    'LED облучение (15-20 минут)',
                    'Повтор 2-3 раза (за один визит)',
                    'Финальная фторизация'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#006aff] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'Без обточки зубов', desc: 'Без повреждения эмали' },
                { title: 'Мгновенный эффект', desc: 'Осветление на 2-8 тонов сразу' },
                { title: 'Естественный цвет', desc: 'Натуральное улучшение оттенка' }
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

          {/* Professional vs Self Whitening */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              Почему профессиональное отбеливание?
            </h3>

            {/* Safety Verification */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Безопасность, признанная стоматологами всего мира
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                Отбеливание зубов признано стоматологами всего мира как один из самых безопасных методов лечения зубов. Многочисленные исследования подтвердили его безопасность, а профессиональное отбеливание под наблюдением врача практически не имеет побочных эффектов.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">Профессиональное</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">Домашнее</p>
                </div>

                {/* Concentration */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">15% концентрация</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Сертифицированное медицинское средство</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% концентрация</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Минимальный эффект</p>
                </div>

                {/* Effect */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">За один день</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Осветление на 3-4 тона</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4+ недели</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Постепенный слабый эффект</p>
                </div>

                {/* Safety */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Предварительный осмотр</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ фторизация</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Самостоятельно</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Риск ожога десен</p>
                </div>
              </div>
            </div>

            {/* Side Effect Management */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Контроль побочных эффектов
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Осмотр перед процедурой:</span> Проверка кариеса и состояния десен
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Защита десен:</span> 100% предотвращение ожогов мягких тканей
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Уход после процедуры:</span> Фторизация для минимизации чувствительности
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Контроль специалиста:</span> Безопасное отбеливание в реальном времени
                  </p>
                </div>
              </div>
            </div>

            {/* Clinical Experience */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Богатый клинический опыт
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">Более 1,000 процедур отбеливания</span> — у нас есть опыт работы с различными состояниями зубов. Мы разрабатываем индивидуальный план с учетом степени пигментации, чувствительности зубов и имеющихся протезов.
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
                  question: 'Будут ли зубы чувствительными после отбеливания?',
                  answer: 'Возможна легкая временная чувствительность, но гель Beautis содержит компоненты для ее минимизации. Фторизация после процедуры дополнительно снижает дискомфорт, который обычно проходит за несколько дней. Более 10 лет клинического опыта позволяют нам проводить процедуру максимально безопасно.'
                },
                {
                  question: 'Как долго сохраняется эффект?',
                  answer: 'Эффект профессионального отбеливания обычно держится 1-2 года. Длительность зависит от питания, курения и гигиены полости рта. Частое употребление кофе, вина, карри и курение могут сократить срок. Регулярная чистка и правильный уход помогут сохранить результат дольше.'
                },
                {
                  question: 'Можно ли повторить процедуру при повторном потемнении?',
                  answer: 'Да, повторное отбеливание возможно. Рекомендуется через 6-12 месяцев после первой процедуры. Повторные процедуры занимают меньше времени и стоят дешевле. Регулярные поддерживающие процедуры помогут сохранить белизну зубов.'
                },
                {
                  question: 'Какие ограничения после отбеливания?',
                  answer: 'В течение 24-48 часов следует избегать красящих продуктов (кофе, вино, карри, кимчи, шоколад) и курения. В этот период поверхность зубов особенно восприимчива к пигментации. Также стоит избегать слишком холодной или горячей пищи. Рекомендуется зубная паста с фтором.'
                },
                {
                  question: 'Отбеливаются ли протезы (коронки, пломбы)?',
                  answer: 'Нет, искусственные конструкции не отбеливаются. Перекись водорода разрушает только пигменты естественных зубов. Коронки, пломбы и ламинаты сохраняют свой цвет. После отбеливания может потребоваться замена протезов для соответствия новому оттенку. Консультация перед процедурой поможет разобраться.'
                },
                {
                  question: 'Можно ли отбеливать во время беременности или кормления?',
                  answer: 'Отбеливание не рекомендуется беременным и кормящим. Влияние перекиси водорода на плод и грудное молоко недостаточно изучено. Рекомендуем дождаться окончания беременности и кормления.'
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
                      <span className="text-[#006aff] font-bold text-[16px] shrink-0">В.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#006aff] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#006aff] font-bold text-[16px] shrink-0">О.</span>
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
