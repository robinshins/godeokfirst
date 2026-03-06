'use client';

import Image from 'next/image';

export default function PhilosophySection() {
  return (
    <div className="bg-white w-full px-4 py-[60px] relative">
      {/* Background gradient */}
      <div className="absolute h-[636px] left-[calc(50%+5.5px)] top-[149px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-62.89%_-83.33%]">
          <Image
            src="/images/ellipse-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[343px] mx-auto flex flex-col gap-10 items-start relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full">
              好牙科的标准
            </p>
            <div className="font-['Pretendard,_sans-serif'] font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">积极进行牙龈治疗的牙科</p>
              <p>才是好牙科</p>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Bad Reasons Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
              <div className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full">
                <p className="mb-0">许多医院不愿进行</p>
                <p>牙龈治疗的原因</p>
              </div>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-3.5 items-start p-5 rounded-2xl w-full">
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    拔牙后种植牙的收益更高
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    患者不喜欢牙龈治疗的疼痛
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    治疗后最终拔牙担心投诉
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/icons/x-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    时间和努力相比收益较少
                  </p>
                </div>
              </div>
            </div>

            {/* Good Reasons Card */}
            <div className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] w-full">
              <div className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full">
                <p className="mb-0">我们医院坚持</p>
                <p>牙龈治疗的原因</p>
              </div>
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-3.5 items-start p-5 rounded-2xl w-full">
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span className="text-[#006aff]">保留天然牙齿</span>
                    <span>始终是</span>第一位
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span className="text-[#006aff]">4阶段镇痛麻醉</span>
                    <span>舒适治疗</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span className="text-[#006aff]">牙体牙髓科专家协诊</span>高成功率
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Image
                    src="/icons/check-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="font-['Pretendard,_sans-serif'] font-bold text-[16px] text-black tracking-[-0.34px] leading-[1.5]">
                    <span>患者的</span>
                    <span className="text-[#006aff]">终身牙齿健康</span>最优先
                  </p>
                </div>
              </div>
            </div>

            {/* Blue Conclusion Card */}
            <div className="bg-[#006aff] box-border flex flex-col font-['Pretendard,_sans-serif'] font-bold gap-5 items-center justify-center leading-[0] p-6 rounded-[24px] text-center text-white w-full">
              <div className="leading-[1.35] text-2xl tracking-[-0.48px] w-full">
                <p className="mb-0">保留天然牙齿</p>
                <p>是最好的治疗</p>
              </div>
              <div className="leading-[1.5] opacity-80 text-[17px] tracking-[-0.34px] w-full">
                <p className="mb-0">即使稍有不便，通过定期牙龈治疗</p>
                <p className="mb-0">保护天然牙齿</p>
                <p>是比种植牙更有价值的选择</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
