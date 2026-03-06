import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'รากเทียม & รากเทียมทั้งปาก',
      subtitle: 'สถิติการผ่าตัดรากเทียมสูงสุดในปูซานนัมกู',
      description: 'ปลอดภัยและสะดวกสบายด้วยการผ่าตัดดิจิทัลไกด์ที่วิเคราะห์ด้วยคอมพิวเตอร์ รับผิดชอบดูแลคุณไปอีก 10 ปี',
      features: [
        'การผ่าตัดดิจิทัลไกด์ที่มีความแม่นยำสูง',
        'การผ่าตัดแบบหลับ (Sleep Dentistry) ด้วยวิธี Sedation',
        'มีฟันชั่วคราวให้ทันทีหลังการผ่าตัด',
        'ผู้อำนวยการเป็นผู้ผ่าตัดด้วยตนเอง',
        'มีอุปกรณ์ดิจิทัลที่ทันสมัยที่สุดในเกาหลี'
      ],
      link: '/th/implant'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'ฟอกสีฟัน & ลามิเนต',
      subtitle: 'มีอุปกรณ์ที่ทันสมัยที่สุด',
      description: 'การฟอกสีฟันที่ปลอดภัยและเห็นผล\nลด 50% เมื่อทำพร้อมขูดหินปูน',
      features: [
        'เห็นผลทันทีหลังการทำเพียงครั้งเดียว',
        'ไม่ทำลายเนื้อฟัน',
        'ราคาที่สมเหตุสมผล',
        'ทำได้ทั้งฟอกสีฟันโดยผู้เชี่ยวชาญและลามิเนต'
      ],
      link: '/th/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'การถอนฟันคุด',
      subtitle: 'ถอนฟันอย่างปลอดภัยและรวดเร็ว',
      description: 'วินิจฉัยอย่างละเอียดด้วย 3D CT\nถอนฟันอย่างปลอดภัยโดยไม่ทำลายเส้นประสาท',
      features: [
        'ใช้ยาชาเพื่อลดความเจ็บปวด',
        'ฟื้นตัวได้รวดเร็ว',
        'การดูแลหลังการรักษาอย่างเคร่งครัด'
      ],
      link: '/th/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'รักษาฟันผุ & รักษารากฟัน',
      subtitle: 'เชี่ยวชาญด้านการอนุรักษ์ฟันธรรมชาติ',
      description: 'เน้นการรักษาเพื่อรักษาฟันไว้แทนการถอน\nรักษาอย่างละเอียดโดยผู้เชี่ยวชาญด้านการอนุรักษ์ฟัน',
      features: [
        'วินิจฉัยละเอียดด้วยกล้องไมโครสโคป',
        'ตรวจพบฟันผุด้วยเครื่อง Qray',
        'รักษารากฟันแบบลดความเจ็บปวด',
        'ครอบคลุมประกัน (ตามเงื่อนไข)'
      ],
      link: '/th/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'รักษาโรคเหงือก & ขูดหินปูน',
      subtitle: 'จุดเริ่มต้นของสุขภาพร่างกายที่ดี',
      description: '80% ของผู้ใหญ่เป็นโรคเหงือก\nดูแลฟันให้แข็งแรงตลอดชีวิตด้วยการจัดการที่สม่ำเสมอ',
      features: [
        'ใช้อุปกรณ์พิเศษ NSK varios 970',
        'การดูแลด้วย Periocline',
        'การรักษาแบบลดความเจ็บปวด',
        'ครอบคลุมประกันปีละ 1 ครั้ง'
      ],
      link: '/th/gum-care'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-8 relative shrink-0 w-40">
            <Image
              src="/icons/Logo_black.svg"
              alt="Medis Dental Clinic"
              width={160}
              height={32}
              className="w-full h-full"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[34px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            สาขาการรักษาเฉพาะทาง
          </h2>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col -mx-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`px-4 ${
                index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'
              }`}
            >
              {/* Card Header - Icon + Title */}
              <div className="relative mb-12 pt-10">
                <div className="flex flex-col gap-4">
                  {/* Icon Box - 80x80 */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[30px] font-bold text-[#292a2f] leading-[1.35] tracking-[-0.72px]">
                      {treatment.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[17px] font-bold text-[#727582] leading-[1.5] tracking-[-0.36px]">
                        {treatment.subtitle}
                      </p>
                      {index === 0 && (
                        <p className="text-[13px] text-[#9a9ca8] leading-[1.5] tracking-[-0.28px]">
                          *อ้างอิงจากการผ่าตัดดิจิทัลไกด์ที่วิเคราะห์ด้วยคอมพิวเตอร์
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Button - 64x64 - Absolute positioned */}
                {treatment.link ? (
                  <Link
                    href={treatment.link}
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="ดูรายละเอียด"
                      width={32}
                      height={32}
                    />
                  </Link>
                ) : (
                  <button
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="ดูรายละเอียด"
                      width={32}
                      height={32}
                    />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-5">
                {/* Description */}
                <p className="text-[18px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line tracking-[-0.48px] w-[343px]">
                  {treatment.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col">
                  {treatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`py-4 ${
                        idx !== treatment.features.length - 1
                          ? 'border-b border-[#e9ebf1]'
                          : ''
                      }`}
                    >
                      <p className="text-[16px] font-bold text-[#5d5f6d] leading-[1.5] tracking-[-0.36px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom padding for card */}
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
