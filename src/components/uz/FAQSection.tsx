'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  page?: 'home' | 'implant' | 'whitening' | 'wisdom-tooth' | 'cavity' | 'gum';
}

export default function FAQSection({ page = 'home' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: Record<string, FAQItem[]> = {
    home: [
      {
        question: 'Operatsiya haqiqatdan ham og\'riqsizmi?',
        answer: 'Biz sedatsiya (uyqu terapiyasi) va kompyuterlashtirilgan og\'riqsiz anesteziya uskunalaridan foydalanamiz, bu esa og\'riqni minimal darajaga tushiradi. Bemurlarimizning ko\'pchiligi jarayon kutilganidan ancha oson kechganini ta\'kidlashadi.'
      },
      {
        question: 'Davolanish qancha vaqt davom etadi?',
        answer: 'Davolash turiga qarab vaqt har xil bo\'lishi mumkin. Raqamli implantatsiya holatida operatsiya vaqti qisqa va umumiy davolanish muddati an\'anaviy usulga qaraganda tezroq yakunlanadi. Aniq vaqt tashxisdan so\'ng belgilanadi.'
      },
      {
        question: 'Sug\'urta bilan davolanish mumkinmi?',
        answer: 'Tish tozalash, milk davolash va tish olish kabi muolajalar sug\'urta bilan qoplanadi. Implantatsiya uchun 65 yoshdan oshgan kishilar davlat sug\'urtasi imtiyozlaridan foydalanishlari mumkin.'
      }
    ]
  };

  const currentFaqs = faqs[page] || faqs.home;

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-[28px] font-bold text-[#111827] text-center">Tez-tez beriladigan savollar</h2>

          <div className="flex flex-col gap-4">
            {currentFaqs.map((faq, index) => (
              <div key={index} className="border border-[#e9ebf1] rounded-[20px] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white transition-colors"
                >
                  <span className="font-bold text-[#374151] pr-4">{faq.question}</span>
                  <div className={`shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <Image src="/icons/chevron-down.svg" alt="Toggle" width={20} height={20} />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0 bg-white">
                    <div className="h-[1px] bg-[#f3f4f6] mb-4" />
                    <p className="text-[#6b7280] leading-[1.6]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

