'use client';

import Image from 'next/image';

export default function PromotionSection() {
  return (
    <div className="bg-[#21314E] w-full py-[70px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[711px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-5 relative z-10">
        <div className="flex flex-col gap-[70px] w-full">
          {/* Title */}
          <div className="flex flex-col gap-6 items-start w-full text-center">
            <h2 className="font-bold text-[36px] leading-[1.35] tracking-[-0.72px] text-[#f2f2f2] w-full">
              아직 올해 스케일링<br />
              안 받으셨나요?
            </h2>
            <div className="font-bold text-base leading-[2] tracking-[1.92px] uppercase text-[#4DC8D8] w-full">
              <p className="mb-0">국가 검진 스케일링 받을 때</p>
              <p>미백 받으면 50% 할인!</p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 w-full">
            {/* Card 1: 스탠다드 미백 */}
            <div className="bg-[#21314E] border border-[#ffdb59] rounded-[12px] p-6 flex flex-col gap-4 w-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-[6px] items-start justify-center text-white">
                  <p className="font-bold text-[24px] leading-[normal] tracking-[-0.96px] w-full">
                    스탠다드 미백
                  </p>
                  <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-70 w-full">
                    하루에 1 사이클 진행
                  </p>
                </div>
                <div className="bg-[#ffc53d] rounded-[8px] px-2.5 py-[5px]">
                  <p className="font-bold text-[14px] leading-[23px] tracking-[-0.56px] text-black whitespace-nowrap">
                    50% OFF
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <p className="font-medium text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] line-through w-full">
                  정상가
                </p>
                <div className="flex gap-1 items-end w-full">
                  <p className="font-bold text-[60px] leading-none tracking-[-1.2px] text-white whitespace-nowrap">
                    50%
                  </p>
                  <div className="pb-[5px]">
                    <p className="font-bold text-[24px] leading-[normal] tracking-[-0.96px] text-white whitespace-nowrap">
                      할인
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-center w-full">
                <div className="flex gap-3 items-center w-full">
                  <div className="w-6 h-6 opacity-50">
                    <Image
                      src="/icons/thumbs-up.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="font-semibold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                    빠른 완성
                  </p>
                </div>
                <div className="flex gap-3 items-center w-full">
                  <div className="w-6 h-6">
                    <Image
                      src="/icons/lightning.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="font-semibold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                    수술 후까지 관리
                  </p>
                </div>
              </div>
            </div>

   
          </div>
        </div>
      </div>
    </div>
  );
}
