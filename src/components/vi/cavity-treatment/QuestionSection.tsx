'use client';

export default function QuestionSection() {
  return (
    <div className="bg-[#21314E] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-[30px] items-center w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
                <p className="font-['Nanum_Myeongjo'] font-extrabold text-[60px] leading-[0.2] tracking-[-3.6px] w-full">
                  &#x201C;
                </p>
                <p className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] w-full">
                  Không ngờ có nha khoa chăm sóc tỉ mỉ như vậy
                </p>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#d2d6e1] text-center w-full">
              Đánh giá thực tế của bệnh nhân đến Godeok First Dental
            </p>
          </div>

          {/* Divider */}
          <div className="bg-white h-10 opacity-50 shrink-0 w-0.5" />

          {/* Info Card */}
          <div className="bg-white/[0.08] rounded-[20px] px-5 py-[30px] flex flex-col gap-6 items-center justify-end w-full">
            <p className="font-['Pretendard_JP'] font-semibold text-[17px] leading-[1.5] tracking-[-0.34px] text-center text-white w-full">
              Điều trị sâu răng, sau khi loại bỏ mới quan trọng hơn<br />
              hoàn thành tỉ mỉ từ hình dạng·khớp cắn·màu sắc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
