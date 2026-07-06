'use client';

import Image from 'next/image';

export default function ImportantMomentsSection() {
  const moments = [
    {
      icon: '/images/military.png',
      label: '군복무',
      description: '군대에서 갑자기\n아프면 처리 곤란'
    },
    {
      icon: '/images/exam.png',
      label: '시험 기간',
      description: '중요한 시험 전날\n갑작스런 통증'
    },
    {
      icon: '/images/wedding.png',
      label: '결혼 · 면접',
      description: '인생의 중요한 날\n얼굴이 부어서...'
    },
    {
      icon: '/images/travel.png',
      label: '여행 · 출장',
      description: '해외 응급실\n비싼 치료비'
    }
  ];

  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-[26px] items-center justify-center w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">DON&apos;T WAIT</p>
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f]">
                예고없이 찾아와요<br />
                <span className="text-[#008095]">사랑니 통증...</span>
              </h2>
            </div>
            <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              평온할 때 미리 해결하면 중요한 순간을 지킬 수 있습니다
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3 w-full">
              {moments.slice(0, 2).map((moment, index) => (
                <div
                  key={index}
                  className="flex-1 bg-[#f3f6fb] rounded-[24px] p-4 min-[375px]:p-6 flex flex-col gap-12 items-center justify-center"
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
                      <p className="font-bold text-[18px] min-[375px]:text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e]">
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
                  className="flex-1 bg-[#f3f6fb] rounded-[24px] p-4 min-[375px]:p-6 flex flex-col gap-12 items-center justify-center"
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
                      <p className="font-bold text-[18px] min-[375px]:text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e]">
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
