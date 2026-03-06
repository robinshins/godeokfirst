import Image from 'next/image';

export default function ToothDiscolorationSection() {
  const causes = [
    {
      image: '/icons/coffee.svg',
      title: 'Coffee',
      description: 'Daily coffee consumption\ncan yellow your teeth'
    },
    {
      image: '/icons/smoking.svg',
      title: 'Smoking',
      description: 'Nicotine and tar are\nmain culprits of discoloration'
    },
    {
      image: '/icons/wine.svg',
      title: 'Wine',
      description: 'Tannins in red wine\ncause tooth staining'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full">
      <div className="max-w-[375px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-[26px]">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
              <p className="font-['Nanum_Myeongjo'] font-extrabold text-[60px] leading-[0.2] tracking-[-3.6px] w-full">
                &#x201C;
              </p>
              <h2 className="font-['Pretendard'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] w-full">
                How Are<br />
                Your Teeth?
              </h2>
            </div>
          </div>
          <p className="font-['Pretendard'] font-semibold text-[#e9ebf1] text-base leading-[1.4] tracking-[-0.32px] text-center">
            If these habits continue,<br />
            your teeth will become discolored
          </p>
        </div>

        {/* Divider Line */}
        <div className="bg-white/50 h-10 w-0.5 mx-auto mb-[26px]" />

        {/* Causes Cards */}
        <div className="flex flex-col gap-3 w-full">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="bg-white border border-[#f3f6fb] rounded-[24px] p-6 w-full"
            >
              <div className="flex gap-[30px] items-center justify-center w-full">
                {/* Image */}
                <div className="relative shrink-0 w-20 h-20">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="font-['Pretendard'] font-bold text-[#37373e] text-[22px] leading-[1.4] tracking-[-0.44px]">
                    {cause.title}
                  </h3>
                  <p className="font-['Pretendard'] font-semibold text-[#5d5f6d] text-base leading-[1.4] tracking-[-0.32px] whitespace-pre-line">
                    {cause.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
