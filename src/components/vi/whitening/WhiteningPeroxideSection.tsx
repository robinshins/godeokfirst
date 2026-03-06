'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhiteningPeroxideSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
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
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Tẩy trắng răng chuyên nghiệp tại nha khoa<br />
              Tẩy trắng bằng Hydrogen Peroxide
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Trải nghiệm tẩy trắng an toàn và hiệu quả với thuốc tẩy trắng nồng độ cao chuyên dụng trong y tế
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 오스템 뷰티스 미백제 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Hệ thống tẩy trắng Osstem Beautis
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                Hệ thống tẩy trắng chuyên nghiệp cao cấp từ Osstem - tập đoàn implant số 1 Hàn Quốc
              </p>

              {/* 뷰티스 미백제 이미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Thuốc tẩy trắng Osstem Beautis"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 뷰티스 라이트 기기 이미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="Thiết bị đèn Beautis Light của Osstem"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Thuốc tẩy trắng Beautis 15:</span> 15% Hydrogen Peroxide + hoạt chất đặc biệt giúp trắng nhanh
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> Tối đa hóa hiệu quả tẩy trắng bằng tia LED cường độ cao (150-220mW/cm²)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Chứa chất chống nhạy cảm:</span> Công thức an toàn giúp giảm thiểu tình trạng ê buốt
                  </p>
                </div>
              </div>
            </div>

            {/* 시술 원리 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Nguyên lý thực hiện
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Hydrogen Peroxide nồng độ cao chuyên dụng (15%) thẩm thấu qua lớp men răng để oxy hóa và phân hủy các phân tử gây màu bên trong ngà răng<br />
                  Trong quá trình này, các chất gây màu chuyển thành các phân tử nhỏ không màu, giúp răng trắng sáng tự nhiên
                </p>
                {/* H2O2 반응 이미지 */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Nguyên lý tẩy trắng bằng Hydrogen Peroxide"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 시술 과정 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Quy trình thực hiện
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'Bôi chất bảo vệ nướu (Ngăn ngừa tổn thương nướu)',
                    'Bôi thuốc tẩy trắng nồng độ cao',
                    'Chiếu đèn LED (15-20 phút)',
                    'Lặp lại 2-3 lần (Hoàn tất trong ngày)',
                    'Kết thúc bằng việc bôi Fluoride'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#006aff] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre-line">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'KHÔNG mài răng', desc: 'Không làm hỏng men răng' },
                { title: 'Hiệu quả tức thì', desc: 'Trắng lên 2-8 cấp độ ngay sau khi thực hiện' },
                { title: 'Màu sắc tự nhiên', desc: 'Nâng tông màu răng gốc' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre-line">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* 전문가 미백 vs 셀프 미백 */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              Tại sao nên chọn tẩy trắng chuyên nghiệp?
            </h3>

            {/* 안전성 검증 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Độ an toàn được các bác sĩ nha khoa toàn thế giới công nhận
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                Điều trị tẩy trắng là phương pháp điều trị răng an toàn nhất được các bác sĩ nha khoa trên toàn thế giới công nhận. Độ an toàn đã được chứng minh qua nhiều nghiên cứu và lâm sàng. Tẩy trắng chuyên nghiệp được thực hiện dưới sự giám sát của bác sĩ cho đến nay hầu như không ghi nhận tác dụng phụ nào đối với răng.
              </p>
            </div>

            {/* 효과 차이 */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white text-center">Tẩy trắng chuyên nghiệp</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582] text-center">Tẩy trắng tại nhà</p>
                </div>

                {/* 농도 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Nồng độ cao 15%</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Dùng trong y tế, được KFDA cấp phép</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Nồng độ thấp 1-4%</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Hiệu quả kém</p>
                </div>

                {/* 효과 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Chỉ trong một ngày</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Trắng lên 3-4 cấp độ</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Trên 4 tuần</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Hiệu quả chậm và ít</p>
                </div>

                {/* 안전성 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">Khám khoang miệng trước</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ Bôi Fluoride</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Tự thực hiện</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Nguy cơ bỏng nướu</p>
                </div>
              </div>
            </div>

            {/* 부작용 최소화 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Quản lý tác dụng phụ bài bản
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Khám trước khi thực hiện:</span> Kiểm tra sâu răng, bệnh nướu để tiến hành an toàn
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Bảo vệ nướu:</span> Ngăn ngừa 100% bỏng mô mềm bằng chất bảo vệ chuyên dụng
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Chăm sóc sau khi thực hiện:</span> Giảm thiểu ê buốt bằng cách bôi Fluoride/tái khoáng hóa
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">Giám sát bởi chuyên gia:</span> Theo dõi tình trạng thời gian thực để tẩy trắng an toàn
                  </p>
                </div>
              </div>
            </div>

            {/* 임상 경험 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Kinh nghiệm lâm sàng phong phú
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">Với kinh nghiệm hơn 1.000 ca tẩy trắng</span>, chúng tôi sở hữu bí quyết xử lý đa dạng tình trạng răng. Chúng tôi lập kế hoạch tẩy trắng tùy chỉnh dựa trên mức độ xỉn màu, độ nhạy cảm của răng và các phục hình hiện có.
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Câu hỏi thường gặp
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: 'Răng có bị ê buốt sau khi tẩy trắng không?',
                  answer: 'Có thể có cảm giác ê buốt nhẹ tạm thời, nhưng thuốc tẩy trắng Beautis chứa chất chống nhạy cảm nên giảm thiểu tối đa tình trạng này. Sau khi thực hiện, chúng tôi bôi Fluoride và tái khoáng hóa để giảm thêm độ nhạy cảm, hầu hết sẽ biến mất trong vài ngày. Với hơn 10 năm kinh nghiệm lâm sàng, chúng tôi tiến hành an toàn phù hợp với tình trạng răng của từng bệnh nhân.'
                },
                {
                  question: 'Hiệu quả tẩy trắng kéo dài bao lâu?',
                  answer: 'Hiệu quả của tẩy trắng chuyên nghiệp thường kéo dài trên 1-2 năm. Thời gian này khác nhau tùy vào thói quen ăn uống, hút thuốc và tình trạng chăm sóc răng miệng của mỗi người. Nếu thường xuyên dùng thực phẩm gây màu như cà phê, rượu vang, cà ri hoặc hút thuốc, thời gian duy trì hiệu quả có thể ngắn lại. Lấy cao răng định kỳ và đánh răng đúng cách sẽ giúp duy trì hiệu quả tẩy trắng lâu hơn.'
                },
                {
                  question: 'Nếu răng bị xỉn màu lại thì có thể làm lại không?',
                  answer: 'Có, bạn hoàn toàn có thể làm lại. Chúng tôi khuyên bạn nên làm lại sau khoảng 6 tháng đến 1 năm kể từ lần tẩy trắng đầu tiên, và kết quả có thể đạt được với thời gian ngắn hơn và số lần ít hơn so với lần đầu. Thủ thuật tẩm bổ (touch-up) định kỳ giúp duy trì hàm răng sáng bóng, và chi phí cũng rẻ hơn so với lần đầu.'
                },
                {
                  question: 'Có lưu ý gì sau khi tẩy trắng không?',
                  answer: 'Trong vòng 24-48 giờ sau khi tẩy trắng, vui lòng tránh thực phẩm gây màu (cà phê, rượu vang, cà ri, kim chi, socola, v.v.) và thuốc lá. Đây là thời điểm các lỗ li ti trên bề mặt răng đang mở nên rất dễ bị bám màu. Ngoài ra, hãy cẩn thận với đồ ăn quá lạnh hoặc quá nóng vì có thể gây ê buốt tạm thời, và chúng tôi khuyên bạn nên dùng kem đánh răng chứa Fluoride.'
                },
                {
                  question: 'Các phục hình hiện có (mão răng, resin) có trắng lên không?',
                  answer: 'Không, các phục hình nhân tạo không trắng lên được. Thuốc tẩy trắng Hydrogen Peroxide chỉ phân hủy các chất gây màu trên răng thật, vì vậy các phục hình như mão răng, resin, veneer sẽ giữ nguyên màu cũ. Do đó, nếu bạn có phục hình, màu sắc giữa chúng và răng thật sau khi tẩy trắng có thể khác nhau, và bạn có thể cần cân nhắc thay thế phục hình. Bạn sẽ được hướng dẫn chính xác thông qua tư vấn trước khi thực hiện.'
                },
                {
                  question: 'Đang mang thai hoặc cho con bú có tẩy trắng được không?',
                  answer: 'Chúng tôi không khuyến khích tẩy trắng khi đang mang thai hoặc cho con bú. Do chưa có đủ nghiên cứu về ảnh hưởng của Hydrogen Peroxide đối với thai nhi hoặc sữa mẹ, để đảm bảo an toàn, bạn nên thực hiện sau khi kết thúc giai đoạn mang thai và cho con bú.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f3f6fb] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-5 flex items-start justify-between gap-3 text-left hover:bg-[#e9ebf1] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#006aff] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#006aff] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#006aff] font-bold text-[16px] shrink-0">A.</span>
                        <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

