'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full mb-4">
          <div className="flex justify-center mb-6 opacity-80">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="コドクファースト歯科"
              width={140}
              height={84}
              className="object-contain grayscale opacity-60"
            />
          </div>
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight">
            コドクファースト歯科が
            <br />
            <span className="text-[#008095] relative inline-block">
              特別な理由
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Reason 1 */}
          <FadeInSection delay={100}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[22px] font-bold text-[#3e3a3a] leading-[1.4] mb-4 break-keep">
                現職大学病院客員教授として<br />
                <span className="text-[#008095] text-[24px]">インプラントについて<br/>歯科医師たちを教えています</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                インプラント手術は、誰が行うかが最も重要です。
                大学病院で高難度手術を執刀してきた
                <span className="font-bold text-[#333]"> 朝鮮大学校歯科病院 客員教授</span>が直接手術します。
              </p>

              {/* 院長経歴画像 Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="イ・ドンヒョン院長 各種認証書"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="イ・ドンヒョン院長 経歴および保健福祉部認証"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
              </div>
              {/* 院長手術写真 */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="イ・ドンヒョン院長 手術の様子"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">統合歯科専門医 責任診療</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">高難度インプラントから最終補綴まで<br/>保健福祉部認証専門医が直接責任を持ちます</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M22 10v6M2 10v6" /><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M12 22V12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">オステム・ポイント・デンティス インプラント研究諮問委員</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">韓国代表インプラント企業の研究諮問委員として<br/>最新技術と設備を直接活用しています</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 2 */}
          <FadeInSection delay={200}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                コドクファースト歯科は常に
                <br />
                <span className="text-[#008095]">2回手術します</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                代表院長が直接バーチャルインプラント手術で
                <br />
                最適な埋入位置を設計した後、実際の手術を行います
              </p>

              {/* 3Dデジタルガイド画像 */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="3Dデジタルガイド手術"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              {/* 核心メリットバッジ */}
              <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-4 mb-5 shadow-lg shadow-[#008095]/20">
                <p className="font-bold text-white text-[14px] text-center leading-[1.5]">
                  早くて快適な手術で
                  <br />
                  腫れと痛み、骨移植を最小化
                </p>
              </div>

              {/* 5段階プロセス */}
              <div className="space-y-2">
                {[
                  { step: 1, title: '3D口腔スキャニング', desc: '口腔内部をスキャンして精密診断' },
                  { step: 2, title: 'バーチャル手術設計', desc: 'コンピューター上で最適な埋入計画を策定' },
                  { step: 3, title: 'ガイド装着', desc: '1mmの誤差もない精密誘導装置' },
                  { step: 4, title: '最小切開手術', desc: '施術時間短縮、痛み/腫れ最小化' },
                  { step: 5, title: '模擬手術検証', desc: '誤差最小化で施術満足度向上' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3 bg-[#f8fbfd] p-3 rounded-xl border border-[#eef4f8]">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#008095] to-[#006B7A] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-white text-[12px] font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#333]">{item.title}</p>
                      <p className="text-[12px] text-[#888]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 3 */}
          <FadeInSection delay={300}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                無切開インプラント &
                <br />
                <span className="text-[#008095]">当日埋入</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                歯茎を切開しないため痛みと腫れが少なく
                <br />
                早い回復が可能です
              </p>

              {/* 手術室画像 */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/goduk_images/flapless-implant-surgery.webp"
                    alt="無切開インプラント手術"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-5 text-white shadow-lg shadow-[#008095]/20">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                    <span className="font-black text-lg">01</span>
                    <span className="font-bold">無切開インプラント</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-white font-medium">
                    <li>• 歯茎切開なしの小さな穴で埋入</li>
                    <li>• 出血、痛み、腫れ最小化</li>
                    <li>• 手術後の早い日常復帰</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#edf2f7] rounded-xl p-5 text-[#333]">
                   <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <span className="font-black text-lg text-[#008095]">02</span>
                    <span className="font-bold">抜歯後当日埋入</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li>• 抜歯と同時にインプラント埋入</li>
                    <li>• 来院回数と治療期間の短縮</li>
                    <li>• 歯槽骨損失の最小化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 4 */}
          <FadeInSection delay={400}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                インプラント寿命を決める
                <br />
                <span className="text-[#008095]">科学的アフターケア</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                インプラント失敗の主原因は「炎症」です。<br/>
                目に見えない <span className="font-bold text-[#333]">口腔内有害菌</span>まで分析して<br/>
                インプラント周囲炎を根本から遮断します。
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] mb-3 space-y-4">
                <div>
                   <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    埋入よりも管理がもっと重要です
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    天然歯より炎症に弱いインプラント。<br/>
                    精密検査で細菌分布を把握し<br/>
                    個人別オーダーメイドケアで寿命を飛躍的に延ばします。
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    データ基盤 周囲炎予防システム
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      インプラント周囲炎原因菌追跡
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      炎症発生前の先制的予防措置
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      客観的データに基づく生涯管理
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-[13px] text-[#888] bg-gray-50 p-3 rounded-lg leading-[1.5] border border-gray-100">
                <span className="font-bold text-[#008095]">Doctor&apos;s Note.</span> 天然歯の価値は約3,000万ウォンです。精密検査で大切な歯をお守りします。
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 5 */}
          <FadeInSection delay={500}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">5</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 05</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                最小埋入、最小切開
                <br />
                <span className="text-[#008095]">最小骨移植</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                精密なデジタル診断で
                <br />
                必要な分だけ最小限の施術を行います
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: '最小埋入', desc: '上顎6本、下顎4本のみで確実に固定' },
                  { title: '最小切開', desc: '回復が早い最小切開手術' },
                  { title: '最小骨移植', desc: '精密診断で最小限の骨移植のみ実施' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#f0f9ff] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#333] mb-0.5">{item.title}</p>
                      <p className="text-[13px] text-[#777] leading-[1.4]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
