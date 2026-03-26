'use client';

export default function FeaturesSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">

          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">PAINLESS & PRECISE</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black">
              Painless and<br />
              <span className="text-[#008095]">Precisely Extracted</span>
            </h2>
            <p className="font-semibold text-base leading-[1.5] tracking-[-0.32px] text-[#727582]">
              Systematic pain relief system by<br />
              Former University Hospital Visiting Professor
            </p>
          </div>

          {/* 2-Step Pain Relief */}
          <div className="flex flex-col gap-4 w-full">
            {[
              {
                step: '01',
                title: 'Topical & Gargle Anesthesia',
                desc: 'We eliminate even the sting of the needle first. Surface anesthesia minimizes pain from the injection itself.',
                color: '#e0f4f6',
                textColor: '#008095',
              },
              {
                step: '02',
                title: 'Electric Painless Anesthesia',
                desc: 'Computer automatically controls injection speed so the anesthetic enters slowly and evenly — virtually painless.',
                color: '#008095',
                textColor: '#ffffff',
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-[20px] p-5 flex gap-4 items-start"
                style={{ backgroundColor: item.color }}
              >
                <span
                  className="font-black text-[28px] leading-none flex-shrink-0 mt-1"
                  style={{ color: item.highlight ? 'rgba(255,255,255,0.4)' : '#008095', opacity: item.highlight ? 1 : 0.3 }}
                >
                  {item.step}
                </span>
                <div className="flex flex-col gap-1">
                  <p
                    className="font-bold text-[17px] leading-[1.4] tracking-[-0.34px]"
                    style={{ color: item.textColor }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-medium text-[14px] leading-[1.6] tracking-[-0.28px]"
                    style={{ color: item.highlight ? 'rgba(255,255,255,0.85)' : '#555' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* University Hospital-Level Extraction */}
          <div className="rounded-[24px] border-2 border-[#008095] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#008095] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                University Hospital-Level Extractions
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center">
                Have you been told<br />
                &quot;Go to a bigger hospital&quot;?
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              {[
                { label: 'Complex Impacted Wisdom Teeth', desc: 'Even deeply buried — no problem' },
                { label: 'Nerve-Adjacent Wisdom Teeth', desc: 'Safe extraction without nerve damage' },
                { label: 'Horizontal Impaction', desc: 'Even sideways difficult cases — handled' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#008095] text-lg shrink-0">✓</span>
                  <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                    <span className="font-bold text-[#008095]">{item.label}</span> — {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                Former Visiting Professor at Chosun Univ.<br />
                Dental Hospital handles it safely
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
