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
              Шүдний эмчийн мэргэжлийн<br />
              хүчилтөрөгчийн цайруулалт
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Эмнэлгийн өндөр концентрацийн цайруулагчаар<br />
              аюулгүй, үр дүнтэй цайруулалт хийлгээрэй
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Osstem Beautis System */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Оссtem Бьютис (Beautis) цайруулах систем
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                Солонгосын №1 имплант компани Оссtemийн премиум мэргэжлийн цайруулах систем
              </p>

              {/* Beautis Image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Оссtem Бьютис цайруулагч"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light Device Image */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="Оссtem Бьютис гэрэлтүүлэгч төхөөрөмж"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Бьютис 15 цайруулагч:</span> 15% хүчилтөрөгч + тусгай идэвхжүүлэгчээр хурдан үр дүн
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Бьютис гэрэл:</span> Өндөр эрчимтэй LED гэрэл (150-220mW/㎠)-ээр цайруулах үр дүнг дээд зэргээр нэмэгдүүлнэ
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Мэдрэмж бууруулагч:</span> Хэрцгий мэдрэмжийг хамгийн бага болгосон аюулгүй жор
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment Principle */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Эмчилгээний зарчим
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Эмнэлгийн өндөр концентрацийн хүчилтөрөгч (15%) нь шүдний эмальд нэвтэрч, дотор талын толбо молекулуудыг исэлдүүлж задалдаг<br />
                  Энэ процессын үр дүнд толбо бодис өнгөгүй жижиг молекул болж хувирч, шүд байгалиараа цайдаг
                </p>
                {/* H2O2 Reaction Image */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Хүчилтөрөгчийн цайруулалтын зарчим"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Treatment Process */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Эмчилгээний явц
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'Буйл хамгаалах бодис түрхэх (буйлны гэмтлээс хамгаалах)',
                    'Өндөр концентрацийн цайруулагч түрхэх',
                    'LED гэрэл тусгах (15-20 минут)',
                    '2-3 удаа давтах (тухайн өдөр дуусна)',
                    'Флюор түрхэж дуусгах'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#006aff] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'Шүд зүлгэхгүй', desc: 'Эмальд гэмтэл үгүй' },
                { title: 'Шууд үр дүн', desc: 'Эмчилгээний дараа 2-8 шатлал цайрна' },
                { title: 'Байгалийн өнгө', desc: 'Шүдний анхны өнгийг тодруулна' }
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

          {/* Professional vs Self Whitening */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              Яагаад мэргэжлийн цайруулалт байх ёстой вэ?
            </h3>

            {/* Safety Verification */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Дэлхийн шүдний эмч нарын батлагдсан аюулгүй байдал
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                Цайруулалтын эмчилгээ нь дэлхийн шүдний эмч нарын хүлээн зөвшөөрсөн хамгийн аюулгүй шүдний эмчилгээ юм. Олон судалгаа болон клиникийн туршилтаар аюулгүй байдал нь батлагдсан бөгөөд шүдний эмчийн хяналтан дор явагддаг мэргэжлийн цайруулалт нь одоог хүртэл шүдэнд үзүүлэх гаж нөлөө бараг тэмдэглэгдээгүй байна.
              </p>
            </div>

            {/* Effectiveness Comparison */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">Мэргэжлийн цайруулалт</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">Өөрийн цайруулалт</p>
                </div>

                {/* Concentration */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">15% өндөр концентраци</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">KFDA зөвшөөрсөн эмнэлгийн</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% бага концентраци</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Үр дүн бага</p>
                </div>

                {/* Effect */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Нэг өдрийн дотор</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4 шатлал цайрна</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4+ долоо хоног</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Аажмаар бага үр дүн</p>
                </div>

                {/* Safety */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Урьдчилсан шалгалт</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ флюор түрхэх</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Өөрөө хийх</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Буйлны түлэгдлийн эрсдэл</p>
                </div>
              </div>
            </div>

            {/* Side Effect Management */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Системтэй гаж нөлөөний менежмент
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Эмчилгээний өмнөх шалгалт:</span> Хөндий, буйлны өвчин шалгасны дараа аюулгүй явуулна
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Буйлны хамгаалалт:</span> Эмнэлгийн хамгаалалтын бодисоор зөөлөн эдийн түлэгдлийг 100% сэргийлнэ
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Эмчилгээний дараах арчилгаа:</span> Флюор түрхэх·дахин эрдэсжүүлэх эмчилгээгээр хэрцгий мэдрэмжийг хамгийн бага болгоно
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Мэргэжилтний хяналт:</span> Бодит цагийн байдлыг шалгаж аюулгүй цайруулалт
                  </p>
                </div>
              </div>
            </div>

            {/* Clinical Experience */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Баялаг клиникийн туршлага
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">1,000 гаруй цайруулалтын туршлага</span>тай бөгөөд янз бүрийн шүдний байдалд тохирсон ноухау-тай. Толбожилтын түвшин, шүдний мэдрэмтгий байдал, одоо байгаа протезийг харгалзан хувь хүнд тохирсон цайруулалтын төлөвлөгөө гаргана.
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Түгээмэл асуултууд
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: 'Цайруулсны дараа шүд хэрцгий болох уу?',
                  answer: 'Түр зуур бага зэрэг хэрцгий мэдрэмж гарч болох боловч Бьютис цайруулагч нь мэдрэмж бууруулагчтай тул хэрцгий мэдрэмжийг хамгийн бага болгодог. Эмчилгээний дараах флюор түрхэх болон дахин эрдэсжүүлэх эмчилгээгээр мэдрэмтгий байдлыг улам бууруулж, ихэнх тохиолдолд хэдэн өдрийн дотор арилдаг. 10 гаруй жилийн клиникийн туршлагаар өвчтөн бүрийн шүдний байдалд тохируулан аюулгүй явуулдаг.'
                },
                {
                  question: 'Цайруулалтын үр дүн хэр удаан үргэлжлэх вэ?',
                  answer: 'Мэргэжлийн цайруулалтын үр дүн ерөнхийдөө 1-2 жил ба түүнээс дээш үргэлжилдэг. Хувь хүний хоолны зуршил, тамхи татдаг эсэх, амны хөндийн арчилгааны байдлаас хамаарч ялгаатай байх бөгөөд кофе, дарс, карри зэрэг толбо үлдээдэг хоол байнга хэрэглэх эсвэл тамхи татах үед үр дүнгийн хугацаа богиносох боломжтой. Тогтмол скейлинг болон зөв шүд угаах аргаар цайруулалтын үр дүнг илүү удаан хадгалж болно.'
                },
                {
                  question: 'Толбо дахин үүсвэл дахин хийлгэх боломжтой юу?',
                  answer: 'Тийм, дахин эмчилгээ хийлгэх боломжтой. Анхны цайруулалтын дараа 6 сар~1 жил орчим хугацаанд дахин эмчилгээ хийлгэхийг зөвлөж байгаа бөгөөд анхны эмчилгээнээс богино хугацаа, цөөн удаагаар үр дүн харж болно. Тогтмол touch-up эмчилгээгээр гэрэлтэй шүдийг хадгалж болох бөгөөд зардал нь анхны эмчилгээнээс хямд.'
                },
                {
                  question: 'Цайруулсны дараа анхаарах зүйл бий юу?',
                  answer: 'Цайруулалтын дараа 24-48 цагийн турш толбо үлдээдэг хоол (кофе, дарс, карри, кимчи, шоколад гэх мэт) болон тамхинаас зайлсхий. Энэ хугацаанд шүдний гадаргын нарийн нүхнүүд нээлттэй байдаг тул толбо амархан суудаг. Мөн хүйтэн эсвэл халуун хоол түр зуур хэрцгий мэдрэмж өгч болзошгүй тул болгоомжлоорой, флюортай шүдний оо ашиглахыг зөвлөж байна.'
                },
                {
                  question: 'Одоо байгаа протез (титэм, резин) цайруулагдах уу?',
                  answer: 'Үгүй, хиймэл протез цайруулагдахгүй. Хүчилтөрөгчийн цайруулагч нь зөвхөн байгалийн шүдний толбо бодисыг задалдаг тул титэм, резин, ламинат зэрэг протез нь анхны өнгөө хадгална. Тиймээс протезтэй бол цайруулсны дараа протез болон байгалийн шүдний өнгөний зөрүү гарч болзошгүй тул протез солихыг бодолцох хэрэгтэй болж магадгүй. Эмчилгээний өмнөх зөвлөгөөгөөр дэлгэрэнгүй заавар авч болно.'
                },
                {
                  question: 'Жирэмсэн эсвэл хөхүүл эхчүүд цайруулалт хийлгэж болох уу?',
                  answer: 'Жирэмсэн эсвэл хөхүүл үед цайруулалт хийлгэхийг зөвлөдөггүй. Хүчилтөрөгч нь ураг эсвэл эхийн сүүнд үзүүлэх нөлөөний талаар хангалттай судалгаа байхгүй тул аюулгүй байдлын үүднээс жирэмслэлт болон хөхүүл үе дууссаны дараа эмчилгээ хийлгэхийг зөвлөж байна.'
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
                      <span className="text-[#006aff] font-bold text-[16px] shrink-0">А.</span>
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
                        <span className="text-[#006aff] font-bold text-[16px] shrink-0">Х.</span>
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
