'use client';

export default function TmjWhyUsSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Why Us</p>
          <h2 className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            コドクファースト歯科で<br />
            顎関節治療を<br />
            <span className="text-[#008095]">受けるべき理由</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {[
            { num: '01', title: '統合歯科専門医 直接診療', desc: '顎関節は咬合、補綴、歯周など複数の分野が絡む複合疾患です。統合歯科専門医が全体を見て診断するため正確な原因把握が可能です。' },
            { num: '02', title: '非手術 保存的治療優先', desc: 'ほとんどの顎関節障害は手術なしで治療できます。薬物、物理治療、スプリントなど保存的治療を優先し患者の負担を最小化します。' },
            { num: '03', title: 'オーダーメイドスプリント精密製作', desc: 'デジタル咬合分析を基に患者一人ひとりに合ったスプリントを精密製作します。定期的な咬合調整で治療効果を最大化します。' },
            { num: '04', title: '根本原因まで解決', desc: '単に痛みを軽減するだけでなく、不正咬合・欠損歯・悪習慣など根本原因を一緒に解決して再発を防止します。' },
          ].map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-center gap-3">
                <span className="text-[#008095] font-bold text-[28px] tracking-[-0.03em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{reason.num}</span>
                <h3 className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{reason.title}</h3>
              </div>
              <p className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-center">
          <p className="text-[22px] font-bold text-white leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            顎関節の痛み、<br />
            <span className="text-[#4DC8D8]">我慢せずご相談ください</span>
          </p>
          <p className="text-white/50 text-[14px] mt-2">
            初期治療が最も効果的で経済的です。
          </p>
        </div>
      </div>
    </div>
  );
}
