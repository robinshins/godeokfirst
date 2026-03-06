'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WhiteningHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '/videos/laminate-smile2.mp4',
    '/videos/laminate-smile.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // 5秒切换

    return () => clearInterval(interval);
  }, [videos.length]);

  const scrollToDoctor = () => {
    const doctorSection = document.getElementById('doctor');
    if (doctorSection) {
      doctorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#0b1727] w-full relative overflow-hidden">
      {/* Background gradient effect - full width */}
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

      {/* Content container with max-width */}
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[375px] z-10">
        {/* Logo and Title */}
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          {/* Logo */}
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/icons/Logo.svg"
              alt="庆星美迪斯牙科"
              width={168}
              height={24}
              className="w-full h-full"
            />
          </div>

          {/* Title */}
          <h1 className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-[36px] text-center text-white tracking-[-2.16px]">
            一个微笑<br />
            改变形象<br />
            从美白开始
          </h1>
        </div>

        {/* Hero Video - 自动切换 */}
        <div className="w-full relative">
          <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full h-[240px]">
            <video
              key={currentVideoIndex}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>

            {/* 指示器 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? 'w-8 bg-white'
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link href="/cn/consultation" className="w-full">
            <button className="bg-[#006aff] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#0052cc] transition-colors">
              <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.5] text-[20px] text-white tracking-[-0.4px]">
                快速咨询预约
              </p>
            </button>
          </Link>
          <button
            onClick={scrollToDoctor}
            className="bg-white border border-[#e9ebf1] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.5] text-[20px] text-[#006aff] tracking-[-0.4px]">
              查看医疗团队
            </p>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
