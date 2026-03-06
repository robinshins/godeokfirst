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
              歯科専門家ホワイトニング<br />
              過酸化水素ホワイトニング
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              医療用高濃度ホワイトニング剤で<br />
              安全で効果的なホワイトニングを体験してください
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 오스템 뷰티스 미백제 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <div className="text-2xl">✨</div>
                <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-white">
                  オステムビューティス（Beautis）ホワイトニングシステム
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-white opacity-90">
                韓国1位インプラント企業オステムのプレミアム専門家用ホワイトニングシステム
              </p>

              {/* 뷰티스 미백제 이미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-whitening-agent.png"
                  alt="オステムビューティスホワイトニング剤"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 뷰티스 라이트 기기 이미지 */}
              <div className="bg-white/10 rounded-[16px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/beautis-light-device.jpg"
                  alt="オステムビューティスライト機器"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">ビューティス15ホワイトニング剤:</span> 15%過酸化水素 + 特殊活性剤で迅速なホワイトニング効果
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">ビューティスライト:</span> 高強度LED光線（150-220mW/㎠）でホワイトニング効果を最大化
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-white text-sm shrink-0">•</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                    <span className="font-bold">知覚過敏防止剤含有:</span> しみる症状を最小化する安全な処方
                  </p>
                </div>
              </div>
            </div>

            {/* 시술 원리 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  施術原理
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  医療用高濃度過酸化水素（15%）が歯のエナメル質を透過し、象牙質内部の着色分子を酸化・分解します<br />
                  この過程で着色物質が無色の小さな分子に変換され、自然に白い歯になります
                </p>
                {/* H2O2 반응 이미지 */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/h2o2.png"
                    alt="過酸化水素ホワイトニング原理"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 시술 과정 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  施術過程
                </p>
                <div className="flex flex-col gap-[5px]">
                  {[
                    '歯茎保護剤塗布（歯茎損傷防止）',
                    '高濃度ホワイトニング剤塗布',
                    'LED光線照射（15-20分）',
                    '2-3回繰り返し（当日完了）',
                    'フッ素塗布で仕上げ'
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
                { title: '歯の削除ゼロ', desc: 'エナメル質の損傷なし' },
                { title: '即座の効果', desc: '施術直後2-8段階明るくなる' },
                { title: '自然な色調', desc: '本来の歯の色のトーンアップ' }
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

          {/* 전문가 미백 vs 셀프 미백 */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              なぜ専門家ホワイトニングでなければならないのか？
            </h3>

            {/* 안전성 검증 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">🛡️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  世界中の歯科医師が認めた安全性
                </p>
              </div>
              <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                ホワイトニング治療は世界中の歯科医師が認めた最も安全な歯科治療方法です。多くの研究と臨床で安全性が実証されており、歯科医師のモニタリングの下で行われる専門家ホワイトニングは現在まで歯に対する副作用がほとんど報告されていません。
              </p>
            </div>

            {/* 효과 차이 */}
            <div className="bg-white rounded-[12px] border border-[#e9ebf1] overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-[#e9ebf1]">
                {/* Header */}
                <div className="bg-[#006aff] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-white">専門家ホワイトニング</p>
                </div>
                <div className="bg-[#f3f6fb] p-3 flex items-center justify-center">
                  <p className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">セルフホワイトニング</p>
                </div>

                {/* 농도 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">15% 高濃度</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">食薬処認可医療用</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">1-4% 低濃度</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">効果わずか</p>
                </div>

                {/* 효과 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">1日で</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">3-4段階明るくなる</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">4週間以上</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">徐々にわずかな効果</p>
                </div>

                {/* 안전성 */}
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">事前口腔検診</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#727582]">+ フッ素塗布処置</p>
                </div>
                <div className="bg-white p-3 flex flex-col gap-1">
                  <p className="font-bold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">セルフ施術</p>
                  <p className="font-medium text-[11px] leading-[1.4] tracking-[-0.22px] text-[#999]">歯茎やけどのリスク</p>
                </div>
              </div>
            </div>

            {/* 부작용 최소화 */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">⚕️</div>
                <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-black">
                  体系的な副作用管理
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">施術前検診:</span> 虫歯、歯茎疾患確認後、安全に進行
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">歯茎保護:</span> 医療用保護剤で軟組織やけど100%予防
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">施術後のケア:</span> フッ素塗布・再石灰化処置でしみる症状を最小化
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#006aff] text-sm shrink-0">✓</span>
                  <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#727582]">
                    <span className="font-bold text-[#006aff]">専門医モニタリング:</span> リアルタイム状態確認で安全なホワイトニング
                  </p>
                </div>
              </div>
            </div>

            {/* 임상 경험 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-xl">📊</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  豊富な臨床経験
                </p>
              </div>
              <div className="bg-white/10 rounded-[12px] p-3 flex flex-col gap-2">
                <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                  <span className="font-bold">1,000件以上のホワイトニング施術経験</span>で様々な歯の状態に対するノウハウを保有しています。着色の程度、歯の敏感度、既存の補綴物などを考慮したカスタムホワイトニング計画を立てます。
                </p>
              </div>
            </div>
          </div>

          {/* Q&A Section */}
          <div className="bg-white rounded-[24px] border border-[#e9ebf1] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              よくある質問
            </h3>

            <div className="flex flex-col gap-3">
              {[
                {
                  question: 'ホワイトニング後、歯がしみませんか？',
                  answer: '一時的に若干のしみる症状があることがありますが、ビューティスホワイトニング剤は知覚過敏防止剤を含有しており、しみる症状を最小化します。施術後のフッ素塗布と再石灰化処置を通じて敏感度をさらに減らし、ほとんどが数日以内に消えます。10年以上の臨床経験で患者一人一人の歯の状態に合わせて安全に進行します。'
                },
                {
                  question: 'ホワイトニング効果はどのくらい持続しますか？',
                  answer: '専門家ホワイトニングの効果は一般的に1-2年以上持続します。個人の食習慣、喫煙の有無、口腔管理状態によって差があり、コーヒー、ワイン、カレーなどの着色食品を頻繁に摂取したり喫煙をする場合、効果の持続期間が短くなることがあります。定期的なスケーリングと正しいブラッシングでホワイトニング効果をより長く維持できます。'
                },
                {
                  question: '着色が再び生じたら再施術は可能ですか？',
                  answer: 'はい、再施術が可能です。初回ホワイトニング後6ヶ月～1年程度経つと再施術をお勧めしており、初回施術よりも短い時間と少ない回数でも効果を得られます。定期的なタッチアップ（touch-up）施術で明るい歯を継続維持でき、費用も初回施術より安価です。'
                },
                {
                  question: 'ホワイトニング後の注意事項はありますか？',
                  answer: 'ホワイトニング後24-48時間は着色を誘発する食品（コーヒー、ワイン、カレー、キムチ、チョコレートなど）とタバコを避けてください。この期間は歯の表面の微細な穴が開いている状態で着色しやすい時期です。また、冷たい食べ物や熱い食べ物は一時的にしみることがありますので注意し、フッ素含有歯磨き粉の使用をお勧めします。'
                },
                {
                  question: '既存の補綴物（クラウン、レジン）もホワイトニングされますか？',
                  answer: 'いいえ、人工補綴物はホワイトニングされません。過酸化水素ホワイトニング剤は自然歯の着色物質のみを分解するため、クラウン、レジン、ラミネートなどの補綴物は元の色を維持します。したがって補綴物がある場合、ホワイトニング後に補綴物と自然歯の色に差が出る可能性があり、補綴物の交換を検討する必要があります。施術前の相談を通じて正確な案内を受けられます。'
                },
                {
                  question: '妊娠中または授乳中でもホワイトニングは可能ですか？',
                  answer: '妊娠中または授乳中にはホワイトニング施術をお勧めしません。過酸化水素が胎児または母乳に及ぼす影響についての十分な研究がないため、安全のために妊娠と授乳が終わってから施術を受けることをお勧めします。'
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
