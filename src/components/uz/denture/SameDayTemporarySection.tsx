'use client';

import Image from 'next/image';

export default function SameDayTemporarySection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="flex flex-col gap-8 items-center">
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center leading-[1.4] tracking-[-0.03em]">
          operatsiya darhol keyin <span className="text-[#008095]">vaqtincha tish</span>gacha<br />
          tushdan keyin operatsiya, kechqurun ovqatlanish
        </h2>

        {/* Images Grid */}
        <div className="w-full flex flex-col gap-3">
          {/* Morning Surgery Image */}
          <div className="relative w-full h-[180px] rounded-2xl overflow-hidden">
            <Image
              src="/images/implant-morning-surgery.png"
              alt="tushdan keyin operatsiya"
              fill
              className="object-cover"
            />
          </div>

          {/* Dinner and Temporary Tooth Images */}
          <div className="flex gap-3">
            <div className="relative flex-1 h-[180px] rounded-2xl overflow-hidden">
              <Image
                src="/images/implant-dinner.png"
                alt="kechqurun ovqatlanish"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 h-[180px] rounded-2xl overflow-hidden">
              <Image
                src="/images/implant-temporary-tooth.png"
                alt="vaqtinchatish darhol o'rnatish"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-[#475569] text-center leading-[1.6] tracking-[-0.01em]">
          operatsiya darhol keyin <span className="font-bold text-[#0b1727]">vaqtincha tish</span> oʼrnatilib beriladi.<br />
          ovqatlanish mumkin, va tashqi koʼrinishdan <span className="font-bold text-[#0b1727]">umuman sezilmaydi</span>.
        </p>
      </div>
    </section>
  );
}
