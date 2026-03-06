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
              치과 전문가 미백<br />
              과산화수소 미백
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              의료용 고농도 미백제로<br />
              안전하고 효과적인 미백을 경험하세요
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 오스템 뷰티스 미백제 */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  오스템 뷰티스(Beautis) 미백 시스템
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                국내 1위 임플란트 기업 오스템의 프리미엄 전문가용 미백 시스템
              </p>

              {/* 뷰티스 미백제 이미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="오스템 뷰티스 미백제"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 뷰티스 라이트 기기 이미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="오스템 뷰티스 라이트 기기"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">뷰티스 15 미백제:</span> 15% 과산화수소 + 특수활성제로 빠른 미백 효과
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">뷰티스 라이트:</span> 고강도 LED 광선(150-220mW/㎠)으로 미백 효과 극대화
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">지각과민 방지제 함유:</span> 시림 증상을 최소화하는 안전한 처방
                  </p>
                </div>
              </div>
            </div>

            {/* 시술 원리 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  시술 원리
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  의료용 고농도 과산화수소(15%)가 치아 에나멜질을 투과하여 상아질 내부의 착색 분자를 산화·분해시킵니다<br />
                  이 과정에서 착색 물질이 무색의 작은 분자로 변환되어 자연스럽게 하얀 치아가 됩니다
                </p>
                {/* H2O2 반응 이미지 */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="과산화수소 미백 원리"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 시술 과정 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  시술 과정
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    '잇몸 보호제 도포 (잇몸 손상 방지)',
                    '고농도 미백제 도포',
                    'LED 광선 조사 (15-20분)',
                    '2-3회 반복 (당일 완료)',
                    '불소 도포로 마무리'
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
                { title: '치아 삭제 ZERO', desc: '에나멜질 손상 없음' },
                { title: '즉각적인 효과', desc: '시술 직후 2-8단계 밝아짐' },
                { title: '자연스러운 색상', desc: '본래 치아색의 톤업' }
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

          {/* 전문가 미백 vs 셀프 미백 */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
              왜 전문가 미백이어야 할까요?
            </h3>

            {/* 안전성 검증 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5v5c0 4.1 3.1 7.9 7 9 3.9-1.1 7-4.9 7-9V5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  전 세계 치과의사가 인정한 안전성
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                미백치료는 전 세계 치과의사들이 인정한 가장 안전한 치아치료 방법입니다. 많은 연구와 임상에서 안전성이 입증되었으며, 치과의사 모니터링 하에 진행되는 전문가 미백은 현재까지 치아에 미치는 부작용이 거의 보고되지 않았습니다.
              </p>
            </div>

            {/* 효과 차이 */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#008095] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">전문가 미백</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">셀프 미백</p>
                </div>

                {/* 농도 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% 고농도</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">식약처 허가 의료용</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% 저농도</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">효과 미미</p>
                </div>

                {/* 효과 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">하루 만에</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4단계 밝아짐</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4주 이상</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">서서히 미미한 효과</p>
                </div>

                {/* 안전성 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">사전 구강 검진</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ 불소도포 처치</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">자가 시술</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">잇몸 화상 위험</p>
                </div>
              </div>
            </div>

            {/* 부작용 최소화 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  체계적인 부작용 관리
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">시술 전 검진:</span> 충치, 잇몸 질환 확인 후 안전하게 진행
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">잇몸 보호:</span> 의료용 보호제로 연조직 화상 100% 예방
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">시술 후 관리:</span> 불소도포·재광화 처치로 시림 증상 최소화
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">전문의 모니터링:</span> 실시간 상태 확인으로 안전한 미백
                  </p>
                </div>
              </div>
            </div>

            {/* 임상 경험 */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  풍부한 임상 경험
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">1,000건 이상의 미백 시술 경험</span>으로 다양한 치아 상태에 대한 노하우를 보유하고 있습니다. 착색 정도, 치아 민감도, 기존 보철물 등을 고려한 맞춤형 미백 계획을 수립합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              자주 묻는 질문
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: '미백 후 치아가 시리지 않나요?',
                  answer: '일시적으로 약간의 시린 증상이 있을 수 있지만, 뷰티스 미백제는 지각과민 방지제를 함유하고 있어 시림 증상을 최소화합니다. 시술 후 불소도포와 재광화 처치를 통해 민감도를 더욱 줄이며, 대부분 수일 내에 사라집니다. 10년 이상의 임상 경험으로 환자 개개인의 치아 상태에 맞춰 안전하게 진행합니다.'
                },
                {
                  question: '미백 효과는 얼마나 지속되나요?',
                  answer: '전문가 미백의 효과는 일반적으로 1-2년 이상 지속됩니다. 개인의 식습관, 흡연 여부, 구강 관리 상태에 따라 차이가 있으며, 커피, 와인, 카레 등 착색 음식을 자주 섭취하거나 흡연을 할 경우 효과 지속 기간이 짧아질 수 있습니다. 정기적인 스케일링과 올바른 양치질로 미백 효과를 더 오래 유지할 수 있습니다.'
                },
                {
                  question: '착색이 다시 생기면 재시술이 가능한가요?',
                  answer: '네, 재시술이 가능합니다. 초기 미백 후 6개월~1년 정도 지나면 재시술을 권장하며, 초기 시술보다 더 짧은 시간과 적은 횟수로도 효과를 볼 수 있습니다. 정기적인 터치업(touch-up) 시술로 밝은 치아를 계속 유지할 수 있으며, 비용도 초기 시술보다 저렴합니다.'
                },
                {
                  question: '미백 후 주의사항이 있나요?',
                  answer: '미백 후 24-48시간 동안은 착색을 유발하는 음식(커피, 와인, 카레, 김치, 초콜릿 등)과 담배를 피해주세요. 이 기간은 치아 표면의 미세한 구멍이 열려있어 착색이 쉽게 되는 시기입니다. 또한 차가운 음식이나 뜨거운 음식은 일시적으로 시림을 유발할 수 있으니 조심하시고, 불소 함유 치약 사용을 권장합니다.'
                },
                {
                  question: '기존 보철물(크라운, 레진)도 미백이 되나요?',
                  answer: '아니요, 인공 보철물은 미백되지 않습니다. 과산화수소 미백제는 자연 치아의 착색 물질만 분해하므로, 크라운, 레진, 라미네이트 등의 보철물은 원래 색상을 유지합니다. 따라서 보철물이 있는 경우, 미백 후 보철물과 자연 치아의 색상 차이가 날 수 있어 보철물 교체를 고려해야 할 수 있습니다. 시술 전 상담을 통해 정확한 안내를 받으실 수 있습니다.'
                },
                {
                  question: '임신 중이거나 수유 중에도 미백이 가능한가요?',
                  answer: '임신 중이거나 수유 중에는 미백 시술을 권장하지 않습니다. 과산화수소가 태아나 모유에 미치는 영향에 대한 충분한 연구가 없어, 안전을 위해 임신과 수유가 끝난 후 시술받으시길 권장합니다.'
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
