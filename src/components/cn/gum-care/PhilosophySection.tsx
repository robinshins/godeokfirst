'use client';

export default function PhilosophySection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        <div className="flex flex-col gap-5 text-center">
          <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Our Philosophy
          </p>
          <h2 className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            积极推荐牙周治疗的牙科<br />
            <span className="text-[#008095]">真正有诚意的牙科</span>
          </h2>
          <p className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            种植牙再好也比不上天然牙。<br />
            守护天然牙才是最好的治疗。
          </p>
        </div>

        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#2d3340]/5 text-[#2d3340]/50 font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                Problem
              </span>
              <p className="font-bold text-[15px] text-[#2d3340]">
                为什么很多医院不愿做牙周治疗？
              </p>
            </div>
            <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5 border border-[#e9ebf1]">
              {[
                { n: '1', text: '拔牙后做种植牙收益更高', sub: '做牙周治疗保牙后无法获得种植牙的治疗费。' },
                { n: '2', text: '时间精力投入多但保险收益低', sub: '牙周治疗精细且耗时长但收益少，医院不愿做。' },
                { n: '3', text: '治疗后也需要管理，结果不确定', sub: '没有患者持续配合容易复发，对治疗结果有压力。' },
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
              <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                Identity
              </span>
              <p className="font-bold text-[15px] text-[#008095]">
                高德First牙科坚持牙周治疗的理由
              </p>
            </div>
            <div className="bg-[#008095] rounded-[24px] p-7 flex flex-col gap-6 shadow-xl shadow-[#008095]/20">
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-[22px] leading-[1.35]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  保存天然牙<br />始终是第一优先
                </p>
                <div className="h-0.5 w-14 bg-white/30 mt-1 mb-2" />
                <p className="text-white/80 text-[14px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  即使有些不便和麻烦，守护牙齿对患者来说也是最好的治疗。看到接受牙周治疗后牙齿使用长久的患者们，是最有成就感的事。
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  { title: '综合牙科专家亲自诊疗', desc: '精密诊断牙龈状态，从治疗计划到完成全程亲自负责。' },
                  { title: '4阶段疼痛缓解麻醉系统', desc: '漱口麻醉 → 涂布麻醉 → 电动麻醉器 → 神经管麻醉器。最大限度减少牙周治疗的不适感。' },
                  { title: '定期管理计划', desc: '治疗后也通过3~6个月周期检查预防复发，延长牙齿寿命。' },
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
