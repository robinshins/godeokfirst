import Link from 'next/link';

interface Column {
  title: string;
  url: string;
  description: string;
}

const columnData: Record<string, Column[]> = {
  implant: [
    {
      title: '多颗种植牙修复的原则',
      url: 'https://blog.naver.com/gdfst111/224181674200',
      description: '院长亲自讲解多颗种植牙植入时必须遵守的原则和注意事项。',
    },
    {
      title: '关于种植牙存活率',
      url: 'https://blog.naver.com/gdfst111/224184908972',
      description: '介绍影响种植牙存活率的因素以及长期成功种植的核心条件。',
    },
    {
      title: '种植牙咬合，为什么重要？',
      url: 'https://blog.naver.com/gdfst111/224184928593',
      description: '说明种植牙治疗中咬合（咀嚼力平衡）的重要性及咬合不良会导致的问题。',
    },
  ],
  home: [],
};

interface MobileColumnSectionProps {
  page?: string;
}

export default function MobileColumnSection({ page = 'home' }: MobileColumnSectionProps) {
  const columns = columnData[page] ?? [];
  if (columns.length === 0) return null;

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="px-4 py-[60px] w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-[13px] font-bold text-[#008095] tracking-[2px] uppercase">
            DOCTOR&apos;S COLUMN
          </p>
          <h2 className="text-[26px] font-bold text-[#21314E] leading-[1.35] tracking-[-0.52px]">
            院长亲自撰写的<br />
            医学专栏
          </h2>
        </div>

        {/* Column Cards */}
        <div className="flex flex-col gap-4">
          {columns.map((col, i) => (
            <Link
              key={i}
              href={col.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 items-start p-5 rounded-2xl border border-[#e9ebf1] hover:border-[#008095] hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#008095]/10 flex items-center justify-center">
                <span className="text-[#008095] font-black text-[15px]">{i + 1}</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <p className="font-bold text-[16px] text-[#21314E] leading-[1.4] group-hover:text-[#008095] transition-colors">
                  {col.title}
                </p>
                <p className="text-[13px] text-[#727582] leading-[1.5]">
                  {col.description}
                </p>
              </div>
              <svg
                className="flex-shrink-0 mt-1 text-[#c0c4ce] group-hover:text-[#008095] transition-colors"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Naver Blog Link */}
        <div className="mt-6 text-center">
          <Link
            href="https://blog.naver.com/gdfst111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-semibold text-[#727582] hover:text-[#008095] transition-colors underline underline-offset-2"
          >
            查看高德First牙科博客全部内容 →
          </Link>
        </div>
      </div>
    </div>
  );
}
