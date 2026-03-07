'use client';

export default function TmjWhyUsSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Why Us
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            고덕퍼스트치과에서<br />
            턱관절 치료를<br />
            <span className="text-[#008095]">받아야 하는 이유</span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="flex flex-col gap-5">
          {[
            {
              num: '01',
              title: '통합치의학과 전문의 직접 진료',
              desc: '턱관절은 교합, 보철, 치주 등 여러 분야가 얽힌 복합 질환입니다. 통합치의학과 전문의가 전체를 보고 진단하기 때문에 정확한 원인 파악이 가능합니다.',
            },
            {
              num: '02',
              title: '비수술 보존적 치료 우선',
              desc: '대부분의 턱관절 장애는 수술 없이 치료할 수 있습니다. 약물, 물리치료, 스플린트 등 보존적 치료를 우선하여 환자 부담을 최소화합니다.',
            },
            {
              num: '03',
              title: '맞춤형 스플린트 정밀 제작',
              desc: '디지털 교합 분석을 기반으로 환자 개개인에 맞는 스플린트를 정밀 제작합니다. 주기적인 교합 조정으로 치료 효과를 극대화합니다.',
            },
            {
              num: '04',
              title: '근본 원인까지 해결',
              desc: '단순히 통증만 줄이는 것이 아니라, 부정교합·결손 치아·악습관 등 근본 원인을 함께 해결하여 재발을 방지합니다.',
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-center gap-3">
                <span
                  className="text-[#008095] font-bold text-[28px] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.num}
                </span>
                <h3
                  className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.title}
                </h3>
              </div>
              <p
                className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-center">
          <p
            className="text-[22px] font-bold text-white leading-[1.4]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            턱관절 통증,<br />
            <span className="text-[#4DC8D8]">참지 마시고 상담받으세요</span>
          </p>
          <p className="text-white/50 text-[14px] mt-2">
            초기 치료가 가장 효과적이고 경제적입니다.
          </p>
        </div>

      </div>
    </div>
  );
}
