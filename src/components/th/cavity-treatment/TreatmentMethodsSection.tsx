'use client';

import Image from 'next/image';

export default function TreatmentMethodsSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4 relative">
      {/* Background gradient */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/cavity-treatment-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                  วิธีการรักษาและอุปกรณ์
                </h2>
                <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                  เลือกวิธีรักษาที่เหมาะกับสภาพ<br />
                  และเพิ่มความสมบูรณ์แบบด้วยอุปกรณ์ที่แม่นยำ
                </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* 충치 치료 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    รักษาฟันผุ
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 초기 충치 치료 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            รักษาฟันผุระยะเริ่มต้น
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            วินิจฉัยอย่างแม่นยำค้นพบแม้ฟันผุที่ซ่อนอยู่
                          </p>
                        </div>
                      </div>

                      {/* 레진 치료 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            อุดเรซิน
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            บูรณะเพื่อความสวยงามด้วยสีเดียวกับฟันธรรมชาติ
                          </p>
                        </div>
                      </div>

                      {/* 인레이 · 온레이 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            อินเลย์ · ออนเลย์
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            รักษาอนุรักษ์ฟันอย่างแม่นยำแม้ฟันผุขนาดใหญ่โดยไม่ต้องถอนฟัน
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 신경 치료 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    รักษารากฟัน
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 통증 완화 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            บรรเทาอาการปวด
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            กำจัดอาการปวดฟันรุนแรงเพื่อกลับสู่ชีวิตประจำวันอย่างสบาย
                          </p>
                        </div>
                      </div>

                      {/* 치아 보존 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            อนุรักษ์ฟัน
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            รักษาฟันธรรมชาติโดยไม่ต้องถอนฟัน
                          </p>
                        </div>
                      </div>

                      {/* 정밀 신경 치료 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            รักษารากฟันอย่างแม่นยำ
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            ทันตแพทย์เฉพาะทางทันตกรรมบูรณาการรักษาด้วยตนเอง
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* 장비와 혜택 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    อุปกรณ์เฉพาะทาง
                  </h3>

                  {/* 트리오스5 구강 스캐너 - 강조 섹션 */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    <div className="flex gap-[22px] items-center w-full">
                      <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                        <Image
                          src="/images/트리오스5.jpg"
                          alt="เครื่องสแกนช่องปาก Trios 5"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start flex-1">
                        <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#008095] w-full">
                          เครื่องสแกนช่องปาก Trios 5
                        </p>
                        <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                          เก็บข้อมูลอย่างแม่นยำด้วยเครื่องสแกนดิจิทัลรุ่นล่าสุด<br />
                          โดยไม่ต้องพิมพ์ปากที่ไม่สะดวก
                        </p>
                      </div>
                    </div>

                    {/* 특장점 리스트 */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            สแกน 3D ความเร็วสูงโดยไม่ต้องใช้วัสดุพิมพ์ปากเหนียว
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            ผลิตชิ้นงานครอบฟันที่แม่นยำยิ่งขึ้นด้วยข้อมูลดิจิทัล
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            สแกนทันทีหลังกำจัดฟันผุเพื่อผลิตชิ้นงานเฉพาะบุคคล
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            ประสบการณ์การรักษาที่สบาย ลดความคลาดเคลื่อนให้น้อยที่สุด
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#008095]/10 to-[#00aabb]/10 p-4 rounded-xl w-full border border-[#008095]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        Trios 5 เป็นเครื่องสแกนช่องปากรุ่นล่าสุดของ 3Shape ที่สามารถเก็บข้อมูลรูปทรงฟันได้อย่างแม่นยำแม้ในสภาพแวดล้อมที่มีความชื้น ทำให้การรักษาอินเลย์ ออนเลย์ และครราวน์มีความแม่นยำและสะดวกสบายมากยิ่งขึ้น
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
