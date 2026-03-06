export default function WisdomToothStats() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] via-[#0b1727] to-white">
      <div className="max-w-[375px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-white text-[32px] font-bold leading-[1.35] tracking-[-0.64px] mb-3">
            All Types of Wisdom Teeth,
            <br />
            We&apos;ve Handled Them All
          </h2>
          <p className="text-[#e9ebf1] text-base font-semibold leading-[1.4] tracking-[-0.32px]">
            Even the most difficult wisdom teeth, safely extracted
            <br />
            Our extensive experience handles all cases safely
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-5">
          {/* 2,700+ Cases Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                2,700+
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">cases</span>
              </div>
            </div>
            <p className="text-[#292a2f] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Total Wisdom Tooth Extractions
            </p>
          </div>

          {/* 0 Complications Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">cases</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Re-treatment Due to Complications
            </p>
          </div>

          {/* 0% Referral Rate Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">%</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px] mb-3">
              Referral to Advanced Hospitals
            </p>
            <div className="bg-[#f3f6fb] rounded-xl p-4">
              <p className="text-[#006aff] text-[15px] font-bold leading-[1.5] tracking-[-0.3px]">
                In fact, other clinics<br />
                refer difficult cases to us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
