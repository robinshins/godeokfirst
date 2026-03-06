'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const scrollToDoctor = () => {
    const doctorSection = document.getElementById('doctor');
    if (doctorSection) {
      doctorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#0b1727] w-full relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute h-[610px] left-1/2 top-[calc(50%-53.5px)] -translate-x-1/2 -translate-y-1/2 w-[343px] pointer-events-none">
        <div className="absolute inset-[-31.15%_-55.39%]">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px] z-10">
          {/* Logo and Text Content */}
          <div className="flex flex-col gap-8 items-center justify-center relative shrink-0 w-full">
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

            {/* Main Text */}
            <div className="flex flex-col gap-4 items-start leading-[0] not-italic relative shrink-0 text-center text-white w-full">
              <h1 className="font-['Nanum_Myeongjo'] font-extrabold leading-[1.35] relative shrink-0 text-4xl tracking-[-2.16px] w-full">
                Gum Disease Affecting<br />
                80% of Adults
              </h1>
              <p className="font-['Pretendard'] font-semibold leading-[1.5] relative shrink-0 text-lg tracking-[-0.36px] w-full">
                3x Higher Risk of Heart Disease if Neglected<br />
                Essential Care for Overall Health
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
            <Link href="/en/consultation" className="w-full">
              <button className="bg-[#006aff] box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full">
                <span className="font-['Pretendard'] font-bold leading-[1.5] not-italic relative shrink-0 text-white text-xl text-nowrap tracking-[-0.4px]">
                  Quick Consultation Booking
                </span>
              </button>
            </Link>
            <button
              onClick={scrollToDoctor}
              className="bg-white border border-[#e9ebf1] border-solid box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full"
            >
              <span className="font-['Pretendard'] font-bold leading-[1.5] not-italic relative shrink-0 text-[#006aff] text-xl text-nowrap tracking-[-0.4px]">
                Meet Our Doctors
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
