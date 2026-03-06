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
              Stomatolog mutaxassis oqartirish<br />
              Vodorod peroksid oqartirish
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Tibbiy yuqori konsentratsiyali oqartirgich bilan<br />
              xavfsiz va samarali oqartirishni his qiling
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Osstem Beautis oqartirgich */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Osstem Beautis oqartirish tizimi
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                Koreyadagi 1-raqamli implant kompaniyasi Osstemning premium professional oqartirish tizimi
              </p>

              {/* Beautis oqartirgich rasmi */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Osstem Beautis oqartirgich"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light qurilmasi rasmi */}
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
                    <span className="font-bold">Beautis 15 oqartirgich:</span> 15% vodorod peroksid + maxsus faollashtiruvchi modda bilan tez oqartirish effekti
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> Yuqori quvvatli LED nur (150-220mW/cm2) bilan oqartirish effektini oshiradi
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Sezgirlikni kamaytiruvchi modda:</span> Sezuvchanlik alomatlarini minimallashtiruvchi xavfsiz retsept
                  </p>
                </div>
              </div>
            </div>

            {/* Muolaja prinsipi */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Muolaja prinsipi
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Tibbiy yuqori konsentratsiyali vodorod peroksid (15%) tish emali orqali o'tib, dentin ichidagi bo'yalgan molekulalarni oksidlaydi va parchalaydi<br />
                  Bu jarayonda bo'yalgan moddalar rangsiz kichik molekulalarga aylanib, tabiiy ravishda oppoq tishlar hosil bo'ladi
                </p>
                {/* H2O2 reaksiya rasmi */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Vodorod peroksid oqartirish prinsipi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Muolaja jarayoni */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Muolaja jarayoni
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'Milk himoya qiluvchi gel surish (milk shikastlanishining oldini olish)',
                    'Yuqori konsentratsiyali oqartirgich surish',
                    'LED nur ta\'siri (15-20 daqiqa)',
                    '2-3 marta takrorlash (shu kuni tugallanadi)',
                    'Ftor qo\'llash bilan yakunlash'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#006aff] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Afzalliklar */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'Tish kesish NOLL', desc: 'Emal shikastlanishi yo\'q' },
                { title: 'Darhol natija', desc: 'Muolajadan so\'ng darhol 2-8 daraja yorqinlashadi' },
                { title: 'Tabiiy rang', desc: 'Asl tish rangini tabiiy yorqinlashtirish' }
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

          {/* Professional oqartirish vs O'z-o'zini oqartirish */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              Nima uchun professional oqartirish kerak?
            </h3>

            {/* Xavfsizlik tasdiqlash */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Butun dunyo stomatologlari tomonidan tan olingan xavfsizlik
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                Oqartirish davolash butun dunyo stomatologlarining eng xavfsiz tish davolash usuli sifatida tan olingan. Ko'plab tadqiqotlar va klinik tajribada xavfsizlik tasdiqlangan, stomatolog nazorati ostida o'tkaziladigan professional oqartirish hozirgacha tishga salbiy ta'sir qilgani qayd etilmagan.
              </p>
            </div>

            {/* Samaradorlik farqi */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Sarlavha */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">Professional oqartirish</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">O'z-o'zini oqartirish</p>
                </div>

                {/* Konsentratsiya */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">15% yuqori konsentratsiya</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Tibbiy nazorat ostida ruxsat etilgan</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% past konsentratsiya</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Kam samaradorlik</p>
                </div>

                {/* Effekt */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Bir kunda</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4 daraja yorqinlashadi</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4 haftadan ko'p</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Asta-sekin kam effekt</p>
                </div>

                {/* Xavfsizlik */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Oldindan og'iz tekshiruvi</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ Ftor qo'llash muolajasi</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">O'z-o'zini muolaja</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Milk kuyishi xavfi</p>
                </div>
              </div>
            </div>

            {/* Nojo'ya ta'sirlarni minimallashtirish */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Tizimli nojo'ya ta'sirlarni boshqarish
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Muolajadan oldin tekshiruv:</span> Chuqurcha, milk kasalliklarini tekshirgandan so'ng xavfsiz o'tkaziladi
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Milk himoyasi:</span> Tibbiy himoya geli bilan yumshoq to'qimalar kuyishining 100% oldini olish
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Muolajadan keyingi parvarish:</span> Ftor qo'llash va qayta mineralizatsiya muolajasi bilan sezuvchanlikni minimallashtirish
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Mutaxassis nazorati:</span> Real vaqtda holatni tekshirish orqali xavfsiz oqartirish
                  </p>
                </div>
              </div>
            </div>

            {/* Klinik tajriba */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Boy klinik tajriba
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">1000 dan ortiq oqartirish muolajasi tajribasi</span> bilan turli tish holatlariga oid nou-xauga egamiz. Bo'yalish darajasi, tish sezgirligi, mavjud protezlarni hisobga olgan holda individual oqartirish rejasi tuzamiz.
                </p>
              </div>
            </div>
          </div>

          {/* Savol-javob bo'limi */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Ko'p beriladigan savollar
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: 'Oqartirishdan keyin tish sezuvchan bo\'lmaydimi?',
                  answer: 'Vaqtincha ozgina sezuvchanlik bo\'lishi mumkin, lekin Beautis oqartirgich tarkibida sezuvchanlikni kamaytiradigan modda bor, shuning uchun sezuvchanlik minimal. Muolajadan so\'ng ftor qo\'llash va qayta mineralizatsiya muolajasi bilan sezuvchanlikni yanada kamaytiramiz, ko\'pchilik bir necha kun ichida tuzaladi. 10 yildan ortiq klinik tajribamiz bilan har bir bemorning tish holatiga mos xavfsiz muolaja o\'tkazamiz.'
                },
                {
                  question: 'Oqartirish effekti qancha davom etadi?',
                  answer: 'Professional oqartirish effekti odatda 1-2 yil yoki undan ko\'p davom etadi. Shaxsning ovqatlanish odatlari, chekish holati va og\'iz parvarishi holatiga qarab farq qiladi; kofe, vino, karri kabi bo\'yovchi ovqatlarni tez-tez iste\'mol qilsangiz yoki cheksangiz, effekt davomiyligi qisqarishi mumkin. Muntazam tishni tozalash va to\'g\'ri tish yuvish bilan oqartirish effektini uzoqroq saqlab qolishingiz mumkin.'
                },
                {
                  question: 'Bo\'yalish qayta paydo bo\'lsa, qayta muolaja qilish mumkinmi?',
                  answer: 'Ha, qayta muolaja qilish mumkin. Dastlabki oqartirishdan 6 oy-1 yil o\'tgandan so\'ng qayta muolaja tavsiya etiladi, dastlabki muolajaga qaraganda qisqaroq vaqt va kam marta ham effektli bo\'ladi. Muntazam touch-up muolajasi bilan yorqin tishlarni davom ettirishingiz mumkin, narxi ham dastlabki muolajadan arzonroq.'
                },
                {
                  question: 'Oqartirishdan keyin nimaga e\'tibor berish kerak?',
                  answer: 'Oqartirishdan keyin 24-48 soat davomida bo\'yovchi ovqatlar (kofe, vino, karri, kimchi, shokolad va h.k.) va sigaretdan saqlaning. Bu davrda tish yuzasidagi mayda teshiklar ochiq bo\'lib, bo\'yalish osonroq bo\'ladi. Sovuq yoki issiq ovqatlar vaqtincha sezuvchanlikni keltirib chiqarishi mumkin, shuning uchun ehtiyot bo\'ling va ftor tarkibli tish pastasidan foydalanish tavsiya etiladi.'
                },
                {
                  question: 'Mavjud protezlar (toj, rezin) ham oqaradimi?',
                  answer: 'Yo\'q, sun\'iy protezlar oqarmaydi. Vodorod peroksid oqartirgich faqat tabiiy tishning bo\'yalgan moddalarini parchalaydi, shuning uchun toj, rezin, laminat kabi protezlar asl rangini saqlab qoladi. Shuning uchun protezingiz bo\'lsa, oqartirishdan so\'ng protez va tabiiy tish rangi farqi paydo bo\'lishi mumkin, protezni almashtirishni ko\'rib chiqishingiz kerak bo\'lishi mumkin. Muolajadan oldin maslahat orqali aniq ma\'lumot olishingiz mumkin.'
                },
                {
                  question: 'Homiladorlik yoki emizish davrida oqartirish mumkinmi?',
                  answer: 'Homiladorlik yoki emizish davrida oqartirish muolajasi tavsiya etilmaydi. Vodorod peroksidning homila yoki ona sutigiga ta\'siri haqida yetarli tadqiqotlar yo\'q, shuning uchun xavfsizlik uchun homiladorlik va emizish tugagandan so\'ng muolaja qilish tavsiya etiladi.'
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
                      <span className="text-[#006aff] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#006aff] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#006aff] font-bold text-[16px] shrink-0">A.</span>
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
