import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="flex items-center" style={{ background: 'linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 w-full py-20">
        <div className="flex flex-col gap-20">
          {/* Logo and Content */}
          <div className="flex flex-col gap-6 w-full">
            {/* Logo */}
            <div className="h-8 relative shrink-0">
              <Image
                src="/images/goduk_images/고덕퍼스트치과_Logo_white.svg"
                alt="고덕퍼스트치과"
                width={180}
                height={32}
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-7 w-full">
                <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  지금바로 무료로 상담해 보세요
                </p>
                <div className="font-bold leading-[1.35] text-[40px] text-white tracking-[-0.8px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="mb-0">고덕 최고의 치과,</p>
                  <p>퍼스트치과</p>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col gap-4 w-full">
                <Link href="/consultation" className="w-full">
                  <button className="bg-[#008095] h-16 w-full rounded-[18px] flex items-center justify-center px-6 py-4">
                    <span className="font-bold leading-[1.5] text-xl text-white text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      AI 상담예약
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
