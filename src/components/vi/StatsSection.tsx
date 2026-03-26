'use client';

import Image from 'next/image';

export default function StatsSection() {
  return (
    <div className="bg-gradient-to-b from-[#21314E] from-[0.541%] to-white w-full relative">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/stats-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              {/* Logo */}
              <div className="h-11 overflow-hidden relative shrink-0">
                <Image
                  src="/고덕퍼스트치과-로고-(화트).png"
                  alt="Godeok First Dental"
                  width={375}
                  height={84}
                  className="h-20 w-auto object-contain -mt-[18px]"
                />
              </div>

              {/* Title */}
              <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-center text-white tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Được điều trị bởi<br />
                bác sĩ đào tạo các bác sĩ nha khoa
              </h2>

              {/* Subtitle */}
              <p className="font-semibold leading-[1.4] not-italic text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Bác sĩ trưởng từng là giáo sư bệnh viện đại học<br />
                trực tiếp tư vấn và chịu trách nhiệm đến cùng
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            {/* Card 1: Chuyên gia trực tiếp khám */}
            <div className="bg-white box-border flex flex-col gap-5 items-center px-5 py-8 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[48px] text-center text-nowrap tracking-[-2.88px] text-[#008095]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Bệnh viện đại học
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Từng là giáo sư thỉnh giảng
                </p>
                <p className="text-[15px] text-[#5d5f6d] text-center leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Bác sĩ trưởng từng là giáo sư bệnh viện đại học<br />
                  trực tiếp tư vấn, phẫu thuật và chịu trách nhiệm đến cùng
                </p>
              </div>
            </div>

            {/* Card 2: Số ca Phẫu thuật cấy ghép Implant */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[72px] text-center text-nowrap tracking-[-2.88px] text-[#008095]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  1,200 +
                </p>
                <p className="font-bold leading-[1] text-[#008095] text-2xl tracking-[-0.48px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ca
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center w-full">
                <p className="text-sm text-[#5d5f6d] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Sử dụng phân tích máy tính
                </p>
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Kinh nghiệm phẫu thuật Implant kỹ thuật số
                </p>
              </div>
            </div>

            {/* Card 3: Nhổ răng khôn */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[72px] text-center text-nowrap tracking-[-2.88px] text-[#008095]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  2,000 +
                </p>
                <p className="font-bold leading-[1] text-[#008095] text-2xl tracking-[-0.48px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  ca
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center w-full">
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Kinh nghiệm nhổ răng khôn
                </p>
              </div>
            </div>

            {/* Card 4: Bộ Y tế Phúc lợi chứng nhận */}
            <div className="bg-white box-border flex flex-col gap-5 items-center px-5 py-8 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p
                  className="font-bold leading-[1] not-italic text-[48px] text-center text-nowrap tracking-[-2.88px] text-[#008095]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Bộ Y tế Phúc lợi
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center w-full">
                <p className="font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] text-center tracking-[-0.44px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Chuyên gia Nha khoa Tổng hợp được chứng nhận
                </p>
                <p className="text-[15px] text-[#5d5f6d] text-center leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Implant, Điều trị tủy, Điều trị nướu, Phục hình, v.v.<br />
                  Khám toàn diện tất cả các lĩnh vực
                </p>
              </div>
            </div>

            {/* Phần mô tả */}
            <div className="bg-[#f8f9fb] box-border flex flex-col gap-4 items-start px-5 py-6 relative rounded-2xl shrink-0 w-full mt-2">
              <p className="font-bold text-[18px] text-[#37373e] leading-[1.4]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Chuyên gia Nha khoa Tổng hợp là gì?
              </p>
              <div className="flex flex-col gap-3 text-[15px] text-[#5d5f6d] leading-[1.6]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p>
                  Implant, Điều trị tủy, Phục hình, Điều trị nướu, v.v.<br />
                  Có thể khám toàn diện tất cả các lĩnh vực nha khoa<br />
                  được Bộ Y tế Phúc lợi chứng nhận chuyên gia.
                </p>
                <p className="text-[#008095] font-medium">
                  Godeok First Dental Bác sĩ trưởng trực tiếp tư vấn,<br />
                  trực tiếp phẫu thuật, đến chăm sóc sau điều trị chịu trách nhiệm đến cùng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
