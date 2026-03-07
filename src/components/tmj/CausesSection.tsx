'use client';

export default function TmjCausesSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Root Cause
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            턱관절 장애,<br />
            <span className="text-[#008095]">원인을 알아야</span><br />
            제대로 치료합니다
          </h2>
        </div>

        {/* Causes */}
        <div className="flex flex-col gap-8">

          {/* Cause Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                tag: '습관',
                title: '이 악물기 · 이갈이',
                desc: '스트레스나 수면 중 무의식적으로 이를 꽉 물거나 갈면 턱관절과 주변 근육에 과도한 부하가 가해져 관절 디스크가 손상됩니다.',
                items: ['수면 중 이갈이', '낮 동안 이 악물기 습관', '턱 괴기, 한쪽으로만 씹기'],
              },
              {
                tag: '교합',
                title: '부정교합 · 치아 결손',
                desc: '위아래 치아의 맞물림이 균형을 잃으면 턱관절에 비대칭적인 힘이 가해져 장기적으로 관절에 문제가 생깁니다.',
                items: ['치아 상실 후 방치', '불량 보철물', '교정 치료 필요 상태'],
              },
              {
                tag: '외상',
                title: '외부 충격 · 과도한 개구',
                desc: '사고나 충격으로 턱을 다치거나, 치과 치료·하품 등으로 입을 과도하게 벌려 관절에 손상이 생기는 경우입니다.',
                items: ['교통사고 · 낙상', '과도한 하품', '장시간 치과 시술 후'],
              },
              {
                tag: '스트레스',
                title: '정신적 긴장 · 스트레스',
                desc: '스트레스는 턱 주변 근육을 긴장시키고, 무의식적으로 이를 악무는 습관을 만들어 턱관절 장애의 주요 원인이 됩니다.',
                items: ['만성 스트레스', '불안 · 긴장 상태', '수면 장애'],
              },
            ].map((cause, idx) => (
              <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                    {cause.tag}
                  </span>
                  <h3
                    className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {cause.title}
                  </h3>
                </div>
                <p
                  className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {cause.desc}
                </p>
                <div className="flex flex-col gap-2 border-t border-[#e9ebf1] pt-3">
                  {cause.items.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#008095] shrink-0 mt-[3px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="#008095" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p
                        className="text-[#008095] font-semibold text-[13px] leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item}
                      </p>
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
