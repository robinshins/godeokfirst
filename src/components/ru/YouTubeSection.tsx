import { Youtube, Play } from 'lucide-react';
import Image from 'next/image';

const LONG_FORM_VIDEOS = [
  {
    id: '9kP02X04THc',
    title: 'Процесс имплантации',
  },
  {
    id: 'GyzFVUfRqmk',
    title: 'Отзывы пациентов',
  },
  {
    id: '4hJI8OteG3Q',
    title: 'Объяснение лечения',
  },
];

const SHORT_FORM_VIDEOS = [
  { id: '9X1PiZ0a7pI' },
  { id: 'CKjhmiqSLhg' },
  { id: 'T1jRKj9z-Yo' },
  { id: 'Eh2hI23SNug' },
  { id: 'Gk907Ckd5EA' },
  { id: 'K7t_jon8FH8' },
  { id: 'jJER---6yfQ' },
  { id: 'qJG1fwMzoqE' },
];

export default function YouTubeSection() {
  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-bold mb-5 shadow-lg">
            <Youtube className="w-5 h-5" />
            <span>KimPlant TV</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Смотрите подробные объяснения<br />
            различных процедур
          </h2>
          <p className="text-gray-600 text-lg">
            Реальные случаи лечения и отзывы пациентов от доктора Кима
          </p>
        </div>

        {/* Main Featured Video */}
        <div className="mb-10">
          <a
            href={`https://www.youtube.com/watch?v=${LONG_FORM_VIDEOS[0].id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
              <Image
                src={`https://img.youtube.com/vi/${LONG_FORM_VIDEOS[0].id}/maxresdefault.jpg`}
                alt={LONG_FORM_VIDEOS[0].title}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Play className="w-10 h-10 text-red-600 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Long Form Videos */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {LONG_FORM_VIDEOS.slice(1).map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-lg">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Play className="w-7 h-7 text-red-600 ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Short Form Videos - Horizontal Scroll */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Shorts</h3>
            <a
              href="https://www.youtube.com/@kimplantbusan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-semibold transition-colors"
            >
              <span>Весь канал</span>
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <div className="overflow-x-auto flex gap-4 pb-4">
            {SHORT_FORM_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/shorts/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[240px] group"
              >
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-900 shadow-lg">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt="Shorts Video"
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-red-600 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
