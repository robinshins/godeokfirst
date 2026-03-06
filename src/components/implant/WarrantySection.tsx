'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function WarrantySection() {
  const warrantyFeatures = [
    {
      period: '평생',
      title: '임플란트 본체',
      description: '픽스쳐 파절 시 무상 재시술',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      period: '10년',
      title: '상부 보철물',
      description: '크라운 파손 시 무상 교체',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      period: '5년',
      title: '어버트먼트',
      description: '연결 부품 무상 교체',
      iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];

  return (
    <div className="w-full flex justify-center bg-[#008fd2]">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-white/20 text-white text-[12px] font-bold rounded-full tracking-wide" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              WARRANTY SYSTEM
            </span>
          </div>

          <h2 className="font-extrabold text-[32px] text-white leading-[1.3] tracking-tight mb-4" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            평생안심
            <br />
            임플란트 보증제
          </h2>

          <p className="font-medium leading-[1.6] text-white/80 text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            고덕퍼스트치과는 책임감 있는 치과를 약속합니다.
            <br />
            체계적인 보증 시스템으로 평생 안심하고 사용하세요.
          </p>
        </FadeInSection>

        {/* Warranty Image Placeholder */}
        <FadeInSection delay={100} className="w-full">
          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-white/10 border-2 border-dashed border-white/30 flex flex-col items-center justify-center p-8">
            {/* Placeholder Icon */}
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>

            {/* Placeholder Text */}
            <div className="text-center">
              <p className="text-white font-bold text-[18px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                이미지 요청
              </p>
              <p className="text-white/70 text-[14px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                임플란트 보증서 이미지 또는
                <br />
                보증 관련 인증서 이미지 필요
              </p>
              <div className="mt-4 px-4 py-2 bg-white/10 rounded-xl">
                <p className="text-white/80 text-[12px] font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  권장 사이즈: 343 x 485px
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Warranty Features */}
        <FadeInSection delay={200} className="w-full space-y-3">
          {warrantyFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d2e9f3] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008fd2]">
                    <path d={item.iconPath} />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#008fd2] text-white text-[11px] font-bold rounded" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {item.period}
                    </span>
                    <h3 className="font-bold text-[16px] text-[#3e3a3a]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#3e3a3a]/60" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </FadeInSection>

        {/* Bottom Notice */}
        <FadeInSection delay={300} className="w-full">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-[14px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  보증 조건 안내
                </p>
                <p className="text-white/70 text-[13px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  정기 검진(6개월 주기) 및 스케일링을 받으신 경우에 한해 보증이 적용됩니다.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
