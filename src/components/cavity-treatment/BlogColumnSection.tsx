import Link from 'next/link';

const BLOG_URL = 'https://blog.naver.com/gdfst111/223674900469';

const columns = [
  {
    id: 1,
    num: '01',
    tag: '세라믹 인레이',
    title: '옆면 충치, 세라믹 인레이로 치료',
    desc: '겉으로 잘 보이지 않아 방치되기 쉬운 옆면 충치. 자연 치아의 색상과 투명도를 그대로 재현한 세라믹 수복 사례입니다.',
    href: BLOG_URL,
  },
  {
    id: 2,
    num: '02',
    tag: '레진',
    title: '어금니 초기 충치 레진 치료',
    desc: '초기 충치는 최소 삭제가 핵심입니다. 자연 치아를 최대한 보존하면서 심미적으로 복원한 당일 레진 치료 사례입니다.',
    href: BLOG_URL,
  },
  {
    id: 3,
    num: '03',
    tag: '인레이 재치료',
    title: '아말감 2차 우식 인레이 치료',
    desc: '오래된 아말감 하부에 발생한 재충치. 기존 충전물 제거 후 트리오스5 디지털 스캔으로 정밀하게 재제작한 사례입니다.',
    href: BLOG_URL,
  },
  {
    id: 4,
    num: '04',
    tag: '인레이',
    title: '충전물 탈락 옆면 우식 인레이 치료',
    desc: '보철물 탈락 후 진행된 2차 우식을 확인하고, 디지털 데이터를 기반으로 오차 없이 밀착되는 인레이 수복 과정입니다.',
    href: BLOG_URL,
  },
  {
    id: 5,
    num: '05',
    tag: '세라믹 인레이',
    title: '깨진 치아 세라믹 인레이 치료',
    desc: '치아 파절로 인해 손상된 기능과 형태. 단계별 정밀 진단을 통해 원래의 치아 모양으로 복원한 임상 칼럼입니다.',
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
            원장이 직접 기록한<br />충치 치료 이야기
          </h2>
          <p className="font-medium text-white/70 text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            가장 좋은 치료는 정확한 진단에서 시작됩니다.<br />실제 사례를 통해 치료 과정을 투명하게 공개합니다.
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
              네이버 블로그에서 전체 칼럼 보기
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
