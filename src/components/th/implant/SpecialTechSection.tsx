import Image from 'next/image';

export default function SpecialTechSection() {
  return (
    <div className="bg-[#0b1727] w-full text-white">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <h2 className="font-bold leading-[1.35] text-[32px] tracking-[-0.64px] text-center w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          เทคโนโลยีพิเศษที่<br />Medis Dental เท่านั้น
        </h2>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
              <Image src="/images/special-tech-1.jpg" alt="เทคโนโลยี 1" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-2xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>MegaGen / Osstem Premium</h3>
            <p className="text-white/60 leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              เราใช้รากเทียมเกรดพรีเมียมที่เป็นที่ยอมรับระดับสากล เพื่อการยึดเกาะกับกระดูกที่รวดเร็วและทนทานที่สุด
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
              <Image src="/images/special-tech-2.jpg" alt="เทคโนโลยี 2" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-2xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>การสแกนใบหน้าดิจิทัล</h3>
            <p className="text-white/60 leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ออกแบบรอยยิ้มโดยคำนึงถึงรูปหน้าและรอยยิ้มโดยรวม เพื่อความสวยงามที่เป็นธรรมชาติที่สุด
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

