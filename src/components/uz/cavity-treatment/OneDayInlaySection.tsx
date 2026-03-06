'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'Tezkor davolash',
      description: '1 tashrif bilan davolash tugallanib,\nband bo\'lgan kundalik hayotingizni bezovta qilmaydi'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Aniq protez',
      description: 'Raqamli skanerlash va milling mashinasi bilan\nmukammal moslashtirilib tayyorlanadi'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Darhol foydalanish mumkin',
      description: 'Vaqtinchalik protezsiz\ndarhol oddiy ovqatlanish mumkin'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          24 soatda tugaydigan<br />
          raqamli inley tizimi
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Raqamli skanerlash va ichki laboratoriya bilan<br />
        tezkor davolash tugallanishini ta'minlaymiz
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Raqamli skanerlash */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Raqamli skanerlash"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Aniq raqamli skanerlash
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Og'iz skaneri yordamida tishni aniq 3D skanlab, bemorning tish shaklini mukammal aniqlaydi<br />
              <br />
              Noqulay qolip olish jarayonisiz aniqroq va qulayroq davolash mumkin, raqamli ma'lumotlar darhol protez tayyorlashda ishlatiladi
            </p>
          </div>
        </div>

        {/* Milling mashinasi tayyorlash */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/milling-machine.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Ichki milling mashinasi tayyorlash
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Raqamli skanerlash ma'lumotlari asosida ichki milling mashinasida yuqori sifatli keramika bloki aniq ishlanadi<br />
              <br />
              Tashqi laboratoriyaga bormasdan vaqt qisqaradi va 24 soat ichida davolash mumkin
            </p>
          </div>
        </div>

        {/* Ichki laboratoriya bo'lmasa? */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="Ichki laboratoriya bo'lmasa?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Ichki laboratoriya bo'lmasa?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Tashqi laboratoriyaga protez tayyorlash buyurtma qilinadi va kamida 5-7 kun kerak bo'ladi<br />
              <br />
              Bir necha marta tashrif qilish kerak va vaqtinchalik protez ishlatishning noqulayligi bor hamda nozik sozlash qiyin
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#f0f7ff] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
