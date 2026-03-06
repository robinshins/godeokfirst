'use client';

import Image from 'next/image';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f3f6fb] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
        {/* Logo */}
        <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
          <Image
            src="/icons/Logo_black.svg"
            alt="Кёнсон их сургуулийн Мэдиш шүдний эмнэлэг"
            width={168}
            height={24}
            className="w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
          <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-black text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Кёнсон Мэдиш шүдний эмнэлэг<br />
          онцгой байдаг шалтгаан
          </h2>
        </div>
      </div>

      {/* Reason Cards */}
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        {/* Reason 1: 치과의사들이 배우러 오는 전문 의사 */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="box-border flex flex-col gap-[14px] items-center justify-center px-4 py-6 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[#006aff] text-[32px] text-center tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                1
              </p>
              <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
                <h3 className="font-bold leading-[1.35] not-italic text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  Шүдний эмч нарыг<br />
                  зааж буй мэргэжилтэн эмч
                </h3>
              </div>
            </div>

            {/* Horizontal scrolling images */}
            <div className="overflow-x-auto px-3 pb-6 w-full">
              <div className="flex gap-3 w-max">
                {[
                  { img: '/images/seminar-2.png', caption: 'Эрдэм шинжилгээний хурлын илтгэл' },
                  { img: '/images/seminar-3.png', caption: 'Шүдний эмч нарт зориулсан имплантын лекц' },
                  { img: '/images/seminar-1.png', caption: 'Пүсан шүдний эмч нарын холбооны урилгаар тусгай лекц' },
                  { img: '/images/seminar-4.png', caption: 'Дижитал имплантын мэргэжилтэн бэлтгэх курс' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-[6px] w-[243px] flex-shrink-0">
                    <div className="relative w-full aspect-[950/1148] rounded-[20px] overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.caption || `Семинар ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-bold leading-[1.5] not-italic text-[#727582] text-[13px] tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reason 2: 3단계 임시치아 프로토콜 */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="leading-[1.35] text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  2
                </p>
                <div className="flex flex-col gap-2 items-center w-full">
                  <h3 className="leading-[1.35] text-2xl text-black tracking-[-0.48px] w-full">
                    3 шатлалт түр шүдний<br />
                    протокол
                  </h3>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#006aff]/10 rounded-full">
                    <span className="text-[13px] font-semibold text-[#006aff] tracking-[-0.26px]">
                      *Бүрэн имплантад зориулсан
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Бусад эмнэлгийн 1 шатлалт түр шүднээс өөр<br />
                3 шатлалт нарийн тохируулгын системээр төгс байдлыг хангана
              </p>
            </div>

            {/* Comparison table */}
            <div className="box-border flex gap-10 h-[263px] items-start justify-center p-6 relative shrink-0 w-full">
              {/* 일반 치과 */}
              <div className="absolute flex flex-col gap-2.5 items-start left-6 top-[17px] w-[133px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#37373e] text-[22px] tracking-[-0.44px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Ердийн эмнэлэг
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      1 шатаар дуусгана
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      2-р шат байхгүй
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      3-р шат байхгүй
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      4-р шат байхгүй
                    </p>
                  </div>
                </div>
              </div>

              {/* 고덕퍼스트치과 */}
              <div className="absolute bg-white border-2 border-[#006aff] box-border flex flex-col gap-2.5 items-center justify-center left-[151px] px-[15px] py-[13px] rounded-[11px] top-[1px] w-[182px]">
                <div className="flex items-start w-full">
                  <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[22px] text-black tracking-[-0.44px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Мэдиш эмнэлэг
                  </p>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      1-р шат: Шууд сэргээлт
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      2-р шат: Нарийн хазаалт
                    </p>
                  </div>
                  <div className="border-b border-[#e9ebf1] box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      3-р шат: Төгс хазаалт
                    </p>
                  </div>
                  <div className="box-border flex items-center justify-center px-0 py-3 relative shrink-0 w-full">
                    <p className="basis-0 grow min-h-px min-w-px font-bold leading-[1.4] not-italic text-[#5d5f6d] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      4-р шат: Эцсийн протез
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 3: 24시간 내 완성되는 수술 */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  3
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  24 цагийн дотор дуусах хагалгаа
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Дотоод лабораторид хурдан үйлдвэрлэдэг тул<br />
                шүдгүй өнгөрүүлэх өдөр нэг ч байхгүй
              </p>
            </div>

            <div className="box-border flex flex-col gap-10 items-start justify-center p-6 relative shrink-0 w-full">
              <div className="flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                {/* 10:00 오전 수술 */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f2f5ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[80px] h-[80px] -left-[5px] -top-2">
                      <Image
                        src="/images/same-day-morning.png"
                        alt="Өглөөний хагалгаа"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      10:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Өглөөний хагалгаа
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      <span className="text-[#0b1727]">Компьютер шинжилгээнд үндэслэсэн дижитал гайд хагалгаагаар</span> нарийн, хурдан имплант суулгалт
                    </p>
                  </div>
                </div>

                {/* 14:00 임시치아 제작 */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#fff9ec] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[70px] h-[70px]">
                      <Image
                        src="/images/same-day-temporary.png"
                        alt="Түр шүд хийлт"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      14:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Түр шүд хийлт
                    </p>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p className="font-semibold leading-[1.4] not-italic text-[#0b1727] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        Өвчтөнд тохируулан шууд үйлдвэрлэл
                      </p>
                      <p className="font-semibold leading-[1.4] not-italic text-[#006aff] text-[13px] tracking-[-0.26px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                        Дотоод лабораторид шууд хийж 24 цагийн дотор дуусгана
                      </p>
                    </div>
                  </div>
                </div>

                {/* 18:00 저녁 식사 */}
                <div className="flex gap-5 items-center relative shrink-0 w-full">
                  <div className="bg-[#f5f4ff] overflow-clip relative rounded-full shrink-0 size-[70px]">
                    <div className="relative w-[86px] h-[86px] -left-[7px] -top-[7px]">
                      <Image
                        src="/images/same-day-dinner.png"
                        alt="Оройн хоол"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start flex-1">
                    <p className="font-bold leading-[1.5] not-italic text-xl text-black tracking-[-0.4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      18:00
                    </p>
                    <p className="font-bold leading-[1.5] not-italic text-[#006aff] text-lg tracking-[-0.36px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Оройн хоол болон өдөр тутмын амьдрал руу буцах
                    </p>
                    <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      <span className="text-[#0b1727]">Шүдгүй өдөр байхгүй тул</span> нийгмийн амьдрал, хүмүүстэй харилцахад саад учруулахгүйгээр шууд өдөр тутмын амьдрал руу буцна
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 4: 철저한 사후관리 */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  4
                </p>
                <p className="text-2xl text-black tracking-[-0.48px] w-full">
                  Нягт дараах арчилгаа
                </p>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Суулгаад дуусах биш нарийн арчилгаагаар<br />
                10, 20 жил урт удаан хэрэглэж болно
              </p>
            </div>

            <div className="box-border flex flex-col gap-6 items-center px-6 pb-6 relative shrink-0 w-full">
              {/* 1. 평생 구강 관리 */}
              <div className="flex flex-col gap-3 w-full">
                <div className="relative h-[180px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
                  <Image
                    src="/images/beneficial-bacteria.jpg"
                    alt="Насан туршийн амны арчилгаа - Амны бактерийн эмчилгээ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Насан туршийн амны арчилгаа
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Амны бактерийн эмчилгээ
                  </p>
                </div>
              </div>

              {/* 2. 임플란트 보호 스플린트 */}
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full overflow-x-auto">
                  <div className="flex gap-3 pb-2">
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint.webp"
                        alt="Имплант хамгаалах сплинт 1"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative flex-shrink-0 h-[180px] w-[280px] rounded-xl overflow-hidden bg-black">
                      <Image
                        src="/images/splint2.tif"
                        alt="Имплант хамгаалах сплинт 2"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-center px-2">
                  <p className="font-bold leading-[1.4] text-[#0b1727] text-[17px] tracking-[-0.34px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Имплант хамгаалах сплинт
                  </p>
                  <p className="font-semibold leading-[1.4] text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Шүд хавирах, шүд зуух зэрэг эрүүний үе мөчний өвчнийг сайжруулна
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 5: 모든 난이도의 임플란트 수술 */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  5
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  Ганц имплантаас<br />
                  хүнд түвшний бүрэн имплант хүртэл
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Олон төрлийн хагалгааны туршлагад тулгуурлан<br />
                <span className="text-[#006aff] font-bold">Пүсан Намгу дижитал гайд имплант хагалгааны тоогоор 1-рт</span> албан ёсоор<br />
                хүлээн зөвшөөрөгдсөн мэргэжлийн чадвартай
              </p>
            </div>

            {/* 최다식립병원 인증 */}
            <div className="flex justify-center w-full px-6">
              <div className="relative w-full max-w-[343px] aspect-[343/200] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/most-implant-hospital.jpg"
                  alt="Дижитал гайд хагалгааны хамгийн олон суулгалт хийсэн эмнэлэг"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 오스템 인증 이미지들 */}
            <div className="w-full overflow-x-auto px-6 mt-4">
              <div className="flex gap-4 pb-2">
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem2.jpg"
                    alt="Оссүм баталгаажуулалт 2"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
                <div className="relative flex-shrink-0 w-[280px] aspect-[280/200] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/osstem1.jpg"
                    alt="Оссүм баталгаажуулалт 1"
                    fill
                    className="object-cover scale-115"
                  />
                </div>
              </div>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Ганц имплант
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      1-2 ширхэг шүдний дутагдал
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Хэсэгчилсэн имплант
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Олон шүдний дутагдал, гүүрэн протез солих
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Бүрэн имплант
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Шүдгүй, All-on-4/6 зэрэг<br />
                      хүнд түвшний бүрэн нуман имплант
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#006aff]/5 border border-[#006aff]/20 rounded-2xl p-4 w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">✨</div>
                  <p className="font-bold text-[#006aff] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    Яс шилжүүлэг, синус өргөлт зэрэг хүнд кейсүүдийг мэргэжлийн түвшинд хийнэ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason 6: 최소식립, 최소절개, 최소 뼈이식 */}
        <div className="bg-white border border-[#f3f6fb] relative rounded-[24px] shrink-0 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="box-border flex flex-col gap-4 items-center justify-center not-italic px-4 py-6 relative shrink-0 text-center w-full">
              <div className="flex flex-col font-bold gap-[14px] items-center justify-center leading-[1.35] relative shrink-0 w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                <p className="text-[#006aff] text-[32px] tracking-[-0.64px] w-full">
                  6
                </p>
                <h3 className="text-2xl text-black tracking-[-0.48px] w-full">
                  Хамгийн бага суулгалт, хамгийн бага зүсэлт,<br />
                  хамгийн бага яс шилжүүлэг
                </h3>
              </div>
              <p className="font-semibold leading-[1.4] not-italic text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                Нарийн дижитал оношилгоогоор<br />
                зөвхөн шаардлагатай хэмжээгээр хамгийн бага эмчилгээ хийнэ
              </p>
            </div>

            <div className="box-border flex flex-col gap-3 items-start px-6 pb-6 relative shrink-0 w-full">
              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Хамгийн бага суулгалт
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Дээд эрүүнд 6, доод эрүүнд 4 ширхэг л суулгаад<br />
                      бат бөх бэхлэгддэг үр ашигтай суулгалт
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Хамгийн бага зүсэлт
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Хурдан эдгэрэх хамгийн бага зүсэлттэй хагалгаа
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] border border-[#e9ebf1] rounded-2xl p-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#006aff] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[#0b1727] text-base tracking-[-0.32px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Хамгийн бага яс шилжүүлэг
                    </p>
                    <p className="font-medium text-[#727582] text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      Нарийн оношилгоогоор хамгийн бага яс шилжүүлэг хийнэ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
