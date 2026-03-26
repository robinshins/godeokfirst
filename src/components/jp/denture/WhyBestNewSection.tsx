'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="コドクファースト歯科"
              width={168}
              height={24}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-[#008095] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              コドクファースト歯科が <br />
              特別な理由
            </h2>
          </div>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">

          {/* Reason 1 */}
          <FadeInSection delay={100} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                歯科医師を教える
                <br />
                <span className="text-[#008095]">統合歯科専門医</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                朝鮮大学校歯科病院 客員教授歴任、<br />
                ソウル大学校歯学大学院 インプラント優秀賞修了。<br />
                <span className="font-bold text-[#333]">統合歯科専門医</span>が直接診療します。
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="院長資格証および認証書"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">資格証・認証書</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="院長経歴"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">院長経歴</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Reason 2 */}
          <FadeInSection delay={200} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                1,200回+ インプラント
                <br />
                <span className="text-[#008095]">再手術0件</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                コドクエデュタウン開院以来、今まで<br />
                インプラント再手術が1件もありません。<br />
                <span className="font-bold text-[#333]">結果が証明する実力</span>です。
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="インプラント手術の様子"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8] space-y-3">
                {[
                  { label: 'インプラント埋入', value: '1,200回+' },
                  { label: 'コドクエデュタウン開院以来再手術', value: '0件' },
                  { label: '患者満足度', value: '4.9 / 5.0' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[14px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.label}</span>
                    <span className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Reason 3 */}
          <FadeInSection delay={300} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                3Dデジタル診断で
                <br />
                <span className="text-[#008095]">精密オーダーメイド手術</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                3D CT分析とデジタルガイドで<br />
                骨の状態に最適化された位置に埋入します。<br />
                <span className="font-bold text-[#333]">最小切開、最小骨移植</span>で回復が早いです。
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="3Dデジタルインプラント手術ガイド"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: '3D CT精密分析', desc: '骨密度・厚さを3Dで正確に把握' },
                  { title: 'デジタル手術ガイド', desc: '設計通りに正確に埋入' },
                  { title: '最新設備完備', desc: 'スキャナー、デジタル技工システム保有' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="bg-[#008095] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Reason 4 */}
          <FadeInSection delay={400} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                手術後も
                <br />
                <span className="text-[#008095]">最後まで責任診療</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                代表院長が相談から手術、メンテナンスまで<br />
                直接担当します。途中で変わる医師なく<br />
                <span className="font-bold text-[#333]">最初から最後まで同じ院長</span>が診療します。
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] space-y-4">
                {[
                  { icon: '🔍', title: '定期検診', desc: '6ヶ月周期の定期検診で状態確認' },
                  { icon: '🦷', title: '専門家クリーニング', desc: 'インプラント周囲炎予防スケーリング' },
                  { icon: '📋', title: '個別管理計画', desc: '患者の状態に合わせたオーダーメイドメンテナンス' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-[#333] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
