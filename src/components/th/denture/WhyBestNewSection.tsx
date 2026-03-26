'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={168}
              height={24}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-[#008095] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              เหตุผลที่ Godeok First Dental<br />
              พิเศษ
            </h2>
          </div>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">

          {/* Reason 1: 통합치의학과 전문의 + 대학병원 외래교수 */}
          <FadeInSection delay={100} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ผู้เชี่ยวชาญที่สอนทันตแพทย์
                <br />
                <span className="text-[#008095]">ผู้เชี่ยวชาญทันตกรรมบูรณาการ</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                อดีตอาจารย์พิเศษ โรงพยาบาลทันตกรรม มหาวิทยาลัยโชซอน<br />
                สำเร็จหลักสูตรรากฟันเทียมเกียรตินิยม บัณฑิตวิทยาลัยทันตแพทยศาสตร์ มหาวิทยาลัยโซล<br />
                <span className="font-bold text-[#333]">ผู้เชี่ยวชาญทันตกรรมบูรณาการ</span>ตรวจรักษาด้วยตนเอง
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="ใบรับรองและประกาศนียบัตรทันตแพทย์"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">ใบรับรอง · ประกาศนียบัตร</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="ประวัติทันตแพทย์"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">ประวัติทันตแพทย์</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Reason 2: 풍부한 수술 경험 */}
          <FadeInSection delay={200} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                รากฟันเทียม 1,200+ ครั้ง
                <br />
                <span className="text-[#008095]">ผ่าตัดซ้ำ 0 ครั้ง</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ตั้งแต่เปิดคลินิกที่ Godeok Edu Town จนถึงปัจจุบัน<br />
                ไม่มีการผ่าตัดรากฟันเทียมซ้ำแม้แต่ครั้งเดียว<br />
                <span className="font-bold text-[#333]">ฝีมือที่พิสูจน์ด้วยผลลัพธ์</span>
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="ภาพการผ่าตัดรากฟันเทียม"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8] space-y-3">
                {[
                  { label: 'การฝังรากฟันเทียม', value: '1,200+ ครั้ง' },
                  { label: 'ผ่าตัดซ้ำหลังเปิดคลินิก', value: '0 ครั้ง' },
                  { label: 'ความพึงพอใจผู้ป่วย', value: '4.9 / 5.0' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[14px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.label}</span>
                    <span className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Reason 3: 디지털 정밀 수술 */}
          <FadeInSection delay={300} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                การวินิจฉัยดิจิทัล 3D
                <br />
                <span className="text-[#008095]">การผ่าตัดแม่นยำเฉพาะบุคคล</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ฝังรากฟันเทียมในตำแหน่งที่เหมาะสมที่สุด<br />
                ตามสภาพกระดูกผ่านการวิเคราะห์ CT 3D และไกด์ดิจิทัล<br />
                <span className="font-bold text-[#333]">แผลเล็ก ปลูกกระดูกน้อย</span> ฟื้นตัวเร็ว
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="ไกด์การผ่าตัดรากฟันเทียมดิจิทัล 3D"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'การวิเคราะห์ CT 3D อย่างแม่นยำ', desc: 'วิเคราะห์ความหนาแน่นและความหนาของกระดูกด้วย 3D อย่างแม่นยำ' },
                  { title: 'ไกด์การผ่าตัดดิจิทัล', desc: 'ฝังรากฟันเทียมอย่างแม่นยำตามที่ออกแบบ' },
                  { title: 'อุปกรณ์ทันสมัยครบครัน', desc: 'มีเครื่องสแกนและระบบดิจิทัลแล็บ' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="bg-[#008095] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Reason 4: 사후 관리 */}
          <FadeInSection delay={400} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                หลังการผ่าตัด
                <br />
                <span className="text-[#008095]">ดูแลรับผิดชอบจนจบ</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ทันตแพทย์ดูแลเองตั้งแต่การปรึกษา การผ่าตัด<br />
                จนถึงการดูแลรักษา ไม่มีการเปลี่ยนแพทย์ระหว่างทาง<br />
                <span className="font-bold text-[#333]">ทันตแพทย์คนเดียวกันตั้งแต่ต้นจนจบ</span>
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] space-y-4">
                {[
                  { icon: '🔍', title: 'ตรวจสุขภาพประจำ', desc: 'ตรวจสภาพทุก 6 เดือน' },
                  { icon: '🦷', title: 'ทำความสะอาดโดยผู้เชี่ยวชาญ', desc: 'ขูดหินปูนป้องกันการอักเสบรอบรากฟันเทียม' },
                  { icon: '📋', title: 'แผนดูแลเฉพาะบุคคล', desc: 'การดูแลรักษาที่ปรับตามสภาพผู้ป่วยแต่ละคน' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-[#333] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
