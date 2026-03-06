'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 특수 장비',
      description: '일본 NSK사의 최신 초음파 스케일러로 잇몸 깊숙한 세균까지 정밀하게 제거',
      features: [
        { label: 'iPiezo 엔진', text: '자동 주파수 조절로 안정적 출력 보장' },
        { label: '초정밀 팁', text: '치주낭 깊은 곳까지 접근 가능' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: '페리오클린 항생 연고 치료',
      description: '미노사이클린 성분의 국소 항생제로 잇몸 깊은 곳에 직접 주입하여 치료',
      features: [
        { label: '임상 검증', text: '국내외 여러 연구팀의 임상시험으로 효과 인증' },
        { label: '일주일 지속', text: '한 번 주입으로 약효가 일주일간 유지' },
        { label: '세균 감소', text: 'Red Complex 세균 87.5% → 12.5%로 감소' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4단계 통증 완화 시스템',
      description: [
        '"치과 치료가 이렇게 편할 수도 있구나"',
        '많은 환자분들이 놀라하는 단계별 통증 차단 시스템'
      ],
      features: [
        { label: '가글 마취', text: '입안 전체를 마취액으로 가글하여 1차 둔감화' },
        { label: '도포 마취', text: '주사 부위에 마취 연고 도포로 2차 차단' },
        { label: '통증 완화 전동마취기', text: '컴퓨터 제어로 일정 속도로 통증 완화 주입' },
        { label: '신경관마취기', text: '깊은 부위가지 완벽한 통증 차단' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">고덕퍼스트치과의</p>
            <p>잇몸 치료 시스템</p>
          </div>
        </div>

        {/* System Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {systems.map((system, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden rounded-[24px] w-full">
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start p-6 w-full">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-center text-white tracking-[-0.48px] w-full">
                  {system.title}
                </p>

                {Array.isArray(system.description) ? (
                  <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    <p className="mb-0">{system.description[0]}</p>
                    <p>{system.description[1]}</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    {system.description}
                  </p>
                )}

                <div className="flex flex-col gap-2.5 items-start w-full">
                  {system.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="font-['Pretendard'] text-white text-sm leading-[23px] tracking-[-0.56px] w-full">
                      <span className="font-bold">{feature.label}</span>
                      <span> : {feature.text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
