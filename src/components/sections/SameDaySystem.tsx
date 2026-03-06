import Image from 'next/image';

export default function SameDaySystem() {
  const timelineEvents = [
    {
      time: '10:00',
      title: '오전 수술',
      description: '3D 디지털 분석을 통한 정확하고 빠른 임플란트 식립',
      icon: '🩺',
    },
    {
      time: '14:00',
      title: '임시치아 제작',
      description: '원내 기공소에서 환자 맞춤형으로 즉시 제작',
      icon: '🛠️',
    },
    {
      time: '18:00',
      title: '저녁 식사',
      description: '새로운 치아로 편안하게 즐기는 저녁 시간',
      icon: '🍽️',
    },
  ];

  const keyFeatures = [
    {
      title: '최고 강도 임시치아',
      description: '독점 파트너십을 맺은 Grapy社의 특수 소재로, 수술 직후부터 일반 식사가 가능합니다.',
      icon: '💪',
    },
    {
      title: '파손 시 즉시 교체',
      description: '혹시라도 발생할 수 있는 파손에도 걱정 없습니다. 원내 기공소에서 즉시 교체해드립니다.',
      icon: '🔄',
    },
    {
      title: '치아 없는 날 제로',
      description: '수술 직후부터 최종 보철물 장착까지, 치아 없이 생활하는 날은 단 하루도 없습니다.',
      icon: '🗓️',
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
            기다림의 고통,<br className="sm:hidden" /> 고덕퍼스트에는 없습니다
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            수술 직후, 모든 과정이 완성됩니다.<br className="sm:hidden" />
            치아 없는 설움을 단 하루도 겪지 않도록, 디지털 시스템이 즉시 해결합니다.
          </p>
        </div>

        {/* Timeline - Mobile vertical, Desktop horizontal */}
        <div className="mb-16 sm:mb-20">
          {/* Mobile Timeline */}
          <div className="sm:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl shadow-lg z-10">
                        {event.icon}
                      </div>
                      {index < timelineEvents.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-500"></div>
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="font-bold text-slate-900 text-lg">{event.time}</p>
                      <p className="font-semibold text-blue-700">{event.title}</p>
                      <p className="text-sm text-slate-600 mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden sm:block relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-blue-100 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded-full w-full"></div>
            
            <div className="flex justify-between items-start">
              {timelineEvents.map((event, index) => (
                <div key={index} className="text-center w-1/3">
                  <div className="w-20 h-20 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-3xl shadow-lg z-10 mx-auto relative">
                    {event.icon}
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-slate-900 text-lg">{event.time}</p>
                    <p className="font-semibold text-blue-700">{event.title}</p>
                    <p className="text-sm text-slate-600 mt-1 px-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key features */}
        <div className="mb-16">
            <h3 className="text-center text-2xl font-bold text-slate-900 mb-8">원내 기공소가 있어 가능한 일들</h3>
            
            {/* Lab Photos */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image 
                        src="/images/in-house-lab1.jpg" 
                        alt="고덕퍼스트치과 원내 기공소 시설 1"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image 
                        src="/images/in-house-lab2.jpg" 
                        alt="고덕퍼스트치과 원내 기공소 시설 2"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {keyFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="text-4xl mb-3">{feature.icon}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl">
          <p className="text-2xl font-bold text-white">
            &quot;다른 치과가 <span className="text-cyan-300">따라올 수 없는</span> 속도의 차이&quot;
          </p>
          <p className="text-md text-slate-300 mt-2">
            오직 고덕퍼스트치과에서만 경험할 수 있는 완벽한 즉시 시스템입니다.
          </p>
        </div>
      </div>
    </section>
  );
}