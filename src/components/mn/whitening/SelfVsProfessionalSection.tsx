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
                Гэртээ хийх өөрийн цайруулалт ба<br />
                шүдний эмчийн мэргэжлийн цайруулалтын ялгаа
              </h2>
              <div className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                <p className="mb-0">
                  Шүдний эмнэлэгт хэрэглэдэг цайруулагч нь <span className="text-[#006aff]">эмчилгээний бодис</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#006aff]">өндөр концентрацийн хүчилтөрөгч</span> ашигладаг
                </p>
                <p className="mb-0">
                  Буйланд хүрвэл гэмтэж болзошгүй тул <span className="text-[#006aff]">мэргэжилтэн</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#006aff]">төгс хамгаалалт хийсний дараа эмчилнэ</span> тул илүү аюулгүй
                </p>
                <p>шууд үр дүн харж болно</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 w-full">
            {/* Card 1: Self Whitening */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      Өөрийн шүд цайруулалт
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'Бага концентрацийн цайруулагч', desc: 'Энгийн эм тул үр дүн хязгаарлагдмал' },
                      { title: 'Удаан үр дүн', desc: 'Хэдэн долоо хоногоос хэдэн сар шаардлагатай' },
                      { title: 'Аюулгүй байдлын эрсдэл', desc: 'Буруу хэрэглэвэл буйл гэмтэж болзошгүй' },
                      { title: 'Жигд бус үр дүн', desc: 'Тэгш бус цайруулалтын үр дүн' }
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

            {/* Card 2: Professional Whitening */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      Шүдний эмчийн мэргэжлийн цайруулалт
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'Өндөр концентрацийн эмнэлгийн бодис', desc: 'Мэргэжлийн хүчилтөрөгчээр хүчтэй үр дүн' },
                      { title: 'Шууд үр дүн', desc: '1-3 цагийн дотор тодорхой өөрчлөлт' },
                      { title: 'Төгс аюулгүй байдал', desc: 'Буйлны хамгаалалтын арга хэмжээгээр гэмтэл сэргийлнэ' },
                      { title: 'Жигд цайруулалт', desc: 'Мэргэжилтний нарийн эмчилгээ' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-blue.svg"
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
