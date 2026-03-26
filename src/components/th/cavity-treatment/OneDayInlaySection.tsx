'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'ไม่ต้องพิมพ์ปากอีกต่อไป',
      description: 'สแกน 3D ความเร็วสูงแทนวัสดุพิมพ์ปากที่เหนียว\nบันทึกรูปทรงฟันได้อย่างสบาย'
    },
    {
      icon: '/icons/shield.svg',
      title: 'ครอบฟันสั่งทำที่แม่นยำ',
      description: 'ผลิตอินเลย์ที่ลดความคลาดเคลื่อน\nให้น้อยที่สุดด้วยข้อมูลดิจิทัล'
    },
    {
      icon: '/icons/smile.svg',
      title: 'ห้องปฏิบัติการเฉพาะทางที่ผ่านการรับรอง',
      description: 'ผลิตชิ้นงานเซรามิกคุณภาพสูง\nจากห้องปฏิบัติการที่ผู้อำนวยการคัดเลือกเอง'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          สแกนดิจิทัล Trios 5<br />
          แม่นยำยิ่งขึ้น
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          สั่งทำอินเลย์และครอบฟันด้วยสแกน 3D<br />
          โดยไม่ต้องพิมพ์ปากที่ไม่สะดวก
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* 트리오스5 디지털 스캔 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/트리오스5.jpg"
              alt="เครื่องสแกนช่องปาก Trios 5"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              เครื่องสแกนช่องปาก Trios 5
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              เครื่องสแกนช่องปากรุ่นล่าสุดจาก 3Shape สามารถสแกน 3D ความเร็วสูงโดยไม่ต้องใช้วัสดุพิมพ์ปากที่เหนียว<br />
              <br />
              บันทึกรูปทรงฟันได้อย่างแม่นยำแม้ในสภาพแวดล้อมช่องปากที่มีความชื้น เพื่อผลิตอินเลย์ที่พอดียิ่งขึ้น
            </p>
          </div>
        </div>

        {/* 실제 케이스 - 스캐너 사용 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/cases/충치치료/인레이제거후스캔채득.jpg"
              alt="สแกนหลังถอดอินเลย์ออก"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              สแกนทันทีหลังการรักษา
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              เมื่อกำจัดฟันผุและขึ้นรูปเสร็จแล้ว จะทำการสแกนช่องปากทันที<br />
              <br />
              ส่งข้อมูลสแกนไปยังห้องปฏิบัติการเฉพาะทางเพื่อผลิตอินเลย์สั่งทำที่แม่นยำ
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#e6f7f8] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
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
