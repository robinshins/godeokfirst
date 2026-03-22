'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DoctorIntroSection() {
  const [showDetails, setShowDetails] = useState(false);

  const doctors = [
    {
      name: '이동현',
      position: '대표원장',
      image: '/images/goduk_images/이동현원장님.jpeg',
      credentials: [
        '통합치의학과 전문의(보건복지부 인증)',
        '치의학 석사',
        '조선대학교 치과병원 외래교수',
        '임플란트·보철·신경치료 원스톱 진료',
        '과잉진료 없는 양심진료 원칙'
      ],
      details: [
        '서울대학교 치의학대학원 임플란트 치의학 우수상 수료',
        '서울대학교 치의학대학원 고급치의학 수료',
        '대한통합치의학 학회 정회원',
        '오스템, 포인트, 덴티스 임플란트 연구자문위원',
        'Pennsylvania univ. 근관치료과정 수료',
        '턱관절장애교육연구회 수료'
      ]
    }
  ];

  const mainDoctor = doctors[0];

  return (
    <div className="bg-white w-full py-8">
      <div className="max-w-[375px] mx-auto px-4">
        {/* Doctor Card */}
        <div className="bg-white border border-[#e9ebf1] rounded-[24px] p-6">
          {/* Header with Image */}
          <div className="flex items-start gap-5 mb-5">
            <div className="flex-shrink-0 h-[120px] w-[90px] rounded-[16px] overflow-hidden">
              <div className="relative w-full h-[250px] -top-[25px]">
                <Image
                  src={mainDoctor.image}
                  alt={`${mainDoctor.name} ${mainDoctor.position}`}
                  fill
                  className="object-cover object-[80%_20%] scale-[1]"
                />
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="flex gap-1.5 items-end mb-3">
                <h2 className="font-['Pretendard_JP'] font-bold text-[22px] text-black tracking-[-0.44px]">
                  {mainDoctor.name}
                </h2>
                <span className="font-['Pretendard_JP'] font-semibold text-[15px] text-[#5d5f6d] tracking-[-0.3px] pb-0.5">
                  {mainDoctor.position}
                </span>
              </div>
              <div className="font-['Pretendard_JP'] font-medium text-[11.5px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px]">
                {mainDoctor.credentials.slice(0, 3).map((cred, index) => (
                  <p key={index} className="mb-0.5">{cred}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Main Credentials */}
          <div className="font-['Pretendard_JP'] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
            {mainDoctor.credentials.slice(3).map((cred, index) => (
              <p key={index} className="mb-0">{cred}</p>
            ))}
          </div>

          {/* Expandable Details */}
          {showDetails && (
            <div>
              {/* 이동현 원장 추가 경력 */}
              <div className="font-['Pretendard_JP'] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
                {mainDoctor.details.map((detail, index) => (
                  <p key={index} className="mb-0">{detail}</p>
                ))}
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full mt-5 pt-5 border-t border-[#e9ebf1] flex items-center justify-center gap-1 transition-colors hover:opacity-80"
          >
            <span className="font-['Pretendard_JP'] font-bold text-[15px] text-[#008095] tracking-[-0.3px]">
              {showDetails ? '접기' : '경력 자세히 보기'}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#008095"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
