export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>From the Doctor</p>
            <h2 className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              歯茎をしっかり管理するだけで<br />
              天然歯を一生使えます
            </h2>
          </div>

          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                インプラントを受けにいらっしゃる患者様を拝見するたびに心が重くなります。<br /><br />
                ほとんどは歯自体が悪くなったわけではありません。<span className="text-[#008095] font-bold">歯茎を適時に管理できなかったため</span>結局抜かざるを得なくなったケースがはるかに多いです。
              </p>
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                歯周病治療は痛くて面倒だと先延ばしにしがちです。しかし年に1回のスケーリング、異常を感じた時にすぐ来院するだけでも<span className="text-[#008095] font-bold">天然歯を20〜30年長く使えます。</span>
              </p>
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                インプラントがどんなに良くても、天然歯に勝つ補綴物はありません。
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-[15px] text-black tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>イ・ドンヒョン院長</p>
                <p className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>統合歯科専門医・コドクファースト歯科 代表院長</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { num: '年1回', desc: 'スケーリングだけでも心血管疾患リスク14%減少' },
              { num: '80%', desc: '成人の歯周病保有 — ほとんど自覚症状なし' },
              { num: '3倍', desc: '歯周炎放置時にインプラントが必要になるリスク' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4">
                <p className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.num}</p>
                <p className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
