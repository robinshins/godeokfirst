'use client';

const risks = [
  {
    tag: '심혈관',
    title: '심혈관계 질환 위험 3배↑',
    desc: '잇몸 속 치주균이 혈관으로 침투해 혈관벽에 염증을 일으키고 혈전 생성을 촉진합니다. 연구에 따르면 잇몸 질환이 있는 경우 심근경색 위험이 최대 2.8배, 뇌졸중 위험이 16% 이상 높아집니다. 반대로 정기적인 스케일링만으로도 심장 질환 위험을 10~14% 낮출 수 있다고 보고됩니다.',
    stats: ['심근경색 위험 2.8배 증가', '뇌졸중 위험 16% 감소 (연 1회 스케일링 시)', '심장 검진 시 구강 검진 병행 권고'],
    source: '분당서울대병원 연구팀 2024 · 미국심장협회(AHA) 2020',
  },
  {
    tag: '당뇨',
    title: '당뇨 합병증 진행 2배↑',
    desc: '잇몸 염증은 인슐린 저항성을 높여 혈당 조절을 방해하는 악순환을 만듭니다. 치주염이 있으면 HbA1c 수치 조절이 어려워지고, 반대로 당뇨가 있으면 잇몸 치료 효과도 낮아집니다. 치주 치료만으로 HbA1c가 0.4% 감소했다는 임상 연구도 있습니다.',
    stats: ['혈당 조절 실패 가능성 6배 증가', 'HbA1c 0.4% 감소 (치주 치료 시)', '당뇨 합병증 진행 속도 2배 빠름'],
    source: '가톨릭대 은평성모병원 2023 · 대한당뇨병학회',
  },
  {
    tag: '뇌질환',
    title: '치매 발생 위험 70%↑',
    desc: '치주균 중 Porphyromonas gingivalis가 혈뇌장벽을 통과해 뇌 안으로 유입되면 베타아밀로이드 축적을 가속화합니다. 알츠하이머 환자의 뇌 조직에서 이 치주균의 독소가 발견되었으며, 10년 이상 잇몸 질환을 방치했을 때 치매 위험이 유의미하게 증가하는 것으로 보고됩니다.',
    stats: ['알츠하이머 환자 40%에서 치주균 독소 발견', '10년 이상 방치 시 치매 위험 70%↑', '조기 잇몸 관리로 뇌 건강 보호 가능'],
    source: '하버드대 칸타르시 박사팀 2024 · Journal of Neuroinflammation',
  },
  {
    tag: '임산부',
    title: '조산 및 저체중아 출산 7배↑',
    desc: '잇몸의 염증 매개 물질인 프로스타글란딘이 혈액을 통해 태반으로 전달되면 조기 진통을 유발할 수 있습니다. 임신 중 잇몸 관리가 소홀해지기 쉬운 만큼, 임신 계획 전·임신 초기에 잇몸 상태를 반드시 점검받는 것이 권고됩니다.',
    stats: ['조산 위험 7배 증가', '저체중아(2kg 미만) 출산 2배 증가', '임신 중 잇몸 치료 건강보험 적용'],
    source: '미국·유럽 치주학회',
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
            잇몸병은 입안에만<br />머물지 않습니다
          </h2>
          <p
            className="font-medium text-white/60 text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            잇몸 속 세균은 혈관을 타고 전신으로 퍼져<br />생각보다 훨씬 심각한 질환을 유발합니다.
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
              <p className="text-white/30 text-[11px]">출처 : {risk.source}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-[#008095]/10 border border-[#008095]/30 rounded-2xl p-6 flex flex-col gap-2 text-center">
          <p
            className="text-[#4DC8D8] font-bold text-[16px] leading-[1.5]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            연 1회 스케일링만으로도<br />심혈관 질환 위험을 14% 낮출 수 있습니다.
          </p>
          <p className="text-white/40 text-[13px]">
            스케일링은 건강보험 적용 — 1년에 한 번은 반드시 챙기세요.
          </p>
        </div>

      </div>
    </div>
  );
}
