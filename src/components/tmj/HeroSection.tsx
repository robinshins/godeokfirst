'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TmjHeroSection() {
  const scrollToDoctor = () => {
    const doctorSection = document.getElementById('doctor');
    if (doctorSection) {
      doctorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#d2e9f3]/30 to-white w-full relative overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px] z-10">

          {/* Logo and Main Text */}
          <div className="flex flex-col gap-8 items-center justify-center relative shrink-0 w-full">
            <div className="h-10 overflow-clip relative shrink-0 w-[200px]">
              <Image
                src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
                alt="고덕퍼스트치과"
                width={200}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 items-start leading-[0] not-italic relative shrink-0 text-center w-full">
              <h1
                className="font-extrabold leading-[1.35] relative shrink-0 text-4xl tracking-[-2.16px] w-full text-[#008095]"
                style={{ fontFamily: '"NanumSquare", sans-serif' }}
              >
                턱이 아프거나<br />
                소리가 나시나요?
              </h1>
              <p
                className="font-semibold leading-[1.5] relative shrink-0 text-[18px] tracking-[-0.36px] w-full text-[#3e3a3a]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                통합치의학과 전문의 이동현 원장이<br />
                턱관절 장애를 정밀 진단하고<br />
                근본적으로 치료합니다.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
            <div className="flex gap-3 w-full">
              <Link href="/consultation" className="flex-1">
                <button className="bg-[#008095] flex h-14 items-center justify-center px-4 py-3 rounded-[14px] w-full hover:bg-[#006d80] transition-colors border-none outline-none">
                  <span
                    className="font-bold leading-[1.5] not-italic relative shrink-0 text-white text-base text-nowrap tracking-[-0.4px]"
                    style={{ fontFamily: '"NanumSquare", sans-serif' }}
                  >
                    빠른 상담예약
                  </span>
                </button>
              </Link>
              <a href="https://naver.me/GSD1OqoS" target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="bg-[#03C75A] flex h-14 items-center justify-center px-4 py-3 rounded-[14px] w-full hover:bg-[#02b351] transition-colors border-none outline-none">
                  <span
                    className="font-bold leading-[1.5] not-italic relative shrink-0 text-white text-base text-nowrap tracking-[-0.4px]"
                    style={{ fontFamily: '"NanumSquare", sans-serif' }}
                  >
                    네이버 예약
                  </span>
                </button>
              </a>
            </div>
            <button
              onClick={scrollToDoctor}
              className="bg-transparent border-2 border-[#008095] box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-[#008095]/10 transition-colors"
            >
              <span
                className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#008095] text-xl text-nowrap tracking-[-0.4px]"
                style={{ fontFamily: '"NanumSquare", sans-serif' }}
              >
                의료진 바로보기
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
