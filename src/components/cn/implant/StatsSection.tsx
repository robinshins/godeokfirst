'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function StatsSection() {
  const stats = [
    { number: '1,200', unit: '次+', label: '种植牙植入次数' },
    { number: '0', unit: '例', label: '种植牙再手术', subtitle: '高德Edu Town开业以来再手术0例' },
    { number: '4.9', unit: '/ 5.0', label: '患者满意度', subtitle: 'Kakao、Google、Naver地图基准' },
  ];

  return (
    <div className="bg-gradient-to-b from-[#008095] to-white w-full relative overflow-hidden">
      {/* Content container with max-width */}
      <div className="w-full flex justify-center relative z-10">
        <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          {/* Logo */}
          <div className="h-8 overflow-clip relative shrink-0 w-[180px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="高德First牙科"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          {/* Title */}
          <h2 className="font-bold leading-[1.35] not-italic text-[31px] text-center text-white tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            培养牙医的<br />
            牙医为您诊疗
          </h2>

          {/* Subtitle */}
          <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            朝鲜大学牙科医院客座教授出身<br />
            李东贤院长亲自手术
          </p>
        </div>
      </FadeInSection>

      {/* Stats Cards */}
      <div className="flex flex-col gap-5 items-start relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          {stats.map((stat, index) => (
            <FadeInSection key={index} delay={index * 150} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              {/* SEO */}
              <span className="sr-only">{stat.number}{stat.unit} {stat.label}{stat.subtitle ? ` - ${stat.subtitle}` : ''}</span>
              <div className="flex gap-2 items-start justify-center relative shrink-0 w-full" aria-hidden="true">
                <p
                  className="font-bold leading-normal not-italic text-[72px] text-center text-nowrap tracking-[-2.88px]"
                  style={{
                    fontFamily: '"NanumSquare", sans-serif',
                    background: 'linear-gradient(to bottom, #008095 0%, #006B7A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.number}
                </p>
                <div className="box-border flex flex-col gap-2.5 items-center justify-center pb-3 pt-2.5 px-0 relative self-stretch shrink-0">
                  <div className="flex flex-col grow justify-end leading-[0] not-italic relative shrink-0 text-[#008095] text-2xl text-center tracking-[-0.48px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    <p className="leading-[1.35] font-bold">{stat.unit}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center w-full" aria-hidden="true">
                <p className="font-bold leading-[1.4] not-italic text-[#3e3a3a] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  {stat.label}
                </p>
                {stat.subtitle && (
                  <p className="text-sm text-[#3e3a3a]/70 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {stat.subtitle}
                  </p>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
