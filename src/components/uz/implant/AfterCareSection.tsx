'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const benefits = [
    {
      title: 'Implant parvarishi kerak boʼlganlar',
      desc: 'Implant atrofidagi yalligʼlanishning oldini olish uchun zararli bakteriya tahlili'
    },
    {
      title: 'Milkdor kasalligi · ogʼiz hididan aziyat chekuvchilar',
      desc: 'Parodont kasalligini keltirib chiqaruvchi bakteriyalarni aniq tahlili va shaxsiy parvarish'
    },
    {
      title: 'Umumiy sogʼligʼi uchun xavotirlanuvchilar',
      desc: 'Ogʼiz-ichak bogʼlanish oʼqi tahlili orqali umumiy sogʼlikni tekshirish'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="Godeok First Dental"
              width={168}
              height={24}
              className="w-full h-full brightness-0 invert"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              SCIENTIFIC AFTERCARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Oʼrnatishdan ham muhimroq narsa -<br />
              keyingi parvarish
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              &quot;Umr boʼyi foydalanishingiz uchun oxirigacha masʼuliyat olamiz&quot;<br />
              <span className="text-white/70 text-[14px]">Koreya stomatologiyasida birinchi boʼlib NGS mikroorganizm tekshiruvini joriy etgan</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">

          {/* 마크로젠 협력 배지 */}
          <div className="w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
              <p className="text-[#6eb7bc] text-[13px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                🧬 Global genom tahlili kompaniyasi <span className="text-white">Macrogen</span> hamkorligi
              </p>
            </div>
          </div>

          {/* 미생물 검사 이미지 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[380px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/macrogen-microbiome-test.png"
                alt="Macrogen NGS mikroorganizm tekshiruvi"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-gradient-to-br from-[#008fd2] to-[#006aaa] box-border flex flex-col gap-3 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[20px] text-white tracking-[-0.4px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                NGS keyingi avlod nukleotid ketma-ketligi tahlili
              </p>
              <p className="font-medium leading-[1.6] not-italic text-white/90 text-[14px] tracking-[-0.28px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Ogʼiz boʼshligʼidagi 700 dan ortiq turdagi mikroorganizmlarni aniq tahlil qilib<br />
                tish chirishi va parodontit keltirib chiqaruvchi bakteriyalarni oldindan aniqlaydi
              </p>
            </div>
          </div>

          {/* 왜 치과에서 미생물 검사를? */}
          <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Nima uchun stomatologiyada mikroorganizm tekshiruvi?
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Ogʼiz boʼshligʼi <span className="text-[#6eb7bc] font-bold">&quot;tana sogʼligʼi boshlanadigan kirish joyi&quot;</span>dir. Ogʼiz boʼshligʼidagi zararli bakteriyalar faqat ogʼizda qolmay, qon oqimi orqali butun tanaga tarqalib <span className="text-white font-bold">yurak-qon tomir kasalliklari, diabet, demensiya</span> kabi kasalliklarga taʼsir qilishi mumkin.
            </p>
          </div>

          {/* 검사 결과지 이미지 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[250px] relative shrink-0 w-full">
              <Image
                src="/images_official/macrogen-test-result.png"
                alt="Mikroorganizm tekshiruvi natijasi"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-center p-4 relative shrink-0 w-full">
              <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Shaxsiy moslashtirilgan tahlil hisoboti taqdim etiladi
              </p>
              <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Tekshiruvdan 2~3 hafta ichida batafsil natija taqdim etiladi
              </p>
            </div>
          </div>

          {/* 전신 건강 영향 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[340px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/microbiome-health-impact.png"
                alt="Mikroorganizmlarning umumiy sogʼlikka taʼsiri"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Ogʼiz mikroorganizmlari → Umumiy sogʼlik bogʼlanishi
              </p>
              <p className="text-[#a0c4d4] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Ogʼiz boʼshligʼidagi zararli bakteriyalar qon tomirlar orqali butun tanaga tarqalib<br />
                turli umumiy kasalliklarga taʼsir qiladi
              </p>
            </div>
          </div>

          {/* 검사 추천 대상 */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Quyidagi hollarda tavsiya etiladi
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#008fd2] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 검사 프로세스 */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Tekshiruv juda oddiy
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">💧</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Soʼlak olish</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>3 daqiqa</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">🧬</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>NGS tahlil</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Macrogen</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Natija konsultatsiyasi</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>2~3 haftadan soʼng</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
