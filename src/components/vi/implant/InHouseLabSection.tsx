'use client';

import Image from 'next/image';

export default function InHouseLabSection() {
  const benefits = [
    {
      icon: '/icons/shield.svg',
      title: 'Răng tạm cường độ cao nhất',
      description: 'Với vật liệu đặc biệt từ đối tác độc quyền\nNgay sau phẫu thuậtcó thể ăn uống bình thường'
    },
    {
      icon: '/icons/tooth-xray-spot.svg',
      title: 'Thay thế ngay khi hỏng',
      description: 'Không lo lắng ngay cả khi hỏng có thể xảy ra\nThay thế ngay tại phòng lab nội bộ'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Không ngày nào thiếu răng',
      description: 'Ngay sau phẫu thuật đến lắp phục hình cuối, không có ngày nào phải sống thiếu răng'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Phục hình ngay<br />
          Hệ thống Implant
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Với quy trình kỹ thuật số và phòng lab nội bộ kỹ thuật số <br />
        hướng đến chế tạo phục hình nhanh.<br />
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Fast and Precise Prosthetics */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Chế tạo phục hình nhanh và tinh xảo"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Chế tạo phục hình nhanh và tinh xảo
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Bác sĩ trưởng với kinh nghiệm lâm sàng phong phú, cung cấp khám thoải mái và sử dụng máy milling để trực tiếp chế tạo phục hình<br />
              <br />
              Sau chế tạo, kiểm tra thêm lần nữa xem có khó chịu hay tác dụng phụ không, tiếp tục chăm sóc sau điều trị và nỗ lực hết sức để nâng cao sự hài lòng của bệnh nhân
            </p>
          </div>
        </div>

        {/* Without In-House Lab */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="Nếu không có phòng lab nội bộ?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Nếu không có phòng lab nội bộ?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Nếu không có phòng lab nội bộ, phải ủy thác chế tạo phục hình cho phòng lab bên ngoài nên mất nhiều thời gian<br />
              <br />
              Có nhược điểm là phiền phức khi phải gửi lại bên ngoài để phản ánh quá trình chế tạo và sửa chữa, và khó thực hiện sửa chữa tinh vi
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
