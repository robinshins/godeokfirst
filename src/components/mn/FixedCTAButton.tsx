import Link from 'next/link';
import Image from 'next/image';

export default function FixedCTAButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-6 pointer-events-none">
      <div className="max-w-[430px] mx-auto w-full pointer-events-auto">
        <Link href="/mn/consultation">
          <button className="w-full h-16 bg-[#006aff] text-white rounded-[20px] font-bold text-lg flex items-center justify-center gap-3 shadow-[0_12px_40px_rgba(0,106,255,0.4)] transition-transform active:scale-95" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            <div className="flex flex-col items-center justify-center gap-0.5">
              <span className="text-xs opacity-80 font-medium">1 минутанд</span>
              <span className="text-xl">AI Зөвлөгөө эхлүүлэх</span>
            </div>
            <Image src="/icons/arrow-right-white.svg" alt="Arrow" width={24} height={24} />
          </button>
        </Link>
      </div>
    </div>
  );
}

