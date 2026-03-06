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
                การรักษาที่เรารักษาฟันไว้
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                มีขั้นตอนและอุปกรณ์รักษา<br />
                เพื่อผู้ป่วยและการรักษาฟันธรรมชาติ
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
                            src="/icons/check-blue.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            รักษาฟันผุระยะแรก
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            วินิจฉัยด้วย Qray ค้นหาฟันผุที่ซ่อนอยู่
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
                            อุดฟันด้วยเรซิน
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            บูรณะให้สวยงามเหมือนฟันจริง
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
                            รักษาฟันผุขนาดใหญ่โดยไม่ต้องถอน
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
                            src="/icons/check-blue.svg"
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
                            กำจัดอาการปวดฟันรุนแรง กลับสู่ชีวิตปกติ
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
                            รักษาฟันธรรมชาติ
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            รักษาฟันธรรมชาติโดยไม่ต้องถอน
                          </p>
                        </div>
                      </div>

                      {/* 미세 현미경 시술 */}
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
                            รักษาด้วยกล้องไมโครสโคป
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            รักษาอย่างแม่นยำโดยผู้เชี่ยวชาญ
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

                  {/* 큐레이 진단 장비 */}
                  <div className="flex gap-[22px] items-center w-full">
                    <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                      <div className="">
                        <Image
                          src="/images/qray-photo2.jpg"
                          alt="เครื่อง Qray"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start flex-1">
                      <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                        เครื่อง Qray
                      </p>
                      <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                        ใช้แสงที่ปลอดภัย<br />
                        ค้นหาฟันผุที่ซ่อนอยู่
                      </p>
                    </div>
                  </div>

                  {/* 미세 현미경 - 강조 섹션 */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    {/* 헤더 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex gap-[22px] items-center w-full">
                        <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                          <Image
                            src="/images/microscope.jpg"
                            alt="กล้องไมโครสโคป"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                            รักษาด้วยกล้องไมโครสโคป
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                            มองเห็นรายละเอียดเล็กๆ<br />
                            ที่ตาเปล่าไม่สามารถเห็นได้
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 특장점 리스트 */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            วินิจฉัยฟันผุ/ฟันแตกได้อย่างแม่นยำ
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            ขยายฟันได้ถึง 25 เท่าเพื่อรักษาอย่างแม่นยำ
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            ลดการกลับมาเป็นซ้ำและผลข้างเคียง
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            ลดความเสียหายต่อเนื้อเยื่อโดยรอบ
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 설명 박스 */}
                    <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-4 rounded-xl w-full border border-[#006aff]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        กล้องไมโครสโคปมีเฉพาะในโรงพยาบาลมหาวิทยาลัยและคลินิกบางแห่งเท่านั้น ช่วยให้สามารถทำการรักษาที่ซับซ้อนได้อย่างมีประสิทธิภาพโดยแสดงรายละเอียดที่ตาเปล่ามองไม่เห็น
                      </p>
                    </div>

                    {/* 실제 치료 사례 이미지 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <h5 className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                        สิ่งที่เห็นผ่านกล้องไมโครสโคป
                      </h5>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-nerve-canal.webp"
                            alt="พบคลองรากฟัน"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-root-inflammation.webp"
                            alt="พบสาเหตุการอักเสบที่รากฟัน"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-crack-found.webp"
                            alt="พบรอยร้าว"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          พบคลองรากฟัน
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          พบสาเหตุการอักเสบ<br />ที่รากฟัน
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          พบรอยร้าว
                        </p>
                      </div>
                    </div>

                    {/* 강조 메시지 */}
                    <div className="bg-[#f0f7ff] px-4 py-3 rounded-xl w-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#006aff]">
                        💡 รับส่งต่อเคสรักษารากฟันที่ยากจากคลินิกอื่น
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
