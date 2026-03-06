export default function WhiteningVideoSection() {
  return (
    <div className="w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 items-center w-full">
          {/* Title */}
          <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.02em] text-black text-center w-full">
            牙科美白的所有知识<br />
            这个视频全告诉您
          </h2>

          {/* YouTube Video */}
          <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4hJI8OteG3Q"
              title="牙科美白视频"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
