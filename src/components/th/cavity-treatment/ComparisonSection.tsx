'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-[50px] items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
                  คลินิกทันตกรรมที่ยึดมั่นในปรัชญาการอนุรักษ์ฟัน
                </h2>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              เมื่อสูญเสียฟันไปแล้วจะไม่สามารถกลับคืนมาได้<br />
              การรักษาฟันให้ได้แม้เพียงซี่เดียวคือพันธกิจที่แท้จริงของผู้เชี่ยวชาญ
            </p>
          </div>

          {/* Comparison Table */}
          <div className="relative w-full h-[263px]">
            {/* 일반 치과 */}
            <div className="absolute left-[10px] top-[20.21px] w-[133px]">
              <div className="flex flex-col gap-[10px] items-start w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e] flex-1">
                    คลินิกทันตกรรมทั่วไป
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] w-full">
                      เน้นผลกำไร
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582] w-full">
                      แนะนำถอนฟัน/รากฟันเทียม
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      รักษาเสร็จเร็ว
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      ทันตแพทย์ทั่วไปเป็นผู้รักษา
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      ชักนำให้ทำรากฟันเทียมราคาแพง
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 고덕퍼스트치과 */}
            <div className="absolute left-[157px] top-[-13px] w-[186px] bg-white border-2 border-[#008095] rounded-2xl p-5">
              <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.4] tracking-[-0.36px] text-black flex-1">
                    Godeok First Dental
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      เน้นการอนุรักษ์
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095] w-full">
                      ให้ความสำคัญกับการรักษาฟันธรรมชาติ
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      การวินิจฉัยที่แม่นยำ การรักษาทีละขั้นตอน
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      ผู้เชี่ยวชาญทันตกรรมบูรณาการรักษาโดยตรง
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      ใช้ประกันสุขภาพเป็นอันดับแรก
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095] w-full">
                      ลดภาระค่าใช้จ่ายของผู้ป่วยให้น้อยที่สุด
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Review 1 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-5 items-center justify-center px-4 py-6 w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-black text-center w-full">
                    &ldquo;ไม่คิดว่าจะรักษา<br />
                    ได้ละเอียดขนาดนี้&rdquo;
                  </h3>
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* Before Image */}
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src="/images/cavity-before-after.png"
                        alt="ก่อนการรักษา"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 0%' }}
                      />
                      <div className="absolute left-0 top-0 p-3 z-10">
                        <div className="bg-[#292a2f] px-2.5 py-1.5 rounded-[10px]">
                          <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                            Before
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src="/images/cavity-before-after.png"
                        alt="หลังการรักษา"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 100%' }}
                      />
                      <div className="absolute left-0 top-0 p-3">
                        <div className="bg-[#008095] px-2.5 py-1.5 rounded-[10px]">
                          <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                            After
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start text-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-base leading-[1.4] tracking-[-0.32px] text-black w-full">
                      ไม่มีปัญหาเลยหลังรักษาอินเลย์ซ้ำมา 5 ปี
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#9298a6] w-full">
                      คิม●● · หญิงวัย 40
                    </p>
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
