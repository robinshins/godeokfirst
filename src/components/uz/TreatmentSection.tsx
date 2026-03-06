import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      title: 'To\'liq implant va Implantatsiya',
      subtitle: 'Pusan Nam-gu hududida eng ko\'p implant o\'rnatilgan',
      description: 'Kompyuter tahlili asosida raqamli navigatsiya operatsiyasi bilan 10 yillik kafolatlangan natija.',
      features: [
        'Yuqori aniqlikdagi raqamli operatsiya',
        'Sedatsiya (uyqu holatida) bilan davolash',
        'Operatsiyadan so\'ng darhol vaqtinchalik tish',
        'Bosh shifokorning shaxsan ishtiroki',
        'Mamlakatdagi eng yirik raqamli uskunalar'
      ],
      link: '/uz/implant'
    },
    {
      icon: '/icons/whitening.svg',
      title: 'Tish oqartirish va Laminat',
      subtitle: 'Eng yuqori sifatli uskunalar',
      description: 'Xavfsiz va samarali tish oqartirish.\nTish tozalash bilan birga 50% chegirma.',
      features: [
        'Bir marta davolanishda darhol natija',
        'Tishlarga zarar yetkazmaydi',
        'Hamyonbop narxlar',
        'Professional oqartirish va laminatlash'
      ],
      link: '/uz/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      title: 'Donolik tishini olish',
      subtitle: 'Xavfsiz va tezkor jarayon',
      description: '3D CT orqali aniq tashxis.\nAsab tolalariga zarar yetkazmasdan xavfsiz olish.',
      features: [
        'Og\'riqsiz anesteziya',
        'Tez tiklanish jarayoni',
        'Operatsiyadan keyingi maxsus parvarish'
      ],
      link: '/uz/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      title: 'Karies va Kanal davolash',
      subtitle: 'Tabiiy tishlarni saqlash mutaxassisi',
      description: 'Tishni sug\'urishdan ko\'ra uni saqlash.\nKonservativ davolash bo\'yicha mutaxassisdan aniq muolaja.',
      features: [
        'Mikroskop yordamida aniq tashxis',
        'Q-ray bilan kariesni aniqlash',
        'Og\'riqsiz kanal davolash',
        'Sug\'urta bilan qoplanadi'
      ],
      link: '/uz/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      title: 'Milk davolash va Tish tozalash',
      subtitle: 'Sog\'lom tana asosi',
      description: 'Kattalarning 80% ida milk kasalliklari uchraydi.\nDoimiy parvarish bilan umrbod sog\'lom tishlar.',
      features: [
        'NSK varios 970 maxsus uskunasi',
        'Perioclean bilan parvarish',
        'Og\'riqsiz davolash usullari',
        'Yiliga bir marta sug\'urta bilan'
      ],
      link: '/uz/gum-care'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-8 relative shrink-0 w-40">
            <Image
              src="/icons/Logo_black.svg"
              alt="Kyungsung Medis Dental Clinic"
              width={160}
              height={32}
              className="w-full h-full"
            />
          </div>
          <h2 className="font-bold leading-[1.35] text-[36px] text-black text-center tracking-[-0.72px] w-full">
            Mutaxassislik yo'nalishlari
          </h2>
        </div>

        <div className="flex flex-col -mx-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`px-4 ${index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'}`}
            >
              <div className="relative mb-12 pt-10">
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[33px] font-bold text-[#292a2f] leading-[1.35]">
                      {treatment.title}
                    </h3>
                    <p className="text-[17px] font-bold text-[#727582]">
                      {treatment.subtitle}
                    </p>
                  </div>
                </div>

                <Link
                  href={treatment.link}
                  className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center shadow-lg"
                >
                  <Image
                    src="/icons/arrow-right.svg"
                    alt="Batafsil"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-[20px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line">
                  {treatment.description}
                </p>
                <div className="flex flex-col">
                  {treatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`py-4 ${idx !== treatment.features.length - 1 ? 'border-b border-[#e9ebf1]' : ''}`}
                    >
                      <p className="text-[16px] font-bold text-[#5d5f6d]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

