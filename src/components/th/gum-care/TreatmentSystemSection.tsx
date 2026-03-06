'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'อุปกรณ์พิเศษ NSK varios 970',
      description: 'เครื่องขูดหินปูนอัลตร้าโซนิครุ่นล่าสุดจาก NSK ญี่ปุ่น ขจัดเชื้อโรคลึกในเหงือกอย่างแม่นยำ',
      features: [
        { label: 'เครื่องยนต์ iPiezo', text: 'ปรับความถี่อัตโนมัติ รับประกันกำลังส่งออกที่เสถียร' },
        { label: 'หัวความละเอียดสูง', text: 'เข้าถึงร่องเหงือกลึกได้' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'การรักษาด้วยยาปฏิชีวนะเปริโอคลิน',
      description: 'ยาปฏิชีวนะเฉพาะที่ที่มีส่วนผสมไมโนไซคลิน ฉีดเข้าลึกในเหงือกเพื่อการรักษาโดยตรง',
      features: [
        { label: 'ผ่านการทดสอบทางคลินิก', text: 'ประสิทธิภาพได้รับการรับรองจากการทดลองทางคลินิกหลายทีมวิจัยทั้งในและต่างประเทศ' },
        { label: 'ออกฤทธิ์ 1 สัปดาห์', text: 'ฉีดครั้งเดียว ยาออกฤทธิ์นาน 1 สัปดาห์' },
        { label: 'ลดเชื้อแบคทีเรีย', text: 'แบคทีเรีย Red Complex ลดจาก 87.5% เหลือ 12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: 'ระบบบรรเทาความเจ็บปวด 4 ขั้นตอน',
      description: [
        '"การรักษาฟันสบายขนาดนี้ได้หรือ"',
        'ระบบบล็อกความเจ็บปวดทีละขั้นตอนที่คนไข้หลายคนประหลาดใจ'
      ],
      features: [
        { label: 'ยาชากลั้วปาก', text: 'กลั้วปากด้วยยาชา ทำให้ชาทั่วปากเป็นขั้นแรก' },
        { label: 'ยาชาทาเฉพาะที่', text: 'ทายาชาบริเวณที่จะฉีดเป็นขั้นที่ 2' },
        { label: 'เครื่องฉีดยาชาไฟฟ้าลดปวด', text: 'ควบคุมด้วยคอมพิวเตอร์ ฉีดด้วยความเร็วคงที่ลดความเจ็บปวด' },
        { label: 'เครื่องฉีดยาชาเส้นประสาท', text: 'บล็อกความเจ็บปวดอย่างสมบูรณ์แม้บริเวณลึก' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">ระบบรักษาเหงือก</p>
            <p>เฉพาะของคยองซอง เมดิส</p>
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
              <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start p-6 w-full">
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
