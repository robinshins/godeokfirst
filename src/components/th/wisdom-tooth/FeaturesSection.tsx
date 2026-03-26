'use client';

export default function FeaturesSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">PAINLESS & PRECISE</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black">ไม่เจ็บและ<br /><span className="text-[#008095]">ถอนอย่างแม่นยำ</span></h2>
            <p className="font-semibold text-base leading-[1.5] tracking-[-0.32px] text-[#727582]">ระบบบรรเทาปวดอย่างเป็นระบบ<br />โดยอดีตอาจารย์พิเศษโรงพยาบาลมหาวิทยาลัย</p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {[
              { step: '01', title: 'ยาชาทา · บ้วนปาก', desc: 'ขจัดความเจ็บจากเข็มฉีดก่อน ยาชาผิวหนังช่วยลดความเจ็บจากการฉีดยาชา', color: '#e0f4f6', textColor: '#008095' },
              { step: '02', title: 'เครื่องฉีดยาชาไฟฟ้าไร้ปวด', desc: 'คอมพิวเตอร์ควบคุมความเร็วการฉีดอัตโนมัติ ยาชาเข้าช้าๆ สม่ำเสมอ แทบไม่เจ็บ', color: '#008095', textColor: '#ffffff', highlight: true },
            ].map((item) => (
              <div key={item.step} className="rounded-[20px] p-5 flex gap-4 items-start" style={{ backgroundColor: item.color }}>
                <span className="font-black text-[28px] leading-none flex-shrink-0 mt-1" style={{ color: item.highlight ? 'rgba(255,255,255,0.4)' : '#008095', opacity: item.highlight ? 1 : 0.3 }}>{item.step}</span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[17px] leading-[1.4] tracking-[-0.34px]" style={{ color: item.textColor }}>{item.title}</p>
                  <p className="font-medium text-[14px] leading-[1.6] tracking-[-0.28px]" style={{ color: item.highlight ? 'rgba(255,255,255,0.85)' : '#555' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] border-2 border-[#008095] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#008095] rounded-full flex items-center justify-center"><span className="text-[32px]">🏥</span></div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">ถอนฟันระดับโรงพยาบาลมหาวิทยาลัย</h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center">เคยถูกบอกให้<br />&quot;ไปโรงพยาบาลใหญ่กว่า&quot; ไหม?</p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              {[
                { label: 'ฟันคุดฝังที่ซับซ้อน', desc: 'แม้ฝังลึกในเหงือกก็ไม่มีปัญหา' },
                { label: 'ฟันคุดใกล้เส้นประสาท', desc: 'ถอนปลอดภัยไม่ต้องกังวลเส้นประสาทเสียหาย' },
                { label: 'ฟันคุดฝังตะแคง', desc: 'เคสยากที่นอนตะแคงก็จัดการได้' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#008095] text-lg shrink-0">✓</span>
                  <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]"><span className="font-bold text-[#008095]">{item.label}</span> — {item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">อดีตอาจารย์พิเศษ ร.พ.ทันตกรรม ม.โชซอน<br />จัดการอย่างปลอดภัยด้วยตนเอง</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
