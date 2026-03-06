'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    {
      title: 'Хурц үрэвсэл',
      description: 'Хүчтэй өвдөлт, нүүр хавдах'
    },
    {
      title: 'Хажуугийн шүд цоорох',
      description: 'Хажуу талын шүд гэмтэх'
    },
    {
      title: 'Эрүүний үе мөчний эмгэг',
      description: 'Архаг толгой өвдөлт, эрүү өвдөх'
    },
    {
      title: 'Шүдний тэгш бус байдал',
      description: 'Засал эмчилгээ хэрэгтэй'
    }
  ];

  const benefits = [
    {
      title: 'Хурдан эдгэрэлт',
      description: 'Залуу байх тусам эдгэрэлт хурдан'
    },
    {
      title: 'Хүндрэлээс урьдчилан сэргийлэх',
      description: 'Үрэвсэлгүй үед аюулгүй'
    },
    {
      title: 'Зардал хэмнэх',
      description: 'Асуудал гарахаас өмнө эмчлэх'
    },
    {
      title: 'Тав тухтай мэс засал',
      description: 'Үрэвсэлгүй үед мэдээ алдуулалт сайн'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0b1727] from-[0.541%] to-white w-full py-[60px] px-4 relative">
      {/* Background gradient ellipse */}
      <div className="absolute left-1/2 top-[217.35px] -translate-x-1/2 w-[480px] h-[711px] pointer-events-none">
        <Image
          src="/images/ellipse-gradient.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white text-center">
                Яагаад одоо авах хэрэгтэй вэ?
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Problems Card */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <div className="flex gap-2 items-center w-[264px]">
                  <p className="flex-1 font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                    Агшин зуурын шүд үл тоомсорловол
                  </p>
                </div>

                <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0">
                        <Image
                          src="/icons/x-icon.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">
                          {problem.title}
                        </p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <div className="flex gap-2 items-center w-[264px]">
                  <p className="flex-1 font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                    Эрт авалтын давуу тал
                  </p>
                </div>

                <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0">
                        <Image
                          src="/icons/check-icon.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">
                          {benefit.title}
                        </p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#006aff] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] whitespace-pre-line">
                {'Тэсэж тэсэж яаралтай\nтусламжид очдог хүмүүс олон'}
              </h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80 whitespace-pre-line">
                {'Үрэвсэл хүндэрч үүрээр яаралтай тусламжид\nочдог өвчтөнүүд долоо хоног бүр байдаг\nУрьдчилж авбал энэ зовлонгоос сэргийлж болно'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
