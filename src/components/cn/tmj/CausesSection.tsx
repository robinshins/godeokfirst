'use client';

export default function TmjCausesSection() {
  return (
    <div className="bg-white w-full py-[80px] px-5 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#008095]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[430px] mx-auto flex flex-col gap-[60px] relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-5 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Root Cause
          </p>
          <h2
            className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            颞下颌关节障碍，<br />
            <span className="text-[#008095]">了解原因后</span><br />
            才能正确治疗
          </h2>
        </div>

        {/* Causes */}
        <div className="flex flex-col gap-8">

          {/* Cause Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                tag: '习惯',
                title: '咬紧牙关·磨牙',
                desc: '因压力或睡眠中无意识地紧咬或磨牙，会给颞下颌关节和周围肌肉带来过大负荷，导致关节盘损伤。',
                items: ['睡眠中磨牙', '白天咬紧牙关的习惯', '托腮、只用一侧咀嚼'],
              },
              {
                tag: '咬合',
                title: '不正咬合·牙齿缺失',
                desc: '上下牙齿的咬合失去平衡时，颞下颌关节承受不对称的力量，长期下来会产生关节问题。',
                items: ['牙齿缺失后放置', '不良修复体', '需要矫正治疗的状态'],
              },
              {
                tag: '外伤',
                title: '外部冲击·过度张口',
                desc: '因事故或冲击导致下颌受伤，或牙科治疗、打哈欠等过度张口导致关节损伤的情况。',
                items: ['交通事故·跌倒', '过度打哈欠', '长时间牙科治疗后'],
              },
              {
                tag: '压力',
                title: '精神紧张·压力',
                desc: '压力使下颌周围肌肉紧张，导致无意识的咬合习惯，成为颞下颌关节障碍的主要原因。',
                items: ['慢性压力', '不安·紧张状态', '睡眠障碍'],
              },
            ].map((cause, idx) => (
              <div key={idx} className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-4 border border-[#e9ebf1]">
                <div className="flex flex-col gap-2">
                  <span className="bg-[#008095]/10 text-[#008095] font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                    {cause.tag}
                  </span>
                  <h3
                    className="font-bold text-[20px] text-black tracking-[-0.02em] leading-[1.3]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {cause.title}
                  </h3>
                </div>
                <p
                  className="text-[#727582] text-[14px] leading-[1.7] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {cause.desc}
                </p>
                <div className="flex flex-col gap-2 border-t border-[#e9ebf1] pt-3">
                  {cause.items.map((item, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#008095] shrink-0 mt-[3px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="#008095" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p
                        className="text-[#008095] font-semibold text-[13px] leading-[1.5]"
                        style={{ fontFamily: 'Pretendard, sans-serif' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
