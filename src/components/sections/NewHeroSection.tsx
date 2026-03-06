'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function NewHeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/medis-dental.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Header */}
      <Header />

      <div className="relative z-10 px-4 sm:px-6 py-20 text-center max-w-6xl mx-auto">
        {/* Trust badges - Clean design with background */}
        <div className={`flex flex-col gap-3 max-w-md mx-auto text-left mb-12 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
            <div className="w-8 h-8 bg-emerald-400/20 border-2 border-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
            </div>
            <span className="text-white text-base font-light">세계구강임플란트학회 이사</span>
          </div> */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
            <div className="w-8 h-8 bg-emerald-400/20 border-2 border-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-white text-base font-light">10년간 같은 자리 책임진료</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
            <div className="w-8 h-8 bg-emerald-400/20 border-2 border-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 border border-emerald-400 rounded-sm"></div>
            </div>
            <span className="text-white text-base font-light">메가젠/네오/오스템 자문의</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
            <div className="w-8 h-8 bg-emerald-400/20 border-2 border-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-white text-base font-light">국내 최고 수준 설비 보유</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
          <span className="text-white block leading-tight font-light">
            치과의사도 배우러 오는
          </span>
          <span className="text-white block mt-2 font-bold">
            전국에서 인정받는 치과
          </span>
        </h1>
        
        <p className={`text-base sm:text-lg mb-4 text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          고덕퍼스트치과의원이 추구하는<br />
          경영핵심입니다.
        </p>




      </div>
    </section>
  );
}