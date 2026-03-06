import Image from 'next/image';

export default function DoctorSection() {
  const doctor = {
    name: '이동현',
    position: '대표원장',
    image: '/images/goduk_images/이동현원장님.jpeg',
    credentials: [
      '치의학 석사',
      '통합치의학과 전문의(보건복지부 인증)'
    ],
    details: [
      '조선대학교 치과병원 외래교수',
      '서울대학교 치의학대학원 임플란트 치의학 우수상 수료',
      '서울대학교 치의학대학원 고급치의학 수료',
      '서울 경기고등학교 졸업',
      '경기고등학교 동문치과',
      '대한통합치의학 학회 정회원',
      '오스템, 포인트, 덴티스 임플란트 연구자문위원',
      'Pennsylvania univ. 근관치료과정 수료',
      'ATC Implant Advanced 과정 수료',
      'KAYA 치과병원 Prosthetic Course 수료',
      'JPDA 소아치과 임상연수회 수료',
      '턱관절장애교육연구회 수료',
      '전) 이편한세상치과 원장',
      '전) 퍼스트인치과 원장'
    ]
  };

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="h-8 relative shrink-0">
            <Image
              src="/images/goduk_images/고덕퍼스트치과_Logo_white.svg"
              alt="고덕퍼스트치과"
              width={180}
              height={32}
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#4DC8D8] uppercase tracking-[2.04px] leading-[32px]">
            통합치의학전문의 이동현 원장
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            고덕퍼스트치과
            <br />
            최고의 의료진
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
            src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
            alt="고덕퍼스트치과 원장 이력 및 인증"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
