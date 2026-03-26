'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-[50px] items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
                  坚守保存哲学的牙科
                </h2>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              牙齿一旦失去就无法再回来。<br />
              哪怕多保住1颗也是真正专家的使命
            </p>
          </div>

          {/* Comparison Table */}
          <div className="relative w-full h-[263px]">
            {/* 一般 牙科 */}
            <div className="absolute left-[10px] top-[20.21px] w-[133px]">
              <div className="flex flex-col gap-[10px] items-start w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e] flex-1">
                    一般 牙科
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] w-full">
                      以盈利为中心
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582] w-full">
                      拔牙/种植牙 建议
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      快速结束治疗
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      一般诊疗集中
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      诱导高费用种植牙
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 高德First牙科 */}
            <div className="absolute left-[157px] top-[-13px] w-[186px] bg-white border-2 border-[#008095] rounded-2xl p-5">
              <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.4] tracking-[-0.36px] text-black flex-1">
                    高德First牙科
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      以保存为中心
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095] w-full">
                      天然牙保存优先
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      精密诊断分阶段治疗
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      综合牙科专家亲自集中诊疗
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      医保适用优先
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095] w-full">
                      患者 负担 最小化
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* Review 1 */}
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-5 items-center justify-center px-4 py-6 w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-black text-center w-full">
                    &ldquo;没想到能这么仔细地<br />
                    给我治疗&rdquo;
                  </h3>
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* Before Image */}
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src="/images/cavity-before-after.png"
                        alt="治疗 前"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 0%' }}
                      />
                      <div className="absolute left-0 top-0 p-3 z-10">
                        <div className="bg-[#292a2f] px-2.5 py-1.5 rounded-[10px]">
                          <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                            Before
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src="/images/cavity-before-after.png"
                        alt="治疗 后"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 100%' }}
                      />
                      <div className="absolute left-0 top-0 p-3">
                        <div className="bg-[#008095] px-2.5 py-1.5 rounded-[10px]">
                          <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                            After
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start text-center w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-base leading-[1.4] tracking-[-0.32px] text-black w-full">
                      嵌体再治疗后5年来无问题
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#9298a6] w-full">
                      金●● · 40多岁女性
                    </p>
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
