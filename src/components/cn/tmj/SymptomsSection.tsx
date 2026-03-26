'use client';

export default function TmjSymptomsSection() {
  const symptoms = [
    {
      icon: '🔊',
      title: '下颌有响声',
      desc: '张嘴或闭嘴时反复发出"咔哒"、"咯噔"的声音。',
    },
    {
      icon: '😣',
      title: '下颌疼痛',
      desc: '咀嚼、打哈欠、说话时感到下颌周围疼痛。',
    },
    {
      icon: '😶',
      title: '嘴巴张不开',
      desc: '难以大幅张嘴，或张开时下颌向一侧偏移。',
    },
    {
      icon: '🤕',
      title: '头痛·耳痛',
      desc: '不明原因的头痛或耳前方疼痛反复出现。',
    },
    {
      icon: '💤',
      title: '磨牙·咬紧牙关',
      desc: '睡眠中磨牙或白天无意识地紧咬牙齿。',
    },
    {
      icon: '🦴',
      title: '颈肩僵硬',
      desc: '颞下颌关节问题导致颈部和肩部肌肉紧张和疼痛。',
    },
  ];

  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Self Check
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            如果有这些症状<br />请怀疑颞下颌关节障碍
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            如果符合以下2项以上症状<br />建议接受专家诊断。
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="flex flex-col gap-4">
          {symptoms.map((symptom, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] p-5 flex items-start gap-4">
              <div className="text-2xl shrink-0 mt-[2px]">{symptom.icon}</div>
              <div className="flex flex-col gap-1">
                <h3
                  className="font-bold text-[17px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.title}
                </h3>
                <p
                  className="text-white/60 text-[14px] leading-[1.6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {symptom.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            颞下颌关节障碍很难自然痊愈。<br />早期治疗效果最好。
          </p>
          <p className="text-white/40 text-[13px]">
            放置越久关节盘损伤越严重，治疗也会越复杂。
          </p>
        </div>

      </div>
    </div>
  );
}
