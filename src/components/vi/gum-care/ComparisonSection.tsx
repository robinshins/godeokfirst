'use client';

import Link from 'next/link';

const levels = [
  {
    level: 'Step 1',
    title: 'Đánh răng',
    badge: 'Bắt buộc hàng ngày',
    desc: 'Loại bỏ mảng bám và màng vi khuẩn trên bề mặt răng và phía trên đường nướu. Đánh răng đúng cách là bước đầu tiên phòng ngừa bệnh nướu, cần thực hiện ít nhất 2 lần/ngày thực hiện thì mới hiệu quả.',
    point: 'Cao răng sâu dưới nướu không thể loại bỏ bằng bàn chải.',
    insurance: null,
    highlight: false,
  },
  {
    level: 'Step 2',
    title: 'Cạo vôi răng',
    badge: '1~2 lần/năm · Bảo hiểm y tế',
    desc: 'Loại bỏ cao răng và mảng bám cứng phía trên nướu bằng thiết bị siêu âm. Chỉ một lần lấy cao răng có thể giảm nguy cơ bệnh tim mạch 10~14% theo kết quả nghiên cứu. Từ 19 tuổi trở lên, bảo hiểm y tế được áp dụng 1 lần/năm.',
    point: 'Chỉ lấy cao răng không thể tiếp cận sâu dưới nướu.',
    insurance: 'Từ 19 tuổi · 1 lần/năm · Bảo hiểm y tế (tự chi trả 20%)',
    highlight: false,
  },
  {
    level: 'Step 3',
    title: 'Điều trị nướu',
    badge: 'Khi cần · Bảo hiểm y tế',
    desc: 'Loại bỏ chính xác cao răng và vi khuẩn trong túi nha chu sâu trong nướu bằng curette (dụng cụ điều trị nha chu), và làm nhẵn bề mặt chân rănglàm nhẵn để vi khuẩn không bám lại. Khi cần thiết, bơm trực tiếp thuốc mỡ kháng sinh Periocline vào túi nha chu để loại bỏ thêm vi khuẩn. Quy trình này được bảo hiểm y tế chi trả, và tùy theo mức độ tiến triển được chia thành 1~4 vùng.',
    point: 'Phòng ngừa tái phát bằng kiểm tra định kỳ 3~6 tháng sau Điều trị nướu.',
    insurance: 'Bảo hiểm y tế · tiến hành theo vùng · bao gồm gây tê',
    highlight: true,
  },
];

export default function ComparisonSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Care Levels
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Có lúc chỉ đánh răng<br />thôi chưa đủ
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Sức khỏe nướu cần được chăm sóc theo từng bước.<br />
            Cạo vôi răngvà Điều trị nướu đều được bảo hiểm y tế chi trả.
          </p>
        </div>

        {/* Level Cards */}
        <div className="flex flex-col gap-5">
          {levels.map((c, i) => (
            <div
              key={i}
              className={`rounded-[24px] p-6 flex flex-col gap-5 relative overflow-hidden ${
                c.highlight
                  ? 'bg-white border-2 border-[#008095] shadow-[0_8px_32px_-8px_rgba(0,128,149,0.2)]'
                  : 'bg-white border border-[#e9ebf1] shadow-[0_4px_20px_-4px_rgba(21,26,36,0.06)]'
              }`}
            >
              {c.highlight && (
                <div className="absolute top-0 right-0 bg-[#008095] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-[14px] rounded-tr-[22px]">
                  Quan trọng nhất
                </div>
              )}

              {/* Level + Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[11px] font-black text-[#008095] tracking-[0.1em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.level}
                </span>
                <span
                  className={`font-bold text-[11px] px-2.5 py-1 rounded-full ${
                    c.highlight
                      ? 'bg-[#008095] text-white'
                      : 'bg-[#f0f7fa] text-[#008095]'
                  }`}
                >
                  {c.badge}
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bold text-[22px] text-[#2d3340] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-medium text-[15px] text-[#4a4f5e] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.desc}
                </p>
              </div>

              {/* Point */}
              <div className="flex items-start gap-2 bg-[#f8f9fb] rounded-2xl p-4">
                <div className="shrink-0 mt-[3px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#008095" strokeWidth="1.5" />
                    <path d="M7 4.5V7.5M7 9.5V9.8" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p
                  className="text-[13.5px] font-semibold text-[#008095] leading-[1.5]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.point}
                </p>
              </div>

              {/* Insurance Badge */}
              {c.insurance && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5L2 4V8C2 11.3 4.6 14.4 8 15C11.4 14.4 14 11.3 14 8V4L8 1.5Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M5.5 8L7 9.5L10.5 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p
                    className="text-[#008095] font-bold text-[13px]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {c.insurance}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Banner nhấn mạnh bảo hiểm */}
        <div className="bg-[#21314E] rounded-[24px] p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              bảo hiểm y tế Hướng dẫn
            </p>
            <h4
              className="text-white font-bold text-[20px] leading-[1.35]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              Cạo vôi răng và Điều trị nướu,<br />đều được bảo hiểm y tế chi trả
            </h4>
            <p
              className="text-white/60 text-[14px] leading-[1.7] mt-1"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              Chi phí không đáng kể, ngay cả khi không có triệu chứng hãy lấy cao răng 1 lần/năm và kiểm tra nướu. Phát hiện càng sớm, điều trị càng đơn giản hơn nhiều và chi phí cũng ít hơn.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                label: 'Cạo vôi răng',
                detail: 'Từ 19 tuổi · 1 lần/năm · Tự chi trả khoảng 20%',
              },
              {
                label: 'Điều trị nha chu (Điều trị nướu)',
                detail: 'Khi chẩn đoán viêm nha chu · Bảo hiểm theo vùng · Bao gồm gây tê',
              },
              {
                label: 'Điều trị Periocline',
                detail: 'Có thể áp dụng bảo hiểm tùy theo độ sâu túi nha chu',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                <p
                  className="text-white font-bold text-[14px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#4DC8D8] font-medium text-[13px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <Link href="/vi/consultation">
            <div className="bg-[#008095] rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#006d80] transition-colors">
              <p
                className="text-white font-bold text-[15px]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Đặt lịch tư vấn tình trạng nướu
              </p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
