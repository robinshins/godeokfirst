'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'Тав тухгүй хэв авалтгүй',
      description: 'Наалдамхай хэв авах материалын оронд хурдан 3D сканнераар\nтав тухтай шүдний хэлбэрийг авна'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Нарийвчилсан хувийн сэргээн засал',
      description: 'Дижитал мэдээлэлд суурилан\nалдааг багасгасан инлей хийнэ'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Батлагдсан мэргэжлийн лаборатори',
      description: 'Ерөнхий эмч шууд сонгосон мэргэжлийн лабораторид\nөндөр чанартай керамик сэргээн засал хийнэ'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Trios5 дижитал сканнераар<br />
          илүү нарийвчлалтай
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Тав тухгүй хэв авалтгүйгээр 3D сканнераар<br />
          инлей·титэм хувийн захиалгаар хийнэ
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* TRIOS5 Digital Scan */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/트리오스5.jpg"
              alt="Trios5 амны сканнер"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Trios5 амны сканнер
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              3Shape-ийн хамгийн сүүлийн үеийн амны сканнераар наалдамхай материалгүйгээр хурдан 3D скан хийх боломжтой<br />
              <br />
              Чийгтэй амны орчинд ч алдаагүйгээр шүдний хэлбэрийг нарийвчлан авч илүү тохирсон инлей хийнэ
            </p>
          </div>
        </div>

        {/* Real Cases - Scanner */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/cases/충치치료/인레이제거후스캔채득.jpg"
              alt="Инлей авсны дараа скан хийх"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Эмчилгээний дараа шууд скан
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Цоорол арилгаж хэлбэр бүрдүүлсний дараа шууд амны скан хийнэ<br />
              <br />
              Скан мэдээллийг мэргэжлийн лабораторид дамжуулж нарийвчилсан хувийн инлей хийж дуусгана
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#e6f7f8] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
