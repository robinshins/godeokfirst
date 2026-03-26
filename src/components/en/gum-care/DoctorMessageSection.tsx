export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* Header Label */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p
              className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              From the Doctor
            </p>
            <h2
              className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              With proper gum care,<br />
              your natural teeth can last a lifetime
            </h2>
          </div>

          {/* Doctor Message Card */}
          <div
            className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5"
          >
            {/* Quote Text */}
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                It weighs on my heart every time I see patients coming in for implants.<br /><br />
                In most cases, the tooth itself wasn&apos;t the problem. <span className="text-[#008095] font-bold">Far more often, the gums weren&apos;t managed in time,</span> leaving extraction as the only option.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                It&apos;s easy to put off gum treatment because it seems painful or bothersome. But just getting scaling once a year and visiting promptly when something feels off <span className="text-[#008095] font-bold">can extend the life of your natural teeth by 20~30 years.</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                No matter how good implants are, no prosthetic can beat a natural tooth.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Dr. Lee Dong-hyun
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Comprehensive Dentistry Specialist · Godeok First Dental Head Doctor
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="flex flex-col gap-3">
            {[
              { num: '1x / year', desc: 'Scaling alone reduces cardiovascular disease risk by 14%' },
              { num: '80%', desc: 'Adults have gum disease — most with no noticeable symptoms' },
              { num: '3x', desc: 'Risk of needing an implant when periodontitis is left untreated' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4"
              >
                <p
                  className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.num}
                </p>
                <p
                  className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
