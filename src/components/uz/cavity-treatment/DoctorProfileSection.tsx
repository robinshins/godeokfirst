'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4 bg-[#21314E]">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              Kompleks stomatologiya mutaxassisi<br />shaxsan davolaydi
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[20px] leading-[1.6] tracking-[-0.4px] w-full text-[#4DC8D8]">
              Godeok First Dental bosh shifokor
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Dr. Lee Dong-hyun"
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
                    Li Donghyun
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Bosh shifokor
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>Sogʼliqni saqlash vazirligi tomonidan sertifikatlangan Kompleks stomatologiya mutaxassisi</p>
                  <p>Choson universiteti stomatologiya shifoxonasi tashqi professori</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>Choson universiteti stomatologiya fakultetini tamomlagan</li>
                <li>Choson universiteti stomatologiya shifoxonasi Kompleks stomatologiya boʼlimi rezidenturasini tamomlagan</li>
                <li>Koreya Kompleks Stomatologiya Jamiyati toʼliq aʼzosi</li>
                <li>Koreya Ogʼiz-Jag-Yuz Implant Jamiyati toʼliq aʼzosi</li>
                <li>Raqamli navigatsion implant mutaxassisi</li>
                <li>Implant, protez, nerv davolash — bir joyda toʼliq xizmat</li>
              </ul>

              {/* 보존과 전문 진료 소개 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    Tabiiy tishlarni saqlash uchun<br />maxsus konservativ davolash
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    Tabiiy tishlarni saqlash stomatolog shifokornig vazifasi deb bilib, tabiiy tishlarni iloji boricha saqlash va himoya qilish.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* 진료 항목들 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
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
                            Nozik jarrohlik talab qilinadigan nerv davolash stomatologiya konservatsiya boʼlimining mutaxassislik sohasi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
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
                            Bolalar nerv davolashi deb ham ataladigan pulpa regeneratsiyasi oʼsishi toʼxtab qolgan doimiy tish nervini qayta tiklaydi va tish ildizini oʼsishda davom ettirishga yordam beradi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Travma tish davolash
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Turli klinik tajriba orqali travmadan keyingi tish prognozini oldindan tashxislash va tezkor javob berish.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
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
                            Ilgari sugʼurib olish kerak boʼlgan tish ildizidagi yalligʼlanishni olib tashlab saqlash uchun yuqori darajadagi davolash.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Tishni qayta oʼtkazish
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Tishni sugʼurib olgandan soʼng yalligʼlanish sababini olib tashlab, qayta oʼrniga oʼtkazish davolashidir.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 환자 맞춤 상담 강조 */}
                    <div className="bg-[#008095]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#008095]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 Konservativ stomatologiya mutaxassisi sifatida barcha davolash boʼyicha boy tajribaga asoslanib, bemor bilan yetarli maslahat orqali eng zarur davolashni amalga oshiramiz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 트리오스5 + 전문의 강조 카드 */}
          <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[20px] p-6 w-full">
            <p className="font-['Pretendard_JP'] text-[12px] font-bold text-white/60 uppercase tracking-[2px] mb-3">WHY GODUK FIRST</p>
            <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] text-white mb-4">
              Kompleks stomatologiya mutaxassisi<br />kariyesdan nerv davolashgacha shaxsan koʼradi
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Choson universiteti stomatologiya shifoxonasi tashqi professori',
                'Trios5 ogʼiz skaneri — aniq raqamli qoʼlga kiritish',
                'Kariyes, inley, nerv davolash boʼyicha boy klinik tajriba',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#4DC8D8] text-[13px]">✓</span>
                  <span className="text-white/90 text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
