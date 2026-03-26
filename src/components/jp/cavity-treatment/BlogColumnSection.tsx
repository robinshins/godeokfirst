import Link from 'next/link';

const BLOG_URL = 'https://blog.naver.com/gdfst111/223674900469';

const columns = [
  {
    id: 1,
    num: '01',
    tag: 'セラミックインレー',
    title: '側面虫歯、セラミックインレーで治療',
    desc: '外から見えにくく放置されやすい側面虫歯。天然歯の色と透明度をそのまま再現したセラミック修復症例です。',
    href: BLOG_URL,
  },
  {
    id: 2,
    num: '02',
    tag: 'レジン',
    title: '奥歯初期虫歯レジン治療',
    desc: '初期虫歯は最小限の削除が核心です。天然歯を最大限保存しながら審美的に復元した当日レジン治療症例です。',
    href: BLOG_URL,
  },
  {
    id: 3,
    num: '03',
    tag: 'インレー再治療',
    title: 'アマルガム二次う蝕インレー治療',
    desc: '古いアマルガム下部に発生した再虫歯。既存充填物除去後TRIOS5デジタルスキャンで精密に再製作した症例です。',
    href: BLOG_URL,
  },
  {
    id: 4,
    num: '04',
    tag: 'インレー',
    title: '充填物脱落 側面う蝕インレー治療',
    desc: '補綴物脱落後に進行した二次う蝕を確認し、デジタルデータを基に誤差なく密着するインレー修復過程です。',
    href: BLOG_URL,
  },
  {
    id: 5,
    num: '05',
    tag: 'セラミックインレー',
    title: '欠けた歯セラミックインレー治療',
    desc: '歯の破折により損傷した機能と形態。段階的精密診断を通じて元の歯の形に復元した臨床コラムです。',
    href: BLOG_URL,
  },
];

export default function BlogColumnSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center w-full">
          <p className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Clinical Column
          </p>
          <h2 className="font-bold text-[32px] leading-[1.3] tracking-[-0.04em] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            院長が直接記録した<br />虫歯治療の話
          </h2>
          <p className="font-medium text-white/70 text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            最も良い治療は正確な診断から始まります。<br />実際の症例を通じて治療過程を透明に公開します。
          </p>
        </div>

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
                <span className="text-[#4DC8D8] font-bold text-[13px] w-6 flex-shrink-0" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  {col.num}
                </span>

                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    {col.tag}
                  </span>
                  <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.02em] text-white group-hover:text-[#4DC8D8] transition-colors truncate" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    {col.title}
                  </p>
                </div>

                <div className="flex-shrink-0 transition-transform group-hover:translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#4DC8D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="https://blog.naver.com/gdfst111"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-gradient-to-r from-[#008095] to-[#006d80] rounded-[20px] py-5 px-6 flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all active:scale-[0.98]">
            <p className="font-bold text-[16px] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              ネイバーブログで全コラムを見る
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
