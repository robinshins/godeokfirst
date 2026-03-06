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
              <h2 className="font-['Pretendard'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                Our Tooth-Saving Treatment
              </h2>
              <p className="font-['Pretendard'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                Treatment process and equipment prepared<br />
                solely for patients and tooth preservation
              </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* Cavity Treatment Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Cavity Treatment
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* Early Cavity Treatment */}
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
                          <p className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Early Cavity Treatment
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Detect hidden cavities with Q-ray diagnosis
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
                          <p className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Resin Treatment
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
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
                          <p className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Inlay · Onlay
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Precise preservation treatment without extraction
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
                  <h3 className="font-['Pretendard'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Root Canal Treatment
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* Pain Relief */}
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
                          <p className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Pain Relief
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Restore comfortable daily life by eliminating severe toothache
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
                          <p className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Tooth Preservation
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Save natural teeth without extraction
                          </p>
                        </div>
                      </div>

                      {/* Microscopic Treatment */}
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
                          <p className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Microscopic Treatment
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Precise treatment by preservation specialist
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Professional Equipment
                  </h3>

                  {/* Q-ray Diagnostic Equipment */}
                  <div className="flex gap-[22px] items-center w-full">
                    <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                      <div className="">
                        <Image
                          src="/images/qray-photo2.jpg"
                          alt="Q-ray Diagnostic Equipment"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start flex-1">
                      <p className="font-['Pretendard'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                        Q-ray Diagnostic Equipment
                      </p>
                      <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                        Detect hidden cavities<br />
                        with harmless visible light
                      </p>
                    </div>
                  </div>

                  {/* Dental Microscope - Emphasized Section */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex gap-[22px] items-center w-full">
                        <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                          <Image
                            src="/images/microscope.jpg"
                            alt="Dental Microscope"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start flex-1">
                          <p className="font-['Pretendard'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                            Microscopic Treatment
                          </p>
                          <p className="font-['Pretendard'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                            We don&apos;t miss even the smallest details<br />
                            invisible to the naked eye
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
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
                          <p className="font-['Pretendard'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Accurate diagnosis of cavities and tooth fractures
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
                          <p className="font-['Pretendard'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Precise treatment with up to 25x magnification
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
                          <p className="font-['Pretendard'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Minimize recurrence and side effects of treated teeth
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
                          <p className="font-['Pretendard'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Minimize damage to surrounding tissues with precise treatment
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description Box */}
                    <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-4 rounded-xl w-full border border-[#006aff]/20">
                      <p className="font-['Pretendard'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        Dental microscopes, available only in select university hospitals and dental clinics, show even the smallest details invisible to the naked eye, enabling efficient preservation treatment of high difficulty.
                      </p>
                    </div>

                    {/* Actual Treatment Case Images */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <h5 className="font-['Pretendard'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                        What&apos;s Visible Through the Microscope
                      </h5>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-nerve-canal.webp"
                            alt="Canal Access"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-root-inflammation.webp"
                            alt="Root Inflammation Discovery"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-crack-found.webp"
                            alt="Crack Detection"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <p className="font-['Pretendard'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          Canal Access
                        </p>
                        <p className="font-['Pretendard'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          Root Inflammation<br />Discovery
                        </p>
                        <p className="font-['Pretendard'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          Crack Detection
                        </p>
                      </div>
                    </div>

                    {/* Emphasis Message */}
                    <div className="bg-[#f0f7ff] px-4 py-3 rounded-xl w-full">
                      <p className="font-['Pretendard'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#006aff]">
                        💡 We also accept referrals for difficult root canal treatments from other clinics
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
