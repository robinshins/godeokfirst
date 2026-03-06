import Image from 'next/image';
import Link from 'next/link';

export default function ImplantHero() {
  return (
    <div className="bg-[#0b1727] w-full relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
        <Image
          src="/images/hero-gradient.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[430px] mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[#006aff] font-bold text-lg">Pusan Nam-gu hududida 1-o'rin</p>
              <h1 className="text-[36px] font-extrabold text-white leading-[1.2] tracking-[-1px]">
                Butun umrlik tishlar<br />
                Raqamli Implantatsiya bilan
              </h1>
            </div>
            <p className="text-lg text-[#9ca3af] leading-[1.6]">
              Kompyuter tahlili asosida<br />
              aniq va xavfsiz operatsiya
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/uz/consultation" className="w-full">
              <button className="w-full h-16 bg-[#006aff] text-white rounded-[20px] font-bold text-xl">
                AI Konsultatsiyani boshlash
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-[20px]">
              <p className="text-[#9ca3af] text-sm mb-1">Qayta operatsiya</p>
              <p className="text-white text-2xl font-bold">0 holat</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-[20px]">
              <p className="text-[#9ca3af] text-sm mb-1">Raqamli operatsiya</p>
              <p className="text-white text-2xl font-bold">1,500 +</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

