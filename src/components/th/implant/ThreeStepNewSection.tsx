import Image from 'next/image';

export default function ThreeStepNewSection() {
  const steps = [
    {
      title: 'ขั้นตอนที่ 1: การสแกนดิจิทัล 3D',
      description: 'รวบรวมข้อมูลช่องปากอย่างละเอียดด้วยเครื่องสแกน 3D โดยไม่ต้องพิมพ์ปากแบบเดิมที่น่าอึดอัด',
      image: '/images/implant-step-1.jpg'
    },
    {
      title: 'ขั้นตอนที่ 2: จำลองการผ่าตัดเสมือนจริง',
      description: 'วางแผนการฝังรากเทียมในคอมพิวเตอร์เพื่อความแม่นยำสูงสุดก่อนการผ่าตัดจริง',
      image: '/images/implant-step-2.jpg'
    },
    {
      title: 'ขั้นตอนที่ 3: การผ่าตัดด้วยดิจิทัลไกด์',
      description: 'ฝังรากเทียมตามตำแหน่งที่วางแผนไว้ด้วยเครื่องมือช่วยนำทางดิจิทัลที่ผลิตเฉพาะบุคคล',
      image: '/images/implant-step-3.jpg'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          3 ขั้นตอนง่ายๆ สู่<br />รอยยิ้มที่สมบูรณ์แบบ
        </h2>

        <div className="flex flex-col gap-12 w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-6 w-full">
              <div className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-md">
                <Image src={step.image} alt={step.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#006aff] text-white font-bold px-3 py-1 rounded-lg">
                  STEP 0{index + 1}
                </div>
              </div>
              <div className="flex flex-col gap-2 px-2">
                <h3 className="font-bold text-2xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{step.title}</h3>
                <p className="text-[#5d5f6d] text-lg leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

