'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 maxsus jihoz',
      description: 'Yaponiya NSK kompaniyasining eng yangi ultratovush skaleri bilan milk chuqurligidagi bakteriyalarni aniq olib tashlaydi',
      features: [
        { label: 'iPiezo dvigatel', text: 'Avtomatik chastota sozlash bilan barqaror quvvat' },
        { label: 'Oʼta aniq uchi', text: 'Parodont choʼntagining chuqur joyigacha yetib boradi' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Perioklin antibiotik malhami davolash',
      description: 'Minosiklin tarkibli mahalliy antibiotik bilan milk chuqurligiga toʼgʼridan-toʼgʼri yuborib davolash',
      features: [
        { label: 'Klinik tasdiqlangan', text: 'Ichki va xalqaro tadqiqot guruhlari klinik sinovi bilan samaradorligi isbotlangan' },
        { label: 'Bir hafta davom etadi', text: 'Bir marta yuborilganda dori taʼsiri bir hafta davomida saqlanadi' },
        { label: 'Bakteriya kamayishi', text: 'Red Complex bakteriyalari 87.5% → 12.5% ga kamaydi' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4 bosqichli ogʼriq kamaytirish tizimi',
      description: [
        '"Stomatologik davolash bu qadar qulay boʼlishi mumkin ekan"',
        'Koʼplab bemorlar hayratga tushadigan bosqichma-bosqich ogʼriq bloklash tizimi'
      ],
      features: [
        { label: 'Chayqash narkozi', text: 'Ogʼiz boʼshligʼini narkoz suyuqligi bilan chayqab 1-bosqich sezgirlikni kamaytirish' },
        { label: 'Sirt narkozi', text: 'Igna joyiga narkoz malhami surish bilan 2-bosqich bloklash' },
        { label: 'Ogʼriqsiz elektron narkoz', text: 'Kompyuter boshqaruvi bilan bir tekis tezlikda ogʼriqsiz yuborish' },
        { label: 'Nerv kanali narkozi', text: 'Chuqur joylargacha mukammal ogʼriq bloklash' }
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
            <p>Milk davolash tizimi</p>
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
