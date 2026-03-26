'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function InHouseLabSection() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <p className="text-[15px] font-bold text-[#008095] tracking-[3px] uppercase">
            DENTAL LAB
          </p>
          <h2 className="font-bold leading-[1.35] text-[32px] text-[#1a1a1a] tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            протез качество для<br />
            <span className="text-[#008095]">тщательный отбор специалист зуботехническая лаборатория</span>
          </h2>
          <p className="font-semibold leading-[1.5] text-[#3e3a3a] text-base tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Хорошая лаборатория — тоже мастерство
          </p>
        </FadeInSection>

        {/* Key Point Card */}
        <FadeInSection delay={100} className="w-full bg-gradient-to-br from-[#008095]/10 to-[#6eb7bc]/10 rounded-2xl p-6 border border-[#008095]/20">
          <div className="flex items-start gap-4">
            <div className="bg-[#008095] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#3e3a3a] text-[17px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                зубной техник мастерство протез качество результатпримерно
              </p>
              <p className="text-[#666] text-[14px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Даже при отличной установке импланта, неточный протез сверху — всё напрасно. Лично проверенная главным врачом <span className="font-bold text-[#008095]">специалист зуботехническая лаборатория</span> изготовление.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Why external lab is better */}
        <FadeInSection delay={200} className="flex flex-col gap-4 w-full">
          <p className="font-bold text-[#1a1a1a] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Почему специализированная лаборатория?
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '🏆',
                title: 'Проверенные партнёры из сети университетских больниц',
                desc: 'Опыт работы приглашённым профессором и сотрудничество с коллегамиврач и сеть через, мастерство проверенный специалист зуботехническая лаборатория тщательный отбор.',
              },
              {
                icon: '🔬',
 title:'внутренняя зуботехническая лаборатория и другой специалист',
 desc:'специалист зуботехническая лаборатория новейший CAD/CAM оборудование и опытный зубной техник, 1~2 внутренняя зуботехническая лаборатория высокий уровень протезизготовление конструкции.',
              },
              {
                icon: '🤝',
                title: 'Тесное сотрудничество с врачом',
                desc: 'Врач лично объясняет случай технику для идеального прикуса и эстетики.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={300} className="w-full bg-[#0b1727] rounded-2xl p-6">
          <p className="font-bold text-white text-[16px] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            💡 внутренняя зуботехническая лаборатория всегда хороший случаев Нет
          </p>
          <p className="text-[#a0c4d4] text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 внутренняя зуботехническая лаборатория внутри тоже быстро, специалист и оборудование один случай много. Godeok First Dental <span className="text-[#6eb7bc] font-bold">качество важнее скорости</span> линия. Правильно с первого раза — залог долгой службы.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
