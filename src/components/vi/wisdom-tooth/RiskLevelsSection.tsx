'use client';

import Image from 'next/image';

export default function RiskLevelsSection() {
  const riskLevels = [
    {
      level: 'Nguy cơ thấp',
      levelBg: 'bg-[#e8f8f0]',
      levelColor: 'text-[#15bd66]',
      title: 'Răng khôn mọc thẳng',
      description: 'Ngay cả răng khôn mọc thẳng cũng khó vệ sinh,\ndẫn đến nguy cơ sâu răng cao',
      beforeImage: '/images/wisdom-tooth-cases/simple/case1-before.jpg',
      afterImage: '/images/wisdom-tooth-cases/simple/case1-after.jpg'
    },
    {
      level: 'Nguy cơ trung bình',
      levelBg: 'bg-[#fff9ec]',
      levelColor: 'text-[#ffc53d]',
      title: 'Răng khôn mọc ngầm một phần',
      description: 'Dễ bị giắt thức ăn và\nthường xuyên gây viêm nhiễm',
      beforeImage: '/images/wisdom-tooth-cases/partial/initial-pano.jpg',
      afterImage: '/images/wisdom-tooth-cases/partial/post-extraction-pano.jpg'
    },
    {
      level: 'Nguy cơ cao',
      levelBg: 'bg-[#fef1e5]',
      levelColor: 'text-[#f57400]',
      title: 'Răng khôn mọc ngầm hoàn toàn',
      description: 'Cần nhổ sớm vì có khả năng\nhình thành nang chân răng',
      beforeImage: '/images/wisdom-tooth-cases/impacted/case1-before.jpg',
      afterImage: '/images/wisdom-tooth-cases/impacted/case1-after.jpg'
    },
    {
      level: 'Nguy cơ cao',
      levelBg: 'bg-[#fef1e5]',
      levelColor: 'text-[#f57400]',
      title: 'Răng khôn chân răng bị cong',
      description: 'Độ khó khi nhổ cao do chân răng bị cong',
      beforeImage: '/images/wisdom-tooth-cases/curved-root/case1-before.jpg',
      afterImage: '/images/wisdom-tooth-cases/curved-root/case1-after.jpg'
    },
    {
      level: 'Cần xử lý ngay',
      levelBg: 'bg-[#ffebed]',
      levelColor: 'text-[#ff1616]',
      title: 'Răng khôn mọc lệch nằm ngang',
      description: 'Xô đẩy răng phía trước, gây lệch lạc hàm răng và sâu răng',
      beforeImage: '/images/wisdom-tooth-cases/horizontal/case1-before.jpg',
      afterImage: '/images/wisdom-tooth-cases/horizontal/case1-after.jpg'
    }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4 relative">
      {/* Background gradient */}
      <div className="absolute left-1/2 top-[217px] -translate-x-1/2 w-[480px] h-[1400px] pointer-events-none">
        <Image
          src="/images/ellipse-gradient-large.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[375px] mx-auto relative z-10">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-[#292a2f] text-center">
                Mức độ nguy hiểm theo tình trạng răng khôn
              </h2>
            </div>
          </div>

          {/* Risk Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {riskLevels.map((risk, index) => (
              <div
                key={index}
                className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden"
              >
                <div className="flex flex-col gap-4 items-center justify-center px-4 py-6 w-full">
                  {/* Before/After Images */}
                  <div className="flex flex-col gap-3 w-full">
                    {/* Before Image */}
                    <div className="relative w-full">
                      <div className="h-[174px] w-full rounded-[20px] overflow-hidden relative">
                        <Image
                          src={risk.beforeImage}
                          alt={`${risk.title} - Trước khi nhổ`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute top-3 left-3 bg-[#292a2f] rounded-[10px] px-2.5 py-[5px] z-10">
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                          Trước
                        </p>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative w-full">
                      <div className="h-[174px] w-full rounded-[20px] overflow-hidden relative">
                        <Image
                          src={risk.afterImage}
                          alt={`${risk.title} - Sau khi nhổ`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-[196px] h-[86px]">
                        <Image
                          src="/images/after-badge.svg"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <div className="rounded-[10px] px-2.5 py-[5px]">
                          <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                            Sau
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Info */}
                  <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                    <div className={`${risk.levelBg} rounded-lg px-[10px] py-[6px]`}>
                      <p className={`font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-center ${risk.levelColor}`}>
                        {risk.level}
                      </p>
                    </div>
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      {risk.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center whitespace-pre-line">
                    {risk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

