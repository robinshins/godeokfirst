import Image from 'next/image';

export default function WhyBestSection() {
  const seminars = [
    { image: '/images/seminar-3.png', title: 'การอบรมทันตแพทย์เรื่องรากเทียม' },
    { image: '/images/seminar-1.png', title: 'การบรรยายพิเศษสมาคมทันตแพทย์ปูซาน' },
    { image: '/images/seminar-4.png', title: 'หลักสูตรผู้เชี่ยวชาญรากเทียมดิจิทัล' },
    { image: '/images/seminar/digital-prosthetics-lecture.jpg', title: 'การบรรยายฟันปลอมดิจิทัลทางคลินิก' },
    { image: '/images/seminar/megagen-digital-scan-seminar.jpg', title: 'สัมมนาสแกนดิจิทัล Megagen' },
    { image: '/images/seminar/osstem-digital-guide-surgery-lecture.jpg', title: 'การบรรยายการผ่าตัดด้วยไกด์ดิจิทัล Osstem' }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="w-[167.981px] h-[24px] relative">
              <Image
                src="/icons/Logo_black.svg"
                alt="Medis Dental Clinic"
                width={148}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            ทำไม Kyungsung Medis
            <br />
            ถึงเป็นที่สุดในประเทศ
          </h2>
        </div>

        {/* Reason 1: โรงพยาบาลที่ได้รับการแต่งตั้งอย่างเป็นทางการ */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              โรงพยาบาลที่ได้รับการแต่งตั้ง
              <br />
              จากมหาวิทยาลัยและสถาบันชั้นนำ
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              สถานพยาบาลพันธมิตรที่ได้รับการคัดเลือกจากมหาวิทยาลัยและสถาบันที่เชื่อถือได้
            </p>
          </div>

          {/* Partner Institutions */}
          <div className="flex flex-col gap-3 w-full">
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/busan-univ-hospital.svg"
                alt="โรงพยาบาลมหาวิทยาลัยปูซาน"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongguk-cm.jpg"
                alt="Dongguk CM"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/kyungsung-univ.png"
                alt="มหาวิทยาลัย Kyungsung"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongmyung-univ.svg"
                alt="มหาวิทยาลัย Tongmyong"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/pukyong-univ.png"
                alt="มหาวิทยาลัยแห่งชาติปูเกียง"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>
        </div>

        {/* Reason 2: โรงพยาบาลรากเทียมที่ได้รับการรับรอง */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Megagen/Osstem/Neo
              <br />
              โรงพยาบาลรากเทียมที่ได้รับการรับรอง
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              ไม่เพียงแต่ได้รับการแต่งตั้งเป็นโรงพยาบาลผ่าตัดดีเด่น
              <br />
              แต่ยังทำงานวิจัยร่วมในฐานะที่ปรึกษาทางคลินิก
            </p>
          </div>

          {/* Scrolling Certifications */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3909.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3910.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3911.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3912.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3913.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3914.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3915.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3917.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3919.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/DSC00078.jpg"
                alt="โล่รับรอง Megagen Implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3920.jpg"
                alt="ใบรับรองโรงพยาบาลรากเทียมดีเด่น"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Reason 3: การบรรยายวิชาการ */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-[60px]">
            <p className="text-3xl font-bold text-[#006aff] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              การบรรยายวิชาการ
              <br />
              สำหรับทันตแพทย์ทั่วประเทศ
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              ในขณะที่คนอื่นเข้าร่วมสัมมนา
              <br />
              Medis เปิดสัมมนา
              <br />
              ความแตกต่างของทักษะสร้างความแตกต่างของผลลัพธ์
            </p>
          </div>

          {/* Scrolling Seminar Images */}
          <div className="overflow-x-auto flex gap-2 pb-4">
            {seminars.map((seminar, i) => (
              <div key={i} className="flex-none w-[320px]">
                <div className="aspect-[950/1148] rounded-xl overflow-hidden relative">
                  <Image
                    src={seminar.image}
                    alt={seminar.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[17px] font-bold text-[#727582] mt-2">{seminar.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reason 4: ความร่วมมือกับ Highnis */}
        <div className="px-8 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-14">
            <p className="text-3xl font-bold text-white mb-3">4</p>
            <div className="w-full h-px bg-white/20 mb-3" />
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              พัฒนาอุปกรณ์เฉพาะทาง
              <br />
              ร่วมกับ Highnis Implant
            </h3>
            <div className="w-full h-px bg-white/20 mb-3" />
            <p className="text-base font-semibold text-[#e9ebf1]">
              เราเป็นผู้เชี่ยวชาญที่ได้รับการยอมรับในอุตสาหกรรม โดยร่วมพัฒนาอุปกรณ์เฉพาะสำหรับรากเทียมดิจิทัลแบบเต็มปาก (Full Arch Implant) กับ Highnis Implant
            </p>
          </div>

          <div className="w-[322px] h-[196px] mx-auto rounded-xl overflow-hidden relative">
            <Image
              src="/images/hyness-advisory-board.svg"
              alt="ความร่วมมือกับ Highnis Implant"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Reason 5: ระบบสุขอนามัยอย่างเข้มงวด */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">5</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              ระบบสุขอนามัยอย่างเข้มงวด
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              สร้างสภาพแวดล้อมการรักษาที่ปลอดภัยไร้กังวลเรื่องการติดเชื้อ
            </p>
          </div>

          {/* รูปห้องทำความสะอาด - เลื่อนได้ */}
          <div className="overflow-x-auto flex gap-3 pb-4 mb-8">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/sterilization-room2.webp"
                alt="ห้องทำความสะอาด - ระบบฆ่าเชื้อ"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/sterilization-room1.webp"
                alt="ห้องทำความสะอาด - ระบบฆ่าเชื้ออย่างเข้มงวด"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* คุณสมบัติด้านสุขอนามัย */}
          <div className="flex flex-col gap-6">
            {/* ระบบฆ่าเชื้อ 15 ขั้นตอน */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                ระบบฆ่าเชื้อ/ทำให้ปราศจากเชื้อ 15 ขั้นตอน
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                ปฏิบัติตามกระบวนการฆ่าเชื้อ/ทำให้ปราศจากเชื้อ 15 ขั้นตอนอย่างเคร่งครัดตามคู่มือ และจัดอบรมเจ้าหน้าที่ทุกคนเป็นประจำ
              </p>
            </div>

            {/* ระบบอุปกรณ์ 1 คนต่อ 1 ชุด */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                ระบบอุปกรณ์ 1 คนต่อ 1 ชุด
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                อุปกรณ์และเครื่องมือทั้งหมดถูกฆ่าเชื้อ/ทำให้ปราศจากเชื้อตามคู่มือ อุปกรณ์ใช้ครั้งเดียวจะไม่ถูกนำมาใช้ซ้ำเด็ดขาด
              </p>
            </div>

            {/* ระบบการจัดการฆ่าเชื้อโดยเฉพาะ */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                ระบบการจัดการฆ่าเชื้อโดยเฉพาะ
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                มีผู้จัดการควบคุมการติดเชื้อประจำเพื่อดูแลการฆ่าเชื้อ/ทำให้ปราศจากเชื้อของอุปกรณ์ทั้งหมดอย่างเข้มงวด
              </p>
            </div>

            {/* ระบบน้ำยาฆ่าเชื้อ */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                ระบบน้ำยาฆ่าเชื้อไฮโปคลอรัสแอซิด
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                ใช้สารฆ่าเชื้อรุ่นใหม่ HOCl (กรดไฮโปคลอรัส) ที่ปลอดภัยต่อร่างกาย เพื่อให้คุณรับการรักษาได้อย่างมั่นใจ
              </p>
            </div>
          </div>

          {/* ข้อความเน้น */}
          <div className="mt-6 bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl border border-[#006aff]/20">
            <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff] text-center">
              การรักษาที่ปลอดภัยไร้กังวลเรื่องการติดเชื้อด้วยการฆ่าเชื้อ/ทำให้ปราศจากเชื้ออย่างสมบูรณ์
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
