export default function YouTubeSection() {
  return (
    <div id="youtube" className="bg-white">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-[15px] font-['Pretendard_JP'] font-bold text-[#008095] uppercase tracking-[2px] leading-[24px]">
            임플란트 Q&amp;A
          </p>
          <h2 className="text-[26px] font-['Pretendard_JP'] font-bold text-[#21314E] leading-[1.4] tracking-[-0.5px] text-center">
            환자들이 가장 많이 묻는
            <br />
            질문에 대해서 전부 알려드릴게요
          </h2>
        </div>

        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-[20px] shadow-lg aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/XKH4Rw4OMvY"
            title="임플란트 Q&A｜환자들이 가장 많이 묻는 질문에 대해서 전부 알려드릴게요."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
