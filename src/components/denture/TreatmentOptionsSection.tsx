'use client';

import { useState } from 'react';
import FadeInSection from '@/components/common/FadeInSection';
import { ChevronDown, Check, X, Shield, Clock, TrendingUp, Wallet } from 'lucide-react';

const treatments = [
  {
    id: 'denture',
    num: '01',
    tag: '건강보험 적용',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    title: '전통적인 틀니',
    subtitle: '가장 경제적인 선택',
    stats: [
      { label: '비용 부담', value: 1, icon: Wallet },
      { label: '편안함', value: 2, icon: Shield },
      { label: '저작력', value: 2, icon: TrendingUp },
      { label: '치료 속도', value: 5, icon: Clock },
    ],
    color: '#10b981',
    pros: [
      '건강보험 적용으로 가장 저렴한 비용',
      '65세 이상 본인부담 낮음',
      '시술 기간이 비교적 짧음',
    ],
    cons: [
      '뺐다 꼈다 해야 하는 불편함',
      '덜그럭거리고 이물감이 있음',
      '자연치아 저작력의 20~30% 수준',
    ],
    desc: '건강보험이 적용되어 비용 부담이 가장 적습니다. 다만 뺐다 꼈다 해야 하고 저작력이 자연치아의 20~30% 수준으로 음식 섭취에 제한이 생길 수 있습니다.',
  },
  {
    id: 'implant-denture',
    num: '02',
    tag: '65세 이상 보험',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-100',
    title: '임플란트 틀니',
    subtitle: '임플란트 2개 + 보험 틀니',
    stats: [
      { label: '비용 부담', value: 2, icon: Wallet },
      { label: '편안함', value: 3, icon: Shield },
      { label: '저작력', value: 3, icon: TrendingUp },
      { label: '치료 속도', value: 4, icon: Clock },
    ],
    color: '#3b82f6',
    pros: [
      '65세 이상 임플란트 2개까지 보험 적용',
      '일반 틀니보다 덜그럭거림 감소',
      '임플란트 식립 부위 저작력 향상',
    ],
    cons: [
      '여전히 뺐다 꼈다 필요',
      '고기, 사과 등은 여전히 먹기 어려움',
      '2개 초과 임플란트는 보험 미적용',
    ],
    desc: '임플란트 2개를 심고 틀니와 연결하는 방식입니다. 65세 이상은 임플란트 2개까지 건강보험이 적용됩니다. 일반 틀니보다 안정감이 높아지지만 음식 제한은 여전히 있습니다.',
  },
  {
    id: 'overdenture',
    num: '03',
    tag: '비급여',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
    title: '오버덴처',
    subtitle: '임플란트 2~4개 + 탈착식 틀니',
    stats: [
      { label: '비용 부담', value: 3, icon: Wallet },
      { label: '편안함', value: 4, icon: Shield },
      { label: '저작력', value: 4, icon: TrendingUp },
      { label: '치료 속도', value: 3, icon: Clock },
    ],
    color: '#8b5cf6',
    pros: [
      '틀니 고정력이 커져 덜그럭거림 크게 감소',
      '저작력이 일반 틀니보다 확실히 향상됨',
      '단단한 음식도 큰 불편 없이 섭취 가능',
    ],
    cons: [
      '오버덴처 술식 자체는 건강보험 비급여',
      '임플란트 수가 늘수록 비용 부담 증가',
      '일반 틀니보다 치료 기간 길어짐',
    ],
    desc: '임플란트 2~4개를 심고 그 위에 탈착식 틀니를 연결하는 방식입니다. 오버덴처 자체는 건강보험 비급여이며, 전체 치료비를 직접 부담해야 합니다. 대신 임플란트 틀니보다 임플란트 수가 많아 고정력과 저작력이 뚜렷하게 향상됩니다.',
  },
  {
    id: 'full-implant',
    num: '04',
    tag: '프리미엄',
    tagColor: 'bg-orange-50 text-orange-600 border-orange-100',
    title: '전체 임플란트',
    subtitle: '한 악당 8~12개 식립',
    stats: [
      { label: '비용 부담', value: 5, icon: Wallet },
      { label: '편안함', value: 5, icon: Shield },
      { label: '저작력', value: 5, icon: TrendingUp },
      { label: '치료 속도', value: 2, icon: Clock },
    ],
    color: '#f59e0b',
    pros: [
      '자연치아 저작력의 80~90% 회복',
      '가장 자연스럽고 편안한 느낌',
      '반영구적인 사용 기간 기대',
    ],
    cons: [
      '비용이 가장 높고 수술 부담이 있음',
      '뼈 상태가 좋아야 하며 뼈이식 가능성 높음',
      '치료 기간이 가장 오래 걸림',
    ],
    desc: '한 악에 8~12개의 임플란트를 심어 전체 치아를 커버합니다. 치료가 잘 되면 식생활에 아무 제한이 없으며 내 치아처럼 편안하게 사용하실 수 있습니다.',
  },
  {
    id: 'all-on-x',
    num: '05',
    tag: '추천 치료',
    tagColor: 'bg-[#008095]/10 text-[#008095] border-[#008095]/20',
    title: 'All-on-X 임플란트',
    subtitle: 'All-on-4 / All-on-6',
    stats: [
      { label: '비용 부담', value: 4, icon: Wallet },
      { label: '편안함', value: 5, icon: Shield },
      { label: '저작력', value: 5, icon: TrendingUp },
      { label: '치료 속도', value: 4, icon: Clock },
    ],
    color: '#008095',
    pros: [
      '전체 임플란트 대비 비용은 낮고 효과는 동일',
      '뼈 상태가 나쁜 분도 뼈이식 최소화로 가능',
      '치료 기간을 대폭 단축 (3~6개월)',
    ],
    cons: [
      '일반 틀니보다는 높은 비용 부담',
      '고난도 수술로 숙련된 의료진 필수',
    ],
    desc: '한 악당 4~6개의 임플란트만으로 전체 치아를 완성합니다. 뼈가 좋은 곳만 골라 심기 때문에 뼈이식을 최소화하고 기간은 짧아지면서도 전체 임플란트의 편리함을 누릴 수 있습니다.',
  },
];

function RatingVisual({ value, max = 5, color = '#008095' }: { value: number, max?: number, color?: string }) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <div 
          key={i} 
          className="h-1.5 w-4 rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: i < value ? color : '#e2e8f0',
            opacity: i < value ? 1 : 0.4
          }}
        />
      ))}
    </div>
  );
}

export default function TreatmentOptionsSection() {
  const [openId, setOpenId] = useState<string | null>('all-on-x');

  return (
    <div className="bg-slate-50 w-full flex justify-center overflow-hidden">
      <div className="box-border flex flex-col gap-10 items-start px-5 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-5 items-start w-full">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-[#008095] tracking-[3px] uppercase">TREATMENT GUIDE</span>
            <div className="h-1 w-12 bg-[#008095] rounded-full" />
          </div>
          
          <h2 className="font-extrabold leading-[1.3] text-[30px] text-[#111] tracking-[-1px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            치아가 하나도 없어도<br />
            <span className="text-[#008095] relative inline-block">
              나에게 맞는 선택지
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#008095]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>
          
          <p className="text-[15px] text-[#555] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            비용, 기간, 편안함까지 고려하여<br />
            가장 합리적인 치료 방법을 제안해드립니다.
          </p>
        </FadeInSection>

        {/* Treatment Accordion */}
        <div className="flex flex-col gap-4 w-full">
          {treatments.map((t, index) => {
            const isOpen = openId === t.id;
            return (
              <FadeInSection key={t.id} delay={index * 100}>
                <div
                  className={`group w-full rounded-[24px] transition-all duration-500 overflow-hidden border ${
                    isOpen 
                    ? 'bg-white border-[#008095]/20 shadow-[0_20px_40px_-12px_rgba(0,128,149,0.12)] ring-1 ring-[#008095]/5' 
                    : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Header row */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : t.id)}
                    className="w-full text-left flex items-center gap-4 p-5 sm:p-6"
                  >
                    <div 
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[22px] transition-all duration-300 ${
                        isOpen ? 'text-white scale-110' : 'text-slate-300 bg-slate-50 group-hover:bg-slate-100 group-hover:text-slate-400'
                      }`}
                      style={{ backgroundColor: isOpen ? t.color : '' }}
                    >
                      {t.num}
                    </div>
                    
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${t.tagColor}`}>
                          {t.tag}
                        </span>
                      </div>
                      <h3 className={`font-bold text-[19px] tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#111]' : 'text-[#333]'}`} style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {t.title}
                      </h3>
                    </div>

                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#008095]/10 rotate-180' : 'bg-slate-50'}`}>
                      <ChevronDown size={18} className={isOpen ? 'text-[#008095]' : 'text-slate-400'} />
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 flex flex-col gap-6">
                      <div className="h-px w-full bg-slate-100" />
                      
                      {/* 비교 지표 */}
                      <div className="grid grid-cols-2 gap-3">
                        {t.stats.map((stat) => (
                          <div key={stat.label} className="bg-slate-50/80 rounded-2xl p-3 flex flex-col gap-2 border border-slate-100/50">
                            <div className="flex items-center gap-2">
                              <stat.icon size={12} className="text-[#008095]" />
                              <span className="text-[11px] font-semibold text-slate-500" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{stat.label}</span>
                            </div>
                            <RatingVisual value={stat.value} color={t.color} />
                          </div>
                        ))}
                      </div>

                      {/* 설명 */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 rounded-full" />
                        <p className="pl-4 text-[14px] text-[#444] leading-[1.8] font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                          {t.desc}
                        </p>
                      </div>

                      {/* 장단점 Side by Side (if screen allows) or Stacked */}
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-emerald-50/40 rounded-[20px] p-4 border border-emerald-100/50">
                          <p className="font-bold text-[13px] text-emerald-700 flex items-center gap-2 mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            장점
                          </p>
                          <div className="flex flex-col gap-2.5">
                            {t.pros.map((pro, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[13px] text-slate-600 leading-tight" style={{ fontFamily: '"NanumSquare", sans-serif' }}>• {pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-rose-50/40 rounded-[20px] p-4 border border-rose-100/50">
                          <p className="font-bold text-[13px] text-rose-700 flex items-center gap-2 mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                              <X size={12} strokeWidth={3} />
                            </div>
                            단점
                          </p>
                          <div className="flex flex-col gap-2.5">
                            {t.cons.map((con, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[13px] text-slate-600 leading-tight" style={{ fontFamily: '"NanumSquare", sans-serif' }}>• {con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={600} className="w-full">
          <div className="relative overflow-hidden bg-[#111] rounded-[32px] p-8 text-white">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#008095] opacity-20 blur-[80px] -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#008095] opacity-10 blur-[80px] -ml-20 -mb-20" />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[22px] leading-[1.3] tracking-tight" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  나에게 딱 맞는 치료법,<br />
                  <span className="text-[#008095]">대표원장님께 직접 물어보세요</span>
                </h4>
                <p className="text-[14px] text-slate-400 leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  뼈 상태와 예산에 맞춰 무조건 비싼 치료가 아닌,<br />
                  내 부모님께 권할 수 있는 가장 정직한 방법을 찾습니다.
                </p>
              </div>
              
              <a
                href="https://naver.me/5zXcoe78"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <div className="bg-[#008095] hover:bg-[#009bb3] active:scale-[0.98] transition-all duration-300 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 shadow-[0_10px_20px_-5px_rgba(0,128,149,0.3)]">
                  <span className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    1:1 맞춤 상담 예약하기
                  </span>
                  <ChevronDown size={18} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
