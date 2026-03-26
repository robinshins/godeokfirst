'use client';

import { useState } from 'react';
import FadeInSection from '@/components/common/FadeInSection';
import { ChevronDown, Check, X, Shield, Clock, TrendingUp, Wallet } from 'lucide-react';

const treatments = [
  {
    id: 'denture',
    num: '01',
    tag: '健康保険適用',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    title: '従来型入れ歯',
    subtitle: '最も経済的な選択',
    stats: [
      { label: '費用負担', value: 1, icon: Wallet },
      { label: '快適さ', value: 2, icon: Shield },
      { label: '咀嚼力', value: 2, icon: TrendingUp },
      { label: '治療速度', value: 5, icon: Clock },
    ],
    color: '#10b981',
    pros: [
      '健康保険適用で最も安い費用',
      '65歳以上の自己負担が低い',
      '施術期間が比較的短い',
    ],
    cons: [
      '取り外しの不便さ',
      'ガタつきや違和感がある',
      '天然歯の咀嚼力の20〜30%水準',
    ],
    desc: '健康保険が適用され費用負担が最も少ないです。ただし取り外しが必要で、咀嚼力が天然歯の20〜30%水準のため食事に制限が生じる場合があります。',
  },
  {
    id: 'implant-denture',
    num: '02',
    tag: '65歳以上保険',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'インプラント入れ歯',
    subtitle: 'インプラント2本 + 保険入れ歯',
    stats: [
      { label: '費用負担', value: 2, icon: Wallet },
      { label: '快適さ', value: 3, icon: Shield },
      { label: '咀嚼力', value: 3, icon: TrendingUp },
      { label: '治療速度', value: 4, icon: Clock },
    ],
    color: '#3b82f6',
    pros: [
      '65歳以上インプラント2本まで保険適用',
      '一般入れ歯よりガタつき減少',
      'インプラント埋入部位の咀嚼力向上',
    ],
    cons: [
      '依然として取り外しが必要',
      '肉やりんごなどは依然として食べにくい',
      '2本超過のインプラントは保険未適用',
    ],
    desc: 'インプラント2本を埋入し入れ歯と接続する方式です。65歳以上はインプラント2本まで健康保険が適用されます。一般入れ歯より安定感が高まりますが食事制限は依然としてあります。',
  },
  {
    id: 'overdenture',
    num: '03',
    tag: '非保険',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
    title: 'オーバーデンチャー',
    subtitle: 'インプラント2〜4本 + 着脱式入れ歯',
    stats: [
      { label: '費用負担', value: 3, icon: Wallet },
      { label: '快適さ', value: 4, icon: Shield },
      { label: '咀嚼力', value: 4, icon: TrendingUp },
      { label: '治療速度', value: 3, icon: Clock },
    ],
    color: '#8b5cf6',
    pros: [
      '入れ歯の固定力が高まりガタつきが大幅に減少',
      '咀嚼力が一般入れ歯より確実に向上',
      '硬い食べ物も大きな不便なく摂取可能',
    ],
    cons: [
      'オーバーデンチャー自体は健康保険非適用',
      'インプラント数が増えるほど費用負担増加',
      '一般入れ歯より治療期間が長くなる',
    ],
    desc: 'インプラント2〜4本を埋入しその上に着脱式入れ歯を接続する方式です。オーバーデンチャー自体は健康保険非適用で、全治療費を自己負担する必要があります。代わりにインプラント入れ歯よりインプラント数が多く固定力と咀嚼力が顕著に向上します。',
  },
  {
    id: 'full-implant',
    num: '04',
    tag: 'プレミアム',
    tagColor: 'bg-orange-50 text-orange-600 border-orange-100',
    title: '全顎インプラント',
    subtitle: '片顎あたり8〜12本埋入',
    stats: [
      { label: '費用負担', value: 5, icon: Wallet },
      { label: '快適さ', value: 5, icon: Shield },
      { label: '咀嚼力', value: 5, icon: TrendingUp },
      { label: '治療速度', value: 2, icon: Clock },
    ],
    color: '#f59e0b',
    pros: [
      '天然歯の咀嚼力の80〜90%回復',
      '最も自然で快適な感覚',
      '半永久的な使用期間が期待できる',
    ],
    cons: [
      '費用が最も高く手術負担がある',
      '骨の状態が良い必要があり骨移植の可能性が高い',
      '治療期間が最も長い',
    ],
    desc: '片顎に8〜12本のインプラントを埋入して全ての歯をカバーします。治療がうまくいけば食生活に制限がなく、自分の歯のように快適にお使いいただけます。',
  },
  {
    id: 'all-on-x',
    num: '05',
    tag: 'おすすめ治療',
    tagColor: 'bg-[#008095]/10 text-[#008095] border-[#008095]/20',
    title: 'All-on-X インプラント',
    subtitle: 'All-on-4 / All-on-6',
    stats: [
      { label: '費用負担', value: 4, icon: Wallet },
      { label: '快適さ', value: 5, icon: Shield },
      { label: '咀嚼力', value: 5, icon: TrendingUp },
      { label: '治療速度', value: 4, icon: Clock },
    ],
    color: '#008095',
    pros: [
      '全顎インプラント対比で費用は低く効果は同等',
      '骨の状態が悪い方も骨移植最小化で可能',
      '治療期間を大幅に短縮（3〜6ヶ月）',
    ],
    cons: [
      '一般入れ歯よりは高い費用負担',
      '高難度手術で熟練した医療チームが必須',
    ],
    desc: '片顎あたり4〜6本のインプラントだけで全ての歯を完成します。骨が良い所だけを選んで埋入するため骨移植を最小化し期間は短くなりながらも全顎インプラントの便利さを享受できます。',
  },
];

function RatingVisual({ value, max = 5, color = '#008095' }: { value: number, max?: number, color?: string }) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <div
          key={i}
          className="h-1.5 w-4 rounded-full transition-all duration-300"
          style={{
            backgroundColor: i < value ? color : '#e2e8f0',
            opacity: i < value ? 1 : 0.4
          }}
        />
      ))}
    </div>
  );
}

export default function TreatmentOptionsSection() {
  const [openId, setOpenId] = useState<string | null>('all-on-x');

  return (
    <div className="bg-slate-50 w-full flex justify-center overflow-hidden">
      <div className="box-border flex flex-col gap-10 items-start px-5 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-5 items-start w-full">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-[#008095] tracking-[3px] uppercase">TREATMENT GUIDE</span>
            <div className="h-1 w-12 bg-[#008095] rounded-full" />
          </div>

          <h2 className="font-extrabold leading-[1.3] text-[30px] text-[#111] tracking-[-1px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            歯が一本もなくても<br />
            <span className="text-[#008095] relative inline-block">
              自分に合った選択肢
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#008095]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>

          <p className="text-[15px] text-[#555] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            費用、期間、快適さまで考慮して<br />
            最も合理的な治療方法をご提案します。
          </p>
        </FadeInSection>

        {/* Treatment Accordion */}
        <div className="flex flex-col gap-4 w-full">
          {treatments.map((t, index) => {
            const isOpen = openId === t.id;
            return (
              <FadeInSection key={t.id} delay={index * 100}>
                <div
                  className={`group w-full rounded-[24px] transition-all duration-500 overflow-hidden border ${
                    isOpen
                    ? 'bg-white border-[#008095]/20 shadow-[0_20px_40px_-12px_rgba(0,128,149,0.12)] ring-1 ring-[#008095]/5'
                    : 'bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Header row */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : t.id)}
                    className="w-full text-left flex items-center gap-4 p-5 sm:p-6"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[22px] transition-all duration-300 ${
                        isOpen ? 'text-white scale-110' : 'text-slate-300 bg-slate-50 group-hover:bg-slate-100 group-hover:text-slate-400'
                      }`}
                      style={{ backgroundColor: isOpen ? t.color : '' }}
                    >
                      {t.num}
                    </div>

                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${t.tagColor}`}>
                          {t.tag}
                        </span>
                      </div>
                      <h3 className={`font-bold text-[19px] tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#111]' : 'text-[#333]'}`} style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {t.title}
                      </h3>
                    </div>

                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#008095]/10 rotate-180' : 'bg-slate-50'}`}>
                      <ChevronDown size={18} className={isOpen ? 'text-[#008095]' : 'text-slate-400'} />
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 flex flex-col gap-6">
                      <div className="h-px w-full bg-slate-100" />

                      {/* 比較指標 */}
                      <div className="grid grid-cols-2 gap-3">
                        {t.stats.map((stat) => (
                          <div key={stat.label} className="bg-slate-50/80 rounded-2xl p-3 flex flex-col gap-2 border border-slate-100/50">
                            <div className="flex items-center gap-2">
                              <stat.icon size={12} className="text-[#008095]" />
                              <span className="text-[11px] font-semibold text-slate-500" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{stat.label}</span>
                            </div>
                            <RatingVisual value={stat.value} color={t.color} />
                          </div>
                        ))}
                      </div>

                      {/* 説明 */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 rounded-full" />
                        <p className="pl-4 text-[14px] text-[#444] leading-[1.8] font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                          {t.desc}
                        </p>
                      </div>

                      {/* メリット・デメリット */}
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-emerald-50/40 rounded-[20px] p-4 border border-emerald-100/50">
                          <p className="font-bold text-[13px] text-emerald-700 flex items-center gap-2 mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            メリット
                          </p>
                          <div className="flex flex-col gap-2.5">
                            {t.pros.map((pro, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[13px] text-slate-600 leading-tight" style={{ fontFamily: '"NanumSquare", sans-serif' }}>• {pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-rose-50/40 rounded-[20px] p-4 border border-rose-100/50">
                          <p className="font-bold text-[13px] text-rose-700 flex items-center gap-2 mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                            <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                              <X size={12} strokeWidth={3} />
                            </div>
                            デメリット
                          </p>
                          <div className="flex flex-col gap-2.5">
                            {t.cons.map((con, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[13px] text-slate-600 leading-tight" style={{ fontFamily: '"NanumSquare", sans-serif' }}>• {con}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={600} className="w-full">
          <div className="relative overflow-hidden bg-[#111] rounded-[32px] p-8 text-white">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#008095] opacity-20 blur-[80px] -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#008095] opacity-10 blur-[80px] -ml-20 -mb-20" />

            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[22px] leading-[1.3] tracking-tight" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  自分にぴったりの治療法、<br />
                  <span className="text-[#008095]">代表院長に直接お聞きください</span>
                </h4>
                <p className="text-[14px] text-slate-400 leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  骨の状態と予算に合わせて無条件に高い治療ではなく、<br />
                  自分の両親に勧められる最も正直な方法を探します。
                </p>
              </div>

              <a
                href="https://naver.me/5zXcoe78"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group"
              >
                <div className="bg-[#008095] hover:bg-[#009bb3] active:scale-[0.98] transition-all duration-300 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 shadow-[0_10px_20px_-5px_rgba(0,128,149,0.3)]">
                  <span className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    1:1オーダーメイド相談予約
                  </span>
                  <ChevronDown size={18} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
