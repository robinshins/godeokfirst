'use client';

export default function RiskLevelsSection() {
  const riskLevels = [
    { level: '低风险', levelBg: 'bg-[#e8f8f0]', levelColor: 'text-[#15bd66]', title: '正常智齿', description: '正常生长的智齿也难以管理，蛀牙风险高' },
    { level: '中风险', levelBg: 'bg-[#fff9ec]', levelColor: 'text-[#ffc53d]', title: '部分阻生智齿', description: '容易塞食物，经常发生炎症' },
    { level: '高风险', levelBg: 'bg-[#fef1e5]', levelColor: 'text-[#f57400]', title: '完全阻生智齿', description: '有囊肿形成的可能性，需要早期拔除' },
    { level: '高风险', levelBg: 'bg-[#fef1e5]', levelColor: 'text-[#f57400]', title: '弯根智齿', description: '牙根弯曲，拔除难度较高' },
    { level: '需立即处理', levelBg: 'bg-[#ffebed]', levelColor: 'text-[#ff1616]', title: '水平阻生智齿', description: '推挤前牙导致牙列不齐和蛀牙' }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">RISK LEVELS</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">智齿 <span className="text-[#008095]">各状态风险等级</span></h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">根据状态不同，拔除时机和方法也不同</p>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            {riskLevels.map((risk, index) => (
              <div key={index} className="bg-white border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden p-5">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-2 items-start flex-shrink-0">
                    <div className={`${risk.levelBg} rounded-lg px-3 py-1.5`}><p className={`font-bold text-[13px] leading-[1.4] tracking-[-0.26px] ${risk.levelColor}`}>{risk.level}</p></div>
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
