'use client';

import Link from 'next/link';

const levels = [
  {
    level: 'Step 1',
    title: '양치질',
    badge: '매일 필수',
    desc: '치아 표면과 잇몸선 위쪽의 치태·세균막을 제거합니다. 올바른 칫솔질은 잇몸 질환 예방의 첫 번째 단계이며, 하루 2회 이상 실천해야 효과적입니다.',
    point: '치은연하(잇몸 속 깊은 곳)의 치석은 칫솔로 제거가 불가능합니다.',
    insurance: null,
    highlight: false,
  },
  {
    level: 'Step 2',
    title: '스케일링',
    badge: '연 1~2회 · 건강보험 적용',
    desc: '치은연상(잇몸 위쪽)에 굳어 붙은 치석과 치태를 초음파 장비로 제거합니다. 스케일링 한 번으로 심혈관 질환 위험을 10~14% 낮출 수 있다는 연구 결과가 있습니다. 만 19세 이상이라면 연 1회 건강보험이 적용됩니다.',
    point: '치은연하(잇몸 깊숙한 곳)까지는 스케일링만으로 닿기 어렵습니다.',
    insurance: '만 19세 이상 · 연 1회 · 건강보험 적용 (본인 부담 20%)',
    highlight: false,
  },
  {
    level: 'Step 3',
    title: '잇몸 치료',
    badge: '필요 시 · 건강보험 적용',
    desc: '잇몸 깊숙한 치주낭 속에 자리잡은 치석과 세균을 큐렛(치주 치료기구)으로 정밀하게 제거하고, 치근 표면을 매끄럽게 다듬어 세균이 다시 붙지 않도록 합니다. 필요 시 페리오클린 항생 연고를 치주낭에 직접 주입하여 세균을 추가로 제거합니다. 이 과정은 건강보험 적용이 되며, 진행 정도에 따라 1~4구역으로 나눠 진행합니다.',
    point: '잇몸 치료 후 3~6개월 주기 정기 검진을 통해 재발을 예방합니다.',
    insurance: '건강보험 적용 · 구역별 진행 · 마취 포함',
    highlight: true,
  },
];

export default function ComparisonSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Care Levels
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            양치질만으로는<br />부족할 때가 있습니다
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            잇몸 건강은 단계별로 관리해야 합니다.<br />
            스케일링과 잇몸 치료, 모두 건강보험이 적용됩니다.
          </p>
        </div>

        {/* Level Cards */}
        <div className="flex flex-col gap-5">
          {levels.map((c, i) => (
            <div
              key={i}
              className={`rounded-[24px] p-6 flex flex-col gap-5 relative overflow-hidden ${
                c.highlight
                  ? 'bg-white border-2 border-[#008095] shadow-[0_8px_32px_-8px_rgba(0,128,149,0.2)]'
                  : 'bg-white border border-[#e9ebf1] shadow-[0_4px_20px_-4px_rgba(21,26,36,0.06)]'
              }`}
            >
              {c.highlight && (
                <div className="absolute top-0 right-0 bg-[#008095] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-[14px] rounded-tr-[22px]">
                  가장 중요
                </div>
              )}

              {/* Level + Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[11px] font-black text-[#008095] tracking-[0.1em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.level}
                </span>
                <span
                  className={`font-bold text-[11px] px-2.5 py-1 rounded-full ${
                    c.highlight
                      ? 'bg-[#008095] text-white'
                      : 'bg-[#f0f7fa] text-[#008095]'
                  }`}
                >
                  {c.badge}
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bold text-[22px] text-[#2d3340] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-medium text-[15px] text-[#4a4f5e] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.desc}
                </p>
              </div>

              {/* Point */}
              <div className="flex items-start gap-2 bg-[#f8f9fb] rounded-2xl p-4">
                <div className="shrink-0 mt-[3px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#008095" strokeWidth="1.5" />
                    <path d="M7 4.5V7.5M7 9.5V9.8" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p
                  className="text-[13.5px] font-semibold text-[#008095] leading-[1.5]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.point}
                </p>
              </div>

              {/* Insurance Badge */}
              {c.insurance && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5L2 4V8C2 11.3 4.6 14.4 8 15C11.4 14.4 14 11.3 14 8V4L8 1.5Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M5.5 8L7 9.5L10.5 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p
                    className="text-[#008095] font-bold text-[13px]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {c.insurance}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 보험 강조 배너 */}
        <div className="bg-[#21314E] rounded-[24px] p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              건강보험 안내
            </p>
            <h4
              className="text-white font-bold text-[20px] leading-[1.35]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              스케일링과 잇몸 치료,<br />모두 건강보험 됩니다
            </h4>
            <p
              className="text-white/60 text-[14px] leading-[1.7] mt-1"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              비용 부담이 크지 않으니, 증상이 없어도 1년에 한 번은 스케일링을 받고 잇몸 상태를 점검받으세요. 진행 초기에 발견할수록 치료가 훨씬 간단하고 비용도 적게 듭니다.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                label: '스케일링',
                detail: '만 19세 이상 · 연 1회 · 본인 부담 약 20%',
              },
              {
                label: '치주 치료 (잇몸 치료)',
                detail: '치주염 진단 시 · 구역별 보험 적용 · 마취 포함',
              },
              {
                label: '페리오클린 치료',
                detail: '치주낭 깊이에 따라 급여 적용 가능',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                <p
                  className="text-white font-bold text-[14px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#4DC8D8] font-medium text-[13px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <Link href="/consultation">
            <div className="bg-[#008095] rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#006d80] transition-colors">
              <p
                className="text-white font-bold text-[15px]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                잇몸 상태 상담 예약하기
              </p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
