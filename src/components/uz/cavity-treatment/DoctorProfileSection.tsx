'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              Sug'urish?<br />
              Hali erta!
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              Konservativ mutaxassis oxirigacha saqlaydi
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Bae In Hye konservativ shifokor"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    Bae In Hye
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Bosh shifokor
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>Stomatolog va dorishunos ikki tomonlama litsenziya</p>
                  <p>Sogʻliqni saqlash vazirligi sertifikatlangan konservativ mutaxassis</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>Pusan Milliy Universiteti Stomatologiya shifoxonasi konservativ bo'limi rezidenturasini tugatgan</li>
                <li>Pusan Milliy Universiteti Stomatologiya fakulteti doktoranturasini tugatgan<br />(Konservativ stomatologiya)</li>
                <li>Stomatologiya fakulteti magistraturasini a'lo baho bilan tugatgan</li>
                <li>Koreys Konservativ Stomatologiya Jamiyati a'zosi</li>
                <li>Koreys Endodontiya Jamiyati a'zosi</li>
                <li>Koreys Yopishqoq Stomatologiya Jamiyati a'zosi</li>
                <li>Koreys Stomatologik Materiallar Jamiyati a'zosi</li>
                <li>Koreys Estetik Stomatologiya Jamiyati a'zosi</li>
                <li>Sobiq Good Smile klinikasi bosh shifokori</li>
                <li>Sobiq Plant klinikasi bosh shifokori</li>
              </ul>

              {/* Konservativ davolash tanishtirish */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    Tabiiy tishni saqlash uchun<br />maxsus konservativ davolash
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    Tabiiy tishni saqlash stomatologning vazifasi deb hisoblab, tabiiy tishni imkon qadar saqlab va himoya qilamiz.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* Davolash turlari */}
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Nerv davolash, qayta nerv davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Nozik texnika talab qiladigan nerv davolash konservativ stomatologiyaning mutaxassislik sohasidir.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Pulpa regeneratsiyasi
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Bolalar nerv davolashi deb ataluvchi pulpa regeneratsiyasi o'sishi to'xtab qolgan doimiy tish nervini qayta tiklaydi va tish ildizi o'sishni davom ettiradi.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Travma tishi davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Turli klinik tajribalar orqali travmadan keyin tish prognozini oldindan aniqlash va tez javob berishimiz mumkin.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Apikoektomiya
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Mikroskop yordamida avval sug'urilishi kerak bo'lgan tish ildizi yallig'lanishini olib tashlab saqlash davolasidir.
                          </p>
                        </div>
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
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Tish reimplantatsiyasi
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Tishni sug'urib, yallig'lanish sababini olib tashlab, qayta o'rnatish davolasidir.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bemor uchun maxsus maslahat */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        Konservativ mutaxassis sifatida barcha davolash bo'yicha boy tajribamga asoslanib, bemor bilan yetarli maslahat orqali eng zarur davolashni amalga oshiramiz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microscope Treatment Photo */}
          <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
            <div className="h-[280px] w-full relative overflow-hidden">
              <Image
                src="/images/microscope-treatment-photo.jpg"
                alt="Bae In Hye shifokor mikroskop davolash"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                Tabiiy tishni saqlash uchun tanlov
              </p>
              <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                Sug'urmasdan oxirigacha saqlash uchun<br />universitet shifoxonasi darajasidagi mikroskop bilan aniq davolaymiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
