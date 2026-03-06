'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'Специальное оборудование NSK varios 970',
      description: 'Новейший ультразвуковой скейлер японской компании NSK для точного удаления бактерий глубоко в деснах',
      features: [
        { label: 'Двигатель iPiezo', text: 'Стабильная мощность с автоматической регулировкой частоты' },
        { label: 'Сверхточные насадки', text: 'Доступ к глубоким пародонтальным карманам' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Лечение антибиотической мазью Периоклин',
      description: 'Местный антибиотик на основе миноциклина для прямого введения глубоко в десны',
      features: [
        { label: 'Клинически проверено', text: 'Эффективность подтверждена многочисленными исследованиями' },
        { label: 'Действует неделю', text: 'Одно введение сохраняет эффект в течение недели' },
        { label: 'Снижение бактерий', text: 'Бактерии Red Complex снижаются с 87.5% до 12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4-этапная система обезболивания',
      description: [
        '"Оказывается, лечение зубов может быть таким комфортным"',
        'Многоуровневая система блокировки боли, которая удивляет пациентов'
      ],
      features: [
        { label: 'Полоскание с анестетиком', text: 'Первичное обезболивание всей полости рта' },
        { label: 'Нанесение анестезии', text: 'Вторичная блокировка мазью на место укола' },
        { label: 'Электронный анестезиолог', text: 'Безболезненное введение с компьютерным контролем скорости' },
        { label: 'Нервная блокада', text: 'Полная блокировка боли до глубоких участков' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">Система лечения десен</p>
            <p>клиники Medis</p>
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
              <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start p-6 w-full">
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
