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
              src="/고덕퍼스트牙科-로고-(블랙).png"
              alt="高德First牙科"
              width={168}
              height={24}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-[#008095] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              高德First牙科 <br />
              特别的理由
            </h2>
          </div>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">

          {/* Reason 1: 综合牙科专家 + 大学医院 客座教授 */}
          <FadeInSection delay={100} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                培养牙医的
                <br />
                <span className="text-[#008095]">综合牙科专家</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                朝鲜大学牙科医院 客座教授 曾任,<br />
                首尔大学牙医学研究生院 种植牙 优秀奖 结业.<br />
                <span className="font-bold text-[#333]">综合牙科专家</span>亲自诊疗。
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="院长 资格证及认证书"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">资格证 · 认证书</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/院长履历 등 걸려有的사진.jpg"
                    alt="院长 履历"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">院长 履历</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Reason 2: 丰富的 手术 经验 */}
          <FadeInSection delay={200} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                1,200次+ 种植牙
                <br />
                <span className="text-[#008095]">再手术 0例</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                高德Edu Town 开业以来 至今<br />
                种植牙 再手术 例，一例都没有.<br />
                <span className="font-bold text-[#333]">结果证明的实力</span>。
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/手术的场景.jpeg"
                  alt="种植牙 手术 场景"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8] space-y-3">
                {[
                  { label: '种植牙 植入', value: '1,200次+' },
                  { label: '高德Edu Town 开业以来 再手术', value: '0例' },
                  { label: '患者 满意度', value: '4.9 / 5.0' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[14px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.label}</span>
                    <span className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Reason 3: 数字 精密 手术 */}
          <FadeInSection delay={300} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                3D 数字 诊断地
                <br />
                <span className="text-[#008095]">精密 定制 手术</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                3D CT 分析和 数字化引导 通过<br />
                骨骼 状态 最优化的 位置 植入。.<br />
                <span className="font-bold text-[#333]">最少切口、最少骨移植</span>，恢复更快。
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="3D数字种植牙手术引导"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: '3D CT精密分析', desc: '以3D准确掌握骨骼密度和厚度' },
                  { title: '数字手术引导', desc: '按设计准确植入' },
                  { title: '最新设备齐全', desc: '扫描仪、数字技工系统配备' },
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

          {/* Reason 4: 术后管理 */}
          <FadeInSection delay={400} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                手术 后也
                <br />
                <span className="text-[#008095]">全程负责诊疗</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                代表院长 咨询开始 手术, 维护管理到<br />
                亲自 负责。. 中间不更换医生<br />
                <span className="font-bold text-[#333]">从头到尾同一位院长</span>诊疗。
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] space-y-4">
                {[
                  { icon: '🔍', title: '定期检查', desc: '每6个月定期检查确认状态' },
                  { icon: '🦷', title: '专家清洁', desc: '预防种植牙周围炎症的洁牙' },
                  { icon: '📋', title: '个人管理计划', desc: '根据患者状态定制维护管理' },
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
