'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: 'ช่องปาก ภายใน สแกนที่ทำ\n3Dช่องปาก สแกน ระบบด้วย วินิจฉัยแม่นยำ'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: 'วางแผนฝังฟันโดยไม่ต้องกรีด คำนึงถึงโครงสร้างช่องปากที่จำลองด้วยคอมพิวเตอร์'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: 'ใส่อุปกรณ์นำทางตั้งตรงในบริเวณรักษาเพื่อลดความคลาดเคลื่อนเหลือน้อยสุด 1 มม.'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: 'กรีดน้อยที่สุดจึงลดเวลารักษา ความเจ็บปวด และอาการบวมเมื่อเทียบกับการรักษาอื่น'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: 'จำลองการผ่าตัดตามสถานการณ์เพื่อลดความคลาดเคลื่อนและเพิ่มความพึงพอใจในการรักษา'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="text-center w-full">
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Godeok First Dental เสมอ
            <br />
            <span className="text-[#008095] relative inline-block">
              ผ่าตัด 2 ครั้ง
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-medium leading-[1.6] text-[#666] text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            ทันตแพทย์จำลองการผ่าตัดรากฟันเทียมเสมือนจริงโดยตรง
            <br />
            หลังออกแบบตำแหน่งฝังที่เหมาะสมที่สุด
            <br />
            จริง การผ่าตัด ดำเนินการ
          </p>
          <div className="mt-5 inline-block bg-gradient-to-r from-[#008095] to-[#006d80] px-6 py-4 rounded-2xl shadow-lg shadow-[#008095]/20">
            <p className="font-bold text-white text-[15px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              การผ่าตัดที่รวดเร็วและสะดวกสบาย
              <br />
              ลดบวม ปวด และปลูกกระดูกให้น้อยที่สุด
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="group bg-white border border-[#edf2f7] rounded-3xl overflow-hidden w-full shadow-sm hover:border-[#008095] hover:shadow-lg transition-all duration-300">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8fbfd]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-gradient-to-br from-[#008095] to-[#006d80] flex items-center justify-center rounded-xl w-10 h-10 shadow-lg shadow-[#008095]/30">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-5">
                <p className="font-medium leading-[1.6] text-[15px] text-[#3e3a3a] tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
