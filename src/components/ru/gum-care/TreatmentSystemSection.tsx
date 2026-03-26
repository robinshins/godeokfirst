'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'Специальное оборудование NSK Varios 970',
      description: 'Новейший ультразвуковой скейлер NSK — точное удаление бактерий из глубоких карманов',
      features: [
        { label: 'Двигатель iPiezo', text: 'Автоконтроль ультразвука — безопасная мощность' },
        { label: 'Сверхточные насадки', text: 'Доступ до глубоких карманов' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'PerioClean антибактериальный мазь лечение',
      description: 'Местный антибиотик Nosacline — введение в глубокие участки дёсен',
      features: [
 { label:'Клинически проверено', text:'внутри исследованиекоманда клинический эффект и сертификация'},
        { label: 'Действие 7 дней', text: 'Одно введение — эффект 7 дней' },
        { label: 'бактерии снижение', text: 'Red Complex бактерии 87.5% → 12.5% снижение' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4этап боль облегчение система',
      description: [
        '"Не думал, что лечение может быть таким комфортным"',
        'Поэтапная система обезболивания'
      ],
      features: [
        { label: 'Полоскание анестетиком', text: 'Полоскание анестетиком — 1-й этап' },
        { label: 'Аппликационная анестезия', text: 'Нанесение мази — 2-й этап' },
 { label:'боль облегчение электрический аппарат анестезии', text:'примерно внутри тоже боль облегчение введение'},
        { label: 'аппарат нервной анестезии', text: 'Идеальное обезболивание глубоких участков' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">Godeok First Dental</p>
            <p>десна лечение система</p>
          </div>
        </div>

        {/* System Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {systems.map((system, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden rounded-[24px] w-full">
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start p-6 w-full">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-center text-white tracking-[-0.48px] w-full">
                  {system.title}
                </p>

                {Array.isArray(system.description) ? (
                  <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    <p className="mb-0">{system.description[0]}</p>
                    <p>{system.description[1]}</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    {system.description}
                  </p>
                )}

                <div className="flex flex-col gap-2.5 items-start w-full">
                  {system.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="font-['Pretendard'] text-white text-sm leading-[23px] tracking-[-0.56px] w-full">
                      <span className="font-bold">{feature.label}</span>
                      <span> : {feature.text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
