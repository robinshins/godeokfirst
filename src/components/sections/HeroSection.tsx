'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950"></div>
      
      {/* Animated gradient orbs - smaller on mobile */}
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-40 h-40 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-20 w-40 h-40 sm:w-72 sm:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-20 px-1 sm:px-1 py-16 sm:py-20 text-center max-w-4xl mx-auto">
        {/* Trust badges - redesigned for mobile */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { icon: '', text: '세계 구강임플란트학회 이사', shortText: '세계구강임플란트학회 이사' },
            { icon: '', text: '10년간 책임진료', shortText: '10년간 같은자리 책임진료' },
            { icon: '', text: '메가젠 VIP 파트너', shortText: '메가젠/오스템/네오 자문의' },
            { icon: '', text: '메가젠 VIP 파트너', shortText: '텍사스 A&M 치과대학 보철연구회 회원' },
            { icon: '', text: '메가젠 VIP 파트너', shortText: '최첨단 임플란트 장비보유' },
          ].map((badge, i) => (
            <span 
              key={i}
              className="bg-white/15 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs font-medium text-white border border-white/20 shadow-sm hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="mr-1">{badge.icon}</span>
              <span className="sm:hidden">{badge.shortText}</span>
              <span className="hidden sm:inline">{badge.text}</span>
            </span>
          ))}
        </div>

        {/* Main headline - better mobile sizing */}
        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-white block">치과의사도 배우러 오는</span>
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              전국에서 인정받는 임플란트
            </span>
            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 300 10" preserveAspectRatio="none">
              <path d="M0,5 Q150,0 300,5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="50%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>
        
        <p className={`text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 font-light text-slate-200 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <span className="text-cyan-400 font-semibold">10년간 같은 자리 책임진료</span> ·
          <span className="text-cyan-400 font-semibold">3단계 정밀 교합으로 완벽</span>
          <br />
          <span className="text-sm sm:text-base text-slate-300 block mt-2">전체임플란트 전문 대표원장 직접 진료</span>
        </p>

        {/* CTA Buttons - mobile optimized */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
          <Link href="/consultation" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <span>무료 상담 예약하기</span>
                <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Link>
          
          <button 
            onClick={() => document.getElementById('proof-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 backdrop-blur-xl text-white font-semibold text-sm sm:text-base rounded-2xl border border-white/20 hover:bg-white/10 hover:border-white/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            왜 고덕퍼스트인가?
          </button>
        </div>

        {/* Additional trust indicators */}
        <div className={`mt-16 flex justify-center gap-8 text-sm text-slate-400 transition-all duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>즉시 임시치아</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>재수술 0건</span>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
