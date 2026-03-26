export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              From the Doctor
            </p>
            <h2 className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              只要好好管理牙龈<br />
              天然牙可以终身使用
            </h2>
          </div>

          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                每次看到来做种植牙的患者时，心情都很沉重。<br /><br />
                大部分不是牙齿本身坏了。<span className="text-[#008095] font-bold">因为没有及时管理牙龈</span>，最终不得不拔牙的情况更多。
              </p>
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                牙周治疗容易因为怕疼和嫌麻烦而推迟。但每年做一次洁牙，感到异常时立即就诊，<span className="text-[#008095] font-bold">天然牙就能多用20~30年。</span>
              </p>
              <p className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                种植牙再好，也没有任何修复体能比得上天然牙。
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p className="font-bold text-[15px] text-black tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  李东贤院长
                </p>
                <p className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  综合牙科专家 · 高德First牙科 代表院长
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { num: '每年1次', desc: '仅洁牙就能降低心血管疾病风险14%' },
              { num: '80%', desc: '成人患有牙龈疾病 — 大部分没有自觉症状' },
              { num: '3倍', desc: '放置牙周炎时需要种植牙的风险' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4">
                <p className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {item.num}
                </p>
                <p className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
