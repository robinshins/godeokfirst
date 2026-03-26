'use client';

const risks = [
  {
    tag: 'Yurak-qon tomir',
    title: 'Yurak-qon tomir kasalliklari xavfi 3 baravar↑',
    desc: 'Milk ichidagi parodont bakteriyalari qon tomirlariga kirib, tomir devorlarida yalligʼlanish keltirib chiqaradi va tromb hosil boʼlishini tezlashtiradi. Tadqiqotlarga koʼra, milk kasalligi boʼlgan hollarda miokard infarkti xavfi 2,8 baravargacha, insult xavfi 16% dan ortiq oshadi. Aksincha, muntazam skalering bilan yurak kasalliklari xavfini 10~14% kamaytirish mumkin.',
    stats: ['Miokard infarkti xavfi 2,8 baravar oshadi', 'Insult xavfi 16% kamayadi (yiliga 1 marta skalering)', 'Yurak tekshiruvida ogʼiz boʼshligʼi tekshiruvi ham tavsiya etiladi'],
    source: 'Bundang Seul Milliy universitetining tadqiqot guruhi 2024 · AQSh Yurak Assotsiatsiyasi (AHA) 2020',
  },
  {
    tag: 'Diabet',
    title: 'Diabet asoratlari rivojlanishi 2 baravar↑',
    desc: 'Milk yalligʼlanishi insulin qarshiligini oshirib, qon shakarini boshqarishga toʼsqinlik qiladigan yomon davr hosil qiladi. Parodontit boʼlganda HbA1c koʼrsatkichini boshqarish qiyinlashadi, aksincha diabet boʼlganda milk davolash samarasi ham pasayadi. Faqat parodont davolash bilan HbA1c 0,4% kamayganini koʼrsatadigan klinik tadqiqotlar ham mavjud.',
    stats: ['Qon shakarini boshqarish muvaffaqiyatsizligi 6 baravar oshadi', 'HbA1c 0,4% kamayadi (parodont davolashda)', 'Diabet asoratlari rivojlanish tezligi 2 baravar tez'],
    source: 'Katolik universiteti Enpyong Sonmo shifoxonasi 2023 · Koreya Diabet Jamiyati',
  },
  {
    tag: 'Miya kasalliklari',
    title: 'Demensiya xavfi 70%↑',
    desc: 'Parodont bakteriyalaridan Porphyromonas gingivalis qon-miya toʼsigʼidan oʼtib miyaga kirganda beta-amiloid toʼplanishini tezlashtiradi. Altsxaymer bemorlarining miya toʼqimasida bu parodont bakteriyasining toksinlari topilgan va 10 yildan ortiq milk kasalligini davolamasdan qoldirganda demensiya xavfi sezilarli darajada oshishi qayd etilgan.',
    stats: ['Altsxaymer bemorlarining 40% da parodont bakteriya toksinlari topilgan', '10 yildan ortiq eʼtiborsiz qoldirilganda demensiya xavfi 70%↑', 'Erta milk parvarishi bilan miya salomatligini himoya qilish mumkin'],
    source: 'Garvard universiteti Dr. Kantarsi jamoasi 2024 · Journal of Neuroinflammation',
  },
  {
    tag: 'Homilador ayollar',
    title: 'Erta tugʼish va kam vazn tugʼilish xavfi 7 baravar↑',
    desc: 'Milk yalligʼlanish mediatorlari boʼlgan prostaglandinlar qon orqali plasentaga yetib borganda erta toʼlgʼoqlarni keltirib chiqarishi mumkin. Homiladorlik davrida milk parvarishi eʼtibordan chetda qolishi oson boʼlganligi sababli, homiladorlikni rejalashtirish oldin yoki homiladorlikning boshida milk holatini albatta tekshirtirish tavsiya etiladi.',
    stats: ['Erta tugʼish xavfi 7 baravar oshadi', 'Kam vaznli chaqaloq (2kg dan kam) tugʼilish 2 baravar oshadi', 'Homiladorlik davridagi milk davolash sugʼurta bilan qoplanadi'],
    source: 'AQSh va Yevropa Parodontologiya Jamiyatlari',
  },
];

export default function RiskSection() {
  return (
    <div className="bg-[#21314E] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Health Warning
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-white"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Milk kasalligi faqat<br />ogʼiz ichida qolmaydi
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Milk ichidagi bakteriyalar qon tomirlari orqali butun tanaga tarqalib,<br />oʼylaganingizdan ancha jiddiy kasalliklarni keltirib chiqaradi.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="flex flex-col gap-5">
          {risks.map((risk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[24px] p-6 flex flex-col gap-5">
              {/* Tag + Title */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 text-white/50 uppercase tracking-wider w-fit">
                  {risk.tag}
                </span>
                <h3
                  className="font-bold text-[20px] text-white tracking-[-0.02em] leading-[1.3]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {risk.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-white/70 text-[14px] leading-[1.7] tracking-[-0.01em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {risk.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                {risk.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="text-[#4DC8D8] shrink-0 mt-[3px]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#4DC8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p
                      className="text-[#4DC8D8] font-semibold text-[13px] leading-[1.5]"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {stat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Source */}
              <p className="text-white/30 text-[11px]">Manba: {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Yiliga 1 marta skalering bilan<br />yurak-qon tomir kasalliklari xavfini 14% kamaytirish mumkin.
          </p>
          <p className="text-white/40 text-[13px]">
            Skalering sogʼliq sugʼurtasi bilan qoplanadi — yiliga bir marta albatta qildiring.
          </p>
        </div>

      </div>
    </div>
  );
}
