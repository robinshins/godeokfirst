export default function TmjDoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* Header */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p
              className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              From the Doctor
            </p>
            <h2
              className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              Đau khớp thái dương hàm,<br />
              càng chịu càng nặng hơn
            </h2>
          </div>

          {/* Doctor Message Card */}
          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                &ldquo;Hàm kêu tiếng nhưng chắc không sao&rdquo; nhiều người bỏ qua như vậy.<br /><br />
                Nhưng rối loạn khớp thái dương hàm <span className="text-[#008095] font-bold">nếu điều trị sớm thì đơn giản, nhưng nếu bỏ qua sẽ mãn tính</span> hóa và điều trị khó hơn.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Đau khớp thái dương hàm có thể dẫn đến triệu chứng toàn thân như đau đầu, đau vai, chóng mặt. <span className="text-[#008095] font-bold">Chẩn đoán chính xác là khởi đầu của điều trị đúng đắn</span>.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Bác sĩ Lee Dong-hyun
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Chuyên gia Nha khoa Tổng hợp · Godeok First Dental Bác sĩ trưởng
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="flex flex-col gap-3">
            {[
              { num: '70%', desc: 'Tỷ lệ người trưởng thành từng bị rối loạn khớp thái dương hàm' },
              { num: '3 lần', desc: 'Nguy cơ mãn tính khi bỏ qua — Điều trị sớm là chìa khóa' },
              { num: '85%', desc: 'Tỷ lệ cải thiện bằng điều trị bảo tồn (không phẫu thuật)' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4"
              >
                <p
                  className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.num}
                </p>
                <p
                  className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
