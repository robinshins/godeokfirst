'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'Hoàn tất điều trị nhanh chóng',
      description: 'Điều trị hoàn tất chỉ trong 1 lần khám, không làm gián đoạn cuộc sống bận rộn của bạn'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Phục hình chính xác',
      description: 'Được sản xuất tùy chỉnh hoàn hảo bằng kỹ thuật quét kỹ thuật số và máy phay'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Có thể sử dụng ngay',
      description: 'Bạn có thể ăn uống bình thường ngay lập tức mà không cần phục hình tạm thời'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Hệ thống Inlay kỹ thuật số<br />
          hoàn tất trong 24 giờ
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Chúng tôi hướng tới việc hoàn tất điều trị nhanh chóng với kỹ thuật quét kỹ thuật số và phòng lab tại nha khoa
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* 디지털 스캔 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Quét kỹ thuật số chính xác"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Quét kỹ thuật số chính xác
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Quét 3D chính xác bằng máy quét khoang miệng để nắm bắt hoàn hảo hình dạng răng của bệnh nhân<br />
              <br />
              Có những nhược điểm như sự phiền phức khi phải gửi ra ngoài một lần nữa để phản hồi quá trình sản xuất và chỉnh sửa, cũng như khó khăn trong việc chỉnh sửa các chi tiết nhỏ
            </p>
          </div>
        </div>

        {/* 밀링머신 제작 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/milling-machine.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Sản xuất bằng máy phay tại nha khoa
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Dựa trên dữ liệu quét kỹ thuật số, máy phay tại nha khoa sẽ mài chính xác các khối sứ chất lượng cao<br />
              <br />
              Thời gian được rút ngắn vì không qua phòng lab bên ngoài, giúp việc điều trị có thể hoàn tất trong vòng 24 giờ
            </p>
          </div>
        </div>

        {/* 원내기공소가 없다면? */}
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
              Việc yêu cầu sản xuất phục hình từ phòng lab bên ngoài sẽ mất ít nhất 5-7 ngày<br />
              <br />
              Bạn phải đến khám nhiều lần, gặp bất tiện khi sử dụng phục hình tạm thời và khó thực hiện các điều chỉnh nhỏ
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#f0f7ff] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
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

