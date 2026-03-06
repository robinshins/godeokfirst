'use client';

import Image from 'next/image';

export default function TreatmentMethodsSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4 relative">
      {/* Background gradient */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/cavity-treatment-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                Biz saqlaydigan davolash
              </h2>
              <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                Faqat bemor va tish saqlash uchun<br />
                davolash jarayoni va uskunalar tayyor
              </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* Karies davolash Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Karies davolash
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* Boshlang'ich karies davolash */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Boshlang'ich karies davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Q-ray diagnostikasi bilan yashirin kariesni aniqlash
                          </p>
                        </div>
                      </div>

                      {/* Rezin davolash */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Rezin davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Tabiiy tish rangi bilan bir xil estetik tiklash
                          </p>
                        </div>
                      </div>

                      {/* Inley / Onley */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Inley / Onley
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Katta kariesni ham sug'urmasdan aniq saqlash
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nerv davolash Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Nerv davolash
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* Og'riqni bartaraf etish */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Og'riqni bartaraf etish
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Kuchli tish og'rig'ini yo'qotib, kundalik hayotni tiklash
                          </p>
                        </div>
                      </div>

                      {/* Tish saqlash */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Tish saqlash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Sug'urmasdan tabiiy tishni saqlash
                          </p>
                        </div>
                      </div>

                      {/* Mikroskop yordamida davolash */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-gray.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Mikroskop yordamida davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Konservativ mutaxassisning aniq davolashi
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Professional uskunalar Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Professional uskunalar
                  </h3>

                  {/* Q-ray diagnostika uskunasi */}
                  <div className="flex gap-[22px] items-center w-full">
                    <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                      <div className="">
                        <Image
                          src="/images/qray-photo2.jpg"
                          alt="Q-ray diagnostika uskunasi"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start flex-1">
                      <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                        Q-ray diagnostika uskunasi
                      </p>
                      <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                        Zararsiz ko'rinadigan yorug'lik bilan<br />
                        yashirin kariesni aniqlash
                      </p>
                    </div>
                  </div>

                  {/* Mikroskop - Emphasis Section */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex gap-[22px] items-center w-full">
                        <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                          <Image
                            src="/images/microscope.jpg"
                            alt="Mikroskop"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] w-full">
                            Mikroskop yordamida davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                            Stomatolog ko'zi bilan ko'ra olmaydigan<br />
                            kichik qismlarni ham o'tkazib yubormaymiz
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Feature List */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Karies/tish yorig'i va boshqalarni aniq tashxislaydi
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Tishni 25 baravargacha kattalashtirib aniq davolaydi
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Davolangan tishning qayta kasallanishi va asoratlarini minimallashtiradi
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image
                              src="/icons/check-blue.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Aniq davolash bilan atrofdagi to'qimalar shikastlanishini minimallashtiradi
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description Box */}
                    <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-4 rounded-xl w-full border border-[#006aff]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        Faqat ba'zi universitet shifoxonalari va stomatologiya klinikalarida mavjud mikroskop stomatologning ko'zi bilan ko'ra olmaydigan kichik qismlarni ham ko'rsatib, murakkab konservativ davolashni samarali amalga oshirishga yordam beradi.
                      </p>
                    </div>

                    {/* Actual Treatment Case Images */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <h5 className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                        Mikroskop bilan ko'rinadigan narsalar
                      </h5>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-nerve-canal.webp"
                            alt="Nerv kanalini ta'minlash"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-root-inflammation.webp"
                            alt="Tish ildizi yallig'lanish sababini aniqlash"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden relative border border-[#e9ebf1]">
                          <Image
                            src="/images/microscope-crack-found.webp"
                            alt="Yoriq aniqlash"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          Nerv kanalini ta'minlash
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          Tish ildizi<br />yallig'lanish sababini aniqlash
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[12px] leading-[1.4] tracking-[-0.24px] text-[#727582] text-center">
                          Yoriq aniqlash
                        </p>
                      </div>
                    </div>

                    {/* Emphasis Message */}
                    <div className="bg-[#f0f7ff] px-4 py-3 rounded-xl w-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#006aff]">
                        Boshqa stomatologiyalarda qiyin nerv davolashlarni ham qabul qilib davolaymiz
                      </p>
                    </div>
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
