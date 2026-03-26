'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function InHouseLabSection() {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
          <p className="text-[15px] font-bold text-[#008095] tracking-[3px] uppercase">
            DENTAL LAB
          </p>
          <h2 className="font-bold leading-[1.35] text-[32px] text-[#1a1a1a] tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Protez sifati uchun<br />
            <span className="text-[#008095]">tanlangan mutaxassis laboratoriya</span>
          </h2>
          <p className="font-semibold leading-[1.5] text-[#3e3a3a] text-base tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Yaxshi laboratoriyani bilish ham mahoratdir
          </p>
        </FadeInSection>

        {/* Key Point Card */}
        <FadeInSection delay={100} className="w-full bg-gradient-to-br from-[#008095]/10 to-[#6eb7bc]/10 rounded-2xl p-6 border border-[#008095]/20">
          <div className="flex items-start gap-4">
            <div className="bg-[#008095] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-[#3e3a3a] text-[17px] mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Texnik mahorati protez sifatini belgilaydi
              </p>
              <p className="text-[#666] text-[14px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Qanchalik yaxshi implant oʼrnatilsa ham, ustiga qoʼyiladigan protez aniq boʼlmasa foydasiz. Bosh shifokor shaxsan tekshirgan <span className="font-bold text-[#008095]">mutaxassis laboratoriya</span>da tayyorlanadi.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Why external lab is better */}
        <FadeInSection delay={200} className="flex flex-col gap-4 w-full">
          <p className="font-bold text-[#1a1a1a] text-[18px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Nima uchun mutaxassis laboratoriya?
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icon: '🏆',
                title: 'Universitet shifoxonasi tarmogʼi bilan tekshirilgan joylar',
                desc: 'Universitet shifoxonasi tashqi professori sifatida toʼplangan hamkasb professor va bosh shifokorlar tarmogʼi orqali, mahorati tekshirilgan mutaxassis laboratoriyani tanlaydi.',
              },
              {
                icon: '🔬',
                title: 'Kichik ichki laboratoriyadan farqli mutaxassislik',
                desc: 'Mutaxassis laboratoriya eng yangi CAD/CAM jihozlari va tajribali texniklar bilan jihozlangan boʼlib, 1~2 kishilik ichki laboratoriyadan ancha yuqori sifatli protez tayyorlaydi.',
              },
              {
                icon: '🤝',
                title: 'Bosh shifokor bilan yaqin aloqa',
                desc: 'Shunchaki buyurtma berib olish emas, bosh shifokor shaxsan holatni tushuntirib texnik bilan maslahatlashib har bir bemorga mos tishlov va estetikani amalga oshiradi.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl p-5 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={300} className="w-full bg-[#0b1727] rounded-2xl p-6">
          <p className="font-bold text-white text-[16px] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            💡 Ichki laboratoriya doimo yaxshi emas
          </p>
          <p className="text-[#a0c4d4] text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Ichki laboratoriya tezligi yuqori boʼlsa ham, oz sonli xodimlar bilan boshqarilgani uchun mutaxassislik va jihozlarda cheklovlar koʼp uchraydi. Godeok First Dental <span className="text-[#6eb7bc] font-bold">tezlikdan koʼra sifatni</span> tanladi. Boshidan toʼgʼri tayyorlash uzoq foydalanish kafolatidir.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
