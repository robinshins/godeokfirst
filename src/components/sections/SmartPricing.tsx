'use client';

export default function SmartPricing() {
  return (
    <section className="py-20 sm:py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            실력이 다르면<br />
            결과가 다릅니다
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            처음부터 제대로 하는 것이 가장 현명한 선택입니다. 재수술이 없는 완벽한 시술, 그것이 진짜 실력입니다.
          </p>
        </div>

        {/* Expertise comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Other clinics */}
          <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg transform md:scale-95 opacity-80">
            <h3 className="font-bold text-xl text-slate-700 mb-4 text-center">일반 치과</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <div>
                  <p className="font-medium text-slate-700">원내 기공소 없음</p>
                  <p className="text-sm text-slate-500">외부 기공소에 의뢰하여 비용과 기간 증가 및 디테일한 작업 어려움</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <div>
                  <p className="font-medium text-slate-700">1단계 임시치아</p>
                  <p className="text-sm text-slate-500">교합 조정 없이 바로 최종 보철</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <div>
                  <p className="font-medium text-slate-700">담당 의사가 자주 바뀜</p>
                  <p className="text-sm text-slate-500">원장이 바뀌면 책임 소재도 불분명, 일관된 사후 관리가 어려움</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-slate-200 pt-4 mt-4">
              <p className="text-center text-slate-600 text-sm">
                &quot;시술 후에도 불안함이 남습니다&quot;
              </p>
            </div>
          </div>

          {/* Godeok First */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-2xl shadow-blue-500/20">
            <h3 className="font-bold text-xl text-blue-700 mb-4 text-center">고덕퍼스트치과</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <p className="font-medium text-slate-700">치과의사들이 배우러 오는 실력</p>
                  <p className="text-sm text-blue-600">원장님이 다른 치과의사들에게 교육 진행</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <p className="font-medium text-slate-700">3단계 임시치아 시스템</p>
                  <p className="text-sm text-blue-600">완벽한 교합을 위한 단계별 정밀 조정</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <div>
                  <p className="font-medium text-slate-700">10년간 같은 자리 책임진료</p>
                  <p className="text-sm text-blue-600">대표원장이 직접 상담, 수술, 사후관리까지</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-blue-200 pt-4 mt-4">
              <p className="text-center text-blue-700 font-semibold">
                &quot;한 번의 시술로 평생 안심&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl mb-16">
          <p className="text-2xl font-bold text-white">
            &quot;처음이 전부입니다. <br/> <span className="text-yellow-300">재수술은 없습니다.</span>&quot;
          </p>
          <p className="text-md text-slate-300 mt-2">
            고덕퍼스트는 압도적인 실력으로 평생 한 번의 시술을 약속합니다.
          </p>
        </div>

      
      </div>
    </section>
  );
}