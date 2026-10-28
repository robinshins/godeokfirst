'use client';

export default function JawBotoxWhyDentistSection() {
  const reasons = [
    {
      num: '01',
      title: '교근은 치과가 매일 다루는 저작근입니다',
      desc: '교근(깨물근)과 측두근은 치아를 맞물리게 하는 저작근입니다. 치과의사는 이 근육의 해부, 힘의 방향, 교합과의 관계를 기본으로 배우고 매일 진료에서 다룹니다. 치과의사의 보톡스 시술은 2016년 대법원 전원합의체 판결로 치과의사 면허 범위에 속한다고 인정되었습니다.',
    },
    {
      num: '02',
      title: '왜 턱이 각지고 아픈지, 원인부터 진단합니다',
      desc: '사각턱과 턱 근육 통증은 이갈이·이 악물기·교합 불균형·턱관절 장애가 원인인 경우가 많습니다. 치과에서는 파노라마·3D CT로 뼈 형태를 확인하고 교합과 턱관절을 함께 검사해, 보톡스가 맞는 경우와 다른 치료가 필요한 경우를 구분합니다.',
    },
    {
      num: '03',
      title: '씹는 힘을 지키는 용량으로 시술합니다',
      desc: '교근 힘을 지나치게 떨어뜨리면 단단한 음식을 씹기 어렵고, 그 부담이 턱관절과 다른 근육으로 옮겨갈 수 있습니다. 치과는 치아 마모·보철물·교합 상태를 보며 저작 기능을 유지하는 범위에서 용량과 주입 위치를 정합니다.',
    },
    {
      num: '04',
      title: '이갈이 장치·턱관절 치료와 함께 관리합니다',
      desc: '보톡스는 근육의 힘을 일시적으로 낮추는 방법이고, 이갈이 습관 자체를 없애지는 않습니다. 필요하면 이갈이 장치(스플린트), 교합 조정, 생활습관 교정을 병행해 한 곳에서 치료 계획을 세웁니다.',
    },
    {
      num: '05',
      title: '정기검진 때 경과를 함께 봅니다',
      desc: '스케일링·정기검진으로 방문하실 때 교근 상태, 치아 마모 진행, 재시술 시기를 함께 확인합니다. 턱보톡스가 일회성 시술로 끝나지 않고 구강 관리의 일부로 이어집니다.',
    },
  ];

  const clinicPoints = [
    '보건복지부 인증 통합치의학과 전문의 이동현 대표원장이 직접 진단하고 시술',
    '턱관절장애교육연구회 수료, 턱관절 치료(스플린트·물리·약물치료) 진료 중',
    '3D CT · 디지털 장비로 뼈 형태와 교합 상태 확인 후 시술 여부 결정',
    '월·목 야간진료(21시까지)로 퇴근 후에도 시술 가능',
  ];

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
            Why Dentist
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            턱보톡스,<br />
            <span className="text-[#008095]">치과에서 맞아야 하는</span><br />
            이유
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            교근은 &lsquo;씹는 근육&rsquo;입니다.<br />
            턱·치아·교합을 다루는 치과의사의 전문 영역입니다.
          </p>
        </div>

        {/* Reasons */}
        <div className="flex flex-col gap-5">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-start gap-3">
                <span
                  className="text-[#008095] font-bold text-[28px] tracking-[-0.03em] leading-none shrink-0"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.num}
                </span>
                <h3
                  className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3] pt-[3px]"
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

        {/* Clinic Callout */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-7 shadow-xl flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              고덕퍼스트치과에서는
            </p>
            <p
              className="text-[22px] font-bold text-white leading-[1.4]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              턱관절을 진료하는 전문의가<br />
              <span className="text-[#4DC8D8]">턱보톡스를 직접 시술합니다</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {clinicPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[3px]">
                  <circle cx="8" cy="8" r="7" stroke="rgba(77,200,216,0.5)" strokeWidth="1.5" />
                  <path d="M5 8L7 10L11 6" stroke="#4DC8D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p
                  className="text-white/80 text-[14px] leading-[1.6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
