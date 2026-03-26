'use client';

export default function TmjCausesSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Root Cause
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Rối loạn khớp thái dương hàm,<br />
            <span className="text-[#008095]">phải biết nguyên nhân</span><br />
            mới điều trị đúng cách
          </h2>
        </div>

        {/* Causes */}
        <div className="flex flex-col gap-8">

          {/* Cause Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                tag: 'Thói quen',
                title: 'Siết chặt · Nghiến răng',
                desc: 'Khi vô thức siết chặt hoặc nghiến răng do stress hay khi ngủ, khớp thái dương hàm và cơ xung quanh chịu tải quá mức gây tổn thương đĩa khớp.',
                items: ['Nghiến răng khi ngủ', 'Thói quen siết răng ban ngày', 'Chống cằm, nhai một bên'],
              },
              {
                tag: 'Khớp cắn',
                title: 'Sai khớp cắn · Mất răng',
                desc: 'Khi mất cân bằng ăn khớp giữa răng trên và dưới, khớp thái dương hàm chịu lực bất đối xứng gây ra vấn đề khớp lâu dài.',
                items: ['Bỏ qua sau khi mất răng', 'Phục hình kém', 'Cần điều trị chỉnh nha'],
              },
              {
                tag: 'Chấn thương',
                title: 'Va đập bên ngoài · Há miệng quá mức',
                desc: 'Trường hợp hàm bị thương do tai nạn hoặc va đập, hoặc tổn thương khớp do há miệng quá mức khi điều trị nha khoa, ngáp.',
                items: ['Tai nạn giao thông · Ngã', 'Ngáp quá mức', 'Sau thủ thuật nha khoa kéo dài'],
              },
              {
                tag: 'Stress',
                title: 'Căng thẳng tinh thần · Stress',
                desc: 'Stress làm căng cơ xung quanh hàm, tạo thói quen siết răng vô thức, trở thành nguyên nhân chính gây rối loạn khớp thái dương hàm.',
                items: ['Stress mãn tính', 'Lo âu · Căng thẳng', 'Rối loạn giấc ngủ'],
              },
            ].map((cause, idx) => (
              <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                    {cause.tag}
                  </span>
                  <h3
                    className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {cause.title}
                  </h3>
                </div>
                <p
                  className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {cause.desc}
                </p>
                <div className="flex flex-col gap-2 border-t border-[#e9ebf1] pt-3">
                  {cause.items.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#008095] shrink-0 mt-[3px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="#008095" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p
                        className="text-[#008095] font-semibold text-[13px] leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
