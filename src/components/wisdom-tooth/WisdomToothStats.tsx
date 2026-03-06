export default function WisdomToothStats() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] via-[#0b1727] to-white">
      <div className="max-w-[375px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <p className="text-[#6eb7bc] text-[13px] font-bold tracking-[3px] uppercase mb-3">
            GODUK FIRST DENTAL
          </p>
          <h2 className="text-white text-[32px] font-bold leading-[1.35] tracking-[-0.64px] mb-3">
            모든 타입의 사랑니,<br />
            저희는 다 경험했습니다
          </h2>
          <p className="text-[#e9ebf1] text-base font-semibold leading-[1.4] tracking-[-0.32px]">
            대학병원 외래교수 역임 원장이<br />
            어떤 어려운 케이스도 안전하게 발치합니다
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-5">
          {/* 2,700+ 건 Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#008095] to-[#006d80] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                2,700+
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#008095] leading-[1.35] tracking-[-0.48px]">건</span>
              </div>
            </div>
            <p className="text-[#292a2f] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              누적 사랑니 발치
            </p>
          </div>

          {/* 부작용 0건 Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#008095] to-[#006d80] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#008095] leading-[1.35] tracking-[-0.48px]">건</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              부작용으로 인한 재치료 건수
            </p>
          </div>

          {/* 상급병원 전원률 0% Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#008095] to-[#006d80] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#008095] leading-[1.35] tracking-[-0.48px]">%</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px] mb-3">
              상급병원 전원률
            </p>
            <div className="bg-[#f3f6fb] rounded-xl p-4">
              <p className="text-[#008095] text-[15px] font-bold leading-[1.5] tracking-[-0.3px]">
                오히려 다른 병원에서<br />
                어려운 케이스를 저희에게 보냅니다
              </p>
            </div>
          </div>

          {/* 외래교수 어필 카드 */}
          <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-2xl p-6 text-white">
            <p className="text-[13px] font-bold text-white/60 uppercase tracking-[2px] mb-3">WHY GODUK FIRST</p>
            <p className="text-[18px] font-bold leading-[1.5] mb-3">
              대학병원 외래교수 역임 원장이<br />직접 발치합니다
            </p>
            <div className="flex flex-col gap-2">
              {[
                '조선대학교 치과병원 외래교수 역임',
                '서울대학교 치의학대학원 임플란트 우수상 수료',
                '통합치의학과 전문의 — 치과 전 분야 통합 진단',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#6eb7bc] text-[13px]">✓</span>
                  <span className="text-white/90 text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
