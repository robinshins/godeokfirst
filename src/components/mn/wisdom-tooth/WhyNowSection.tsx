'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    { title: 'Хурц үрэвсэл', description: 'Хүчтэй өвдөлт, нүүр хавдах' },
    { title: 'Хажуугийн шүд цоорох', description: 'Гэмтэл хажуугийн шүдэнд тархана' },
    { title: 'Эрүүний үений эмгэг', description: 'Архаг толгой өвдөлт, эрүү өвдөх' },
    { title: 'Шүдний эгнээ алдагдах', description: 'Шүд засал хийх шаардлагатай болж болно' }
  ];
  const benefits = [
    { title: 'Хурдан эдгэрэлт', description: 'Залуу байх тусам хурдан эдгэрнэ' },
    { title: 'Хүндрэл урьдчилан сэргийлэх', description: 'Үрэвсэлгүй үед илүү аюулгүй' },
    { title: 'Зардал хэмнэх', description: 'Асуудал үүсэхээс өмнө эмчлэх' },
    { title: 'Тав тухтай мэс засал', description: 'Үрэвсэлгүй бол мэдээгүйжүүлэг илүү сайн нөлөөлнө' }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">WHY NOW</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">Яагаад <span className="text-[#008095]">одоо</span> авах ёстой вэ?</h2>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">Хүзүү шүдийг орхиход үүсэх асуудал</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((p, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/x-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{p.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#f3f6fb] border border-[#e9ebf1] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <p className="font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">Эрт авахын давуу тал</p>
                <div className="bg-white rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0"><Image src="/icons/check-icon.svg" alt="" width={24} height={24} /></div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">{b.title}</p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">Олон өвчтөн тэвчиж тэвчээд<br />яаралтай тусламжид хандана</h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80">Долоо хоног бүр үрэвсэл хүчтэй болж<br />үүрээр яаралтай тусламжид ирдэг өвчтөн байдаг<br />Эрт авснаар энэ зовлонгоос сэргийлж чадна</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
