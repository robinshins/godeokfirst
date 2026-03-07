'use client';

export default function TmjSymptomsSection() {
  const symptoms = [
    {
      icon: '🔊',
      title: '턱에서 소리가 남',
      desc: '입을 벌리거나 다물 때 "딸깍", "뚝" 하는 소리가 반복적으로 납니다.',
    },
    {
      icon: '😣',
      title: '턱이 아프다',
      desc: '씹을 때, 하품할 때, 말할 때 턱 주변에 통증이 느껴집니다.',
    },
    {
      icon: '😶',
      title: '입이 잘 안 벌어짐',
      desc: '입을 크게 벌리기 어렵거나, 벌릴 때 턱이 한쪽으로 틀어집니다.',
    },
    {
      icon: '🤕',
      title: '두통 · 귀 통증',
      desc: '원인 모를 두통이나 귀 앞쪽 통증이 반복됩니다.',
    },
    {
      icon: '💤',
      title: '이갈이 · 이 악물기',
      desc: '수면 중 이를 갈거나 낮에 무의식적으로 이를 꽉 물고 있습니다.',
    },
    {
      icon: '🦴',
      title: '목 · 어깨 결림',
      desc: '턱관절 문제가 목과 어깨 근육의 긴장과 통증으로 이어집니다.',
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
            이런 증상이 있다면<br />턱관절 장애를 의심하세요
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            아래 증상 중 2개 이상 해당되면<br />전문의 진단을 받아보시길 권합니다.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="flex flex-col gap-4">
          {symptoms.map((symptom, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] p-5 flex items-start gap-4">
              <div className="text-2xl shrink-0 mt-[2px]">{symptom.icon}</div>
              <div className="flex flex-col gap-1">
                <h3
                  className="font-bold text-[17px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.title}
                </h3>
                <p
                  className="text-white/60 text-[14px] leading-[1.6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.desc}
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
            턱관절 장애는 자연 치유가 어렵습니다.<br />초기 치료가 가장 효과적입니다.
          </p>
          <p className="text-white/40 text-[13px]">
            방치할수록 관절 디스크 손상이 진행되어 치료가 복잡해집니다.
          </p>
        </div>

      </div>
    </div>
  );
}
