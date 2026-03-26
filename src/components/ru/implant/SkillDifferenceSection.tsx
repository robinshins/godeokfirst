'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function SkillDifferenceSection() {
  const advantages = [
    {
 title:'линия лично операция',
 description:'Университетская больница послераз врач стоматология\nпроверенный специалист лично проведение операции',
 highlight:'мастерство',
      iconPath: 'M22 10v6M2 10v6M12 2L2 7l10 5 10-5-10-5zM12 22V12'
    },
    {
      title: 'Osstem·Point·Dentis исследованиеконсультативный советвон',
      description: 'Член консультативного совета ведущих имплантологических компаний Кореи\nмы используем новейшие технологии и оборудование',
      highlight: 'проверенный технология',
      iconPath: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18'
    },
    {
      title: '3D цифровая навигация операция',
 description:'0.1mm разница точный установка\nнерв/кровеносный сосуд повреждение риск минимальный',
      highlight: 'точный технология',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      title: 'бесплатныйразрез & установка в тот же день',
 description:'Минимум кровотечения, боли, отека\nбыстрый повседневность возможно',
      highlight: 'комфортный операция',
      iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    }
  ];

  return (
    <div className="bg-[#0a1628] w-full flex justify-center overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#008095]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4DC8D8]/10 rounded-full blur-3xl" />
      </div>

      <div className="box-border flex flex-col gap-12 items-center px-6 py-[80px] relative z-10 w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            WHY GODUK FIRST
          </p>
          <h2 className="font-extrabold text-[32px] text-white leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Если отличается мастерство
            <br />
            <span className="text-[#008095]">отличается результат</span>
          </h2>
          <p className="font-medium leading-[1.6] text-white/70 text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Правильно сделать с первого раза — самый мудрый выбор
            <br />
            Идеальная процедура без повторных операций — вот настоящее мастерство
          </p>
        </FadeInSection>

        {/* Main Stats */}
        <FadeInSection delay={100} className="w-full">
          <div className="bg-gradient-to-br from-[#008095] to-[#006B7A] rounded-3xl p-6 shadow-2xl shadow-[#008095]/30 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-center mb-6">
                <p className="text-white/80 text-[14px] font-medium mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Godeok First Dental Имплант
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-[64px] font-black text-white leading-none" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    1,200
                  </span>
                  <span className="text-[24px] font-bold text-white/80" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    раз+
                  </span>
                </div>
                <p className="text-white/90 text-[15px] font-semibold mt-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 Имплант установка
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <p className="text-[28px] font-black text-white mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>2,000+</p>
                  <p className="text-[12px] text-white/70 font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Удаление зубов мудрости опыт</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <p className="text-[28px] font-black text-white mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>4.9</p>
                  <p className="text-[12px] text-white/70 font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Удовлетворенность пациентов / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Advantages Grid */}
        <FadeInSection delay={200} className="w-full space-y-4">
          <p className="text-center text-white/50 text-[13px] font-medium tracking-wide" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Уникальная система Godeok First Dental разница система
          </p>

          <div className="grid grid-cols-1 gap-3">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#008095]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008095]/20 to-[#006B7A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-bold text-[16px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-white/60 leading-[1.5] whitespace-pre-line" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block px-2.5 py-1 bg-[#008095]/20 text-[#4DC8D8] text-[11px] font-bold rounded-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom CTA */}
        <FadeInSection delay={300} className="w-full">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
            <p className="text-white/80 text-[14px] leading-[1.6] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 <span className="text-[#4DC8D8] font-bold">пожизненно Имплант</span>,?
            </p>
            <p className="text-white text-[15px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 Университетская больница уровень лечение опытлет 
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
