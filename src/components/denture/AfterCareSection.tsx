import Image from 'next/image';

export default function AfterCareSection() {
  const careItems = [
    {
      icon: '🔍',
      title: '정기 검진 시스템',
      desc: '임플란트 식립 후 3개월, 6개월, 1년 주기로 정밀 검진을 진행하여 이상 여부를 조기에 발견합니다.',
    },
    {
      icon: '🦷',
      title: '임플란트 주위 세정',
      desc: '전문 장비로 임플란트 주위 세균막을 제거하고, 주위염 예방을 위한 맞춤 관리를 진행합니다.',
    },
    {
      icon: '📋',
      title: '개인 맞춤 관리 계획',
      desc: '구강 상태에 따른 개인별 관리 계획을 수립하고, 올바른 칫솔질 및 치실 사용법을 안내합니다.',
    },
  ];

  const steps = [
    { step: '1', title: '정기 검진', desc: '3·6·12개월 주기' },
    { step: '2', title: '전문 세정', desc: '주위염 예방' },
    { step: '3', title: '교합 점검', desc: '씹는 힘 균형 체크' },
    { step: '4', title: '평생 관리', desc: '지속적 사후 책임' },
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-8 overflow-clip relative shrink-0 w-[180px]">
            <Image
              src="/images/goduk_images/고덕퍼스트치과_Logo_white.svg"
              alt="고덕퍼스트치과"
              width={180}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#4DC8D8] tracking-[3px] uppercase">
              AFTER CARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full">
              심는 것보다 중요한 것은<br />
              사후 관리입니다
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full">
              &quot;평생 사용하실 수 있도록<br />
              끝까지 책임지겠습니다&quot;
            </p>
          </div>
        </div>

        {/* 사후관리 항목 */}
        <div className="flex flex-col gap-4 w-full">
          {careItems.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#008095]/20 flex items-center justify-center shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-[16px] mb-1">{item.title}</p>
                  <p className="text-[#a0c4d4] text-[13px] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 수술실 사진 */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/goduk_images/수술실.jpg"
            alt="고덕퍼스트치과 수술실"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold text-[15px]">청결하고 안전한 수술 환경</p>
            <p className="text-white/80 text-[13px]">대학병원급 감염 관리 시스템</p>
          </div>
        </div>

        {/* 4단계 프로세스 */}
        <div className="w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold mb-5 text-center tracking-[2px]">
            고덕퍼스트치과 사후관리 프로세스
          </p>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div className="bg-[#008095] rounded-full w-11 h-11 flex items-center justify-center">
                  <span className="text-white font-black text-[16px]">{s.step}</span>
                </div>
                <p className="text-white text-[12px] font-bold text-center">{s.title}</p>
                <p className="text-[#a0c4d4] text-[11px] text-center leading-[1.3]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 강조 메시지 */}
        <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-2xl p-5 w-full text-center shadow-lg">
          <p className="text-white font-bold text-[16px] leading-[1.5]">
            임플란트 수술 후에도<br />
            대표원장이 직접 끝까지 책임집니다
          </p>
        </div>
      </div>
    </div>
  );
}
