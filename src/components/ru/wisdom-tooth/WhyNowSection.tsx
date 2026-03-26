'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    { title: 'Острое воспаление', description: 'Сильная боль и отёк лица' },
    { title: 'Кариес соседнего зуба', description: 'Повреждение распространяется на соседние зубы' },
    { title: 'Дисфункция ВНЧС', description: 'Хронические головные боли и боль в челюсти' },
    { title: 'Нарушение прикуса', description: 'Может потребоваться ортодонтическое лечение' }
  ];
  const benefits = [
    { title: 'Быстрое восстановление', description: 'Чем моложе — тем быстрее заживление' },
    { title: 'Профилактика осложнений', description: 'Безопаснее, когда нет воспаления' },
    { title: 'Экономия средств', description: 'Лечение до появления проблем' },
    { title: 'Комфортная процедура', description: 'Без воспаления анестезия действует лучше' }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">WHY NOW</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">Почему удалять <span className="text-[#008095]">сейчас</span>?</h2>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">Проблемы при запущенном зубе мудрости</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((p, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/x-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{p.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">Преимущества раннего удаления</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/check-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{b.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">Многие пациенты терпят<br />до скорой помощи</h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80">Каждую неделю пациенты с сильным воспалением<br />обращаются в скорую под утро<br />Раннее удаление предотвратит эти страдания</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
