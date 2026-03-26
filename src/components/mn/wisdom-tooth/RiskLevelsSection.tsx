'use client';

export default function RiskLevelsSection() {
  const riskLevels = [
    { level: 'Бага эрсдэл', levelBg: 'bg-[#e8f8f0]', levelColor: 'text-[#15bd66]', title: 'Хэвийн хүзүү шүд', description: 'Хэвийн ургасан ч арчлахад хэцүү, шүд цоорох эрсдэл өндөр' },
    { level: 'Дунд эрсдэл', levelBg: 'bg-[#fff9ec]', levelColor: 'text-[#ffc53d]', title: 'Хэсэгчлэн далд хүзүү шүд', description: 'Хоол амархан гацаж, үрэвсэл байнга үүсдэг' },
    { level: 'Өндөр эрсдэл', levelBg: 'bg-[#fef1e5]', levelColor: 'text-[#f57400]', title: 'Бүрэн далд хүзүү шүд', description: 'Киста үүсэх магадлалтай, эрт авах шаардлагатай' },
    { level: 'Өндөр эрсдэл', levelBg: 'bg-[#fef1e5]', levelColor: 'text-[#f57400]', title: 'Үндэс муруй хүзүү шүд', description: 'Үндэс муруй тул авахад хүндрэлтэй' },
    { level: 'Яаралтай эмчилгээ', levelBg: 'bg-[#ffebed]', levelColor: 'text-[#ff1616]', title: 'Хэвтээ далд хүзүү шүд', description: 'Хажуугийн шүдийг түлхэж шүдний эгнээ алдагдуулж цоорох шалтгаан болно' }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">RISK LEVELS</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">Хүзүү шүд <span className="text-[#008095]">байдлаар эрсдэлийн түвшин</span></h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">Байдлаас хамааран авах цаг хугацаа, арга өөр өөр</p>
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
