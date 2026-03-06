import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: 'Kim Dong-seok',
      position: 'Bosh shifokor',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Integratsiyalashgan stomatologiya magistri',
        'Sog\'liqni saqlash vazirligi tomonidan sertifikatlangan integratsiyalashgan stomatologiya mutaxassisi'
      ],
      details: [
        'Seul Milliy Universiteti Stomatologiya oliy maktabi ilg\'or stomatologiya kursi bitiruvchisi',
        'Seul Milliy Universiteti Stomatologiya oliy maktabi implantatsiya stomatologiyasi kursi bitiruvchisi',
        'Xalqaro og\'iz implantatsiyasi jamiyati direktori',
        'Koreya og\'iz va yuz implantatsiyasi assotsiatsiyasi direktori',
        'AQSh Texas A&M Stomatologiya maktabi protezlash tadqiqot jamiyati a\'zosi',
        'Osstem Implant tadqiqot maslahatchisi',
        'Neo Implant tadqiqot maslahatchisi',
        'Highness Implant tadqiqot maslahatchisi',
        'Koreya estetik stomatologiya jamiyati sertifikatlangan mutaxassisi',
        'Koreya integratsiyalashgan stomatologiya jamiyati a\'zosi',
        'Koreya stomatologik endodontiya jamiyati a\'zosi',
        'HIRA sertifikatlangan jag\' bo\'g\'imi davolash kursi bitiruvchisi'
      ]
    },
    {
      name: 'Bae In-hye',
      position: 'Konservativ stomatologiya bo\'limi mudiri',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'Stomatolog va farmatsevt ikkilamchi litsenziya',
        'Sog\'liqni saqlash vazirligi tomonidan sertifikatlangan konservativ stomatologiya mutaxassisi'
      ],
      details: [
        'Pusan Milliy Universiteti stomatologiya kasalxonasi konservativ stomatologiya rezidenturasi bitiruvchisi',
        'Pusan Milliy Universiteti Stomatologiya oliy maktabi doktorantura kursi bitiruvchisi (konservativ stomatologiya)',
        'Stomatologiya oliy maktabi stomatologiya magistri, a\'lochilar bilan bitirgan',
        'Koreya konservativ stomatologiya jamiyati a\'zosi',
        'Koreya stomatologik endodontiya jamiyati a\'zosi',
        'Koreya yopishqoq stomatologiya jamiyati a\'zosi',
        'Koreya stomatologik materiallar jamiyati a\'zosi',
        'Koreya estetik stomatologiya jamiyati a\'zosi',
        'Sobiq Good Smile Dental klinikasi mudiri',
        'Sobiq Plant Dental klinikasi mudiri'
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
              alt="Medis Dental"
              width={168}
              height={24}
              className="object-contain"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#64b7ff] uppercase tracking-[2.04px] leading-[32px]">
            Konservativ va integratsiyalashgan stomatologiya mutaxassislari hamkorligi
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Kyungsung Medis Dental
            <br />
            Eng yaxshi shifokorlar
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
