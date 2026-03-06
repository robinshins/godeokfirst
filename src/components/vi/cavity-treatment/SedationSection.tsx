'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SedationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      image: '/images/monitoring-equipment.jpg',
      alt: 'Thiết bị giám sát bệnh nhân',
      title: 'Thiết bị giám sát bệnh nhân',
      objectFit: 'object-cover'
    },
    {
      image: '/images/sedation-dental-cpr.png',
      alt: 'Chứng chỉ hồi sức cấp cứu chuyên khoa nha khoa',
      title: 'Chứng chỉ hồi sức cấp cứu chuyên khoa nha khoa',
      objectFit: 'object-contain'
    },
    {
      image: '/images/sedation-certificate-overseas.png',
      alt: 'Chứng chỉ hoàn thành đào tạo chuyên môn',
      title: 'Chứng chỉ hoàn thành đào tạo chuyên môn',
      objectFit: 'object-contain'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % certifications.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <div className="bg-[#f8f9fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {/* Main Title */}
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.3] tracking-[-0.72px] text-black text-center w-full">
              Điều trị nha khoa,<br />
              liệu có đau không?
            </h2>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[#d4a574] to-[#c8955e] px-8 py-5 rounded-2xl w-full shadow-lg">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Pretendard_JP'] font-semibold text-[18px] leading-[1.4] tracking-[-0.36px] text-white/90">
                  Hãy điều trị trong khi ngủ
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.2] tracking-[-0.64px] text-white">
                  với liệu pháp an thần tỉnh
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* What is 의식하진정요법 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                  Liệu pháp an thần tỉnh là gì?
                </h3>
                <div className="bg-[#f3f6fb] p-5 rounded-2xl w-full">
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    Đây là phương pháp điều trị mà bạn sẽ được thực hiện thủ thuật trong trạng thái hơi buồn ngủ và không nhớ rõ những gì đã xảy ra trong quá trình thực hiện.
                    <br /><br />
                    Vì nó giúp bạn giải tỏa căng thẳng một cách thoải mái trong khi vẫn giữ được ý thức, bạn có thể biểu đạt tình trạng của mình và phản ứng trong quá trình điều trị, do đó rất an toàn.
                  </p>
                </div>
              </div>

              {/* 안전성 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    Tính an toàn
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'Thực hiện thủ thuật trong khi vẫn duy trì ý thức',
                    'Bác sĩ chuyên khoa kiểm tra huyết áp, mạch đập, nồng độ oxy trong máu',
                    'Sử dụng các loại thuốc được công nhận trên toàn thế giới',
                    'Vì không phải là gây mê toàn thân nên di chứng và tác dụng phụ cực kỳ thấp',
                    'Có sẵn thuốc giải giúp bạn có thể tỉnh lại bất cứ lúc nào',
                    'Phòng ngừa trước những cử động đột ngột do sợ hãi và lo lắng trong quá trình điều trị nha khoa'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-blue.svg"
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

              {/* 편안함 */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#006aff] rounded-full" />
                  <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-black">
                    Sự thoải mái
                  </h4>
                </div>
                <div className="flex flex-col gap-3 items-start w-full">
                  {[
                    'Có thể thực hiện liệu pháp an thần bằng một mũi tiêm đơn giản',
                    'Sau khi kết thúc thủ thuật, chỉ còn lại cảm giác thoải mái',
                    'Chỉ còn lại những ký ức thoải mái và ổn định, giúp bạn tự tin hơn trong việc điều trị nha khoa',
                    'Chi phí thấp và có thể thực hiện thủ thuật đơn giản'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="shrink-0 w-5 h-5 mt-0.5">
                        <Image
                          src="/icons/check-blue.svg"
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
              <div className="bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl w-full border border-[#006aff]/20">
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff]">
                    💡 Liệu pháp đặc biệt không phải ai cũng làm được
                  </p>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                    Liệu pháp an thần tỉnh không phải là một phương pháp điều trị đơn giản. <span className="font-bold text-[#006aff]">Đây là phương pháp chuyên môn</span> chỉ có thể được thực hiện tại các nha khoa có đội ngũ y tế đã qua đào tạo chuyên nghiệp, cùng với trang thiết bị giám sát bệnh nhân và thiết bị cấp cứu.
                  </p>
                </div>
              </div>

              {/* 전문 장비 및 자격 - 자동 전환 탭 */}
              <div className="flex flex-col gap-4 items-start w-full pt-2">
                {/* 이미지 영역 */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        activeTab === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        className={cert.objectFit}
                      />
                    </div>
                  ))}
                </div>

                {/* 탭 인디케이터 */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex gap-2 justify-center w-full">
                    {certifications.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeTab === index
                            ? 'w-8 bg-[#006aff]'
                            : 'w-1.5 bg-[#d1d5db]'
                        }`}
                        aria-label={`${index + 1}번째 이미지`}
                      />
                    ))}
                  </div>

                  {/* 제목 */}
                  <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center">
                    {certifications[activeTab].title}
                  </p>
                </div>
              </div>

              {/* 마취 진행 과정 */}
              <div className="flex flex-col gap-4 items-start w-full pt-4">
                <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.35] tracking-[-0.4px] text-black">
                  Quy trình gây tê
                </h4>
                <div className="flex flex-col gap-4 w-full">
                  {/* Step 1: 도포/가글마취 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">1</span>
                      </div>
                      <div className="w-0.5 h-12 bg-[#e9ebf1]" />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        Gây tê bề mặt/Súc miệng
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Gây tê bề mặt để loại bỏ cảm giác đau<br />
                        từ mũi tiêm trước khi gây tê
                      </p>
                    </div>
                  </div>

                  {/* Step 2: 통증완화 전동마취기 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
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
                        để giảm thiểu đau đớn
                      </p>
                    </div>
                  </div>

                  {/* Step 3: 신경관마취기 */}
                  <div className="flex gap-4 items-start w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#006aff] flex items-center justify-center">
                        <span className="font-['Pretendard_JP'] font-bold text-white text-lg">3</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 pt-2">
                      <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.4] tracking-[-0.34px] text-black">
                        Máy gây tê ống thần kinh
                      </p>
                      <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]">
                        Gây tê trực tiếp gần dây thần kinh để<br />
                        hoàn tất quá trình điều trị giảm đau hoàn hảo
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

