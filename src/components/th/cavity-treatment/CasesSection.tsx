'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const cases = [
  {
    num: '01',
    tag: 'รักษาฟันผุ',
    title: 'ฟันกรามผุ อุดเรซิน',
    summary: 'กำจัดส่วนที่ผุอย่างแม่นยำและบูรณะด้วยเรซินสีเดียวกับฟันธรรมชาติอย่างเรียบร้อย',
    steps: [
      {
        img: '/임상사진/충치/김효연_충치_before.jpg',
        label: 'สภาพก่อนรักษา',
        desc: 'ฟันกรามมีอาการผุลุกลาม พบรอยเปลี่ยนสีและความเสียหายจากฟันผุบนผิวฟัน',
      },
      {
        img: '/임상사진/충치/김효연_충치_after.jpg',
        label: 'รักษาเสร็จสมบูรณ์',
        desc: 'กำจัดฟันผุออกทั้งหมดและบูรณะด้วยเรซินสีเดียวกับฟันธรรมชาติ รูปทรงฟันกลับมาเรียบร้อยสมบูรณ์',
      },
    ],
  },
  {
    num: '02',
    tag: 'รักษาฟันผุ',
    title: 'ฟันผุหลายซี่ บูรณะอย่างแม่นยำ',
    summary: 'กำจัดฟันผุที่เกิดขึ้นในหลายซี่อย่างแม่นยำทีละขั้นตอนและบูรณะ',
    steps: [
      {
        img: '/임상사진/충치-1/방준영_충치_before.jpg',
        label: 'สภาพก่อนรักษา',
        desc: 'ฟันกรามหลายซี่มีอาการผุลุกลาม พบฟันผุซ้ำรอบวัสดุอุดเดิม',
      },
      {
        img: '/임상사진/충치-1/방준영_충치_after.jpg',
        label: 'รักษาเสร็จสมบูรณ์',
        desc: 'กำจัดฟันผุทั้งหมดและบูรณะด้วยวัสดุอุดที่เหมาะสมกับแต่ละซี่อย่างเป็นธรรมชาติ',
      },
    ],
  },
  {
    num: '03',
    tag: 'รักษาฟันร้าว',
    title: 'ฟันร้าว บูรณะด้วยครอบฟันทองคำ',
    summary: 'วินิจฉัยฟันที่เกิดรอยร้าวอย่างแม่นยำแล้วป้องกันด้วยครอบฟันทองคำ',
    steps: [
      {
        img: '/임상사진/크랙/김고운_크랙_실사_before.jpg',
        label: 'วินิจฉัยด้วยเอกซเรย์',
        desc: 'ถ่ายเอกซเรย์เพื่อระบุตำแหน่งและขอบเขตของรอยร้าวฟันอย่างแม่นยำ',
      },
      {
        img: '/임상사진/크랙/김고운_크랙_실사_after.jpg',
        label: 'ติดตั้งครอบฟันทองคำเสร็จสมบูรณ์',
        desc: 'ป้องกันฟันที่ร้าวด้วยครอบฟันทองคำเพื่อป้องกันการแตกหักเพิ่มเติม วัสดุทองคำมีความทนทานสูงสามารถใช้งานได้อย่างมั่นคงในระยะยาว',
      },
    ],
  },
  {
    num: '04',
    tag: 'ครอบฟันหน้า',
    title: 'บูรณะครอบฟันหน้า',
    summary: 'บูรณะฟันหน้าที่เสียหายอย่างแม่นยำเพื่อคืนความสวยงามตามธรรมชาติ',
    steps: [
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_before.jpg',
        label: 'สภาพก่อนรักษา',
        desc: 'ฟันหน้าเสียหาย จำเป็นต้องปรับปรุงทั้งด้านความสวยงามและการใช้งาน',
      },
      {
        img: '/임상사진/정재윤_앞니보철/정재윤_앞니보철_실제사진_after.jpg',
        label: 'บูรณะครอบฟันเสร็จสมบูรณ์',
        desc: 'บูรณะครอบฟันอย่างแม่นยำ ได้รูปทรงและสีใกล้เคียงฟันธรรมชาติ',
      },
    ],
  },
  {
    num: '05',
    tag: 'ทำครอบฟันหน้าใหม่',
    title: 'รักษาทำครอบฟันหน้าใหม่',
    summary: 'ถอดครอบฟันเดิมออกและบูรณะใหม่เพื่อปรับปรุงความสวยงามและการใช้งาน',
    steps: [
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_before.jpg',
        label: 'สภาพก่อนรักษา',
        desc: 'ครอบฟันเดิมเปลี่ยนสีและความพอดีลดลง จำเป็นต้องทำครอบฟันใหม่',
      },
      {
        img: '/임상사진/앞니 재보철/앞니재보철_실사_after.jpg',
        label: 'ทำครอบฟันใหม่เสร็จสมบูรณ์',
        desc: 'ถอดครอบฟันเดิมออกและบูรณะด้วยครอบฟันใหม่อย่างเป็นธรรมชาติ',
      },
    ],
  },
  {
    num: '06',
    tag: 'ครอบฟันหน้าเพื่อความสวยงาม',
    title: 'ครอบฟันหน้าเพื่อความสวยงาม (ครราวน์)',
    summary: 'ปรับปรุงความสวยงามของฟันหน้าด้วยครราวน์เพื่อคืนรอยยิ้มที่เป็นธรรมชาติ',
    steps: [
      {
        img: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_before.jpg',
        label: 'สภาพก่อนรักษา',
        desc: 'ฟันหน้าต้องการปรับปรุงรูปทรงและสี',
      },
      {
        img: '/임상사진/정민아B_앞니 보철/정민아B_앞니심미보철크라운_after.jpg',
        label: 'ครอบฟันเพื่อความสวยงามเสร็จสมบูรณ์',
        desc: 'ครอบฟันเพื่อความสวยงาม (ครราวน์) ได้รูปทรงและสีที่เป็นธรรมชาติ',
      },
    ],
  },
];

export default function CasesSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px]">
      <div className="px-5 max-w-[430px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[#008095] font-bold text-xs tracking-[0.12em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Clinical Results
          </p>
          <h2
            className="font-bold text-[28px] leading-[1.35] tracking-[-0.56px] text-[#151a24]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            ผลการรักษาฟันผุ<br />
            ตั้งแต่กระบวนการจนเสร็จสมบูรณ์
          </h2>
          <p
            className="font-semibold text-[15px] leading-[1.6] text-[#727582]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            ตรวจสอบกระบวนการรักษาจริง<br />
            ทีละขั้นตอนตั้งแต่วินิจฉัยจนเสร็จสิ้น
          </p>
        </div>

        {/* Case Accordion */}
        <div className="flex flex-col gap-3">
          {cases.map((c, idx) => {
            const isOpen = openSet.has(idx);
            return (
              <div
                key={c.num}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)', scrollMarginTop: '64px' }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-5 py-4 flex items-center gap-3 text-left"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#e6f7f8] flex items-center justify-center">
                    <span
                      className="text-[#008095] font-bold text-[13px]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[#008095] text-[11px] font-bold"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.tag}
                    </span>
                    <p
                      className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#151a24] mt-0.5"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="#9298a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 pb-6 flex flex-col gap-1">
                    {/* Summary */}
                    <p
                      className="text-[13px] font-medium text-[#727582] leading-[1.6] mb-5 pb-4 border-b border-[#f0f3f8]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {c.summary}
                    </p>

                    {/* Steps */}
                    <div className="flex flex-col">
                      {c.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex gap-0">
                          {/* Timeline */}
                          <div className="flex flex-col items-center w-8 flex-shrink-0">
                            <div className="w-6 h-6 rounded-full bg-[#008095] flex items-center justify-center flex-shrink-0 z-10">
                              <span
                                className="text-white font-bold text-[10px]"
                                style={{ fontFamily: 'Pretendard, sans-serif' }}
                              >
                                {sIdx + 1}
                              </span>
                            </div>
                            {sIdx < c.steps.length - 1 && (
                              <div className="w-px flex-1 bg-[#d1e8eb] my-1" />
                            )}
                          </div>

                          {/* Content */}
                          <div className={`flex-1 pl-3 ${sIdx < c.steps.length - 1 ? 'pb-6' : ''}`}>
                            <p
                              className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#151a24] mb-2"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              {step.label}
                            </p>
                            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-[#f3f6fb] mb-2">
                              <Image
                                src={step.img}
                                alt={step.label}
                                fill
                                className="object-cover"
                                sizes="(max-width: 430px) 100vw, 390px"
                              />
                            </div>
                            <p
                              className="text-[13px] font-medium text-[#727582] leading-[1.6]"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Step count badge */}
                    <div className="mt-4 flex items-center gap-2 pt-4 border-t border-[#f0f3f8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#008095]" />
                      <span
                        className="text-[#008095] text-[12px] font-semibold"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        กระบวนการรักษาทั้งหมด {c.steps.length} ขั้นตอน
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="bg-white rounded-2xl px-5 py-4 flex items-start gap-3" style={{ boxShadow: '0 2px 12px -4px rgba(21,26,36,0.08)' }}>
          <div className="w-8 h-8 rounded-xl bg-[#e6f7f8] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.5 11H7.5V7H8.5V11ZM8.5 6H7.5V5H8.5V6Z" fill="#008095" />
            </svg>
          </div>
          <p
            className="font-medium text-[13px] leading-[1.6] text-[#5d5f6d]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            ทุกเคสเป็นผลการรักษาจริงของ Godeok First Dental ใช้เครื่องสแกนช่องปาก Trios 5 เก็บข้อมูลอย่างแม่นยำ โดยทันตแพทย์เฉพาะทางทันตกรรมบูรณาการรักษาด้วยตนเอง
          </p>
        </div>
      </div>
    </div>
  );
}
