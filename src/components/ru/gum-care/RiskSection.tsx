'use client';

const risks = [
  {
    tag: 'установкакровеносный сосуд',
    title: 'установкакровеносный сосуд заболевание риск 3раз↑',
    desc: 'Пародонтальные бактерии проникают в сосуды, вызывая воспаление и тромбообразование. При заболевании дёсен риск инфаркта до 2,8 раз, инсульта — на 16%. Регулярная чистка снижает риск на 10-14%.',
    stats: ['Риск инфаркта в 2,8 раза', 'Снижение риска инсульта на 16%', 'Совмещайте кардио- и стоматологический осмотры'],
    source: 'Больница Сеульского нац. университета 2024 · AHA 2020',
  },
  {
    tag: 'диабет',
    title: 'диабет осложнение проведение 2раз↑',
    desc: 'Воспаление дёсен повышает инсулинорезистентность, создавая порочный круг. При пародонтите сложнее контролировать HbA1c; при диабете снижается эффект лечения дёсен. Клинически доказано снижение HbA1c на 0,4% от лечения пародонта.',
    stats: ['Потеря контроля сахара в 6 раз', 'HbA1c -0,4% после лечения', 'Осложнения диабета в 2 раза быстрее'],
    source: 'Больница Католического университета 2023 · Общество диабетологии',
  },
  {
    tag: 'мозгзаболевание',
    title: 'деменция возникновение риск 70%↑',
 desc:'пародонт во время Porphyromonas gingivalis мозг мозг если внутри. В мозге пациентов с Альцгеймером обнаружены пародонтальные токсины. При запущенности >10 лет риск деменции значительно возрастает.',
    stats: ['У 40% пациентов с Альцгеймером обнаружены токсины', 'При запущенности >10 лет риск деменции +70%↑', 'Ранний уход за дёснами защищает мозг'],
    source: 'Гарвардский университет 2024 · Journal of Neuroinflammation',
  },
  {
    tag: 'беременная',
    title: 'Преждевременные роды и маловесный ребёнок в 7 раз↑',
    desc: 'Воспалительные медиаторы через кровь достигают плаценты, вызывая преждевременные схватки. Рекомендуется проверить дёсны до беременности·или на ранних сроках.',
    stats: ['Риск преждевременных родов в 7 раз', 'Маловесный ребёнок (<2 кг) в 2 раза', 'Лечение дёсен при беременности по страховке'],
    source: 'Корейское и Европейское пародонтологические общества',
  },
];

export default function RiskSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Health Warning
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Заболевания дёсен<br />не ограничиваются полостью рта
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Бактерии из дёсен попадают в кровоток<br />вызывая серьёзные заболевания.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="flex flex-col gap-5">
          {risks.map((risk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col gap-5">
              {/* Tag + Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider w-fit">
                  {risk.tag}
                </span>
                <h3
                  className="font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {risk.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {risk.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {risk.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#4DC8D8] shrink-0 mt-[3px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#4DC8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className="text-[#4DC8D8] font-semibold text-[13px] leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Source */}
              <p className="text-white/30 text-[11px]">Источник : {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Одна чистка в год<br />снижает риск сердечно-сосудистых заболеваний на 14%.
          </p>
          <p className="text-white/40 text-[13px]">
            Чистка по страховке — обязательно 1 раз в год.
          </p>
        </div>

      </div>
    </div>
  );
}
