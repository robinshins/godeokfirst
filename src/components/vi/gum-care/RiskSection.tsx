'use client';

import Image from 'next/image';

export default function RiskSection() {
  const risks = [
    {
      icon: '/icons/037_Heart.svg',
      title: 'Nguy cơ bệnh tim mạch tăng gấp 3↑',
      titleHighlight: '3배↑', // Keep Korean highlight markers or adapt to translation
      translatedTitle: 'Nguy cơ bệnh tim mạch tăng gấp 3↑',
      translatedHighlight: 'gấp 3↑',
      process: [
        'Vi khuẩn nha chu xâm nhập mạch máu',
        'Gây viêm thành mạch máu',
        'Thúc đẩy hình thành cục máu đông'
      ],
      details: [
        { text: 'Giảm 10% bệnh tim', note: 'Khi khám răng miệng' },
        { text: 'Nguy cơ nhồi máu cơ tim gấp 2.8 lần' },
        { text: 'Giảm 16% nguy cơ đột quỵ (Lấy cao răng 1 lần/năm)' }
      ],
      source: 'Bệnh viện Bundang Đại học Quốc gia Seoul 2024, Hiệp hội Tim mạch Hoa Kỳ AHA 2020'
    },
    {
      icon: '/icons/034_Bed.svg',
      title: 'Tiểu đường trầm trọng hơn · Tăng biến chứng',
      titleHighlight: '악화',
      titleHighlight2: '증가',
      translatedTitle: 'Tiểu đường trầm trọng hơn · Tăng biến chứng',
      translatedHighlight: 'trầm trọng hơn',
      translatedHighlight2: 'Tăng',
      process: [
        'Viêm nướu',
        'Tăng kháng insulin',
        'Thất bại trong kiểm soát đường huyết'
      ],
      details: [
        { text: 'Giảm 0.4% HbA1c (Khi điều trị nha chu)' },
        { text: 'Biến chứng tiểu đường tiến triển nhanh gấp 2 lần' },
        { text: 'Viêm nha chu làm tăng nguy cơ thất bại kiểm soát đường huyết lên 6 lần' }
      ],
      source: 'Đại học Y Catholic, Bệnh viện Eunpyeong St. Mary 2023, Hiệp hội Tiểu đường Hàn Quốc'
    },
    {
      icon: '/icons/057_DNA.svg',
      title: 'Nguy cơ mất trí nhớ tăng 70%↑',
      titleHighlight: '70%↑',
      translatedTitle: 'Nguy cơ mất trí nhớ tăng 70%↑',
      translatedHighlight: '70%↑',
      process: [
        'Vi khuẩn nha chu vượt qua hàng rào máu não',
        'Viêm não',
        'Tích tụ Beta-amyloid'
      ],
      details: [
        { text: 'Phát hiện vi khuẩn nha chu ở 40% bệnh nhân Alzheimer' },
        { text: 'Nguy cơ mất trí nhớ tăng vọt nếu không điều trị trên 10 năm' }
      ],
      source: 'Nhóm nghiên cứu TS. Kantarci ĐH Harvard 2024, Journal of Neuroinflammation'
    },
    {
      icon: '/icons/023_Pregnancy_Test.svg',
      title: 'Nguy cơ biến chứng thai kỳ tăng gấp 7 lần↑',
      titleHighlight: '7배↑',
      translatedTitle: 'Nguy cơ biến chứng thai kỳ tăng gấp 7 lần↑',
      translatedHighlight: 'gấp 7 lần↑',
      process: [
        'Chất gây viêm vượt qua nhau thai',
        'Gây chuyển dạ sớm',
        'Sinh non và trẻ nhẹ cân'
      ],
      details: [
        { text: 'Nguy cơ sinh non tăng gấp 7 lần' },
        { text: 'Nguy cơ sinh con nhẹ cân (dưới 2kg) tăng gấp 2 lần' },
        { text: 'Có khả năng gây vấn đề về phát triển và khả năng học tập của trẻ sau này' }
      ],
      source: 'Hiệp hội Nha chu Hoa Kỳ · Châu Âu'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[26px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
              <p className="font-['Nanum_Myeongjo'] font-extrabold leading-[0.2] text-[60px] tracking-[-3.6px] w-full">
                &ldquo;
              </p>
              <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
                <p className="mb-0">Khi viêm nướu</p>
                <p>lan ra toàn thân...</p>
              </div>
            </div>
          </div>
          <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#d2d6e1] text-base text-center tracking-[-0.32px] w-full">
            Nếu không điều trị, nguy cơ lan sang nhiều bệnh khác là rất cao
          </p>
        </div>

        {/* Divider */}
        <div className="bg-white h-10 opacity-50 shrink-0 w-0.5" />

        {/* Risk Cards */}
        <div className="flex flex-col gap-4 items-start w-full">
          {risks.map((risk, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* White Card */}
              <div className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-10 items-center justify-center p-6 rounded-t-[24px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-center w-full">
                  <div className="relative shrink-0 w-[100px] h-[100px]">
                    <Image
                      src={risk.icon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[28px] text-black text-center tracking-[-0.56px] w-full">
                      {risk.translatedTitle.split(risk.translatedHighlight)[0]}
                      <span className="text-[#ff1616]">{risk.translatedHighlight}</span>
                      {risk.translatedHighlight2 && (
                        <>
                          {risk.translatedTitle.split(risk.translatedHighlight)[1].split(risk.translatedHighlight2)[0]}
                          <span className="text-[#ff1616]">{risk.translatedHighlight2}</span>
                        </>
                      )}
                    </p>
                    <div className="flex flex-col gap-1 items-center w-full">
                      {risk.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex flex-col items-center w-full">
                          <p className="font-['Pretendard_JP'] font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full">
                            {step}
                          </p>
                          {stepIndex < risk.process.length - 1 && (
                            <div className="relative shrink-0 w-6 h-6">
                              <Image
                                src="/icons/arrow-big-down-filled.svg"
                                alt=""
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue Card */}
              <div className="bg-[#006aff] box-border flex flex-col gap-2 items-center justify-center p-6 rounded-b-[24px] shadow-[0px_32px_64px_-12px_rgba(45,54,67,0.08)] text-white w-full">
                <div className="flex flex-col gap-1 items-start w-full">
                  {risk.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex gap-1.5 items-center w-full text-nowrap whitespace-pre">
                      <p className="font-['Pretendard_JP'] font-bold leading-[1.5] text-lg tracking-[-0.36px]">
                        {detail.text}
                      </p>
                      {'note' in detail && detail.note && (
                        <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-60 text-base tracking-[-0.32px]">
                          {detail.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-['Pretendard_JP'] font-normal leading-[1.4] opacity-60 text-xs tracking-[-0.24px] w-full">
                  {risk.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

