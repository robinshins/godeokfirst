'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const stats = [
    { number: '90', unit: '% loại bỏ', label: 'Ức chế vi khuẩn có hại và màng sinh học (Biofilm)' },
    { number: '0', unit: 'ca', label: 'Phẫu thuật lại trong 10 năm' },
    { number: '+300', unit: '% tăng', label: 'Khả năng tự chữa lành viêm nướu' },
    { number: '80', unit: '% ức chế', label: 'Thành phần VSC gây hôi miệng' }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/icons/Logo.svg"
              alt="Nha khoa Medis Kyungsungdae"
              width={168}
              height={24}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Nha khoa Medis cũng có sự quản lý<br />
              khác biệt sau khi cấy ghép implant
            </h2>
            <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Sự khác biệt của việc quản lý hậu phẫu thực sự làm thay đổi kết quả sau 10 năm
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
          {/* Bacteria Therapy Card */}
          <div className="flex flex-col items-center overflow-hidden rounded-xl relative shrink-0 w-full">
            <div className="h-[241.57px] relative shrink-0 w-full">
              <Image
                src="/images/bacteria-therapy-detail.png"
                alt="Liệu pháp vi khuẩn răng miệng"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white box-border flex flex-col gap-5 items-start p-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-2xl text-black tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Liệu pháp vi khuẩn răng miệng
              </p>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Chương trình phòng ngừa mới nhất sử dụng men vi sinh để ức chế vi khuẩn có hại và điều chỉnh sự cân bằng vi khuẩn trong khoang miệng
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <div key={index} className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="font-bold leading-normal not-italic text-center text-nowrap" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <span
                  className="text-[72px] tracking-[-2.88px]"
                  style={{
                    background: 'linear-gradient(to bottom, #006aff 0%, #0050c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {stat.number}
                </span>
                <span className="text-2xl text-[#006aff] tracking-[-0.48px] ml-2">
                  {stat.unit}
                </span>
              </div>
              <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

