'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToDoctor = () => {
    const doctorSection = document.getElementById('doctor');
    if (doctorSection) {
      doctorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#21314E] w-full relative overflow-hidden min-h-[600px] flex flex-col justify-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/goduk_images/การผ่าตัดที่ทำ모습.jpeg"
          alt="Godeok First Dental ภาพการรักษา"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21314E] via-[#21314E]/60 to-transparent" />
      </div>

      {/* Content container */}
      <div className="w-full flex justify-center relative z-10">
        <div className="box-border flex flex-col gap-10 items-start px-4 pb-12 pt-20 w-full max-w-[375px]">
          {/* Logo and Text Content */}
          <div className="flex flex-col gap-6 items-start justify-center relative shrink-0 w-full">
            {/* Logo */}
            <div className="h-11 relative shrink-0 overflow-hidden">
              <img
                src="/고덕퍼스트치과-로고-(การ이트).png"
                alt="Godeok First Dental"
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>

            {/* Main Text */}
            <div className="flex flex-col gap-3 items-start leading-[0] not-italic relative shrink-0 text-left text-white w-full">
              <p className="font-semibold leading-[1.5] relative shrink-0 text-lg tracking-[-0.36px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                สถานที่ที่แพทย์เฉพาะทาง อาจารย์โรงพยาบาลมหาวิทยาลัย ตรวจรักษาด้วยตนเอง
              </p>
              <h1 className="font-extrabold leading-[1.2] relative shrink-0 text-[37px] tracking-[-2px] w-full" style={{ fontFamily: 'Nanum Myeongjo, serif' }}>
                ทันตกรรมที่ดีที่สุดในโกด็อก,<br />First Dental
              </h1>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-start justify-center relative shrink-0 w-full">
            <div className="flex gap-3 w-full">
              <Link href="/th/consultation" className="flex-1">
                <button className="bg-[#008095] box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full shadow-lg">
                  <span className="font-bold leading-[1.5] not-italic relative shrink-0 text-white text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    นัดปรึกษา AI
                  </span>
                </button>
              </Link>

              <a
                href="https://naver.me/GSD1OqoS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#03C75A] box-border flex h-16 items-center justify-center px-4 py-4 relative rounded-[18px] shrink-0 shadow-lg">
                  <span className="font-bold leading-[1.5] not-italic relative shrink-0 text-white text-base text-nowrap tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    จอง N
                  </span>
                </button>
              </a>
            </div>

            <button
              onClick={scrollToDoctor}
              className="bg-white/90 backdrop-blur-sm border border-[#e9ebf1] border-solid box-border flex h-16 items-center justify-center px-6 py-4 relative rounded-[18px] shrink-0 w-full shadow-md"
            >
              <span className="font-bold leading-[1.5] not-italic relative shrink-0 text-[#008095] text-xl text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                ดูทีมแพทย์
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
