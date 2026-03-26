'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function InHouseLabSection() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <p className="text-[15px] font-bold text-[#008095] tracking-[3px] uppercase">
            DENTAL LAB
          </p>
          <h2 className="font-bold leading-[1.35] text-[32px] text-[#1a1a1a] tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            为了修复体品质<br />
            <span className="text-[#008095]">精选的专业技工所</span>
          </h2>
          <p className="font-semibold leading-[1.5] text-[#3e3a3a] text-base tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            好的技工所就是实力
          </p>
        </FadeInSection>

        {/* Key Point Card */}
        <FadeInSection delay={100} className="w-full bg-gradient-to-br from-[#008095]/10 to-[#6eb7bc]/10 rounded-2xl p-6 border border-[#008095]/20">
          <div className="flex items-start gap-4">
            <div className="bg-[#008095] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#3e3a3a] text-[17px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                技工师的实力决定修复体的品质。
              </p>
              <p className="text-[#666] text-[14px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                即使植入再好的种植牙，如果上面的修复体不精密也没有用。由代表院长亲自验证的<span className="font-bold text-[#008095]">专业技工所</span>制作。
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Why external lab is better */}
        <FadeInSection delay={200} className="flex flex-col gap-4 w-full">
          <p className="font-bold text-[#1a1a1a] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            为什么选择专业技工所？
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '🏆',
                title: '通过大学医院网络验证的机构',
                desc: '通过担任大学医院客座教授期间积累的同事教授和院长们的网络，精选实力验证的专业技工所。',
              },
              {
                icon: '🔬',
                title: '与小规模院内技工所不同的专业性',
                desc: '专业技工所配备最新CAD/CAM设备和熟练技工师人力，比1~2人规模的院内技工所制作更高水平的修复体。',
              },
              {
                icon: '🤝',
                title: '与院长紧密沟通',
                desc: '不是单纯委托和接收，而是院长亲自说明病例并与技工师协商后，实现符合每位患者的咬合和美学。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={300} className="w-full bg-[#0b1727] rounded-2xl p-6">
          <p className="font-bold text-white text-[16px] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            💡 院内技工所并不总是好的
          </p>
          <p className="text-[#a0c4d4] text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            院内技工所虽然速度快，但由于小规模人力运营，在专业性和设备上往往存在限制。高德First牙科选择了<span className="text-[#6eb7bc] font-bold">品质优先于速度</span>。从一开始就做好才能长期使用。
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
