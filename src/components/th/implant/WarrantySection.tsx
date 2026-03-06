import Image from 'next/image';

export default function WarrantySection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <div className="w-full bg-[#f3f6fb] p-8 rounded-[32px] flex flex-col gap-8 relative overflow-hidden">
          {/* Warranty Badge Image */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
            <Image src="/icons/warranty-badge.svg" alt="Warranty" width={200} height={200} />
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ระบบรับประกัน<br />ความพึงพอใจ 10 ปี
            </h2>
            <p className="text-[#5d5f6d] text-lg leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              เราไม่ได้เพียงแค่รักษา แต่เรารับผิดชอบต่อทุกรอยยิ้มที่คุณได้รับจากเรา
            </p>
          </div>

          <div className="flex flex-col gap-4 relative z-10">
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center">
              <span className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>รากเทียม (Implant fixture)</span>
              <span className="text-[#006aff] font-bold">รับประกัน 10 ปี</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center">
              <span className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>แกนฟัน (Abutment)</span>
              <span className="text-[#006aff] font-bold">รับประกัน 5 ปี</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center">
              <span className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ครอบฟัน (Crown)</span>
              <span className="text-[#006aff] font-bold">รับประกัน 3 ปี</span>
            </div>
          </div>

          <p className="text-xs text-[#9a9ca8] relative z-10" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            * เงื่อนไขเป็นไปตามที่คลินิกกำหนด และขึ้นอยู่กับการมาตรวจติดตามผลตามที่แพทย์นัดหมาย
          </p>
        </div>
      </div>
    </div>
  );
}

