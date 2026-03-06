'use client';

import Image from 'next/image';

export default function SpeedSection() {
  return (
    <div className="w-full relative flex justify-center bg-[#0b1727]">
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

      {/* Decoration element */}
      <div className="absolute h-[193.628px] left-[165px] top-[-14.89px] w-[469.325px] pointer-events-none">
        <div className="absolute inset-[-2.16%_-0.7%_-0.93%_-1%]">
          <Image
            src="/images/speed-decoration.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-[70px] items-start px-5 py-[70px] relative w-full max-w-[430px]">
        <div className="flex flex-col gap-6 items-center relative shrink-0 w-full z-10">
          {/* Logo */}
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/icons/Logo.svg"
              alt="Kyungsung Medis Dental Clinic"
              width={168}
              height={24}
              className="w-full h-full"
            />
          </div>

          {/* Title */}
          <h2 className="font-bold leading-[1.35] not-italic text-[#fefeff] text-[32px] text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
            他の医院では真似できない<br />
            スピードと差別化
          </h2>

          {/* Subtitle */}
          <p className="font-bold leading-[32px] not-italic text-[#51aefe] text-base text-center tracking-[1.92px] uppercase w-full" style={{ fontFamily: 'Pretendard_JP, sans-serif' }}>
            Only available at Medis
          </p>
        </div>
      </div>
    </div>
  );
}
