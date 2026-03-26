'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function InHouseLabSection() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <p className="text-[15px] font-bold text-[#008095] tracking-[3px] uppercase">
            DENTAL LAB
          </p>
          <h2 className="font-bold leading-[1.35] text-[32px] text-[#1a1a1a] tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            เพื่อคุณภาพครอบฟัน<br />
            <span className="text-[#008095]">ห้องปฏิบัติการเฉพาะทางที่คัดสรรมาอย่างดี</span>
          </h2>
          <p className="font-semibold leading-[1.5] text-[#3e3a3a] text-base tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            การรู้จักห้องปฏิบัติการที่ดีก็เป็นความสามารถ
          </p>
        </FadeInSection>

        {/* Key Point Card */}
        <FadeInSection delay={100} className="w-full bg-gradient-to-br from-[#008095]/10 to-[#6eb7bc]/10 rounded-2xl p-6 border border-[#008095]/20">
          <div className="flex items-start gap-4">
            <div className="bg-[#008095] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#3e3a3a] text-[17px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ฝีมือของช่างทันตกรรมเป็นตัวกำหนดคุณภาพครอบฟัน
              </p>
              <p className="text-[#666] text-[14px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ไม่ว่าจะฝังรากฟันเทียมดีแค่ไหน ถ้าครอบฟันด้านบนไม่แม่นยำก็ไร้ประโยชน์ เราผลิตจาก<span className="font-bold text-[#008095]">ห้องปฏิบัติการเฉพาะทาง</span>ที่ทันตแพทย์ตรวจสอบด้วยตนเอง
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Why external lab is better */}
        <FadeInSection delay={200} className="flex flex-col gap-4 w-full">
          <p className="font-bold text-[#1a1a1a] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            ทำไมต้องห้องปฏิบัติการเฉพาะทาง?
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '🏆',
                title: 'คัดสรรเฉพาะที่ผ่านการรับรองจากเครือข่ายโรงพยาบาลมหาวิทยาลัย',
                desc: 'คัดเลือกห้องปฏิบัติการเฉพาะทางที่มีฝีมือผ่านเครือข่ายอาจารย์และทันตแพทย์ที่สร้างขึ้นจากการเป็นอาจารย์พิเศษโรงพยาบาลมหาวิทยาลัย',
              },
              {
                icon: '🔬',
                title: 'ความเชี่ยวชาญที่แตกต่างจากห้องปฏิบัติการขนาดเล็กในคลินิก',
                desc: 'ห้องปฏิบัติการเฉพาะทางมีอุปกรณ์ CAD/CAM ล่าสุดและช่างทันตกรรมที่มีประสบการณ์ ผลิตครอบฟันคุณภาพสูงกว่าห้องปฏิบัติการในคลินิกที่มีบุคลากรเพียง 1-2 คน',
              },
              {
                icon: '🤝',
                title: 'การสื่อสารอย่างใกล้ชิดกับทันตแพทย์',
                desc: 'ไม่ใช่แค่ส่งงานแล้วรับกลับ แต่ทันตแพทย์อธิบายเคสด้วยตนเองและปรึกษากับช่างทันตกรรมเพื่อสร้างการสบฟันและความสวยงามที่เหมาะกับผู้ป่วยแต่ละคน',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={300} className="w-full bg-[#0b1727] rounded-2xl p-6">
          <p className="font-bold text-white text-[16px] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            💡 ห้องปฏิบัติการในคลินิกไม่ได้ดีเสมอไป
          </p>
          <p className="text-[#a0c4d4] text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            ห้องปฏิบัติการในคลินิกเร็วกว่า แต่เนื่องจากดำเนินงานด้วยบุคลากรจำนวนน้อย จึงมักมีข้อจำกัดด้านความเชี่ยวชาญและอุปกรณ์ Godeok First Dental เลือก<span className="text-[#6eb7bc] font-bold">คุณภาพมากกว่าความเร็ว</span> ต้องทำให้ดีตั้งแต่แรกจึงจะใช้ได้นาน
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
