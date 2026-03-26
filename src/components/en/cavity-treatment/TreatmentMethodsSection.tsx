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
                  Treatment Methods & Equipment
                </h2>
                <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                  We select the right treatment for your condition<br />
                  and achieve precision with advanced equipment
                </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* Cavity Treatment Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Cavity Treatment
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* Early Cavity Treatment */}
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
                            Early Cavity Treatment
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Precise diagnosis detects even hidden cavities
                          </p>
                        </div>
                      </div>

                      {/* Resin Treatment */}
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
                            Resin Treatment
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Aesthetic restoration matching natural tooth color
                          </p>
                        </div>
                      </div>

                      {/* Inlay · Onlay */}
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
                            Inlay · Onlay
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Precise conservative treatment without extraction
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Root Canal Treatment Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Root Canal Treatment
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* Pain Relief */}
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
                            Pain Relief
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Restore comfort by eliminating severe toothache
                          </p>
                        </div>
                      </div>

                      {/* Tooth Preservation */}
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
                            Tooth Preservation
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Save your natural tooth without extraction
                          </p>
                        </div>
                      </div>

                      {/* Precise Root Canal Treatment */}
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
                            Precise Root Canal Treatment
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Performed directly by a Comprehensive Dentistry Specialist
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Equipment Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Professional Equipment
                  </h3>

                  {/* TRIOS5 Oral Scanner - Highlight Section */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    <div className="flex gap-[22px] items-center w-full">
                      <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                        <Image
                          src="/images/트리오스5.jpg"
                          alt="TRIOS5 Oral Scanner"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start flex-1">
                        <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#008095] w-full">
                          TRIOS5 Oral Scanner
                        </p>
                        <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                          Latest digital scanner for<br />
                          precise impressions without discomfort
                        </p>
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Ultra-fast 3D scan without sticky impression material
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            More precise prosthetics with digital data
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Custom-made right after cavity removal scan
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Comfortable treatment experience with minimized errors
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#008095]/10 to-[#00aabb]/10 p-4 rounded-xl w-full border border-[#008095]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        TRIOS5 is the latest oral scanner by 3Shape, capable of precisely capturing tooth shapes even in moist environments. It enables much more accurate and comfortable treatment for inlay, onlay, and crown procedures.
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
