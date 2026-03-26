'use client';

const risks = [
  {
    tag: 'หัวใจ',
    title: 'เสี่ยงโรคหัวใจเพิ่ม 3 เท่า↑',
    desc: 'แบคทีเรียปริทันต์ในเหงือกแทรกซึมเข้าหลอดเลือด ทำให้ผนังหลอดเลือดอักเสบและเร่งการเกิดลิ่มเลือด งานวิจัยพบว่าโรคเหงือกเพิ่มความเสี่ยงหัวใจวายสูงสุด 2.8 เท่า และโรคหลอดเลือดสมองเพิ่ม 16% แต่ขูดหินปูนสม่ำเสมอลดความเสี่ยงโรคหัวใจ 10-14%',
    stats: ['เสี่ยงหัวใจวายเพิ่ม 2.8 เท่า', 'เสี่ยงโรคหลอดเลือดสมองลด 16% (ขูดหินปูนปีละครั้ง)', 'แนะนำตรวจช่องปากควบคู่ตรวจหัวใจ'],
    source: 'Bundang Seoul National Univ. Hospital 2024 · AHA 2020',
  },
  {
    tag: 'เบาหวาน',
    title: 'ภาวะแทรกซ้อนเบาหวานเร็วขึ้น 2 เท่า↑',
    desc: 'เหงือกอักเสบเพิ่มภาวะดื้ออินซูลินทำให้ควบคุมน้ำตาลยาก เมื่อเป็นปริทันต์อักเสบ HbA1c ควบคุมยากขึ้น งานวิจัยพบว่ารักษาปริทันต์อย่างเดียว HbA1c ลด 0.4%',
    stats: ['เสี่ยงควบคุมน้ำตาลไม่ได้เพิ่ม 6 เท่า', 'HbA1c ลด 0.4% (เมื่อรักษาปริทันต์)', 'ภาวะแทรกซ้อนเบาหวานเร็วขึ้น 2 เท่า'],
    source: 'Catholic Univ. Eunpyeong St. Mary Hospital 2023',
  },
  {
    tag: 'สมอง',
    title: 'เสี่ยงสมองเสื่อมเพิ่ม 70%↑',
    desc: 'แบคทีเรีย Porphyromonas gingivalis ผ่านกำแพงเลือด-สมองเข้าสู่สมอง เร่งการสะสมเบตา-อะไมลอยด์ พบสารพิษของแบคทีเรียนี้ในเนื้อสมองผู้ป่วยอัลไซเมอร์ ปล่อยโรคเหงือกไว้ 10 ปีขึ้นไปเพิ่มความเสี่ยงสมองเสื่อมอย่างมีนัยสำคัญ',
    stats: ['พบสารพิษปริทันต์ในผู้ป่วยอัลไซเมอร์ 40%', 'ปล่อย 10 ปี+ เสี่ยงสมองเสื่อม 70%↑', 'ดูแลเหงือกเร็วช่วยปกป้องสุขภาพสมอง'],
    source: 'Harvard Dr. Kantarci 2024 · J. of Neuroinflammation',
  },
  {
    tag: 'ตั้งครรภ์',
    title: 'เสี่ยงคลอดก่อนกำหนดเพิ่ม 7 เท่า↑',
    desc: 'พรอสตาแกลนดินจากเหงือกอักเสบส่งผ่านเลือดไปรก ทำให้เจ็บครรภ์ก่อนกำหนด ควรตรวจเหงือกก่อนวางแผนตั้งครรภ์หรือช่วงต้นตั้งครรภ์',
    stats: ['เสี่ยงคลอดก่อนกำหนดเพิ่ม 7 เท่า', 'เด็กน้ำหนักน้อย(ต่ำกว่า 2kg) เพิ่ม 2 เท่า', 'รักษาเหงือกขณะตั้งครรภ์ใช้ประกันได้'],
    source: 'American · European Academy of Periodontology',
  },
];

export default function RiskSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Health Warning
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            โรคเหงือกไม่ได้อยู่<br />แค่ในปากเท่านั้น
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            แบคทีเรียในเหงือกแพร่กระจายไปทั่วร่างกายผ่านหลอดเลือด<br />ก่อให้เกิดโรคร้ายแรงกว่าที่คิด
          </p>
        </div>

        {/* Risk Cards */}
        <div className="flex flex-col gap-5">
          {risks.map((risk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col gap-5">
              {/* Tag + Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider w-fit">
                  {risk.tag}
                </span>
                <h3
                  className="font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {risk.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {risk.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {risk.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#4DC8D8] shrink-0 mt-[3px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#4DC8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className="text-[#4DC8D8] font-semibold text-[13px] leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Source */}
              <p className="text-white/30 text-[11px]">Source: {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            แค่ขูดหินปูนปีละครั้ง<br />ลดความเสี่ยงโรคหัวใจ 14%
          </p>
          <p className="text-white/40 text-[13px]">
            ขูดหินปูนใช้ประกันสุขภาพได้ — อย่าลืมทำปีละครั้ง
          </p>
        </div>

      </div>
    </div>
  );
}
