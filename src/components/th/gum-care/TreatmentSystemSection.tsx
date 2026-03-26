'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'อุปกรณ์พิเศษ NSK varios 970',
      description: 'เครื่องขูดหินปูนอัลตราซาวด์รุ่นล่าสุดจาก NSK ญี่ปุ่น กำจัดแบคทีเรียลึกในเหงือกอย่างแม่นยำ',
      features: [
        { label: 'iPiezo Engine', text: 'ปรับความถี่อัตโนมัติเพื่อเอาต์พุตที่มั่นคง' },
        { label: 'หัวเข็มแม่นยำสูง', text: 'เข้าถึงถุงปริทันต์ลึกได้' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'รักษาด้วยยาปฏิชีวนะเพอริโอคลีน',
      description: 'ยาปฏิชีวนะเฉพาะที่ชนิดไมโนไซคลิน ฉีดเข้าเหงือกลึกโดยตรงเพื่อรักษา',
      features: [
        { label: 'พิสูจน์ทางคลินิก', text: 'ผ่านการทดลองทางคลินิกจากทีมวิจัยทั้งในและต่างประเทศ' },
        { label: 'ออกฤทธิ์ 1 สัปดาห์', text: 'ฉีดครั้งเดียว ยาออกฤทธิ์นาน 1 สัปดาห์' },
        { label: 'ลดแบคทีเรีย', text: 'Red Complex แบคทีเรีย 87.5% → 12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: 'ระบบลดความเจ็บปวด 4 ขั้นตอน',
      description: [
        '"ไม่คิดว่าทำฟันจะสบายขนาดนี้"',
        'ระบบตัดความเจ็บปวดเป็นขั้นที่ผู้ป่วยหลายคนทึ่ง'
      ],
      features: [
        { label: 'บ้วนยาชา', text: 'บ้วนน้ำยาชาทั่วปากเพื่อลดความรู้สึกขั้นแรก' },
        { label: 'ทายาชา', text: 'ทาครีมยาชาที่จุดฉีดเพื่อตัดความเจ็บขั้นที่สอง' },
        { label: 'เครื่องฉีดยาชาไฟฟ้า', text: 'คอมพิวเตอร์ควบคุมความเร็วสม่ำเสมอ' },
        { label: 'เครื่องชาเส้นประสาท', text: 'ตัดความเจ็บปวดสมบูรณ์แม้จุดลึก' }
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
            <p>ของ Godeok First Dental</p>
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
