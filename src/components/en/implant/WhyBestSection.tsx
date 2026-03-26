import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-[#f3f6fb] py-[60px] px-4">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-10">
          {/* Logo */}
          <div className="h-6 w-[168px]">
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none">
              <text x="0" y="18" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#008095">
                Godeok First Dental
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
              Why Godeok First Dental is<br />
              #1 in Implants Nationwide
            </h2>
          </div>
        </div>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4">
          {/* Reason 1: Expert doctor that other dentists come to learn from */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">1</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  An expert doctor that<br />
                  other dentists come to learn from
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6">
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-1.png"
                    alt="Seminar Photo 1"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-2.png"
                    alt="Seminar Photo 2"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-3.png"
                    alt="Implant Workshop"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    Implant Workshop
                  </p>
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-4.png"
                    alt="Digital Implant Expert Course"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    Digital Implant Expert Course
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2: 3-Step Temporary Teeth Protocol */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">2</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  3-Step Temporary Teeth<br />
                  Protocol
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Unlike other clinics&apos; single-step temporary teeth,<br />
                we pursue perfection with a 3-step precise adjustment system
              </p>
            </div>

            {/* Comparison table */}
            <div className="px-6 py-6 relative min-h-[280px]">
              {/* General Dental Clinic */}
              <div className="absolute left-6 top-[17px] flex flex-col gap-[10px] w-[133px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-[#37373e]">
                  General Clinic
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">Finished in 1 step</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">No 2nd step</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">No 3rd step</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">No 4th step</p>
                  </div>
                </div>
              </div>

              {/* Godeok First Dental */}
              <div className="absolute right-6 top-[1px] bg-white border-2 border-[#008095] rounded-[11px] px-[15px] py-[13px] flex flex-col gap-[10px] w-[182px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-black text-center">
                  Godeok First Dental
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">Step 1: Immediate Restoration</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">Step 2: Precise Bite Adjustment</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">Step 3: Perfect Bite Verification</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">Step 4: Perfect Final Prosthetics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 3: Surgery completed within 24 hours */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">3</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Surgery completed within 24 hours
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Thanks to fast production at our in-house dental lab,<br />
                there is not a single day without teeth
              </p>
            </div>

            {/* Timeline */}
            <div className="px-6 py-6 flex flex-col gap-[26px]">
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f2f5ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-morning-surgery.png"
                    alt="Morning Surgery"
                    width={80}
                    height={80}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">10:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">Morning Surgery</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    <span className="text-[#0b1727]">Accurate and fast</span> implant placement<br />
                    through 3D digital analysis
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#fff9ec] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-temporary-tooth.png"
                    alt="Temporary Teeth Production"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">14:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">Temporary Teeth Production</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#0b1727]">
                    Custom-made immediately for the patient
                  </p>
                  <p className="text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#008095]">
                    Produced immediately at our in-house dental lab, completed within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f5f4ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-dinner.png"
                    alt="Dinner"
                    width={86}
                    height={86}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">18:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">Dinner Time</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    Enjoy dinner comfortably<br />
                    with your new teeth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 4: Thorough Aftercare */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">4</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Thorough Aftercare
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                From right after surgery to final prosthetics placement,<br />
                there is not a single day without teeth
              </p>
            </div>

            <div className="py-6 flex flex-col gap-5 items-center">
              <div className="relative w-full h-[242px]">
                <Image
                  src="/images/implant-bacteria-therapy.png"
                  alt="Oral Bacteria Therapy"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d] text-center">
                Oral Bacteria Therapy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
