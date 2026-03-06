import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: 'Доктор Ким Дон Сок',
      position: 'Главный врач',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Магистр интегративной стоматологии',
        'Сертифицированный специалист Министерства здравоохранения по интегративной стоматологии'
      ],
      details: [
        'Аспирантура Сеульского национального университета, продвинутая стоматология',
        'Аспирантура Сеульского национального университета, имплантология',
        'Член правления Всемирного конгресса оральной имплантологии',
        'Член правления Корейской академии челюстно-лицевой имплантологии',
        'Член исследовательской группы по протезированию Техасского университета A&M',
        'Научный консультант Osstem Implant',
        'Научный консультант Neo Implant',
        'Научный консультант Hiossen Implant',
        'Сертифицированный член Корейской академии эстетической стоматологии',
        'Действительный член Корейской академии интегративной стоматологии',
        'Действительный член Корейской академии консервативной стоматологии',
        'Сертификат по лечению ВНЧС, Агентство по проверке медицинского страхования'
      ]
    },
    {
      name: 'Доктор Пэ Ин Хе',
      position: 'Специалист по консервативной стоматологии',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'Двойная лицензия: стоматолог и фармацевт',
        'Сертифицированный специалист Министерства здравоохранения по консервативной стоматологии'
      ],
      details: [
        'Резидентура в Стоматологической больнице Пусанского национального университета, консервативная стоматология',
        'Аспирант Стоматологической школы Пусанского национального университета (консервативная стоматология)',
        'Магистр стоматологии, с отличием',
        'Действительный член Корейской академии консервативной стоматологии',
        'Действительный член Корейской академии эндодонтии',
        'Действительный член Корейской академии адгезивной стоматологии',
        'Член Корейской академии стоматологических материалов',
        'Член Корейской академии эстетической стоматологии',
        'Бывший директор стоматологической клиники Good Smile',
        'Бывший директор стоматологической клиники Plant'
      ]
    }
  ];

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="flex justify-center items-center w-[167.981px] h-[24px] gap-[4.8px]">
            <Image
              src="/icons/Logo.svg"
              alt="Medis Dental Clinic"
              width={168}
              height={24}
              className="object-contain"
            />
          </div>
          <p className="text-[17px] font-['Noto_Sans'] font-bold text-[#64b7ff] uppercase tracking-[2.04px] leading-[32px]">
            Сотрудничество специалистов
          </p>
          <h2 className="text-[36px] font-['Noto_Sans'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Кёнсон Медис<br />
            Команда экспертов
          </h2>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-col gap-[60px] mt-[60px]">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col gap-8">
              {/* Doctor Image */}
              <div className="bg-white rounded-[20px] overflow-hidden shadow-lg h-[280px] relative">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} ${doctor.position}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Doctor Info */}
              <div className="text-white">
                <div className="flex items-center gap-2 mb-5">
                  <h3 className="text-3xl font-bold">{doctor.name}</h3>
                  <span className="text-lg font-bold">{doctor.position}</span>
                </div>

                <div className="text-2xl font-bold mb-8 leading-[1.6]">
                  {doctor.credentials.map((cred, i) => (
                    <p key={i} className={i === 0 ? 'mb-0' : ''}>{cred}</p>
                  ))}
                </div>

                <ul className="space-y-2 text-sm opacity-80">
                  {doctor.details.map((detail, i) => (
                    <li key={i} className="leading-[1.4] pl-5 relative before:content-['•'] before:absolute before:left-0">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
