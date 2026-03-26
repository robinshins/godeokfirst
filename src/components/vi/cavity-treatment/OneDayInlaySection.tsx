'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'Không cần lấy dấu khó chịu',
      description: 'Quét 3D siêu tốc thay vì vật liệu lấy dấu dính\nthu thập hình dạng răng thoải mái'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Phục hình chính xác theo yêu cầu',
      description: 'Chế tạo inlay giảm thiểu sai số\ndựa trên dữ liệu số'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Phòng lab chuyên nghiệp đã kiểm chứng',
      description: 'Chế tạo phục hình gốm chất lượng cao\ntại phòng lab chuyên nghiệp do bác sĩ trực tiếp chọn lọc'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Với scan số Trios5<br />
          chính xác hơn
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Với quét 3D không cần lấy khuôn khó chịu<br />
          Chế tạo tùy chỉnh inlay·mão răng
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* 트리오스5 디지털 스캔 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/트리오스5.jpg"
              alt="Máy quét miệng Trios5"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Máy quét miệng Trios5
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Quét 3D siêu nhanh không cần chất lấy dấu dính với máy quét miệng mới nhất của 3Shape<br />
              <br />
              Lấy dấu chính xác hình dạng răng không sai số ngay cả trong môi trường miệng ẩm để chế tạo inlay khít hơn
            </p>
          </div>
        </div>

        {/* 실제 케스 - 스캐너 사용 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/cases/충치치료/inlay제거sau스캔채득.jpg"
              alt="Quét lấy dấu sau khi loại bỏ inlay"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Quét ngay sau điều trị
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Thực hiện quét miệng ngay sau khi hoàn thành loại bỏ sâu răng và tạo hình<br />
              <br />
              Truyền dữ liệu quét đến phòng lab chuyên nghiệp để hoàn thành inlay tùy chỉnh chính xác
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#e6f7f8] rounded-2xl flex items-center justify-center">
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
