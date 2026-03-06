'use client';

export default function ThreeStepSystem() {

  const steps = [
    {
      id: 1,
      name: '1차 임시',
      title: '즉시 회복',
      description: '수술 직후, 즉시 장착하여 바로 일상생활이 가능합니다.',
      icon: '🚀'
    },
    {
      id: 2,
      name: '2차 교합안정',
      title: '정밀 교합 조정',
      description: '2주 후, 환자 맞춤형으로 교합 상태를 미세하게 조정합니다.',
      icon: '🔧'
    },
    {
      id: 3,
      name: '3차 최종임시',
      title: '완벽 교합 확인',
      description: '최종 보철물 제작 전, 완벽한 교합을 다시 한번 확인합니다.',
      icon: '🎯'
    },
    {
      id: 4,
      name: '최종 보철',
      title: '평생 사용할 내 치아',
      description: '모든 조정이 완료된, 완벽하게 개인화된 최종 보철물을 장착합니다.',
      icon: '💎'
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            타협 없는 완벽함,<br className="sm:hidden" /> 
            3단계 임시치아 시스템
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto px-2">
            단 한 번의 임시치아로 끝내는 것이 아닌, 3단계에 걸친 정밀 조정을 통해 내 치아 같은 편안함을 만듭니다.
          </p>
        </div>

        {/* All steps displayed at once - mobile optimized */}
        <div className="space-y-4 mb-8 sm:mb-12">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-50 rounded-full p-3 mr-4 flex-shrink-0">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mr-3">
                      STEP {step.id}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm font-semibold text-blue-600 mb-1">{step.name}</p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Comparison - mobile optimized */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8">고덕퍼스트 vs 일반치과</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 sm:p-6 shadow-lg shadow-blue-500/10">
              <h4 className="font-bold text-base sm:text-lg text-blue-700 mb-3 text-center">고덕퍼스트치과</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-blue-50 text-blue-800 rounded-lg px-3 sm:px-4 py-2 flex items-center text-sm sm:text-base font-semibold">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">✓</span> 
                  <span className="truncate">1단계: 즉시 회복</span>
                </div>
                <div className="bg-blue-50 text-blue-800 rounded-lg px-3 sm:px-4 py-2 flex items-center text-sm sm:text-base font-semibold">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">✓</span> 
                  <span className="truncate">2단계: 정밀 교합 조정</span>
                </div>
                <div className="bg-blue-50 text-blue-800 rounded-lg px-3 sm:px-4 py-2 flex items-center text-sm sm:text-base font-semibold">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">✓</span> 
                  <span className="truncate">3단계: 완벽 교합 확인</span>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6">
              <h4 className="font-bold text-base sm:text-lg text-slate-700 mb-3 text-center">일반 치과</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-slate-100 text-slate-600 rounded-lg px-3 sm:px-4 py-2 flex items-center text-sm sm:text-base font-semibold">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">✓</span> 
                  <span>1단계로 마무리</span>
                </div>
                <div className="bg-slate-100 text-slate-400 rounded-lg px-3 sm:px-4 py-2 flex items-center text-sm sm:text-base line-through">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3 opacity-0">✓</span> 
                  <span>2단계 과정 없음</span>
                </div>
                <div className="bg-slate-100 text-slate-400 rounded-lg px-3 sm:px-4 py-2 flex items-center text-sm sm:text-base line-through">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3 opacity-0">✓</span> 
                  <span>3단계 과정 없음</span>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
