import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-[#111827] w-full text-white/60">
      <div className="box-border flex flex-col gap-12 px-4 py-[60px] relative w-full max-w-[430px] mx-auto">
        {/* Logo and About */}
        <div className="flex flex-col gap-6">
          <div className="h-8 relative w-40">
            <Image
              src="/icons/Logo.svg"
              alt="Kyungsung Medis Dental Clinic"
              width={160}
              height={32}
              className="w-full h-full brightness-200"
            />
          </div>
          <p className="text-sm leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            คลินิกทันตกรรม Kyungsung Medis มุ่งมั่นที่จะมอบคุณภาพการรักษาที่ดีที่สุดด้วยเทคโนโลยีที่ทันสมัยและทีมแพทย์ผู้เชี่ยวชาญ เพื่อสุขภาพช่องปากที่ดีของคนไข้ทุกท่าน
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>สาขาการรักษา</h3>
            <div className="flex flex-col gap-2 text-sm" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              <Link href="/th/implant">รากฟันเทียม</Link>
              <Link href="/th/whitening">ฟอกสีฟัน · วีเนียร์</Link>
              <Link href="/th/wisdom-tooth">ถอนฟันคุด</Link>
              <Link href="/th/cavity-treatment">รักษาฟันผุ</Link>
              <Link href="/th/gum-care">รักษาเหงือก</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold" style={{ fontFamily: 'Pretendard, sans-serif' }}>ช่วยเหลือ</h3>
            <div className="flex flex-col gap-2 text-sm" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              <Link href="/th#location">ที่ตั้งคลินิก</Link>
              <Link href="/th/consultation">ปรึกษา AI</Link>
              <a href="tel:051-627-7475">ติดต่อเรา</a>
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="flex flex-col gap-4 pt-8 border-t border-white/10 text-xs">
          <p style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ชื่อคลินิก: Kyungsung Medis Dental Clinic | ผู้อำนวยการ: คิม ดง ซอก<br />
            เลขทะเบียนนิติบุคคล: 617-27-33827<br />
            ที่อยู่: ชั้น 4 อาคาร Re-born, 12 Beon-gil, Suyeong-ro, Nam-gu, Busan
          </p>
          <p style={{ fontFamily: 'Pretendard, sans-serif' }}>
            © 2025 Kyungsung Medis Dental Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
