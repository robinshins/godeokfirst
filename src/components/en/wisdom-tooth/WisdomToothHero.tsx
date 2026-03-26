'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WisdomToothHero() {
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
        <FadeInSection className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          <div className="h-11 overflow-hidden relative shrink-0">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={200}
              height={40}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          <div className="flex flex-col gap-4 items-start leading-[0] not-italic relative shrink-0 text-center w-full">
            <h1 className="font-extrabold leading-[1.35] relative shrink-0 text-4xl tracking-[-2.16px] w-full text-[#008095]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Wisdom Teeth,<br />
              The Longer You Wait, the Worse It Gets
            </h1>
            <p className="font-semibold leading-[1.5] relative shrink-0 text-[18px] tracking-[-0.36px] w-full text-[#3e3a3a]">
              Former Visiting Professor at Chosun Univ. Dental Hospital safely extracts even complex impacted wisdom teeth
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200} className="flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
          <div className="flex gap-3 w-full">
            <Link href="/en/consultation" className="flex-1">
              <button className="bg-[#008095] flex h-14 items-center justify-center px-4 py-3 rounded-[14px] w-full hover:bg-[#006B7A] transition-colors border-none outline-none">
                <span className="font-bold leading-[1.5] not-italic relative shrink-0 text-white text-base text-nowrap tracking-[-0.4px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Book Consultation
                </span>
              </button>
            </Link>
            <a href="https://naver.me/GSD1OqoS" target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="bg-[#03C75A] flex h-14 items-center justify-center px-4 py-3 rounded-[14px] w-full hover:bg-[#02b351] transition-colors border-none outline-none">
                <span className="font-bold leading-[1.5] not-italic relative shrink-0 text-white text-base text-nowrap tracking-[-0.4px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Naver Booking
                </span>
              </button>
            </a>
          </div>

          <button
            onClick={scrollToDoctor}
            className="bg-transparent border-2 border-[#008095] box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full hover:bg-[#008095]/10 transition-colors"
          >
            <span className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#008095] text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Meet Our Doctor
            </span>
          </button>
        </FadeInSection>
      </div>
      </div>
    </div>
  );
}
