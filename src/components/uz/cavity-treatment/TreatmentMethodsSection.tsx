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
                  Davolash usullari va jihozlar
                </h2>
                <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                  Holatga mos davolash usulini tanlab,<br />
                  aniq jihozlar bilan sifatni oshiramiz
                </p>
            </div>
          </div>

          {/* Treatment Cards */}
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* 충치 치료 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Kariyes davolash
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 초기 충치 치료 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            Boshlangʼich kariyes davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Aniq diagnostika bilan yashirin kariyesni aniqlash
                          </p>
                        </div>
                      </div>

                      {/* 레진 치료 */}
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
                            Tabiiy tish rangida estetik tiklash
                          </p>
                        </div>
                      </div>

                      {/* 인레이 · 온레이 */}
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
                            Inley · Onley
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Katta kariyesni ham tishni sug`urmasdan aniq saqlash
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 신경 치료 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Asab davolash
                  </h3>
                  <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                    <div className="flex flex-col gap-[14px] items-start w-full">
                      {/* 통증 완화 */}
                      <div className="flex items-start gap-0 w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center flex-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black whitespace-nowrap">
                            {"Og\u02BCriqni kamaytirish"}
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            {"Kuchli tish og\u02BCrig\u02BCini bartaraf etib qulay kundalik hayotni tiklash"}
                          </p>
                        </div>
                      </div>

                      {/* 치아 보존 */}
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
                            Tishni saqlash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            {"Sug\u02BCurmasdan tabiiy tishni saqlash"}
                          </p>
                        </div>
                      </div>

                      {/* 정밀 신경 치료 */}
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
                            Aniq asab davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] whitespace-nowrap">
                            Integratsion stomatologiya mutaxassisi bevosita davolaydi
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* 장비와 혜택 Card */}
              <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
                <div className="flex flex-col gap-5 items-center justify-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                    Professional jihozlar
                  </h3>

                  {/* 트리오스5 구강 스캐너 - 강조 섹션 */}
                  <div className="flex flex-col gap-5 items-start w-full">
                    <div className="flex gap-[22px] items-center w-full">
                      <div className="bg-white border border-[#e9ebf1] rounded-2xl shrink-0 w-[110px] h-[110px] overflow-hidden relative">
                        <Image
                          src="/images/트리오스5.jpg"
                          alt="TRIOS 5 ogʼiz skaneri"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start flex-1">
                        <p className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#008095] w-full">
                          {"TRIOS 5 og\u02BCiz skaneri"}
                        </p>
                        <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-black w-full">
                          {"Eng zamonaviy raqamli skaner bilan"}<br />
                          {"noqulay qolip olmasdan aniq o\u02BClchash"}
                        </p>
                      </div>
                    </div>

                    {/* 특장점 리스트 */}
                    <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                      <div className="flex flex-col gap-3 items-start w-full">
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            {"Yopishqoq qolip materialisiz o\u02BCta tezkor 3D skan"}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Raqamli maʼlumotlar bilan yanada aniq protez tayyorlash
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            {"Kariyesni olib tashlagandan so\u02BCng darhol skanlab maxsus tayyorlash"}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 w-full">
                          <div className="shrink-0 w-5 h-5 mt-0.5">
                            <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                          </div>
                          <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                            Qulay davolash tajribasi, xatolikni minimallashtirish
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#008095]/10 to-[#00aabb]/10 p-4 rounded-xl w-full border border-[#008095]/20">
                      <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.6] tracking-[-0.28px] text-[#2d3643]">
                        {"TRIOS 5 — 3Shape kompaniyasining eng yangi og\u02BCiz skaneri bo\u02BClib, namlik mavjud muhitda ham tish shaklini aniq o\u02BClchay oladi. Inley, onley va toj davolashda ancha aniqroq va qulayroq davolash imkonini beradi."}
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
