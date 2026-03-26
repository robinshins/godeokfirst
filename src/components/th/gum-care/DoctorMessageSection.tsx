export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* 상단 레이블 */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p
              className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              From the Doctor
            </p>
            <h2
              className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              แค่ดูแลเหงือกให้ดี<br />
              ฟันธรรมชาติใช้ได้ตลอดชีวิต
            </h2>
          </div>

          {/* 원장 메시지 카드 */}
          <div
            className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5"
          >
            {/* 인용 텍스트 */}
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                ทุกครั้งที่เจอผู้ป่วยมาทำรากฟันเทียม หัวใจก็หนักขึ้นทุกที<br /><br />
                ส่วนใหญ่ไม่ใช่เพราะฟันไม่ดี แต่เพราะ<span className="text-[#008095] font-bold">ไม่ได้ดูแลเหงือกให้ทันเวลา</span> จนต้องถอนฟันทิ้งในที่สุด
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                การรักษาเหงือกมักถูกผัดวันเพราะเจ็บและยุ่งยาก แต่แค่ขูดหินปูนปีละครั้ง มาพบแพทย์ทันทีเมื่อรู้สึกผิดปกติ ก็<span className="text-[#008095] font-bold">ยืดอายุฟันธรรมชาติได้อีก 20-30 ปี</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                รากฟันเทียมดีแค่ไหน ก็ไม่มีครอบฟันไหนดีเท่าฟันธรรมชาติ
              </p>
            </div>

            {/* 서명 */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  ทพ.ลี ดงฮยอน
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  ผู้เชี่ยวชาญทันตกรรมบูรณาการ · ทันตแพทย์หัวหน้า Godeok First Dental
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 수치 3가지 */}
          <div className="flex flex-col gap-3">
            {[
              { num: 'ปีละ 1', desc: 'แค่ขูดหินปูนก็ลดความเสี่ยงโรคหัวใจ 14%' },
              { num: '80%', desc: 'ผู้ใหญ่เป็นโรคเหงือก — ส่วนใหญ่ไม่มีอาการ' },
              { num: '3 เท่า', desc: 'ความเสี่ยงต้องทำรากฟันเทียมถ้าปล่อยปริทันต์อักเสบ' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4"
              >
                <p
                  className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.num}
                </p>
                <p
                  className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
