import Image from 'next/image';

export default function BacteriaTherapy() {
  const benefits = [
    {
      icon: '🛡️',
      text: '임플란트 주변염 발생률',
      highlight: '80% 감소',
      color: 'text-blue-600'
    },
    {
      icon: '🦠',
      text: '유해균 억제 및 바이오필름',
      highlight: '90% 제거',
      color: 'text-red-600'
    },
    {
      icon: '🌿',
      text: '잇몸 염증 자연 치유력',
      highlight: '3배 상승',
      color: 'text-green-600'
    },
    {
      icon: '🌬️',
      text: '구취 원인 VSC 성분',
      highlight: '85% 억제',
      color: 'text-purple-600'
    }
  ];

  const therapyFeatures = [
    '스웨덴 카롤린스카 의과대학 개발 기술',
    '치아와 잇몸에 직접 부착되는 특허 프로바이오틱스',
    '치약과 구강세정제에서도 생존하는 강력한 균주',
    '당분과 치아 우식 산 생성 없는 안전한 균주'
  ];

  return (
    <section className="py-20 sm:py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            임플란트 이후<br/> 관리도 남다르게
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            고덕퍼스트가 도입한 구강 박테리아테라피로 유해균을 억제하고 유익균을 증가시켜 임플란트를 평생 건강하게 유지합니다.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/5">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-5 py-2 rounded-full font-bold text-sm mb-4 shadow-lg shadow-cyan-500/20">
              고덕 최초 도입
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">
              구강 박테리아테라피
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              프로바이오틱스를 이용하여 유해균을 억제하고 구강 내 세균 균형을 조절하는 최신 예방 프로그램
            </p>
          </div>

          {/* Before/After visualization */}
          <div className="mb-10">
            <div className="rounded-xl overflow-hidden shadow-lg relative w-full aspect-video">
              <Image
                src="/images/bacteria-therapy-main.jpg"
                alt="구강 박테리아테라피 유해균과 유익균 비교"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-slate-600 mt-3">
              박테리아테라피를 통한 구강 내 세균 균형 변화
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-center text-xl font-bold text-slate-900 mb-6">임상 검증된 효과</h4>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 border border-black/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <div className="text-2xl mr-3">{benefit.icon}</div>
                      <p className="text-sm sm:text-base font-semibold text-slate-800">{benefit.text}</p>
                    </div>
                    <p className={`text-base sm:text-lg font-bold ${benefit.color} whitespace-nowrap ml-2`}>{benefit.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-center text-xl font-bold text-slate-900 mb-6">고덕퍼스트만의 특별한 기술</h4>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <ul className="space-y-3">
                {therapyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Free Water Pick */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-full sm:w-40 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0 relative">
                <Image
                  src="/images/waterpik.jpeg"
                  alt="워터픽 제품 이미지"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-lg font-bold text-slate-900">워터픽 무료 증정</p>
                <p className="text-xs text-slate-600 mt-1">리뷰 이벤트 참여시</p>
                <p className="text-lg font-bold text-red-600 mt-2">9만원 상당</p>
                <p className="text-sm text-slate-700 mt-3">
                  임플란트 주변 음식물 제거와 잇몸 마사지에 효과적! 구강 관리에 필수적인 워터픽을 선물로 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl">
          <p className="text-2xl font-bold text-white">
            &quot;10년 후가 달라지는 <span className="text-teal-300">진짜 사후관리</span>의 차이&quot;
          </p>
          <p className="text-md text-slate-300 mt-2">
            고덕퍼스트는 시술로 끝내지 않고, 당신의 평생 구강 건강을 책임집니다.
          </p>
        </div>
      </div>
    </section>
  );
}