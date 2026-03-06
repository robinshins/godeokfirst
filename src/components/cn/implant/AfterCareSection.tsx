'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const stats = [
    { number: '90', unit: '% 去除', label: '有害菌抑制及生物膜' },
    { number: '0', unit: '例', label: '10年零返修' },
    { number: '+300', unit: '% 增加', label: '牙龈炎症自然治愈力' },
    { number: '80', unit: '% 抑制', label: '引起口臭的VSC成分' }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/icons/Logo.svg"
              alt="Kyungsung Medis Dental Clinic"
              width={168}
              height={24}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              美迪斯提供与众不同的<br />
              种植牙术后管理
            </h2>
            <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              10年后改变结果的真正术后管理差异
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
          {/* Bacteria Therapy Card */}
          <div className="flex flex-col items-center overflow-hidden rounded-xl relative shrink-0 w-full">
            <div className="h-[241.57px] relative shrink-0 w-full">
              <Image
                src="/images/bacteria-therapy-detail.png"
                alt="Oral Bacteria Therapy"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white box-border flex flex-col gap-5 items-start p-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                口腔菌群疗法
              </p>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                利用益生菌抑制有害菌并调节口腔菌群平衡的最新预防项目
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <div key={index} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="font-bold leading-normal not-italic text-center text-nowrap" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <span
                  className="text-[72px] tracking-[-2.88px]"
                  style={{
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.number}
                </span>
                <span className="text-2xl text-[#006aff] tracking-[-0.48px] ml-2">
                  {stat.unit}
                </span>
              </div>
              <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
