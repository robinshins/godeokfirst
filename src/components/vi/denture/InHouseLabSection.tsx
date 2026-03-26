'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function InHouseLabSection() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <p className="text-[15px] font-bold text-[#008095] tracking-[3px] uppercase">
            DENTAL LAB
          </p>
          <h2 className="font-bold leading-[1.35] text-[32px] text-[#1a1a1a] tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Vì chất lượng phục hình<br />
            <span className="text-[#008095]">Phòng lab chuyên nghiệp được chọn lọc</span>
          </h2>
          <p className="font-semibold leading-[1.5] text-[#3e3a3a] text-base tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Biết phòng lab tốt cũng là thực lực
          </p>
        </FadeInSection>

        {/* Key Point Card */}
        <FadeInSection delay={100} className="w-full bg-gradient-to-br from-[#008095]/10 to-[#6eb7bc]/10 rounded-2xl p-6 border border-[#008095]/20">
          <div className="flex items-start gap-4">
            <div className="bg-[#008095] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#3e3a3a] text-[17px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Tay nghề kỹ thuật viên quyết định chất lượng phục hình
              </p>
              <p className="text-[#666] text-[14px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Dù cấy Implant tốt đến đâu, nếu phục hình phía trên không chính xác thì vô ích. Bác sĩ trưởng trực tiếp kiểm chứng tại <span className="font-bold text-[#008095]">phòng lab chuyên nghiệp</span>.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Why external lab is better */}
        <FadeInSection delay={200} className="flex flex-col gap-4 w-full">
          <p className="font-bold text-[#1a1a1a] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Tại sao cần phòng lab chuyên nghiệp?
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '🏆',
                title: 'Chỉ những nơi được kiểm chứng qua mạng lưới bệnh viện đại học',
                desc: 'Giáo sư thỉnh giảng bệnh viện đại học, tích lũy khi hoạt động, thông qua mạng lưới đồng nghiệp giáo sư·bác sĩ trưởng, chọn lọc phòng lab chuyên nghiệp đã kiểm chứng tay nghề.',
              },
              {
                icon: '🔬',
                title: 'Chuyên môn khác biệt với phòng lab nội bộ nhỏ',
                desc: 'Phòng lab chuyên nghiệp có thiết bị CAD/CAM mới nhất và đội ngũ kỹ thuật viên lành nghề, mức chất lượng phục hình cao hơn nhiều so với phòng lab nội bộ 1~2 người.',
              },
              {
                icon: '🤝',
                title: 'Giao tiếp chặt chẽ với Bác sĩ trưởng',
                desc: 'Không chỉ đơn giản ủy thác và nhận, bác sĩ trực tiếp giải thích trường hợp và thảo luận với kỹ thuật viên để phù hợp với từng bệnh nhân khớp cắn và thẩm mỹ cho từng bệnh nhân.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={300} className="w-full bg-[#0b1727] rounded-2xl p-6">
          <p className="font-bold text-white text-[16px] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            💡 Phòng lab nội bộ không phải lúc nào cũng tốt
          </p>
          <p className="text-[#a0c4d4] text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Phòng lab nội bộ nhanh nhưng vận hành với ít nhân sự nên thường có hạn chế về chuyên môn và thiết bị. Godeok First Dental <span className="text-[#6eb7bc] font-bold">chất lượng hơn tốc độ</span>. Làm đúng ngay từ đầu mới có thể sử dụng lâu dài.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
