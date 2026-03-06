'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const stats = [
    { number: '90', unit: '% устгалт', label: 'Хортой бактерийг дарангуйлж био хальс' },
    { number: '10', unit: ' жил', label: 'Адилхан газар ерөнхий эмч өөрөө эмчилгээ' },
    { number: '+300', unit: '% өсөлт', label: 'Буйлны үрэвслийн байгалийн эдгэрэлт' },
    { number: '80', unit: '% дарангуйлалт', label: 'Амны үнэрийн шалтгаан VSC бүрдэл' }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/icons/Logo.svg"
              alt="Кёнсон их сургуулийн Мэдиш шүдний эмнэлэг"
              width={168}
              height={24}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Мэдиш имплантын дараах<br />
              арчилгаа ч өөр
            </h2>
            <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              10 жилийн дараа ялгаа гарах жинхэнэ дараах арчилгааны ялгаа
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
          {/* Bacteria Therapy Card */}
          <div className="flex flex-col items-center overflow-hidden rounded-xl relative shrink-0 w-full">
            <div className="h-[241.57px] relative shrink-0 w-full">
              <Image
                src="/images/bacteria-therapy-detail.png"
                alt="Амны бактерийн эмчилгээ"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white box-border flex flex-col gap-5 items-start p-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Амны бактерийн эмчилгээ
              </p>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Пробиотикийг ашиглан хортой бактерийг дарангуйлж, амны хөндийн бактерийн тэнцвэрийг зохицуулдаг хамгийн сүүлийн үеийн урьдчилан сэргийлэх хөтөлбөр
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <div key={index} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="font-bold leading-normal not-italic text-center text-nowrap" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <span
                  className="text-[72px] tracking-[-2.88px]"
                  style={{
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.number}
                </span>
                <span className="text-2xl text-[#006aff] tracking-[-0.48px] ml-2">
                  {stat.unit}
                </span>
              </div>
              <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
