import Image from 'next/image';

export default function CaseStudySection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[60px]">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex flex-col gap-8 items-center w-full">

          {/* Title */}
          <div className="flex flex-col gap-3 items-center text-center w-full">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Clinical Case
            </p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Trường hợp tẩy trắng thực tế
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Đây là trường hợp thực tế của Godeok First Dental thực hiện bằng Hệ thống Osstem Beautis
            </p>
          </div>

          {/* Case Card 1 */}
          <div
            className="bg-white rounded-[24px] w-full overflow-hidden"
            style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)' }}
          >
            <div className="p-5 flex flex-col gap-4">
              {/* Before */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/임상사진/미백/양해영_미백_before.jpg"
                    alt="Trước tẩy trắng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Before
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/임상사진/미백/양해영_미백_after.jpg"
                    alt="Sau tẩy trắng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#008095] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    After
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-bold text-[16px] text-black tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Tẩy trắng chuyên gia Osstem Beautis · Yang●●
                </p>
                <p className="font-semibold text-[14px] text-[#727582] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Hoàn thành 1~2 giờ trong ngày · Bao gồm chất chống ê buốt · Giảm thiểu ê buốt
                </p>
              </div>
            </div>
          </div>

          {/* Case Card 2 */}
          <div
            className="bg-white rounded-[24px] w-full overflow-hidden"
            style={{ boxShadow: '0 4px 20px -4px rgba(21,26,36,0.08)' }}
          >
            <div className="p-5 flex flex-col gap-4">
              {/* Before */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/임상사진/안동건_미백/안동건_미백_before.jpg"
                    alt="Trước tẩy trắng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#292a2f] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Before
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="relative w-full">
                <div className="bg-[#f3f6fb] h-[220px] overflow-hidden relative rounded-[20px] w-full">
                  <Image
                    src="/임상사진/안동건_미백/안동건_미백_after.jpg"
                    alt="Sau tẩy trắng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-3 top-3 bg-[#008095] px-2.5 py-[5px] rounded-[10px] z-10">
                  <p className="font-semibold text-[13px] leading-[1.4] text-white tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    After
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5 pt-2">
                <p className="font-bold text-[16px] text-black tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Tẩy trắng chuyên gia · An●●
                </p>
                <p className="font-semibold text-[14px] text-[#727582] leading-[1.5]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Tiến hành tẩy trắng chuyên gia 2 tuần · Thay đổi tông màu tự nhiên và sáng
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
