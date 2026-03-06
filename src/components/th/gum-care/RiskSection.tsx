'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: 'เสี่ยงโรคหลอดเลือดหัวใจ 3 เท่า',
      titleHighlight: '3 เท่า',
      process: [
        'เชื้อโรคเหงือกเข้าสู่หลอดเลือด',
        'เกิดการอักเสบที่ผนังหลอดเลือด',
        'กระตุ้นการเกิดลิ่มเลือด'
      ],
      details: [
        { text: 'โรคหัวใจลดลง 10%', note: 'เมื่อตรวจสุขภาพช่องปาก' },
        { text: 'เสี่ยงกล้ามเนื้อหัวใจตายเฉียบพลัน 2.8 เท่า' },
        { text: 'เสี่ยงโรคหลอดเลือดสมองลดลง 16% (ขูดหินปูนปีละครั้ง)' }
      ],
      source: 'ทีมวิจัยโรงพยาบาลมหาวิทยาลัยโซลบุนดัง 2024, AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: 'เบาหวานแย่ลง ภาวะแทรกซ้อนเพิ่ม',
      titleHighlight: 'แย่ลง',
      titleHighlight2: 'เพิ่ม',
      process: [
        'เหงือกอักเสบ',
        'ภาวะดื้ออินซูลินเพิ่ม',
        'ควบคุมน้ำตาลไม่ได้'
      ],
      details: [
        { text: 'HbA1c ลดลง 0.4% (เมื่อรักษาเหงือก)' },
        { text: 'ภาวะแทรกซ้อนเบาหวานเร็วขึ้น 2 เท่า' },
        { text: 'ควบคุมน้ำตาลล้มเหลวเพิ่ม 6 เท่าเมื่อมีโรคเหงือก' }
      ],
      source: 'วิจัยโรงพยาบาลอึนพยองซองโม 2023, สมาคมเบาหวานเกาหลี'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: 'เสี่ยงสมองเสื่อม 70%',
      titleHighlight: '70%',
      process: [
        'เชื้อโรคเหงือกผ่านด่านเลือด-สมอง',
        'สมองอักเสบ',
        'สะสมเบต้าอะไมลอยด์'
      ],
      details: [
        { text: 'พบเชื้อโรคเหงือกในผู้ป่วยอัลไซเมอร์ 40%' },
        { text: 'ปล่อยทิ้งไว้นานกว่า 10 ปี เสี่ยงสมองเสื่อมเพิ่มขึ้นมาก' }
      ],
      source: 'ทีมวิจัย ดร.คานทาร์ซี ฮาร์วาร์ด 2024, Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: 'เสี่ยงภาวะแทรกซ้อนครรภ์ 7 เท่า',
      titleHighlight: '7 เท่า',
      process: [
        'สารอักเสบผ่านรก',
        'กระตุ้นเจ็บครรภ์ก่อนกำหนด',
        'คลอดก่อนกำหนดและทารกน้ำหนักน้อย'
      ],
      details: [
        { text: 'เสี่ยงคลอดก่อนกำหนดเพิ่ม 7 เท่า' },
        { text: 'คลอดทารกน้ำหนักต่ำ (น้อยกว่า 2 กก.) เพิ่ม 2 เท่า' },
        { text: 'อาจส่งผลต่อพัฒนาการและการเรียนรู้ของเด็กในอนาคต' }
      ],
      source: 'สมาคมโรคเหงือกอเมริกาและยุโรป'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[26px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
              <p className="font-['Nanum_Myeongjo'] font-extrabold leading-[0.2] text-[60px] tracking-[-3.6px] w-full">
                &ldquo;
              </p>
              <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
                <p className="mb-0">เมื่อการอักเสบของเหงือก</p>
                <p>ลุกลามทั่วร่างกาย...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            หากปล่อยไว้ มีความเสี่ยงสูงที่จะลุกลามเป็นโรคต่างๆ
          </p>
        </div>

        {/* Divider */}
        <div className="bg-white h-10 opacity-50 shrink-0 w-0.5" />

        {/* Risk Cards */}
        <div className="flex flex-col gap-4 items-start w-full">
          {risks.map((risk, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* White Card */}
              <div className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-10 items-center justify-center p-6 rounded-t-[24px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-center w-full">
                  <div className="relative shrink-0 w-[100px] h-[100px]">
                    <Image
                      src={risk.icon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[28px] text-black text-center tracking-[-0.56px] w-full">
                      {risk.title.split(risk.titleHighlight)[0]}
                      <span className="text-[#ff1616]">{risk.titleHighlight}</span>
                      {risk.titleHighlight2 && (
                        <>
                          {risk.title.split(risk.titleHighlight)[1].split(risk.titleHighlight2)[0]}
                          <span className="text-[#ff1616]">{risk.titleHighlight2}</span>
                        </>
                      )}
                    </p>
                    <div className="flex flex-col gap-1 items-center w-full">
                      {risk.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex flex-col items-center w-full">
                          <p className="font-['Pretendard_JP'] font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full">
                            {step}
                          </p>
                          {stepIndex < risk.process.length - 1 && (
                            <div className="relative shrink-0 w-6 h-6">
                              <Image
                                src="/icons/arrow-big-down-filled.svg"
                                alt=""
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue Card */}
              <div className="bg-[#006aff] box-border flex flex-col gap-2 items-center justify-center p-6 rounded-b-[24px] shadow-[0px_32px_64px_-12px_rgba(45,54,67,0.08)] text-white w-full">
                <div className="flex flex-col gap-1 items-start w-full">
                  {risk.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex gap-1.5 items-center w-full text-nowrap whitespace-pre">
                      <p className="font-['Pretendard_JP'] font-bold leading-[1.5] text-lg tracking-[-0.36px]">
                        {detail.text}
                      </p>
                      {'note' in detail && detail.note && (
                        <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-60 text-base tracking-[-0.32px]">
                          {detail.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-['Pretendard_JP'] font-normal leading-[1.4] opacity-60 text-xs tracking-[-0.24px] w-full">
                  {risk.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
