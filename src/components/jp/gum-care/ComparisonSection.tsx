'use client';

import Link from 'next/link';

const levels = [
  {
    level: 'Step 1', title: '歯磨き', badge: '毎日必須',
    desc: '歯の表面と歯茎線の上の歯垢・細菌膜を除去します。正しいブラッシングは歯周病予防の第一段階であり、1日2回以上実践すれば効果的です。',
    point: '歯肉縁下（歯茎の奥深く）の歯石はブラッシングでは除去できません。',
    insurance: null, highlight: false,
  },
  {
    level: 'Step 2', title: 'スケーリング', badge: '年1〜2回・健康保険適用',
    desc: '歯肉縁上（歯茎の上）に固まった歯石と歯垢を超音波設備で除去します。スケーリング1回で心血管疾患リスクを10〜14%下げられるという研究結果があります。満19歳以上なら年1回健康保険が適用されます。',
    point: '歯肉縁下（歯茎の奥深く）まではスケーリングだけでは届きにくいです。',
    insurance: '満19歳以上・年1回・健康保険適用（自己負担20%）',
    highlight: false,
  },
  {
    level: 'Step 3', title: '歯周病治療', badge: '必要時・健康保険適用',
    desc: '歯茎の奥深くの歯周ポケット内に位置する歯石と細菌をキュレット（歯周治療器具）で精密に除去し、歯根表面を滑らかに整え細菌が再付着しないようにします。必要に応じてペリオクリン抗生軟膏を歯周ポケットに直接注入し細菌を追加除去します。この過程は健康保険が適用され、進行度により1〜4区域に分けて進行します。',
    point: '歯周病治療後3〜6ヶ月周期の定期検診で再発を予防します。',
    insurance: '健康保険適用・区域別進行・麻酔含む',
    highlight: true,
  },
];

export default function ComparisonSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Care Levels</p>
          <h2 className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            歯磨きだけでは<br />足りない時があります
          </h2>
          <p className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            歯茎の健康は段階別に管理すべきです。<br />
            スケーリングと歯周病治療、どちらも健康保険が適用されます。
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {levels.map((c, i) => (
            <div key={i} className={`rounded-[24px] p-6 flex flex-col gap-5 relative overflow-hidden ${c.highlight ? 'bg-white border-2 border-[#008095] shadow-[0_8px_32px_-8px_rgba(0,128,149,0.2)]' : 'bg-white border border-[#e9ebf1] shadow-[0_4px_20px_-4px_rgba(21,26,36,0.06)]'}`}>
              {c.highlight && (
                <div className="absolute top-0 right-0 bg-[#008095] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-[14px] rounded-tr-[22px]">
                  最も重要
                </div>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black text-[#008095] tracking-[0.1em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{c.level}</span>
                <span className={`font-bold text-[11px] px-2.5 py-1 rounded-full ${c.highlight ? 'bg-[#008095] text-white' : 'bg-[#f0f7fa] text-[#008095]'}`}>{c.badge}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[22px] text-[#2d3340] tracking-[-0.03em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{c.title}</h3>
                <p className="font-medium text-[15px] text-[#4a4f5e] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{c.desc}</p>
              </div>
              <div className="flex items-start gap-2 bg-[#f8f9fb] rounded-2xl p-4">
                <div className="shrink-0 mt-[3px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#008095" strokeWidth="1.5" /><path d="M7 4.5V7.5M7 9.5V9.8" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <p className="text-[13.5px] font-semibold text-[#008095] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{c.point}</p>
              </div>
              {c.insurance && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L2 4V8C2 11.3 4.6 14.4 8 15C11.4 14.4 14 11.3 14 8V4L8 1.5Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round" /><path d="M5.5 8L7 9.5L10.5 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <p className="text-[#008095] font-bold text-[13px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{c.insurance}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#21314E] rounded-[24px] p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.15em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>健康保険のご案内</p>
            <h4 className="text-white font-bold text-[20px] leading-[1.35]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              スケーリングと歯周病治療、<br />どちらも健康保険が適用されます
            </h4>
            <p className="text-white/60 text-[14px] leading-[1.7] mt-1" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              費用負担が大きくないので、症状がなくても年に1回はスケーリングを受けて歯茎の状態を検査してください。早期に発見するほど治療がはるかに簡単で費用も少なくすみます。
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: 'スケーリング', detail: '満19歳以上・年1回・自己負担約20%' },
              { label: '歯周治療（歯周病治療）', detail: '歯周炎診断時・区域別保険適用・麻酔含む' },
              { label: 'ペリオクリン治療', detail: '歯周ポケットの深さにより保険適用可能' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-white font-bold text-[14px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.label}</p>
                <p className="text-[#4DC8D8] font-medium text-[13px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <Link href="/jp/consultation">
            <div className="bg-[#008095] rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#006d80] transition-colors">
              <p className="text-white font-bold text-[15px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>歯茎の状態を相談予約する</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
