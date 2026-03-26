'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    { title: 'Acute Inflammation', description: 'Severe pain and facial swelling' },
    { title: 'Adjacent Tooth Decay', description: 'Damage spreads to neighboring teeth' },
    { title: 'TMJ Disorder', description: 'Chronic headaches and jaw pain' },
    { title: 'Teeth Misalignment', description: 'May require orthodontic treatment' }
  ];

  const benefits = [
    { title: 'Faster Recovery', description: 'Younger patients recover faster' },
    { title: 'Prevent Complications', description: 'Safer when there is no inflammation' },
    { title: 'Cost Savings', description: 'Treat before problems arise' },
    { title: 'Comfortable Procedure', description: 'Anesthesia works better without inflammation' }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">WHY NOW</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">
              Why Extract <span className="text-[#008095]">Now</span>?
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Problems Card */}
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                  Problems from Neglecting Wisdom Teeth
                </p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0">
                        <Image src="/icons/x-icon.svg" alt="" width={24} height={24} />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">
                          {problem.title}
                        </p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                  Benefits of Early Extraction
                </p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0">
                        <Image src="/icons/check-icon.svg" alt="" width={24} height={24} />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">
                          {benefit.title}
                        </p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                Many patients end up<br />in the ER after waiting too long
              </h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80">
                Every week, patients visit the ER at dawn<br />
                because inflammation got severe.<br />
                Early extraction can prevent this suffering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
