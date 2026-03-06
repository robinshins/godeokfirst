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
              สัมผัสการฟอกสีฟันที่ปลอดภัยและมีประสิทธิภาพ<br />
              ด้วยน้ำยาฟอกสีฟันความเข้มข้นสูงระดับทางการแพทย์
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Osstem Beautis System */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  ระบบฟอกสีฟัน Osstem Beautis
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                ระบบฟอกสีฟันระดับพรีเมียมจาก Osstem บริษัทรากฟันเทียมอันดับ 1 ของเกาหลี
              </p>

              {/* Beautis Product Images */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="น้ำยาฟอกสีฟัน Osstem Beautis"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light Device Image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="เครื่อง Osstem Beautis Light"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">น้ำยา Beautis 15:</span> ไฮโดรเจนเปอร์ออกไซด์ 15% + สารกระตุ้นพิเศษ ให้ผลฟอกสีเร็ว
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> แสง LED กำลังสูง (150-220mW/cm2) เพิ่มประสิทธิภาพการฟอกสี
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">มีสารป้องกันอาการเสียวฟัน:</span> สูตรปลอดภัยที่ลดอาการเสียวฟัน
                  </p>
                </div>
              </div>
            </div>

            {/* Mechanism */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  หลักการทำงาน
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  ไฮโดรเจนเปอร์ออกไซด์ความเข้มข้นสูง (15%) ระดับทางการแพทย์ซึมผ่านชั้นเคลือบฟันเข้าไปออกซิไดซ์และสลายโมเลกุลคราบสกปรกในเนื้อฟัน<br />
                  ในกระบวนการนี้ สารที่ทำให้ฟันเปลี่ยนสีจะถูกเปลี่ยนเป็นโมเลกุลขนาดเล็กที่ไม่มีสี ทำให้ฟันขาวขึ้นอย่างเป็นธรรมชาติ
                </p>
                {/* H2O2 Reaction Image */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="หลักการฟอกสีฟันด้วยไฮโดรเจนเปอร์ออกไซด์"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  ขั้นตอนการรักษา
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'ทาสารป้องกันเหงือก (ป้องกันเหงือกเสียหาย)',
                    'ทาน้ำยาฟอกสีความเข้มข้นสูง',
                    'ฉายแสง LED (15-20 นาที)',
                    'ทำซ้ำ 2-3 รอบ (เสร็จในวันเดียว)',
                    'เคลือบฟลูออไรด์เสริม'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#006aff] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'ไม่ต้องกรอฟัน', desc: 'ไม่ทำลายชั้นเคลือบฟัน' },
                { title: 'เห็นผลทันที', desc: 'ฟันขาวขึ้น 2-8 เฉดหลังทำ' },
                { title: 'สีธรรมชาติ', desc: 'ปรับโทนสีฟันเดิมให้ขาวขึ้น' }
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

          {/* Professional vs Self Whitening */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              ทำไมต้องฟอกสีฟันโดยผู้เชี่ยวชาญ?
            </h3>

            {/* Safety Verification */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  ความปลอดภัยที่ทันตแพทย์ทั่วโลกยอมรับ
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                การฟอกสีฟันเป็นวิธีรักษาฟันที่ปลอดภัยที่สุดตามที่ทันตแพทย์ทั่วโลกยอมรับ มีการวิจัยและทดลองทางคลินิกมากมายที่พิสูจน์ความปลอดภัย การฟอกสีฟันโดยผู้เชี่ยวชาญภายใต้การดูแลของทันตแพทย์แทบไม่มีรายงานผลข้างเคียงต่อฟันจนถึงปัจจุบัน
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">ฟอกโดยผู้เชี่ยวชาญ</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">ฟอกด้วยตัวเอง</p>
                </div>

                {/* Concentration */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">ความเข้มข้นสูง 15%</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">ระดับทางการแพทย์ได้รับอนุญาต</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">ความเข้มข้นต่ำ 1-4%</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">ประสิทธิภาพน้อย</p>
                </div>

                {/* Effect */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">วันเดียว</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">ขาวขึ้น 3-4 เฉด</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4 สัปดาห์ขึ้นไป</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">ค่อยๆ เห็นผลเพียงเล็กน้อย</p>
                </div>

                {/* Safety */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">ตรวจช่องปากก่อนทำ</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ เคลือบฟลูออไรด์</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">ทำด้วยตัวเอง</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">เสี่ยงเหงือกไหม้</p>
                </div>
              </div>
            </div>

            {/* Side Effect Management */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  การจัดการผลข้างเคียงอย่างเป็นระบบ
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">ตรวจก่อนทำ:</span> ตรวจฟันผุและโรคเหงือกก่อนเริ่มอย่างปลอดภัย
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">ปกป้องเหงือก:</span> ป้องกันเนื้อเยื่ออ่อนไหม้ 100% ด้วยสารป้องกันทางการแพทย์
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">ดูแลหลังทำ:</span> เคลือบฟลูออไรด์และฟื้นฟูแร่ธาตุเพื่อลดอาการเสียวฟัน
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">ติดตามโดยทันตแพทย์:</span> ฟอกสีฟันอย่างปลอดภัยด้วยการตรวจสอบสถานะแบบเรียลไทม์
                  </p>
                </div>
              </div>
            </div>

            {/* Clinical Experience */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  ประสบการณ์ทางคลินิกที่หลากหลาย
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  ด้วย<span className="font-bold">ประสบการณ์ฟอกสีฟันมากกว่า 1,000 เคส</span> เรามีความเชี่ยวชาญในสภาพฟันหลากหลาย เราวางแผนการฟอกสีฟันที่เหมาะสมกับแต่ละบุคคล โดยพิจารณาระดับคราบสกปรก ความไวของฟัน และงานทันตกรรมเดิม
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
                  question: 'หลังฟอกสีฟันจะเสียวฟันไหม?',
                  answer: 'อาจมีอาการเสียวฟันเล็กน้อยชั่วคราว แต่น้ำยาฟอกสี Beautis มีสารป้องกันอาการเสียวฟัน จึงลดอาการเสียวได้มาก หลังทำจะเคลือบฟลูออไรด์และฟื้นฟูแร่ธาตุเพื่อลดความไวเพิ่มเติม ส่วนใหญ่จะหายภายในไม่กี่วัน ด้วยประสบการณ์ทางคลินิกกว่า 10 ปี เราดำเนินการอย่างปลอดภัยตามสภาพฟันของแต่ละคน'
                },
                {
                  question: 'ผลการฟอกสีฟันอยู่ได้นานแค่ไหน?',
                  answer: 'ผลการฟอกสีฟันโดยผู้เชี่ยวชาญอยู่ได้ประมาณ 1-2 ปีขึ้นไป ขึ้นอยู่กับพฤติกรรมการกิน การสูบบุหรี่ และการดูแลช่องปาก หากดื่มกาแฟ ไวน์ แกงกะหรี่ หรืออาหารที่ทำให้ฟันเปลี่ยนสีบ่อย หรือสูบบุหรี่ ระยะเวลาอาจสั้นลง การขูดหินปูนเป็นประจำและการแปรงฟันอย่างถูกวิธีจะช่วยรักษาผลฟอกสีให้นานขึ้น'
                },
                {
                  question: 'ถ้ามีคราบสกปรกกลับมา สามารถทำซ้ำได้ไหม?',
                  answer: 'ได้ สามารถทำซ้ำได้ แนะนำให้ทำซ้ำหลังจากฟอกสีครั้งแรก 6 เดือนถึง 1 ปี ซึ่งจะใช้เวลาและจำนวนครั้งน้อยกว่าครั้งแรก การทำ touch-up เป็นประจำช่วยรักษาฟันขาวได้ต่อเนื่อง และค่าใช้จ่ายก็ถูกกว่าครั้งแรก'
                },
                {
                  question: 'หลังฟอกสีฟันต้องระวังอะไรบ้าง?',
                  answer: 'หลังฟอกสีฟัน 24-48 ชั่วโมง ควรหลีกเลี่ยงอาหารที่ทำให้ฟันเปลี่ยนสี (กาแฟ ไวน์ แกงกะหรี่ กิมจิ ช็อกโกแลต ฯลฯ) และบุหรี่ ช่วงเวลานี้รูเล็กๆ บนผิวฟันยังเปิดอยู่จึงเปลี่ยนสีได้ง่าย นอกจากนี้อาหารเย็นหรือร้อนอาจทำให้เสียวฟันชั่วคราว ควรระวังและแนะนำให้ใช้ยาสีฟันที่มีฟลูออไรด์'
                },
                {
                  question: 'งานทันตกรรมเดิม (ครอบฟัน, เรซิน) ฟอกสีได้ไหม?',
                  answer: 'ไม่ได้ งานทันตกรรมเทียมไม่สามารถฟอกสีได้ น้ำยาฟอกสีไฮโดรเจนเปอร์ออกไซด์สลายเฉพาะคราบสกปรกในฟันธรรมชาติ ครอบฟัน เรซิน วีเนียร์ จะคงสีเดิม ดังนั้นหากมีงานทันตกรรมเทียม หลังฟอกสีอาจมีความแตกต่างของสีระหว่างงานทันตกรรมและฟันธรรมชาติ อาจต้องพิจารณาเปลี่ยนงานทันตกรรม สามารถรับคำปรึกษาที่ถูกต้องก่อนทำได้'
                },
                {
                  question: 'ตั้งครรภ์หรือให้นมบุตร ฟอกสีฟันได้ไหม?',
                  answer: 'ไม่แนะนำให้ฟอกสีฟันระหว่างตั้งครรภ์หรือให้นมบุตร เนื่องจากยังไม่มีงานวิจัยเพียงพอเกี่ยวกับผลกระทบของไฮโดรเจนเปอร์ออกไซด์ต่อทารกหรือน้ำนม เพื่อความปลอดภัยแนะนำให้ทำหลังจากตั้งครรภ์และให้นมบุตรเสร็จสิ้น'
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
                      <span className="text-[#006aff] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#006aff] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#006aff] font-bold text-[16px] shrink-0">A.</span>
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
