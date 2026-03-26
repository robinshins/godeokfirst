'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const benefits = [
    {
      title: 'ผู้ที่ต้องการดูแลรากฟันเทียม',
      desc: 'วิเคราะห์แบคทีเรียอันตรายเพื่อป้องกันการอักเสบรอบรากฟันเทียม'
    },
    {
      title: 'ผู้ที่มีโรคเหงือก · กลิ่นปากรุนแรง',
      desc: 'วิเคราะห์แบคทีเรียก่อโรคปริทันต์อย่างละเอียดและดูแลเฉพาะบุคคล'
    },
    {
      title: 'ผู้ที่ห่วงใยสุขภาพร่างกายโดยรวม',
      desc: 'ตรวจสุขภาพร่างกายผ่านการวิเคราะห์แกนเชื่อมต่อช่องปาก-ลำไส้'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="Godeok First Dental"
              width={168}
              height={24}
              className="w-full h-full brightness-0 invert"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              SCIENTIFIC AFTERCARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              สิ่งสำคัญกว่าการฝังคือ<br />
              การดูแลหลังการรักษา
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              &quot;เราจะรับผิดชอบจนจบเพื่อให้คุณใช้ได้ตลอดชีวิต&quot;<br />
              <span className="text-white/70 text-[14px]">คลินิกทันตกรรมแห่งแรกในเกาหลีที่นำ NGS มาตรวจจุลินทรีย์</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">

          {/* 마크로젠 협력 배지 */}
          <div className="w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
              <p className="text-[#6eb7bc] text-[13px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                🧬 ร่วมมือกับ <span className="text-white">Macrogen</span> บริษัทวิเคราะห์จีโนมระดับโลก
              </p>
            </div>
          </div>

          {/* 미생물 검사 이미지 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[380px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/macrogen-microbiome-test.png"
                alt="การตรวจจุลินทรีย์ NGS โดย Macrogen"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-gradient-to-br from-[#008fd2] to-[#006aaa] box-border flex flex-col gap-3 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[20px] text-white tracking-[-0.4px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                การวิเคราะห์ลำดับเบสรุ่นใหม่ NGS
              </p>
              <p className="font-medium leading-[1.6] not-italic text-white/90 text-[14px] tracking-[-0.28px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                วิเคราะห์จุลินทรีย์กว่า 700 ชนิดในช่องปากอย่างละเอียด<br />
                ระบุแบคทีเรียก่อฟันผุและโรคปริทันต์ล่วงหน้า
              </p>
            </div>
          </div>

          {/* 왜 치과에서 미생물 검사를? */}
          <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              ทำไมต้องตรวจจุลินทรีย์ที่คลินิกทันตกรรม?
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              ช่องปากคือ<span className="text-[#6eb7bc] font-bold">&quot;ประตูสู่สุขภาพร่างกาย&quot;</span> แบคทีเรียอันตรายในช่องปากไม่ได้อยู่แค่ในปาก แต่แพร่กระจายไปทั่วร่างกายผ่านกระแสเลือด อาจส่งผลต่อ<span className="text-white font-bold">โรคหัวใจและหลอดเลือด เบาหวาน สมองเสื่อม</span> และอื่นๆ
            </p>
          </div>

          {/* 검사 결과지 이미지 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[250px] relative shrink-0 w-full">
              <Image
                src="/images_official/macrogen-test-result.png"
                alt="ผลตรวจจุลินทรีย์"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-center p-4 relative shrink-0 w-full">
              <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                ให้รายงานวิเคราะห์เฉพาะบุคคล
              </p>
              <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                แจ้งผลละเอียดภายใน 2-3 สัปดาห์หลังตรวจ
              </p>
            </div>
          </div>

          {/* 전신 건강 영향 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[340px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/microbiome-health-impact.png"
                alt="ผลกระทบของจุลินทรีย์ต่อสุขภาพร่างกาย"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                จุลินทรีย์ในช่องปาก → เชื่อมต่อสุขภาพร่างกาย
              </p>
              <p className="text-[#a0c4d4] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                แบคทีเรียอันตรายในช่องปากแพร่กระจายผ่านหลอดเลือดไปทั่วร่างกาย<br />
                ส่งผลต่อโรคต่างๆ ทั่วร่างกาย
              </p>
            </div>
          </div>

          {/* 검사 추천 대상 */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              แนะนำสำหรับท่านเหล่านี้
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#008fd2] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 검사 프로세스 */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              การตรวจง่ายมาก
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">💧</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>เก็บน้ำลาย</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>ใช้เวลา 3 นาที</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">🧬</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>วิเคราะห์ NGS</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Macrogen</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>ปรึกษาผล</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>หลัง 2-3 สัปดาห์</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
