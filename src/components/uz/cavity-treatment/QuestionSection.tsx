'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Kanal davolash shartmi?',
      a: 'Karies asabga yetib borib, og\'riq berayotgan bo\'lsa, tishni sug\'urib yubormaslikning yagona yo\'li kanal davolashdir.'
    },
    {
      q: 'Davolanishdan keyin tish sezuvchan bo\'lib qoladimi?',
      a: 'Muolajadan so\'ng bir necha kun davomida biroz sezuvchanlik bo\'lishi tabiiy hol va bu tezda o\'tib ketadi.'
    },
    {
      q: 'Bir kunda muolaja tugaydimi?',
      a: 'Oddiy karies va inley muolajalarini bir kunda yakunlash mumkin. Kanal davolash esa yallig\'lanish darajasiga qarab 2-3 marta kelishni talab qilishi mumkin.'
    }
  ];

  return (
    <div className="bg-[#fffcf8] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-[28px] font-bold text-[#111827] text-center">Tez-tez beriladigan savollar</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-[24px] overflow-hidden border border-[#fed7aa]">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-[#374151]">{faq.q}</span>
                  <div className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <Image src="/icons/chevron-down.svg" alt="" width={20} height={20} />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-[1px] bg-[#fff7ed] mb-4" />
                    <p className="text-[#6b7280] leading-[1.6]">{faq.a}</p>
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

