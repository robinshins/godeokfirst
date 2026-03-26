'use client';

const risks = [
  {
 tag:'',
 title:'3дахин↑',
 desc:'буйл буйлны үрэвсэл. буйл 2.8дахин, 16%. цэвэрлэгээ 10~14%.',
 stats: ['2.8дахин','16% (1удаа цэвэрлэгээ)','амны хөндий'],
 source:'минут эмнэлэг 2024 · удаа(AHA) 2020',
  },
  {
 tag:'',
 title:'хүндрэл явуулах 2дахин↑',
 desc:'буйл үрэвсэл. буйлны HbA1c, буйл эмчилгээ. буйлны эмчилгээ HbA1c 0.4%.',
 stats: ['боломжтой 6дахин','HbA1c 0.4% (буйлны эмчилгээ)','хүндрэл явуулах хурд 2дахин'],
 source:'эмнэлэг 2023 · удаа',
  },
  {
 tag:'',
 title:'70%↑',
 desc:'буйлны Porphyromonas gingivalis. өвчтөн буйлны, 10жил буйл.',
 stats: ['өвчтөн 40% буйлны','10жил 70%↑','буйл арчилгаа тохиолдол боломжтой'],
 source:'2024 · Journal of Neuroinflammation',
  },
  {
 tag:'',
 title:'болон 7дахин↑',
 desc:'буйл үрэвсэл. буйл арчилгаа, · эхний буйл шалгалт.',
 stats: ['7дахин','(2kg) 2дахин','буйл эмчилгээ тохиолдолДаатгал хамрагдана'],
 source:'· буйлны удаа',
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
 буйл <br /> 
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
 буйл бактери ерөнхий <br />.
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
 <p className="text-white/30 text-[11px]">: {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
 1удаа цэвэрлэгээ <br /> 14%.
          </p>
          <p className="text-white/40 text-[13px]">
 цэвэрлэгээ тохиолдолДаатгал хамрагдана — 1жил нас.
          </p>
        </div>

      </div>
    </div>
  );
}
