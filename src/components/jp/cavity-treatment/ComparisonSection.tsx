'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  return (
    <div className="bg-[#f3f6fb] w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-[50px] items-start w-full">
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center w-full">
                <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
                  保存哲学を守る歯科
                </h2>
              </div>
            </div>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              歯は一度失うと二度と戻りません<br />
              1本でも多く救うことが本物の専門医の使命です
            </p>
          </div>

          <div className="relative w-full h-[263px]">
            <div className="absolute left-[10px] top-[20.21px] w-[133px]">
              <div className="flex flex-col gap-[10px] items-start w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-[#37373e] flex-1">
                    一般歯科
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] w-full">
                      収益性重視
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582] w-full">
                      抜歯/インプラント推奨
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      施術を早く終了
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      一般診療医が執刀
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d]">
                      高費用インプラント誘導
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-[157px] top-[-13px] w-[186px] bg-white border-2 border-[#008095] rounded-2xl p-5">
              <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                <div className="flex gap-[10.671px] items-start w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.4] tracking-[-0.36px] text-black flex-1">
                    コドクファースト歯科
                  </h3>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      保存重視
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095] w-full">
                      天然歯保存優先
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      精密診断 段階的治療
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e]">
                      統合歯科専門医が直接執刀
                    </p>
                  </div>
                  <div className="py-3 w-full">
                    <p className="font-['Pretendard_JP'] font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#37373e] w-full">
                      保険適用優先
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095] w-full">
                      患者負担最小化
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-start w-full">
            <div className="bg-white border border-[#f3f6fb] rounded-[24px] w-full overflow-hidden">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-5 items-center justify-center px-4 py-6 w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[22px] leading-[1.4] tracking-[-0.44px] text-black text-center w-full">
                    &ldquo;こんなに丁寧に<br />
                    治療してくれるとは思いませんでした&rdquo;
                  </h3>
                  <div className="flex flex-col gap-4 items-start w-full">
                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src="/images/cavity-before-after.png"
                        alt="治療前"
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

                    <div className="bg-[#f3f6fb] h-48 overflow-hidden relative rounded-[20px] w-full">
                      <Image
                        src="/images/cavity-before-after.png"
                        alt="治療後"
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
                      インレー再治療後5年間問題なし
                    </p>
                    <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#9298a6] w-full">
                      キム●● · 40代女性
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
