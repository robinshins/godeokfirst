'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhiteningPeroxideSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
              ฟอกสีฟันโดยผู้เชี่ยวชาญ<br />
              ด้วยไฮโดรเจนเปอร์ออกไซด์
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              ยาฟอกสีฟันเกรดแพทย์ความเข้มข้นสูง<br />
              ปลอดภัยและได้ผลจริง
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Osstem Beautis */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  ระบบ Osstem Beautis ฟอกสีฟัน
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                ระบบฟอกสีฟันระดับพรีเมียมจาก Osstem บริษัทรากฟันเทียมอันดับ 1 ของเกาหลี
              </p>

              {/* Beautis whitening agent image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Osstem Beautis whitening agent"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light device image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="Osstem Beautis Light device"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis 15:</span> 15% ไฮโดรเจนเปอร์ออกไซด์ + สารกระตุ้นพิเศษ ฟอกสีฟันเร็ว
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> LED ความเข้ม (150-220mW/㎠) เพิ่มประสิทธิภาพฟอกสีฟัน
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">มีสารป้องกันเสียวฟัน:</span> สูตรปลอดภัยลดอาการเสียวฟัน
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment principle */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  หลักการทำ
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  ไฮโดรเจนเปอร์ออกไซด์เกรดแพทย์ (15%) ซึมผ่านเคลือบฟัน ออกซิไดซ์และสลายโมเลกุลคราบสีในเนื้อฟัน<br />
                  คราบสีเปลี่ยนเป็นโมเลกุลเล็กไม่มีสี ทำให้ฟันขาวอย่างธรรมชาติ
                </p>
                {/* H2O2 image */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Hydrogen peroxide whitening principle"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Treatment process */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  ขั้นตอนการทำ
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'ทาสารปกป้องเหงือก (ป้องกันเหงือกเสียหาย)',
                    'ทายาฟอกสีฟันความเข้มข้นสูง',
                    'ฉาย LED (15-20 นาที)',
                    'ทำซ้ำ 2-3 ครั้ง (เสร็จวันเดียว)',
                    'ทาฟลูออไรด์ปิดท้าย'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#008095] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'ไม่กรอฟันเลย', desc: 'ไม่ทำลายเคลือบฟัน' },
                { title: 'เห็นผลทันที', desc: 'ฟันสว่างขึ้น 2-8 เฉด หลังทำ' },
                { title: 'สีธรรมชาติ', desc: 'ฟันขาวขึ้นตามโทนเดิม' }
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

          {/* Professional vs Self */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
              ทำไมต้องฟอกสีฟันโดยผู้เชี่ยวชาญ?
            </h3>

            {/* Safety */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5.5v5C3 15 5.6 18.6 10 20c4.4-1.4 8-5 8-9.5v-5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  ความปลอดภัยที่ทันตแพทย์ทั่วโลกยอมรับ
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                การฟอกสีฟันเป็นวิธีรักษาฟันที่ปลอดภัยที่สุดที่ทันตแพทย์ทั่วโลกยอมรับ งานวิจัยและคลินิกจำนวนมากพิสูจน์ความปลอดภัยแล้ว และการฟอกสีฟันโดยผู้เชี่ยวชาญภายใต้การดูแลของทันตแพทย์แทบไม่มีรายงานผลข้างเคียงต่อฟัน
              </p>
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                <div className="bg-[#008095] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">ผู้เชี่ยวชาญ</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">ทำเอง</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% เข้มข้นสูง</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">ยาเกรดแพทย์</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% เข้มข้นต่ำ</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">ผลน้อย</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">วันเดียว</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">สว่างขึ้น 3-4 เฉด</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4 สัปดาห์+</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">ค่อยๆ เห็นผลน้อย</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">ตรวจก่อนทำ</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ ทาฟลูออไรด์</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">ทำเอง</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">เสี่ยงเหงือกไหม้</p>
                </div>
              </div>
            </div>

            {/* Side effect management */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  จัดการผลข้างเคียงอย่างเป็นระบบ
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'ตรวจก่อนทำ:', text: 'เช็คฟันผุ โรคเหงือก ก่อนทำอย่างปลอดภัย' },
                  { label: 'ปกป้องเหงือก:', text: 'สารปกป้องเกรดแพทย์ป้องกันเหงือกไหม้ 100%' },
                  { label: 'ดูแลหลังทำ:', text: 'ทาฟลูออไรด์ลดอาการเสียวฟัน' },
                  { label: 'แพทย์ดูแล:', text: 'ตรวจสภาพตลอดเวลาเพื่อความปลอดภัย' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#008095] text-sm shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                      <span className="font-bold text-[#008095]">{item.label}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical experience */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  ประสบการณ์ทางคลินิกมากมาย
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">ประสบการณ์ฟอกสีฟันมากกว่า 1,000 เคส</span> มีความชำนาญกับสภาพฟันหลากหลาย วางแผนฟอกสีฟันเฉพาะบุคคลโดยพิจารณาระดับคราบสี ความไวของฟัน และครอบฟันเดิม
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              คำถามที่พบบ่อย
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: 'ฟอกสีฟันแล้วเสียวฟันไหม?',
                  answer: 'อาจมีอาการเสียวฟันเล็กน้อยชั่วคราว แต่ยา Beautis มีสารป้องกันเสียวฟัน หลังทำจะทาฟลูออไรด์เพื่อลดความไวเพิ่มเติม ส่วนใหญ่หายภายในไม่กี่วัน ด้วยประสบการณ์กว่า 10 ปี เราทำอย่างปลอดภัยเหมาะกับสภาพฟันของแต่ละคน'
                },
                {
                  question: 'ผลฟอกสีฟันอยู่ได้นานแค่ไหน?',
                  answer: 'ผลจากผู้เชี่ยวชาญอยู่ได้ 1-2 ปีขึ้นไป ขึ้นอยู่กับพฤติกรรมการกิน สูบบุหรี่ และการดูแลช่องปาก กาแฟ ไวน์ แกง อาจทำให้ผลหมดเร็วขึ้น ขูดหินปูนสม่ำเสมอและแปรงฟันถูกวิธีช่วยรักษาผลได้นานขึ้น'
                },
                {
                  question: 'ถ้าคราบสีกลับมา ทำซ้ำได้ไหม?',
                  answer: 'ได้ แนะนำทำซ้ำหลังจากครั้งแรก 6 เดือน-1 ปี ทำซ้ำใช้เวลาน้อยกว่าและเห็นผลเร็วกว่าครั้งแรก การ touch-up สม่ำเสมอช่วยรักษาฟันขาวต่อเนื่อง และราคาถูกกว่าครั้งแรก'
                },
                {
                  question: 'หลังฟอกสีฟันต้องระวังอะไร?',
                  answer: 'หลังทำ 24-48 ชั่วโมง หลีกเลี่ยงอาหารที่ย้อมสี (กาแฟ ไวน์ แกง กิมจิ ช็อกโกแลต) และบุหรี่ ช่วงนี้ผิวฟันมีรูเล็กๆ เปิดอยู่ทำให้ติดสีง่าย อาหารเย็นหรือร้อนจัดอาจทำให้เสียวชั่วคราว แนะนำใช้ยาสีฟันที่มีฟลูออไรด์'
                },
                {
                  question: 'ครอบฟัน เรซิน ฟอกสีได้ไหม?',
                  answer: 'ไม่ได้ ยาฟอกสีฟันสลายคราบสีเฉพาะฟันธรรมชาติ ครอบฟัน เรซิน ลามิเนตจะคงสีเดิม หลังฟอกอาจเห็นสีต่างจากฟันธรรมชาติ อาจต้องเปลี่ยนครอบฟัน ปรึกษาก่อนทำเพื่อรับคำแนะนำที่แม่นยำ'
                },
                {
                  question: 'ตั้งครรภ์หรือให้นมบุตรฟอกสีฟันได้ไหม?',
                  answer: 'ไม่แนะนำ เนื่องจากยังไม่มีงานวิจัยเพียงพอเกี่ยวกับผลกระทบของไฮโดรเจนเปอร์ออกไซด์ต่อทารกหรือน้ำนม เพื่อความปลอดภัยแนะนำรอจนหลังตั้งครรภ์และให้นมบุตรเสร็จแล้ว'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f3f6fb] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-5 flex items-start justify-between gap-3 text-left hover:bg-[#e9ebf1] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#008095] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#008095] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#008095] font-bold text-[16px] shrink-0">A.</span>
                        <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
