'use client';

import Image from 'next/image';

export default function InHouseLabSection() {
  const benefits = [
    {
      icon: '/icons/shield.svg',
      title: 'Răng tạm với độ bền tối đa',
      description: 'Với vật liệu đặc biệt từ quan hệ đối tác độc quyền, bạn có thể ăn uống bình thường ngay sau khi phẫu thuật'
    },
    {
      icon: '/icons/tooth-xray-spot.svg',
      title: 'Thay thế ngay lập tức nếu bị hỏng',
      description: 'Không cần lo lắng về những hỏng hóc có thể xảy ra. Chúng tôi sẽ thay thế ngay lập tức tại phòng lab trong nha khoa'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Không có ngày nào thiếu răng',
      description: 'Từ ngay sau khi phẫu thuật cho đến khi lắp phục hình cuối cùng, không có một ngày nào bạn phải sống mà thiếu răng'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Hệ thống Implant<br />
          phục hình tức thì
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Chúng tôi hướng tới việc sản xuất phục hình nhanh chóng với quy trình kỹ thuật số và phòng lab kỹ thuật số ngay tại nha khoa.<br />
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Fast and Precise Prosthetics */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Sản xuất phục hình nhanh chóng và tinh xảo"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Sản xuất phục hình nhanh chóng và tinh xảo
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Bác sĩ trưởng cung cấp dịch vụ điều trị thoải mái dựa trên kinh nghiệm lâm sàng phong phú và trực tiếp sản xuất phục hình bằng máy phay kỹ thuật số<br />
              <br />
              Sau khi sản xuất, chúng tôi kiểm tra lại một lần nữa xem có sự khó chịu hay tác dụng phụ nào không, đồng thời quản lý liên tục sau khi điều trị để nỗ lực nâng cao mức độ hài lòng của bệnh nhân
            </p>
          </div>
        </div>

        {/* Without In-House Lab */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="Nếu không có phòng lab tại nha khoa?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Nếu không có phòng lab tại nha khoa?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Nếu không có phòng lab tại nha khoa, việc yêu cầu sản xuất phục hình tại các phòng lab bên ngoài sẽ mất nhiều thời gian<br />
              <br />
              Có những nhược điểm như sự phiền phức khi phải gửi ra ngoài một lần nữa để phản hồi quá trình sản xuất và chỉnh sửa, cũng như khó khăn trong việc chỉnh sửa các chi tiết nhỏ
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

