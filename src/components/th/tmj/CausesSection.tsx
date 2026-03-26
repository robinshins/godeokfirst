'use client';

export default function TmjCausesSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Root Cause
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            โรคข้อต่อขากรรไกร<br />
            <span className="text-[#008095]">ต้องรู้สาเหตุ</span><br />
            จึงรักษาได้ถูกต้อง
          </h2>
        </div>

        {/* Causes */}
        <div className="flex flex-col gap-8">

          {/* Cause Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                tag: 'นิสัย',
                title: 'กัดฟัน · นอนกัดฟัน',
                desc: 'ความเครียดหรือการกัดฟันโดยไม่รู้ตัวขณะนอนหลับทำให้ข้อต่อขากรรไกรและกล้ามเนื้อรอบๆ รับภาระมากเกินไป ทำให้แผ่นข้อต่อเสียหาย',
                items: ['นอนกัดฟัน', 'นิสัยกัดฟันตอนกลางวัน', 'เท้าคาง เคี้ยวข้างเดียว'],
              },
              {
                tag: 'การสบฟัน',
                title: 'สบฟันผิดปกติ · ฟันหาย',
                desc: 'เมื่อฟันบนและล่างสบกันไม่สมดุล ข้อต่อขากรรไกรจะรับแรงไม่เท่ากัน ทำให้เกิดปัญหาในระยะยาว',
                items: ['ปล่อยฟันหายไม่ทำ', 'ครอบฟันไม่ดี', 'ต้องจัดฟัน'],
              },
              {
                tag: 'การบาดเจ็บ',
                title: 'แรงกระแทก · อ้าปากมากเกิน',
                desc: 'กรามบาดเจ็บจากอุบัติเหตุ หรืออ้าปากมากเกินไปจากการรักษาฟัน·หาว ทำให้ข้อต่อเสียหาย',
                items: ['อุบัติเหตุรถ · หกล้ม', 'หาวมากเกินไป', 'หลังทำฟันนาน'],
              },
              {
                tag: 'ความเครียด',
                title: 'ความตึงเครียด · สเตรส',
                desc: 'ความเครียดทำให้กล้ามเนื้อรอบกรามตึง และสร้างนิสัยกัดฟันโดยไม่รู้ตัว เป็นสาเหตุหลักของโรคข้อต่อขากรรไกร',
                items: ['ความเครียดเรื้อรัง', 'วิตกกังวล · ตึงเครียด', 'นอนไม่หลับ'],
              },
            ].map((cause, idx) => (
              <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                    {cause.tag}
                  </span>
                  <h3
                    className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {cause.title}
                  </h3>
                </div>
                <p
                  className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {cause.desc}
                </p>
                <div className="flex flex-col gap-2 border-t border-[#e9ebf1] pt-3">
                  {cause.items.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#008095] shrink-0 mt-[3px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="#008095" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p
                        className="text-[#008095] font-semibold text-[13px] leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
