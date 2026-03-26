'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhiteningPeroxideSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Stomatologiya mutaxassisi oqartirish<br />
              Vodorod peroksidi oqartirish
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Tibbiy yuqori konsentratsiyali oqartirish vositasi bilan<br />
              xavfsiz va samarali oqartirishni tajriba qiling
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Osstem Beautis oqartirish vositasi */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Osstem Beautis oqartirish tizimi
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                Mamlakatning 1-raqamli implant kompaniyasi Osstem premium mutaxassis oqartirish tizimi
              </p>

              {/* Beautis oqartirish vositasi tasviri */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Osstem Beautis oqartirish vositasi"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light qurilmasi tasviri */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="Osstem Beautis Light qurilmasi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis 15 oqartirish vositasi:</span> 15% vodorod peroksidi + maxsus aktivlashtiruvchi bilan tez oqartirish samarasi
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> Yuqori intensivli LED nur (150-220mW/sm2) orqali oqartirish samarasini maksimallashtirish
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Sezuvchanlik oldini olish vositasi:</span> Shirilash alomatlarini kamaytiradigan xavfsiz tarkib
                  </p>
                </div>
              </div>
            </div>

            {/* muolaja 원리 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Muolaja tamoyili
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Tibbiy yuqori konsentratsiyali vodorod peroksidi (15%) tish emalini oʼtib dentin ichidagi ranglanish molekulalarini oksidlaydi va parchalaydi<br />
                  Bu jarayonda ranglanish moddalari rangsiz kichik molekulalarga aylanib tabiiy oq tishlar hosil boʼladi
                </p>
                {/* H2O2 reaksiya tasviri */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Vodorod peroksidi oqartirish tamoyili"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* muolaja 과정 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Muolaja jarayoni
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'Milk himoya vositasi surish (milk shikastlanishini oldini olish)',
                    'Yuqori konsentratsiyali oqartirish vositasi surish',
                    'LED nur berish (15-20 daqiqa)',
                    '2-3 marta takrorlash (bir kunda yakunlanadi)',
                    'Ftor surish bilan yakunlash'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#008095] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'Tish shikastlanishi NOLGA', desc: 'Emal shikastlanishi yoʼq' },
                { title: 'Darhol samara', desc: 'Muolajadan keyin darhol 2-8 bosqich yorqinlashadi' },
                { title: 'Tabiiy rang', desc: 'Asl tish rangini yorqinlashtirish' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Mutaxassis oqartirish vs Oʼz-oʼzi oqartirish */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
              Nima uchun mutaxassis oqartirish boʼlishi kerak?
            </h3>

            {/* Xavfsizlik tekshiruvi */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5v5c0 4.1 3.1 7.9 7 9 3.9-1.1 7-4.9 7-9V5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Butun dunyo tish shifokorlari tan olgan xavfsizlik
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                Oqartirish davolash butun dunyo tish shifokorlari tan olgan eng xavfsiz tish davolash usullaridan biridir. Koʼplab tadqiqot va klinik sinovlarda xavfsizligi isbotlangan, tish shifokori nazoratida oʼtkaziladigan mutaxassis oqartirishda hozirga qadar tishga nojo\'ya taʼsir deyarli qayd etilmagan.
              </p>
            </div>

            {/* Samara farqi */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#008095] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">Mutaxassis oqartirish</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">Oʼz-oʼzi oqartirish</p>
                </div>

                {/* Konsentratsiya */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% yuqori konsentratsiya</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Tibbiy nazorat tasdiqlagan</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% past konsentratsiya</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Samara juda kam</p>
                </div>

                {/* samara */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">Bir kunda</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4 bosqich yorqinlashadi</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4 haftadan ortiq</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Sekin-asta kam samara</p>
                </div>

                {/* Xavfsizlik */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">Oldindan ogʼiz tekshiruvi</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ Ftor surish muolajasi</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Oʼz-oʼzi muolaja</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Milk kuyish xavfi</p>
                </div>
              </div>
            </div>

            {/* Nojo\'ya ta\'sir kamaytirish */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Tizimli nojo\'ya ta\'sir parvarishi
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Muolajadan oldin tekshiruv:</span> Kariyes, milk kasalligini tekshirgandan keyin xavfsiz oʼtkaziladi
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Milk himoyasi:</span> Tibbiy himoya vositasi bilan yumshoq toʼqima kuyishini 100% oldini olish
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Muolajadan keyin parvarish:</span> Ftor surish va remineralizatsiya bilan shirilash alomatlarini kamaytirish
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Mutaxassis monitoring:</span> Real vaqt holatni tekshirish orqali xavfsiz oqartirish
                  </p>
                </div>
              </div>
            </div>

            {/* Klinik tajriba */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Boy klinik tajriba
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">1,000 tadan ortiq oqartirish muolajasi tajribasi</span> orqali turli tish holatlariga oid bilim va tajriba mavjud. Ranglanish darajasi, tish sezuvchanligi, mavjud protezlarni hisobga olgan shaxsiy oqartirish rejasi tuziladi.
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Koʼp beriladigan savollar
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: 'Oqartirishdan keyin tish shirilaydi mi?',
                  answer: 'Vaqtinchalik ozgina shirilash alomatlari boʼlishi mumkin, lekin Beautis oqartirish vositasi sezuvchanlik oldini olish moddasi saqlaydi va shirilash alomatlarini kamaytiradi. Muolajadan keyin ftor va remineralizatsiya bilan sezuvchanlik yanada kamayadi, koʼpchiligi bir necha kunda yoʼqoladi. 10 yildan ortiq klinik tajriba orqali har bir bemorning tish holatiga moslashtirib xavfsiz oʼtkaziladi.'
                },
                {
                  question: 'Oqartirish samarasi qancha davom etadi?',
                  answer: 'Mutaxassis oqartirish samarasi odatda 1-2 yildan ortiq davom etadi. Shaxsning ovqatlanish odati, chekish holati, ogʼiz parvarishi holatiga qarab farq qiladi, qahva, vino, karri kabi ranglovchi ovqatlarni tez-tez iste\'mol qilsa yoki cheksa samara davomiyligi qisqarishi mumkin. Muntazam tozalash va toʼgʼri tish yuvish bilan oqartirish samarasini uzoqroq saqlash mumkin.'
                },
                {
                  question: 'Ranglanish qaytsa qayta muolaja mumkinmi?',
                  answer: 'Ha, qayta muolaja mumkin. Birinchi oqartirishdan 6 oy~1 yil oʼtgandan keyin qayta muolaja tavsiya etiladi, birinchi muolajaga nisbatan qisqaroq vaqt va kamroq seans bilan natijaga erishish mumkin. Muntazam touch-up muolajasi bilan yorqin tishlarni davom ettirishingiz mumkin va xarajat ham birinchi muolajadan arzonroq.'
                },
                {
                  question: 'Oqartirishdan keyin ehtiyot choralari bormi?',
                  answer: 'Oqartirishdan keyin 24-48 soat davomida ranglovchi ovqatlar (qahva, vino, karri, kimchi, shokolad) va chekishdan saqlaning. Bu muddat tish yuzasidagi mayda teshiklar ochiq boʼlib ranglanish oson boʼladigan davrdir. Shuningdek sovuq yoki issiq ovqat vaqtinchalik shirilashga sabab boʼlishi mumkin, ehtiyot boʼling va ftor tarkibli tish pastasini ishlatish tavsiya etiladi.'
                },
                {
                  question: 'Mavjud protez (toj, rezin) ham oqartiriladi mi?',
                  answer: 'Yoʼq, sunʼiy protezlar oqartirilmaydi. Vodorod peroksidi oqartirish vositasi faqat tabiiy tishning ranglanish moddalarini parchalaydi, shuning uchun toj, rezin, laminat kabi protezlar asl rangini saqlaydi. Shuning uchun protez boʼlsa, oqartirishdan keyin protez va tabiiy tish rangi orasida farq paydo boʼlishi mumkin va protez almashtirishni koʼrib chiqish kerak. Muolajadan oldin maslahat orqali aniq yoʼriqnoma olishingiz mumkin.'
                },
                {
                  question: 'Homiladorlik yoki emizish davrida ham oqartirish mumkinmi?',
                  answer: 'Homiladorlik yoki emizish davrida oqartirish muolajasi tavsiya etilmaydi. Vodorod peroksidining homilador bolaga yoki ona sutigaa taʼsiri haqida yetarli tadqiqot yoʼq, shuning uchun xavfsizlik uchun homiladorlik va emizish tugagandan keyin muolaja olish tavsiya etiladi.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f3f6fb] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-5 flex items-start justify-between gap-3 text-left hover:bg-[#e9ebf1] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#008095] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#008095] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#008095] font-bold text-[16px] shrink-0">A.</span>
                        <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
