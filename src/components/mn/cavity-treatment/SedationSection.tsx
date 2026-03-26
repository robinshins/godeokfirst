'use client';

import Image from 'next/image';

export default function SedationSection() {

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
 alt:'өвчтөн хяналт',
 title:'өвчтөн хяналт',
      objectFit: 'object-cover'
    }
  ];


  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Main Title */}
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              шүдний эмнэлэг эмчилгээ,<br />
?
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
 
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
 эмчилгээ нас 
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
 {/* What is */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
?
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
, эмчилгээ.
                    <br /><br />
 тухтай эмчилгээ аюулгүй.
                  </p>
                </div>
              </div>

 {/* аюулгүй */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
 аюулгүй 
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
'хадгалах',
'мэргэжлийн эмч,,',
'нас',
'ерөнхиймэдээ алдуулалт',
'',
'шүдний эмнэлэгэмчилгээ'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* тухтай байдал */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    тухтай байдал
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
'боломжтой',
'тухтай',
'тухтай шүдний эмнэлэгэмчилгээ',
'боломжтой'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

 {/* */}
              <div className="bg-gradient-to-r from-[#008095]/10 to-[#006d80]/10 p-5 rounded-2xl w-full border border-[#008095]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#008095]">
 💡 эмчилгээ
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
 эмчилгээ Үгүй. <span className="font-bold text-[#008095]">мэргэжилтэн </span> <span className="font-bold text-[#008095]">өвчтөн хяналт, </span> гэх мэт шүдний эмнэлэг мэргэжилтэн эмчилгээ.
                  </p>
                </div>
              </div>

 {/* мэргэжилтэн */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={certifications[0].image}
                    alt={certifications[0].alt}
                    fill
                    className={certifications[0].objectFit}
                  />
                </div>
                <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center w-full">
                  {certifications[0].title}
                </p>
              </div>

 {/* мэдээ алдуулалт явуулах */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
 мэдээ алдуулалт явуулах 
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: түрхэлт/зайлахмэдээ алдуулалт */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        түрхэлт/зайлахмэдээ алдуулалт
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
 мэдээ алдуулалт өвдөлт <br />
 гадаргуу мэдээ алдуулалт
                      </p>
                    </div>
                  </div>

 {/* Step 2: өвдөлтнамдаах мэдээ алдуулалт */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
 өвдөлтнамдаах мэдээ алдуулалт 
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
 тарилга хурд <br />
 өвдөлт хамгийн бага 
                      </p>
                    </div>
                  </div>

 {/* Step 3: мэдрэл мэдээ алдуулалт */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
 мэдрэл мэдээ алдуулалт 
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
 мэдрэл мэдээ алдуулалт <br />
                        төгс Өвдөлтгүй эмчилгээ дуусгах
                      </p>
                    </div>
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
