import Link from 'next/link';

const BLOG_URL = 'https://blog.naver.com/gdfst111/223674900469';

const columns = [
  {
    id: 1,
    num: '01',
    tag: '三瓷 嵌体',
    title: '侧面龋齿，用瓷嵌体治疗',
    desc: '外表不易看到容易被忽视的侧面龋齿。完全还原天然牙颜色和透明度的瓷修复案例。',
    href: BLOG_URL,
  },
  {
    id: 2,
    num: '02',
    tag: '树脂',
    title: '臼齿 初期 龋齿 树脂 治疗',
    desc: '初期龋齿最少去除是关键。最大限度保存天然牙的同时美学性修复的当日树脂治疗案例。',
    href: BLOG_URL,
  },
  {
    id: 3,
    num: '03',
    tag: '嵌体 再治疗',
    title: '银汞合金二次龋齿嵌体治疗',
    desc: '长期银汞合金下方发生的再龋齿。去除现有填充物后用Trios5数字扫描精密重新制作的案例。',
    href: BLOG_URL,
  },
  {
    id: 4,
    num: '04',
    tag: '嵌体',
    title: '填充物脱落侧面龋齿嵌体治疗',
    desc: '修复体脱落后发现的二次龋齿确认，以及基于数字数据无误差密合的嵌体修复过程。',
    href: BLOG_URL,
  },
  {
    id: 5,
    num: '05',
    tag: '三瓷 嵌体',
    title: '碎裂牙齿瓷嵌体治疗',
    desc: '因牙齿折裂受损的功能和形态。通过分阶段精密诊断恢复原始牙齿形状的临床专栏。',
    href: BLOG_URL,
  },
];

export default function BlogColumnSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center w-full">
          <p className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Clinical Column
          </p>
          <h2 className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            院长亲自记录的<br />龋齿治疗故事
          </h2>
          <p className="font-medium text-white/70 text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            最好的治疗从准确的诊断开始。<br />通过实际案例透明公开治疗过程。
          </p>
        </div>

        {/* Column List */}
        <div className="flex flex-col gap-2">
          {columns.map((col) => (
            <Link
              key={col.id}
              href={col.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border-b border-white/10 py-4 flex items-center gap-4 transition-colors duration-200 group-hover:border-white/20 active:opacity-70">
                {/* Number */}
                <span className="text-[#4DC8D8] font-bold text-[13px] w-6 flex-shrink-0" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {col.num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    {col.tag}
                  </span>
                  <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.02em] text-white group-hover:text-[#4DC8D8] transition-colors truncate" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    {col.title}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 transition-transform group-hover:translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#4DC8D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <Link
          href="https://blog.naver.com/gdfst111"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-gradient-to-r from-[#008095] to-[#006d80] rounded-[20px] py-5 px-6 flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all active:scale-[0.98]">
            <p className="font-bold text-[16px] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              在Naver博客查看全部专栏
            </p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
