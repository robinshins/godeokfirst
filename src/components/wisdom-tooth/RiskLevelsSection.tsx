'use client';

export default function RiskLevelsSection() {
  const riskLevels = [
    {
      level: '저위험',
      levelBg: 'bg-[#e8f8f0]',
      levelColor: 'text-[#15bd66]',
      title: '정상 사랑니',
      description: '정상적으로 자란 사랑니도 관리가 어려워 충치 위험이 높습니다',
    },
    {
      level: '중위험',
      levelBg: 'bg-[#fff9ec]',
      levelColor: 'text-[#ffc53d]',
      title: '부분매복 사랑니',
      description: '음식물이 끼기 쉽고 염증이 자주 발생합니다',
    },
    {
      level: '고위험',
      levelBg: 'bg-[#fef1e5]',
      levelColor: 'text-[#f57400]',
      title: '완전매복 사랑니',
      description: '낭종 형성 가능성이 있어 조기 발치가 필요합니다',
    },
    {
      level: '고위험',
      levelBg: 'bg-[#fef1e5]',
      levelColor: 'text-[#f57400]',
      title: '치근만곡 사랑니',
      description: '뿌리가 구부러져 있어 발치 난이도가 높습니다',
    },
    {
      level: '즉시 처치 필요',
      levelBg: 'bg-[#ffebed]',
      levelColor: 'text-[#ff1616]',
      title: '수평매복 사랑니',
      description: '앞 치아를 밀어 치열 불균형과 충치를 유발합니다',
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">RISK LEVELS</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">
              사랑니 <span className="text-[#008095]">상태별 위험도</span>
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              상태에 따라 발치 시기와 방법이 달라집니다
            </p>
          </div>

          {/* Risk Cards */}
          <div className="flex flex-col gap-4 items-start w-full">
            {riskLevels.map((risk, index) => (
              <div
                key={index}
                className="bg-white border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-2 items-start flex-shrink-0">
                    <div className={`${risk.levelBg} rounded-lg px-3 py-1.5`}>
                      <p className={`font-bold text-[13px] leading-[1.4] tracking-[-0.26px] ${risk.levelColor}`}>
                        {risk.level}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <p className="font-bold text-[18px] leading-[1.35] tracking-[-0.36px] text-black">
                      {risk.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
