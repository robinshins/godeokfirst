'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    { title: 'การอักเสบเฉียบพลัน', description: 'ปวดรุนแรงและหน้าบวม' },
    { title: 'ฟันผุข้างเคียง', description: 'ความเสียหายลามไปฟันข้างเคียง' },
    { title: 'โรคข้อต่อขากรรไกร', description: 'ปวดหัวเรื้อรังและปวดกราม' },
    { title: 'ฟันเรียงไม่ดี', description: 'อาจต้องจัดฟัน' }
  ];
  const benefits = [
    { title: 'ฟื้นตัวเร็ว', description: 'ยิ่งอายุน้อยฟื้นตัวยิ่งเร็ว' },
    { title: 'ป้องกันภาวะแทรกซ้อน', description: 'ปลอดภัยกว่าเมื่อไม่มีการอักเสบ' },
    { title: 'ประหยัดค่าใช้จ่าย', description: 'รักษาก่อนเกิดปัญหา' },
    { title: 'หัตถการสบาย', description: 'ไม่อักเสบยาชาจึงออกฤทธิ์ดี' }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">WHY NOW</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">ทำไมต้องถอน<span className="text-[#008095]">ตอนนี้</span>?</h2>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">ปัญหาจากการปล่อยฟันคุดไว้</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((p, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/x-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{p.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">ข้อดีของการถอนเร็ว</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/check-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{b.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">ผู้ป่วยหลายคนอดทน<br />จนต้องไปห้องฉุกเฉิน</h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80">ทุกสัปดาห์มีผู้ป่วยอักเสบรุนแรง<br />ต้องไปห้องฉุกเฉินตอนเช้ามืด<br />ถอนเร็วสามารถป้องกันความทุกข์นี้ได้</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
