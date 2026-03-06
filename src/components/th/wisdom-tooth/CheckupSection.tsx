'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckupSection() {
  const [, setCheckedSymptoms] = useState<string[]>([]);

  const symptoms = [
    { id: '1', label: 'เจ็บเวลาเคี้ยว' },
    { id: '2', label: 'เหงือกบวม' },
    { id: '3', label: 'มีกลิ่นปาก' },
    { id: '4', label: 'รู้สึกตึงบริเวณขากรรไกร' }
  ];

  const toggleSymptom = (id: string) => {
    setCheckedSymptoms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full px-4 py-8" style={{ background: 'linear-gradient(145deg, #021847 8.63%, #0B255C 23.77%, #000 40.51%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#f3f6fb] text-center w-full whitespace-pre-line">
              {'ฟันคุดของคุณ\nสบายดีไหม?'}
            </h2>
          </div>

          {/* Symptom Card */}
          <div className="bg-white border border-[#f3f6fb] rounded-[24px] p-6 flex flex-col gap-6 items-center justify-center w-full">
            <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full whitespace-pre-line">
              {'ถ้ามีอาการใดอาการหนึ่ง\nควรตรวจสุขภาพฟันคุด'}
            </h3>

            {/* Symptom List */}
            <div className="flex flex-col gap-5 items-start w-full">
              <div className="flex flex-col gap-3 items-start w-full">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className="bg-[#f3f6fb] rounded-[16px] px-5 py-[17px] flex items-center w-full"
                  >
                    <p className="flex-1 font-semibold text-base leading-[1.4] tracking-[-0.32px] text-black text-left">
                      {symptom.label}
                    </p>
                    <div className="w-[22px] h-[22px] relative shrink-0">
                      <Image
                        src="/icons/radio-button.svg"
                        alt=""
                        width={22}
                        height={22}
                        className="w-full h-full"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/th/consultation" className="w-full">
            <button className="bg-[#006aff] h-16 rounded-[18px] px-6 py-4 flex items-center justify-center w-full">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white">
                นัดหมายปรึกษา AI
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
