import Image from 'next/image';

export default function ToothDiscolorationSection() {
  const causes = [
    {
      image: '/icons/coffee.svg',
      title: 'コーヒー',
      description: '毎日飲むコーヒーが\n歯を黄色くしてしまいます'
    },
    {
      image: '/icons/smoking.svg',
      title: '喫煙',
      description: 'ニコチンとタールが\n歯の変色の主な原因です'
    },
    {
      image: '/icons/wine.svg',
      title: 'ワイン',
      description: '赤ワインのタンニンが\n歯に着色を引き起こします'
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
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] w-full">
                あなたの歯は<br />
                大丈夫ですか？
              </h2>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold text-[#e9ebf1] text-base leading-[1.4] tracking-[-0.32px] text-center">
            以下のような習慣が続くと<br />
            歯は黄色く変色してしまいます
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
                  <h3 className="font-['Pretendard_JP'] font-bold text-[#37373e] text-[22px] leading-[1.4] tracking-[-0.44px]">
                    {cause.title}
                  </h3>
                  <p className="font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-base leading-[1.4] tracking-[-0.32px] whitespace-pre-line">
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
