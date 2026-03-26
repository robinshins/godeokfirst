'use client';

export default function PhilosophySection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Main Philosophy Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Our Philosophy
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            A dental clinic that actively<br />recommends gum treatment is<br />
            <span className="text-[#008095]">a truly sincere clinic</span>
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            No matter how good implants are, they cannot beat natural teeth.<br />
            Preserving your natural teeth is the best treatment.
          </p>
        </div>

        {/* Story Flow */}
        <div className="flex flex-col gap-8">

          {/* Box 1: Why clinics avoid gum treatment */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#2d3340]/5 text-[#2d3340]/50 font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                Problem
              </span>
              <p className="font-bold text-[15px] text-[#2d3340]">
                Why do many clinics avoid gum treatment?
              </p>
            </div>
            <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5 border border-[#e9ebf1]">
              {[
                {
                  n: '1',
                  text: 'Implants after extraction are far more profitable',
                  sub: 'Saving a tooth through gum treatment doesn\'t generate implant procedure fees.',
                },
                {
                  n: '2',
                  text: 'Low insurance reimbursement relative to time and effort',
                  sub: 'Gum treatment is detailed and time-consuming, but yields low revenue, making clinics reluctant.',
                },
                {
                  n: '3',
                  text: 'Ongoing care needed after treatment with uncertain results',
                  sub: 'Without consistent patient cooperation, recurrence is easy, creating pressure on treatment outcomes.',
                },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-[#e9ebf1] shrink-0 mt-[2px]">
                    <span className="text-[11px] text-[#2d3340]/40 font-bold">{item.n}</span>
                  </span>
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-[15px] font-bold text-[#2d3340] leading-[1.4]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.text}
                    </p>
                    <p
                      className="text-[13px] font-medium text-[#2d3340]/50 leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="flex flex-col items-center gap-1 py-2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#e9ebf1] to-[#008095]/50" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3V15M9 15L4 10M9 15L14 10" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Box 2: Why we insist on gum treatment */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                Identity
              </span>
              <p className="font-bold text-[15px] text-[#008095]">
                Why Godeok First Dental insists on gum treatment
              </p>
            </div>
            <div className="bg-[#008095] rounded-[24px] p-7 flex flex-col gap-6 shadow-xl shadow-[#008095]/20">
              <div className="flex flex-col gap-2">
                <p
                  className="text-white font-bold text-[22px] leading-[1.35]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Preserving natural teeth<br />should always be the #1 priority
                </p>
                <div className="h-0.5 w-14 bg-white/30 mt-1 mb-2" />
                <p
                  className="text-white/80 text-[14px] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Even if it&apos;s a bit uncomfortable or inconvenient, saving your teeth is the best treatment for both you and us. We find the greatest fulfillment when patients keep their teeth for a long time after gum treatment.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    title: 'Comprehensive Dentistry Specialist direct treatment',
                    desc: 'We precisely diagnose gum conditions and personally manage everything from treatment planning to completion.',
                  },
                  {
                    title: '4-step pain relief anesthesia system',
                    desc: 'Gargle anesthesia → Topical anesthesia → Electric anesthesia device → Nerve block anesthesia. We minimize the discomfort of gum treatment as much as possible.',
                  },
                  {
                    title: 'Regular maintenance program',
                    desc: 'Even after treatment, regular check-ups every 3~6 months prevent recurrence and extend tooth lifespan.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-[2px]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p
                        className="text-white font-bold text-[15px] leading-[1.4]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-white/70 text-[13px] leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
