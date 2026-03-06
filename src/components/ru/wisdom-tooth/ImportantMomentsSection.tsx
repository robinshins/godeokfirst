'use client';

import Image from 'next/image';

export default function ImportantMomentsSection() {
  const moments = [
    {
      icon: '/images/military.png',
      label: 'Армия',
      description: 'Внезапная боль\nв армии — большая проблема'
    },
    {
      icon: '/images/exam.png',
      label: 'Экзамены',
      description: 'Острая боль\nперед важным экзаменом'
    },
    {
      icon: '/images/wedding.png',
      label: 'Свадьба / Собеседование',
      description: 'В важный день жизни\nлицо опухло...'
    },
    {
      icon: '/images/travel.png',
      label: 'Поездка / Командировка',
      description: 'Скорая помощь за границей\nдорогое лечение'
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
                {'Боль пришла\nбез предупреждения...'}
              </h2>
            </div>
            <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.32px] text-[#d2d6e1] text-center w-full">
              Решите проблему заранее — и важный момент будет спасен
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
