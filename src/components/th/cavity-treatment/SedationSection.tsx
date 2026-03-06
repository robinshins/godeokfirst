'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SedationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'อุปกรณ์มอนิเตอร์ผู้ป่วย',
      title: 'อุปกรณ์มอนิเตอร์ผู้ป่วย',
      objectFit: 'object-cover'
    },
    {
      image: '/images/sedation-dental-cpr.png',
      alt: 'ใบรับรองการช่วยชีวิตทันตกรรม',
      title: 'ใบรับรองการช่วยชีวิตทันตกรรม',
      objectFit: 'object-contain'
    },
    {
      image: '/images/sedation-certificate-overseas.png',
      alt: 'ใบรับรองการฝึกอบรมเฉพาะทาง',
      title: 'ใบรับรองการฝึกอบรมเฉพาะทาง',
      objectFit: 'object-contain'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % certifications.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Main Title */}
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              การรักษาฟัน<br />
              จะเจ็บไหม?
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  ด้วยการระงับความรู้สึกแบบมีสติ
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  รักษาขณะหลับสบาย
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* What is 의식하진정요법 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  การระงับความรู้สึกแบบมีสติคืออะไร?
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    เป็นการรักษาที่ผู้ป่วยจะรู้สึกง่วงเล็กน้อย และจะจำสิ่งที่เกิดขึ้นระหว่างการรักษาไม่ค่อยได้
                    <br /><br />
                    เนื่องจากยังมีสติอยู่แต่ผ่อนคลาย จึงสามารถแสดงออกและตอบสนองต่อสภาพของตัวเองได้ ทำให้ปลอดภัยมาก
                  </p>
                </div>
              </div>

              {/* 안전성 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    ความปลอดภัย
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'ทำหัตถการขณะมีสติ',
                    'ผู้เชี่ยวชาญตรวจวัดความดัน ชีพจร และออกซิเจน',
                    'ใช้ยาที่ได้รับการรับรองระดับสากล',
                    'ไม่ใช่การดมยาสลบจึงมีผลข้างเคียงน้อยมาก',
                    'มียาย้อนกลับให้ตื่นได้ทันที',
                    'ป้องกันการขยับกะทันหันจากความกลัวระหว่างรักษา'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-blue.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 편안함 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    ความสะดวกสบาย
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'ใช้แค่การฉีดยาง่ายๆ',
                    'หลังรักษาเสร็จจะเหลือแค่ความรู้สึกสบาย',
                    'มีแต่ความทรงจำที่ดีทำให้มั่นใจในการรักษาครั้งต่อไป',
                    'ค่าใช้จ่ายไม่สูงและทำได้ง่าย'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-blue.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 특별함 강조 */}
              <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl w-full border border-[#006aff]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff]">
                    💡 การรักษาพิเศษที่ไม่ใช่ทุกที่จะทำได้
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    การระงับความรู้สึกแบบมีสติไม่ใช่การรักษาทั่วไป ต้องมี<span className="font-bold text-[#006aff]">บุคลากรที่ผ่านการฝึกอบรมเฉพาะทาง</span>และ<span className="font-bold text-[#006aff]">อุปกรณ์มอนิเตอร์และอุปกรณ์ฉุกเฉิน</span>ที่พร้อม จึงทำได้เฉพาะคลินิกที่มีความพร้อมเท่านั้น
                  </p>
                </div>
              </div>

              {/* 전문 장비 및 자격 - 자동 전환 탭 */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                {/* 이미지 영역 */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        activeTab === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        className={cert.objectFit}
                      />
                    </div>
                  ))}
                </div>

                {/* 탭 인디케이터 */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex gap-2 justify-center w-full">
                    {certifications.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeTab === index
                            ? 'w-8 bg-[#006aff]'
                            : 'w-1.5 bg-[#d1d5db]'
                        }`}
                        aria-label={`ภาพที่ ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* 제목 */}
                  <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center">
                    {certifications[activeTab].title}
                  </p>
                </div>
              </div>

              {/* 마취 진행 과정 */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  ขั้นตอนการระงับความรู้สึก
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: 도포/가글마취 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        ยาชาเฉพาะที่/บ้วนปาก
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        ยาชาผิวหน้าเพื่อลดความเจ็บ<br />
                        จากเข็มฉีดยาก่อนการระงับความรู้สึก
                      </p>
                    </div>
                  </div>

                  {/* Step 2: 통증완화 전동마취기 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        เครื่องฉีดยาชาอัตโนมัติ
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        คอมพิวเตอร์ควบคุมความเร็วการฉีด<br />
                        ลดความเจ็บปวดให้เหลือน้อยที่สุด
                      </p>
                    </div>
                  </div>

                  {/* Step 3: 신경관마취기 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        เครื่องฉีดยาชาโดยตรงที่เส้นประสาท
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        ฉีดยาชาใกล้เส้นประสาทโดยตรง<br />
                        เพื่อการระงับปวดอย่างสมบูรณ์
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
