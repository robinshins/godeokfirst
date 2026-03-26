'use client';

export default function PhilosophySection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Our Philosophy</p>
          <h2 className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            歯周病治療を積極的に<br />勧める歯科が<br />
            <span className="text-[#008095]">真に誠実な歯科</span>です
          </h2>
          <p className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            インプラントがどんなに良くても天然歯には勝てません。<br />
            天然歯を守り抜くことが最も良い治療です。
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#2d3340]/5 text-[#2d3340]/50 font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Problem</span>
              <p className="font-bold text-[15px] text-[#2d3340]">なぜ多くの病院が歯周病治療を避けるのか？</p>
            </div>
            <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5 border border-[#e9ebf1]">
              {[
                { n: '1', text: '抜歯後インプラントの方が収益性がはるかに高い', sub: '歯周病治療で歯を救ってもインプラント施術費を受け取れません。' },
                { n: '2', text: '時間・労力に対して健康保険の報酬が低い', sub: '歯周病治療は繊細で時間がかかりますが収益が少ないため病院で避けがちです。' },
                { n: '3', text: '治療後も管理が必要で結果が不確実', sub: '患者の継続的な協力なしには再発しやすく、治療結果への負担が大きいです。' },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-[#e9ebf1] shrink-0 mt-[2px]">
                    <span className="text-[11px] text-[#2d3340]/40 font-bold">{item.n}</span>
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-[15px] font-bold text-[#2d3340] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.text}</p>
                    <p className="text-[13px] font-medium text-[#2d3340]/50 leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 py-2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#e9ebf1] to-[#008095]/50" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3V15M9 15L4 10M9 15L14 10" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Identity</span>
              <p className="font-bold text-[15px] text-[#008095]">コドクファースト歯科が歯周病治療にこだわる理由</p>
            </div>
            <div className="bg-[#008095] rounded-[24px] p-7 flex flex-col gap-6 shadow-xl shadow-[#008095]/20">
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-[22px] leading-[1.35]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  天然歯保存が<br />常に最優先でなければなりません
                </p>
                <div className="h-0.5 w-14 bg-white/30 mt-1 mb-2" />
                <p className="text-white/80 text-[14px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  少し不便で面倒でも歯を守ることが患者にとっても、
                  私たちにとっても最善の治療です。歯周病治療を受けて歯を
                  長く使われる方を見る時が最もやりがいを感じます。
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  { title: '統合歯科専門医 直接診療', desc: '歯茎の状態を精密に診断し、治療計画から仕上げまで直接担当します。' },
                  { title: '4段階痛み緩和麻酔システム', desc: 'ガーグル麻酔 → 塗布麻酔 → 電動麻酔器 → 神経管麻酔器。歯周病治療の不快感を最大限に軽減します。' },
                  { title: '定期管理プログラム', desc: '治療以降も3〜6ヶ月周期のチェックで再発を予防し歯の寿命を延ばします。' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-[2px]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-white font-bold text-[15px] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.title}</p>
                      <p className="text-white/70 text-[13px] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.desc}</p>
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
