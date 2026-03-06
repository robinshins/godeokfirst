import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="flex items-center" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 w-full py-20">
        <div className="flex flex-col gap-20">
          {/* Logo and Content */}
          <div className="flex flex-col gap-6 w-full">
            {/* Logo */}
            <div className="h-[14.4px] w-[100.789px]">
              <Image
                src="/icons/Logo.svg"
                alt="Kyungsung Medis Dental Clinic"
                width={101}
                height={14}
                className="w-full h-full"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-7 w-full">
                <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  立即获取免费咨询
                </p>
                <div className="font-bold leading-[1.35] text-[40px] text-white tracking-[-0.8px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="mb-0">不止釜山最好，</p>
                  <p>更是韩国最好的牙科诊所</p>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col gap-4 w-full">
                <Link href="/cn/consultation" className="w-full">
                  <button className="bg-[#006aff] h-16 w-full rounded-[18px] flex items-center justify-center px-6 py-4">
                    <span className="font-bold leading-[1.5] text-xl text-white text-nowrap tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      免费AI咨询
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
