export default function BusanNo1Proof() {
  const proofs = [
    {
      icon: '👨‍🏫',
      title: '독보적 실력',
      subtitle: '치과의사들이 배우러 오는 의사',
      description: '다른 치과 원장님들을 대상으로 교육을 진행하는 검증된 실력. 고덕퍼스트 원장님께 배운 의사들이 전국에서 진료합니다.',
      color: 'yellow'
    },
    {
      icon: '🏭',
      title: '고덕 유일',
      subtitle: '3단계 임시치아 프로토콜',
      description: '타 치과의 1단계 임시치아와 차원이 다른, 3단계 정밀 조정 시스템으로 완벽함을 추구합니다.',
      color: 'blue'
    },
    {
      icon: '🎯',
      title: '완벽한 결과',
      subtitle: '10년간 같은 자리 책임진료',
      description: '대표원장이 직접 상담, 수술, 사후관리까지 책임집니다. 처음부터 끝까지 한 분의 원장이 책임지는 진료.',
      color: 'green'
    }
  ];

  const protocolSteps = [
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

  const cardColorClasses = {
    yellow: 'from-yellow-50 to-amber-50 hover:shadow-yellow-500/20',
    blue: 'from-blue-50 to-sky-50 hover:shadow-blue-500/20',
    green: 'from-green-50 to-emerald-50 hover:shadow-green-500/20',
  };

  return (
    <section id="proof-section" className="py-20 sm:py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            전체 임플란트,<br />
            왜 고덕퍼스트가 정답일까요?
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            말로만 최고가 아닌, 결과로 증명하는 고덕퍼스트치과의 독보적인 3가지 이유를 확인해보세요.
          </p>
        </div>

        {/* Proof cards */}
        <div className="space-y-6">
          {proofs.map((proof, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${cardColorClasses[proof.color as keyof typeof cardColorClasses]} rounded-2xl p-8 shadow-lg border border-black/5 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
            >
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 shadow-md mr-5">
                  <span className="text-3xl">{proof.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">{proof.title}</h3>
                  <p className="text-xl font-bold text-slate-900 my-1">
                    {proof.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {proof.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3단계 프로토콜 상세 설명 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              왜 3단계 임시치아가 중요할까요?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
              단 한 번의 임시치아로 끝내는 것이 아닌, 3단계에 걸친 정밀 조정을 통해 내 치아 같은 편안함을 만듭니다.
            </p>
          </div>

          {/* 모든 스텝 표시 */}
          <div className="space-y-4">
            {protocolSteps.map((step) => (
              <div key={step.id} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 mr-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mr-3">
                        STEP {step.id}
                      </span>
                      <h4 className="font-bold text-lg text-slate-900">{step.title}</h4>
                    </div>
                    <p className="text-sm font-semibold text-blue-600 mb-1">{step.name}</p>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 비교표 */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-lg text-blue-700 mb-4 text-center">고덕퍼스트치과</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 text-blue-800 rounded-lg px-4 py-3 flex items-center text-sm font-semibold">
                  <span className="text-xl mr-3">✓</span> 
                  <span>1단계: 즉시 회복</span>
                </div>
                <div className="bg-blue-50 text-blue-800 rounded-lg px-4 py-3 flex items-center text-sm font-semibold">
                  <span className="text-xl mr-3">✓</span> 
                  <span>2단계: 정밀 교합 조정</span>
                </div>
                <div className="bg-blue-50 text-blue-800 rounded-lg px-4 py-3 flex items-center text-sm font-semibold">
                  <span className="text-xl mr-3">✓</span> 
                  <span>3단계: 완벽 교합 확인</span>
                </div>
                <div className="bg-blue-50 text-blue-800 rounded-lg px-4 py-3 flex items-center text-sm font-semibold">
                  <span className="text-xl mr-3">✓</span> 
                  <span>4단계: 완벽한 최종 보철</span>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-slate-700 mb-4 text-center">일반 치과</h4>
              <div className="space-y-3">
                <div className="bg-slate-100 text-slate-600 rounded-lg px-4 py-3 flex items-center text-sm font-semibold">
                  <span className="text-xl mr-3">✓</span> 
                  <span>1단계로 마무리</span>
                </div>
                <div className="bg-slate-100 text-slate-400 rounded-lg px-4 py-3 flex items-center text-sm line-through">
                  <span className="text-xl mr-3 opacity-0">✓</span> 
                  <span>2단계 과정 없음</span>
                </div>
                <div className="bg-slate-100 text-slate-400 rounded-lg px-4 py-3 flex items-center text-sm line-through">
                  <span className="text-xl mr-3 opacity-0">✓</span> 
                  <span>3단계 과정 없음</span>
                </div>
                <div className="bg-slate-100 text-slate-400 rounded-lg px-4 py-3 flex items-center text-sm line-through">
                  <span className="text-xl mr-3 opacity-0">✓</span> 
                  <span>최종 검증 없음</span>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}