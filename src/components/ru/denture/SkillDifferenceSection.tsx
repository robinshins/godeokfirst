'use client';

export default function SkillDifferenceSection() {
  const generalClinic = [
    {
      title: 'внутренняя зуботехническая лаборатория нет',
      description: 'Внешняя лаборатория — рост стоимости и сроков,\nДетальная работа затруднена'
    },
    {
      title: '1этап временный зуб',
      description: 'прикус корректировканет сразу финальный протез'
    },
    {
      title: 'Риск повторной операции',
 description:'Без специализированного послеоперационного ухода\nправильно Риск повторной операции'
    }
  ];

  const medisClinic = [
    {
      title: 'идеальный мастерство',
      description: 'Стоматологи приходят учиться,\nВрач обучает других стоматологов'
    },
    {
      title: '3этап временный зуб система',
      description: 'идеальный прикус для этап точный корректировка'
    },
    {
      title: '0 случаев повторных операций запись',
      description: 'Идеально с первого раза'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Если отличается мастерство<br />
                отличается результат
              </h2>
            </div>
          </div>
          <div className="font-semibold leading-[1.4] not-italic text-[#727582] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Правильно сделать с первого раза — самый мудрый выбор<br />
            Идеальная процедура без повторных операций — вот настоящее мастерство
          </div>
        </div>

        {/* Comparison */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {/* General Clinic */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center w-full">
                    <p className="font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      обычный стоматология
                    </p>
                    <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Беспокойство после процедуры
                    </p>
                  </div>
                </div>
                {generalClinic.map((item, index) => (
                  <div key={index} className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Godeok First */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-[#008095] box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center text-white w-full">
                    <p className="font-bold leading-[1.35] text-2xl tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Godeok First Dental
                    </p>
                    <p className="font-semibold leading-[1.4] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Непревзойдённое мастерство<br />
                      Одна процедура на всю жизнь
                    </p>
                  </div>
                </div>
                {medisClinic.map((item, index) => (
                  <div key={index} className="bg-white box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
