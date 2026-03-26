import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Implant',
      subtitle: 'Raqamli navigatsiyali implant operatsiyasi',
      description: 'Kompyuter tahlili yordamida murakkab raqamli navigatsiya operatsiyasi bilan xavfsiz va qulay, oxirigacha javobgarlik.',
      features: [
        'Murakkab raqamli navigatsiya operatsiyasi',
        'Sedatsiya yordamida uyqu narkozi operatsiyasi',
        'Operatsiyadan keyin darhol vaqtincha tish',
        'Bosh shifokor shaxsan operatsiya qiladi',
        'Raqamli jihozlar toʼliq jihozlangan'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Protez / Toʼliq implant',
      subtitle: 'Shaxsiy aniq protez',
      description: 'Qulay va tabiiy protezdan\ntoʼliq implantgacha shaxsiy loyiha',
      features: [
        'Aniq shaxsiy protez tayyorlash',
        'Toʼliq implant (All-on-4/6)',
        'Implant protez (overdenture)',
        'Sugʼurta qoʼllaniladigan protez'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Kariyes davolash & Kanal davolash',
      subtitle: 'Tabiiy tishni saqlash mutaxassisi',
      description: 'Tish olish oʼrniga tishni saqlash davolashi\nKompleks stomatologiya mutaxassisining aniq davolashi',
      features: [
        'Aniq kariyes diagnostikasi',
        'Ogʼriqsiz kanal davolash',
        'Tabiiy tishni saqlash',
        'Sugʼurta qoʼllaniladi'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Aql tishi olish',
      subtitle: 'Xavfsiz va tez tish olish',
      description: '3D KT aniq diagnostika bilan\nnerv shikastlanmasdan xavfsiz tish olish',
      features: [
        'Ogʼriqni kamaytiruvchi narkoz',
        'Tez tiklanish',
        'Toʼliq keyingi parvarish'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Milk davolash & Tozalash',
      subtitle: 'Umumiy sogʼliqning boshlanishi',
      description: 'Kattalarning 80% aziyat chekadigan milk kasalligi\nMuntazam parvarish bilan umr boʼyi sogʼlom tishlar',
      features: [
        'Maxsus jihozlar bilan davolash',
        'Perioklin parvarish',
        'Ogʼriqsiz davolash',
        'Yiliga 1 marta sugʼurta qoʼllaniladi'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Jagʼ boʼgʼimi davolash',
      subtitle: 'Jagʼ boʼgʼimi ogʼrigʼi · ogʼiz ochilmasligi mutaxassisi',
      description: 'Jagʼingizdan tovush chiqyaptimi yoki ogʼriyaptimi?\nAniq diagnostikadan keyin shaxsiy davolash',
      features: [
        'Jagʼ boʼgʼimi aniq diagnostikasi',
        'Tishlov barqarorlashtiruvchi moslamasi (splint)',
        'Fizioterapiya · Dori davolash',
        'Kompleks stomatologiya mutaxassisi shaxsan davolaydi'
      ],
      link: '/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Tish oqartirish',
      subtitle: 'Eng yuqori sifatli jihozlar',
      description: 'Xavfsiz va samarali oqartirish\nTozalash bilan birga chegirma',
      features: [
        '1 marta muolaja bilan darhol natija',
        'Tishga zarar yoʼq',
        'Qulay narx',
        'Osstem Beautis tizimi'
      ],
      link: '/whitening'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Mutaxassis davolash sohalari
          </h2>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col -mx-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`px-4 ${
                index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'
              }`}
            >
              {/* Card Header - Icon + Title */}
              <div className="relative mb-12 pt-10">
                <div className="flex flex-col gap-4">
                  {/* Icon Box - 80x80 */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="h-20 w-auto object-contain -mt-[18px]"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[33px] font-bold text-[#292a2f] leading-[1.35] tracking-[-0.72px]">
                      {treatment.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[17px] font-bold text-[#727582] leading-[1.5] tracking-[-0.36px]">
                        {treatment.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow Button - 64x64 - Absolute positioned */}
                {treatment.link ? (
                  <Link
                    href={treatment.link}
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Batafsil koʼrish"
                      width={32}
                      height={84}
                    />
                  </Link>
                ) : (
                  <button
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Batafsil koʼrish"
                      width={32}
                      height={84}
                    />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-5">
                {/* Description */}
                <p className="text-[20px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line tracking-[-0.48px] w-[343px]">
                  {treatment.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col">
                  {treatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`py-4 ${
                        idx !== treatment.features.length - 1
                          ? 'border-b border-[#e9ebf1]'
                          : ''
                      }`}
                    >
                      <p className="text-[16px] font-bold text-[#5d5f6d] leading-[1.5] tracking-[-0.36px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom padding for card */}
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
