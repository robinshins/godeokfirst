'use client';

import { useState } from 'react';
import FadeInSection from '@/components/common/FadeInSection';
import { ChevronDown, Check, X, Shield, Clock, TrendingUp, Wallet } from 'lucide-react';

const treatments = [
  {
    id: 'denture',
    num: '01',
    tag: 'тохиолдолДаатгал хамрагдана',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
 title:'хиймэл шүд',
 subtitle:'',
    stats: [
 { label:'', value: 1, icon: Wallet },
      { label: 'тухтай байдал', value: 2, icon: Shield },
 { label:'', value: 2, icon: TrendingUp },
      { label: 'эмчилгээ хурд', value: 5, icon: Clock },
    ],
    color: '#10b981',
    pros: [
'тохиолдолДаатгал хамрагдана',
'65нас өөрийн',
'',
    ],
    cons: [
'',
'',
'байгалийншүд 20~30%',
    ],
 desc:'тохиолдолдаатгал. Зөвхөн байгалийншүд 20~30%.',
  },
  {
    id: 'implant-denture',
    num: '02',
 tag:'65нас даатгал',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'Имплант хиймэл шүд',
    subtitle: 'Имплант 2 + даатгал хиймэл шүд',
    stats: [
 { label:'', value: 2, icon: Wallet },
      { label: 'тухтай байдал', value: 3, icon: Shield },
 { label:'', value: 3, icon: TrendingUp },
      { label: 'эмчилгээ хурд', value: 4, icon: Clock },
    ],
    color: '#3b82f6',
    pros: [
'65нас Имплант 2 Даатгал хамрагдана',
'хиймэл шүд',
'Имплант суулгалт хэсэг',
    ],
    cons: [
'шаардлагатай',
', гэх мэт',
'2 Имплант даатгал',
    ],
 desc:'Имплант 2 хиймэл шүд. 65нас Имплант 2 тохиолдолдаатгал хамрагдана. хиймэл шүд.',
  },
  {
    id: 'overdenture',
    num: '03',
 tag:'',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
 title:'',
 subtitle:'Имплант 2~4 + хиймэл шүд',
    stats: [
 { label:'', value: 3, icon: Wallet },
      { label: 'тухтай байдал', value: 4, icon: Shield },
 { label:'', value: 4, icon: TrendingUp },
      { label: 'эмчилгээ хурд', value: 3, icon: Clock },
    ],
    color: '#8b5cf6',
    pros: [
'хиймэл шүд',
'хиймэл шүд',
'боломжтой',
    ],
    cons: [
'тохиолдолдаатгал',
'Имплант',
'хиймэл шүд эмчилгээ',
    ],
 desc:'Имплант 2~4 хиймэл шүд. тохиолдолдаатгал, бүрэн эмчилгээ. Имплант хиймэл шүд Имплант олон.',
  },
  {
    id: 'full-implant',
    num: '04',
 tag:'',
    tagColor: 'bg-orange-50 text-orange-600 border-orange-100',
    title: 'бүрэн Имплант',
 subtitle:'8~12 суулгалт',
    stats: [
 { label:'', value: 5, icon: Wallet },
      { label: 'тухтай байдал', value: 5, icon: Shield },
 { label:'', value: 5, icon: TrendingUp },
      { label: 'эмчилгээ хурд', value: 2, icon: Clock },
    ],
    color: '#f59e0b',
    pros: [
'байгалийншүд 80~90% удаа',
'байгалийн тухтай',
'',
    ],
    cons: [
'мэс засал',
'боломжтой',
'эмчилгээ',
    ],
 desc:'8~12 Имплант бүрэн шүд. эмчилгээ шүд тухтай.',
  },
  {
    id: 'all-on-x',
    num: '05',
 tag:'эмчилгээ',
    tagColor: 'bg-[#008095]/10 text-[#008095] border-[#008095]/20',
    title: 'All-on-X Имплант',
    subtitle: 'All-on-4 / All-on-6',
    stats: [
 { label:'', value: 4, icon: Wallet },
      { label: 'тухтай байдал', value: 5, icon: Shield },
 { label:'', value: 5, icon: TrendingUp },
      { label: 'эмчилгээ хурд', value: 4, icon: Clock },
    ],
    color: '#008095',
    pros: [
'бүрэн Имплант',
'минут хамгийн бага боломжтой',
'эмчилгээ (3~6сар)',
    ],
    cons: [
'хиймэл шүд',
'мэс засал',
    ],
 desc:'4~6 Имплант бүрэн шүд дуусгах. хамгийн бага бүрэн Имплант.',
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
 шүд <br />
            <span className="text-[#008095] relative inline-block">
 
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#008095]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>
          
          <p className="text-[15px] text-[#555] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
,, тухтай байдал <br />
 эмчилгээ.
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
                      
 {/* */}
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

 {/* */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 rounded-full" />
                        <p className="pl-4 text-[14px] text-[#444] leading-[1.8] font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                          {t.desc}
                        </p>
                      </div>

 {/* Side by Side (if screen allows) or Stacked */}
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-emerald-50/40 rounded-[20px] p-4 border border-emerald-100/50">
                          <p className="font-bold text-[13px] text-emerald-700 flex items-center gap-2 mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            давуу тал
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
 эмчилгээ,<br />
 <span className="text-[#008095]">Ерөнхий эмч нас </span>
                </h4>
                <p className="text-[14px] text-slate-400 leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 тохиолдол эмчилгээ,<br />
.
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
 1:1 
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
