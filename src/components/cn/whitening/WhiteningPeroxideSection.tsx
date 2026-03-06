'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function WhiteningPeroxideSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
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
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              牙科专业美白<br />
              过氧化氢美白
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              使用医用高浓度美白剂<br />
              体验安全有效的美白
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 奥齿泰Beautis美白剂 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  奥齿泰Beautis美白系统
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                韩国第一种植体企业奥齿泰的高端专业美白系统
              </p>

              {/* Beautis美白剂图片 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="奥齿泰Beautis美白剂"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis灯光设备图片 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="奥齿泰Beautis灯光设备"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis 15美白剂：</span> 15%过氧化氢 + 特殊活性剂，快速美白效果
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis灯光：</span> 高强度LED光线（150-220mW/㎠）最大化美白效果
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">含牙齿敏感防止剂：</span> 安全配方，最大限度减少酸痛症状
                  </p>
                </div>
              </div>
            </div>

            {/* 施术原理 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  施术原理
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  医用高浓度过氧化氢（15%）渗透牙釉质，氧化分解牙本质内部的着色分子<br />
                  在此过程中，着色物质转化为无色小分子，自然变成白色牙齿
                </p>
                {/* H2O2反应图片 */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="过氧化氢美白原理"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 施术过程 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  施术过程
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    '涂抹牙龈保护剂（防止牙龈损伤）',
                    '涂抹高浓度美白剂',
                    'LED光线照射（15-20分钟）',
                    '重复2-3次（当天完成）',
                    '氟化物涂抹收尾'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#006aff] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: '牙齿磨削ZERO', desc: '牙釉质无损伤' },
                { title: '立即见效', desc: '施术后立即提亮2-8个等级' },
                { title: '自然色泽', desc: '提亮原有牙齿颜色' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* 专业美白 vs 自助美白 */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              为什么必须选择专业美白？
            </h3>

            {/* 安全性验证 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  全球牙医认可的安全性
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                美白治疗是全球牙医认可的最安全的牙齿治疗方法。许多研究和临床实践都已证明其安全性，在牙医监督下进行的专业美白迄今为止几乎未报告过对牙齿的副作用。
              </p>
            </div>

            {/* 效果差异 */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">专业美白</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">自助美白</p>
                </div>

                {/* 浓度 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">15%高浓度</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">食药处批准医用</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4%低浓度</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">效果微弱</p>
                </div>

                {/* 效果 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">一天内</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">提亮3-4个等级</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4周以上</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">效果逐渐微弱</p>
                </div>

                {/* 安全性 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">术前口腔检查</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ 氟化物涂抹处理</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">自行施术</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">牙龈烧伤风险</p>
                </div>
              </div>
            </div>

            {/* 副作用最小化 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  系统化副作用管理
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">施术前检查：</span> 确认蛀牙、牙龈疾病后安全进行
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">牙龈保护：</span> 医用保护剂100%预防软组织烧伤
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">施术后管理：</span> 氟化物涂抹·再矿化处理，最大限度减少酸痛症状
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">专科医生监控：</span> 实时状态确认，安全美白
                  </p>
                </div>
              </div>
            </div>

            {/* 临床经验 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  丰富的临床经验
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">拥有1,000例以上美白施术经验</span>，针对各种牙齿状况积累了丰富的经验。根据着色程度、牙齿敏感度、现有修复体等制定个性化美白计划。
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              常见问题
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: '美白后牙齿不会酸痛吗？',
                  answer: '可能会暂时出现轻微的酸痛症状，但Beautis美白剂含有牙齿敏感防止剂，可最大限度减少酸痛症状。施术后通过氟化物涂抹和再矿化处理进一步减少敏感度，大部分在数天内消失。凭借10年以上的临床经验，根据每位患者的牙齿状况安全进行。'
                },
                {
                  question: '美白效果能持续多久？',
                  answer: '专业美白的效果通常持续1-2年以上。根据个人饮食习惯、是否吸烟、口腔护理状况会有所差异，如果经常摄入咖啡、红酒、咖喱等着色食物或吸烟，效果持续时间会缩短。通过定期洗牙和正确刷牙，可以更长时间保持美白效果。'
                },
                {
                  question: '如果着色再次出现，可以再次施术吗？',
                  answer: '可以，可以再次施术。初次美白后6个月~1年左右建议再次施术，比初次施术用更短的时间和更少的次数也能看到效果。通过定期补充（touch-up）施术可以持续保持明亮的牙齿，费用也比初次施术便宜。'
                },
                {
                  question: '美白后有注意事项吗？',
                  answer: '美白后24-48小时内请避免引起着色的食物（咖啡、红酒、咖喱、泡菜、巧克力等）和香烟。这段时间牙齿表面的微小孔隙处于打开状态，容易着色。另外，冷食或热食可能暂时引起酸痛，请小心，建议使用含氟牙膏。'
                },
                {
                  question: '现有修复体（牙冠、树脂）也能美白吗？',
                  answer: '不能，人工修复体不能美白。过氧化氢美白剂只能分解天然牙齿的着色物质，因此牙冠、树脂、贴面等修复体会保持原来的颜色。因此，如果有修复体，美白后修复体和天然牙齿可能会出现色差，可能需要考虑更换修复体。施术前可通过咨询获得准确的指导。'
                },
                {
                  question: '怀孕或哺乳期可以美白吗？',
                  answer: '不建议在怀孕或哺乳期进行美白施术。关于过氧化氢对胎儿或母乳的影响尚无充分研究，为了安全起见，建议在怀孕和哺乳结束后接受施术。'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f3f6fb] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-5 flex items-start justify-between gap-3 text-left hover:bg-[#e9ebf1] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-[#006aff] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#006aff] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#006aff] font-bold text-[16px] shrink-0">A.</span>
                        <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#727582]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
