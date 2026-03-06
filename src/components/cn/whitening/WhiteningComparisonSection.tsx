export default function WhiteningComparisonSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              哪种施术<br />
              适合我？
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              比较两种选项
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
            <div className="flex flex-col gap-4 overflow-hidden rounded-[inherit] w-full">
              <div className="flex flex-col gap-[30px] px-4 py-6 w-full">
                <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                  美白选项比较
                </p>

                <div className="bg-white border border-[#006aff] rounded-[10.671px] overflow-hidden w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e9ebf1]">
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] px-2 py-[12px] w-[70px] text-left">&nbsp;</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.56px] text-[#5d5f6d] text-center px-2 py-[12px] w-[45%]">过氧化氢<br />美白</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center px-2 py-[12px]">贴面</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">施术时间</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2小时<br />（当天完成）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">2-3次访问<br />（1-2周）</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">持续时间</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2年<br />（护理可延长）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">10-15年<br />（半永久）</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">牙齿磨削</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">无<br />（0mm）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">最少磨削<br />（0.3mm）</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">价格范围</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">20-30万韩元<br />（全部）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">每颗<br />50-80万韩元</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">推荐对象</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">想要自然<br />美白的人</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">想要完美<br />牙齿的人</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">注意事项</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">24小时<br />注意着色食物</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">注意<br />硬质食物</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
