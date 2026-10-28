'use client';

import Link from 'next/link';

export default function JawBotoxProcessSection() {
  const steps = [
    {
      num: '1',
      title: '진단 · 원인 확인',
      desc: '교근을 눌러 두께와 압통을 확인하고, 치아 마모·균열, 교합과 턱관절 상태를 검사합니다. 필요하면 파노라마·3D CT로 턱뼈 형태를 확인해 근육이 원인인지 뼈가 원인인지 구분합니다.',
      items: ['교근 두께 · 압통 확인', '치아 마모 · 균열 · 보철물 상태 체크', '교합 · 턱관절 평가, 필요 시 영상 검사'],
      highlight: false,
    },
    {
      num: '2',
      title: '시술 설계',
      desc: '이갈이 완화, 근육 통증 완화, 턱선 개선 중 어디에 목적을 두는지에 따라 용량과 주입 지점을 정합니다. 씹는 기능이 지나치게 떨어지지 않도록 치아와 보철 상태를 함께 고려합니다.',
      items: ['목적에 맞는 용량 결정 (50 · 100유닛 등)', '좌우 근육 크기 차이 반영', '이갈이 장치 · 턱관절 치료 병행 여부 결정'],
      highlight: false,
    },
    {
      num: '3',
      title: '시술 (10분 내외)',
      desc: '가는 주사침으로 좌우 교근 몇 지점에 나눠 주입합니다. 통증이 걱정되면 표면마취나 냉각 후 진행하며, 시술이 끝나면 바로 귀가해 일상생활이 가능합니다.',
      items: ['좌우 교근에 나눠 주입', '필요 시 표면마취 · 냉각', '시술 후 바로 귀가'],
      highlight: true,
    },
    {
      num: '4',
      title: '시술 후 관리 · 경과 확인',
      desc: '당일 주의사항을 안내하고, 2~4주 뒤 효과와 좌우 균형을 확인합니다. 이후 정기검진 때 교근 상태와 재시술 시기를 함께 봅니다.',
      items: ['당일 주사 부위 마사지 · 사우나 · 음주 · 격한 운동 피하기', '2~4주 뒤 경과 확인', '재시술은 3개월 이상 간격 권장'],
      highlight: false,
    },
  ];

  return (
    <div className="bg-white w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Process
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            고덕퍼스트치과의<br />
            <span className="text-[#008095]">턱보톡스 진행 과정</span>
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            주사보다 진단에 시간을 더 씁니다.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-5">
          {steps.map((step) => (
            step.highlight ? (
              <div key={step.num} className="bg-[#008095] rounded-[24px] p-6 flex flex-col gap-5 shadow-xl shadow-[#008095]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-[16px]">{step.num}</span>
                  </div>
                  <h3
                    className="font-bold text-[20px] text-white tracking-[-0.02em]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-white/80 text-[15px] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {step.desc}
                </p>
                <div className="bg-white/10 rounded-[16px] p-4 flex flex-col gap-2">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                        <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-[14px] font-semibold text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={step.num} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5 border border-[#e9ebf1]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                    <span className="text-white font-bold text-[16px]">{step.num}</span>
                  </div>
                  <h3
                    className="font-bold text-[20px] text-black tracking-[-0.02em]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-[#727582] text-[15px] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {step.desc}
                </p>
                <div className="bg-white rounded-[16px] p-4 flex flex-col gap-2 border border-[#e9ebf1]">
                  {step.items.map((item, i) => (
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
            )
          ))}
        </div>

        {/* Price Notice */}
        <div className="bg-white rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1] shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
          <div className="flex flex-col gap-1">
            <h3
              className="font-bold text-[18px] text-black tracking-[-0.02em]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              턱보톡스 비급여 진료비용
            </h3>
            <p className="text-[#9298a6] text-[12px]">의료법 제45조에 따른 비급여 진료비용 고지</p>
          </div>
          <div className="flex flex-col divide-y divide-[#e9ebf1]">
            {[
              { name: '보톡스 50유닛', price: '100,000원' },
              { name: '보톡스 100유닛', price: '150,000원' },
            ].map((row) => (
              <div key={row.name} className="flex items-center justify-between py-3">
                <p className="text-[15px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{row.name}</p>
                <p className="text-[15px] font-bold text-[#008095]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{row.price}</p>
              </div>
            ))}
          </div>
          <p className="text-[#727582] text-[13px] leading-[1.6]">
            부가세 별도. 필요 용량은 진단 후 결정됩니다. 건강보험이 적용되지 않는 비급여 항목이며, 전체 비급여 수가표는 페이지 하단에서 확인할 수 있습니다.
          </p>
        </div>

        {/* CTA */}
        <Link href="/consultation" className="w-full">
          <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
            <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              턱보톡스 상담 예약하기
            </p>
          </button>
        </Link>

      </div>
    </div>
  );
}
