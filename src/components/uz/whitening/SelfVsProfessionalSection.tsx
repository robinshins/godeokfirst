'use client';

import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 top-[149px] w-[375px] pointer-events-none">
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
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                Uyda oʼzi oqartirish va<br />
                stomatologiya mutaxassisi oqartirishning farqi
              </h2>
              <div className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                <p className="mb-0">
                  Stomatologiyada ishlatiladigan oqartirish vositasi <span className="text-[#008095]">dori-darmon sifatida tasniflanadi</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#008095]">Yuqori konsentratsiyali vodorod peroksidi</span> ishlatiladi
                </p>
                <p className="mb-0">
                  Milkka tegsa shikastlanishi mumkin, shuning uchun <span className="text-[#008095]">mutaxassis</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#008095]">toʼliq himoya choralaridan keyin muolaja</span> qilinadi, shuning uchun ancha xavfsiz
                </p>
                <p>va darhol samara koʼrish mumkin</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 w-full">
            {/* Card 1: Oʼz-oʼzi tish oqartirish */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      Oʼz-oʼzi tish oqartirish
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'Past konsentratsiyali vosita', desc: 'Oddiy dori bilan samara cheklangan' },
                      { title: 'Sekin samara', desc: 'Bir necha haftadan bir necha oygacha vaqt ketadi' },
                      { title: 'Xavfsizlik xavfi', desc: 'Notoʼgʼri ishlatilsa milkka shikast yetishi mumkin' },
                      { title: 'Notekis natija', desc: 'Bir tekis boʼlmagan oqartirish samarasi' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#FF1616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Stomatologiya mutaxassisi oqartirishi */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      Stomatologiya mutaxassisi oqartirishi
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'Yuqori konsentratsiyali vosita', desc: 'Mutaxassis vodorod peroksidi bilan kuchli samara' },
                      { title: 'Darhol samara', desc: '1-3 soat ichida aniq oʼzgarish' },
                      { title: 'Toʼliq xavfsizlik', desc: 'Milk himoyasi bilan shikastlanish oldini olish' },
                      { title: 'Tekis oqartirish', desc: 'Mutaxassis tomonidan aniq muolaja' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
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
