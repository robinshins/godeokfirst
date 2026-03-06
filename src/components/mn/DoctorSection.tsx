import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: 'Ким Дунг Сог',
      position: 'Ерөнхий эмч',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Нэгдсэн шүдний эмчилгээний магистр',
        'Эрүүл мэнд, халамжийн яамнаас баталгаажсан нэгдсэн шүдний эмчилгээний мэргэжилтэн'
      ],
      details: [
        'Сөүлийн Үндэсний Их Сургуулийн Шүдний дээд сургуулийн дээд шатны курс төгссөн',
        'Сөүлийн Үндэсний Их Сургуулийн Шүдний дээд сургуулийн имплантын курс төгссөн',
        'Дэлхийн эрүү нүүрний имплантын холбооны (ICOI) гишүүн',
        'Солонгосын эрүү нүүрний имплантын холбооны гишүүн',
        'Техасын их сургуулийн шүдний протезын холбооны гишүүн',
        'О스템 имплантын зөвлөх эмч',
        'Дижитал гайд хагалгааны 1,500 гаруй тохиолдол'
      ]
    }
  ];

  return (
    <div id="doctor" className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-[32px] font-bold text-[#111827] leading-[1.3] tracking-[-0.64px]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              0 удаагийн давтан хагалгааны амжилт<br />
              Мэргэжлийн эмч нарын баг
            </h2>
            <p className="text-base text-[#4b5563] leading-[1.6] tracking-[-0.32px]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Кёнсон Мэдиш шүдний эмнэлэг нь өвчтөн бүрт<br />
              сэтгэл гарган үнэн зөв эмчилгээг амлаж байна.
            </p>
          </div>

          {/* Doctors List */}
          <div className="flex flex-col gap-16">
            {doctors.map((doctor, index) => (
              <div key={index} className="flex flex-col gap-8">
                {/* Doctor Image */}
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-[#f3f4f6]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Doctor Info */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#006aff] font-bold text-lg">{doctor.position}</p>
                    <h3 className="text-[36px] font-extrabold text-[#111827]">{doctor.name}</h3>
                  </div>

                  {/* Credentials */}
                  <div className="flex flex-col gap-3">
                    {doctor.credentials.map((cred, idx) => (
                      <div key={idx} className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#006aff] mt-2.5 shrink-0" />
                        <p className="text-[17px] font-bold text-[#374151] leading-[1.5]">{cred}</p>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-[#e5e7eb] w-full" />

                  {/* Details */}
                  <div className="flex flex-col gap-2">
                    {doctor.details.map((detail, idx) => (
                      <p key={idx} className="text-[15px] text-[#6b7280] leading-[1.6] tracking-[-0.3px]">
                        • {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

