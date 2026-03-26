import Image from 'next/image';

export default function ThreeStepSection() {
  return (
    <div className="bg-white py-[60px] px-4 relative">
      {/* Background gradient effect */}
      <div className="absolute left-1/2 top-[379px] -translate-x-1/2 w-[480px] h-[636px] pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-blue-200/40 to-transparent blur-3xl"></div>
      </div>

      <div className="w-full relative">
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
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              เฉพาะของ Godeok First Dental เพียงแห่งเดียว<br />
              3 ขั้นตอนชั่วคราว ฟัน
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              ไม่ใช่จบด้วยฟันชั่วคราวครั้งเดียว<br />
              ผ่านการปรับแต่งอย่างแม่นยำตลอด 3 ขั้นตอน<br />
              สร้างความสะดวกสบายเหมือนฟันตัวเอง
            </p>
          </div>
        </div>

        {/* 4 Step Cards */}
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth.svg"
                alt="ชั่วคราวครั้งที่ 1"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              ชั่วคราวครั้งที่ 1
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              ฟื้นตัวทันที
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              ทันทีหลังผ่าตัด, ใส่ทันที<br />
              ใช้ชีวิตประจำวันได้ทันที
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/crown.svg"
                alt="ปรับการสบฟันครั้งที่ 2"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              ปรับการสบฟันครั้งที่ 2
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              แม่นยำ การสบฟัน ปรับแต่ง
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              2 สัปดาห์หลังด้วยแบบเฉพาะบุคคล<br />
              ปรับแต่งสภาพการสบฟันอย่างละเอียดค่ะ
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/implant-group.svg"
                alt="ขั้นสุดท้ายครั้งที่ 3 ชั่วคราว"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              ขั้นสุดท้ายครั้งที่ 3 ชั่วคราว
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              สมบูรณ์แบบ การสบฟัน ตรวจสอบ
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              สุดท้าย ครอบฟัน ผลิต ก่อน<br />
              ตรวจสอบการสบฟันสมบูรณ์แบบอีกครั้งค่ะ
            </p>
          </div>

          {/* Final Step */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth-shine.svg"
                alt="สุดท้าย ครอบฟัน"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              สุดท้าย ครอบฟัน
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              ฟันของฉันตลอดชีวิต
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              ครอบฟันสุดท้ายที่ผ่านการปรับแต่งทั้งหมดอย่างสมบูรณ์แบบ<br />
              สุดท้าย ครอบฟัน ใส่ค่ะ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
