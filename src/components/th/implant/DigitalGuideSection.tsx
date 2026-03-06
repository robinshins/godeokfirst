import Image from 'next/image';

export default function DigitalGuideSection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <div className="flex flex-col gap-4 w-full text-center">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ดิจิทัลไกด์: นำทางสู่<br />ความแม่นยำ 100%
          </h2>
          <p className="font-medium text-[#5d5f6d] text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            เปรียบเสมือน GPS สำหรับการผ่าตัด<br />
            ช่วยให้การฝังรากเทียมเป็นไปตามแผนที่วางไว้
          </p>
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden border border-[#e9ebf1]">
          <Image src="/images/digital-guide-main.jpg" alt="ดิจิทัลไกด์" fill className="object-cover" />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl flex items-start gap-4">
            <div className="w-8 h-8 shrink-0 bg-[#006aff] rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <p className="text-[#5d5f6d] font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>ไม่มีการกรีดเหงือกขนาดใหญ่ (Flapless)</p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-2xl flex items-start gap-4">
            <div className="w-8 h-8 shrink-0 bg-[#006aff] rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <p className="text-[#5d5f6d] font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>ลดความเสี่ยงจากการติดเชื้อ</p>
          </div>
          <div className="bg-[#f8f9fa] p-6 rounded-2xl flex items-start gap-4">
            <div className="w-8 h-8 shrink-0 bg-[#006aff] rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <p className="text-[#5d5f6d] font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>ลดเวลาในการผ่าตัดเหลือเพียง 15-30 นาที</p>
          </div>
        </div>
      </div>
    </div>
  );
}

