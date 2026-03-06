'use client';

import Image from 'next/image';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/icons/Logo_black.svg"
            alt="Kyungsung Medis Dental Clinic"
            width={168}
            height={24}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full font-['Pretendard_JP']">
          Why Kyungsung Medis <br />
          is Special
          </h2>
        </div>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        {/* Reason 1: Teaching dentists */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="box-border flex flex-col gap-[14px] items-center justify-center px-4 py-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[#006aff] text-[32px] text-center tracking-[-0.64px] w-full font-['Pretendard_JP']">
                1
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h3 className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full font-['Pretendard_JP']">
                  Dental Specialists <br />
                  Teaching Dentists
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6 w-full">
              <div className="flex gap-3 w-max">
                {[
                  { img: '/images/seminar-2.png', caption: 'Academic Conference Presentation' },
                  { img: '/images/seminar-3.png', caption: 'Implant Lecture for Dentists' },
                  { img: '/images/seminar-1.png', caption: 'Special Lecture for Busan Dental Association' },
                  { img: '/images/seminar-4.png', caption: 'Digital Implant Expert Course' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-[6px] w-[243px] flex-shrink-0">
                    <div className="relative w-full aspect-[950/1148] rounded-[20px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.caption || `Seminar ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-bold leading-[1.5] not-italic text-[#727582] text-[13px] tracking-[-0.26px] font-['Pretendard_JP']">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reason 2: 3-Stage Temporary Teeth Protocol */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="leading-[1.35] text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  2
                </p>
                <div className="flex flex-col gap-2 items-center w-full">
                  <h3 className="leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full">
                    3-Stage Temporary Teeth<br />
                    Protocol
                  </h3>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#006aff]/10 rounded-full">
                    <span className="text-[13px] font-semibold text-[#006aff] tracking-[-0.26px]">
                      *Full Implant Exclusive
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                A dimension beyond other clinics&apos; 1-stage temporary teeth<br />
                with our 3-stage precision adjustment system pursuing perfection
              </p>
            </div>

            {/* Comparison table */}
            <div className="box-border flex gap-10 h-[263px] items-start justify-center p-6 relative shrink-0 w-full">
              {/* Regular Dental Clinic */}
              <div className="absolute flex flex-col gap-2.5 items-start left-6 top-[17px] w-[133px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] tracking-[-0.44px] font-['Pretendard_JP']">
                    Regular Clinic
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Finished in 1 stage
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      No stage 2
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      No stage 3
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      No stage 4
                    </p>
                  </div>
                </div>
              </div>

              {/* Medis Dental */}
              <div className="absolute bg-white border-2 border-[#006aff] box-border flex flex-col gap-2.5 items-center justify-center left-[151px] px-[15px] py-[13px] rounded-[11px] top-[1px] w-[182px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[22px] text-black tracking-[-0.44px] font-['Pretendard_JP']">
                    Medis Dental
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Stage 1: Immediate Recovery
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Stage 2: Precision Occlusion
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Stage 3: Perfect Occlusion Check
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Stage 4: Perfect Final Prosthesis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 3: Surgery Completed Within 24 Hours */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  3
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  Surgery Completed<br />Within 24 Hours
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                With our in-house lab for rapid production,<br />
                you won&apos;t spend a single day without teeth
              </p>
            </div>

            <div className="box-border flex flex-col gap-10 items-start justify-center p-6 relative shrink-0 w-full">
              <div className="flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                {/* 10:00 Morning Surgery */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f2f5ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[80px] h-[80px] -left-[5px] -top-2">
                      <Image
                        src="/images/same-day-morning.png"
                        alt="Morning Surgery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      10:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      Morning Surgery
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      <span className="text-[#0b1727]">Accurate and fast implant placement</span> with computer-analyzed digital guide surgery
                    </p>
                  </div>
                </div>

                {/* 14:00 Temporary Teeth Production */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#fff9ec] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[70px] h-[70px]">
                      <Image
                        src="/images/same-day-temporary.png"
                        alt="Temporary Teeth Production"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      14:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      Temporary Teeth Production
                    </p>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p className="font-semibold leading-[1.4] not-italic text-[#0b1727] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                        Customized immediate production
                      </p>
                      <p className="font-semibold leading-[1.4] not-italic text-[#006aff] text-[13px] tracking-[-0.26px] font-['Pretendard_JP']">
                        Completed within 24 hours by in-house lab
                      </p>
                    </div>
                  </div>
                </div>

                {/* 18:00 Dinner & Return to Daily Life */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f5f4ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[86px] h-[86px] -left-[7px] -top-[7px]">
                      <Image
                        src="/images/same-day-dinner.png"
                        alt="Dinner"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      18:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      Dinner & Return to Daily Life
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      <span className="text-[#0b1727]">Never a day without teeth</span> - return to daily life immediately without affecting social and personal relationships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 4: Thorough After-Care */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  4
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  Thorough After-Care
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                Not just planting and ending, but through meticulous care<br />
                you can use them for 10, 20 years and beyond.
              </p>
            </div>

            <div className="box-border flex flex-col gap-6 items-center px-6 pb-6 relative shrink-0 w-full">
              {/* 1. Lifetime Oral Care */}
              <div className="flex flex-col gap-3 w-full">
                <div className="relative h-[180px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
                  <Image
                    src="/images/beneficial-bacteria.jpg"
                    alt="Lifetime Oral Care - Oral Bacteria Therapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard_JP']">
                    Lifetime Oral Care
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    Oral Bacteria Therapy
                  </p>
                </div>
              </div>

              {/* 2. Implant Protection Splint */}
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full overflow-x-auto">
                  <div className="flex gap-3 pb-2">
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint.webp"
                        alt="Implant Protection Splint 1"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint2.tif"
                        alt="Implant Protection Splint 2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard_JP']">
                    Implant Protection Splint
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    Improves TMJ disorders like teeth grinding and clenching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 5: All Difficulty Levels of Implant Surgery */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  5
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  From Single Implants<br />
                  to Complex Full Implants
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                Based on extensive surgical experience with diverse cases,<br />
                <span className="text-[#006aff] font-bold">officially recognized as #1 in Busan Namgu for digital guide implant surgeries</span><br />
                with proven expertise
              </p>
            </div>

            {/* Certification Badge */}
            <div className="flex justify-center w-full px-6">
              <div className="relative w-full max-w-[343px] aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/most-implant-hospital.jpg"
                  alt="Most Digital Guide Surgery Hospital Certification"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Osstem Certification Images */}
            <div className="w-full overflow-x-auto px-6 mt-4">
              <div className="flex gap-4 pb-2">
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem2.jpg"
                    alt="Osstem Certification 2"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem1.jpg"
                    alt="Osstem Certification 1"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
              </div>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      Single Implant
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Individual 1-2 tooth loss
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      Partial Implant
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Multiple tooth loss, bridge replacement
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      Full Implant
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Edentulous, All-on-4/6, etc.<br />
                      High-difficulty full-arch implants
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#006aff]/5 border border-[#006aff]/20 rounded-2xl p-4 w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">✨</div>
                  <p className="font-bold text-[#006aff] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    Professional treatment for high-difficulty cases including bone grafts and sinus lifts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 6: Minimal Placement, Minimal Incision, Minimal Bone Graft */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  6
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  Minimal Placement,<br />
                  Minimal Incision,<br />
                  Minimal Bone Graft
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                Through precise digital diagnosis,<br />
                we proceed with only the minimum necessary procedures
              </p>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      Minimal Placement
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Efficient placement with firm fixation<br />
                      using only 6 upper and 4 lower implants
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      Minimal Incision
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Minimal incision surgery for faster recovery
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      Minimal Bone Graft
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      Only minimal bone grafting through precise diagnosis
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
