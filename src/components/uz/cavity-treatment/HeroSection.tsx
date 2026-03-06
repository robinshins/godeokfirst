import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="bg-[#fff7ed] w-full relative overflow-hidden">
      <div className="max-w-[430px] mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[#f97316] font-bold">Karies va Kanal davolash</span>
            <h1 className="text-[36px] font-extrabold text-[#111827] leading-[1.2]">
              Tishni sug'urishdan oldin<br />
              <span className="text-[#f97316]">Tabiiy tishni</span> saqlaylik
            </h1>
            <p className="text-lg text-[#6b7280] leading-[1.6]">
              Tish kariesini erta aniqlab,<br />
              aniq davolash bilan tishingizni himoya qilamiz.
            </p>
          </div>

          <Link href="/uz/consultation" className="w-full">
            <button className="w-full h-16 bg-[#f97316] text-white rounded-[20px] font-bold text-xl">
              AI Konsultatsiyani boshlash
            </button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 translate-y-1/4 translate-x-1/4">
        <Image src="/icons/cavity.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

