'use client';

export default function FeaturesSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">PAINLESS & PRECISE</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black">
              痛くなく<br />
              <span className="text-[#008095]">正確に抜きます</span>
            </h2>
            <p className="font-semibold text-base leading-[1.5] tracking-[-0.32px] text-[#727582]">
              大学病院客員教授を歴任した院長の<br />
              体系的な痛み緩和システム
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {[
              { step: '01', title: '塗布・うがい麻酔', desc: '注射針のチクッとする痛みからなくします。表面麻酔で麻酔注射自体の痛みを最小化します。', color: '#e0f4f6', textColor: '#008095' },
              { step: '02', title: '電動無痛麻酔器', desc: 'コンピューターが自動で注入速度を調節し、麻酔液がゆっくり均一に入るため痛みがほとんどありません。', color: '#008095', textColor: '#ffffff', highlight: true },
            ].map((item) => (
              <div key={item.step} className="rounded-[20px] p-5 flex gap-4 items-start" style={{ backgroundColor: item.color }}>
                <span className="font-black text-[28px] leading-none flex-shrink-0 mt-1" style={{ color: item.highlight ? 'rgba(255,255,255,0.4)' : '#008095', opacity: item.highlight ? 1 : 0.3 }}>{item.step}</span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[17px] leading-[1.4] tracking-[-0.34px]" style={{ color: item.textColor }}>{item.title}</p>
                  <p className="font-medium text-[14px] leading-[1.6] tracking-[-0.28px]" style={{ color: item.highlight ? 'rgba(255,255,255,0.85)' : '#555' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] border-2 border-[#008095] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#008095] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                大学病院レベルの難度抜歯
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center">
                一般歯科で<br />
                「大きい病院に行ってください」と言われたことはありますか？
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              {[
                { label: '複雑な埋伏親知らず', desc: '歯茎の奥深くに埋まっていてもOK' },
                { label: '神経近接親知らず', desc: '神経損傷の心配なく安全に抜歯' },
                { label: '水平埋伏親知らず', desc: '横向きの難しいケースも対応可能' },
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
                朝鮮大学歯科病院客員教授を歴任した院長が<br />
                直接安全に解決します
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
