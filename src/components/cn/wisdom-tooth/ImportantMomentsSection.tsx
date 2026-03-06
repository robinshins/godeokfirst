'use client';

import Image from 'next/image';

export default function ImportantMomentsSection() {
  const moments = [
    {
      icon: '/images/military.png',
      label: '服兵役',
      description: '军队里突然\n疼痛难以处理'
    },
    {
      icon: '/images/exam.png',
      label: '考试期间',
      description: '重要考试前夜\n突发疼痛'
    },
    {
      icon: '/images/wedding.png',
      label: '婚礼·面试',
      description: '人生重要时刻\n脸部肿胀...'
    },
    {
      icon: '/images/travel.png',
      label: '旅行·出差',
      description: '海外急诊\n昂贵的治疗费'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-[26px] items-center justify-center w-full">
          {/* Title with quotes */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
              <p className="font-['Nanum_Myeongjo'] font-extrabold text-[60px] leading-[0.2] tracking-[-3.6px]">
                &#x201C;
              </p>
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-pre-line">
                {'毫无预兆地来袭了\n智齿的疼痛...'}
              </h2>
            </div>
            <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.32px] text-[#d2d6e1] text-center w-full">
              趁平静时提前解决，可以守护重要时刻
            </p>
          </div>

          {/* White divider */}
          <div className="h-10 w-0.5 bg-white opacity-50" />

          {/* Cards Grid */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 w-full">
              {moments.slice(0, 2).map((moment, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white border border-[#f3f6fb] rounded-[24px] p-6 flex flex-col gap-12 items-center justify-center"
                >
                  <div className="flex flex-col gap-[6px] items-center justify-center w-full">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={moment.icon}
                        alt={moment.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-center w-full">
                      <p className="font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e]">
                        {moment.label}
                      </p>
                      <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#5d5f6d] whitespace-pre-line">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 w-full">
              {moments.slice(2, 4).map((moment, index) => (
                <div
                  key={index + 2}
                  className="flex-1 bg-white border border-[#f3f6fb] rounded-[24px] p-6 flex flex-col gap-12 items-center justify-center"
                >
                  <div className="flex flex-col gap-[6px] items-center justify-center w-full">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={moment.icon}
                        alt={moment.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center text-center w-full">
                      <p className="font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e]">
                        {moment.label}
                      </p>
                      <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#5d5f6d] whitespace-pre-line">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
