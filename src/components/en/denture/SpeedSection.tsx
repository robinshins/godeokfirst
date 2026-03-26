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
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="Godeok First Dental"
              width={168}
              height={24}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          {/* Title */}
          <h2 className="font-bold leading-[1.35] not-italic text-[#fefeff] text-[32px] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            The Dental Lab difference<br />
            that determines prosthetics quality
          </h2>

          {/* Subtitle */}
          <p className="font-semibold leading-[1.5] not-italic text-[#6eb7bc] text-base text-center tracking-[-0.02em] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            There is a better choice than an in-house dental lab
          </p>
        </FadeInSection>

        {/* Comparison Cards */}
        <FadeInSection delay={100} className="flex flex-col gap-4 w-full z-10">
          {/* In-house Dental Lab */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Clinics with In-house Dental Lab
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Small in-house lab → limited expertise
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Hard to verify with only 1~2 technicians
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Slow to update equipment and materials
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

          {/* Godeok First Dental */}
          <div className="bg-gradient-to-r from-[#008095]/20 to-[#6eb7bc]/20 backdrop-blur-sm rounded-2xl p-5 border border-[#008095]/30">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Godeok First Dental
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Carefully selected professional dental lab through university hospital network
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Equipped with latest CAD/CAM and expert staff
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Close communication with the doctor for precise bite alignment
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Immediate remake if unsatisfied with prosthetics quality
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={200} className="w-full z-10">
          <div className="bg-[#008095]/10 border border-[#008095]/20 rounded-xl p-5">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Knowing a good dental lab is also a skill
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Thanks to the network built with fellow professors and doctors while serving as a University Hospital Visiting Professor, we use <span className="text-[#6eb7bc] font-bold">carefully selected professional dental labs</span>. We guarantee higher prosthetics quality than small in-house dental labs.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
