export default function WisdomToothStats() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] via-[#0b1727] to-white">
      <div className="max-w-[375px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-white text-[32px] font-bold leading-[1.35] tracking-[-0.64px] mb-3">
            Barcha turdagi donolik tishlari,
            <br />
            biz barchasini ko'rganmiz
          </h2>
          <p className="text-[#e9ebf1] text-base font-semibold leading-[1.4] tracking-[-0.32px]">
            Qanday qiyin bo'lmasin, xavfsiz
            <br />
            boy tajriba bilan barcha holatlarni xavfsiz olamiz
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-5">
          {/* 2,700+ ta Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                2,700+
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">ta</span>
              </div>
            </div>
            <p className="text-[#292a2f] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Jami donolik tishi olish
            </p>
          </div>

          {/* Asorat 0 ta Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">ta</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px]">
              Asorat sababli qayta davolash
            </p>
          </div>

          {/* Yuqori darajali kasalxonaga yuborish 0% Card */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-[72px] font-bold bg-gradient-to-b from-[#006aff] to-[#0050c0] bg-clip-text text-transparent leading-normal tracking-[-2.88px]">
                0
              </span>
              <div className="flex flex-col justify-end self-stretch pb-3 pt-2.5">
                <span className="text-2xl font-bold text-[#006aff] leading-[1.35] tracking-[-0.48px]">%</span>
              </div>
            </div>
            <p className="text-[#37373e] text-[22px] font-bold leading-[1.4] tracking-[-0.44px] mb-3">
              Yuqori darajali kasalxonaga yuborish
            </p>
            <div className="bg-[#f3f6fb] rounded-xl p-4">
              <p className="text-[#006aff] text-[15px] font-bold leading-[1.5] tracking-[-0.3px]">
                Aksincha, boshqa kasalxonalar<br />
                qiyin holatlarni bizga yuboradi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
