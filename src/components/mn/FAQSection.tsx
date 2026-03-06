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
        question: 'Хагалгаа үнэхээр өвдөлтгүй юу?',
        answer: 'Бид ухамсрын тайвшруулах нойрсуулах эмчилгээ болон компьютержсэн мэдээ алдуулах төхөөрөмж ашиглан өвдөлтийг хамгийн бага түвшинд байлгадаг. Өвчтөнүүдийн ихэнх нь "бодож байснаас хамаагүй дээр байлаа" гэж хэлдэг.'
      },
      {
        question: 'Эмчилгээний хугацаа хэр удаан үргэлжлэх вэ?',
        answer: 'Эмчилгээ бүрийн төрлөөс хамаарч өөр өөр байдаг. Дижитал имплантын тохиолдолд хагалгааны хугацаа богино бөгөөд нийт эмчилгээний хугацаа ч ердийн аргаас хамаагүй хурдан байдаг. Нарийн хугацааг оношилгооны дараа хэлэх боломжтой.'
      },
      {
        question: 'Даатгалд хамрагдах боломжтой юу?',
        answer: 'Шүдний чулуу цэвэрлэгээ, буйлны эмчилгээ, шүд авалт зэрэг нь даатгалд хамрагдана. Имплантын хувьд 65-аас дээш насны ахмадууд эрүүл мэндийн даатгалын хөнгөлөлт эдлэх боломжтой.'
      }
    ]
  };

  const currentFaqs = faqs[page] || faqs.home;

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-[28px] font-bold text-[#111827] text-center">Түгээмэл асуултууд</h2>

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

