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
      {/* Background Gradient - same as whitening hero */}
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
            <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
              <Image
                src="/icons/Logo.svg"
                alt="Kyungsung University Medis Dental Clinic"
                width={168}
                height={24}
                className="w-full h-full"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 items-start text-center text-white w-full">
              <h1 className="font-['Nanum_Myeongjo'] font-extrabold text-[36px] leading-[1.35] tracking-[-2.16px] text-white w-full">
                Wisdom Teeth,<br />
                Delaying Makes Pain Worse
              </h1>
              <div className="font-['Pretendard'] font-semibold text-[18px] leading-[1.5] tracking-[-0.36px] text-white w-full">
                <p className="mb-0">Extract them before the pain starts</p>
                <p className="mb-0">Don&apos;t let this ticking time bomb</p>
                <p>ruin your important moments</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 items-start justify-center w-full">
            <Link href="/en/consultation" className="w-full">
              <button className="bg-[#006aff] rounded-[18px] h-16 px-6 py-4 flex items-center justify-center w-full">
                <p className="font-['Pretendard'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white whitespace-pre">
                  Quick Consultation Booking
                </p>
              </button>
            </Link>
            <button
              onClick={scrollToDoctor}
              className="bg-white border border-[#e9ebf1] rounded-[18px] h-16 px-6 py-4 flex items-center justify-center w-full"
            >
              <p className="font-['Pretendard'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] whitespace-pre">
                View Our Team
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
