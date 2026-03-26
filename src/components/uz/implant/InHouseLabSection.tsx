'use client';

import Image from 'next/image';

export default function InHouseLabSection() {
  const benefits = [
    {
      icon: '/icons/shield.svg',
      title: 'Eng yuqori mustahkamlikdagi vaqtinchalik tish',
      description: 'Eksklyuziv hamkorlik asosidagi maxsus material bilan\noperatsiyadan soʼng darhol oddiy ovqatlanish mumkin'
    },
    {
      icon: '/icons/tooth-xray-spot.svg',
      title: 'Buzilgan taqdirda darhol almashtirish',
      description: 'Ehtimoliy buzilishdan xavotirlanmang\nIchki laboratoriyada darhol almashtirib beramiz'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Tishsiz kun nol',
      description: 'Operatsiyadan soʼng yakuniy protez oʼrnatilguncha tishsiz yashash bir kun ham boʼlmaydi'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Darhol protezlash<br />
          Implant tizimi
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Raqamli jarayon va raqamli ichki laboratoriya bilan <br />
        tez protez tayyorlashni maqsad qilamiz.<br />
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Fast and Precise Prosthetics */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Tez va aniq protez tayyorlash"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Tez va aniq protez tayyorlash
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Bosh shifokor boy klinik tajriba asosida qulay davolash taqdim etadi va freza mashinasi yordamida protezni shaxsan tayyorlaydi<br />
              <br />
              Tayyorlashdan soʼng noqulaylik yoki asorat yoʼqligini yana bir bor tekshiradi va davolashdan keyin ham doimiy parvarish koʼrsatib, bemorlar mamnuniyatini oshirishga harakat qiladi
            </p>
          </div>
        </div>

        {/* Without In-House Lab */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="Ichki laboratoriya boʼlmasa?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Ichki laboratoriya boʼlmasa?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Ichki laboratoriya boʼlmasa tashqi laboratoriyaga protez tayyorlashni buyurtma berish kerak boʼlib, koʼp vaqt ketadi<br />
              <br />
              Tayyorlash va tuzatish jarayonini aks ettirish uchun tashqariga qayta topshirish noqulayligi va nozik tuzatishlarning qiyinligi kamchiliklari mavjud
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={80}
                height={80}
                className="w-full h-full"
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
