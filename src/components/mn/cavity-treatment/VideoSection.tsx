export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Цоорлын эмчилгээний тухай<br />
              бүгдийг энэ видеонд
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              Доктор Пэ Ин Хе, шүд хадгалах эмчилгээний мэргэжилтэн<br />
              танд биечлэн тайлбарлана
            </p>
          </div>

          {/* YouTube Video */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pSSexzE2wXY"
                title="Цоорлын эмчилгээний бүрэн гарын авлага - Доктор Пэ Ин Хе"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
