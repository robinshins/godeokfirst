'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WisdomToothHero() {
  const scrollToDoctor = () => {
    const doctorSection = document.getElementById('doctor');
    if (doctorSection) {
      doctorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#0b1727] w-full py-[60px] relative">
      <div className="absolute h-[222px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[247px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-[50px] w-full">
          {/* Content */}
          <div className="flex flex-col gap-8 items-center justify-center w-full">
            {/* Logo */}
            <div className="h-10 overflow-clip relative shrink-0 w-[220px]">
              <Image
                src="/images/goduk_images/고덕퍼스트치과_Logo_white.svg"
                alt="고덕퍼스트치과"
                width={220}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 items-start text-center text-white w-full">
              <h1 className="font-['NanumSquare'] font-extrabold text-[36px] leading-[1.35] tracking-[-2.16px] text-white w-full">
                사랑니,<br />
                미루면 고통도 커집니다
              </h1>
              <p className="font-['Pretendard_JP'] font-semibold text-[17px] leading-[1.6] tracking-[-0.36px] text-white/80 w-full">
                조선대학교 치과병원 외래교수 역임 원장이<br />
                복잡한 매복 사랑니도 직접 안전하게 발치합니다
              </p>
            </div>

            {/* 외래교수 배지 */}
            <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 w-full flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <span className="text-[#6eb7bc] font-bold text-[13px] flex-shrink-0 mt-0.5">✓</span>
                <span className="text-white text-[13px] font-semibold leading-[1.5]">조선대 치과병원 외래교수 역임<br /><span className="text-white/70">통합치의학과 전문의</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc] font-bold text-[13px] flex-shrink-0">✓</span>
                <span className="text-white text-[13px] font-semibold">3단계 무통 마취 — 안 아프고 정확하게</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc] font-bold text-[13px] flex-shrink-0">✓</span>
                <span className="text-white text-[13px] font-semibold">다른 치과에서 못 뽑아 의뢰하는 케이스도 해결</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc] font-bold text-[13px] flex-shrink-0">✓</span>
                <span className="text-white text-[13px] font-semibold">부작용으로 인한 재치료 0건</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 items-start justify-center w-full">
            <Link href="/consultation" className="w-full">
              <button className="bg-[#008095] rounded-[18px] h-16 px-6 py-4 flex items-center justify-center w-full hover:bg-[#006d80] transition-colors">
                <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white whitespace-pre">
                  AI 상담예약
                </p>
              </button>
            </Link>
            <button
              onClick={scrollToDoctor}
              className="bg-white border border-[#e9ebf1] rounded-[18px] h-16 px-6 py-4 flex items-center justify-center w-full hover:bg-gray-50 transition-colors"
            >
              <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#008095] whitespace-pre">
                의료진 바로보기
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
