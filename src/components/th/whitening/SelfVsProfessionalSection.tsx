import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          ทำไมควรฟอกสีฟัน<br />กับทันตแพทย์?
        </h2>

        <div className="w-full bg-[#f3f6fb] rounded-[32px] overflow-hidden">
          <div className="grid grid-cols-2 p-6 gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#727582] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>ทำเองที่บ้าน</h3>
              <div className="flex flex-col gap-3">
                <div className="bg-white/50 p-3 rounded-xl text-xs text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>น้ำยาความเข้มข้นต่ำ เห็นผลช้า</div>
                <div className="bg-white/50 p-3 rounded-xl text-xs text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>เสี่ยงเหงือกอักเสบหากใช้ไม่ถูกวิธี</div>
                <div className="bg-white/50 p-3 rounded-xl text-xs text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>สีฟันอาจไม่สม่ำเสมอ</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#006aff] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>ที่ Medis Dental</h3>
              <div className="flex flex-col gap-3">
                <div className="bg-[#006aff]/10 p-3 rounded-xl text-xs text-[#006aff] font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>น้ำยาเกรดการแพทย์ เห็นผลทันที</div>
                <div className="bg-[#006aff]/10 p-3 rounded-xl text-xs text-[#006aff] font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>ป้องกันเหงือกอย่างสมบูรณ์</div>
                <div className="bg-[#006aff]/10 p-3 rounded-xl text-xs text-[#006aff] font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>สีฟันขาวสม่ำเสมอเป็นธรรมชาติ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

