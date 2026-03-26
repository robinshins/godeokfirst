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
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(화이트).png"
                alt="高德First牙科"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-7 w-full">
                <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  现在就免费咨询吧
                </p>
                <div className="font-bold leading-[1.35] text-[40px] text-white tracking-[-0.8px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="mb-0">高德最好的牙科，</p>
                  <p>First牙科</p>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col gap-4 w-full">
                <Link href="/cn/consultation" className="w-full">
                  <button className="bg-[#008095] h-16 w-full rounded-[18px] flex items-center justify-center px-6 py-4">
                    <span className="font-bold leading-[1.5] text-xl text-white text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      AI咨询预约
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
