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
              Tẩy trắng chuyên gia nha khoa<br />
              Tẩy trắng hydrogen peroxide
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Với chất tẩy trắng nồng độ cao y tế<br />
              hãy trải nghiệm tẩy trắng an toàn và hiệu quả
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* Chất tẩy trắng Osstem Beautis */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  Hệ thống tẩy trắng Osstem Beautis
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                Hệ thống tẩy trắng chuyên gia cao cấp của Osstem - công ty Implant số 1 Hàn Quốc
              </p>

              {/* Ảnh chất tẩy trắng Beautis */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="Chất tẩy trắng Osstem Beautis"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis Light 기기 hình ảnh */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="Thiết bị Osstem Beautis Light"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Chất tẩy trắng Beautis 15:</span> Hiệu quả tẩy trắng nhanh với 15% hydrogen peroxide + chất hoạt hóa đặc biệt
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light:</span> Tối đa hóa hiệu quả tẩy trắng bằng ánh sáng LED cường độ cao (150-220mW/㎠)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Có chứa chất chống ê buốt:</span> Công thức an toàn giảm thiểu ê buốt
                  </p>
                </div>
              </div>
            </div>

            {/* Nguyên lý thủ thuật */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Nguyên lý thủ thuật
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Hydrogen peroxide nồng độ cao y tế (15%) thấm qua men răng và oxy hóa·phân giải phân tử nhiễm màu bên trong ngà răng<br />
                  Trong quá trình này, chất nhiễm màu được chuyển thành phân tử nhỏ không màu, tự nhiên có răng trắng
                </p>
                {/* Ảnh phản ứng H2O2 */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="Tẩy trắng hydrogen peroxide nguyên lý"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Quy trình thủ thuật */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Quy trình thủ thuật
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    'Bôi chất bảo vệ nướu (phòng tổn thương nướu)',
                    'Bôi chất tẩy trắng nồng độ cao',
                    'Chiếu ánh sáng LED (15-20 phút)',
                    'Lặp lại 2-3 lần (hoàn thành trong ngày)',
                    'Hoàn thành bằng bôi fluor'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#008095] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'KHÔNG mài răng', desc: 'Không tổn thương men răng' },
                { title: 'Hiệu quả tức thì', desc: 'Sáng hơn 2-8 tông ngay sau thủ thuật' },
                { title: 'Màu sắc tự nhiên', desc: 'Nâng tông màu răng tự nhiên' }
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
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
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

          {/* Tẩy trắng chuyên gia vs Tẩy trắng tại nhà */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
              Tại sao phải là tẩy trắng chuyên gia?
            </h3>

            {/* Kiểm chứng an toàn */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5v5c0 4.1 3.1 7.9 7 9 3.9-1.1 7-4.9 7-9V5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  An toàn được nha sĩ toàn thế giới công nhận
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                Tẩy trắng trước điều trị được nha sĩ trên thế giới công nhận là là phương pháp điều trị răng an toàn nhất. Đã được chứng minh an toàn qua nhiều nghiên cứu và lâm sàng, nha sĩ giám sát tiến hành. Tẩy trắng chuyên gia cho đến nay hầu như không có báo cáo tác dụng phụ lên răng.
              </p>
            </div>

            {/* Chênh lệch hiệu quả */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#008095] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">Tẩy trắng chuyên gia</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">Tẩy trắng tại nhà</p>
                </div>

                {/* Nồng độ */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% nồng độ cao</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Y tế được Cục ATTP cấp phép</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% nồng độ thấp</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Hiệu quả nhỏ</p>
                </div>

                {/* Hiệu quả */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">Trong một ngày</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">Sáng hơn 3-4 tông</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4 tuần trở lên</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Hiệu quả nhỏ dần dần</p>
                </div>

                {/* An toàn */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">Kiểm tra miệng trước</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ Xử lý bôi fluor</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">Tự thực hiện</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">Nguy cơ bỏng nướu</p>
                </div>
              </div>
            </div>

            {/* Giảm thiểu tác dụng phụ */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  Quản lý tác dụng phụ có hệ thống
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Kiểm tra trước thủ thuật:</span> Tiến hành an toàn sau khi xác nhận sâu răng, bệnh nướu
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Bảo vệ nướu:</span> Phòng ngừa 100% bỏng mô mềm bằng chất bảo vệ y tế
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Chăm sóc sau thủ thuật:</span> Giảm thiểu ê buốt bằng bôi fluor·tái khoáng hóa
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">Giám sát của chuyên gia:</span> Tẩy trắng an toàn với kiểm tra tình trạng thời gian thực
                  </p>
                </div>
              </div>
            </div>

            {/* Kinh nghiệm lâm sàng */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Kinh nghiệm lâm sàng phong phú
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">Kinh nghiệm hơn 1.000 ca tẩy trắng</span>có kinh nghiệm với nhiều tình trạng răng khác nhau. Tẩy trắng tùy chỉnh xem xét mức độ nhiễm màu, độ nhạy cảm răng, phục hình hiện có để lập kế hoạch.
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
                  question: 'Sau tẩy trắng răng có bị ê buốt không?',
                  answer: 'Có thể có triệu chứng ê buốt nhẹ tạm thời, nhưng chất tẩy trắng Beautis có chứa chất chống ê buốt nên giảm thiểu triệu chứng. Giảm thêm độ nhạy cảm bằng bôi fluor và tái khoáng hóa sau thủ thuật, hầu hết biến mất trong vài ngày. Hơn 10 năm kinh nghiệm lâm sàng, tiến hành an toàn phù hợp với tình trạng răng của từng bệnh nhân.'
                },
                {
                  question: 'Hiệu quả tẩy trắng kéo dài bao lâu?',
                  answer: 'Tẩy trắng chuyên gia hiệu quả thường kéo dài trên 1-2 năm. Có sự khác biệt tùy theo thói quen ăn uống, hút thuốc, tình trạng chăm sóc miệng, nếu thường xuyên ăn thức ăn gây màu như cà phê, rượu vang, cà ri hoặc hút thuốc thì hiệu quả thời gian duy trì có thể ngắn hơn. Với lấy cao răng định kỳ và đánh răng đúng cách, có thể duy trì hiệu quả tẩy trắng lâu hơn.'
                },
                {
                  question: 'Nếu bị nhiễm màu lại có thể tái thủ thuật không?',
                  answer: 'Vâng, có thể tái thủ thuật. Khuyến nghị tái thủ thuật sau khoảng 6 tháng~1 năm kể từ tẩy trắng ban đầu, có thể thấy hiệu quả với thời gian ngắn hơn và ít lần hơn so với thủ thuật ban đầu. Duy trì răng trắng sáng bằng thủ thuật touch-up định kỳ , và chi phí cũng rẻ hơn thủ thuật ban đầu.'
                },
                {
                  question: 'Sau tẩy trắng có lưu ý gì không?',
                  answer: 'Trong 24-48 giờ sau tẩy trắng, hãy tránh thức ăn gây nhiễm màu (cà phê, rượu vang, cà ri, kimchi, socola, v.v.) và thuốc lá. Đây là giai đoạn lỗ nhỏ trên bề mặt răng đang mở nên dễ bị nhiễm màu. Ngoài ra, thức ăn lạnh hoặc nóng có thể gây ê buốt tạm thời nên hãy cẩn thận, khuyến nghị sử dụng kem đánh răng chứa fluor.'
                },
                {
                  question: 'Phục hình hiện có (mão răng, resin) có tẩy trắng được không?',
                  answer: 'Không, phục hình nhân tạo không thể tẩy trắng. Vì chất tẩy trắng hydrogen peroxide chỉ phân giải chất gây màu trên răng tự nhiên, mão răng, resin, Veneer sứ v.v. giữ nguyên màu ban đầu. Do đó, nếu có phục hình, sau tẩy trắng có thể thấy sự khác biệt màu giữa phục hình và răng tự nhiên, có thể cần cân nhắc thay phục hình. Bạn có thể nhận hướng dẫn chính xác thông qua tư vấn trước thủ thuật.'
                },
                {
                  question: 'Đang mang thai hoặc cho con bú có tẩy trắng được không?',
                  answer: 'Không khuyến nghị tẩy trắng khi mang thai hoặc cho con bú. Chưa có đủ nghiên cứu về ảnh hưởng của Hydrogen peroxide đến thai nhi hoặc sữa mẹ, vì an toàn khuyến nghị thực hiện sau khi kết thúc mang thai và cho con bú.'
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
                      <span className="text-[#008095] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#008095] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#008095] font-bold text-[16px] shrink-0">A.</span>
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
