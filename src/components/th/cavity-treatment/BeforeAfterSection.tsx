'use client';

import Image from 'next/image';

export default function BeforeAfterSection() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] from-[0.541%] to-white w-full py-[60px] px-4 relative">
      {/* Background gradient ellipse */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/cavity-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-[60px] items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white w-full">
                รักษาและรักษาฟันผู้ป่วย<br />
                ที่ถูกแนะนำให้ถอน
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#e9ebf1] w-full">
                ผู้ป่วยที่ถูกแนะนำให้ถอนฟันจากที่อื่น<br />
                แต่เรารักษาฟันไว้ได้ด้วยการรักษารากฟัน
              </p>
            </div>
          </div>

          {/* Before/After Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Case 1: 37번 치근단병소 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#fff9ec] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#ffc53d] text-center">
                      รักษาโรคปลายรากฟัน
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    ฟันกรามที่ถูกแนะนำให้ถอนเพราะมีการอักเสบที่ปลายราก
                  </p>
                </div>

                {/* Before/After Images */}
                <div className="flex flex-col gap-3 w-full">
                  {/* Before */}
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/saved/case2-before.jpg"
                        alt="ก่อนรักษา"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/saved/case2-after-14months.jpg"
                        alt="หลังรักษา 1 ปี 2 เดือน"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                      <Image
                        src="/images/after-badge.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="rounded-[10px] px-2.5 py-[5px]">
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                          After
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center">
                  หลังรักษารากฟัน 1 ปี 2 เดือน โรคปลายรากฟันหายสนิท
                </p>
              </div>
            </div>

            {/* Case 2: 36번 치근단병소 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#fff9ec] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#ffc53d] text-center">
                      รักษาโรคปลายรากฟัน
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    ฟันกรามที่มีการอักเสบรุนแรงจนมีหนอง
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/saved/case1-before.jpg"
                        alt="ก่อนรักษา"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/saved/case1-after-6months.jpg"
                        alt="หลังรักษา 6 เดือน"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                      <Image
                        src="/images/after-badge.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="rounded-[10px] px-2.5 py-[5px]">
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                          After
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center">
                  หลังรักษา 6 เดือน โรคปลายรากฟันหายสนิท
                </p>
              </div>
            </div>

            {/* Case 3: 재신경치료 - 추가 근관 발견 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#fef1e5] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#f57400] text-center">
                      รักษารากฟันซ้ำ
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    ฟันกรามที่กลับมาเป็นอีกหลังรักษาจากที่อื่น
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/retreatment/case1-initial.jpg"
                        alt="ก่อนรักษา"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/retreatment/case1-after-21months.jpg"
                        alt="หลังรักษา 1 ปี 9 เดือน"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                      <Image
                        src="/images/after-badge.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="rounded-[10px] px-2.5 py-[5px]">
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                          After
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center">
                  พบคลองรากฟันเพิ่มเติมจากการรักษาซ้ำ หายสนิทหลัง 1 ปี 9 เดือน
                </p>
              </div>
            </div>

            {/* Case 4: 치근단절제술 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#ffebed] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#ff1616] text-center">
                      การตัดปลายรากฟัน
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    ฟันหน้าที่มีการอักเสบลุกลามถึงปลายราก
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/apicoectomy/case1-initial.jpg"
                        alt="ก่อนรักษา"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/apicoectomy/case1-healed.jpg"
                        alt="หลังรักษา"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                      <Image
                        src="/images/after-badge.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="rounded-[10px] px-2.5 py-[5px]">
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                          After
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center">
                  หายสนิทหลังรักษารากฟันซ้ำและตัดปลายรากฟัน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
