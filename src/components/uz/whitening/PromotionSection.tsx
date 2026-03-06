import Link from 'next/link';
import Image from 'next/image';

export default function PromotionSection() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#db2777] to-[#9d174d] rounded-[40px] p-10 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col gap-8 relative z-10 text-center items-center">
            <div className="flex flex-col gap-2">
              <span className="text-white/80 font-bold text-sm">Maxsus taklif</span>
              <h2 className="text-3xl font-bold text-white leading-[1.3]">
                Scaling (Tozalash) +<br />Professional oqartirish
              </h2>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-white/60 line-through text-lg">400,000₩</span>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-5xl font-black">200,000</span>
                <span className="text-white text-2xl font-bold">₩</span>
              </div>
            </div>

            <Link href="/uz/consultation" className="w-full">
              <button className="w-full h-16 bg-white text-[#db2777] rounded-[20px] font-bold text-xl hover:bg-gray-100 transition-colors">
                AI Konsultatsiya olish
              </button>
            </Link>
            
            <p className="text-white/60 text-xs">
              * Ushbu taklif cheklangan vaqt davomida amal qiladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

