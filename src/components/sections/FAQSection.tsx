'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: '🤔',
      question: '정말 수술 직후 바로 식사가 가능한가요?',
      answer: '네, 가능합니다. 원내 기공소에서 즉시 제작되는 고강도 임시치아 덕분에, 오전에 수술하시면 저녁에는 편안하게 식사하실 수 있습니다. 많은 분들이 수술 후 저녁에 삼겹살을 드실 정도로 튼튼합니다.',
      highlight: '빠른 식사 가능'
    },
    {
      icon: '✨',
      question: '고덕퍼스트치과만의 특별한 점이 무엇인가요?',
      answer: '저희는 [3단계 임시치아 시스템], [구강 박테리아테라피], 그리고 통합치의학과 전문의의 체계적인 진료를 모두 갖춘 곳입니다. 이는 압도적인 임상 결과로 이어집니다.',
      highlight: '고덕 유일의 시스템'
    },
    {
      icon: '💰',
      question: '비용이 다른 곳보다 비싸지 않나요?',
      answer: '초기 비용은 더 높을 수 있지만, 재수술 가능성을 0%에 가깝게 낮추기 때문에 장기적으로는 훨씬 경제적입니다. 재수술 비용과 시간을 고려하면, 한 번에 제대로 하는 것이 가장 합리적인 선택입니다.',
      highlight: '총 비용 절감 효과'
    },
    {
      icon: '⏰',
      question: '전체 임플란트, 치료 기간은 얼마나 걸리나요?',
      answer: '환자분의 뼈 상태에 따라 보통 3~6개월이 소요됩니다. 하지만 가장 중요한 것은, 수술 직후부터 임시치아를 사용하시기 때문에 치아 없이 지내는 날은 단 하루도 없다는 점입니다.',
      highlight: '치아 없는 날 0일'
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            상담 전, 가장 많이 궁금해하시는 질문들을 모았습니다.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-black/5 transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{faq.icon}</span>
                  <p className="font-semibold text-slate-800 text-lg">{faq.question}</p>
                </div>
                <div className={`w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5">
                    <div className="bg-slate-50 rounded-xl p-4 border border-black/5">
                      <p className="text-slate-600 leading-relaxed mb-3">
                        {faq.answer}
                      </p>
                      <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                        {faq.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl">
          <p className="text-2xl font-bold text-white">
            더 궁금한 점이 있으신가요?
          </p>
          <p className="text-md text-slate-300 mt-2 mb-6">
            망설이지 마세요. 전문 상담사가 1:1로 친절하게 답변해드립니다.
          </p>
          <a href="/consultation" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            무료 상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}