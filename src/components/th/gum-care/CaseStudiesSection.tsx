'use client';

import Image from 'next/image';

export default function CaseStudiesSection() {
  const cases = [
    {
      quote: [
        '"กระดูกละลายหนักมาก',
        'แต่หลังรักษาเหงือกกระดูกกลับมาเติบโต"'
      ],
      beforeImage: '/images/gum-treatment-cases/bone-recovery/step1-extraction-needed.jpg',
      afterImage: '/images/gum-treatment-cases/bone-recovery/step4-molar-saved.jpg',
      title: 'กระดูกละลายหนักจากโรคเหงือกรุนแรง',
      result: 'รักษาเหงือกและปลูกกระดูก กระดูกฟื้นตัวแล้วใส่รากเทียม'
    },
    {
      quote: [
        '"ดูแลสม่ำเสมอ',
        'อายุ 50 แล้วฟันทุกซี่ยังแข็งแรง"'
      ],
      beforeImage: '/images/gum-treatment-cases/regular-care/first-visit.jpg',
      afterImage: '/images/gum-treatment-cases/regular-care/under-management.jpg',
      title: 'หินปูนเยอะและเหงือกอักเสบรุนแรง',
      result: 'ขูดหินปูนและดูแลสม่ำเสมอ รักษาสุขภาพได้ดี'
    }
  ];

  return (
    <div className="bg-[#f3f6fb] w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-5 items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
                ผลการรักษาจริง
              </p>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#727582] text-sm text-center tracking-[-0.28px] w-full">
            รักษาเหงือกสม่ำเสมอ รักษาฟันแข็งแรงโดยไม่ต้องใส่รากเทียม
          </p>
        </div>

        {/* Case Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white border border-[#f3f6fb] box-border flex flex-col items-center justify-center overflow-hidden rounded-[24px] w-full">
              <div className="box-border flex flex-col gap-5 items-center justify-center px-4 py-6 w-full">
                <div className="font-['Pretendard_JP'] font-bold leading-[1.4] text-[22px] text-black text-center tracking-[-0.44px] w-full">
                  <p className="mb-0">{caseItem.quote[0]}</p>
                  <p>{caseItem.quote[1]}</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <div className="flex flex-col gap-3 items-start w-full">
                    {/* Before Image */}
                    <div className="relative w-full">
                      <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                        <Image
                          src={caseItem.beforeImage}
                          alt="ก่อนรักษา"
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Before badge */}
                      <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                        <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[13px] text-white tracking-[-0.26px]">
                          Before
                        </p>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative w-full">
                      <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                        <Image
                          src={caseItem.afterImage}
                          alt="หลังรักษา"
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* After badge with gradient background */}
                      <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                        <Image
                          src="/images/after-badge.svg"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute left-3 top-3">
                        <div className="px-2.5 py-[5px] rounded-[10px]">
                          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[13px] text-white tracking-[-0.26px]">
                            After
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-start leading-[1.4] text-center w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-base text-black tracking-[-0.32px] w-full">
                    {caseItem.title}
                  </p>
                  <p className="font-['Pretendard_JP'] font-semibold text-[15px] text-[#5d5f6d] tracking-[-0.3px] w-full">
                    {caseItem.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
