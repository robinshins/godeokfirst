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
              Godeok First Dental<br />
              Implant butun mamlakatda 1-oʼrinda boʼlish sababi
            </h2>
          </div>
        </div>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4">
          {/* Reason 1: Tish shifokorlari kelishiga sabab boʼlgan mutaxassis shifokor */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">1</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Tish shifokorlari<br />
                  kelishiga sabab boʼlgan mutaxassis shifokor
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6">
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-1.png"
                    alt="seminar surati 1"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-2.png"
                    alt="seminar surati 2"
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
                    alt="raqamli Implant mutaxassisi aniq"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    Raqamli Implant mutaxassisi aniq
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2: 3bosqich vaqtinchatish protokol */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">2</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  3bosqich vaqtinchatish<br />
                  protokol
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Boshqa stomatologiyalardan farqli<br />
                3 bosqichli aniq sozlash tizimi bilan mukammallikka intilish
              </p>
            </div>

            {/* Comparison table */}
            <div className="px-6 py-6 relative min-h-[280px]">
              {/* Oddiy stomatologiya */}
              <div className="absolute left-6 top-[17px] flex flex-col gap-[10px] w-[133px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-[#37373e]">
                  Oddiy stomatologiya
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">1bosqich tugatish</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">2-bosqich sozlash yoʼq</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">3-bosqich sozlash yoʼq</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">4-bosqich sozlash yoʼq</p>
                  </div>
                </div>
              </div>

              {/* Godeok First Dental */}
              <div className="absolute right-6 top-[1px] bg-white border-2 border-[#008095] rounded-[11px] px-[15px] py-[13px] flex flex-col gap-[10px] w-[182px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-black text-center">
                  Godeok First Dental
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">1bosqich : darhol tiklanish</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">2bosqich : aniq tishlov sozlash</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">3-bosqich: Mukammal tishlov tekshiruvi</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">4bosqich : mukammal yakuniy protez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 3: 24 soat ichida yakunlanadigan operatsiya */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">3</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  24 soat ichida yakunlanadigan operatsiya
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Mutaxassis laboratoriyada tez tayyorlanishi tufayli<br />
                Tishsiz oʼtkazadigan kun birorta ham yoʼq
              </p>
            </div>

            {/* Timeline */}
            <div className="px-6 py-6 flex flex-col gap-[26px]">
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f2f5ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-morning-surgery.png"
                    alt="ertalab operatsiya"
                    width={80}
                    height={80}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">10:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">ertalab operatsiya</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    <span className="text-[#0b1727]">3D raqamli tahlil orqali</span> aniq va<br />
                    tez Implantoʼrnatish
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#fff9ec] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-temporary-tooth.png"
                    alt="vaqtinchatish tayyorlash"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">14:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">vaqtinchatish tayyorlash</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#0b1727]">
                    Bemorga moslashtirilgan darhol tayyorlash
                  </p>
                  <p className="text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#008095]">
                    Mutaxassis laboratoriyada darhol tayyorlab 24 soat ichida yakunlash
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f5f4ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-dinner.png"
                    alt="kechqurun ovqatlanish"
                    width={86}
                    height={86}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">18:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">kechqurun ovqatlanish</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                    Yangi tishdan qulay bahramand boʼling<br />
                    kechqurun ovqatlanish
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 4: Puxta keyingi parvarish */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">4</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Puxta keyingi parvarish
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
                Operatsiya darhol keyindan yakuniy protez oʼrnatishgacha,<br />
                Tishsiz yashaydigan kun birorta ham yoʼq
              </p>
            </div>

            <div className="py-6 flex flex-col gap-5 items-center">
              <div className="relative w-full h-[242px]">
                <Image
                  src="/images/implant-bacteria-therapy.png"
                  alt="ogʼiz boʼshlig'i bakteriya terapiyasi"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d] text-center">
                ogʼiz boʼshlig'i bakteriya terapiyasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
