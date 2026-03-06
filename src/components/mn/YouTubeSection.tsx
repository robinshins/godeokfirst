import Image from 'next/image';

export default function YouTubeSection() {
  const videos = [
    {
      id: 'video1',
      thumbnail: '/images/youtube-thumb-01.jpg',
      title: 'Имплант хагалгааны дараах арчилгаа',
      duration: '05:24'
    },
    {
      id: 'video2',
      thumbnail: '/images/youtube-thumb-02.jpg',
      title: 'Дижитал гайд хагалгаа гэж юу вэ?',
      duration: '04:15'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image src="/icons/youtube-red.svg" alt="YouTube" width={24} height={24} />
              <h2 className="text-2xl font-bold text-[#111827]">Мэдиш ТВ</h2>
            </div>
            <p className="text-[#6b7280]">Кёнсон Мэдиш шүдний эмнэлгийн хэрэгтэй мэдээллүүд</p>
          </div>

          {/* Videos Grid */}
          <div className="flex flex-col gap-6">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-black group cursor-pointer">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-bold text-[#374151] px-1">{video.title}</h3>
              </div>
            ))}
          </div>

          {/* More Button */}
          <button className="w-full h-14 bg-white border border-[#e5e7eb] rounded-[18px] text-[#4b5563] font-bold flex items-center justify-center gap-2">
            YouTube суваг руу очих
            <Image src="/icons/arrow-right.svg" alt="Arrow" width={20} height={20} className="opacity-40" />
          </button>
        </div>
      </div>
    </div>
  );
}

