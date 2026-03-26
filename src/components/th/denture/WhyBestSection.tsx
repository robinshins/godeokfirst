import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-[#f3f6fb] py-[60px] px-4">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-10">
          {/* Logo */}
          <div className="h-6 w-[168px]">
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none">
              <text x="0" y="18" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#008095">
                Godeok First Dental
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
              Godeok First Dental<br />
              รากฟันเทียม เหตุผลที่เป็นอันดับ 1 ทั่วประเทศ
            </h2>
          </div>
        </div>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4">
          {/* Reason 1: แพทย์ผู้เชี่ยวชาญที่ทันตแพทย์มาเรียนรู้ */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">1</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  ทันตแพทย์<br />
                  แพทย์เฉพาะทางที่มาเรียนรู้
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6">
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-1.png"
                    alt="ภาพถ่ายสัมมนา 1"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-2.png"
                    alt="ภาพถ่ายสัมมนา 2"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-3.png"
                    alt="เวิร์กช็อปรากฟันเทียม"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    เวิร์กช็อปรากฟันเทียม
                  </p>
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-4.png"
                    alt="ดิจิทัล รากฟันเทียม กระบวนการเฉพาะทาง"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    ดิจิทัล รากฟันเทียม กระบวนการเฉพาะทาง
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2: โปรโตคอลฟันชั่วคราว 3 ขั้นตอน */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">2</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  ขั้นตอนที่ 3 ฟันชั่วคราว<br />
                  โปรโตคอล
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                ต่างจากฟันชั่วคราวขั้นตอนที่ 1 ของทันตกรรมอื่น<br />
                มุ่งสู่ความสมบูรณ์แบบด้วยระบบปรับแต่ง 3 ขั้นตอนค่ะ
              </p>
            </div>

            {/* Comparison table */}
            <div className="px-6 py-6 relative min-h-[280px]">
              {/* ทั่วไป ทันตกรรม */}
              <div className="absolute left-6 top-[17px] flex flex-col gap-[10px] w-[133px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-[#37373e]">
                  ทั่วไป ทันตกรรม
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">จบในขั้นตอนที่ 1</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 2 กระบวนการ ไม่มี</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 3 กระบวนการ ไม่มี</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 4 กระบวนการ ไม่มี</p>
                  </div>
                </div>
              </div>

              {/* Godeok First Dental */}
              <div className="absolute right-6 top-[1px] bg-white border-2 border-[#008095] rounded-[11px] px-[15px] py-[13px] flex flex-col gap-[10px] w-[182px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-black text-center">
                  Godeok First Dental
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 1 : ฟื้นตัวทันที</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 2 : แม่นยำ การสบฟัน ปรับแต่ง</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 3 : สมบูรณ์แบบ การสบฟัน ตรวจสอบ</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">ขั้นตอนที่ 4 : สมบูรณ์แบบ สุดท้าย ครอบฟัน</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 3: 24ภายในเวลา เสร็จสมบูรณ์ที่เป็น การผ่าตัด */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">3</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  24ภายในเวลา เสร็จสมบูรณ์ที่เป็น การผ่าตัด
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                เพราะมีห้องปฏิบัติการในคลินิกผลิตได้เร็ว<br />
                ไม่มีวันที่ต้องอยู่โดยไม่มีฟันแม้แต่วันเดียวค่ะ
              </p>
            </div>

            {/* Timeline */}
            <div className="px-6 py-6 flex flex-col gap-[26px]">
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f2f5ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-morning-surgery.png"
                    alt="การผ่าตัดวันเดียว"
                    width={80}
                    height={80}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">10:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">การผ่าตัดวันเดียว</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    <span className="text-[#0b1727]">ผ่านการวิเคราะห์ดิจิทัล 3D</span> แม่นยำและ<br />
                    เร็ว รากฟันเทียมฝัง
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#fff9ec] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-temporary-tooth.png"
                    alt="ฟันชั่วคราว ผลิต"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">14:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">ฟันชั่วคราว ผลิต</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#0b1727]">
                    ผู้ป่วย เฉพาะบุคคลแบบด้วย ทันทีผลิต
                  </p>
                  <p className="text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#008095]">
                    ในคลินิก ห้องปฏิบัติการทันตกรรมที่ ทันที ผลิตเพื่อ 24ภายในเวลา เสร็จสมบูรณ์
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f5f4ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-dinner.png"
                    alt="รับประทานอาหารเย็น"
                    width={86}
                    height={86}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">18:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">รับประทานอาหารเย็น</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    เพลิดเพลินอย่างสะดวกสบายด้วยฟันใหม่<br />
                    มื้อเย็น
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 4: การดูแลหลังการรักษาอย่างละเอียด */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">4</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  การดูแลหลังการรักษาอย่างละเอียด
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                ทันทีหลังผ่าตัดตั้งแต่ สุดท้าย ครอบฟัน ใส่จนถึง,<br />
                ไม่มีวันที่ต้องใช้ชีวิตโดยไม่มีฟันแม้แต่วันเดียวค่ะ
              </p>
            </div>

            <div className="py-6 flex flex-col gap-5 items-center">
              <div className="relative w-full h-[242px]">
                <Image
                  src="/images/implant-bacteria-therapy.png"
                  alt="ช่องปาก แบคทีเรียเธอราพี"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d] text-center">
                ช่องปาก แบคทีเรียเธอราพี
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
