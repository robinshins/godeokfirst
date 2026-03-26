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
 Имплант үндэсний 1гэх мэт 
            </h2>
          </div>
        </div>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4">
 {/* Reason 1: шүдний эмнэлэг дахин мэргэжилтэн */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">1</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
 шүдний эмнэлэг <br />
 дахин мэргэжилтэн 
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6">
              <div className="flex gap-3" style={{ width: 'max-content' }}>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-1.png"
                    alt="семинарын зураг 1"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0">
                  <Image
                    src="/images/implant-reason-seminar-2.png"
                    alt="семинарын зураг 2"
                    width={243}
                    height={293}
                    className="rounded-[20px]"
                  />
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-3.png"
                    alt="Имплант семинар"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
                    Имплант семинар
                  </p>
                </div>
                <div className="w-[243px] flex-shrink-0 flex flex-col gap-[6px]">
                  <Image
                    src="/images/implant-reason-seminar-4.png"
 alt="дижитал Имплант мэргэжилтэн"
                    width={243}
                    height={280}
                    className="rounded-[9px]"
                  />
                  <p className="text-[13px] font-bold leading-[1.5] tracking-[-0.02em] text-[#727582]">
 дижитал Имплант мэргэжилтэн 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2: 3шатлалын түршүд протокол */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">2</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  3шатлалын түршүд<br />
                  протокол
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
 шүдний эмнэлэг 1шатлалын түршүд зөрүүвон бусад<br />
 3шатлал нарийвчилсан тохируулга систем 
              </p>
            </div>

            {/* Comparison table */}
            <div className="px-6 py-6 relative min-h-[280px]">
              {/* энгийн шүдний эмнэлэг */}
              <div className="absolute left-6 top-[17px] flex flex-col gap-[10px] w-[133px]">
                <p className="text-[22px] font-bold leading-[1.4] tracking-[-0.02em] text-[#37373e]">
                  энгийн шүдний эмнэлэг
                </p>
                <div className="flex flex-col">
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">1шатлал дуусгах</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
 <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">2шатлал байхгүй</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
 <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">3шатлал байхгүй</p>
                  </div>
                  <div className="py-3">
 <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">4шатлал байхгүй</p>
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
 <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">1шатлал: даруй удаа </p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">2шатлал : нарийвчилсан зуун тохируулга</p>
                  </div>
                  <div className="py-3 border-b border-[#e9ebf1]">
 <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">3шатлал: зуун шалгалт</p>
                  </div>
                  <div className="py-3">
                    <p className="text-[15px] font-bold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d]">4шатлал : төгс эцсийн хиймэл шүд</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

 {/* Reason 3: 24 дуусгах мэс засал */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">3</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
 24 дуусгах мэс засал
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
 дотоод хурдан үйлдвэрлэл <br />
 шүд 
              </p>
            </div>

            {/* Timeline */}
            <div className="px-6 py-6 flex flex-col gap-[26px]">
              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f2f5ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-morning-surgery.png"
                    alt="өглөө мэс засал"
                    width={80}
                    height={80}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">10:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">өглөө мэс засал</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
 <span className="text-[#0b1727]">3D дижитал минут </span> <br />
                    хурдан Имплантсуулгалт
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#fff9ec] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-temporary-tooth.png"
                    alt="түршүд үйлдвэрлэл"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">14:00</p>
                  <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">түршүд үйлдвэрлэл</p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#0b1727]">
 өвчтөн төрөл даруйүйлдвэрлэл
                  </p>
                  <p className="text-[13px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#008095]">
 дотоод даруй үйлдвэрлэл 24 дуусгах
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-[70px] h-[70px] bg-[#f5f4ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/implant-dinner.png"
 alt="орой"
                    width={86}
                    height={86}
                    className="scale-110"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-xl font-bold leading-[1.5] tracking-[-0.02em] text-black">18:00</p>
 <p className="text-lg font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">орой </p>
                  <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
 шинэ шүд тухтай <br />
 орой 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 4: Нухацтай дараах арчилгаа */}
          <div className="bg-white rounded-[24px] border border-[#f3f6fb] overflow-hidden">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-[14px] items-center mb-4">
                <p className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">4</p>
                <h3 className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black text-center">
                  Нухацтай дараах арчилгаа
                </h3>
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582] text-center">
 мэс заслын дараа шууд эцсийн хиймэл шүд суулгалт,<br />
 шүд 
              </p>
            </div>

            <div className="py-6 flex flex-col gap-5 items-center">
              <div className="relative w-full h-[242px]">
                <Image
                  src="/images/implant-bacteria-therapy.png"
                  alt="амны хөндий бактерийн эмчилгээ"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#5d5f6d] text-center">
                амны хөндий бактерийн эмчилгээ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
