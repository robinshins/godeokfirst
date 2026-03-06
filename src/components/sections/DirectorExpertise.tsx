'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DirectorExpertise() {
  const [activeImage, setActiveImage] = useState(0);

  const seminarImages = [
    {
      src: '/images/seminar-photo1.JPG',
      alt: '고덕퍼스트치과 원장 세미나 진행 사진 1',
      caption: '전국 치과의사들을 대상으로 임플란트 세미나 진행'
    },
    {
      src: '/images/seminar-photo2.JPG',
      alt: '고덕퍼스트치과 원장 세미나 진행 사진 2',
      caption: '최신 임플란트 기법을 다른 치과의사들에게 교육'
    },
    {
      src: '/images/seminar-photo3.JPG',
      alt: '고덕퍼스트치과 원장 세미나 진행 사진 3',
      caption: '실습 중심의 전문가 교육 프로그램 운영'
    }
  ];

  const achievements = [
    {
      icon: '🎓',
      title: '세계 구강임플란트학회 이사',
      description: '국제적으로 인정받은 임플란트 전문가'
    },
    {
      icon: '👨‍🏫',
      title: '치과의사 대상 세미나 강연',
      description: '다른 치과 원장님들이 배우러 오는 검증된 실력'
    },
    {
      icon: '📚',
      title: 'ICMC 2024 심포지엄 참여',
      description: '최신 기술과 트렌드를 선도하는 전문가'
    },
    {
      icon: '🏆',
      title: '메가젠 VIP 파트너',
      description: '임플란트 제조사가 인정한 최고 수준의 기술력'
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            치과의사들이 배우러 오는<br />
            <span className="text-blue-600">고덕퍼스트치과 이동현 원장님</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            남들이 세미나를 <span className="font-bold text-slate-800">들을</span> 때, <br/>고덕퍼스트는 세미나를 <span className="font-bold text-slate-800">엽니다</span>.<br />
            실력의 차이가 결과의 차이를 만듭니다.
          </p>
        </div>

        {/* Seminar photos showcase */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={seminarImages[activeImage].src}
                alt={seminarImages[activeImage].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-semibold">{seminarImages[activeImage].caption}</p>
              </div>
            </div>
            
            {/* Image selector */}
            <div className="flex gap-2 p-4 bg-slate-50">
              {seminarImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-1 h-20 relative rounded-lg overflow-hidden transition-all duration-300 ${
                    activeImage === index 
                      ? 'ring-2 ring-blue-500 ring-offset-2' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={seminarImages[index].src}
                    alt={`썸네일 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-slate-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key message */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 text-center shadow-2xl">
          <p className="text-xl sm:text-2xl font-bold mb-4">
            &quot;실력 있는 의사를 찾으신다면,<br />
            <span className="text-yellow-300">의사들이 찾는 의사</span>를 선택하세요&quot;
          </p>
          <p className="text-md text-blue-100">
            고덕퍼스트치과 원장님은 다른 치과의사들에게 임플란트 기술을 가르치는<br className="hidden sm:block" />
            대한민국 임플란트 분야의 선도적인 전문가입니다.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mt-12 text-center">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">15년+</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">임플란트 전문 경력</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">500+</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">교육한 치과의사</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600">100%</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">환자 만족도</p>
          </div>
        </div>
      </div>
    </section>
  );
}