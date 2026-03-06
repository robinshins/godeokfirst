export default function SpecialPromotion() {
  const benefits = [
    '스케일링 직후 바로 진행 가능',
    '2회 시술로 완벽한 미백 효과',
    '시린 증상 없는 안전한 KFDA 인증 제품 사용'
  ];

  return (
    <section className="py-20 sm:py-24 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
            고덕 주민 특별 혜택
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            지금, 고덕퍼스트에서 받아야 할 이유
          </h2>
          <p className="text-lg text-blue-200 max-w-xl mx-auto">
            1년에 한 번 뿐인 보험 스케일링, 어차피 받을 거라면 고덕퍼스트에서 받고 압도적인 혜택을 추가로 누리세요.
          </p>
        </div>

        {/* Promotion banner */}
        <div className="bg-white/95 backdrop-blur-lg text-slate-900 rounded-3xl p-8 shadow-2xl mb-12 border border-white/20">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-blue-700 mb-2">
              보험 스케일링(연 1회)과 함께 신청 시
            </p>
            <p className="text-4xl font-bold text-slate-900">
              전문가 치아미백
            </p>
            <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2">
              50% 할인
            </p>
          </div>

          <div className="bg-slate-100 rounded-xl p-4 mb-6 border border-black/5">
            <div className="flex justify-between items-center text-lg">
              <span className="text-slate-500">정상가</span>
              <span className="line-through text-slate-400">200,000원</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="font-bold text-blue-700">이벤트 할인가</span>
              <span className="text-3xl font-bold text-blue-700">100,000원</span>
            </div>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional promotions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
            <span className="text-4xl block mb-2">🎁</span>
            <p className="text-lg font-semibold">첫 방문 혜택</p>
            <p className="text-sm text-blue-200">정밀 구강 검진 & 파노라마 촬영 무료</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
            <span className="text-4xl block mb-2">👨‍👩‍👧‍👦</span>
            <p className="text-lg font-semibold">가족/지인 동반 할인</p>
            <p className="text-sm text-blue-200">2인 이상 비보험 진료 시 10% 추가 할인</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/consultation" className="block">
            <button className="w-full bg-yellow-400 text-blue-900 px-8 py-5 rounded-full font-bold text-lg shadow-2xl shadow-yellow-400/20 hover:bg-yellow-300 hover:scale-105 transform transition-all duration-300">
              지금 바로 혜택 받고 상담 예약하기
            </button>
          </a>
          <p className="text-xs text-blue-200 mt-4">선착순 100명 한정, 조기 마감될 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}