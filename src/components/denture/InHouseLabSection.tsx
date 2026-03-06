'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function InHouseLabSection() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <p className="text-[15px] font-bold text-[#008095] tracking-[3px] uppercase">
            DENTAL LAB
          </p>
          <h2 className="font-bold leading-[1.35] text-[32px] text-[#1a1a1a] tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            보철 품질을 위한<br />
            <span className="text-[#008095]">엄선된 전문 기공소</span>
          </h2>
          <p className="font-semibold leading-[1.5] text-[#3e3a3a] text-base tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            좋은 기공소를 아는 것도 실력입니다
          </p>
        </FadeInSection>

        {/* Key Point Card */}
        <FadeInSection delay={100} className="w-full bg-gradient-to-br from-[#008095]/10 to-[#6eb7bc]/10 rounded-2xl p-6 border border-[#008095]/20">
          <div className="flex items-start gap-4">
            <div className="bg-[#008095] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#3e3a3a] text-[17px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                기공사의 실력이 보철의 품질을 결정합니다
              </p>
              <p className="text-[#666] text-[14px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                아무리 좋은 임플란트를 심어도, 위에 올라가는 보철물이 정밀하지 않으면 소용없습니다. 대표원장이 직접 검증한 <span className="font-bold text-[#008095]">전문 기공소</span>에서 제작합니다.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Why external lab is better */}
        <FadeInSection delay={200} className="flex flex-col gap-4 w-full">
          <p className="font-bold text-[#1a1a1a] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            왜 전문 기공소인가요?
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '🏆',
                title: '대학병원 네트워크로 검증된 곳만',
                desc: '대학병원 외래교수로 활동하며 쌓은 동료 교수·원장들과의 네트워크를 통해, 실력이 검증된 전문 기공소를 엄선합니다.',
              },
              {
                icon: '🔬',
                title: '소규모 원내 기공소와 다른 전문성',
                desc: '전문 기공소는 최신 CAD/CAM 장비와 숙련된 기공사 인력을 갖추고 있어, 1~2명 규모의 원내 기공소보다 훨씬 높은 수준의 보철물을 제작합니다.',
              },
              {
                icon: '🤝',
                title: '원장과 긴밀한 소통',
                desc: '단순히 의뢰하고 받는 것이 아니라, 원장이 직접 케이스를 설명하고 기공사와 협의하여 환자 개개인에 맞는 교합과 심미를 구현합니다.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={300} className="w-full bg-[#0b1727] rounded-2xl p-6">
          <p className="font-bold text-white text-[16px] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            💡 원내 기공소가 항상 좋은 건 아닙니다
          </p>
          <p className="text-[#a0c4d4] text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            원내 기공소는 속도는 빠르지만, 소수 인력으로 운영되다 보니 전문성과 장비에 한계가 있는 경우가 많습니다. 고덕퍼스트치과는 <span className="text-[#6eb7bc] font-bold">속도보다 품질</span>을 선택했습니다. 처음부터 제대로 만들어야 오래 쓸 수 있습니다.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
