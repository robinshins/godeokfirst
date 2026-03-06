import Image from 'next/image';

export default function WhiteningStats() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto text-center">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          ยิ้มอย่างมั่นใจ<br />ด้วยผลลัพธ์ที่ชัดเจน
        </h2>
        
        <div className="grid grid-cols-1 gap-6 w-full">
          <div className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col items-center gap-2">
            <p className="text-[#006aff] font-bold text-5xl">95%</p>
            <p className="font-bold text-xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ความพึงพอใจของคนไข้</p>
            <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ฟันขาวขึ้นอย่างเห็นได้ชัดในครั้งแรก</p>
          </div>
          <div className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col items-center gap-2">
            <p className="text-[#006aff] font-bold text-5xl">1 ชม.</p>
            <p className="font-bold text-xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ระยะเวลาการทำ</p>
            <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>สวยทันใจ ไม่เสียเวลานาน</p>
          </div>
        </div>
      </div>
    </div>
  );
}

