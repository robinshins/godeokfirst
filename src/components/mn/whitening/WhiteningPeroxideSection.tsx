'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhiteningPeroxideSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
 шүдний эмнэлэг мэргэжилтэн цайруулах<br />
 цайруулах
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
 цайруулах <br />
 аюулгүй цайруулах нас 
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
 {/* Osstem цайруулах */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
 Osstem (Beautis) цайруулах систем
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
 1 Имплант Osstem мэргэжилтэн цайруулах систем
              </p>

 {/* цайруулах */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
 alt="Osstem цайруулах"
                  fill
                  className="object-contain"
                />
              </div>

 {/* */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
 alt="Osstem"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold"> 15 цайруулах:</span> 15% + хурдан цайруулах 
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">:</span> LED (150-220mW/㎠) цайруулах 
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">:</span> хамгийн бага аюулгүй 
                  </p>
                </div>
              </div>
            </div>

 {/* вон */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
 вон 
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
 (15%) шүд минут ·минут <br />
 минут байгалийн шүд 
                </p>
 {/* H2O2 */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
 alt="цайруулах вон"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

 {/* */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
 
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
'буйл түрхэлт (буйл гэмтэл)',
'цайруулах түрхэлт',
'LED (15-20минут)',
'2-3удаа (дууссан)',
'түрхэлт дуусгах'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#008095] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
 { title:'шүд ZERO', desc:'гэмтэл байхгүй'},
 { title:'', desc:'дараа шууд 2-8шатлал'},
 { title:'байгалийн өнгө', desc:'шүд'}
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

 {/* мэргэжилтэн цайруулах vs цайруулах */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
 мэргэжилтэн цайруулах?
            </h3>

 {/* аюулгүй */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5v5c0 4.1 3.1 7.9 7 9 3.9-1.1 7-4.9 7-9V5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
 нас шүдний эмнэлэг аюулгүй 
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
 цайруулахэмчилгээ нас шүдний эмнэлэг аюулгүй шүдэмчилгээ. олон аюулгүй, шүдний эмнэлэг хяналт явуулах мэргэжилтэн цайруулах дахин шүд.
              </p>
            </div>

 {/* зөрүү */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#008095] p-3 flex items-center justify-center">
 <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">мэргэжилтэн цайруулах</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
 <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]"> цайруулах</p>
                </div>

 {/* */}
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]"> </p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]"> </p>
                </div>

 {/* */}
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]"> </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4шатлал </p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4 </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]"> </p>
                </div>

 {/* аюулгүй */}
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]"> амны хөндий </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ түрхэлт </p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
 <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]"> </p>
 <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">буйл </p>
                </div>
              </div>
            </div>

 {/* хамгийн бага */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
 арчилгаа
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]">:</span> цооронхой, буйл шалгалт аюулгүй явуулах
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]">буйл:</span> 100% 
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]"> арчилгаа:</span> түрхэлт·дахин хамгийн бага 
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
 <span className="font-bold text-[#008095]">мэргэжлийн эмч хяналт:</span> шалгалт аюулгүй цайруулах
                  </p>
                </div>
              </div>
            </div>

 {/* */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
 
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
 <span className="font-bold">1,000тохиолдол цайруулах </span> шүд., шүд, одоогийн хиймэл шүд гэх мэт төрөл цайруулах.
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Түгээмэл асуултууд
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
 question:'цайруулах шүд?',
 answer:', цайруулах хамгийн бага. түрхэлт дахин, минут. 10жил өвчтөн шүд аюулгүй явуулах.'
                },
                {
 question:'цайруулах?',
 answer:'мэргэжилтэн цайруулах 1-2жил.,, амны хөндий арчилгаа зөрүү,,, гэх мэт. цэвэрлэгээ цайруулах хадгалах.'
                },
                {
 question:'дахин боломжтой?',
 answer:'Тийм, дахин боломжтой. эхний цайруулах 6сар~1жил дахин, эхний. (touch-up) шүд хадгалах, эхний.'
                },
                {
 question:'цайруулах?',
 answer:'цайруулах 24-48 (,,,, гэх мэт) дахин нас. шүд гадаргуу нас. эсвэл зөрүү,.'
                },
                {
 question:'одоогийн хиймэл шүд (титэм, композит) цайруулах?',
 answer:'Үгүй, хиймэл шүд цайруулах. цайруулах байгалийн шүд минут, титэм, композит, гэх мэт хиймэл шүд анхны өнгө хадгалах. хиймэл шүд, цайруулах хиймэл шүд байгалийн шүд өнгө зөрүү хиймэл шүд..'
                },
                {
 question:'цайруулах боломжтой?',
 answer:'цайруулах. минут, аюулгүй.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f3f6fb] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-5 flex items-start justify-between gap-3 text-left hover:bg-[#e9ebf1] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#008095] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#008095] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#008095] font-bold text-[16px] shrink-0">A.</span>
                        <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
