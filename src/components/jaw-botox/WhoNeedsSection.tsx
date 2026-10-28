'use client';

export default function JawBotoxWhoNeedsSection() {
  const signs = [
    {
      icon: '😬',
      title: '자고 일어나면 턱이 뻐근하다',
      desc: '수면 중 이갈이·이 악물기로 교근이 밤새 긴장한 상태입니다. 아침 턱 피로감, 뻐근함으로 나타납니다.',
    },
    {
      icon: '🦷',
      title: '치아가 닳거나 깨진 적이 있다',
      desc: '과도한 저작 힘은 치아 마모·균열, 크라운이나 임플란트 보철 파손으로 이어질 수 있습니다.',
    },
    {
      icon: '💢',
      title: '턱 옆 근육을 누르면 아프다',
      desc: '교근 과긴장으로 생기는 근육통입니다. 두통이나 귀 주변 통증으로 느껴지기도 합니다.',
    },
    {
      icon: '🙍',
      title: '턱이 각져 얼굴이 넓어 보인다',
      desc: '교근이 커진 근육성 사각턱이라면 보톡스로 근육 부피가 줄어들 수 있습니다. 뼈가 원인이면 효과가 제한적입니다.',
    },
    {
      icon: '😣',
      title: '이갈이 장치를 써도 근육 통증이 남는다',
      desc: '장치(스플린트) 치료와 병행해 근육 긴장 자체를 낮추는 선택지가 됩니다.',
    },
    {
      icon: '🗣️',
      title: '집중하거나 긴장하면 이를 꽉 문다',
      desc: '낮 동안 무의식적인 이 악물기 습관도 교근 과긴장의 흔한 원인입니다.',
    },
  ];

  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Self Check
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            이런 분께<br />턱보톡스를 권합니다
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            아래에 해당된다면 교근(깨물근) 과긴장을<br />의심해볼 수 있습니다.
          </p>
        </div>

        {/* Sign Cards */}
        <div className="flex flex-col gap-4">
          {signs.map((sign, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] p-5 flex items-start gap-4">
              <div className="text-2xl shrink-0 mt-[2px]">{sign.icon}</div>
              <div className="flex flex-col gap-1">
                <h3
                  className="font-bold text-[17px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {sign.title}
                </h3>
                <p
                  className="text-white/60 text-[14px] leading-[1.6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {sign.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            턱보톡스는 교근 과활성이 원인일 때 효과적입니다.<br />원인 확인이 먼저입니다.
          </p>
          <p className="text-white/40 text-[13px]">
            턱관절 디스크 문제나 뼈 형태가 원인이면 다른 치료가 필요할 수 있습니다.
          </p>
        </div>

      </div>
    </div>
  );
}
