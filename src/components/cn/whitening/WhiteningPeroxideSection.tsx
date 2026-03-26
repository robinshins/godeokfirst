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
              牙科 专家 美白<br />
              过氧化氢 美白
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              用医疗级高浓度美白剂<br />
              体验安全有效的美白
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 奥齿泰 Beautis 美白제 */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0"><circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/><path d="M11 6v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  奥齿泰 Beautis(Beautis) 美白 时统
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                韩国第一种植牙企业奥齿泰的高端专家美白系统
              </p>

              {/* Beautis 美白제 미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="奥齿泰 Beautis 美白剂"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Beautis 라트 기기 미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="奥齿泰 Beautis 光照设备"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis 15 美白剂：</span> 15%过氧化氢 + 特殊活性剂带来快速美白效果
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">Beautis Light：</span> 高强度LED光线(150-220mW/㎠)最大化美白效果
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">含知觉过敏防护剂：</span> 最小化敏感症状的安全处方
                  </p>
                </div>
              </div>
            </div>

            {/* 治疗 원리 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  治疗原理
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  医疗级高浓度过氧化氢(15%)渗透牙齿釉质后，将牙本质内部的色素沉着分子氧化分解。<br />
                  在此过程中，色素沉着物质转换为无色的小分子，自然呈现洁白牙齿。
                </p>
                {/* H2O2 반응 미지 */}
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

            {/* 治疗 过程 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  治疗 过程
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    '牙龈保护剂涂布（防止牙龈损伤）',
                    '高浓度美白剂涂布',
                    'LED光线照射（15-20分钟）',
                    '2-3次反复（当日完成）',
                    '氟素涂布完成'
                  ].map((step, index) => (
                    <div key={index} className="flex gap-2 items-start font-semibold text-[15px] leading-[1.4] tracking-[-0.3px]">
                      <p className="text-[#008095] w-3 shrink-0">{index + 1}</p>
                      <p className="text-[#727582] whitespace-pre">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: '牙齿磨除 ZERO', desc: '无釉质损伤' },
                { title: '即时效果', desc: '治疗后立即变亮2-8个色阶' },
                { title: '自然的颜色', desc: '提亮原本的牙齿颜色' }
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

          {/* 专家 美白 vs 셀프 美白 */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center">
              为什么要选择专家美白？
            </h3>

            {/* 安全성 验证 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 2L3 5v5c0 4.1 3.1 7.9 7 9 3.9-1.1 7-4.9 7-9V5L10 2Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  全世界牙科医生认可的安全性
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                美白治疗是全世界牙科医生认可的最安全的牙齿治疗方法。在大量研究和临床中安全性已验证，在牙科医生监测下进行的专家美白至今几乎未报告过对牙齿的副作用。
              </p>
            </div>

            {/* 效果 차 */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#008095] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">专家 美白</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">自助美白</p>
                </div>

                {/* 농也 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">15% 高浓度</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">食药处 许可 医疗用</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% 低浓度</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">效果 微弱</p>
                </div>

                {/* 效果 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">一天内</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4阶段 变亮</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4周以上</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">逐渐微弱的效果</p>
                </div>

                {/* 安全성 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#008095]">事前口腔检查</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ 氟素涂布 处置</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">自行治疗</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">牙龈 灼伤 风险</p>
                </div>
              </div>
            </div>

            {/* 副作用 最小化 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="8" y="3" width="4" height="14" rx="2" stroke="#008095" strokeWidth="1.5"/><rect x="3" y="8" width="14" height="4" rx="2" stroke="#008095" strokeWidth="1.5"/></svg>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  系统的 副作用 管理
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">治疗 前 检查:</span> 龋齿, 牙龈 疾病 确认 后 安全地 进行
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">牙龈保护：</span> 用医疗级保护剂100%预防软组织灼伤
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">治疗后管理：</span> 通过氟素涂布和再矿化处置最小化敏感症状
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#008095] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#008095]">专家监测：</span> 实时确认状态的安全美白
                  </p>
                </div>
              </div>
            </div>

            {/* 临床 经验 */}
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><rect x="3" y="10" width="3" height="7" rx="1" fill="white" fillOpacity="0.7"/><rect x="8.5" y="6" width="3" height="11" rx="1" fill="white" fillOpacity="0.7"/><rect x="14" y="3" width="3" height="14" rx="1" fill="white"/></svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  丰富的 临床 经验
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  凭借<span className="font-bold">1,000例以上的美白治疗经验</span>，具备应对各种牙齿状态的经验和技术。综合考虑色素沉着程度、牙齿敏感度、现有修复体等制定定制美白计划。
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
                  question: '美白后牙齿会不会敏感？',
                  answer: '可能会有暂时性轻微敏感症状，但Beautis美白剂含有知觉过敏防护剂，将敏感症状最小化。治疗后通过氟素涂布和再矿化处置进一步减少敏感度，大部分在数日内消失。凭借10年以上的临床经验，根据每位患者的牙齿状态安全进行。'
                },
                {
                  question: '美白效果能持续多久？',
                  answer: '专家美白的效果一般可持续1-2年以上。根据个人的饮食习惯、是否吸烟、口腔管理状态会有差异，经常摄取咖啡、红酒、咖喱等色素沉着食物或吸烟的情况下效果持续时间可能缩短。通过定期洁牙和正确刷牙可以更长时间维持美白效果。'
                },
                {
                  question: '色素沉着再次出现可以再治疗吗？',
                  answer: '是的，可以再治疗。初次美白后6个月~1年左右建议再治疗，比初次治疗用更短的时间和更少的次数就能看到效果。通过定期的touch-up治疗可以持续维持明亮的牙齿，费用也比初次治疗便宜。'
                },
                {
                  question: '美白后有什么注意事项吗？',
                  answer: '美白后24-48小时期间请避免会引发色素沉着的食物（咖啡、红酒、咖喱、泡菜、巧克力等）和香烟。这段期间牙齿表面的微小孔隙处于打开状态，容易发生色素沉着。另外冷食或热食可能暂时引发敏感，请注意，建议使用含氟牙膏。'
                },
                {
                  question: '现有修复体（牙冠、树脂）也能美白吗？',
                  answer: '不能，人工修复体不能美白。过氧化氢美白剂只分解天然牙的色素沉着物质，牙冠、树脂、贴面等修复体会维持原来的颜色。因此有修复体的情况下，美白后修复体和天然牙可能出现颜色差异，可能需要考虑更换修复体。治疗前通过咨询可以获得准确的指导。'
                },
                {
                  question: '怀孕或哺乳期间也可以美白吗？',
                  answer: '怀孕或哺乳期间不建议进行美白治疗。关于过氧化氢对胎儿或母乳的影响尚无充分研究，为了安全建议在怀孕和哺乳结束后再接受治疗。'
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
                      <span className="text-[#008095] font-bold text-[16px] shrink-0">Q.</span>
                      <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                        {faq.question}
                      </p>
                    </div>
                    <div className={`text-[#008095] text-xl shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="bg-white rounded-[12px] p-4 flex items-start gap-3">
                        <span className="text-[#008095] font-bold text-[16px] shrink-0">A.</span>
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
