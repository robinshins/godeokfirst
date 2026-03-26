import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'รากฟันเทียม',
      subtitle: 'การผ่าตัดรากฟันเทียมแบบดิจิทัลไกด์',
      description: 'ระดับความยากสูงผ่านการวิเคราะห์คอมพิวเตอร์ การผ่าตัดแบบดิจิทัลไกด์อย่างปลอดภัยและสะดวกสบาย, รับผิดชอบจนจบ.',
      features: [
        'ระดับความยากสูง การผ่าตัดแบบดิจิทัลไกด์',
        'การผ่าตัดดมยาสลบผ่านการระงับความรู้สึก',
        'ให้ฟันชั่วคราวทันทีหลังผ่าตัด',
        'ทันตแพทย์หัวหน้าผ่าตัดโดยตรง',
        'ครบครันอุปกรณ์ดิจิทัล'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'ฟันปลอม / รากฟันเทียมทั้งปาก',
      subtitle: 'ครอบฟันที่แม่นยำตามสั่ง',
      description: 'ตั้งแต่ฟันปลอมสะดวกสบายเป็นธรรมชาติ\nจนถึงรากฟันเทียมทั้งปาก ออกแบบเฉพาะบุคคล',
      features: [
        'ผลิตฟันปลอมแม่นยำตามสั่ง',
        'รากฟันเทียมทั้งปาก (All-on-4/6)',
        'ฟันปลอมบนรากฟันเทียม (Overdenture)',
        'ฟันปลอมใช้ประกันได้'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'อุดฟัน & รักษารากฟัน',
      subtitle: 'เชี่ยวชาญการอนุรักษ์ฟันธรรมชาติ',
      description: 'รักษาแทนการถอน\nการรักษาอย่างแม่นยำของผู้เชี่ยวชาญทันตกรรมบูรณาการ',
      features: [
        'วินิจฉัยฟันผุอย่างแม่นยำ',
        'ลดปวด รักษารากฟัน',
        'อนุรักษ์ฟันธรรมชาติ',
        'ใช้ประกันได้'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'ถอนฟันคุด',
      subtitle: 'ถอนฟันอย่างปลอดภัยและรวดเร็ว',
      description: 'วินิจฉัยแม่นยำด้วย 3D CT\nถอนฟันอย่างปลอดภัยไม่ทำลายเส้นประสาท',
      features: [
        'ดมยาสลบลดปวด',
        'ฟื้นตัวเร็ว',
        'การดูแลหลังการรักษาอย่างละเอียด'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'รักษาเหงือก & ขูดหินปูน',
      subtitle: 'จุดเริ่มต้นสุขภาพทั้งร่างกาย',
      description: '80% ของผู้ใหญ่เป็นโรคเหงือก\nฟันแข็งแรงตลอดชีวิตด้วยการดูแลสม่ำเสมอ',
      features: [
        'การรักษาด้วยอุปกรณ์พิเศษ',
        'การจัดการ Perioclin',
        'การรักษาลดปวด',
        'ใช้ประกันได้ปีละ 1 ครั้ง'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'รักษาข้อต่อขากรรไกร',
      subtitle: 'เชี่ยวชาญปวดข้อต่อขากรรไกร · อาการอ้าปากลำบาก',
      description: 'มีเสียงจากขากรรไกรหรือเจ็บไหม?\nวินิจฉัยแม่นยำแล้วรักษาเฉพาะบุคคล',
      features: [
        'ข้อต่อขากรรไกร วินิจฉัยแม่นยำ',
        'เฝือกสบฟัน (Splint)',
        'กายภาพบำบัด · การรักษาด้วยยา',
        'ผู้เชี่ยวชาญทันตกรรมบูรณาการตรวจรักษาโดยตรง'
      ],
      link: '/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'ฟอกสีฟัน',
      subtitle: 'มีอุปกรณ์ระดับพรีเมียม',
      description: 'ฟอกสีฟันอย่างปลอดภัยและมีประสิทธิภาพ\nขูดหินปูนลดราคาเมื่อทำร่วมกัน',
      features: [
        'เห็นผลทันทีในครั้งเดียว',
        'ไม่ทำลายฟัน',
        'ราคาสมเหตุสมผล',
        'ระบบ Osstem Beautis'
      ],
      link: '/whitening'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            สาขาเฉพาะทาง
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
                      className="h-20 w-auto object-contain -mt-[18px]"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[33px] font-bold text-[#292a2f] leading-[1.35] tracking-[-0.72px]">
                      {treatment.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[17px] font-bold text-[#727582] leading-[1.5] tracking-[-0.36px]">
                        {treatment.subtitle}
                      </p>
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
                      height={84}
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
                      height={84}
                    />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-5">
                {/* Description */}
                <p className="text-[20px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line tracking-[-0.48px] w-[343px]">
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
