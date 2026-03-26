'use client';

import Link from 'next/link';

export default function TmjTreatmentSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Treatment
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            ระบบรักษาข้อต่อขากรรไกร<br />
            <span className="text-[#008095]">ของ Godeok First Dental</span>
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            รักษาเป็นขั้นตอนตามอาการและสาเหตุ
          </p>
        </div>

        {/* Treatment Steps */}
        <div className="flex flex-col gap-5">

          {/* Step 1 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">1</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                วินิจฉัยแม่นยำ
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              วินิจฉัยตำแหน่งและสภาพของแผ่นข้อต่อขากรรไกร ความตึงของกล้ามเนื้อ และการสบฟัน ด้วย X-ray พาโนรามิก การตรวจทางคลินิก และการวิเคราะห์การสบฟัน
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['ถ่ายภาพ X-ray พาโนรามิก', 'คลำและฟังข้อต่อขากรรไกร', 'วิเคราะห์การสบฟัน · วัดระยะอ้าปาก'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">2</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                รักษาระยะเฉียบพลัน
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              ในช่วงเฉียบพลันที่ปวดมาก ใช้ยาร่วมกับกายภาพบำบัดเพื่อลดอาการปวดและอักเสบอย่างรวดเร็ว
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['สั่งยาลดอักเสบ · ยาคลายกล้ามเนื้อ', 'แนะนำประคบร้อน · ประคบเย็น', 'สอนวิธีบริหารกรามให้มั่นคง'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#008095] rounded-[24px] p-6 flex flex-col gap-5 shadow-xl shadow-[#008095]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">3</span>
              </div>
              <h3
                className="font-bold text-[20px] text-white tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                รักษาด้วยสปลินท์ (อุปกรณ์รักษาการสบฟัน)
              </h3>
            </div>
            <p
              className="text-white/80 text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              ทำสปลินท์เฉพาะบุคคลเพื่อกระจายแรงที่ผิดปกติต่อข้อต่อขากรรไกร และนำแผ่นข้อต่อกลับสู่ตำแหน่งปกติ
            </p>
            <div className="bg-white/10 rounded-[16px] p-4 flex flex-col gap-2">
              {['ทำเฉพาะบุคคลจากการวิเคราะห์ดิจิทัล', 'ป้องกันนอนกัดฟัน · กัดฟัน', 'ปรับตำแหน่งแผ่นข้อต่อ', 'ปรับการสบฟันเป็นระยะเพื่อผลสูงสุด'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">4</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                แก้สาเหตุ · ป้องกันกลับมาเป็นซ้ำ
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              หลังอาการปวดทุเลา จะแก้ไขสาเหตุต้นตอ ป้องกันการกลับมาเป็นซ้ำด้วยการจัดฟัน ครอบฟันทดแทน และให้ความรู้ปรับเปลี่ยนพฤติกรรม
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['ปรับการสบฟัน · รักษาครอบฟัน', 'ให้ความรู้ปรับเปลี่ยนพฤติกรรม', 'โปรแกรมตรวจสุขภาพประจำ'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <Link href="/th/consultation" className="w-full">
          <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
            <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              นัดปรึกษาข้อต่อขากรรไกร
            </p>
          </button>
        </Link>

      </div>
    </div>
  );
}
