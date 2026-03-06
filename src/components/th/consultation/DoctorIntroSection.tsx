'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DoctorIntroSection() {
  const [showDetails, setShowDetails] = useState(false);

  const doctors = [
    {
      name: 'ดร. คิม ดงซอก',
      position: 'ผู้อำนวยการใหญ่',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        'ปริญญาโท ทันตกรรมบูรณาการ',
        'ทันตกรรมขั้นสูง มหาวิทยาลัยแห่งชาติโซล',
        'กรรมการ สมาคมรากฟันเทียมโลก',
        'กรรมการ สถาบันรากฟันเทียมช่องปากและใบหน้าเกาหลี',
        'สมาชิกวิจัย ทันตกรรมประดิษฐ์ มหาวิทยาลัยเท็กซัส A&M',
        'ผู้เชี่ยวชาญทันตกรรมที่ได้รับการรับรอง (กระทรวงสาธารณสุข)',
        'ที่ปรึกษา Osstem/Neo Implant',
        'อันดับ 1 การผ่าตัดรากฟันเทียมแบบ Digital Guide (ปูซาน นัมกู)',
        '0 การผ่าตัดแก้ไขใน 10 ปี'
      ],
      details: [
        'ทันตกรรมรากฟันเทียม มหาวิทยาลัยแห่งชาติโซล',
        'ที่ปรึกษาวิจัย Hiossen Implant',
        'สมาชิก สถาบันทันตกรรมเสริมความงามเกาหลี',
        'สมาชิก สถาบันทันตกรรมบูรณาการเกาหลี',
        'สมาชิก สถาบันทันตกรรมอนุรักษ์เกาหลี',
        'หลักสูตรการรักษาข้อต่อขากรรไกรที่ได้รับการรับรอง (HIRA)'
      ]
    },
    {
      name: 'ดร. แบ อินเฮ',
      position: 'ผู้อำนวยการฝ่ายอนุรักษ์',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        'ใบอนุญาตคู่: ทันตแพทย์ & เภสัชกร',
        'ผู้เชี่ยวชาญทันตกรรมอนุรักษ์ที่ได้รับการรับรอง (กระทรวงสาธารณสุข)'
      ],
      details: [
        'แพทย์ประจำบ้าน โรงพยาบาลทันตกรรม มหาวิทยาลัยแห่งชาติปูซาน',
        'ปริญญาเอก ทันตกรรมอนุรักษ์ (มหาวิทยาลัยแห่งชาติปูซาน)',
        'ปริญญาโททันตแพทยศาสตร์ เกียรตินิยมอันดับหนึ่ง',
        'สมาชิก สถาบันทันตกรรมอนุรักษ์เกาหลี',
        'สมาชิก สถาบันรากฟันเกาหลี',
        'สมาชิก สถาบันทันตกรรมยึดติดเกาหลี',
        'สมาชิก สมาคมวัสดุทันตกรรมเกาหลี',
        'สมาชิก สถาบันทันตกรรมเสริมความงามเกาหลี',
        'อดีตผู้อำนวยการ คลินิกทันตกรรม Good Smile',
        'อดีตผู้อำนวยการ คลินิกทันตกรรม Plante'
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
              <div className="relative w-full h-[200px]">
                <Image
                  src={mainDoctor.image}
                  alt={`${mainDoctor.name}, ${mainDoctor.position}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1 pt-1">
              <div className="flex gap-1.5 items-end mb-3">
                <h2 className="font-['Pretendard',sans-serif] font-bold text-[22px] text-black tracking-[-0.44px]">
                  {mainDoctor.name}
                </h2>
              </div>
              <p className="font-['Pretendard',sans-serif] font-semibold text-[15px] text-[#5d5f6d] tracking-[-0.3px] mb-2">
                {mainDoctor.position}
              </p>
              <div className="font-['Pretendard',sans-serif] font-medium text-[11.5px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px]">
                {mainDoctor.credentials.slice(0, 3).map((cred, index) => (
                  <p key={index} className="mb-0.5">{cred}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Main Credentials */}
          <div className="font-['Pretendard',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
            {mainDoctor.credentials.slice(3).map((cred, index) => (
              <p key={index} className="mb-0">{cred}</p>
            ))}
          </div>

          {/* Expandable Details */}
          {showDetails && (
            <div>
              {/* Additional credentials for Dr. Kim */}
              <div className="font-['Pretendard',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
                {mainDoctor.details.map((detail, index) => (
                  <p key={index} className="mb-0">{detail}</p>
                ))}
              </div>

              {/* Dr. Bae information */}
              {doctors[1] && (
                <div className="mt-5 pt-5 border-t border-[#e9ebf1]">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 h-[80px] w-[60px] rounded-[12px] overflow-hidden">
                      <div className="relative h-full w-full">
                        <Image
                          src={doctors[1].image}
                          alt={`${doctors[1].name}, ${doctors[1].position}`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="flex-1 pt-0.5">
                      <div className="flex gap-1.5 items-end mb-2">
                        <h3 className="font-['Pretendard',sans-serif] font-bold text-[18px] text-black tracking-[-0.36px]">
                          {doctors[1].name}
                        </h3>
                      </div>
                      <p className="font-['Pretendard',sans-serif] font-semibold text-[13px] text-[#5d5f6d] tracking-[-0.26px] mb-2">
                        {doctors[1].position}
                      </p>
                      <div className="font-['Pretendard',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.6] tracking-[-0.26px]">
                        {doctors[1].credentials.map((cred, index) => (
                          <p key={index} className="mb-0.5">{cred}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="font-['Pretendard',sans-serif] font-medium text-[13px] text-[#5d5f6d] leading-[1.7] tracking-[-0.26px] space-y-0.5">
                    {doctors[1].details.map((detail, index) => (
                      <p key={index} className="mb-0">{detail}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full mt-5 pt-5 border-t border-[#e9ebf1] flex items-center justify-center gap-1 transition-colors hover:opacity-80"
          >
            <span className="font-['Pretendard',sans-serif] font-bold text-[15px] text-[#006aff] tracking-[-0.3px]">
              {showDetails ? 'ย่อ' : 'ดูประวัติทั้งหมด'}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#006aff"
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
