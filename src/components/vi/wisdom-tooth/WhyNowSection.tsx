'use client';

import Image from 'next/image';

export default function WhyNowSection() {
  const problems = [
    {
      title: 'Viêm cấp tính',
      description: 'Đau dữ dội và sưng mặt'
    },
    {
      title: 'Sâu răng lân cận',
      description: 'Làm hỏng cả răng bên cạnh'
    },
    {
      title: 'Rối loạn khớp thái dương hàm',
      description: 'Đau đầu mãn tính và đau hàm'
    },
    {
      title: 'Lệch lạc hàm răng',
      description: 'Cần phải điều trị chỉnh nha'
    }
  ];

  const benefits = [
    {
      title: 'Hồi phục nhanh',
      description: 'Càng trẻ tốc độ hồi phục càng nhanh'
    },
    {
      title: 'Phòng ngừa biến chứng',
      description: 'An toàn hơn khi chưa bị viêm'
    },
    {
      title: 'Tiết kiệm chi phí',
      description: 'Xử lý trước khi phát sinh vấn đề'
    },
    {
      title: 'Thủ thuật thoải mái',
      description: 'Thuốc tê ngấm tốt hơn khi không bị viêm'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0b1727] from-[0.541%] to-white w-full py-[60px] px-4 relative">
      {/* Background gradient ellipse */}
      <div className="absolute left-1/2 top-[217.35px] -translate-x-1/2 w-[480px] h-[711px] pointer-events-none">
        <Image
          src="/images/ellipse-gradient.svg"
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
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-white text-center">
                Tại sao nên nhổ ngay bây giờ?
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Problems Card */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <div className="flex gap-2 items-center w-[264px]">
                  <p className="flex-1 font-bold text-[22px] length-[1.35] tracking-[-0.48px] text-black text-center">
                    Các vấn đề phát sinh khi bỏ mặc răng khôn
                  </p>
                </div>

                <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0">
                        <Image
                          src="/icons/x-icon.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">
                          {problem.title}
                        </p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full overflow-hidden">
              <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                <div className="flex gap-2 items-center w-[264px]">
                  <p className="flex-1 font-bold text-[22px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                    Ưu điểm của việc nhổ răng sớm
                  </p>
                </div>

                <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] items-start w-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start w-full">
                      <div className="w-6 h-6 relative shrink-0">
                        <Image
                          src="/icons/check-icon.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] text-black">
                          {benefit.title}
                        </p>
                        <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#006aff] rounded-[24px] p-6 flex flex-col gap-5 items-center justify-center text-center text-white w-full">
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] whitespace-pre-line">
                {'Có nhiều người cứ chịu đựng mãi\ncho đến khi phải đi cấp cứu'}
              </h3>
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.34px] opacity-80 whitespace-pre-line">
                {'Hàng tuần đều có những bệnh nhân phải tìm đến phòng cấp cứu vào rạng sáng do viêm nhiễm nghiêm trọng. Nhổ răng sớm có thể giúp bạn ngăn ngừa những nỗi đau này.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

