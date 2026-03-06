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
                Авахыг санал болгосон<br />
                өвчтөний шүдийг эмчилж хадгалсан
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#e9ebf1] w-full">
                Бусад эмнэлгээс авахыг санал болгосон байсан ч<br />
                сувгийн эмчилгээгээр хадгалж чадсан
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
                      Үндэсний үзүүрийн өвчин эдгэрэлт
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    Үндэсний үзүүрийн үрэвслээр авахыг санал болгосон араа шүд
                  </p>
                </div>

                {/* Before/After Images */}
                <div className="flex flex-col gap-3 w-full">
                  {/* Before */}
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/saved/case2-before.jpg"
                        alt="Эмчилгээний өмнө"
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
                        alt="Эмчилгээний 1 жил 2 сарын дараа"
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
                  Сувгийн эмчилгээний 1 жил 2 сарын дараа үндэсний үзүүрийн өвчин бүрэн эдгэрсэн
                </p>
              </div>
            </div>

            {/* Case 2: 36번 치근단병소 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#fff9ec] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#ffc53d] text-center">
                      Үндэсний үзүүрийн өвчин эдгэрэлт
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    Хүнд үрэвслээр идээ хуримтлагдсан араа шүд
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/saved/case1-before.jpg"
                        alt="Эмчилгээний өмнө"
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
                        alt="Эмчилгээний 6 сарын дараа"
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
                  Эмчилгээний 6 сарын дараа үндэсний үзүүрийн өвчин бүрэн эдгэрсэн
                </p>
              </div>
            </div>

            {/* Case 3: 재신경치료 - 추가 근관 발견 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#fef1e5] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#f57400] text-center">
                      Дахин сувгийн эмчилгээ
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    Бусад эмнэлгийн эмчилгээний дараа дахин хүндэрсэн араа шүд
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/retreatment/case1-initial.jpg"
                        alt="Эмчилгээний өмнө"
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
                        alt="Эмчилгээний 1 жил 9 сарын дараа"
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
                  Дахин сувгийн эмчилгээгээр нэмэлт суваг олж 1 жил 9 сарын дараа бүрэн эдгэрсэн
                </p>
              </div>
            </div>

            {/* Case 4: 치근단절제술 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                <div className="flex flex-col gap-3 items-center justify-center w-full">
                  <div className="bg-[#ffebed] px-3 py-1.5 rounded-lg">
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#ff1616] text-center">
                      Үндэсний үзүүр огтлох мэс засал
                    </p>
                  </div>
                  <p className="font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black text-center w-full">
                    Үндэсний үзүүр хүртэл үрэвсэл тархсан урд шүд
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="relative w-full">
                    <div className="h-[192px] w-full rounded-[20px] overflow-hidden relative bg-[#f3f6fb]">
                      <Image
                        src="/images/nerve-treatment-cases/apicoectomy/case1-initial.jpg"
                        alt="Эмчилгээний өмнө"
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
                        alt="Эмчилгээний дараа"
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
                  Дахин сувгийн эмчилгээ болон үндэсний үзүүр огтлох мэс заслын дараа өвчин бүрэн эдгэрсэн
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
