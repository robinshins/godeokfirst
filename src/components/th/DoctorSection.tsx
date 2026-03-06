import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: 'คิม ดงซอก',
      position: 'ผู้อำนวยการ',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'ปริญญาโทด้านทันตกรรมบูรณาการ',
        'ผู้เชี่ยวชาญด้านทันตกรรมบูรณาการ รับรองโดยกระทรวงสาธารณสุขและสวัสดิการ'
      ],
      details: [
        'จบหลักสูตรทันตกรรมขั้นสูง มหาวิทยาลัยโซล',
        'จบหลักสูตรรากเทียม มหาวิทยาลัยโซล',
        'กรรมการสมาคมรากเทียมช่องปากโลก',
        'กรรมการสมาคมรากเทียมช่องปากและแม็กซิลโลเฟเชียลแห่งเกาหลี',
        'สมาชิกสมาคมวิจัยฟันปลอม วิทยาลัยทันตแพทย์ Texas A&M สหรัฐอเมริกา',
        'ที่ปรึกษาการวิจัย Osstem Implant',
        'ที่ปรึกษาการวิจัย Neo Implant',
        'ที่ปรึกษาการวิจัย Highnis Implant',
        'ผู้ได้รับรองจากสมาคมทันตกรรมเพื่อความงามแห่งเกาหลี',
        'สมาชิกสามัญสมาคมทันตกรรมบูรณาการแห่งเกาหลี',
        'สมาชิกสามัญสมาคมรักษารากฟันแห่งเกาหลี',
        'จบหลักสูตรการรักษาข้อต่อขากรรไกร รับรองโดยสำนักงานประกันสุขภาพ'
      ]
    },
    {
      name: 'แบ อินฮเย',
      position: 'ผู้อำนวยการฝ่ายอนุรักษ์ฟัน',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'ได้รับใบอนุญาตทั้งทันตแพทย์และเภสัชกร',
        'ผู้เชี่ยวชาญด้านการอนุรักษ์ฟัน รับรองโดยกระทรวงสาธารณสุขและสวัสดิการ'
      ],
      details: [
        'จบหลักสูตรแพทย์ประจำบ้านฝ่ายอนุรักษ์ฟัน โรงพยาบาลทันตกรรมมหาวิทยาลัยปูซาน',
        'ปริญญาเอกด้านการอนุรักษ์ฟัน มหาวิทยาลัยปูซาน',
        'ปริญญาโทด้านทันตกรรม เกียรตินิยมอันดับหนึ่ง',
        'สมาชิกสามัญสมาคมการอนุรักษ์ฟันแห่งเกาหลี',
        'สมาชิกสามัญสมาคมรักษารากฟันแห่งเกาหลี',
        'สมาชิกสามัญสมาคมทันตกรรมกาวเกาหลี (Korean Academy of Adhesive Dentistry)',
        'สมาชิกสมาคมวัสดุทันตกรรมแห่งเกาหลี',
        'สมาชิกสมาคมทันตกรรมเพื่อความงามแห่งเกาหลี',
        'อดีตผู้อำนวยการ Good Smile Dental Clinic',
        'อดีตผู้อำนวยการ Plant Dental Clinic'
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
              alt="Medis Dental Clinic"
              width={168}
              height={24}
              className="object-contain"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#64b7ff] uppercase tracking-[2.04px] leading-[32px]">
            การทำงานร่วมกันระหว่างผู้เชี่ยวชาญด้านการอนุรักษ์ฟันและทันตกรรมบูรณาการ
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            Medis Dental Clinic
            <br />
            ทีมแพทย์ที่ดีที่สุด
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
