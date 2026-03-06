export default function WhiteningComparisonSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              どの施術が<br />
              私に合っていますか？
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              2つのオプションを比較してください
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
            <div className="flex flex-col gap-4 overflow-hidden rounded-[inherit] w-full">
              <div className="flex flex-col gap-[30px] px-4 py-6 w-full">
                <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                  ホワイトニングオプション比較
                </p>

                <div className="bg-white border border-[#006aff] rounded-[10.671px] overflow-hidden w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e9ebf1]">
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] px-2 py-[12px] w-[70px] text-left">&nbsp;</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.56px] text-[#5d5f6d] text-center px-2 py-[12px] w-[45%]">過酸化水素<br />ホワイトニング</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center px-2 py-[12px]">ラミネート</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">施術時間</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2時間<br />（当日完了）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">2-3回訪問<br />（1-2週間）</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">持続時間</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2年<br />（管理時延長）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">10-15年<br />（半永久）</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">歯の削除</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">なし<br />（0mm）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">最小削除<br />（0.3mm）</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">価格帯</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">20-30万円<br />（全体）</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1本あたり<br />50-80万円</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">推奨対象</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">自然な<br />ホワイトニングを希望する方</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">完璧な歯を<br />希望する方</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">注意事項</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">24時間<br />色素食品注意</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">硬い食べ物<br />注意</td>
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
