'use client';

import Image from 'next/image';

export default function SedationSection() {

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'อุปกรณ์ตรวจสอบผู้ป่วย',
      title: 'อุปกรณ์ตรวจสอบผู้ป่วย',
      objectFit: 'object-cover'
    }
  ];


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
                  รักษาฟันขณะหลับสบาย
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
                    เป็นวิธีการรักษาที่ผู้ป่วยรับการรักษาในสภาพเหมือนง่วงนอนเล็กน้อย และจะจำเหตุการณ์ระหว่างการรักษาไม่ค่อยได้
                    <br /><br />
                    เนื่องจากช่วยให้ผ่อนคลายในขณะที่ยังมีสติอยู่ ผู้ป่วยสามารถแสดงออกและตอบสนองต่อสภาพของตนเองได้ระหว่างการรักษา จึงมีความปลอดภัยสูง
                  </p>
                </div>
              </div>

              {/* 안전성 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    ความปลอดภัย
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'ทำหัตถการในขณะที่ยังมีสติอยู่',
                    'แพทย์เฉพาะทางตรวจสอบความดันโลหิต ชีพจร และค่าออกซิเจนในเลือด',
                    'ใช้ยาที่ได้รับการยอมรับระดับสากล',
                    'ไม่ใช่การดมยาสลบทั่วตัว จึงมีผลข้างเคียงและอาการแทรกซ้อนต่ำมาก',
                    'มียาต้านฤทธิ์พร้อมใช้เพื่อให้ตื่นได้ทุกเมื่อ',
                    'ป้องกันการเคลื่อนไหวกะทันหันจากความกลัวและความวิตกกังวลระหว่างการรักษาฟัน'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
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
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    ความสบาย
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'สามารถทำการระงับความรู้สึกได้ด้วยการฉีดยาง่ายๆ',
                    'หลังหัตถการเสร็จ จะเหลือเพียงความรู้สึกสบายระหว่างการรักษา',
                    'จำได้แต่ความรู้สึกผ่อนคลายและมั่นคง ทำให้มีความมั่นใจในการรักษาฟัน',
                    'ค่าใช้จ่ายไม่สูงและทำหัตถการได้ง่าย'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
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
              <div className="bg-gradient-to-r from-[#008095]/10 to-[#006d80]/10 p-5 rounded-2xl w-full border border-[#008095]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#008095]">
                    💡 การรักษาพิเศษที่ไม่ใช่ทุกคนสามารถทำได้
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    การระงับความรู้สึกแบบมีสติไม่ใช่การรักษาธรรมดา เป็นวิธีการรักษาเฉพาะทางที่สามารถทำได้เฉพาะในคลินิกทันตกรรมที่มี<span className="font-bold text-[#008095]">ทีมแพทย์ที่ผ่านการอบรมเฉพาะทาง</span>และ<span className="font-bold text-[#008095]">อุปกรณ์ตรวจสอบผู้ป่วยและอุปกรณ์ฉุกเฉิน</span>พร้อม
                  </p>
                </div>
              </div>

              {/* 전문 장비 */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={certifications[0].image}
                    alt={certifications[0].alt}
                    fill
                    className={certifications[0].objectFit}
                  />
                </div>
                <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center w-full">
                  {certifications[0].title}
                </p>
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
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        ยาชาทา/กลั้วปาก
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        ยาชาผิวเพื่อกำจัดความเจ็บ<br />
                        จากเข็มฉีดยาก่อนการระงับความรู้สึก
                      </p>
                    </div>
                  </div>

                  {/* Step 2: 통증완화 전동마취기 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        เครื่องฉีดยาชาไฟฟ้าลดปวด
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        คอมพิวเตอร์ควบคุมความเร็วการฉีดอัตโนมัติ<br />
                        เพื่อลดความเจ็บปวดให้น้อยที่สุด
                      </p>
                    </div>
                  </div>

                  {/* Step 3: 신경관마취기 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        เครื่องฉีดยาชาเส้นประสาท
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        ฉีดยาชาโดยตรงใกล้เส้นประสาท<br />
                        เพื่อบรรเทาอาการปวดอย่างสมบูรณ์แบบ
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
