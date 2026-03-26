'use client';

import Image from 'next/image';

export default function SedationSection() {

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'Thiết bị giám sát bệnh nhân',
      title: 'Thiết bị giám sát bệnh nhân',
      objectFit: 'object-cover'
    }
  ];


  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Main Title */}
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              Điều trị nha khoa,<br />
              có đau không?
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  Với an thần có ý thức
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  hãy điều trị trong giấc ngủ
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* What is 의식하진chính요법 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  An thần có ý thức là gì?
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    Bạn sẽ nhận điều trị trong trạng thái hơi buồn ngủ, và là phương pháp điều trị khiến bạn không nhớ rõ những gì xảy ra trong quá trình.
                    <br /><br />
                    Vì giúp thư giãn thoải mái trong trạng thái có ý thức nên trong điều trị bạn có thể biểu đạt và phản ứng với tình trạng của mình, rất an toàn.
                  </p>
                </div>
              </div>

              {/* An toàn */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    An toàn
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'Thực hiện trong trạng thái duy trì ý thức',
                    'Chuyên gia kiểm tra huyết áp, mạch, độ bão hòa oxy',
                    'Sử dụng thuốc được thế giới công nhận',
                    'Không phải gây mê toàn thân nên di chứng và tác dụng phụ rất thấp',
                    'Trang bị thuốc đảo ngược để có thể tỉnh bất cứ lúc nào',
                    'Phòng ngừa cử động đột ngột do sợ hãi và lo lắng trong điều trị nha khoa'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sự thoải mái */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#008095] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    Sự thoải mái
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'Có thể an thần bằng tiêm đơn giản',
                    'Sau khi hoàn thành chỉ còn cảm giác thoải mái trong quá trình',
                    'Chỉ còn ký ức thoải mái và ổn định, tạo tự tin cho điều trị nha khoa',
                    'Chi phí thấp và có thể thực hiện đơn giản'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-teal.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#2d3643]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 특별함 강조 */}
              <div className="bg-gradient-to-r from-[#008095]/10 to-[#006d80]/10 p-5 rounded-2xl w-full border border-[#008095]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#008095]">
                    💡 Điều trị đặc biệt không phải ai cũng làm được
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    An thần có ý thức không phải là điều trị đơn giản. Là phương pháp điều trị chuyên nghiệp chỉ có thể thực hiện tại nha khoa trang bị <span className="font-bold text-[#008095]">đội ngũ y tế được đào tạo chuyên môn</span> và <span className="font-bold text-[#008095]">Thiết bị giám sát bệnh nhân, thiết bị cấp cứu</span>.
                  </p>
                </div>
              </div>

              {/* Thiết bị chuyên dụng */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={certifications[0].image}
                    alt={certifications[0].alt}
                    fill
                    className={certifications[0].objectFit}
                  />
                </div>
                <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center w-full">
                  {certifications[0].title}
                </p>
              </div>

              {/* Quy trình gây tê */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  Quy trình gây tê
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: Gây tê bôi/súc miệng */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        Gây tê bôi/súc miệng
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Đau kim tiêm trước gây tê<br />
                        Gây tê bề mặt để loại bỏ
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Máy gây tê điện tử giảm đau */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">2</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        Máy gây tê điện tử giảm đau
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Máy tính tự động điều chỉnh tốc độ tiêm<br />
                        Giảm thiểu đau
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Máy gây tê thần kinh */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#008095] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        Máy gây tê thần kinh
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Gây tê trực tiếp đến dây thần kinh<br />
                        Hoàn thành Điều trị giảm đau hoàn hảo
                      </p>
                    </div>
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
