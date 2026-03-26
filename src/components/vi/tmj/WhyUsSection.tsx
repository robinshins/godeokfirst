'use client';

export default function TmjWhyUsSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Why Us
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Tại Godeok First Dental<br />
            Điều trị khớp thái dương hàm<br />
            <span className="text-[#008095]">lý do nên đến đây</span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="flex flex-col gap-5">
          {[
            {
              num: '01',
              title: 'Chuyên gia Nha khoa Tổng hợp trực tiếp khám',
              desc: 'Rối loạn khớp thái dương hàm là bệnh phức hợp liên quan đến nhiều lĩnh vực như khớp cắn, phục hình, nha chu. Vì Chuyên gia Nha khoa Tổng hợp nhìn toàn bộ để chẩn đoán nên có thể xác định chính xác nguyên nhân.',
            },
            {
              num: '02',
              title: 'Ưu tiên điều trị bảo tồn không phẫu thuật',
              desc: 'Hầu hết rối loạn khớp thái dương hàm có thể điều trị không cần phẫu thuật. Ưu tiên điều trị bảo tồn như thuốc, vật lý trị liệu, splint để giảm thiểu gánh nặng cho bệnh nhân.',
            },
            {
              num: '03',
              title: 'Chế tạo splint tùy chỉnh chính xác',
              desc: 'Chế tạo splint chính xác phù hợp từng bệnh nhân dựa trên phân tích khớp cắn số. Tối đa hóa hiệu quả điều trị bằng điều chỉnh khớp cắn định kỳ.',
            },
            {
              num: '04',
              title: 'Giải quyết đến nguyên nhân gốc',
              desc: 'Không chỉ đơn giản giảm đau, mà giải quyết cả nguyên nhân gốc như sai khớp cắn, mất răng, thói quen xấu để phòng ngừa tái phát.',
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-center gap-3">
                <span
                  className="text-[#008095] font-bold text-[28px] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.num}
                </span>
                <h3
                  className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.title}
                </h3>
              </div>
              <p
                className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-center">
          <p
            className="text-[22px] font-bold text-white leading-[1.4]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Đau khớp thái dương hàm,<br />
            <span className="text-[#4DC8D8]">Đừng chịu đựng, hãy nhận tư vấn</span>
          </p>
          <p className="text-white/50 text-[14px] mt-2">
            Điều trị sớm là hiệu quả và kinh tế nhất.
          </p>
        </div>

      </div>
    </div>
  );
}
