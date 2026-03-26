'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const benefits = [
    {
      title: '需要种植牙管理的人',
      desc: '为预防种植牙周围炎进行有害菌分析'
    },
    {
      title: '牙龈疾病·口臭严重的人',
      desc: '牙周病致病菌精密分析及定制管理'
    },
    {
      title: '担心全身健康的人',
      desc: '通过口腔-肠道连接轴分析检查全身健康'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="高德First牙科"
              width={168}
              height={24}
              className="w-full h-full brightness-0 invert"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              SCIENTIFIC AFTERCARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              比植入更重要的是<br />
              术后管理
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              &quot;为了让您终身使用，我们全程负责&quot;<br />
              <span className="text-white/70 text-[14px]">韩国牙科首次引入NGS微生物检测</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">

          <div className="w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
              <p className="text-[#6eb7bc] text-[13px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                🧬 全球基因组分析企业 <span className="text-white">Macrogen</span> 合作
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[380px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/macrogen-microbiome-test.png"
                alt="Macrogen NGS微生物检测"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-gradient-to-br from-[#008fd2] to-[#006aaa] box-border flex flex-col gap-3 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[20px] text-white tracking-[-0.4px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                NGS次世代测序分析
              </p>
              <p className="font-medium leading-[1.6] not-italic text-white/90 text-[14px] tracking-[-0.28px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                精密分析口腔内700种以上微生物<br />
                提前发现龋齿·牙周炎致病菌
              </p>
            </div>
          </div>

          <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              为什么在牙科做微生物检测？
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              口腔是<span className="text-[#6eb7bc] font-bold">&quot;健康开始的入口&quot;</span>。口腔内有害菌不仅停留在口腔，还会通过血流扩散到全身，可能影响<span className="text-white font-bold">心血管疾病、糖尿病、痴呆</span>等。
            </p>
          </div>

          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[250px] relative shrink-0 w-full">
              <Image
                src="/images_official/macrogen-test-result.png"
                alt="微生物检测报告"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-center p-4 relative shrink-0 w-full">
              <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                提供个人定制分析报告
              </p>
              <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                检测后2~3周内告知详细结果
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[340px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/microbiome-health-impact.png"
                alt="微生物对全身健康的影响"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                口腔微生物 → 全身健康连接
              </p>
              <p className="text-[#a0c4d4] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                口腔内有害菌通过血管扩散到全身<br />
                影响多种全身疾病
              </p>
            </div>
          </div>

          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              推荐以下人群
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#008fd2] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              检测过程很简单
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">💧</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>唾液采集</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>3分钟</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">🧬</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>NGS分析</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Macrogen</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>结果咨询</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>2~3周后</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
