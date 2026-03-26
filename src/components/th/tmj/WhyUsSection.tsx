'use client';

export default function TmjWhyUsSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Why Us
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            ทำไมต้องรักษา<br />
            ข้อต่อขากรรไกรที่<br />
            <span className="text-[#008095]">Godeok First Dental</span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="flex flex-col gap-5">
          {[
            {
              num: '01',
              title: 'ผู้เชี่ยวชาญทันตกรรมบูรณาการรักษาโดยตรง',
              desc: 'ข้อต่อขากรรไกรเป็นโรคซับซ้อนที่เกี่ยวข้องกับการสบฟัน ครอบฟัน ปริทันต์ ผู้เชี่ยวชาญทันตกรรมบูรณาการมองภาพรวมจึงวินิจฉัยสาเหตุได้แม่นยำ',
            },
            {
              num: '02',
              title: 'เน้นรักษาแบบอนุรักษ์ ไม่ผ่าตัด',
              desc: 'โรคข้อต่อขากรรไกรส่วนใหญ่รักษาได้โดยไม่ต้องผ่าตัด เราเน้นยา กายภาพบำบัด สปลินท์ เพื่อลดภาระผู้ป่วยให้น้อยที่สุด',
            },
            {
              num: '03',
              title: 'ทำสปลินท์เฉพาะบุคคลอย่างแม่นยำ',
              desc: 'ทำสปลินท์เฉพาะบุคคลจากการวิเคราะห์ดิจิทัล ปรับการสบฟันเป็นระยะเพื่อผลการรักษาสูงสุด',
            },
            {
              num: '04',
              title: 'แก้ไขจนถึงต้นเหตุ',
              desc: 'ไม่ใช่แค่ลดอาการปวด แต่แก้สาเหตุต้นตอเช่น สบฟันผิดปกติ ฟันหาย นิสัยไม่ดี เพื่อป้องกันไม่ให้กลับมาเป็นซ้ำ',
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-center gap-3">
                <span
                  className="text-[#008095] font-bold text-[28px] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.num}
                </span>
                <h3
                  className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.title}
                </h3>
              </div>
              <p
                className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-center">
          <p
            className="text-[22px] font-bold text-white leading-[1.4]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            ปวดข้อต่อขากรรไกร?<br />
            <span className="text-[#4DC8D8]">อย่าทน มาปรึกษาเลย</span>
          </p>
          <p className="text-white/50 text-[14px] mt-2">
            รักษาเร็วได้ผลดีและประหยัดที่สุด
          </p>
        </div>

      </div>
    </div>
  );
}
