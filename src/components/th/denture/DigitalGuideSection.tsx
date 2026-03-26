'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: 'สแกนช่องปากด้วยระบบ\n3D Oral Scanning วินิจฉัยแม่นยำ'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: 'วางแผนฝังฟันไม่ต้องผ่าตัดจากโครงสร้างช่องปากบนคอมพิวเตอร์'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: 'ติดอุปกรณ์นำทางที่จุดผ่าตัด ลดคลาดเคลื่อนถึง 1mm'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: 'ผ่าตัดน้อยที่สุด ใช้เวลาสั้นลง ลดอาการเจ็บและบวม'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: 'จำลองผ่าตัดตามสถานการณ์ ลดคลาดเคลื่อน เพิ่มความพึงพอใจ'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Godeok First Dental <br /> ผ่าตัด 2 ครั้งเสมอ
            </h2>
            <div className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ทันตแพทย์หัวหน้าทำผ่าตัดจำลองก่อน<br />
              ออกแบบตำแหน่งฝังที่เหมาะสมที่สุด<br />
              แล้วจึงผ่าตัดจริง<br />
              <br />
              <span className="font-bold text-[#008095]">ผ่าตัดเร็วและสบาย</span><br />
              ลดบวมและเจ็บ<br />
              ลดการปลูกกระดูก
            </div>
          </div>
        </div>



        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-[#f3f6fb] rounded-[24px] overflow-hidden w-full">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8f9fa]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-[#008095] flex items-center justify-center rounded-lg w-10 h-10">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6">
                <p className="font-semibold leading-[1.6] text-[15px] text-black tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col gap-6 items-center relative shrink-0 w-full mt-10">
          <h3 className="font-bold leading-[1.35] text-[28px] text-black tracking-[-0.56px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            실제 시술 사례
          </h3>
          <div className="flex flex-col gap-4 w-full">
            {caseStudies.map((image, index) => (
              <div key={index} className="relative w-full aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`전체 임플란트 시술 사례 ${index + 1}`}
                  fill
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
