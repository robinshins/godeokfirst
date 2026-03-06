export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Имплантын тухай бүх зүйлийг<br />
              энэ видеогоос мэдэж аваарай
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              Хиймэл шүд, имплант, бүрэн имплант, бүх шүдний имплант,<br />
              дижитал имплант хүртэл бүх эмчилгээний аргыг тайлбарлана
            </p>
          </div>

          {/* YouTube Video */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9kP02X04THc"
                title="Имплантын бүрэн гарын авлага видео"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Real Patient Results Video Section */}
          <div className="flex flex-col gap-6 pt-10">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
                Бодит өвчтөнүүд<br />
                баталгаажуулж буй үр дүн
              </h2>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                Яагаад Мэдиш шүдний эмнэлгийг сонгож,<br />
                хүмүүстээ итгэлтэй санал болгодгийг шууд харна уу
              </p>
            </div>

            {/* Patient Results YouTube Video */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GyzFVUfRqmk"
                    title="Бодит өвчтөний эмчилгээний үр дүнгийн видео"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/O4pDF0w17iE"
                    title="Бодит өвчтөний сэтгэгдлийн видео 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/wZYlF4IJYd4"
                    title="Бодит өвчтөний сэтгэгдлийн видео 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
