import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-[#f3f6fb] py-[60px] px-4">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-10">
          {/* Logo */}
          <div className="h-6 w-[168px]">
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none">
              <text x="0" y="18" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#008095">
                Godeok First Dental
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
              Godeok First Dental nima uchun<br />
              implant boʼyicha eng yaxshi
            </h2>
          </div>
        </div>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4">
          {/* Reason 1: 치과의사들이 배우러 오는 전문 의사 */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">1</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Tish shifokorlari oʼrganish uchun<br />
                  keladigan mutaxassis shifokor
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6">
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-1.png"
                    alt="Seminar surati 1"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-2.png"
                    alt="Seminar surati 2"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-3.png"
                    alt="Implant seminar"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    Implant seminar
                  </p>
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-4.png"
                    alt="Raqamli implant mutaxassis kursi"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    Raqamli implant mutaxassis kursi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2: 3단계 임시치아 프로토콜 */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">2</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  3 bosqichli vaqtincha tish<br />
                  protokoli
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Boshqa stomatologiyalarning 1 bosqichli vaqtincha tishidan tubdan farqli<br />
                3 bosqichli aniq sozlash tizimi bilan mukammallikka intiladi
              </p>
            </div>

            {/* Comparison table */}
            <div className="px-6 py-6 relative min-h-[280px]">
              {/* 일반 치과 */}
              <div className="absolute left-6 top-[17px] flex flex-col gap-[10px] w-[133px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-[#37373e]">
                  Oddiy stomatologiya
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">1 bosqichda yakunlash</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">2-bosqich yoʼq</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">3-bosqich yoʼq</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">4-bosqich yoʼq</p>
                  </div>
                </div>
              </div>

              {/* 고덕퍼스트치과 */}
              <div className="absolute right-6 top-[1px] bg-white border-2 border-[#008095] rounded-[11px] px-[15px] py-[13px] flex flex-col gap-[10px] w-[182px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-black text-center">
                  Godeok First Dental
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">1-bosqich: Darhol tiklanish</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">2-bosqich: Aniq tishlov sozlash</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">3-bosqich: Mukammal tishlov tekshiruvi</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">4-bosqich: Mukammal yakuniy protez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 3: 24시간 내 완성되는 수술 */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">3</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  24 soat ichida tugallanadigan operatsiya
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Ichki laboratoriyada tez tayyorlanishi tufayli<br />
                tishsiz oʼtkaziladigan birorta ham kun yoʼq
              </p>
            </div>

            {/* Timeline */}
            <div className="px-6 py-6 flex flex-col gap-[26px]">
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f2f5ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-morning-surgery.png"
                    alt="Ertalabki operatsiya"
                    width={80}
                    height={80}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">10:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">Ertalabki operatsiya</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    <span className="text-[#0b1727]">3D raqamli tahlil orqali</span> aniq va<br />
                    tezkor implant oʼrnatish
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#fff9ec] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-temporary-tooth.png"
                    alt="Vaqtincha tish tayyorlash"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">14:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">Vaqtincha tish tayyorlash</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#0b1727]">
                    Bemorga moslashtirilgan holda darhol tayyorlash
                  </p>
                  <p className="text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#008095]">
                    Ichki laboratoriyada darhol tayyorlanib 24 soat ichida yakunlanadi
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f5f4ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-dinner.png"
                    alt="Kechki ovqat"
                    width={86}
                    height={86}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">18:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">Kechki ovqat</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    Yangi tishlar bilan qulay tarzda<br />
                    kechki vaqtdan bahramand boʼling
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 4: 철저한 사후관리 */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">4</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Puxta keyingi parvarish
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Operatsiyadan soʼng yakuniy protez oʼrnatilguncha,<br />
                tishsiz yashash uchun birorta ham kun yoʼq
              </p>
            </div>

            <div className="py-6 flex flex-col gap-5 items-center">
              <div className="relative w-full h-[242px]">
                <Image
                  src="/images/implant-bacteria-therapy.png"
                  alt="Ogʼiz boʼshligʼi bakteriya terapiyasi"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d] text-center">
                Ogʼiz boʼshligʼi bakteriya terapiyasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
