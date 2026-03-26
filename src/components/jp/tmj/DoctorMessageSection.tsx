export default function TmjDoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>From the Doctor</p>
            <h2 className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              顎関節の痛み、<br />
              我慢するとさらに悪化します
            </h2>
          </div>

          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                「顎から音がするけど大丈夫だろう」と放置される方が本当に多いです。<br /><br />
                しかし顎関節障害は<span className="text-[#008095] font-bold">初期に治療すれば簡単ですが、放置すると慢性化</span>して治療が難しくなります。
              </p>
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                顎関節の痛みは頭痛、肩こり、耳鳴りなど全身症状につながる可能性があります。<span className="text-[#008095] font-bold">正確な診断が正しい治療の始まり</span>です。
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
              { num: '70%', desc: '成人人口のうち顎関節障害経験率' },
              { num: '3倍', desc: '放置時の慢性化リスク — 早期治療が核心' },
              { num: '85%', desc: '保存的治療（非手術）で改善する割合' },
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
