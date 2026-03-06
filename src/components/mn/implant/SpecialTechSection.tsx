'use client';

import Image from 'next/image';

export default function SpecialTechSection() {
  const features = [
    'Швед улсын Каролинска анагаах ухааны сургуулийн боловсруулсан технологи',
    'Шүд болон буйланд шууд наалддаг пробиотик',
    'Шүдний оо болон амны угаалгын шингэнд ч амьд үлддэг хүчирхэг омог',
    'Өвчтөний элсэн чихэр болон шүдний хөндийн хүчил үүсгэдэггүй аюулгүй омог'
  ];

  return (
    <div className="bg-white w-full relative flex justify-center">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/special-tech-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Кёнсон Мэдишийн<br />
              онцгой технологи
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {/* Features Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Бид бахархдаг
              </p>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 w-6 h-6">
                      <Image
                        src="/icons/check-blue.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 items-start justify-center">
                      <p className="font-bold leading-[1.5] not-italic text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 구강 박테리아 테라피 Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 box-border flex flex-col gap-4 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full border border-blue-200">
              <h3 className="font-bold leading-[1.35] not-italic text-xl text-black tracking-[-0.4px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Насан туршийн амны арчилгаа
              </h3>
              <div className="bg-white h-[200px] overflow-hidden relative rounded-[16px] shrink-0 w-full">
                <Image
                  src="/images/beneficial-bacteria.jpg"
                  alt="Амны бактерийн эмчилгээ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 items-start w-full">
                <p className="font-bold leading-[1.4] not-italic text-lg text-black tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Амны бактерийн эмчилгээ
                </p>
                <p className="font-medium leading-[1.5] not-italic text-[15px] text-[#5d5f6d] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Швед улсын Каролинска анагаах ухааны сургуулийн боловсруулсан пробиотикээр имплантыг удаан эрүүл байлгана
                </p>
              </div>
            </div>

            {/* Waterpik Gift Card */}
            <div className="bg-[#006aff] box-border flex flex-col gap-6 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full">
              <div className="bg-white h-[245px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                <Image
                  src="/images/waterpik.jpeg"
                  alt="Ватерпик"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <div className="flex flex-col gap-2 items-start leading-[1.35] not-italic relative shrink-0 text-center text-white w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="font-bold relative shrink-0 text-2xl tracking-[-0.48px] w-full">
                    90,000 воны үнэтэй
                  </p>
                  <p className="font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">
                    Ватерпик дэмжлэг
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.2)] box-border flex flex-col gap-6 items-start p-6 relative rounded-[20px] shrink-0 w-full">
                  <p className="font-bold leading-[1.5] not-italic text-[17px] text-center text-white tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Бүрэн имплантын сэтгэгдэл үлдээх арга хэмжээнд оролцвол!
                  </p>
                  <div className="h-0 relative shrink-0 w-full">
                    <Image
                      src="/icons/line-divider.svg"
                      alt=""
                      width={247}
                      height={1}
                      className="w-full"
                    />
                  </div>
                  <div className="font-bold leading-[1.5] not-italic text-lg text-center text-white tracking-[-0.36px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Имплант орчмын хоолны үлдэгдэл цэвэрлэх,<br />
                    буйл массаж хийхэд үр дүнтэй!<br />
                    Амны арчилгаанд зайлшгүй шаардлагатай<br />
                    Ватерпикийг бэлэглэнэ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
