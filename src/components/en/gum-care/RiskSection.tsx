'use client';

const risks = [
  {
    tag: 'Cardiovascular',
    title: 'Cardiovascular disease risk 3x↑',
    desc: 'Periodontal bacteria penetrate blood vessels, causing inflammation in vessel walls and promoting blood clot formation. Studies show that those with gum disease face up to 2.8x higher risk of heart attack and 16%+ higher risk of stroke. Conversely, regular scaling alone can reduce heart disease risk by 10~14%.',
    stats: ['Heart attack risk increased 2.8x', 'Stroke risk reduced 16% (with annual scaling)', 'Oral examination recommended alongside cardiac check-ups'],
    source: 'Seoul National University Bundang Hospital Research Team 2024 · AHA 2020',
  },
  {
    tag: 'Diabetes',
    title: 'Diabetes complication progression 2x↑',
    desc: 'Gum inflammation increases insulin resistance, creating a vicious cycle that disrupts blood sugar control. Periodontitis makes HbA1c management difficult, and conversely, diabetes reduces gum treatment effectiveness. Clinical studies show periodontal treatment alone can reduce HbA1c by 0.4%.',
    stats: ['Blood sugar control failure risk 6x higher', 'HbA1c reduced 0.4% (with periodontal treatment)', 'Diabetes complication progression 2x faster'],
    source: 'Catholic University Eunpyeong St. Mary\'s Hospital 2023 · Korean Diabetes Association',
  },
  {
    tag: 'Brain Disease',
    title: 'Dementia risk 70%↑',
    desc: 'When the periodontal bacterium Porphyromonas gingivalis crosses the blood-brain barrier and enters the brain, it accelerates beta-amyloid accumulation. Toxins from this bacterium have been found in brain tissue of Alzheimer\'s patients, and leaving gum disease untreated for 10+ years significantly increases dementia risk.',
    stats: ['Periodontal bacterial toxins found in 40% of Alzheimer\'s patients', '70%↑ dementia risk after 10+ years of neglect', 'Early gum care can protect brain health'],
    source: 'Harvard Dr. Kantarci Team 2024 · Journal of Neuroinflammation',
  },
  {
    tag: 'Pregnancy',
    title: 'Preterm birth & low birth weight 7x↑',
    desc: 'Prostaglandins, inflammatory mediators from the gums, can travel through the blood to the placenta and trigger premature labor. Since gum care is easily neglected during pregnancy, checking gum health before pregnancy planning or in early pregnancy is highly recommended.',
    stats: ['Preterm birth risk 7x higher', 'Low birth weight (<2kg) 2x higher', 'Gum treatment during pregnancy covered by insurance'],
    source: 'American & European Periodontal Associations',
  },
];

export default function RiskSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Health Warning
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Gum disease doesn&apos;t stay<br />in your mouth alone
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Bacteria from the gums travel through blood vessels<br />and cause far more serious conditions than you think.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="flex flex-col gap-5">
          {risks.map((risk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col gap-5">
              {/* Tag + Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider w-fit">
                  {risk.tag}
                </span>
                <h3
                  className="font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {risk.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {risk.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {risk.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#4DC8D8] shrink-0 mt-[3px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#4DC8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className="text-[#4DC8D8] font-semibold text-[13px] leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Source */}
              <p className="text-white/30 text-[11px]">Source: {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Just one scaling session per year<br />can reduce cardiovascular disease risk by 14%.
          </p>
          <p className="text-white/40 text-[13px]">
            Scaling is covered by insurance — make sure to get it at least once a year.
          </p>
        </div>

      </div>
    </div>
  );
}
