import Image from 'next/image';

export default function PromotionSection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <div className="w-full bg-[#006aff] p-8 rounded-[32px] flex flex-col gap-6 text-center text-white relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex flex-col gap-2 relative z-10">
            <span className="bg-white text-[#006aff] px-4 py-1 rounded-full text-sm font-bold w-fit mx-auto">โปรโมชั่นพิเศษ</span>
            <h2 className="font-bold leading-[1.35] text-[28px] tracking-[-0.56px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ขูดหินปูน + ฟอกสีฟัน
            </h2>
          </div>

          <div className="flex flex-col gap-1 relative z-10">
            <p className="text-white/80 line-through text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>ราคาปกติ</p>
            <p className="font-extrabold text-5xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>ลด 50%</p>
          </div>

          <p className="text-white/80 leading-[1.6] relative z-10" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            เมื่อรับบริการขูดหินปูนตามสิทธิประกัน<br />
            รับสิทธิฟอกสีฟันราคาพิเศษทันที!
          </p>

          <div className="bg-white/20 p-4 rounded-2xl relative z-10">
            <p className="text-sm font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              จองสิทธิผ่าน AI ตอนนี้<br />เพื่อรับคำแนะนำเบื้องต้น
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

