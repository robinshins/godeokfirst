import Image from 'next/image';

export default function AfterCareSection() {
  const careItems = [
    {
      icon: '🔍',
      title: 'ระบบตรวจสุขภาพเป็นประจำ',
      desc: 'รากฟันเทียม หลังฝังรากฟัน ตรวจสุขภาพอย่างละเอียดทุก 3 เดือน 6 เดือน 1 ปี เพื่อตรวจพบความผิดปกติแต่เนิ่นๆ.',
    },
    {
      icon: '🦷',
      title: 'รากฟันเทียม ทำความสะอาดรอบๆ',
      desc: 'ด้วยอุปกรณ์เฉพาะทาง ลอกเมมเบรนเชื้อแบคทีเรียรอบรากฟันเทียม, การดูแลเฉพาะบุคคลเพื่อป้องกันการอักเสบรอบๆ ดำเนินการ.',
    },
    {
      icon: '📋',
      title: 'แผนดูแลส่วนบุคคล',
      desc: 'วางแผนการดูแลเฉพาะบุคคลตามสภาพช่องปาก และแนะนำวิธีแปรงฟันและใช้ไหมขัดฟันที่ถูกต้อง ข้อมูลค่ะ.',
    },
  ];

  const steps = [
    { step: '1', title: 'ตรวจสุขภาพเป็นประจำ', desc: 'ทุก 3·6·12 เดือน' },
    { step: '2', title: 'ทำความสะอาดเฉพาะทาง', desc: 'ป้องกันการอักเสบรอบรากฟันเทียม' },
    { step: '3', title: 'การสบฟัน ตรวจสอบ', desc: 'ตรวจสมดุลแรงเคี้ยว' },
    { step: '4', title: 'ดูแลตลอดชีวิต', desc: 'รับผิดชอบดูแลต่อเนื่อง' },
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-8 overflow-clip relative shrink-0 w-[180px]">
            <Image
              src="/고덕퍼스트치과-로고-(การ이트).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#4DC8D8] tracking-[3px] uppercase">
              AFTER CARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full">
              สิ่งที่สำคัญกว่าการฝังคือ<br />
              การดูแลหลังการรักษา
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full">
              &quot;เพื่อให้คุณใช้ได้ตลอดชีวิต<br />
              เราจะรับผิดชอบจนถึงที่สุด&quot;
            </p>
          </div>
        </div>

        {/* รายการดูแลหลังการรักษา */}
        <div className="flex flex-col gap-4 w-full">
          {careItems.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#008095]/20 flex items-center justify-center shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-[16px] mb-1">{item.title}</p>
                  <p className="text-[#a0c4d4] text-[13px] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ห้องผ่าตัด ภาพถ่าย */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/goduk_images/수술실.jpg"
            alt="Godeok First Dental ห้องผ่าตัด"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold text-[15px]">สภาพแวดล้อมการผ่าตัดที่สะอาดและปลอดภัย</p>
            <p className="text-white/80 text-[13px]">ระบบควบคุมการติดเชื้อระดับโรงพยาบาลมหาวิทยาลัย</p>
          </div>
        </div>

        {/* กระบวนการ 4 ขั้นตอน */}
        <div className="w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold mb-5 text-center tracking-[2px]">
            Godeok First Dental กระบวนการดูแลหลังการรักษา
          </p>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div className="bg-[#008095] rounded-full w-11 h-11 flex items-center justify-center">
                  <span className="text-white font-black text-[16px]">{s.step}</span>
                </div>
                <p className="text-white text-[12px] font-bold text-center">{s.title}</p>
                <p className="text-[#a0c4d4] text-[11px] text-center leading-[1.3]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ข้อความเน้น */}
        <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-2xl p-5 w-full text-center shadow-lg">
          <p className="text-white font-bold text-[16px] leading-[1.5]">
            การผ่าตัดรากฟันเทียม หลังจากนั้นก็<br />
            ทันตแพทย์หัวหน้า โดยตรง รับผิดชอบจนจบ
          </p>
        </div>
      </div>
    </div>
  );
}
