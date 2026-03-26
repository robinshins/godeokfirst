'use client';

export default function TmjWhyUsSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Why Us
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            在高德First牙科<br />
            颞下颌关节 治疗<br />
            <span className="text-[#008095]">应该接受治疗的理由</span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="flex flex-col gap-5">
          {[
            {
              num: '01',
              title: '综合牙科专家 亲自诊疗',
              desc: '颞下颌关节是涉及咬合、修复、牙周等多个领域的复合疾病。综合牙科专家能够全面审视并诊断，因此可以准确掌握原因。',
            },
            {
              num: '02',
              title: '非手术保守治疗优先',
              desc: '大部分颞下颌关节障碍可以不手术治疗。优先采用药物、物理治疗、咬合板等保守治疗，最小化患者负担。',
            },
            {
              num: '03',
              title: '定制 合板 精密 制作',
              desc: '基于数字咬合分析为每位患者精密制作定制咬合板。通过周期性咬合调整最大化治疗效果。',
            },
            {
              num: '04',
              title: '解决根本原因',
              desc: '不仅仅是减轻疼痛，而是同时解决不正咬合、缺损牙齿、不良习惯等根本原因，防止复发。',
            },
          ].map((reason, idx) => (
            <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
              <div className="flex items-center gap-3">
                <span
                  className="text-[#008095] font-bold text-[28px] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.num}
                </span>
                <h3
                  className="font-bold text-[18px] text-black tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {reason.title}
                </h3>
              </div>
              <p
                className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-center">
          <p
            className="text-[22px] font-bold text-white leading-[1.4]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            颞下颌关节 疼痛,<br />
            <span className="text-[#4DC8D8]">请不要忍耐，接受咨询</span>
          </p>
          <p className="text-white/50 text-[14px] mt-2">
            初期治疗最有效且经济。
          </p>
        </div>

      </div>
    </div>
  );
}
