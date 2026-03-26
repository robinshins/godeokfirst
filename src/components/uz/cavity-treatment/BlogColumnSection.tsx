import Link from 'next/link';

const BLOG_URL = 'https://blog.naver.com/gdfst111/223674900469';

const columns = [
  {
    id: 1,
    num: '01',
    tag: 'Keramik inley',
    title: 'Yon tomondagi kariyes, keramik inley bilan davolash',
    desc: 'Tashqi tomondan yaxshi ko\u02BCrinmaydigan va e\u02BCtiborsiz qoldirilishi oson bo\u02BClgan yon kariyes. Tabiiy tish rangi va shaffofligini aynan takrorlagan keramik tiklash namunasi.',
    href: BLOG_URL,
  },
  {
    id: 2,
    num: '02',
    tag: 'Rezin',
    title: 'Oziq tish boshlang\u02BCich kariyesini rezin bilan davolash',
    desc: 'Boshlang\u02BCich kariyesda minimal kesish asosiy omildir. Tabiiy tishni imkon qadar saqlab, estetik tarzda tiklangan bir kunlik rezin davolash namunasi.',
    href: BLOG_URL,
  },
  {
    id: 3,
    num: '03',
    tag: 'Inley qayta davolash',
    title: 'Amalgam ostidagi ikkilamchi kariyes inley davolash',
    desc: 'Eski amalgam ostida paydo bo\u02BClgan qayta kariyes. Mavjud plomba olib tashlanib, TRIOS 5 raqamli skan bilan aniq qayta tayyorlangan namuna.',
    href: BLOG_URL,
  },
  {
    id: 4,
    num: '04',
    tag: 'Inley',
    title: 'Plomba tushib ketgan yon kariyes inley davolash',
    desc: 'Protez tushib ketganidan keyin rivojlangan ikkilamchi kariyesni aniqlash va raqamli ma\u02BClumotlar asosida xatosiz zich yopishtirilgan inley tiklash jarayoni.',
    href: BLOG_URL,
  },
  {
    id: 5,
    num: '05',
    tag: 'Keramik inley',
    title: 'Singan tishni keramik inley bilan davolash',
    desc: 'Tish sinishi tufayli buzilgan funktsiya va shakl. Bosqichma-bosqich aniq diagnostika orqali asl tish shakliga tiklangan klinik kolumn.',
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
            Bosh shifokor tomonidan<br />yozilgan kariyes davolash hikoyalari
          </h2>
          <p className="font-medium text-white/70 text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            {"Eng yaxshi davolash aniq diagnostikadan boshlanadi."}<br />{"Haqiqiy misollar orqali davolash jarayonini shaffof tarzda ko\u02BCrsatamiz."}
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
              {"Naver blogda barcha kolumnlarni ko\u02BCrish"}
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
