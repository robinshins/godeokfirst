'use client';

import Image from 'next/image';

export default function StatsSection() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] from-[0.541%] to-white w-full relative">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/stats-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              {/* Logo */}
              <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
                <Image
                  src="/icons/Logo.svg"
                  alt="Kyungsung Medis Dental Clinic"
                  width={168}
                  height={24}
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-center text-white tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                ที่ที่แม้แต่ทันตแพทย์ก็มาเรียนรู้<br />
                ความสามารถที่ได้รับการพิสูจน์
              </h2>

              {/* Subtitle */}
              <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                ผู้อำนวยการรักษาโดยตรงและรับผิดชอบ<br />
                ตลอด 10 ปีที่ผ่านมา
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            {/* Card 1: 10 ปีรักษาด้วยความรับผิดชอบ */}
            <div className="bg-white box-border flex flex-col gap-5 items-center px-5 py-8 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[72px] text-center text-nowrap tracking-[-2.88px]"
                  style={{
                    fontFamily: 'Pretendard, sans-serif',
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  10
                </p>
                <p className="font-bold leading-[1] text-[#006aff] text-2xl tracking-[-0.48px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ปี
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ที่เดิม ผู้อำนวยการคนเดิม
                </p>
                <p className="text-[15px] text-[#5d5f6d] text-center leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ผู้อำนวยการผ่าตัดโดยตรงและรับผิดชอบจนจบ
                </p>
              </div>
            </div>

            {/* Card 2: จำนวนทันตแพทย์ที่อบรม */}
            <div className="bg-white box-border flex flex-col gap-5 items-center px-5 py-8 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[72px] text-center text-nowrap tracking-[-2.88px]"
                  style={{
                    fontFamily: 'Pretendard, sans-serif',
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  500 +
                </p>
                <p className="font-bold leading-[1] text-[#006aff] text-2xl tracking-[-0.48px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  คน
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  จำนวนทันตแพทย์ที่อบรม
                </p>
                <p className="text-[15px] text-[#5d5f6d] text-center leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  อบรมทันตแพทย์ทั่วประเทศ<br />
                  เรื่องรากเทียมดิจิทัลและการผ่าตัดรากเทียมทั้งปาก
                </p>
              </div>
            </div>

            {/* Card 3: จำนวนการผ่าตัดรากเทียม */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                {/* ป้ายอันดับ 1 ปูซานนัมกู */}
                <div className="flex items-center justify-center relative shrink-0 w-full">
                  <Image
                    src="/icons/busan-namgu-no1.svg"
                    alt="อันดับ 1 ปูซานนัมกู"
                    width={311}
                    height={27}
                  />
                </div>

                {/* Number */}
                <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                  <p
                    className="font-bold leading-[1] not-italic text-[72px] text-center text-nowrap tracking-[-2.88px]"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    1,500 +
                  </p>
                  <p className="font-bold leading-[1] text-[#006aff] text-2xl tracking-[-0.48px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    เคส
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center w-full">
                <p className="text-sm text-[#5d5f6d] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  วิเคราะห์ด้วยคอมพิวเตอร์
                </p>
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  จำนวนการผ่าตัดรากเทียมดิจิทัล
                </p>
              </div>
            </div>

            {/* Card 4: การถอนฟันคุด */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[72px] text-center text-nowrap tracking-[-2.88px]"
                  style={{
                    fontFamily: 'Pretendard, sans-serif',
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  2,700 +
                </p>
                <p className="font-bold leading-[1] text-[#006aff] text-2xl tracking-[-0.48px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  เคส
                </p>
              </div>
              <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                การถอนฟันคุดที่ยากและซับซ้อน
              </p>
            </div>

            {/* ส่วนอธิบาย */}
            <div className="bg-[#f8f9fb] box-border flex flex-col gap-4 items-start px-5 py-6 relative rounded-2xl shrink-0 w-full mt-2">
              <p className="font-bold text-[18px] text-[#37373e] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                การทำผ่าตัดมากมายขนาดนี้<br />
                และยังอยู่ที่เดิมมา 10 ปี
              </p>
              <div className="flex flex-col gap-3 text-[15px] text-[#5d5f6d] leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p>
                  ถ้ามีปัญหา ย่อมยากที่จะ<br />อยู่รักษาที่เดิมได้นาน
                </p>
                <p>
                  ที่ที่หมอเปลี่ยนบ่อย<br />
                  ความรับผิดชอบก็ไม่ชัดเจน
                </p>
                <p className="text-[#006aff] font-medium">
                  Kyungsung Medis Dental Clinic ผู้อำนวยการให้คำปรึกษาโดยตรง<br />
                  ผ่าตัดโดยตรง และดูแลหลังการรักษาจนจบ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
