'use client';

import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 top-[149px] w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                Sự khác biệt giữa Tẩy trắng tại nhà và<br />
                Tẩy trắng chuyên nghiệp tại nha khoa
              </h2>
              <div className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                <p className="mb-0">
                  Thuốc tẩy trắng tại nha khoa sử dụng <span className="text-[#006aff]">Hydrogen Peroxide nồng độ cao được phân loại là dược phẩm</span>
                </p>
                <p className="mb-0 whitespace-pre-line">
                  Vì có thể gây tổn thương nếu chạm vào nướu, nên <span className="text-[#006aff]">chuyên gia sẽ thực hiện sau khi có các biện pháp bảo vệ hoàn hảo</span>, giúp quy trình an toàn hơn nhiều và mang lại hiệu quả tức thì
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 w-full">
            {/* Card 1: 셀프 치아 미백 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      Tẩy trắng răng tại nhà
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'Thuốc tẩy nồng độ thấp', desc: 'Là dược phẩm thông thường,\nhiệu quả bị hạn chế' },
                      { title: 'Hiệu quả chậm', desc: 'Mất từ vài tuần đến vài tháng' },
                      { title: 'Nguy cơ an toàn', desc: 'Có thể làm hỏng nướu nếu dùng sai cách' },
                      { title: 'Kết quả không đồng đều', desc: 'Hiệu quả trắng sáng không đều' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#FF1616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre-line">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 치과 전문가 미백 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      Tẩy trắng chuyên nghiệp tại nha khoa
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: 'Dược phẩm nồng độ cao', desc: 'Hiệu quả mạnh mẽ với\nHydrogen Peroxide chuyên dụng' },
                      { title: 'Hiệu quả tức thì', desc: 'Thay đổi rõ rệt trong vòng 1-3 giờ' },
                      { title: 'An toàn tuyệt đối', desc: 'Ngăn ngừa tổn thương bằng\ncác biện pháp bảo vệ nướu' },
                      { title: 'Trắng sáng đồng đều', desc: 'Thực hiện tỉ mỉ bởi chuyên gia' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre-line">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

