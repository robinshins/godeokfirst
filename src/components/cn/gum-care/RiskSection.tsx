'use client';

const risks = [
  {
    tag: '心血管',
    title: '心血管疾病风险3倍↑',
    desc: '牙龈内的牙周菌侵入血管，引起血管壁炎症并促进血栓形成。研究表明，有牙龈疾病时心肌梗塞风险最高增加2.8倍，脑卒中风险增加16%以上。相反，仅通过定期洁牙就可降低心脏疾病风险10~14%。',
    stats: ['心肌梗塞风险2.8倍增', '脑卒中风险16%降低（每年1次洁牙时）', '心脏检查时建议同时进行口腔检查'],
    source: '首尔大学医院研究组 2024 · 美国心脏协会(AHA) 2020',
  },
  {
    tag: '糖尿病',
    title: '糖尿病并发症进展2倍↑',
    desc: '牙龈炎症提高胰岛素抵抗，干扰血糖调节，形成恶性循环。有牙周炎时HbA1c值难以调节，反之糖尿病患者牙周治疗效果也会降低。有临床研究显示牙周治疗可使HbA1c降低0.4%。',
    stats: ['血糖调节失败可能性6倍增', 'HbA1c 0.4%降低（牙周治疗时）', '糖尿病并发症进展速度快2倍'],
    source: '天主教大学平圣母医院 2023 · 糖尿病学会',
  },
  {
    tag: '脑疾病',
    title: '痴呆发生风险70%↑',
    desc: '牙周菌中的Porphyromonas gingivalis通过血脑屏障进入大脑后，加速β-淀粉样蛋白积累。阿尔茨海默患者的脑组织中发现了牙周菌毒素，放置牙龈疾病10年以上时痴呆风险显著增加。',
    stats: ['40%阿尔茨海默患者中发现牙周菌毒素', '放置10年以上痴呆风险70%↑', '早期牙龈管理可保护大脑健康'],
    source: '哈佛大学Bhatt博士团队 2024 · Journal of Neuroinflammation',
  },
  {
    tag: '孕妇',
    title: '早产和低体重儿7倍↑',
    desc: '牙龈的炎症介质前列腺素通过血液传递到胎盘时，可能引发早期阵痛。怀孕期间牙龈管理容易疏忽，因此建议在备孕前或怀孕初期必须检查牙龈状态。',
    stats: ['早产风险7倍增', '低体重儿（2kg以下）出生2倍增', '怀孕期间牙周治疗适用健康保险'],
    source: '美国·欧洲牙周学会',
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
            牙龈病不仅仅<br />停留在口腔内
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            牙龈内的细菌通过血管扩散到全身<br />引发比想象中更严重的疾病。
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
              <p className="text-white/30 text-[11px]">来源 : {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            仅每年1次洁牙<br />就能降低心血管疾病风险14%。
          </p>
          <p className="text-white/40 text-[13px]">
            洁牙适用健康保险 — 每年一次一定要做。
          </p>
        </div>

      </div>
    </div>
  );
}
