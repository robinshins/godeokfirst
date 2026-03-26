'use client';

export default function FeaturesSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
            <p className="text-[13px] font-bold text-[#008095] tracking-[3px] uppercase">PAINLESS & PRECISE</p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black">不痛且<br /><span className="text-[#008095]">精准拔除</span></h2>
            <p className="font-semibold text-base leading-[1.5] tracking-[-0.32px] text-[#727582]">曾任大学附属医院客座教授的院长的<br />系统化疼痛缓解体系</p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {[
              { step: '01', title: '涂抹·漱口麻醉', desc: '先消除注射针的刺痛感。通过表面麻醉最大限度减少麻醉注射本身的疼痛。', color: '#e0f4f6', textColor: '#008095' },
              { step: '02', title: '电动无痛麻醉仪', desc: '电脑自动调节注入速度，麻醉液缓慢均匀进入，几乎无痛。', color: '#008095', textColor: '#ffffff', highlight: true },
            ].map((item) => (
              <div key={item.step} className="rounded-[20px] p-5 flex gap-4 items-start" style={{ backgroundColor: item.color }}>
                <span className="font-black text-[28px] leading-none flex-shrink-0 mt-1" style={{ color: item.highlight ? 'rgba(255,255,255,0.4)' : '#008095', opacity: item.highlight ? 1 : 0.3 }}>{item.step}</span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[17px] leading-[1.4] tracking-[-0.34px]" style={{ color: item.textColor }}>{item.title}</p>
                  <p className="font-medium text-[14px] leading-[1.6] tracking-[-0.28px]" style={{ color: item.highlight ? 'rgba(255,255,255,0.85)' : '#555' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[24px] border-2 border-[#008095] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#008095] rounded-full flex items-center justify-center"><span className="text-[32px]">🏥</span></div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">大学附属医院级别难度拔除</h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center">在普通牙科被告知<br />&quot;请去大医院&quot;吗？</p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              {[
                { label: '复杂阻生智齿', desc: '即使深埋在牙龈中也没问题' },
                { label: '靠近神经的智齿', desc: '无需担心神经损伤的安全拔除' },
                { label: '水平阻生智齿', desc: '横躺的疑难病例也能处理' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#008095] text-lg shrink-0">✓</span>
                  <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]"><span className="font-bold text-[#008095]">{item.label}</span> — {item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">曾任朝鲜大学牙科医院客座教授的院长<br />亲自安全解决</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
