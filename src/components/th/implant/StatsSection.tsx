import Image from 'next/image';

export default function StatsSection() {
  return (
    <div className="bg-white w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full text-center">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ตัวเลขที่พิสูจน์<br />ความไว้วางใจ
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 w-full">
          <div className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col items-center gap-2">
            <p className="text-[#006aff] font-bold text-5xl">1,500+</p>
            <p className="font-bold text-xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>จำนวนเคสรากฟันเทียมดิจิทัล</p>
            <p className="text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>อันดับ 1 ในเขตปูซานนัมกู</p>
          </div>
          <div className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col items-center gap-2">
            <p className="text-[#006aff] font-bold text-5xl">0</p>
            <p className="font-bold text-xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>เคสผ่าตัดซ้ำใน 10 ปี</p>
            <p className="text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ความแม่นยำที่เหนือกว่า</p>
          </div>
          <div className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col items-center gap-2">
            <p className="text-[#006aff] font-bold text-5xl">10 ปี</p>
            <p className="font-bold text-xl text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>รับประกันการดูแล</p>
            <p className="text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>เราดูแลคุณเหมือนคนในครอบครัว</p>
          </div>
        </div>
      </div>
    </div>
  );
}

