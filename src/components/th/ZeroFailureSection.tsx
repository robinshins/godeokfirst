'use client';

export default function ZeroFailureSection() {
  return (
    <div className="bg-[#21314E] w-full">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-8 items-center px-4 py-12 w-full max-w-[430px]">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center w-full">
            <p className="text-[14px] font-semibold text-[#4DC8D8] tracking-[2px] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              SINCE OPEN
            </p>
            <h2 className="font-bold text-[28px] text-center text-white leading-[1.35] tracking-[-0.5px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Godeok Edutown<br />
              <span className="text-[#4DC8D8]">คลินิกทันตกรรมแห่งแรก</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#4DC8D8]/40 rounded-full" />
            <p className="text-[15px] text-white/80 text-center leading-[1.6] font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              คลินิกทันตกรรมที่อยู่ที่นี่ตั้งแต่แรก<br />
              ทันตแพทย์หัวหน้า โดยตรง, รับผิดชอบจนจบ.
            </p>
          </div>

          {/* Message */}
          <p className="text-[14px] text-white/50 text-center leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            แพทย์ผู้รับผิดชอบไม่เปลี่ยน<br />
            ตั้งแต่ปรึกษาจนถึงผ่าตัดและดูแลหลังการรักษา<br />
            <span className="text-white/80 font-semibold">ผู้เชี่ยวชาญทันตกรรมบูรณาการ ทพ.ลี ดงฮยอน</span>รับผิดชอบ
          </p>
        </div>
      </div>
    </div>
  );
}
