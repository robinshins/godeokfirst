'use client';

import Link from 'next/link';

const levels = [
  {
    level: 'Step 1',
    title: '刷牙',
    badge: '每日必需',
    desc: '去除牙齿表面和牙龈线上方的牙菌斑和细菌膜。正确的刷牙是预防牙龈疾病的第一步，每天需刷牙2次以上才有效。',
    point: '牙龈深处（龈下）的牙结石无法用牙刷去除。',
    insurance: null,
    highlight: false,
  },
  {
    level: 'Step 2',
    title: '洁牙',
    badge: '每年1~2次 · 健康保险适用',
    desc: '用超声波设备去除牙龈上方（龈上）固化的牙结石和牙菌斑。有研究结果表明，仅一次洁牙就能降低心血管疾病风险10~14%。满19岁以上每年1次适用健康保险。',
    point: '洁牙难以触及牙龈深处（龈下）。',
    insurance: '满19岁以上 · 每年1次 · 健康保险适用（个人负担20%）',
    highlight: false,
  },
  {
    level: 'Step 3',
    title: '牙周治疗',
    badge: '需要时 · 健康保险适用',
    desc: '用刮治器（牙周治疗器具）精密去除牙龈深处牙周袋内的牙结石和细菌，然后将牙根表面打磨光滑以防止细菌再次附着。需要时将Perio Clean抗生素软膏直接注入牙周袋，彻底去除细菌。全过程适用健康保险，根据进展程度分1~4个区域进行。',
    point: '牙周治疗后通过3~6个月周期的定期检查预防复发。',
    insurance: '健康保险适用 · 分区进行 · 含麻醉',
    highlight: true,
  },
];

export default function ComparisonSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Care Levels
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            仅靠刷牙<br />有时还不够
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.7] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            牙龈健康需要分阶段管理。<br />
            洁牙和牙周治疗均适用健康保险。
          </p>
        </div>

        {/* Level Cards */}
        <div className="flex flex-col gap-5">
          {levels.map((c, i) => (
            <div
              key={i}
              className={`rounded-[24px] p-6 flex flex-col gap-5 relative overflow-hidden ${
                c.highlight
                  ? 'bg-white border-2 border-[#008095] shadow-[0_8px_32px_-8px_rgba(0,128,149,0.2)]'
                  : 'bg-white border border-[#e9ebf1] shadow-[0_4px_20px_-4px_rgba(21,26,36,0.06)]'
              }`}
            >
              {c.highlight && (
                <div className="absolute top-0 right-0 bg-[#008095] text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-[14px] rounded-tr-[22px]">
                  最重要
                </div>
              )}

              {/* Level + Badge */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[11px] font-black text-[#008095] tracking-[0.1em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.level}
                </span>
                <span
                  className={`font-bold text-[11px] px-2.5 py-1 rounded-full ${
                    c.highlight
                      ? 'bg-[#008095] text-white'
                      : 'bg-[#f0f7fa] text-[#008095]'
                  }`}
                >
                  {c.badge}
                </span>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bold text-[22px] text-[#2d3340] tracking-[-0.03em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.title}
                </h3>
                <p
                  className="font-medium text-[15px] text-[#4a4f5e] leading-[1.7]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.desc}
                </p>
              </div>

              {/* Point */}
              <div className="flex items-start gap-2 bg-[#f8f9fb] rounded-2xl p-4">
                <div className="shrink-0 mt-[3px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#008095" strokeWidth="1.5" />
                    <path d="M7 4.5V7.5M7 9.5V9.8" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p
                  className="text-[13.5px] font-semibold text-[#008095] leading-[1.5]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {c.point}
                </p>
              </div>

              {/* Insurance Badge */}
              {c.insurance && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5L2 4V8C2 11.3 4.6 14.4 8 15C11.4 14.4 14 11.3 14 8V4L8 1.5Z" stroke="#008095" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M5.5 8L7 9.5L10.5 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p
                    className="text-[#008095] font-bold text-[13px]"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    {c.insurance}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Insurance Banner */}
        <div className="bg-[#21314E] rounded-[24px] p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              健康保险指南
            </p>
            <h4
              className="text-white font-bold text-[20px] leading-[1.35]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              洁牙和牙周治疗，<br />均适用健康保险
            </h4>
            <p
              className="text-white/60 text-[14px] leading-[1.7] mt-1"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              费用负担不大，即使没有症状也请每年做一次洁牙并检查牙龈状态。越早发现，治疗越简单、费用也越少。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                label: '洁牙',
                detail: '满19岁以上 · 每年1次 · 个人负担约20%',
              },
              {
                label: '牙周治疗',
                detail: '牙周炎诊断时 · 分区域医保适用 · 含麻醉',
              },
              {
                label: 'Perio Clean治疗',
                detail: '根据牙周袋深度可适用保险',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                <p
                  className="text-white font-bold text-[14px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#4DC8D8] font-medium text-[13px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <Link href="/cn/consultation">
            <div className="bg-[#008095] rounded-[16px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#006d80] transition-colors">
              <p
                className="text-white font-bold text-[15px]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                牙龈状态咨询预约
              </p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
