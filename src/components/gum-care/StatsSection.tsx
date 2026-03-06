'use client';

export default function StatsSection() {
  const stats = [
    { number: '80', unit: '%', label: '성인 잇몸 질환 보유율', source: '대한치주과학회 2024' },
    { number: '14', unit: '% 감소', label: '스케일링 시 심혈관질환 감소', source: '분당서울대병원 2024' },
    { number: '6', unit: '배', label: '치주염 시 혈당 조절 실패', source: '가톨릭대 의대 2023' },
  ];

  return (
    <div className="bg-gradient-to-b from-[#21314E] to-white w-full">
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">

          {/* Header */}
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <h2
                className="font-bold leading-[1.35] text-[30px] text-center text-white tracking-[-0.64px] w-full"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                잇몸질환,<br />
                입안 문제로 그치지 않습니다
              </h2>
              <p
                className="font-semibold leading-[1.4] text-white/80 text-base text-center tracking-[-0.32px] w-full"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                전신 건강에 심각한 영향을 미치는<br />
                잇몸질환의 위험성
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-4 items-start relative shrink-0 w-full z-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
                <div className="flex gap-2 items-baseline justify-center relative shrink-0 w-full">
                  <p
                    className="font-bold leading-none text-[72px] text-center text-nowrap tracking-[-2.88px]"
                    style={{
                      background: 'linear-gradient(to bottom, #008095 0%, #006d80 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'Pretendard, sans-serif',
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="font-bold leading-none text-[#008095] text-2xl text-center tracking-[-0.48px]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {stat.unit}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-start leading-[1.4] not-italic relative shrink-0 text-center w-full">
                  <p
                    className="font-bold text-[#37373e] text-[22px] tracking-[-0.44px] w-full"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="font-medium text-[#9298a6] text-[14px] tracking-[-0.28px] w-full"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {stat.source}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
