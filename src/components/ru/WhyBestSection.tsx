import Image from 'next/image';

export default function WhyBestSection() {
  const seminars = [
    { image: '/images/seminar-3.png', title: 'Обучение имплантации для стоматологов' },
    { image: '/images/seminar-1.png', title: 'Специальная лекция Ассоциации стоматологов Пусана' },
    { image: '/images/seminar-4.png', title: 'Курс эксперта по цифровой имплантации' },
    { image: '/images/seminar/digital-prosthetics-lecture.jpg', title: 'Клиническая лекция по цифровому протезированию' },
    { image: '/images/seminar/megagen-digital-scan-seminar.jpg', title: 'Семинар Megagen по цифровому сканированию' },
    { image: '/images/seminar/osstem-digital-guide-surgery-lecture.jpg', title: 'Лекция Osstem по цифровой хирургии' }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="w-[167.981px] h-[24px] relative">
              <Image
                src="/icons/Logo_black.svg"
                alt="Medis Dental Clinic"
                width={148}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Почему Кёнсон Медис
            <br />
            лучшие в Корее
          </h2>
        </div>

        {/* Reason 1: Official Designated Hospital */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Официальная больница
              <br />
              престижных университетов
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              Доверенное партнерское медицинское учреждение, выбранное известными университетами и организациями
            </p>
          </div>

          {/* Partner Institutions */}
          <div className="flex flex-col gap-3 w-full">
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/busan-univ-hospital.svg"
                alt="Больница Пусанского национального университета"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongguk-cm.jpg"
                alt="Dongguk CM"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/kyungsung-univ.png"
                alt="Университет Кёнсон"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongmyung-univ.svg"
                alt="Университет Тонмён"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/pukyong-univ.png"
                alt="Пукёнский национальный университет"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>
        </div>

        {/* Reason 2: Excellence Certified Hospitals */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Megagen/Osstem/Neo
              <br />
              Сертифицированная клиника
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              Не только назначены сертифицированной хирургической клиникой,
              <br />
              но и активно участвуем в исследованиях как клинические консультанты
            </p>
          </div>

          {/* Scrolling Certifications */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3909.jpg"
                alt="Сертификат клиники превосходства в имплантации"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3910.jpg"
                alt="Сертификат клиники превосходства в имплантации"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3911.jpg"
                alt="Сертификат клиники превосходства в имплантации"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3912.jpg"
                alt="Сертификат клиники превосходства в имплантации"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Reason 3: Expert Lectures */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Лекции для стоматологов
              <br />
              по всей стране
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              Делимся экспертизой и техниками на крупных семинарах и конференциях по имплантации
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {seminars.map((seminar, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={seminar.image}
                  alt={seminar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-bold leading-tight">
                  {seminar.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
