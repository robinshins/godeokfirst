'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CheckupSection() {
  const [, setCheckedSymptoms] = useState<string[]>([]);
  const symptoms = [
    { id: '1', label: 'Боль при жевании' },
    { id: '2', label: 'Опухшие дёсны' },
    { id: '3', label: 'Неприятный запах изо рта' },
    { id: '4', label: 'Тянущее ощущение в челюсти' }
  ];
  const toggleSymptom = (id: string) => {
    setCheckedSymptoms(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="w-full px-4 py-[60px] bg-gradient-to-b from-[#008095] to-[#006d80]">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white text-center w-full">Как ваши<br />зубы мудрости?</h2>
          <div className="bg-white border border-[#f3f6fb] rounded-[24px] p-6 flex flex-col gap-6 items-center justify-center w-full">
            <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">Если есть хоть один из<br />этих симптомов — нужна проверка</h3>
            <div className="flex flex-col gap-3 items-start w-full">
              {symptoms.map((s) => (
                <button key={s.id} onClick={() => toggleSymptom(s.id)} className="bg-[#f3f6fb] rounded-[16px] px-5 py-[17px] flex items-center w-full">
                  <p className="flex-1 font-semibold text-base leading-[1.4] tracking-[-0.32px] text-black text-left">{s.label}</p>
                  <div className="w-[22px] h-[22px] relative shrink-0"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#008095" strokeWidth="2" /></svg></div>
                </button>
              ))}
            </div>
          </div>
          <Link href="/ru/consultation" className="w-full">
            <button className="bg-white h-16 rounded-[18px] px-6 py-4 flex items-center justify-center w-full hover:bg-gray-50 transition-colors">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#008095]">AI-консультация</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
