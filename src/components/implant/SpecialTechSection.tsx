'use client';

import Image from 'next/image';

export default function SpecialTechSection() {
  const features = [
    '스웨덴 카롤린스카 의대 개발 기술',
    '치아와 잇몸에 직접 부착되는 프로바이오틱스',
    '치약과 구강 세정제에서도 생존하는 강력한 균주',
    '환자당분과 치아 우식 산 생성없는 안전한 균주'
  ];

  return (
    <div className="bg-white w-full relative flex justify-center">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/special-tech-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              고덕퍼스트치과만의<br />
              특별한 기술
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            {/* Features Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                우리 병원이 자부합니다
              </p>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-[14px] items-start p-5 relative rounded-2xl shrink-0 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center relative shrink-0 w-full">
                    <div className="relative shrink-0 w-6 h-6">
                      <Image
                        src="/icons/check-blue.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 items-start justify-center">
                      <p className="font-bold leading-[1.5] not-italic text-[17px] text-black tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 구강 박테리아 테라피 Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 box-border flex flex-col gap-4 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full border border-blue-200">
              <h3 className="font-bold leading-[1.35] not-italic text-xl text-black tracking-[-0.4px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                평생 구강 관리
              </h3>
              <div className="bg-white h-[200px] overflow-hidden relative rounded-[16px] shrink-0 w-full">
                <Image
                  src="/images/beneficial-bacteria.jpg"
                  alt="구강 박테리아 테라피"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 items-start w-full">
                <p className="font-bold leading-[1.4] not-italic text-lg text-black tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  구강 박테리아 테라피
                </p>
                <p className="font-medium leading-[1.5] not-italic text-[15px] text-[#5d5f6d] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  스웨덴 카롤린스카 의대에서 개발한 프로바이오틱스로 임플란트를 오래도록 건강하게 유지합니다
                </p>
              </div>
            </div>

            {/* Waterpik Gift Card */}
            <div className="bg-[#008095] box-border flex flex-col gap-6 items-start justify-center p-6 relative rounded-[24px] shrink-0 w-full">
              <div className="bg-white h-[245px] overflow-hidden relative rounded-[20px] shrink-0 w-full">
                <Image
                  src="/images/waterpik.jpeg"
                  alt="워터픽"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <div className="flex flex-col gap-2 items-start leading-[1.35] not-italic relative shrink-0 text-center text-white w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  <p className="font-bold relative shrink-0 text-2xl tracking-[-0.48px] w-full">
                    9만 원 상당
                  </p>
                  <p className="font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">
                    워터픽 지원
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.2)] box-border flex flex-col gap-6 items-start p-6 relative rounded-[20px] shrink-0 w-full">
                  <p className="font-bold leading-[1.5] not-italic text-[17px] text-center text-white tracking-[-0.34px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    전체 임플란트 리뷰 이벤트 참여 시!
                  </p>
                  <div className="h-0 relative shrink-0 w-full">
                    <Image
                      src="/icons/line-divider.svg"
                      alt=""
                      width={247}
                      height={1}
                      className="w-full"
                    />
                  </div>
                  <div className="font-bold leading-[1.5] not-italic text-lg text-center text-white tracking-[-0.36px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    임플란트 주변 음식물 제거와<br />
                    잇몸 마사지에 효과적!<br />
                    구강 관리에 필수적인<br />
                    워터픽을 선물로 드립니다
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
