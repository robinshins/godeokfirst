import Image from 'next/image';

export default function DoctorSection() {
  const doctor = {
    name: 'ทพ.ลี ดงฮยอน',
    position: 'ทันตแพทย์หัวหน้า',
    image: '/images/goduk_images/이동현원장님.jpeg',
    credentials: [
      'ปริญญาโททันตแพทยศาสตร์',
      'ผู้เชี่ยวชาญทันตกรรมบูรณาการ (รับรองโดยกระทรวงสาธารณสุข)'
    ],
    details: [
      'อาจารย์พิเศษ รพ.ทันตกรรม ม.โชซอน',
      'รางวัลเกียรตินิยม Implant ม.แห่งชาติโซล',
      'หลักสูตรทันตกรรมขั้นสูง ม.แห่งชาติโซล',
      'จบ ร.ร.คยองกี โซล',
      'คลินิกทันตกรรมศิษย์เก่าคยองกี',
      'สมาชิกสมาคมทันตกรรมบูรณาการเกาหลี',
      'ที่ปรึกษาวิจัย Osstem, Point, Dentis Implant',
      'หลักสูตรรักษารากฟัน Pennsylvania Univ.',
      'ATC Implant Advanced Course',
      'KAYA Dental Hospital Prosthetic Course',
      'JPDA Pediatric Dentistry Clinical Training',
      'TMJ Disorder Education Research Course',
      'อดีตผู้อำนวยการ E-Convenient World Dental',
      'อดีตผู้อำนวยการ First-in Dental'
    ]
  };

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#4DC8D8] uppercase tracking-[2.04px] leading-[32px]">
            ทพ.ลี ดงฮยอน ผู้เชี่ยวชาญทันตกรรมบูรณาการ
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Godeok First Dental
            <br />
            ทีมแพทย์ที่ดีที่สุด
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
            alt="ประวัติและใบรับรองทันตแพทย์ Godeok First Dental"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
