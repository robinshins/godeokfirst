'use client';

import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 top-[149px] w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full">
                在家做的自助美白和<br />
                牙科专家美白的区别
              </h2>
              <div className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] w-full">
                <p className="mb-0">
                  牙科使用的美白剂属于<span className="text-[#008095]">医药品分类</span>
                </p>
                <p className="mb-0">
                  使用<span className="text-[#008095]">高浓度过氧化氢</span>。
                </p>
                <p className="mb-0">
                  接触牙龈可能造成损伤，因此由<span className="text-[#008095]">专家</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#008095]">做好完美保护措施后进行治疗</span>，因此更加安全
                </p>
                <p>可以看到即时效果。</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 w-full">
            {/* Card 1: 셀프 牙齿美白 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      自助牙齿美白
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: '低浓度美白剂', desc: '一般药品效果有限' },
                      { title: '效果缓慢', desc: '需要数周到数月' },
                      { title: '安全性风险', desc: '使用不当可能损伤牙龈' },
                      { title: '不均匀的结果', desc: '美白效果不均匀' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#FF1616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 牙科 专家 美白 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
              <div className="flex flex-col items-center justify-center overflow-hidden rounded-[inherit] w-full">
                <div className="flex flex-col gap-4 items-center justify-center p-6 w-full">
                  <div className="flex gap-2 items-center w-full justify-center">
                    <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                      牙科 专家 美白
                    </p>
                  </div>
                  <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
                    {[
                      { title: '高浓度医药品', desc: '专业过氧化氢带来强力效果' },
                      { title: '即时效果', desc: '1-3小时内确实的变化' },
                      { title: '完美的安全性', desc: '通过牙龈保护措施防止损伤' },
                      { title: '均匀美白', desc: '专家精密的治疗' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start w-full">
                        <div className="shrink-0 w-6 h-6">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="flex flex-col gap-1 justify-center whitespace-pre">
                          <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black">
                            {item.title}
                          </p>
                          <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
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
