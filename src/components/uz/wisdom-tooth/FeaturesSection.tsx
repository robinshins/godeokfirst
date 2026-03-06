'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/surgeon.png',
      title: 'Boy klinik tajriba',
      description: 'Integrativ stomatologiya mutaxassisi bosh shifokor tomonidan\nxavfsiz va aniq donolik tishini olish'
    },
    {
      icon: '/images/clinic.png',
      title: 'Bir joyda davolash tizimi',
      description: 'Tashxisdan tortib olishgacha,\nkeyingi parvarishgacha bir kunda tugallanadi'
    },
    {
      icon: '/images/otoscope.png',
      title: 'Og\'riqsiz anesteziya tizimi',
      description: 'Zamonaviy og\'riq kamaytirish uskunalari bilan\nog\'riqsiz davolash'
    }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black whitespace-pre-line">
                {'Bizning klinikada\ndonolik tishini olishning o\'ziga xosligi'}
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] whitespace-pre-line">
                {'2,700 dan ortiq donolik tishini olish tajribasi va\ntizimli xizmat bilan farqli davolaymiz'}
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-[24px] px-5 py-10 flex flex-col gap-5 items-center justify-end w-full"
                style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}
              >
                <div className="w-20 h-20 relative rounded-full overflow-hidden">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start text-center w-full">
                  <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-white w-full">
                    {feature.title}
                  </p>
                  <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#e9ebf1] whitespace-pre-line w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Universitet darajasidagi murakkab olish - alohida ta'kidlash bo'limi */}
          <div className="rounded-[24px] border-2 border-[#006aff] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#006aff] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                Universitet kasalxonasi darajasida olish
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center whitespace-pre-line">
                {'Oddiy tish klinikalarida\n"Katta kasalxonaga boring", "Mutaxassis klinikada oldiring"\nbunday so\'zlarni eshitganmisiz?'}
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Murakkab ko'milgan tish</span> - milk ichida chuqur joylashgan bo'lsa ham OK
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Asabga yaqin tish</span> - asab shikastlanishi xavotiri yo'q, xavfsiz olish
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Gorizontal ko'milgan tish</span> - yon tomonga yotgan qiyin holatlar ham mumkin
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                2,700 dan ortiq olish tajribasi bilan<br />
                universitet kasalxonasi darajasidagi murakkablikni ham xavfsiz hal qilamiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
