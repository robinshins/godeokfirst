'use client';

export default function TmjCausesSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Root Cause</p>
          <h2 className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            顎関節障害、<br />
            <span className="text-[#008095]">原因を知ってこそ</span><br />
            正しく治療できます
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {[
              {
                tag: '習慣', title: '食いしばり・歯ぎしり',
                desc: 'ストレスや睡眠中に無意識に歯を強く噛んだり歯ぎしりすると、顎関節と周辺筋肉に過度な負荷がかかり関節ディスクが損傷します。',
                items: ['睡眠中の歯ぎしり', '日中の食いしばりの習慣', '頬杖、片側だけで噛む'],
              },
              {
                tag: '咬合', title: '不正咬合・歯の欠損',
                desc: '上下の歯の噛み合わせがバランスを失うと顎関節に非対称な力がかかり、長期的に関節に問題が生じます。',
                items: ['歯の喪失後の放置', '不良補綴物', '矯正治療が必要な状態'],
              },
              {
                tag: '外傷', title: '外部衝撃・過度な開口',
                desc: '事故や衝撃で顎を傷つけたり、歯科治療・あくびなどで口を過度に開けて関節に損傷が生じるケースです。',
                items: ['交通事故・転倒', '過度なあくび', '長時間の歯科施術後'],
              },
              {
                tag: 'ストレス', title: '精神的緊張・ストレス',
                desc: 'ストレスは顎周辺の筋肉を緊張させ、無意識に歯を食いしばる習慣を作り、顎関節障害の主要原因になります。',
                items: ['慢性ストレス', '不安・緊張状態', '睡眠障害'],
              },
            ].map((cause, idx) => (
              <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">{cause.tag}</span>
                  <h3 className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{cause.title}</h3>
                </div>
                <p className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{cause.desc}</p>
                <div className="flex flex-col gap-2 border-t border-[#e9ebf1] pt-3">
                  {cause.items.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#008095] shrink-0 mt-[3px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="#008095" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <p className="text-[#008095] font-semibold text-[13px] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
