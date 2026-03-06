import Image from 'next/image';

export default function InHouseLabSection() {
  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        <div className="flex flex-col gap-4 w-full text-center">
          <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ห้องปฏิบัติการในตัว<br />เพื่อคุณภาพที่ดีที่สุด
          </h2>
          <p className="font-medium text-[#5d5f6d] text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            เราผลิตรากเทียมและฟันปลอมเองภายในคลินิก<br />
            เพื่อความพอดีที่สมบูรณ์แบบและการจัดส่งที่รวดเร็ว
          </p>
        </div>

        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/in-house-lab.jpg" alt="ห้องปฏิบัติการในคลินิก" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2">
            <h3 className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ปรับแต่งเฉพาะบุคคล</h3>
            <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ดีไซน์ให้เข้ากับรูปหน้าและช่องปากของคุณ</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2">
            <h3 className="font-bold text-[#292a2f]" style={{ fontFamily: 'Pretendard, sans-serif' }}>เสร็จรวดเร็ว</h3>
            <p className="text-sm text-[#5d5f6d]" style={{ fontFamily: 'Pretendard, sans-serif' }}>ลดเวลาการรอคอยจากห้องแล็บภายนอก</p>
          </div>
        </div>
      </div>
    </div>
  );
}

