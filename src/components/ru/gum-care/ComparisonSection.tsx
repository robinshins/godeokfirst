'use client';

import Link from 'next/link';

const levels = [
  {
    level: 'Step 1',
    title: 'чистка зубовкачество',
    badge: 'Ежедневно',
 desc:'зуб поверхность и десналиния зубной налет·бактериимембрана удаление. Правильная чистка — первый шаг профилактики. Минимум 2 раза в день.',
    point: 'Зубной камень в глубоких карманах невозможно удалить щёткой.',
    insurance: null,
    highlight: false,
  },
  {
    level: 'Step 2',
    title: 'чистка',
    badge: 'год 1~2раз · здоровстраховое покрытие',
    desc: 'Удаление затвердевшего камня и налёта ультразвуком. Одна чистка снижает риск сердечно-сосудистых заболеваний на 10-14%. Для пациентов от 19 лет — 1 раз в год по страховке.',
    point: 'Глубокие карманы недоступны только чисткой.',
    insurance: ' только 19лет и более · год 1раз · здоровстраховое покрытие (собственный нагрузка 20%)',
    highlight: false,
  },
  {
    level: 'Step 3',
    title: 'десна лечение',
    badge: 'необходимый  · здоровстраховое покрытие',
 desc:'десна один пародонт внутри точное удаление камня и бактерий кюретой, полировка корня для предотвращения повторного прикрепления. При необходимости вводится мазь PerioClean. Покрывается страховкой, проводится по 1-4 зоны.',
    point: 'десна После лечения 3~6месяцев неделя регулярный осмотр через рецидив профилактика.',
    insurance: 'Мед. страховка · По зонам · Включая анестезию',
    highlight: true,
  },
];

export default function ComparisonSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Care Levels
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Когда одной чистки<br />недостаточно 
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            десна здоров этап уходдолжен .<br />
            чистка и десна лечение, все здоровстраховка применение.
          </p>
        </div>

        {/* Level Cards */}
        <div className="flex flex-col gap-5">
          {levels.map((c, i) => (
            <div
              key={i}
              className={`rounded-[24px] p-6 flex flex-col gap-5 relative overflow-hidden ${
                c.highlight
                  ? 'bg-white border-2 border-[#008095] shadow-[0_8px_32px_-8px_rgba(0,128,149,0.2)]'
                  : 'bg-white border border-[#e9ebf1] shadow-[0_4px_20px_-4px_rgba(21,26,36,0.06)]'
              }`}
            >
              {c.highlight && (
                <div className="absolute top-0 right-0 bg-[#008095] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-[14px] rounded-tr-[22px]">
                  самый важно
                </div>
              )}

              {/* Level + Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[11px] font-black text-[#008095] tracking-[0.1em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.level}
                </span>
                <span
                  className={`font-bold text-[11px] px-2.5 py-1 rounded-full ${
                    c.highlight
                      ? 'bg-[#008095] text-white'
                      : 'bg-[#f0f7fa] text-[#008095]'
                  }`}
                >
                  {c.badge}
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bold text-[22px] text-[#2d3340] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-medium text-[15px] text-[#4a4f5e] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.desc}
                </p>
              </div>

              {/* Point */}
              <div className="flex items-start gap-2 bg-[#f8f9fb] rounded-2xl p-4">
                <div className="shrink-0 mt-[3px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#008095" strokeWidth="1.5" />
                    <path d="M7 4.5V7.5M7 9.5V9.8" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p
                  className="text-[13.5px] font-semibold text-[#008095] leading-[1.5]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.point}
                </p>
              </div>

              {/* Insurance Badge */}
              {c.insurance && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5L2 4V8C2 11.3 4.6 14.4 8 15C11.4 14.4 14 11.3 14 8V4L8 1.5Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M5.5 8L7 9.5L10.5 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p
                    className="text-[#008095] font-bold text-[13px]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {c.insurance}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Баннер о страховке */}
        <div className="bg-[#21314E] rounded-[24px] p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              здоровстраховка информирование
            </p>
            <h4
              className="text-white font-bold text-[20px] leading-[1.35]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              чистка и десна лечение,<br />все здоровстраховка 
            </h4>
            <p
              className="text-white/60 text-[14px] leading-[1.7] mt-1"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              Расходы невелики — делайте чистку 1 раз в год. Чем раньше обнаружить — тем проще и дешевле лечение.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                label: 'чистка',
                detail: 'От 19 лет · 1 раз в год · Доплата ~20%',
              },
              {
                label: 'пародонт лечение (десна лечение)',
                detail: 'При пародонтите · По зонам по страховке · С анестезией',
              },
              {
                label: 'PerioClean лечение',
                detail: 'Покрытие страховкой в зависимости от глубины карманов',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                <p
                  className="text-white font-bold text-[14px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#4DC8D8] font-medium text-[13px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <Link href="/ru/consultation">
            <div className="bg-[#008095] rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#006d80] transition-colors">
              <p
                className="text-white font-bold text-[15px]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                десна состояние консультация запись
              </p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
