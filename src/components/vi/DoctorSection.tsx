import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: 'Kim Dong Seok',
      position: 'Bác sĩ trưởng',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'Thạc sĩ Nha khoa Tổng hợp',
        'Chuyên gia Nha khoa Tổng hợp được Bộ Y tế chứng nhận'
      ],
      details: [
        'Hoàn thành khóa Nha khoa Nâng cao tại Đại học Seoul',
        'Hoàn thành khóa Nha khoa Implant tại Đại học Seoul',
        'Giám đốc Hiệp hội Implant Nha khoa Thế giới',
        'Giám đốc Hiệp hội Implant Hàm mặt Hàn Quốc',
        'Thành viên Hiệp hội Nghiên cứu Phục hình, ĐH Texas A&M',
        'Cố vấn nghiên cứu Osstem Implant',
        'Cố vấn nghiên cứu Neo Implant',
        'Cố vấn nghiên cứu Hiossen Implant',
        'Chứng nhận Hiệp hội Nha khoa Thẩm mỹ Hàn Quốc',
        'Hội viên chính thức Hiệp hội Nha khoa Tổng hợp Hàn Quốc',
        'Hội viên chính thức Hiệp hội Nội nha Hàn Quốc',
        'Hoàn thành khóa điều trị khớp thái dương hàm được HIRA chứng nhận'
      ]
    },
    {
      name: 'Bae In Hye',
      position: 'Bác sĩ Nha khoa Bảo tồn',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'Giấy phép kép: Nha sĩ và Dược sĩ',
        'Chuyên gia Nha khoa Bảo tồn được Bộ Y tế chứng nhận'
      ],
      details: [
        'Hoàn thành nội trú Khoa Bảo tồn tại BV Nha khoa ĐH Busan',
        'Hoàn thành Tiến sĩ Nha khoa Bảo tồn tại ĐH Busan',
        'Thạc sĩ Nha khoa, Tốt nghiệp Thủ khoa',
        'Hội viên chính thức Hiệp hội Bảo tồn Nha khoa',
        'Hội viên chính thức Hiệp hội Nội nha Hàn Quốc',
        'Hội viên chính thức Hiệp hội Nha khoa Dán Hàn Quốc',
        'Thành viên Hiệp hội Vật liệu Nha khoa Hàn Quốc',
        'Thành viên Hiệp hội Nha khoa Thẩm mỹ Hàn Quốc',
        'Cựu bác sĩ trưởng Nha khoa Good Smile',
        'Cựu bác sĩ trưởng Nha khoa Plant'
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
            Hợp tác giữa chuyên gia bảo tồn và chuyên gia nha khoa tổng hợp
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Đội ngũ bác sĩ
            <br />
            hàng đầu Kyungsung Medis
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
