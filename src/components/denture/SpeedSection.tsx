'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function SpeedSection() {
  return (
    <div className="w-full relative flex justify-center bg-[#0b1727] overflow-hidden">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[711px] left-[calc(50%+0.5px)] top-[calc(50%+75.5px)] -translate-x-1/2 -translate-y-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/speed-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-10 items-start px-5 py-[70px] relative w-full max-w-[430px]">
        <FadeInSection className="flex flex-col gap-6 items-center relative shrink-0 w-full z-10">
          {/* Logo */}
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/images/goduk_images/고덕퍼스트치과_Logo_white.svg"
              alt="고덕퍼스트치과"
              width={168}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="font-bold leading-[1.35] not-italic text-[#fefeff] text-[32px] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            보철 품질을 결정하는<br />
            기공소의 차이
          </h2>

          {/* Subtitle */}
          <p className="font-semibold leading-[1.5] not-italic text-[#6eb7bc] text-base text-center tracking-[-0.02em] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            원내 기공소보다 더 좋은 선택이 있습니다
          </p>
        </FadeInSection>

        {/* Comparison Cards */}
        <FadeInSection delay={100} className="flex flex-col gap-4 w-full z-10">
          {/* 원내 기공소 방식 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              원내 기공소 운영 치과
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  소규모 원내 기공소 → 전문성 한계
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  기공사 1~2명 규모로 검증 어려움
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  최신 장비·재료 업데이트 느림
                </p>
              </div>
            </div>
          </div>

          {/* VS */}
          <div className="flex justify-center">
            <div className="bg-[#008095] rounded-full px-4 py-1">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
          </div>

          {/* 고덕퍼스트치과 */}
          <div className="bg-gradient-to-r from-[#008095]/20 to-[#6eb7bc]/20 backdrop-blur-sm rounded-2xl p-5 border border-[#008095]/30">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              고덕퍼스트치과
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  대학병원·동료 원장 네트워크로 엄선한 전문 기공소
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  최신 CAD/CAM 장비와 전문 인력 완비
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  원장과 긴밀한 소통으로 정밀한 교합 구현
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  보철 품질 불만족 시 즉시 재제작 대응
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={200} className="w-full z-10">
          <div className="bg-[#008095]/10 border border-[#008095]/20 rounded-xl p-5">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              💡 좋은 기공소를 아는 것도 실력입니다
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              대학병원 외래교수로 활동하며 쌓은 동료 교수·원장들과의 네트워크 덕분에, <span className="text-[#6eb7bc] font-bold">검증된 전문 기공소를 엄선</span>해 사용하고 있습니다. 규모가 작은 원내 기공소보다 더 높은 수준의 보철 품질을 보장합니다.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
