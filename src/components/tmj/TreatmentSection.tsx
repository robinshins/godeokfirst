'use client';

import Link from 'next/link';

export default function TmjTreatmentSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Treatment
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            고덕퍼스트치과의<br />
            <span className="text-[#008095]">턱관절 치료 시스템</span>
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            증상과 원인에 따라<br />단계별 맞춤 치료를 진행합니다.
          </p>
        </div>

        {/* Treatment Steps */}
        <div className="flex flex-col gap-5">

          {/* Step 1 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">1</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                정밀 진단
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              파노라마 X-ray, 임상 검사, 교합 분석을 통해 턱관절 디스크의 위치와 상태, 근육의 긴장도, 교합 상태를 정밀하게 진단합니다.
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['파노라마 X-ray 촬영', '턱관절 촉진 및 청진', '교합 분석 · 개구량 측정'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">2</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                급성기 치료
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              통증이 심한 급성기에는 약물치료와 물리치료를 병행하여 빠르게 통증을 줄이고 염증을 가라앉힙니다.
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['소염진통제 · 근이완제 처방', '온찜질 · 냉찜질 가이드', '턱 안정 운동법 교육'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#008095] rounded-[24px] p-6 flex flex-col gap-5 shadow-xl shadow-[#008095]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">3</span>
              </div>
              <h3
                className="font-bold text-[20px] text-white tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                스플린트(교합안정장치) 치료
              </h3>
            </div>
            <p
              className="text-white/80 text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              환자 맞춤형 스플린트를 제작하여 턱관절에 가해지는 비정상적인 힘을 분산시키고, 관절 디스크가 정상 위치로 돌아가도록 유도합니다.
            </p>
            <div className="bg-white/10 rounded-[16px] p-4 flex flex-col gap-2">
              {['디지털 교합 분석 기반 맞춤 제작', '이갈이 · 이 악물기 방지', '관절 디스크 위치 교정', '주기적 교합 조정으로 최적화'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">4</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                원인 해결 · 재발 방지
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              통증이 안정된 후에는 근본 원인을 해결합니다. 부정교합 교정, 결손 치아 보철, 생활습관 개선 교육 등을 통해 재발을 예방합니다.
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['교합 조정 · 보철 치료', '생활습관 개선 교육', '정기 점검 프로그램'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <Link href="/consultation" className="w-full">
          <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
            <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              턱관절 상담 예약하기
            </p>
          </button>
        </Link>

      </div>
    </div>
  );
}
