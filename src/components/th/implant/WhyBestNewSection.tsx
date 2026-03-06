'use client';

import Image from 'next/image';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/icons/Logo_black.svg"
            alt="Kyungsung Medis Dental"
            width={168}
            height={24}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full font-['Pretendard_JP']">
          ทำไม Kyungsung Medis<br />
          ถึงพิเศษ
          </h2>
        </div>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        {/* Reason 1: ทันตแพทย์ผู้เชี่ยวชาญที่สอนทันตแพทย์อื่น */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="box-border flex flex-col gap-[14px] items-center justify-center px-4 py-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[#006aff] text-[32px] text-center tracking-[-0.64px] w-full font-['Pretendard_JP']">
                1
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h3 className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full font-['Pretendard_JP']">
                  ทันตแพทย์ผู้เชี่ยวชาญ<br />
                  ที่สอนทันตแพทย์อื่น
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6 w-full">
              <div className="flex gap-3 w-max">
                {[
                  { img: '/images/seminar-2.png', caption: 'นำเสนอในงานวิชาการ' },
                  { img: '/images/seminar-3.png', caption: 'บรรยายรากฟันเทียมให้ทันตแพทย์' },
                  { img: '/images/seminar-1.png', caption: 'บรรยายพิเศษโดยทันตแพทยสมาคมปูซาน' },
                  { img: '/images/seminar-4.png', caption: 'หลักสูตรผู้เชี่ยวชาญดิจิทัลอิมพลานต์' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-[6px] w-[243px] flex-shrink-0">
                    <div className="relative w-full aspect-[950/1148] rounded-[20px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.caption || `สัมมนา ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-bold leading-[1.5] not-italic text-[#727582] text-[13px] tracking-[-0.26px] font-['Pretendard_JP']">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reason 2: ระบบฟันชั่วคราว 3 ขั้นตอน */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="leading-[1.35] text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  2
                </p>
                <div className="flex flex-col gap-2 items-center w-full">
                  <h3 className="leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full">
                    ระบบฟันชั่วคราว<br />
                    3 ขั้นตอน
                  </h3>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#006aff]/10 rounded-full">
                    <span className="text-[13px] font-semibold text-[#006aff] tracking-[-0.26px]">
                      *เฉพาะรากฟันเทียมทั้งปาก
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                แตกต่างจากคลินิกอื่นที่ทำแค่ 1 ขั้นตอน<br />
                ระบบปรับแต่ง 3 ขั้นตอนของเราเพื่อความสมบูรณ์แบบ
              </p>
            </div>

            {/* Comparison table */}
            <div className="box-border flex gap-10 h-[263px] items-start justify-center p-6 relative shrink-0 w-full">
              {/* คลินิกทั่วไป */}
              <div className="absolute flex flex-col gap-2.5 items-start left-6 top-[17px] w-[133px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] tracking-[-0.44px] font-['Pretendard_JP']">
                    คลินิกทั่วไป
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      จบใน 1 ขั้นตอน
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ไม่มีขั้นที่ 2
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ไม่มีขั้นที่ 3
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ไม่มีขั้นที่ 4
                    </p>
                  </div>
                </div>
              </div>

              {/* Medis Dental */}
              <div className="absolute bg-white border-2 border-[#006aff] box-border flex flex-col gap-2.5 items-center justify-center left-[151px] px-[15px] py-[13px] rounded-[11px] top-[1px] w-[182px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[22px] text-black tracking-[-0.44px] font-['Pretendard_JP']">
                    Medis Dental
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ขั้นที่ 1: ฟื้นฟูทันที
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ขั้นที่ 2: ปรับการสบฟัน
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ขั้นที่ 3: ตรวจสอบสมบูรณ์
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ขั้นที่ 4: ครอบฟันสมบูรณ์แบบ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 3: ผ่าตัดเสร็จภายใน 24 ชั่วโมง */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  3
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  ผ่าตัดเสร็จภายใน 24 ชั่วโมง
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                ด้วยห้องปฏิบัติการภายในคลินิก<br />
                ไม่มีวันไหนที่ต้องอยู่โดยไม่มีฟัน
              </p>
            </div>

            <div className="box-border flex flex-col gap-10 items-start justify-center p-6 relative shrink-0 w-full">
              <div className="flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                {/* 10:00 ผ่าตัดช่วงเช้า */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f2f5ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[80px] h-[80px] -left-[5px] -top-2">
                      <Image
                        src="/images/same-day-morning.png"
                        alt="ผ่าตัดช่วงเช้า"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      10:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      ผ่าตัดช่วงเช้า
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      <span className="text-[#0b1727]">ใส่รากฟันเทียมอย่างแม่นยำและรวดเร็ว</span> ด้วยการผ่าตัด Digital Guide
                    </p>
                  </div>
                </div>

                {/* 14:00 ทำฟันชั่วคราว */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#fff9ec] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[70px] h-[70px]">
                      <Image
                        src="/images/same-day-temporary.png"
                        alt="ทำฟันชั่วคราว"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      14:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      ทำฟันชั่วคราว
                    </p>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p className="font-semibold leading-[1.4] not-italic text-[#0b1727] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                        ทำทันทีตามขนาดของผู้ป่วย
                      </p>
                      <p className="font-semibold leading-[1.4] not-italic text-[#006aff] text-[13px] tracking-[-0.26px] font-['Pretendard_JP']">
                        ทำเสร็จภายใน 24 ชม. ที่ห้องปฏิบัติการในคลินิก
                      </p>
                    </div>
                  </div>
                </div>

                {/* 18:00 ทานอาหารเย็น */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f5f4ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[86px] h-[86px] -left-[7px] -top-[7px]">
                      <Image
                        src="/images/same-day-dinner.png"
                        alt="ทานอาหารเย็น"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      18:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      ทานอาหารเย็นและกลับสู่ชีวิตประจำวัน
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      <span className="text-[#0b1727]">ไม่มีวันที่ต้องอยู่โดยไม่มีฟัน</span> กลับสู่ชีวิตประจำวันได้เลยโดยไม่กระทบต่อการทำงานและความสัมพันธ์
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 4: การดูแลหลังการรักษาอย่างละเอียด */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  4
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  การดูแลหลังการรักษาอย่างละเอียด
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                ไม่ใช่แค่ใส่รากฟันเทียมแล้วจบ<br />
                ดูแลอย่างเอาใจใส่เพื่อให้ใช้งานได้ 10-20 ปี
              </p>
            </div>

            <div className="box-border flex flex-col gap-6 items-center px-6 pb-6 relative shrink-0 w-full">
              {/* 1. การดูแลช่องปากตลอดชีวิต */}
              <div className="flex flex-col gap-3 w-full">
                <div className="relative h-[180px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
                  <Image
                    src="/images/beneficial-bacteria.jpg"
                    alt="การดูแลช่องปากตลอดชีวิต - การบำบัดแบคทีเรียในช่องปาก"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard_JP']">
                    การดูแลช่องปากตลอดชีวิต
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    การบำบัดแบคทีเรียในช่องปาก
                  </p>
                </div>
              </div>

              {/* 2. สปลินท์ป้องกันรากฟันเทียม */}
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full overflow-x-auto">
                  <div className="flex gap-3 pb-2">
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint.webp"
                        alt="สปลินท์ป้องกันรากฟันเทียม 1"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint2.tif"
                        alt="สปลินท์ป้องกันรากฟันเทียม 2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard_JP']">
                    สปลินท์ป้องกันรากฟันเทียม
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    รักษาการนอนกัดฟัน, การกัดฟัน, และโรคขากรรไกร
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 5: รากฟันเทียมทุกระดับความยาก */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  5
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  ตั้งแต่รากฟันเทียมซี่เดียว<br />
                  จนถึงทั้งปากที่ยากที่สุด
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                ด้วยประสบการณ์การผ่าตัดหลากหลายกรณี<br />
                <span className="text-[#006aff] font-bold">ได้รับการยอมรับอย่างเป็นทางการว่าเป็นอันดับ 1</span><br />
                ในการผ่าตัด Digital Guide ในเขตนัมกู ปูซาน
              </p>
            </div>

            {/* ใบรับรองโรงพยาบาลที่ใส่รากฟันเทียมมากที่สุด */}
            <div className="flex justify-center w-full px-6">
              <div className="relative w-full max-w-[343px] aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/most-implant-hospital.jpg"
                  alt="โรงพยาบาลที่ผ่าตัด Digital Guide มากที่สุด"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* ภาพใบรับรอง Osstem */}
            <div className="w-full overflow-x-auto px-6 mt-4">
              <div className="flex gap-4 pb-2">
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem2.jpg"
                    alt="ใบรับรอง Osstem 2"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem1.jpg"
                    alt="ใบรับรอง Osstem 1"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
              </div>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      รากฟันเทียมซี่เดียว
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ฟันหายไป 1-2 ซี่
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      รากฟันเทียมบางส่วน
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ฟันหายหลายซี่, ทดแทนสะพานฟัน
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      รากฟันเทียมทั้งปาก
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ไม่มีฟัน, All-on-4/6 เป็นต้น<br />
                      รากฟันเทียมทั้งปากที่ยากที่สุด
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#006aff]/5 border border-[#006aff]/20 rounded-2xl p-4 w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">✨</div>
                  <p className="font-bold text-[#006aff] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    รับเคสยาก เช่น ปลูกกระดูก, ยกโพรงจมูก เป็นต้น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 6: ใส่น้อยที่สุด, แผลเล็กที่สุด, ปลูกกระดูกน้อยที่สุด */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  6
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  ใส่น้อยที่สุด, แผลเล็กที่สุด,<br />
                  ปลูกกระดูกน้อยที่สุด
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                ด้วยการวินิจฉัยดิจิทัลที่แม่นยำ<br />
                ทำเฉพาะที่จำเป็นเท่าที่ต้องการ
              </p>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      ใส่น้อยที่สุด
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ขากรรไกรบน 6 ตัว, ขากรรไกรล่าง 4 ตัว<br />
                      ยึดแน่นอย่างมีประสิทธิภาพ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      แผลเล็กที่สุด
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      ผ่าตัดแผลเล็ก ฟื้นตัวเร็ว
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      ปลูกกระดูกน้อยที่สุด
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      วินิจฉัยแม่นยำ ปลูกกระดูกเท่าที่จำเป็น
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
