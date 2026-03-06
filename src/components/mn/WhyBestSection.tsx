import Image from 'next/image';

export default function WhyBestSection() {
  const reasons = [
    {
      number: '01',
      title: '10 жилийн турш 0 удаагийн давтан хагалгаа',
      description: 'Бид насан туршдаа ашиглах шүдийг нэг удаагийн хагалгаагаар төгс шийдэхийг зорьдог.',
      image: '/images/best-01.jpg'
    },
    {
      number: '02',
      title: 'Пусан Нам-гу дүүрэгт имплантын тоогоор 1-рт',
      description: 'Компьютер шинжилгээнд суурилсан дижитал гайд хагалгааны арвин туршлагатай.',
      image: '/images/best-02.jpg'
    },
    {
      number: '03',
      title: 'Хамгийн сүүлийн үеийн дижитал тоног төхөөрөмж',
      description: '3D CT, дижитал сканнер зэрэг хамгийн сүүлийн үеийн тоног төхөөрөмжөөр нарийн оношилгоо хийнэ.',
      image: '/images/best-03.jpg'
    },
    {
      number: '04',
      title: 'Ухамсрын тайвшруулах нойрсуулах эмчилгээ',
      description: 'Шүдний эмнэлгээс айдаг өвчтөнүүдэд зориулсан өвдөлтгүй, тав тухтай нойрсуулах эмчилгээ.',
      image: '/images/best-04.jpg'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-[32px] font-bold text-[#111827] leading-[1.3] tracking-[-0.64px]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Яагаад Кёнсон Мэдиш гэж?
            </h2>
            <p className="text-base text-[#4b5563] leading-[1.6] tracking-[-0.32px]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Зөвхөн Кёнсон Мэдиш шүдний эмнэлэгт<br />
              мэдэрч болох онцгой үйлчилгээ
            </p>
          </div>

          {/* Reasons List */}
          <div className="flex flex-col gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col">
                <div className="relative w-full aspect-video">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#006aff] text-white font-bold px-3 py-1 rounded-lg">
                    {reason.number}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#111827]">{reason.title}</h3>
                  <p className="text-[#6b7280] leading-[1.5] tracking-[-0.3px]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

