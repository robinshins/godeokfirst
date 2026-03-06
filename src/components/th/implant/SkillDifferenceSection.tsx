import Image from 'next/image';

export default function SkillDifferenceSection() {
  return (
    <div className="bg-[#0b1727] w-full text-white">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[80px] relative w-full max-w-[430px] mx-auto text-center">
        <h2 className="font-bold leading-[1.35] text-[36px] tracking-[-0.72px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          ความแตกต่างที่<br />ความชำนาญ
        </h2>
        
        <p className="text-white/60 text-lg leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          แม้จะใช้เครื่องมือชนิดเดียวกัน แต่ผลลัพธ์ที่ได้ย่อมต่างกันตามประสบการณ์และความชำนาญของแพทย์ผู้ผ่าตัด
        </p>

        <div className="w-full h-px bg-white/10" />

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-[#006aff] font-bold text-5xl">10 ปี+</p>
            <p className="text-white/80" style={{ fontFamily: 'Pretendard, sans-serif' }}>ประสบการณ์การผ่าตัดรากเทียม</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#006aff] font-bold text-5xl">1,500+</p>
            <p className="text-white/80" style={{ fontFamily: 'Pretendard, sans-serif' }}>เคสการผ่าตัดที่ประสบความสำเร็จ</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#006aff] font-bold text-5xl">100%</p>
            <p className="text-white/80" style={{ fontFamily: 'Pretendard, sans-serif' }}>ความพึงพอใจและการดูแลต่อเนื่อง</p>
          </div>
        </div>
      </div>
    </div>
  );
}

