'use client';

import FadeInSection from '@/components/common/FadeInSection';

export default function VideoSection() {
  const videos = [
    {
      id: 'P54GsqWvnkw',
      title: 'протез всё',
 description:'протез о все решение предоставляем',
    },
    {
      id: 'zmvu-xPe0ik',
 title:'полныйИмплант летобъяснение',
 description:'200 только специалист"стоимость"год',
 badge:'200 только год',
    },
    {
      id: 'r7aeNpeP5vY',
      title: 'Что такое полная имплантация??',
 description:'Что такое полная имплантация?? протез хороший? примерно',
    },
    {
      id: 'rRVF8hLE82E',
 title:'полныйИмплант год??',
 description:'прикус так важно!!',
    },
  ];

  return (
    <div className="w-full flex justify-center bg-[#f8fbfd] overflow-hidden -mt-1">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <FadeInSection className="flex flex-col gap-3 text-center">
            <p className="text-[15px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              VIDEO
            </p>
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008fd2]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Протезы · Полная имплантация<br />
              Смотрите видео
            </h2>
            <p className="text-base font-medium leading-[1.4] tracking-[-0.02em] text-[#3e3a3a]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Godeok First Dental Главный врач<br />
              лично объясним
            </p>
          </FadeInSection>

          {/* Video Placeholders */}
          <div className="flex flex-col gap-6">
            {videos.map((video, index) => (
              <FadeInSection key={index} delay={100 + index * 150} className="flex flex-col gap-3">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-gradient-to-br from-[#008095]/10 to-[#008095]/20 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#008095]/20 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      Видео готовится
                    </p>
                    <p className="text-[13px] text-[#008095]/70" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      Godeok First Dental Видео скоро будет загружено
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#3e3a3a]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {video.title}
                    </h3>
                    {video.badge && (
                      <span className="px-2 py-0.5 bg-[#008095] text-white text-[11px] font-bold rounded-full whitespace-nowrap">
                        {video.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#3e3a3a]/70" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                    {video.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
