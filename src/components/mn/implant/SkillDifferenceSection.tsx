'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function SkillDifferenceSection() {
  const advantages = [
    {
      title: 'Чосоны их сургуулийн зочин профессор шууд мэс засал',
      description: 'Их сургуулийн эмнэлэгт залуу эмч нарт заадаг\nбатлагдсан мэргэжилтэн шууд гүйцэтгэнэ',
      highlight: 'Багшийн ур чадвар',
      iconPath: 'M22 10v6M2 10v6M12 2L2 7l10 5 10-5-10-5zM12 22V12'
    },
    {
      title: 'Osstem·Point·Dentis судалгааны зөвлөх',
      description: 'Дотоодын тэргүүлэх имплант компаний судалгааны зөвлөх\nХамгийн сүүлийн үеийн технологи, тоног төхөөрөмжийг шууд ашигладаг',
      highlight: 'Батлагдсан технологи',
      iconPath: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18'
    },
    {
      title: '3D дижитал чиглүүлэгчтэй мэс засал',
      description: '0.1мм алдааны нарийвчилсан суулгалт\nМэдрэл/судасны гэмтлийн эрсдэлийг багасгах',
      highlight: 'Нарийвчилсан технологи',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      title: 'Зүсэлтгүй & тухайн өдрийн суулгалт',
      description: 'Цус алдалт, өвдөлт, хавдалтыг багасгах\nХурдан өдөр тутмын амьдралд буцах боломжтой',
      highlight: 'Тав тухтай мэс засал',
      iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    }
  ];

  return (
    <div className="bg-[#0a1628] w-full flex justify-center overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#008095]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4DC8D8]/10 rounded-full blur-3xl" />
      </div>

      <div className="box-border flex flex-col gap-12 items-center px-6 py-[80px] relative z-10 w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold tracking-[3px] uppercase mb-4" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            WHY GODUK FIRST
          </p>
          <h2 className="font-extrabold text-[32px] text-white leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Ур чадвар өөр бол
            <br />
            <span className="text-[#008095]">үр дүн өөр байна</span>
          </h2>
          <p className="font-medium leading-[1.6] text-white/70 text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Эхнээсээ зөв хийх нь хамгийн ухаалаг сонголт
            <br />
            Дахин мэс заслын шаардлагагүй төгс эмчилгээ, энэ бол жинхэнэ ур чадвар
          </p>
        </FadeInSection>

        {/* Main Stats */}
        <FadeInSection delay={100} className="w-full">
          <div className="bg-gradient-to-br from-[#008095] to-[#006B7A] rounded-3xl p-6 shadow-2xl shadow-[#008095]/30 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-center mb-6">
                <p className="text-white/80 text-[14px] font-medium mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  고덕퍼스트치과 임플란트
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-[64px] font-black text-white leading-none" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    1,200
                  </span>
                  <span className="text-[24px] font-bold text-white/80" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    удаа+
                  </span>
                </div>
                <p className="text-white/90 text-[15px] font-semibold mt-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  Нийт имплант суулгалт
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <p className="text-[28px] font-black text-white mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>2,000+</p>
                  <p className="text-[12px] text-white/70 font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Сойз шүд авсан туршлага</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <p className="text-[28px] font-black text-white mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>4.9</p>
                  <p className="text-[12px] text-white/70 font-medium" style={{ fontFamily: '"NanumSquare", sans-serif' }}>Өвчтөний сэтгэл ханамж / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Advantages Grid */}
        <FadeInSection delay={200} className="w-full space-y-4">
          <p className="text-center text-white/50 text-[13px] font-medium tracking-wide" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            고덕퍼스트치과만의 차별화된 시스템
          </p>

          <div className="grid grid-cols-1 gap-3">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#008095]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#008095]/20 to-[#006B7A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-bold text-[16px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-white/60 leading-[1.5] whitespace-pre-line" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block px-2.5 py-1 bg-[#008095]/20 text-[#4DC8D8] text-[11px] font-bold rounded-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom CTA */}
        <FadeInSection delay={300} className="w-full">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
            <p className="text-white/80 text-[14px] leading-[1.6] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              <span className="text-[#4DC8D8] font-bold">Насан туршдаа хэрэглэх имплант</span>, хэнд даатгах вэ?
            </p>
            <p className="text-white text-[15px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Их сургуулийн эмнэлгийн түвшний эмчилгээг мэдрээрэй
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
