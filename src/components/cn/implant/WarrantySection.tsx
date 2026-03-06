'use client';

import Image from 'next/image';

export default function WarrantySection() {
  return (
    <div className="w-full flex justify-center" style={{
      background: 'linear-gradient(180deg, #331f0c 21.698%, #584025 66.827%, #866947 103.45%)'
    }}>
      <div className="box-border flex flex-col gap-[60px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="relative shrink-0 w-[282.552px] h-[1px]">
            <Image
              src="/images/warranty-line.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="relative w-full h-[92px]">
              <Image
                src="/images/lifetime-implant-warranty.svg"
                alt="Lifetime Peace of Mind Implant Warranty"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative shrink-0 w-[282.552px] h-[1px]">
              <Image
                src="/images/warranty-line.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <p className="font-semibold leading-[1.4] text-white text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              美迪斯牙科承诺成为负责任的医院。<br aria-hidden="true" />
              通过体系化的保证制度，让您终身安心使用。
            </p>
          </div>
        </div>

        {/* Warranty Image */}
        <div className="relative w-[343px] h-[485.388px] rounded-xl overflow-hidden">
          <Image
            src="/images/lifetime-implant-warranty.png"
            alt="Lifetime Peace of Mind Implant Warranty"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
