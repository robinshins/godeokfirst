'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4 bg-[#21314E]">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              综合牙科专家<br />亲自诊疗。
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[20px] leading-[1.6] tracking-[-0.4px] w-full text-[#4DC8D8]">
              高德First牙科 代表院长
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="李东贤 代表院长"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    李东贤
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      代表院长
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>保健福利部认证 综合牙科专家</p>
                  <p>朝鲜大学牙科医院 客座教授</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>朝鲜大学牙科学院毕业</li>
                <li>朝鲜大学牙科医院综合牙科专科结业</li>
                <li>大韩综合牙医学会正式会员</li>
                <li>大韩口腔颌面种植学会正式会员</li>
                <li>数字导航种植牙专业</li>
                <li>种植牙·修复·根管治疗一站式诊疗</li>
              </ul>

              {/* 保存专业诊疗介绍 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    为守护天然牙的<br />特别保存治疗
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    以守护天然牙为牙医使命，最大限度保存天然牙。
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">根管治疗、再根管治疗</p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">需要精细操作的根管治疗是牙科保存科的专业领域。</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">牙髓再生术</p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">又称幼牙根管治疗的牙髓再生术，可使停止生长的恒牙神经复活，让牙根继续生长。</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">外伤牙齿处置</p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">凭借丰富临床经验，提前诊断外伤后牙齿的预后并迅速应对。</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">根尖切除术</p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">去除原本需要拔牙的牙根炎症以保存牙齿的高难度治疗。</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image src="/icons/check-teal.svg" alt="" width={20} height={20} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">牙齿再植术</p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">拔牙后去除引起炎症的部位，再重新植入的治疗。</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#008095]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#008095]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        作为保存科专家，凭借所有诊疗的丰富经验，通过与患者充分咨询进行最需要的治疗。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trios5 + 专家强调卡片 */}
          <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[20px] p-6 w-full">
            <p className="font-['Pretendard_JP'] text-[12px] font-bold text-white/60 uppercase tracking-[2px] mb-3">WHY GODUK FIRST</p>
            <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] text-white mb-4">
              综合牙科专家<br />从龋齿到根管治疗亲自负责
            </p>
            <div className="flex flex-col gap-2">
              {[
                '朝鲜大学牙科医院客座教授经历',
                'Trios5 口腔扫描仪 — 精密数字采集',
                '龋齿·嵌体·根管治疗丰富临床经验',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#4DC8D8] text-[13px]">✓</span>
                  <span className="text-white/90 text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
