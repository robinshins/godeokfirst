'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/digital1.svg',
      description: 'Chẩn đoán chính xác với hệ thống quét khoang miệng 3D'
    },
    {
      number: 2,
      image: '/images/digital2.svg',
      description: 'Lập kế hoạch cấy ghép răng không cần rạch lợi, dựa trên cấu trúc khoang miệng được mô phỏng trên máy tính'
    },
    {
      number: 3,
      image: '/images/digital3.svg',
      description: 'Lắp thiết bị hướng dẫn cấy ghép vào vị trí phẫu thuật để giảm thiểu sai số xuống dưới 1mm'
    },
    {
      number: 4,
      image: '/images/digital4.svg',
      description: 'Rút ngắn thời gian phẫu thuật, giảm thiểu đau và sưng so với các phương pháp khác nhờ rạch tối thiểu'
    },
    {
      number: 5,
      image: '/images/digital5.svg',
      description: 'Tiến hành phẫu thuật mô phỏng theo từng tình huống để giảm thiểu sai số và nâng cao mức độ hài lòng về phẫu thuật'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Nha khoa Medis luôn <br /> phẫu thuật 2 lần
            </h2>
            <div className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Bác sĩ trưởng trực tiếp thiết kế vị trí cấy ghép tối ưu thông qua phẫu thuật implant ảo, sau đó mới tiến hành phẫu thuật thực tế<br />
              <br />
              <span className="font-bold text-[#006aff]">Với phẫu thuật nhanh chóng và thoải mái</span>,<br />
              chúng tôi giảm thiểu sưng đau<br />
              cũng như ghép xương
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-[#f3f6fb] rounded-[24px] overflow-hidden w-full">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8f9fa]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-[#006aff] flex items-center justify-center rounded-lg w-10 h-10">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-6">
                <p className="font-semibold leading-[1.6] text-[15px] text-black tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

