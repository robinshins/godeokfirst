'use client';

const risks = [
  {
    tag: 'Tim mạch',
    title: 'Nguy cơ bệnh tim mạch tăng 3 lần↑',
    desc: 'Vi khuẩn nha chu trong nướu xâm nhập mạch máu gây viêm thành mạch và thúc đẩy hình thành huyết khối. Theo nghiên cứu, khi có bệnh nướu, nguy cơ nhồi máu cơ timnguy cơ nhồi máu cơ tim tăng tối đa 2.8 lần, nguy cơ đột quỵ tăng trên 16%. Ngược lại, chỉ lấy cao răng định kỳ cũng có thể giảm 10~14% nguy cơ bệnh tim theo báo cáo.',
    stats: ['Nguy cơ nhồi máu cơ tim tăng 2.8 lần', 'Giảm 16% nguy cơ đột quỵ (lấy cao răng 1 lần/năm)', 'Kiểm tra miệng khi kiểm tra tim khuyến nghị kết hợp'],
    source: 'Nhóm nghiên cứu BV ĐH Seoul Bundang 2024 · Hiệp hội Tim mạch Hoa Kỳ (AHA) 2020',
  },
  {
    tag: 'Tiểu đường',
    title: 'Biến chứng tiểu đường tiến triển 2 lần↑',
    desc: 'Viêm nướu tạo vòng xoáy tăng kháng insulin cản trở kiểm soát đường huyết. Khi có viêm nha chu, khó kiểm soát chỉ số HbA1c, ngược lại khi có tiểu đường thì hiệu quả điều trị nướu cũng giảm. Nghiên cứu lâm sàng cho thấy chỉ điều trị nha chu đã giảm HbA1c 0.4%.',
    stats: ['Khả năng thất bại kiểm soát đường huyết tăng 6 lần', 'HbA1c giảm 0.4% (khi điều trị nha chu)', 'Tốc độ tiến triển biến chứng tiểu đường tăng 2 lần nhanh hơn'],
    source: 'BV Eunpyeong St. Mary ĐH Catholic 2023 · Hội Tiểu đường Hàn Quốc',
  },
  {
    tag: 'Bệnh não',
    title: 'Nguy cơ sa sút trí tuệ 70%↑',
    desc: 'Khi Porphyromonas gingivalis trong vi khuẩn nha chu vượt qua hàng rào máu-não vào não, đẩy nhanh tích tụ beta-amyloid. Phát hiện độc tố nha chu trong mô não của bệnh nhân Alzheimer, và khi bỏ quên bệnh nướu trên 10 năm, nguy cơ sa sút trí tuệ được báo cáo tăng đáng kể.',
    stats: ['Phát hiện độc tố nha chu ở 40% bệnh nhân Alzheimer', 'Nguy cơ sa sút trí tuệ 70%↑ khi bỏ quên trên 10 năm', 'Chăm sóc nướu sớmcó thể bảo vệ sức khỏe não'],
    source: 'Nhóm Tiến sĩ Kantarci ĐH Harvard 2024 · Journal of Neuroinflammation',
  },
  {
    tag: 'Phụ nữ mang thai',
    title: 'Sinh non và trẻ nhẹ cân tăng 7 lần↑',
    desc: 'Prostaglandin - chất trung gian viêm từ nướu truyền qua máu đến nhau thai có thể gây chuyển dạ sớm. Chăm sóc nướu khi mang thai dễ bị lơ là chăm sóc nướu, nên khuyến nghị kiểm tra tình trạng nướu trước khi mang thai hoặc đầu thai kỳ.',
    stats: ['Nguy cơ sinh non tăng 7 lần', 'Sinh trẻ nhẹ cân (dưới 2kg) tăng 2 lần', 'Điều trị nướu khi mang thai được bảo hiểm y tế'],
    source: 'Hội Nha chu Hoa Kỳ·Châu Âu',
  },
];

export default function RiskSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Health Warning
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Bệnh nướu không chỉ<br />nằm trong miệng
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Vi khuẩn trong nướu lan qua mạch máu ra toàn thân<br />gây ra bệnh nghiêm trọng hơn bạn nghĩ.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="flex flex-col gap-5">
          {risks.map((risk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col gap-5">
              {/* Tag + Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider w-fit">
                  {risk.tag}
                </span>
                <h3
                  className="font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {risk.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {risk.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {risk.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#4DC8D8] shrink-0 mt-[3px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#4DC8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className="text-[#4DC8D8] font-semibold text-[13px] leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Source */}
              <p className="text-white/30 text-[11px]">Nguồn: {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Chỉ lấy cao răng 1 lần/năm<br />có thể giảm 14% nguy cơ bệnh tim mạch.
          </p>
          <p className="text-white/40 text-[13px]">
            Lấy cao răng được bảo hiểm y tế — nhất định phải đi ít nhất 1 lần/năm.
          </p>
        </div>

      </div>
    </div>
  );
}
