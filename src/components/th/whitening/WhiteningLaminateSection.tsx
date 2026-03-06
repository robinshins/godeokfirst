'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function WhiteningLaminateSection() {
  const [showImages] = useState(false);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              ทำไม? Medis<br />
              <span className="text-[#006aff]">วีเนียร์ดิจิทัลไม่กรอ/กรอน้อย</span>?
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              ด้วยอุปกรณ์ดิจิทัลล้ำสมัยและ<br />
              การรับประกัน 2 ปี เพื่อรอยยิ้มที่สมบูรณ์แบบ
            </p>
          </div>

          {/* Before/After Images */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              ผลงานจริงของเรา
            </h3>

            {/* Case 1 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-before.jpg"
                      alt="Before Laminate"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/th/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="Lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">เข้าสู่ระบบเพื่อดูภาพ Before</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-after.jpg"
                      alt="After Laminate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-before.jpg"
                      alt="Before Laminate"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/th/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="Lock"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">เข้าสู่ระบบเพื่อดูภาพ Before</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-after.jpg"
                      alt="After Laminate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}
            {!showImages && (
              <Link href="/th/login" className="w-full">
                <button className="bg-white border border-[#e9ebf1] rounded-[18px] h-14 px-6 py-3 flex items-center justify-center w-full hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-[#006aff]">
                    เข้าสู่ระบบเพื่อดูทั้งหมด
                  </p>
                </button>
              </Link>
            )}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* What is Laminate? */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  วีเนียร์คืออะไร?
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  เป็นการติดชิ้นเซรามิก (พอร์ซเลน) บางเพียง 0.3-0.7 มม. บนพื้นผิวด้านหน้าของฟัน<br />
                  เหมือนกับการทำเล็บเจล แต่เป็น &apos;การเคลือบฟันขาวถาวร&apos;
                </p>
              </div>
            </div>

            {/* 3 Key Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'เสร็จภายใน 24 ชั่วโมง', desc: 'รักษาเร็ว กลับสู่ชีวิตประจำวันได้ทันที (สำหรับคนทำงาน OK!)' },
                { title: 'รับประกัน 2 ปี', desc: 'แตกหรือเปลี่ยนสี แก้ไขได้ทันที' },
                { title: 'ราคาสมเหตุสมผล', desc: 'นโยบายราคาโปร่งใส ผ่อนชำระได้' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Manufacturing Process */}
          <div className="flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
              ระบบการผลิตดิจิทัลที่แม่นยำ
            </h3>

            {/* 3D Digital Scan Video */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/digital-laminate-3d.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-3">
                <div>
                  <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                    ขั้นตอนที่ 1: วินิจฉัยเสมือนจริงด้วยระบบดิจิทัล
                  </p>
                  <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                    ไม่ต้องพิมพ์ปากแบบเดิม ใช้เครื่องสแกนช่องปากสร้างภาพ 3D ของฟัน ข้อมูลดิจิทัลช่วยให้วินิจฉัยและจำลองผลลัพธ์ได้อย่างแม่นยำ
                  </p>
                </div>

                {/* Virtual Diagnosis Features */}
                <div className="bg-white rounded-[12px] p-3 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">ดูผลก่อนทำจริง:</span> ด้วยการวินิจฉัยเสมือนจริง ดูผลลัพธ์ล่วงหน้าก่อนรักษา
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">ออกแบบให้เข้ากับใบหน้า:</span> ไม่ต้องกังวลว่าจะขาวเกินไปหรือดูไม่เป็นธรรมชาติ ออกแบบรอยยิ้มที่เหมาะกับใบหน้าของคุณ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milling Machine Video */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/milling-machine.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  ขั้นตอนที่ 2: ผลิตด้วยเครื่องมิลลิ่งอย่างรวดเร็ว
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  เครื่องมิลลิ่งล้ำสมัยแกะสลัก VITA MARK II Block อย่างแม่นยำ เซรามิกที่มีความแข็งแรงใกล้เคียงฟันธรรมชาติที่สุด เสร็จภายใน 24 ชั่วโมง
                </p>
              </div>
            </div>

            {/* Laminate Attachment Video */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/laminate-fitting.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  ขั้นตอนที่ 3: ติดวีเนียร์อย่างแม่นยำ
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  ตรวจสอบชิ้นงานก่อนติด แล้วใช้กล้องจุลทรรศน์ติดอย่างแม่นยำ โดยไม่กรอหรือกรอน้อยที่สุด
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              ความเชี่ยวชาญของ Medis Dental
            </h3>

            {/* Aesthetic Dentistry Fellow Photo */}
            <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-[16/10]">
              <div className="relative w-full h-full -translate-x-[5%]">
                <Image
                  src="/images/cosmetic-dentistry-fellow.jpg"
                  alt="Aesthetic Dentistry Fellow Certificate"
                  fill
                  className="object-cover scale-[1.5]"
                />
              </div>
            </div>

            {/* Fellow Description */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🏆</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  สมาชิก Fellow สมาคมทันตกรรมเพื่อความงามแห่งเกาหลี
                </p>
              </div>
              <div className="flex flex-col gap-2 text-white">
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] opacity-90">
                  <span className="font-bold">Fellow</span> คือระดับผู้เชี่ยวชาญสูงสุด เหนือกว่าแพทย์เฉพาะทางทั่วไป
                </p>
                <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">ประสบการณ์มากกว่า 10 ปี</span> + เคสสำเร็จมากกว่า 100 เคส
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">ตีพิมพ์งานวิจัยและกิจกรรมวิชาการ</span> ได้รับการยอมรับเป็นผู้เชี่ยวชาญ
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">ผ่านการตรวจสอบจากสมาคม</span> ฝีมือระดับสูงสุด
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: '🏭', title: 'ระบบทำงานร่วมกับช่างทันตกรรมในคลินิก', desc: 'ผลิตและแก้ไขได้ทันทีในห้องแล็บภายในคลินิก' },
                { icon: '🔬', title: 'รักษาไม่กรอด้วยกล้องจุลทรรศน์', desc: 'ลดความเสียหายต่อฟัน รักษาฟันธรรมชาติ' },
                { icon: '💎', title: 'VITA MARK II Premium Block', desc: 'ความแข็งแรงและสีใกล้เคียงฟันธรรมชาติมากที่สุด' }
              ].map((item, index) => (
                <div key={index} className="bg-[#f3f6fb] rounded-[16px] p-4 flex items-start gap-3">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                      {item.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/th/consultation" className="w-full">
            <button className="bg-[#006aff] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#0052cc] transition-colors">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white">
                นัดปรึกษาวีเนียร์
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
