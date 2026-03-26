'use client';

export default function RiskLevelsSection() {
  const riskLevels = [
    { level: '低リスク', levelBg: 'bg-[#e8f8f0]', levelColor: 'text-[#15bd66]', title: '正常な親知らず', description: '正常に生えた親知らずも管理が難しく虫歯リスクが高いです' },
    { level: '中リスク', levelBg: 'bg-[#fff9ec]', levelColor: 'text-[#ffc53d]', title: '部分埋伏親知らず', description: '食べ物が詰まりやすく炎症が頻繁に発生します' },
    { level: '高リスク', levelBg: 'bg-[#fef1e5]', levelColor: 'text-[#f57400]', title: '完全埋伏親知らず', description: '嚢胞形成の可能性があり早期抜歯が必要です' },
    { level: '高リスク', levelBg: 'bg-[#fef1e5]', levelColor: 'text-[#f57400]', title: '歯根湾曲親知らず', description: '根が曲がっており抜歯の難易度が高いです' },
    { level: '即時処置必要', levelBg: 'bg-[#ffebed]', levelColor: 'text-[#ff1616]', title: '水平埋伏親知らず', description: '前の歯を押して歯列不均衡と虫歯を引き起こします' }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">RISK LEVELS</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">
              親知らず <span className="text-[#008095]">状態別リスク</span>
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              状態によって抜歯の時期と方法が異なります
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            {riskLevels.map((risk, index) => (
              <div key={index} className="bg-white border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden p-5">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-2 items-start flex-shrink-0">
                    <div className={`${risk.levelBg} rounded-lg px-3 py-1.5`}>
                      <p className={`font-bold text-[13px] leading-[1.4] tracking-[-0.26px] ${risk.levelColor}`}>{risk.level}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <p className="font-bold text-[18px] leading-[1.35] tracking-[-0.36px] text-black">{risk.title}</p>
                    <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">{risk.description}</p>
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
