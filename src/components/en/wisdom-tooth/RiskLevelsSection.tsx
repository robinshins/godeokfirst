'use client';

export default function RiskLevelsSection() {
  const riskLevels = [
    {
      level: 'Low Risk',
      levelBg: 'bg-[#e8f8f0]',
      levelColor: 'text-[#15bd66]',
      title: 'Normal Wisdom Tooth',
      description: 'Even normally grown wisdom teeth are hard to clean and have high cavity risk',
    },
    {
      level: 'Medium Risk',
      levelBg: 'bg-[#fff9ec]',
      levelColor: 'text-[#ffc53d]',
      title: 'Partially Impacted',
      description: 'Food easily gets trapped and inflammation frequently occurs',
    },
    {
      level: 'High Risk',
      levelBg: 'bg-[#fef1e5]',
      levelColor: 'text-[#f57400]',
      title: 'Fully Impacted',
      description: 'Risk of cyst formation, early extraction recommended',
    },
    {
      level: 'High Risk',
      levelBg: 'bg-[#fef1e5]',
      levelColor: 'text-[#f57400]',
      title: 'Curved Root',
      description: 'Curved roots make extraction more challenging',
    },
    {
      level: 'Immediate Treatment',
      levelBg: 'bg-[#ffebed]',
      levelColor: 'text-[#ff1616]',
      title: 'Horizontal Impaction',
      description: 'Pushes adjacent teeth causing misalignment and cavities',
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">RISK LEVELS</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">
              Wisdom Tooth <span className="text-[#008095]">Risk by Condition</span>
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              Extraction timing and method vary by condition
            </p>
          </div>

          {/* Risk Cards */}
          <div className="flex flex-col gap-4 items-start w-full">
            {riskLevels.map((risk, index) => (
              <div
                key={index}
                className="bg-white border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-2 items-start flex-shrink-0">
                    <div className={`${risk.levelBg} rounded-lg px-3 py-1.5`}>
                      <p className={`font-bold text-[13px] leading-[1.4] tracking-[-0.26px] ${risk.levelColor}`}>
                        {risk.level}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <p className="font-bold text-[18px] leading-[1.35] tracking-[-0.36px] text-black">
                      {risk.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
