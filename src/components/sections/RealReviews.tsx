'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RealReviews() {
  const [activeImage, setActiveImage] = useState(0);

  const beforeAfterImages = [
    { src: '/images/full-implant-before-after1.png', alt: '전체 임플란트 전후 사례 1' },
    { src: '/images/full-implant-before-after2.png', alt: '전체 임플란트 전후 사례 2' },
    { src: '/images/full-implant-before-after3.png', alt: '전체 임플란트 전후 사례 3' },
    { src: '/images/full-implant-before-after4-xray.png', alt: '전체 임플란트 전후 엑스레이' },
    { src: '/images/full-implant-before-after5.png', alt: '전체 임플란트 전후 사례 5' }
  ];

  // 자동 슬라이드 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % beforeAfterImages.length);
    }, 2000); // 2초마다 전환

    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % beforeAfterImages.length);
  };


  return (
    <section className="py-20 sm:py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            실제 환자분들이 <br/>증명하는 결과
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            왜 고덕퍼스트치과를 선택하고, 주변에 자신있게 추천하는지 직접 확인해보세요.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-8">실제 치료 후기</h3>
          <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_DkhD9mkkGw?start=697"
              title="고덕퍼스트치과 실제 치료 과정"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Before/After Image Slider */}
        <div>
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-8">실제 치료 전후 사례</h3>
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Image Container */}
            <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
              {beforeAfterImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-contain transition-opacity duration-500 ${
                    activeImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="이전 이미지"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="다음 이미지"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeImage === index 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`이미지 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}