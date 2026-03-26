'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4 bg-[#21314E]">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              ทันตแพทย์ผู้เชี่ยวชาญด้านทันตกรรมบูรณาการ<br />ให้การรักษาโดยตรง
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[20px] leading-[1.6] tracking-[-0.4px] w-full text-[#4DC8D8]">
              ทันตแพทย์ผู้อำนวยการ Godeok First Dental
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="ทันตแพทย์ อี ดงฮยอน ผู้อำนวยการ"
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
                    อี ดงฮยอน
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      ผู้อำนวยการ
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>ผู้เชี่ยวชาญด้านทันตกรรมบูรณาการ รับรองโดยกระทรวงสาธารณสุข</p>
                  <p>อาจารย์พิเศษ โรงพยาบาลทันตกรรม มหาวิทยาลัยโชซอน</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>จบการศึกษาจากคณะทันตแพทยศาสตร์ มหาวิทยาลัยโชซอน</li>
                <li>สำเร็จการฝึกอบรมแพทย์ประจำบ้านสาขาทันตกรรมบูรณาการ โรงพยาบาลทันตกรรม มหาวิทยาลัยโชซอน</li>
                <li>สมาชิกเต็มตัวของสมาคมทันตกรรมบูรณาการแห่งเกาหลี</li>
                <li>สมาชิกเต็มตัวของสมาคมรากฟันเทียมช่องปากและใบหน้าขากรรไกรแห่งเกาหลี</li>
                <li>ผู้เชี่ยวชาญด้านรากฟันเทียมแบบนำทางดิจิทัล</li>
                <li>การรักษารากฟันเทียม ครอบฟัน และรักษารากฟันแบบครบวงจร</li>
              </ul>

              {/* 보존과 전문 진료 소개 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    การรักษาเพื่อรักษาฟันธรรมชาติ<br />อย่างพิเศษ
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    เราถือว่าการรักษาฟันธรรมชาติเป็นพันธกิจของทันตแพทย์ และพยายามอย่างเต็มที่ในการรักษาและอนุรักษ์ฟันธรรมชาติ
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* 진료 항목들 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
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
                            การรักษารากฟันที่ต้องการเทคนิคที่ละเอียดอ่อนเป็นสาขาเฉพาะทางของทันตกรรมอนุรักษ์
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            การฟื้นฟูเนื้อเยื่อในฟัน
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            การฟื้นฟูเนื้อเยื่อในฟันหรือที่เรียกว่าการรักษารากฟันในเด็ก จะฟื้นฟูเส้นประสาทของฟันแท้ที่หยุดเจริญเติบโตเพื่อให้รากฟันเติบโตต่อไป
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            การรักษาฟันที่ได้รับบาดเจ็บ
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            ด้วยประสบการณ์ทางคลินิกที่หลากหลาย สามารถวินิจฉัยการพยากรณ์โรคของฟันหลังบาดเจ็บล่วงหน้าและตอบสนองอย่างรวดเร็ว
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
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
                            เป็นการรักษาระดับสูงที่กำจัดการอักเสบที่รากฟันซึ่งเดิมต้องถอนออก เพื่ออนุรักษ์ฟันไว้
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            การปลูกฟันกลับคืน
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            เป็นการรักษาที่ถอนฟันออก กำจัดส่วนที่ทำให้เกิดการอักเสบ แล้วปลูกฟันกลับเข้าไปใหม่
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 환자 맞춤 상담 강조 */}
                    <div className="bg-[#008095]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#008095]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 ในฐานะผู้เชี่ยวชาญด้านทันตกรรมอนุรักษ์ ด้วยประสบการณ์ที่หลากหลายในทุกการรักษา เราจะปรึกษากับผู้ป่วยอย่างเพียงพอเพื่อดำเนินการรักษาที่จำเป็นที่สุด
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 트리오스5 + 전문의 강조 카드 */}
          <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[20px] p-6 w-full">
            <p className="font-['Pretendard_JP'] text-[12px] font-bold text-white/60 uppercase tracking-[2px] mb-3">WHY GODUK FIRST</p>
            <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] text-white mb-4">
              ผู้เชี่ยวชาญด้านทันตกรรมบูรณาการ<br />ดูแลตั้งแต่ฟันผุจนถึงรักษารากฟันโดยตรง
            </p>
            <div className="flex flex-col gap-2">
              {[
                'ดำรงตำแหน่งอาจารย์พิเศษ โรงพยาบาลทันตกรรม มหาวิทยาลัยโชซอน',
                'เครื่องสแกนช่องปาก Trios 5 — การสแกนดิจิทัลที่แม่นยำ',
                'ประสบการณ์ทางคลินิกที่หลากหลายด้านฟันผุ อินเลย์ และรักษารากฟัน',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#4DC8D8] text-[13px]">✓</span>
                  <span className="text-white/90 text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
