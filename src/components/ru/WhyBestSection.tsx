import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(블랙).png"
                alt="Godeok First Dental"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Почему Godeok First Dental
            <br />
            лучшие
          </h2>
        </div>

        {/* Reason 1: Специалист комплексной стоматологии */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              Минздрав Кореи сертификация
              <br />
              Специалист комплексной стоматологии
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              Главный врач лично консультация, операция, послеоперационный уход до ответственность
            </p>
          </div>

          {/* Минздрав Кореи сертификация уже */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
              alt="Минздрав Кореи сертификация Специалист комплексной стоматологии и врач квалификация"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 2: Имплант исследованиеконсультативный советвон */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Osstem, Point, Dentis
              <br />
              Имплант исследованиеконсультативный советвон
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              Член консультативного совета ведущих имплантологических компаний Кореи 
              <br />
              мы используем новейшие технологии и оборудование
            </p>
          </div>

          {/* Различные сертификаты */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
              alt="Osstem·Point·Dentis Имплант исследованиеконсультативный советвон различные сертификаты"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 3: Новейшее цифровое оборудование */}
        <div className="px-2 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              Полное оснащение новейшим цифровым оборудованием
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D КТ, цифровой сканер, система цифровой навигации и др.
              <br />
              Точное лечение с использованием передового оборудования
            </p>
          </div>

          {/* Скролл оборудования */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
                alt="3D CT сканер оборудование"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
                alt="Лечебный кабинет с цифровым сканером и рентген-монитором"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="Операционная с новейшим оборудованием"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="Лечебный кабинет с оборудованием OSSTEM"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
