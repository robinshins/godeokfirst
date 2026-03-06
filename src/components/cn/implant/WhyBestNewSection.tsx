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
          <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full font-['Pretendard']">
          庆星美迪斯牙科<br />
          与众不同的原因
          </h2>
        </div>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        {/* Reason 1: Teaching dentists */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="box-border flex flex-col gap-[14px] items-center justify-center px-4 py-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[#006aff] text-[32px] text-center tracking-[-0.64px] w-full font-['Pretendard']">
                1
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h3 className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full font-['Pretendard']">
                  教授牙医的<br />
                  牙医
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6 w-full">
              <div className="flex gap-3 w-max">
                {[
                  { img: '/images/seminar-2.png', caption: '学术大会发表' },
                  { img: '/images/seminar-3.png', caption: '牙医对象种植牙讲座' },
                  { img: '/images/seminar-1.png', caption: '釜山牙医协会特别讲座' },
                  { img: '/images/seminar-4.png', caption: '数字种植牙专家课程' }
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
                    <p className="font-bold leading-[1.5] not-italic text-[#727582] text-[13px] tracking-[-0.26px] font-['Pretendard']">
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
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center relative shrink-0 w-full font-['Pretendard']">
                <p className="leading-[1.35] text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  2
                </p>
                <div className="flex flex-col gap-2 items-center w-full">
                  <h3 className="leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full">
                    三阶段临时牙<br />
                    治疗方案
                  </h3>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#006aff]/10 rounded-full">
                    <span className="text-[13px] font-semibold text-[#006aff] tracking-[-0.26px]">
                      *全口种植牙专用
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard']">
                超越其他医院一阶段临时牙的水平<br />
                追求完美的三阶段精密调整系统
              </p>
            </div>

            {/* Comparison table */}
            <div className="box-border flex gap-10 h-[263px] items-start justify-center p-6 relative shrink-0 w-full">
              {/* Regular Dental Clinic */}
              <div className="absolute flex flex-col gap-2.5 items-start left-6 top-[17px] w-[133px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] tracking-[-0.44px] font-['Pretendard']">
                    普通牙科
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      第一阶段结束
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      无第二阶段
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      无第三阶段
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      无第四阶段
                    </p>
                  </div>
                </div>
              </div>

              {/* Medis Dental */}
              <div className="absolute bg-white border-2 border-[#006aff] box-border flex flex-col gap-2.5 items-center justify-center left-[151px] px-[15px] py-[13px] rounded-[11px] top-[1px] w-[182px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[22px] text-black tracking-[-0.44px] font-['Pretendard']">
                    美迪斯牙科
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      第一阶段：即时恢复
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      第二阶段：精密咬合
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      第三阶段：完美咬合确认
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      第四阶段：完美最终修复体
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
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  3
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  24小时内<br />完成手术
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard']">
                通过院内技工室的快速制作<br />
                一天都不会没有牙齿
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
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard']">
                      10:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard']">
                      上午手术
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      <span className="text-[#0b1727]">精准快速的种植体植入</span>计算机分析的数字导板手术
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
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard']">
                      14:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard']">
                      临时牙制作
                    </p>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p className="font-semibold leading-[1.4] not-italic text-[#0b1727] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                        定制化即时制作
                      </p>
                      <p className="font-semibold leading-[1.4] not-italic text-[#006aff] text-[13px] tracking-[-0.26px] font-['Pretendard']">
                        院内技工室24小时内完成
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
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px] font-['Pretendard']">
                      18:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px] font-['Pretendard']">
                      晚餐与回归日常
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      <span className="text-[#0b1727]">绝对不会有没牙的日子</span> - 不影响社交生活和人际关系，立即回归日常生活
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
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  4
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  彻底的术后护理
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard']">
                不是植入后就结束，通过精心护理<br />
                可以使用10年、20年甚至更久
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
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard']">
                    终身口腔护理
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                    口腔细菌疗法
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
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px] font-['Pretendard']">
                    种植牙保护咬合板
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                    改善磨牙、咬牙等颞下颌关节障碍
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
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  5
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  从单颗种植牙<br />
                  到复杂的全口种植牙
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard']">
                基于多样病例的丰富手术经验<br />
                <span className="text-[#006aff] font-bold">釜山南区数字导板种植牙手术第一名</span>的<br />
                官方认证实力证明
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
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard']">
                      单颗种植牙
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      个别的1～2颗牙齿缺失
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
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard']">
                      部分种植牙
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      多颗牙齿缺失、牙桥更换
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
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard']">
                      全口种植牙
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      无牙颌、All-on-4/6等<br />
                      高难度全颌种植牙
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#006aff]/5 border border-[#006aff]/20 rounded-2xl p-4 w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">✨</div>
                  <p className="font-bold text-[#006aff] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                    骨移植、上颌窦提升等高难度病例的专业治疗
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
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full font-['Pretendard']">
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  6
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  最少植入、<br />
                  最小切口、<br />
                  最少骨移植
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full font-['Pretendard']">
                通过精密的数字诊断<br />
                只进行必要的最少治疗
              </p>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard']">
                      最少植入
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      上颌6颗、下颌4颗<br />
                      牢固固定的高效植入
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
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard']">
                      最小切口
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      最小切口手术促进恢复
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
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px] font-['Pretendard']">
                      最少骨移植
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px] font-['Pretendard']">
                      通过精密诊断只进行最少的骨移植
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
