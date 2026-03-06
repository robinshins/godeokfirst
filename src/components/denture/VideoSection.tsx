'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function VideoSection() {
  const videos = [
    {
      id: 'P54GsqWvnkw',
      title: '틀니의 모든 것',
      description: '틀니에 대한 모든 궁금증을 해결해드립니다',
    },
    {
      id: 'zmvu-xPe0ik',
      title: '전체임플란트 상세설명',
      description: '구독자 200만 의학전문 채널 "비온뒤" 출연',
      badge: '200만 구독 채널 출연',
    },
    {
      id: 'r7aeNpeP5vY',
      title: '전체 임플란트가 뭐죠?',
      description: '전체 임플란트가 뭐죠? 근데 틀니가 싸고 좋은거 아닌가요? 정확하게 알려드리겠습니다',
    },
    {
      id: 'rRVF8hLE82E',
      title: '전체임플란트로 수명연장??',
      description: '교합이 이렇게나 중요합니다!!',
    },
  ];

  return (
    <div className="w-full flex justify-center bg-[#f8fbfd] overflow-hidden -mt-1">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <FadeInSection className="flex flex-col gap-3 text-center">
            <p className="text-[15px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              VIDEO
            </p>
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008fd2]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              틀니 · 전체임플란트<br />
              영상으로 확인하세요
            </h2>
            <p className="text-base font-medium leading-[1.4] tracking-[-0.02em] text-[#3e3a3a]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              고덕퍼스트치과 대표원장이<br />
              직접 설명해드립니다
            </p>
          </FadeInSection>

          {/* Video Placeholders */}
          <div className="flex flex-col gap-6">
            {videos.map((video, index) => (
              <FadeInSection key={index} delay={100 + index * 150} className="flex flex-col gap-3">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-gradient-to-br from-[#008095]/10 to-[#008095]/20 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#008095]/20 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      영상 준비 중
                    </p>
                    <p className="text-[13px] text-[#008095]/70" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      고덕퍼스트치과 영상이 곧 업로드됩니다
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#3e3a3a]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {video.title}
                    </h3>
                    {video.badge && (
                      <span className="px-2 py-0.5 bg-[#008095] text-white text-[11px] font-bold rounded-full whitespace-nowrap">
                        {video.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#3e3a3a]/70" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {video.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
