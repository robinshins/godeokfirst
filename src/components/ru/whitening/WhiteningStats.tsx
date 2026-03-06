export default function WhiteningStats() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] via-[#0b1727] to-white">
      <div className="max-w-[375px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-white text-[32px] font-bold leading-[1.35] tracking-[-0.64px] mb-3">
            Более 1,000 процедур,
            <br />
            лидеры в отбеливании
          </h2>
          <p className="text-[#e9ebf1] text-base font-semibold leading-[1.4] tracking-[-0.32px]">
            Безопасное отбеливание без чувствительности,
            <br />
            эффективный результат
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-5">
          {/* 10+ лет Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                10+
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">лет</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Опыт в отбеливании
            </p>
          </div>

          {/* 1,000+ процедур Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                1,000+
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">шт.</span>
              </div>
            </div>
            <p className="text-[#292a2f] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Проведено процедур
            </p>
          </div>

          {/* 0 побочных эффектов Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">шт.</span>
              </div>
            </div>
            <p className="text-[#292a2f] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Побочных эффектов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
