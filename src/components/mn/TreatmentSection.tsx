import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Бүрэн имплант ба имплант',
      subtitle: 'Пусан Нам-гу дүүрэгт хамгийн их имплант суурилуулсан',
      description: 'Компьютер шинжилгээгээр нарийн төвөгтэй дижитал гайд хагалгааг 10 жилийн хариуцлагатайгаар гүйцэтгэнэ.',
      features: [
        'Нарийн төвөгтэй дижитал гайд хагалгаа',
        'Ухамсрын тайвшруулах нойрсуулах хагалгаа',
        'Хагалгааны дараа шууд түр шүд суурилуулах',
        'Ерөнхий эмч биечлэн хагалгаа хийнэ',
        'Дотоодын хамгийн том дижитал тоног төхөөрөмжтэй'
      ],
      link: '/mn/implant'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Шүд цайруулах ба Ламинат',
      subtitle: 'Хамгийн дээд зэрэглэлийн тоног төхөөрөмжтэй',
      description: 'Аюулгүй бөгөөд үр дүнтэй шүд цайруулах үйлчилгээ\nШүдний чулуу цэвэрлэгээтэй хамт хийвэл 50% хямдарна.',
      features: [
        'Нэг удаагийн эмчилгээгээр шууд үр дүн',
        'Шүдэнд гэмтэл багатай',
        'Боломжийн үнэ',
        'Мэргэжлийн цайруулалт ба Ламинат боломжтой'
      ],
      link: '/mn/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Агшин зуурын шүд авалт',
      subtitle: 'Аюулгүй бөгөөд хурдан шүд авалт',
      description: '3D CT-ээр нарийн оношилгоо хийнэ\nМэдрэлийн судсыг гэмтээхгүйгээр аюулгүй авна.',
      features: [
        'Өвдөлт багатай мэдээ алдуулалт',
        'Хурдан эдгэрэлт',
        'Дараах нарийн хяналт'
      ],
      link: '/mn/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Цоорол ба Сувгийн эмчилгээ',
      subtitle: 'Төрөлх шүдийг хадгалах мэргэжилтэн',
      description: 'Шүдийг авахаас илүү хадгалах эмчилгээ\nМэргэжлийн эмчийн нарийн эмчилгээ',
      features: [
        'Микроскопоор нарийн оношилгоо',
        'Q-ray ашиглан цоорлыг илрүүлэх',
        'Өвдөлт багатай сувгийн эмчилгээ',
        'Даатгалд хамрагдана'
      ],
      link: '/mn/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Буйлны эмчилгээ ба Чулуу цэвэрлэгээ',
      subtitle: 'Биеийн эрүүл мэндийн эхлэл',
      description: 'Насанд хүрэгчдийн 80% нь буйлны өвчтэй байдаг\nНасан туршдаа эрүүл шүдтэй байх арчилгаа',
      features: [
        'NSK varios 970 тусгай төхөөрөмж',
        'Perioclean арчилгаа',
        'Өвдөлт багатай эмчилгээ',
        'Жилд 1 удаа даатгалд хамрагдана'
      ],
      link: '/mn/gum-care'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-8 relative shrink-0 w-40">
            <Image
              src="/icons/Logo_black.svg"
              alt="Kyungsung Medis Dental Clinic"
              width={160}
              height={32}
              className="w-full h-full"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
            Мэргэжлийн эмчилгээ
          </h2>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col -mx-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`px-4 ${
                index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'
              }`}
            >
              {/* Card Header - Icon + Title */}
              <div className="relative mb-12 pt-10">
                <div className="flex flex-col gap-4">
                  {/* Icon Box */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[33px] font-bold text-[#292a2f] leading-[1.35] tracking-[-0.72px]">
                      {treatment.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[17px] font-bold text-[#727582] leading-[1.5] tracking-[-0.36px]">
                        {treatment.subtitle}
                      </p>
                      {index === 0 && (
                        <p className="text-[13px] text-[#9a9ca8] leading-[1.5] tracking-[-0.28px]">
                          *Компьютер шинжилгээнд суурилсан дижитал гайд хагалгаанд үндэслэв
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Button */}
                {treatment.link ? (
                  <Link
                    href={treatment.link}
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Дэлгэрэнгүй"
                      width={32}
                      height={32}
                    />
                  </Link>
                ) : (
                  <button
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Дэлгэрэнгүй"
                      width={32}
                      height={32}
                    />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-5">
                {/* Description */}
                <p className="text-[20px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line tracking-[-0.48px] w-[343px]">
                  {treatment.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col">
                  {treatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`py-4 ${
                        idx !== treatment.features.length - 1
                          ? 'border-b border-[#e9ebf1]'
                          : ''
                      }`}
                    >
                      <p className="text-[16px] font-bold text-[#5d5f6d] leading-[1.5] tracking-[-0.36px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom padding */}
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

