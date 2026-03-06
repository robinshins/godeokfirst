import Image from 'next/image';

export default function SpeedSection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto text-center">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ความเร็วที่มาพร้อม<br />ความแม่นยำ
          </h2>
          <p className="font-medium text-[#5d5f6d] text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            เราลดระยะเวลาการรักษาให้สั้นลง<br />
            เพื่อให้คุณกลับไปใช้ชีวิตตามปกติได้เร็วที่สุด
          </p>
        </div>

        <div className="bg-[#f3f6fb] p-8 rounded-[32px] w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[#006aff] font-bold text-4xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>รวดเร็วกว่า 3 เท่า</p>
            <p className="text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ด้วยระบบดิจิทัลที่ครบวงจร</p>
          </div>
          <div className="h-px bg-[#e9ebf1] w-full" />
          <div className="flex flex-col gap-2">
            <p className="text-[#006aff] font-bold text-4xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>ใส่ฟันได้ทันที</p>
            <p className="text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>หลังการผ่าตัดในเคสที่เหมาะสม</p>
          </div>
        </div>
      </div>
    </div>
  );
}

