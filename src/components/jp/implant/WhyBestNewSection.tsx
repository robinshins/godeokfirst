'use client';

import Image from 'next/image';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/icons/Logo_black.svg"
            alt="Kyungsung Medis Dental Clinic"
            width={168}
            height={24}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full font-['Pretendard_JP']">
          慶星メディス歯科が<br />
          特別な理由
          </h2>
        </div>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        {/* Reason 1: Teaching dentists */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="box-border flex flex-col gap-[14px] items-center justify-center px-4 py-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[#006aff] text-[32px] text-center tracking-[-0.64px] w-full font-['Pretendard_JP']">
                1
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h3 className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full font-['Pretendard_JP']">
                  歯科医師に<br />
                  教える歯科医師
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6 w-full">
              <div className="flex gap-3 w-max">
                {[
                  { img: '/images/seminar-2.png', caption: '学術大会発表' },
                  { img: '/images/seminar-3.png', caption: '歯科医師対象インプラント講義' },
                  { img: '/images/seminar-1.png', caption: '釜山歯科医師会特別講演' },
                  { img: '/images/seminar-4.png', caption: 'デジタルインプラント専門家課程' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-[6px] w-[243px] flex-shrink-0">
                    <div className="relative w-full aspect-[950/1148] rounded-[20px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.caption || `Seminar ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-bold leading-[1.5] not-italic text-[#727582] text-[13px] tracking-[-0.26px] font-['Pretendard_JP']">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reason 2: 3-Stage Temporary Teeth Protocol */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="leading-[1.35] text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  2
                </p>
                <div className="flex flex-col gap-2 items-center w-full">
                  <h3 className="leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full">
                    3段階仮歯<br />
                    プロトコル
                  </h3>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#006aff]/10 rounded-full">
                    <span className="text-[13px] font-semibold text-[#006aff] tracking-[-0.26px]">
                      *全体インプラント専用
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                他院の1段階仮歯を超える次元<br />
                完璧を追求する3段階精密調整システム
              </p>
            </div>

            {/* Comparison table */}
            <div className="box-border flex gap-10 h-[263px] items-start justify-center p-6 relative shrink-0 w-full">
              {/* Regular Dental Clinic */}
              <div className="absolute flex flex-col gap-2.5 items-start left-6 top-[17px] w-[133px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] tracking-[-0.44px] font-['Pretendard_JP']">
                    一般歯科
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      1段階で終了
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      2段階なし
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      3段階なし
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      4段階なし
                    </p>
                  </div>
                </div>
              </div>

              {/* Medis Dental */}
              <div className="absolute bg-white border-2 border-[#006aff] box-border flex flex-col gap-2.5 items-center justify-center left-[151px] px-[15px] py-[13px] rounded-[11px] top-[1px] w-[182px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[22px] text-black tracking-[-0.44px] font-['Pretendard_JP']">
                    メディス歯科
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      1段階：即時回復
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      2段階：精密な咬合
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      3段階：完璧な咬合確認
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      4段階：完璧な最終補綴物
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 3: Surgery Completed Within 24 Hours */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  3
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  24時間以内に<br />手術完了
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                院内技工所の迅速な製作で<br />
                歯のない日は1日もありません
              </p>
            </div>

            <div className="box-border flex flex-col gap-10 items-start justify-center p-6 relative shrink-0 w-full">
              <div className="flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                {/* 10:00 Morning Surgery */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f2f5ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[80px] h-[80px] -left-[5px] -top-2">
                      <Image
                        src="/images/same-day-morning.png"
                        alt="Morning Surgery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      10:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      午前の手術
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      <span className="text-[#0b1727]">正確で速いインプラント植立</span>コンピューター分析されたデジタルガイド手術
                    </p>
                  </div>
                </div>

                {/* 14:00 Temporary Teeth Production */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#fff9ec] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[70px] h-[70px]">
                      <Image
                        src="/images/same-day-temporary.png"
                        alt="Temporary Teeth Production"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      14:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      仮歯製作
                    </p>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p className="font-semibold leading-[1.4] not-italic text-[#0b1727] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                        カスタマイズされた即時製作
                      </p>
                      <p className="font-semibold leading-[1.4] not-italic text-[#006aff] text-[13px] tracking-[-0.26px] font-['Pretendard_JP']">
                        院内技工所で24時間以内に完成
                      </p>
                    </div>
                  </div>
                </div>

                {/* 18:00 Dinner & Return to Daily Life */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f5f4ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[86px] h-[86px] -left-[7px] -top-[7px]">
                      <Image
                        src="/images/same-day-dinner.png"
                        alt="Dinner"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard_JP']">
                      18:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard_JP']">
                      夕食と日常復帰
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      <span className="text-[#0b1727]">歯のない日は絶対にない</span> - 社会生活や対人関係に影響なく、すぐに日常生活に復帰
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 4: Thorough After-Care */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  4
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  徹底したアフターケア
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                植立して終わりではなく、綿密なケアで<br />
                10年、20年、それ以上使い続けることができます
              </p>
            </div>

            <div className="box-border flex flex-col gap-6 items-center px-6 pb-6 relative shrink-0 w-full">
              {/* 1. Lifetime Oral Care */}
              <div className="flex flex-col gap-3 w-full">
                <div className="relative h-[180px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
                  <Image
                    src="/images/beneficial-bacteria.jpg"
                    alt="Lifetime Oral Care - Oral Bacteria Therapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard_JP']">
                    生涯口腔ケア
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    口腔細菌療法
                  </p>
                </div>
              </div>

              {/* 2. Implant Protection Splint */}
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full overflow-x-auto">
                  <div className="flex gap-3 pb-2">
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint.webp"
                        alt="Implant Protection Splint 1"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint2.tif"
                        alt="Implant Protection Splint 2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard_JP']">
                    インプラント保護スプリント
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    歯ぎしり、食いしばりなど顎関節障害の改善
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 5: All Difficulty Levels of Implant Surgery */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  5
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  単独インプラントから<br />
                  複雑な全体インプラントまで
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                多様な症例の豊富な手術経験を基に<br />
                <span className="text-[#006aff] font-bold">釜山南区デジタルガイドインプラント手術1位</span>として<br />
                公式認定された実力を証明
              </p>
            </div>

            {/* Certification Badge */}
            <div className="flex justify-center w-full px-6">
              <div className="relative w-full max-w-[343px] aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/most-implant-hospital.jpg"
                  alt="Most Digital Guide Surgery Hospital Certification"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Osstem Certification Images */}
            <div className="w-full overflow-x-auto px-6 mt-4">
              <div className="flex gap-4 pb-2">
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem2.jpg"
                    alt="Osstem Certification 2"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem1.jpg"
                    alt="Osstem Certification 1"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
              </div>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      単独インプラント
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      個別の1〜2本の歯の欠損
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      部分インプラント
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      複数の歯の欠損、ブリッジ交換
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      全体インプラント
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      無歯顎、オールオン4/6など<br />
                      高難度の全顎インプラント
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#006aff]/5 border border-[#006aff]/20 rounded-2xl p-4 w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">✨</div>
                  <p className="font-bold text-[#006aff] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                    骨移植、サイナスリフトなど高難度症例の専門治療
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 6: Minimal Placement, Minimal Incision, Minimal Bone Graft */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard_JP']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  6
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  最小植立、<br />
                  最小切開、<br />
                  最小骨移植
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard_JP']">
                精密なデジタル診断を通じて<br />
                最小限必要な施術のみ進行
              </p>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      最小植立
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      上顎6本、下顎4本のみで<br />
                      しっかり固定された効率的な植立
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      最小切開
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      最小切開手術で回復を促進
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard_JP']">
                      最小骨移植
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard_JP']">
                      精密な診断により最小限の骨移植のみ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
