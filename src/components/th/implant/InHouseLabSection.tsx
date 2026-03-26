'use client';

import Image from 'next/image';

export default function InHouseLabSection() {
  const benefits = [
    {
      icon: '/icons/shield.svg',
      title: 'ฟันชั่วคราวแข็งแรงที่สุด',
      description: 'ด้วยวัสดุพิเศษจากพันธมิตรเฉพาะ\nสามารถทานอาหารปกติได้ทันทีหลังผ่าตัด'
    },
    {
      icon: '/icons/tooth-xray-spot.svg',
      title: 'เปลี่ยนทันทีกรณีเสียหาย',
      description: 'ไม่ต้องกังวลแม้จะเกิดความเสียหาย\nห้องปฏิบัติการในคลินิกเปลี่ยนให้ทันที'
    },
    {
      icon: '/icons/smile.svg',
      title: 'ไม่มีวันที่ไม่มีฟัน',
      description: 'ตั้งแต่หลังผ่าตัดจนถึงการใส่ครอบฟันถาวร ไม่มีแม้แต่วันเดียวที่ต้องอยู่โดยไม่มีฟัน'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          ระบบรากฟันเทียม<br />
          ครอบฟันทันที
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        มุ่งเน้นการผลิตครอบฟันอย่างรวดเร็ว<br />
        ด้วยกระบวนการดิจิทัลและห้องปฏิบัติการดิจิทัลในคลินิก<br />
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Fast and Precise Prosthetics */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="การผลิตครอบฟันที่รวดเร็วและแม่นยำ"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              การผลิตครอบฟันที่รวดเร็วและแม่นยำ
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ทันตแพทย์ให้การรักษาอย่างสะดวกสบายด้วยประสบการณ์ทางคลินิกที่หลากหลาย และผลิตครอบฟันด้วยตนเองโดยใช้เครื่องมิลลิ่ง<br />
              <br />
              หลังการผลิต จะตรวจสอบอีกครั้งว่ามีความไม่สะดวกหรือผลข้างเคียงหรือไม่ และดูแลอย่างต่อเนื่องหลังการรักษาเพื่อเพิ่มความพึงพอใจของผู้ป่วย
            </p>
          </div>
        </div>

        {/* Without In-House Lab */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="ถ้าไม่มีห้องปฏิบัติการในคลินิก?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ถ้าไม่มีห้องปฏิบัติการในคลินิก?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ถ้าไม่มีห้องปฏิบัติการในคลินิก จะต้องส่งงานไปผลิตครอบฟันที่ห้องปฏิบัติการภายนอก ทำให้ใช้เวลานาน<br />
              <br />
              มีความยุ่งยากในการส่งงานกลับไปแก้ไขภายนอก และการปรับแต่งรายละเอียดเล็กๆ น้อยๆ ทำได้ยาก
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
