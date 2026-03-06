'use client';

export default function PhilosophySection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Main Philosophy Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Our Philosophy
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            잇몸 치료를 적극적으로<br />권하는 치과가<br />
            <span className="text-[#008095]">진정성 있는 치과</span>입니다
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            임플란트가 아무리 좋아도 자연 치아를 이길 수 없습니다.<br />
            자연 치아를 지켜내는 것이 가장 좋은 치료입니다.
          </p>
        </div>

        {/* Story Flow */}
        <div className="flex flex-col gap-8">

          {/* Box 1: 왜 잇몸 치료를 꺼리나 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#2d3340]/5 text-[#2d3340]/50 font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                Problem
              </span>
              <p className="font-bold text-[15px] text-[#2d3340]">
                왜 많은 병원이 잇몸 치료를 꺼릴까요?
              </p>
            </div>
            <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5 border border-[#e9ebf1]">
              {[
                {
                  n: '1',
                  text: '발치 후 임플란트가 수익성이 훨씬 더 높음',
                  sub: '잇몸 치료로 치아를 살려봤자 임플란트 시술비를 받을 수 없습니다.',
                },
                {
                  n: '2',
                  text: '시간·노력 대비 건강보험 수가가 낮음',
                  sub: '잇몸 치료는 세밀하고 시간이 많이 걸리지만 수익이 적어 병원에서 꺼리게 됩니다.',
                },
                {
                  n: '3',
                  text: '치료 후에도 관리가 필요해 결과가 불확실함',
                  sub: '환자의 꾸준한 협조 없이는 재발이 쉬워, 치료 결과에 대한 부담이 큽니다.',
                },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-[#e9ebf1] shrink-0 mt-[2px]">
                    <span className="text-[11px] text-[#2d3340]/40 font-bold">{item.n}</span>
                  </span>
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-[15px] font-bold text-[#2d3340] leading-[1.4]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.text}
                    </p>
                    <p
                      className="text-[13px] font-medium text-[#2d3340]/50 leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="flex flex-col items-center gap-1 py-2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#e9ebf1] to-[#008095]/50" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3V15M9 15L4 10M9 15L14 10" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Box 2: 우리가 고집하는 이유 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                Identity
              </span>
              <p className="font-bold text-[15px] text-[#008095]">
                고덕퍼스트치과가 잇몸 치료를 고집하는 이유
              </p>
            </div>
            <div className="bg-[#008095] rounded-[24px] p-7 flex flex-col gap-6 shadow-xl shadow-[#008095]/20">
              <div className="flex flex-col gap-2">
                <p
                  className="text-white font-bold text-[22px] leading-[1.35]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  자연 치아 보존이<br />항상 1순위여야 합니다
                </p>
                <div className="h-0.5 w-14 bg-white/30 mt-1 mb-2" />
                <p
                  className="text-white/80 text-[14px] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  조금 불편하고 귀찮더라도 치아를 지켜드리는 것이 환자에게도,
                  저희에게도 최선의 치료입니다. 잇몸 치료를 받고 치아를
                  오래 쓰시는 분들을 볼 때 가장 보람됩니다.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    title: '통합치의학과 전문의 직접 진료',
                    desc: '잇몸 상태를 정밀하게 진단하고, 치료 계획부터 마무리까지 직접 담당합니다.',
                  },
                  {
                    title: '4단계 통증 완화 마취 시스템',
                    desc: '가글 마취 → 도포 마취 → 전동마취기 → 신경관마취기. 잇몸 치료의 불편함을 최대한 줄입니다.',
                  },
                  {
                    title: '정기 관리 프로그램',
                    desc: '치료 이후에도 3~6개월 주기 점검으로 재발을 예방하고 치아 수명을 늘립니다.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-[2px]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p
                        className="text-white font-bold text-[15px] leading-[1.4]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-white/70 text-[13px] leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item.desc}
                      </p>
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
