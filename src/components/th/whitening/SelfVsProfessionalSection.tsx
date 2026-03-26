'use client';

import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 top-[149px] w-[375px] pointer-events-none">
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
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                ฟอกสีฟันเองที่บ้าน กับ<br />
                ฟอกสีฟันโดยผู้เชี่ยวชาญ ต่างกันอย่างไร
              </h2>
              <div className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                <p className="mb-0">
                  ยาฟอกสีฟันที่ใช้ในคลินิกเป็น <span className="text-[#008095]">ยาที่จัดเป็นเวชภัณฑ์</span>
                </p>
                <p className="mb-0">
                  ใช้<span className="text-[#008095]">ไฮโดรเจนเปอร์ออกไซด์ความเข้มข้นสูง</span>
                </p>
                <p className="mb-0">
                  อาจทำลายเหงือกได้ จึงต้องให้<span className="text-[#008095]">ผู้เชี่ยวชาญ</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#008095]">ปกป้องอย่างสมบูรณ์ก่อนทำ</span> จึงปลอดภัยกว่ามาก
                </p>
                <p>และเห็นผลทันที</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 w-full">
            {/* Card 1: 셀프 치아 미백 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      ฟอกสีฟันด้วยตัวเอง
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'ยาเข้มข้นต่ำ', desc: 'เป็นยาทั่วไป ผลจำกัด' },
                      { title: 'ผลช้า', desc: 'ใช้เวลาหลายสัปดาห์ถึงหลายเดือน' },
                      { title: 'เสี่ยงไม่ปลอดภัย', desc: 'ใช้ผิดอาจทำลายเหงือก' },
                      { title: 'ผลไม่สม่ำเสมอ', desc: 'สีฟันไม่ขาวเท่ากัน' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#FF1616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 치과 전문가 미백 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      ฟอกสีฟันโดยผู้เชี่ยวชาญ
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'ยาเข้มข้นสูง', desc: 'ไฮโดรเจนเปอร์ออกไซด์เกรดแพทย์ ผลแรง' },
                      { title: 'ผลทันที', desc: 'เห็นผลชัดใน 1-3 ชั่วโมง' },
                      { title: 'ปลอดภัย 100%', desc: 'ปกป้องเหงือกก่อนทำ ป้องกันเสียหาย' },
                      { title: 'สีสม่ำเสมอ', desc: 'ผู้เชี่ยวชาญทำอย่างแม่นยำ' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
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
