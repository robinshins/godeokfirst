'use client';

const risks = [
  {
    tag: '心血管', title: '心血管系疾患リスク3倍↑',
    desc: '歯茎の中の歯周菌が血管に侵入し血管壁に炎症を起こし血栓生成を促進します。研究によると歯周病がある場合、心筋梗塞リスクが最大2.8倍、脳卒中リスクが16%以上高くなります。逆に定期的なスケーリングだけでも心臓疾患リスクを10〜14%下げられると報告されています。',
    stats: ['心筋梗塞リスク2.8倍増加', '脳卒中リスク16%減少（年1回スケーリング時）', '心臓検診時に口腔検診の併行を推奨'],
    source: '盆唐ソウル大病院研究チーム 2024・米国心臓協会(AHA) 2020',
  },
  {
    tag: '糖尿病', title: '糖尿病合併症進行2倍↑',
    desc: '歯茎の炎症はインスリン抵抗性を高め血糖調節を妨げる悪循環を作ります。歯周炎があるとHbA1c数値の調節が難しくなり、逆に糖尿病があると歯周病治療効果も低下します。歯周治療だけでHbA1cが0.4%減少したという臨床研究もあります。',
    stats: ['血糖調節失敗の可能性6倍増加', 'HbA1c 0.4%減少（歯周治療時）', '糖尿病合併症進行速度2倍'],
    source: 'カトリック大恩平聖母病院 2023・大韓糖尿病学会',
  },
  {
    tag: '脳疾患', title: '認知症発生リスク70%↑',
    desc: '歯周菌の中でPorphyromonas gingivalisが血液脳関門を通過して脳内に侵入するとベータアミロイド蓄積を加速させます。アルツハイマー患者の脳組織でこの歯周菌の毒素が発見されており、10年以上歯周病を放置した場合に認知症リスクが有意に増加すると報告されています。',
    stats: ['アルツハイマー患者の40%で歯周菌毒素発見', '10年以上放置時に認知症リスク70%↑', '早期歯茎管理で脳の健康保護が可能'],
    source: 'ハーバード大カンタルシ博士チーム 2024・Journal of Neuroinflammation',
  },
  {
    tag: '妊婦', title: '早産および低体重児出産7倍↑',
    desc: '歯茎の炎症媒介物質であるプロスタグランジンが血液を通じて胎盤に伝達されると早期陣痛を誘発する可能性があります。妊娠中は歯茎管理がおろそかになりやすいため、妊娠計画前・妊娠初期に歯茎の状態を必ずチェックすることが推奨されます。',
    stats: ['早産リスク7倍増加', '低体重児（2kg未満）出産2倍増加', '妊娠中の歯周病治療は健康保険適用'],
    source: '米国・欧州歯周学会',
  },
];

export default function RiskSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Health Warning</p>
          <h2 className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            歯周病は口の中だけに<br />とどまりません
          </h2>
          <p className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            歯茎の中の細菌は血管を通じて全身に広がり<br />想像以上に深刻な疾患を引き起こします。
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {risks.map((risk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider w-fit">{risk.tag}</span>
                <h3 className="font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{risk.title}</h3>
              </div>
              <p className="text-white/70 text-[14px] leading-[1.7] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{risk.desc}</p>
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {risk.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#4DC8D8] shrink-0 mt-[3px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#4DC8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <p className="text-[#4DC8D8] font-semibold text-[13px] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{stat}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-[11px]">出典 : {risk.source}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            年1回のスケーリングだけでも<br />心血管疾患リスクを14%下げられます。
          </p>
          <p className="text-white/40 text-[13px]">
            スケーリングは健康保険適用 — 年に1回は必ず受けてください。
          </p>
        </div>
      </div>
    </div>
  );
}
