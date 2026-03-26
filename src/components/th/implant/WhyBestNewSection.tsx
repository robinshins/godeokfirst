'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full mb-4">
          <div className="flex justify-center mb-6 opacity-80">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={140}
              height={84}
              className="object-contain grayscale opacity-60"
            />
          </div>
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight">
            เหตุผลที่ Godeok First Dental
            <br />
            <span className="text-[#008095] relative inline-block">
              พิเศษ
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Reason 1 */}
          <FadeInSection delay={100}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[22px] font-bold text-[#3e3a3a] leading-[1.4] mb-4 break-keep">
                ในฐานะอาจารย์พิเศษโรงพยาบาลมหาวิทยาลัย<br />
                <span className="text-[#008095] text-[24px]">สอนทันตแพทย์คนอื่น<br/>เรื่องรากฟันเทียม</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                การผ่าตัดรากฟันเทียม สิ่งสำคัญที่สุดคือใครเป็นผู้ทำ
                <span className="font-bold text-[#333]"> อาจารย์พิเศษ โรงพยาบาลทันตกรรม มหาวิทยาลัยโชซอน</span> ผู้มีประสบการณ์ผ่าตัดระดับสูงจากโรงพยาบาลมหาวิทยาลัย ทำการผ่าตัดด้วยตนเอง
              </p>

              {/* 원장 이력 이미지 Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="ใบรับรองและประกาศนียบัตรทันตแพทย์"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="ประวัติทันตแพทย์และการรับรองจากกระทรวงสาธารณสุข"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
              </div>
              {/* 원장 수술 사진 */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="ภาพการผ่าตัดของทันตแพทย์"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">การรักษาโดยผู้เชี่ยวชาญทันตกรรมบูรณาการ</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">ตั้งแต่รากฟันเทียมระดับสูงจนถึงครอบฟันสุดท้าย<br/>ผู้เชี่ยวชาญที่ได้รับการรับรองจากกระทรวงสาธารณสุขดูแลด้วยตนเอง</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M22 10v6M2 10v6" /><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M12 22V12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">ที่ปรึกษาวิจัย Osstem·Point·Dentis Implant</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">ในฐานะที่ปรึกษาวิจัยของบริษัทรากฟันเทียมชั้นนำ<br/>ใช้เทคโนโลยีและอุปกรณ์ล่าสุดด้วยตนเอง</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 2 */}
          <FadeInSection delay={200}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Godeok First Dental
                <br />
                <span className="text-[#008095]">ผ่าตัด 2 ครั้งเสมอ</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                ทันตแพทย์ออกแบบตำแหน่งฝังที่เหมาะสมที่สุด
                <br />
                ผ่านการผ่าตัดรากฟันเทียมจำลองก่อนทำจริง
              </p>

              {/* 3D 디지털 가이드 이미지 */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="การผ่าตัดด้วยไกด์ดิจิทัล 3D"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              {/* 핵심 장점 배지 */}
              <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-4 mb-5 shadow-lg shadow-[#008095]/20">
                <p className="font-bold text-white text-[14px] text-center leading-[1.5]">
                  การผ่าตัดที่รวดเร็วและสะดวกสบาย
                  <br />
                  ลดอาการบวม ปวด และการปลูกกระดูกให้น้อยที่สุด
                </p>
              </div>

              {/* 5단계 프로세스 */}
              <div className="space-y-2">
                {[
                  { step: 1, title: 'สแกนช่องปาก 3D', desc: 'สแกนภายในช่องปากเพื่อวินิจฉัยอย่างแม่นยำ' },
                  { step: 2, title: 'ออกแบบการผ่าตัดจำลอง', desc: 'วางแผนตำแหน่งฝังที่เหมาะสมที่สุดบนคอมพิวเตอร์' },
                  { step: 3, title: 'ติดตั้งไกด์', desc: 'อุปกรณ์นำทางที่แม่นยำไม่มีความคลาดเคลื่อนแม้ 1 มม.' },
                  { step: 4, title: 'ผ่าตัดแผลเล็ก', desc: 'ลดเวลาผ่าตัด ลดอาการปวด/บวม' },
                  { step: 5, title: 'ตรวจสอบการผ่าตัดจำลอง', desc: 'ลดความคลาดเคลื่อน เพิ่มความพึงพอใจ' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3 bg-[#f8fbfd] p-3 rounded-xl border border-[#eef4f8]">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#008095] to-[#006B7A] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-white text-[12px] font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#333]">{item.title}</p>
                      <p className="text-[12px] text-[#888]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 3 */}
          <FadeInSection delay={300}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                รากฟันเทียมไม่ผ่าเหงือก &
                <br />
                <span className="text-[#008095]">ฝังในวันเดียว</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                ไม่ต้องผ่าเหงือก จึงปวดและบวมน้อย
                <br />
                ฟื้นตัวได้เร็ว
              </p>

              {/* 수술실 이미지 */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/goduk_images/flapless-implant-surgery.webp"
                    alt="การผ่าตัดรากฟันเทียมไม่ผ่าเหงือก"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-5 text-white shadow-lg shadow-[#008095]/20">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                    <span className="font-black text-lg">01</span>
                    <span className="font-bold">รากฟันเทียมไม่ผ่าเหงือก</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-white font-medium">
                    <li>• ฝังผ่านรูเล็กโดยไม่ต้องผ่าเหงือก</li>
                    <li>• ลดเลือดออก ปวด และบวมให้น้อยที่สุด</li>
                    <li>• กลับสู่ชีวิตประจำวันได้เร็วหลังผ่าตัด</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#edf2f7] rounded-xl p-5 text-[#333]">
                   <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <span className="font-black text-lg text-[#008095]">02</span>
                    <span className="font-bold">ฝังในวันเดียวหลังถอนฟัน</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li>• ฝังรากฟันเทียมพร้อมกับการถอนฟัน</li>
                    <li>• ลดจำนวนครั้งที่ต้องมาพบแพทย์และระยะเวลาการรักษา</li>
                    <li>• ลดการสูญเสียกระดูกเหงือก</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 4 */}
          <FadeInSection delay={400}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                สิ่งที่กำหนดอายุการใช้งานรากฟันเทียม
                <br />
                <span className="text-[#008095]">การดูแลหลังการรักษาเชิงวิทยาศาสตร์</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                สาเหตุหลักของความล้มเหลวของรากฟันเทียมคือ &apos;การอักเสบ&apos;<br/>
                วิเคราะห์แม้แต่<span className="font-bold text-[#333]">แบคทีเรียอันตรายในช่องปาก</span>ที่มองไม่เห็น<br/>
                ป้องกันการอักเสบรอบรากฟันเทียมตั้งแต่ต้นทาง
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] mb-3 space-y-4">
                <div>
                   <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    การดูแลสำคัญกว่าการฝัง
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    รากฟันเทียมเสี่ยงต่อการอักเสบมากกว่าฟันธรรมชาติ<br/>
                    วิเคราะห์การกระจายของแบคทีเรียด้วยการตรวจอย่างละเอียด<br/>
                    ยืดอายุการใช้งานอย่างมากด้วยการดูแลเฉพาะบุคคล
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    ระบบป้องกันการอักเสบรอบรากฟันเทียมด้วยข้อมูล
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      ติดตามแบคทีเรียที่ทำให้เกิดการอักเสบรอบรากฟันเทียม
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      มาตรการป้องกันเชิงรุกก่อนเกิดการอักเสบ
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      การดูแลตลอดชีวิตบนพื้นฐานข้อมูลที่เป็นกลาง
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-[13px] text-[#888] bg-gray-50 p-3 rounded-lg leading-[1.5] border border-gray-100">
                <span className="font-bold text-[#008095]">Doctor&apos;s Note.</span> มูลค่าของฟันธรรมชาติประมาณ 30 ล้านวอน เราจะปกป้องฟันอันมีค่าของคุณด้วยการตรวจอย่างละเอียด
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 5 */}
          <FadeInSection delay={500}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">5</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 05</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                ฝังน้อย ผ่าน้อย
                <br />
                <span className="text-[#008095]">ปลูกกระดูกน้อย</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                ด้วยการวินิจฉัยดิจิทัลที่แม่นยำ
                <br />
                ทำการรักษาเท่าที่จำเป็นเท่านั้น
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'ฝังน้อย', desc: 'ฝังเพียง 6 ซี่บน 4 ซี่ล่างก็ยึดแน่น' },
                  { title: 'ผ่าน้อย', desc: 'ผ่าตัดแผลเล็ก ฟื้นตัวเร็ว' },
                  { title: 'ปลูกกระดูกน้อย', desc: 'วินิจฉัยแม่นยำ ปลูกกระดูกเท่าที่จำเป็น' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#f0f9ff] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#333] mb-0.5">{item.title}</p>
                      <p className="text-[13px] text-[#777] leading-[1.4]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
