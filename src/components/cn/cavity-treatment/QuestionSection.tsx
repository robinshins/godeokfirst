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
                  没想到有这么仔细看诊的牙科
                </p>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#d2d6e1] text-center w-full">
              高德First牙科实际来院患者后记
            </p>
          </div>

          {/* Divider */}
          <div className="bg-white h-10 opacity-50 shrink-0 w-0.5" />

          {/* Info Card */}
          <div className="bg-white/[0.08] rounded-[20px] px-5 py-[30px] flex flex-col gap-6 items-center justify-end w-full">
            <p className="font-['Pretendard_JP'] font-semibold text-[17px] leading-[1.5] tracking-[-0.34px] text-center text-white w-full">
              龋齿治疗 去除 后 更 重要。<br />
              从形态到咬合和颜色都精细完成。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
