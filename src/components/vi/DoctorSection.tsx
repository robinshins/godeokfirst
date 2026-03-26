import Image from 'next/image';

export default function DoctorSection() {
  const doctor = {
    name: 'Lee Dong-hyun',
    position: 'Bác sĩ trưởng',
    image: '/images/goduk_images/동현원장님.jpeg',
    credentials: [
      'Thạc sĩ Nha khoa',
      'Chuyên gia Nha khoa Tổng hợp (Bộ Y tế Phúc lợi chứng nhận)'
    ],
    details: [
      'Giáo sư thỉnh giảng BV Nha khoa Đại học Chosun',
      'Hoàn thành xuất sắc khóa Implant, Sau đại học Nha khoa ĐH Seoul',
      'Hoàn thành chương trình Nha khoa nâng cao tại Đại học Seoul',
      'Tốt nghiệp Trường THPT Gyeonggi, Seoul',
      'Nha khoa cựu sinh viên Gyeonggi',
      'Hội viên chính thức Hội Nha khoa Tổng hợp Hàn Quốc',
      'Cố vấn nghiên cứu Implant Osstem, Point, Dentis',
      'Hoàn thành khóa Điều trị tủy tại ĐH Pennsylvania',
      'Hoàn thành khóa ATC Implant Advanced',
      'Hoàn thành Prosthetic Course tại BV Nha khoa KAYA',
      'Hoàn thành khóa Nha khoa Nhi JPDA',
      'Hoàn thành khóa Nghiên cứu Rối loạn Khớp thái dương hàm',
      'Cựu) Bác sĩ trưởng E-Pyeonhan Sesang Dental',
      'Cựu) Bác sĩ trưởng First In Dental'
    ]
  };

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(화트).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#4DC8D8] uppercase tracking-[2.04px] leading-[32px]">
            Chuyên gia Nha khoa Tổng hợp Bác sĩ Lee Dong-hyun
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Godeok First Dental
            <br />
            Đội ngũ bác sĩ hàng đầu
          </h2>
        </div>

        {/* Doctor Card */}
        <div className="flex flex-col gap-8 mt-[60px]">
          {/* Doctor Image */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-lg h-[350px] relative">
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

        {/* Credentials Photo */}
        <div className="mt-12 rounded-[20px] overflow-hidden shadow-lg relative h-[250px]">
          <Image
            src="/images/goduk_images/원장력 등 걸려있사진.jpg"
            alt="Lý lịch và chứng nhận Bác sĩ trưởng Godeok First Dental"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
