import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <div className="bg-[#0b1727] w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#006aff] opacity-10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[430px] mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col gap-10 items-center text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold text-white leading-[1.3] tracking-[-0.64px]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Төрөлх шүдийг тань<br />
              амласан ёсоороо хадгална
            </h2>
            <p className="text-lg text-[#9ca3af] leading-[1.6]">
              Одоо хиймэл оюун ухааны (AI) тусламжтайгаар<br />
              зөвлөгөө авч, цаг товлоорой.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Link href="/mn/consultation" className="w-full">
              <button className="w-full h-[68px] bg-[#006aff] text-white rounded-[20px] font-bold text-xl flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(0,106,255,0.3)] hover:bg-[#0056d0] transition-colors">
                AI Зөвлөгөө эхлүүлэх
                <Image src="/icons/arrow-right-white.svg" alt="Arrow" width={24} height={24} />
              </button>
            </Link>

            <a href="tel:051-627-7475" className="w-full">
              <button className="w-full h-[68px] bg-white text-[#006aff] rounded-[20px] font-bold text-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                <Image src="/icons/phone-blue.svg" alt="Phone" width={24} height={24} />
                Шууд утсаар холбогдох
              </button>
            </a>
          </div>

          <p className="text-[#6b7280] text-sm">
            * AI зөвлөгөө нь 24 цагийн турш нээлттэй.
          </p>
        </div>
      </div>
    </div>
  );
}

