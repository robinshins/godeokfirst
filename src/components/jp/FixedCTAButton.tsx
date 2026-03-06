'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FixedCTAButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after hero section (after ~700px)
      const heroSectionHeight = 700;
      setIsVisible(window.scrollY > heroSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-[430px] mx-auto px-4 py-3">
        <Link href="/jp/consultation" className="block w-full">
          <button className="w-full bg-[#006aff] text-white text-lg font-bold py-4 rounded-[18px] hover:bg-[#0050c0] transition-colors shadow-lg">
            クイック相談予約
          </button>
        </Link>
      </div>
    </div>
  );
}
