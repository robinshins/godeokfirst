'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FixedCTAButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = 700;
      setIsVisible(window.scrollY > heroSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-[430px] mx-auto px-4 py-3">
        <div className="flex gap-3 w-full">
          <Link href="/consultation" className="flex-1">
            <button className="w-full h-14 bg-[#008095] text-white text-lg font-bold rounded-[18px] hover:bg-[#006B7A] transition-colors shadow-lg">
              AI 상담예약
            </button>
          </Link>
          <a
            href="https://naver.me/GSD1OqoS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-14 bg-[#03C75A] text-white text-base font-bold px-4 rounded-[18px] hover:bg-[#02b351] transition-colors shadow-lg">
              N 예약
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
