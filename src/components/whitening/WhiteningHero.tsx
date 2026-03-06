'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhiteningHero() {
  const scrollToDoctor = () => {
    const el = document.getElementById('doctor');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-gradient-to-b from-[#d2e9f3]/30 to-white w-full relative overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px] z-10">

          {/* Logo + Main Text */}
          <div className="flex flex-col gap-8 items-center justify-center w-full">
            <div className="h-10 overflow-clip relative shrink-0 w-[200px]">
              <Image
                src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
                alt="고덕퍼스트치과"
                width={200}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 text-center w-full">
              <h1
                className="font-extrabold leading-[1.35] text-4xl tracking-[-2.16px] w-full text-[#008095]"
                style={{ fontFamily: '"NanumSquare", sans-serif' }}
              >
                미소 하나로<br />
                달라지는 인상
              </h1>
              <p
                className="font-semibold leading-[1.5] text-[18px] tracking-[-0.36px] w-full text-[#3e3a3a]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                오스템 뷰티스 시스템으로<br />
                시리지 않고 안전하게, 당일 완성
              </p>
            </div>
          </div>

          {/* Before / After 미리보기 */}
          <div className="w-full flex flex-col gap-3">
            <div className="relative w-full rounded-[20px] overflow-hidden">
              <div className="bg-[#f3f6fb] h-[200px] relative w-full">
                <Image
                  src="/cases/미백/치아미백전.jpg"
                  alt="미백 전"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                <p className="font-semibold text-[13px] text-white tracking-[-0.26px]">Before</p>
              </div>
            </div>
            <div className="relative w-full rounded-[20px] overflow-hidden">
              <div className="bg-[#f3f6fb] h-[200px] relative w-full">
                <Image
                  src="/cases/미백/치아미백후.jpg"
                  alt="미백 후"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-3 top-3 bg-[#008095] px-2.5 py-[5px] rounded-[10px] z-10">
                <p className="font-semibold text-[13px] text-white tracking-[-0.26px]">After</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-3 w-full">
              <Link href="/consultation" className="flex-1">
                <button className="bg-[#008095] flex h-14 items-center justify-center px-4 py-3 rounded-[14px] w-full hover:bg-[#006d80] transition-colors border-none outline-none">
                  <span
                    className="font-bold text-white text-base text-nowrap tracking-[-0.4px]"
                    style={{ fontFamily: '"NanumSquare", sans-serif' }}
                  >
                    빠른 상담예약
                  </span>
                </button>
              </Link>
              <a href="https://naver.me/GSD1OqoS" target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="bg-[#03C75A] flex h-14 items-center justify-center px-4 py-3 rounded-[14px] w-full hover:bg-[#02b351] transition-colors border-none outline-none">
                  <span
                    className="font-bold text-white text-base text-nowrap tracking-[-0.4px]"
                    style={{ fontFamily: '"NanumSquare", sans-serif' }}
                  >
                    네이버 예약
                  </span>
                </button>
              </a>
            </div>
            <button
              onClick={scrollToDoctor}
              className="bg-transparent border-2 border-[#008095] flex h-16 items-center justify-center px-6 py-4 rounded-[18px] w-full hover:bg-[#008095]/10 transition-colors"
            >
              <span
                className="font-bold text-[#008095] text-xl text-nowrap tracking-[-0.4px]"
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
