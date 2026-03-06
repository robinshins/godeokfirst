'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TreatmentCards() {

  const treatments = [
    {
      id: 1,
      title: '전체 임플란트',
      subtitle: '디지털 전체 임플란트 전문',
      description: '전국 유일 3단계 임시치아 시스템으로\n최고의 교합과 편안함을 보장합니다',
      features: ['즉시 임시치아 제공', '10년간 책임진료', '원장 직접 집도', '디지털 가이드 수술'],
      icon: '🦷',
      color: 'blue',
      link: '/implant',
      highlight: true,
    },
    {
      id: 2,
      title: '치아 미백',
      subtitle: '최고급 장비 보유',
      description: '안전하고 효과적인 미백 시술\n스케일링과 함께 시 50% 할인',
      features: ['1회 시술로 즉시 효과', '치아 손상 없음', '합리적인 가격','전문가 미백과 라미네이트 모두 가능'],
      icon: '✨',
      color: 'purple',
      link: '/whitening',
      promotion: '특별 50% 할인',
    },
    {
      id: 3,
      title: '사랑니 발치',
      subtitle: '안전하고 신속한 발치',
      description: '3D CT 정밀 진단으로\n신경 손상 없이 안전하게 발치',
      features: ['통증 완화 마취 시행', '빠른 회복', '철저한 사후관리'],
      icon: '🏥',
      color: 'green',
      link: '/wisdom-tooth',
    },
    {
      id: 4,
      title: '충치치료 & 신경치료',
      subtitle: '자연치아 보존 전문',
      description: '발치 대신 살리는 치료\n보존과 전문의의 정밀 치료',
      features: ['미세현미경 정밀 진단', '큐레이 충치 발견', '통증 완화 신경치료', '보험 적용'],
      icon: '🦷',
      color: 'blue',
      link: '/gum-treatment',
    },
    {
      id: 5,
      title: '잇몸치료 & 스케일링',
      subtitle: '전신 건강의 시작',
      description: '성인 80%가 앓는 잇몸질환\n정기적 관리로 평생 건강한 치아',
      features: ['NSK varios 970 특수장비', '페리오클린 관리', '통증 완화 치료', '연 1회 보험 적용'],
      icon: '💊',
      color: 'green',
      link: '/gum-care',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            고덕퍼스트치과 <span className="text-cyan-400">전문 진료 분야</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            보존 전문의와 통합치의학 전문의 협진으로 체계적인 치료를 제공합니다
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {treatments.map((treatment) => (
            <Link href={treatment.link} key={treatment.id}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 overflow-hidden h-full group cursor-pointer">
                
                {/* Promotion Badge */}
                {treatment.promotion && (
                  <div className="bg-cyan-500 text-gray-900 text-sm font-bold px-4 py-2 text-center">
                    {treatment.promotion}
                  </div>
                )}
                
                <div className="p-8">

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-2xl border border-gray-600">
                      {treatment.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {treatment.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">
                    {treatment.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {treatment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">
                        자세히 알아보기
                      </span>
                      <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Medical Staff Introduction */}
        <div className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="bg-gray-800 shadow-2xl">
            <div className="max-w-7xl mx-auto">
              <Image 
                src="/images/medical-staff-intro.png" 
                alt="고덕퍼스트치과 의료진 소개"
                width={1400}
                height={700}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Official Hospital Designation */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">유명 대학, <br/> 기관 공식 지정 병원</h3>
            <p className="text-gray-400">믿을 수 있는 대학 및 기관이 선택한 협력 의료기관</p>
          </div>
          <div className="">
            <Image 
              src="/images/official-hospital.png" 
              alt="대학교 공식 지정 병원"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Megagen VIP Partnership */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">메가젠 VIP 파트너</h3>
            <p className="text-gray-400">전세계 임플란트 수출 1위 기업 메가젠과 긴밀한 협업</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Image 
                  src="/images/megagen-vip2.jpg" 
                  alt="메가젠 VIP 파트너십"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <Image 
                  src="/images/megagen-vip1.jpg" 
                  alt="메가젠 VIP 협력"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-6">메가젠 주요 자문의</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  세계 1위 임플란트 수출 기업 메가젠의 주요 자문의로서, 디지털 전체 임플란트(풀아치 임플란트) 전용 장비 개발도 함께 진행하고 있는 업계에서 인정받는 전문가입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Activities */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">전국 치과의사 대상 학술 강연</h3>
            <p className="text-gray-400">학계에서 인정받는 전문성과 노하우를 공유합니다</p>
          </div>
          {/* Main Featured Seminar - Full Width */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 mb-4">
            <Image 
              src="/images/busan-seminar.png" 
              alt="치과의사 세미나"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="p-6 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
              <p className="text-lg text-white font-bold">치과의사 대상 특별 강연</p>
              <p className="text-sm text-gray-300 mt-1">전국 치과의사들을 위한 디지털 임플란트 최신 기술 강연</p>
            </div>
          </div>
          
          {/* Other Seminars Grid - Smaller */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
              <Image 
                src="/images/seminar-photo1.JPG" 
                alt="세미나 강연 사진 1"
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-gray-300">학술대회 강연</p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
              <Image 
                src="/images/seminar-photo2.JPG" 
                alt="세미나 강연 사진 2"
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-gray-300">임플란트 워크샵</p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
              <Image 
                src="/images/seminar-photo3.JPG" 
                alt="세미나 강연 사진 3"
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-gray-300">디지털 임플란트 전문가 과정</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              치료가 필요하신가요?
            </h3>
            <p className="text-gray-400 mb-8">
              전문 의료진이 친절하게 상담해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <button className="px-8 py-4 bg-cyan-500 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-cyan-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    무료 상담 신청
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <a href="tel:031-611-3222">
                <button className="px-8 py-4 bg-gray-700 text-white font-bold rounded-lg shadow-lg border-2 border-gray-600 hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    전화 방문 예약
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}