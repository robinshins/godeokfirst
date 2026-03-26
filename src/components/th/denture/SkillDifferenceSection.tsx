'use client';

export default function SkillDifferenceSection() {
  const generalClinic = [
    {
      title: 'ไม่มีห้องปฏิบัติการในคลินิก',
      description: 'ส่งงานไปห้องปฏิบัติการภายนอก ทำให้ค่าใช้จ่ายและระยะเวลาเพิ่มขึ้น\nไม่สามารถทำงานละเอียดได้'
    },
    {
      title: 'ฟันชั่วคราว 1 ขั้นตอน',
      description: 'ใส่ครอบฟันถาวรทันทีโดยไม่ปรับการสบฟัน'
    },
    {
      title: 'มีโอกาสต้องผ่าตัดซ้ำ',
      description: 'หากไม่มีอุปกรณ์เฉพาะทางและการดูแลหลังการรักษา\nไม่เพียงพอ อาจต้องผ่าตัดซ้ำ'
    }
  ];

  const medisClinic = [
    {
      title: 'ฝีมือที่สมบูรณ์แบบ',
      description: 'ทันตแพทย์คนอื่นมาเรียนรู้ที่นี่\nทันตแพทย์ของเราสอนทันตแพทย์คนอื่น'
    },
    {
      title: 'ระบบฟันชั่วคราว 3 ขั้นตอน',
      description: 'การปรับแต่งอย่างละเอียดทีละขั้นเพื่อการสบฟันที่สมบูรณ์แบบ'
    },
    {
      title: 'สถิติผ่าตัดซ้ำ 0 ครั้ง',
      description: 'สมบูรณ์แบบในครั้งเดียวด้วยเทคนิคที่เหนือชั้น'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                เมื่อฝีมือต่างกัน<br />
                ผลลัพธ์ก็ต่างกัน
              </h2>
            </div>
          </div>
          <div className="font-semibold leading-[1.4] not-italic text-[#727582] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            การทำให้ถูกต้องตั้งแต่แรกคือทางเลือกที่ชาญฉลาดที่สุด<br />
            การรักษาที่สมบูรณ์แบบโดยไม่ต้องผ่าตัดซ้ำ นั่นคือฝีมือที่แท้จริง
          </div>
        </div>

        {/* Comparison */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {/* General Clinic */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center w-full">
                    <p className="font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      คลินิกทันตกรรมทั่วไป
                    </p>
                    <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      ยังคงรู้สึกไม่มั่นใจแม้หลังการรักษา
                    </p>
                  </div>
                </div>
                {generalClinic.map((item, index) => (
                  <div key={index} className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Godeok First */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="bg-[#008095] box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
                <div className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-4 items-start not-italic relative shrink-0 text-center text-white w-full">
                    <p className="font-bold leading-[1.35] text-2xl tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Godeok First Dental
                    </p>
                    <p className="font-semibold leading-[1.4] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Godeok First Dental สัญญาการรักษาครั้งเดียว<br />
                      ตลอดชีวิตด้วยฝีมือที่เหนือชั้น
                    </p>
                  </div>
                </div>
                {medisClinic.map((item, index) => (
                  <div key={index} className="bg-white box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-center not-italic relative shrink-0 text-center w-full">
                      <p className="font-bold leading-[1.5] text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
