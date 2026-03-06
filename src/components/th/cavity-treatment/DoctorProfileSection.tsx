'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              ถอนฟัน?<br />
              ยังเร็วไป!
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              ผู้เชี่ยวชาญด้านการอนุรักษ์ฟันจะรักษาจนถึงที่สุด
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="ทพญ. แบ อินเฮ ผู้เชี่ยวชาญด้านการอนุรักษ์ฟัน"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    ทพญ. แบ อินเฮ
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[120px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      ผู้เชี่ยวชาญการอนุรักษ์ฟัน
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>ใบอนุญาตทันตแพทย์และเภสัชกร</p>
                  <p>ผู้เชี่ยวชาญด้านการอนุรักษ์ฟันรับรองโดยกระทรวงสาธารณสุข</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>จบการฝึกอบรมด้านการอนุรักษ์ฟัน โรงพยาบาลทันตกรรมมหาวิทยาลัยปูซาน</li>
                <li>สำเร็จหลักสูตรปริญญาเอก บัณฑิตวิทยาลัยทันตกรรม มหาวิทยาลัยปูซาน<br />(สาขาการอนุรักษ์ฟัน)</li>
                <li>ปริญญาโททันตกรรม จบด้วยเกียรตินิยมอันดับหนึ่ง</li>
                <li>สมาชิกสมาคมอนุรักษ์ฟันแห่งมหาวิทยาลัย</li>
                <li>สมาชิกสมาคมรักษารากฟันแห่งเกาหลี</li>
                <li>สมาชิกสมาคมทันตกรรมยึดติดเกาหลี</li>
                <li>สมาชิกสมาคมวัสดุทันตกรรมเกาหลี</li>
                <li>สมาชิกสมาคมทันตกรรมเสริมความงามเกาหลี</li>
                <li>อดีต ผู้อำนวยการคลินิกกู๊ดสไมล์</li>
                <li>อดีต ผู้อำนวยการคลินิกพลานท์</li>
              </ul>

              {/* 보존과 전문 진료 소개 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    การรักษาเพื่อรักษาฟันธรรมชาติ<br />อย่างพิเศษ
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    เราเชื่อว่าการรักษาฟันธรรมชาติคือภารกิจของทันตแพทย์ จึงพยายามรักษาและอนุรักษ์ฟันธรรมชาติให้มากที่สุด
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* 진료 항목들 */}
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            รักษารากฟัน, รักษารากฟันซ้ำ
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            การรักษารากฟันที่ต้องการความละเอียดสูงเป็นความเชี่ยวชาญเฉพาะด้านการอนุรักษ์ฟัน
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            การฟื้นฟูโพรงประสาทฟัน
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            การรักษาที่เรียกว่าการรักษารากฟันสำหรับเด็ก ช่วยให้เส้นประสาทที่หยุดเจริญเติบโตในฟันแท้กลับมาเติบโตและรากฟันเจริญต่อได้
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            รักษาฟันที่บาดเจ็บ
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            ด้วยประสบการณ์ทางคลินิกที่หลากหลาย สามารถวินิจฉัยและรับมือกับฟันที่บาดเจ็บได้อย่างรวดเร็ว
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            การตัดปลายรากฟัน
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            การรักษาเพื่อรักษาฟันโดยการกำจัดการอักเสบที่รากฟันซึ่งก่อนหน้านี้ต้องถอนทิ้ง โดยใช้กล้องไมโครสโคป
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            การปลูกฟันใหม่
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            การรักษาโดยถอนฟัน กำจัดสาเหตุของการอักเสบ แล้วปลูกฟันกลับเข้าไปใหม่
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 환자 맞춤 상담 강조 */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 ในฐานะผู้เชี่ยวชาญด้านการอนุรักษ์ฟัน เราจะปรึกษาอย่างละเอียดกับผู้ป่วยเพื่อให้การรักษาที่จำเป็นที่สุดจากประสบการณ์ที่มากมาย
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microscope Treatment Photo */}
          <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
            <div className="h-[280px] w-full relative overflow-hidden">
              <Image
                src="/images/microscope-treatment-photo.jpg"
                alt="ทพญ. แบ อินเฮ รักษาด้วยกล้องไมโครสโคป"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                ทางเลือกเพื่อรักษาฟันธรรมชาติ
              </p>
              <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                เพื่อรักษาฟันโดยไม่ถอน<br />รักษาอย่างแม่นยำด้วยกล้องไมโครสโคประดับมหาวิทยาลัย
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
