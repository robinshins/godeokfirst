'use client';

export default function JawBotoxHowItWorksSection() {
  const timeline = [
    { when: '시술 당일', desc: '좌우 교근에 나눠 주입, 10분 내외. 시술 후 바로 귀가합니다.' },
    { when: '1~2주', desc: '이를 악물 때 힘이 빠지는 느낌이 들고, 아침 턱 피로·근육 통증이 줄어듭니다.' },
    { when: '4~8주', desc: '교근 부피가 줄면서 턱선이 부드러워집니다. 근육성 사각턱에서 변화가 보이는 시기입니다.' },
    { when: '3~6개월', desc: '효과가 서서히 사라집니다. 필요하면 3개월 이상 간격을 두고 재시술합니다.' },
  ];

  const benefits = [
    '이갈이·이 악물기 힘이 줄어 치아 마모와 보철물 파손 위험 감소',
    '교근 과긴장으로 생긴 턱 근육 통증, 아침 턱 피로감 완화',
    '교근 비대로 각진 턱선이 부드러워짐 (근육성 사각턱)',
    '턱관절 치료 중 근육 긴장을 낮추는 보조 치료',
  ];

  const cautions = [
    '효과는 일시적(보통 3~6개월)이며 유지하려면 반복 시술이 필요합니다',
    '시술 후 1~2주간 단단한 음식을 씹을 때 힘이 빠진 느낌이 들 수 있습니다',
    '주사 부위 멍·통증·붓기가 생길 수 있고, 드물게 좌우 비대칭이나 미소 변화가 나타날 수 있습니다',
    '임신·수유 중, 신경근육 질환이 있는 경우 등은 시술이 제한됩니다',
    '뼈 형태가 원인인 사각턱에는 효과가 제한적입니다',
  ];

  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            How It Works
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            턱보톡스는<br />
            <span className="text-[#008095]">이렇게 작용합니다</span>
          </h2>
        </div>

        {/* Mechanism */}
        <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
          <h3
            className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            근육이 과하게 힘을 쓰지 못하게 합니다
          </h3>
          <p
            className="text-[#727582] text-[15px] leading-[1.7]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            보툴리눔 톡신은 신경에서 근육으로 전달되는 수축 신호를 일시적으로 차단합니다. 교근(깨물근)에 주입하면 이를 악물거나 갈 때 근육이 과도하게 수축하지 못해 힘이 줄어들고, 긴장성 통증이 완화됩니다. 쓰이는 힘이 줄어든 근육은 시간이 지나면서 부피도 서서히 줄어듭니다.
          </p>
          <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
            {['주입 부위: 좌우 교근(깨물근)', '작용: 근육 수축 신호 차단 → 힘·긴장 감소', '변화: 통증 완화 → 근육 부피 감소 → 턱선 변화'].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                  <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                  <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[14px] font-semibold text-[#2d3340] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-3">
          <h3
            className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3] px-1"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            시술 후 변화 시기
          </h3>
          <div className="flex flex-col gap-3">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4">
                <p
                  className="font-bold text-[16px] text-[#008095] tracking-[-0.02em] shrink-0 w-[76px] pt-[1px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.when}
                </p>
                <p
                  className="font-medium text-[14px] leading-[1.6] text-[#3e3a3a] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#9298a6] text-[12px] px-1 leading-[1.5]">
            시기와 정도는 개인의 근육 상태와 용량에 따라 다를 수 있습니다.
          </p>
        </div>

        {/* Benefits / Cautions */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#008095] rounded-[24px] p-6 flex flex-col gap-4 shadow-xl shadow-[#008095]/20">
            <h3
              className="font-bold text-[18px] text-white tracking-[-0.02em]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              기대할 수 있는 변화
            </h3>
            <div className="flex flex-col gap-2.5">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[3px]">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-white/90 leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
            <h3
              className="font-bold text-[18px] text-black tracking-[-0.02em]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              시술 전 알아두실 것
            </h3>
            <div className="flex flex-col gap-2.5">
              {cautions.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#727582] shrink-0 mt-[2px] text-[14px]">·</span>
                  <p className="text-[14px] text-[#5d5f6d] leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[#9298a6] text-[12px] leading-[1.6] border-t border-[#e9ebf1] pt-3">
              개인의 구강 상태에 따라 효과와 부작용이 다르게 나타날 수 있습니다. 시술 여부는 진단 후 의료진과 충분히 상담하여 결정하시기 바랍니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
