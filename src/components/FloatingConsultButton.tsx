'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingConsultButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Hide buttons on consultation and chat pages
  const shouldHideButtons = pathname === '/consultation' || pathname === '/chat';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything if on consultation or chat pages
  if (shouldHideButtons) {
    return null;
  }

  return (
    <>
      {/* Main floating buttons - mobile optimized position */}
      <div
        className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}
      >
        {/* AI 상담예약 button */}
        <Link
          href="/consultation"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Glow effect - smaller on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg sm:blur-xl opacity-40 sm:opacity-50 animate-pulse"></div>

            {/* Button - smaller padding on mobile */}
            <button className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-xl sm:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold group">
              <div className={`transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
                </svg>
              </div>

              <span className="text-sm">즉시 AI 상담예약</span>
              <svg className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Link>

        {/* 네이버 예약 button */}
        <a
          href="https://naver.me/GSD1OqoS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#03C75A] text-white w-12 h-12 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center font-bold text-lg">
            N
          </button>
        </a>
      </div>

      {/* Secondary phone button - mobile only */}
      <a
        href="tel:031-611-3222"
        className={`fixed bottom-20 left-4 z-50 transform transition-all duration-700 ease-out sm:hidden ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <button className="bg-white/90 backdrop-blur-xl text-slate-700 w-12 h-12 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300 border border-white/20 flex items-center justify-center group">
          <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </a>
    </>
  );
}