import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Имплант',
      subtitle: 'Дижитал чиглүүлэгчтэй имплант мэс засал',
      description: 'Компьютерийн шинжилгээгээр өндөр түвшний дижитал чиглүүлэгчтэй мэс заслаар аюулгүй, тав тухтай, эцэс хүртэл хариуцлага хүлээнэ.',
      features: [
        'Өндөр түвшний дижитал чиглүүлэгчтэй мэс засал',
        'Ухаан алдуулах аргаар унтуулгын мэс засал',
        'Мэс заслын дараа шууд түр шүд суулгах',
        'Ерөнхий эмч шууд мэс засал хийнэ',
        'Дижитал тоног төхөөрөмж бүрэн хангагдсан'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Хиймэл шүд / Бүх имплант',
      subtitle: 'Хувийн нарийвчилсан сэргээн засал',
      description: 'Тав тухтай, байгалийн хиймэл шүднээс\nбүх имплант хүртэл хувийн загвар',
      features: [
        'Нарийвчилсан хувийн хиймэл шүд хийх',
        'Бүх имплант (All-on-4/6)',
        'Имплант хиймэл шүд (овердентур)',
        'Даатгалд хамрагдах хиймэл шүд боломжтой'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Цоорол эмчилгээ & Мэдрэлийн эмчилгээ',
      subtitle: 'Байгалийн шүд хадгалах мэргэжилтэн',
      description: 'Авахын оронд аврах эмчилгээ\nНэгдсэн шүдний мэргэжилтний нарийвчилсан эмчилгээ',
      features: [
        'Нарийвчилсан цоорол оношлогоо',
        'Өвдөлт намдаах мэдрэлийн эмчилгээ',
        'Байгалийн шүд хадгалах',
        'Даатгалд хамрагдана'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Сойз шүд авах',
      subtitle: 'Аюулгүй, шуурхай авалт',
      description: '3D CT нарийвчилсан оношлогоогоор\nмэдрэл гэмтээхгүйгээр аюулгүй авалт',
      features: [
        'Өвдөлт намдаах мэдээгүйжүүлэг хийх',
        'Хурдан сэргэх',
        'Нягт нямбай дараа арчилгаа'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Буйлны эмчилгээ & Скейлинг',
      subtitle: 'Бие бүхлийн эрүүл мэндийн эхлэл',
      description: 'Насанд хүрэгчдийн 80% өвчилдөг буйлны өвчин\nТогтмол арчилгаагаар насан туршдаа эрүүл шүд',
      features: [
        'Тусгай тоног төхөөрөмжийн эмчилгээ',
        'Периоклин арчилгаа',
        'Өвдөлт намдаах эмчилгээ',
        'Жилд 1 удаа даатгалд хамрагдана'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Эрүү үений эмчилгээ',
      subtitle: 'Эрүү үений өвдөлт · Амаа нээх бэрхшээл',
      description: 'Эрүүнээс чимээ гарч байна уу?\nНарийвчилсан оношлогооны дараа хувийн эмчилгээ хийнэ',
      features: [
        'Эрүү үений нарийвчилсан оношлогоо',
        'Зуурлын тогтворжуулагч (сплинт)',
        'Физик эмчилгээ · Эмийн эмчилгээ',
        'Нэгдсэн шүдний мэргэжилтэн шууд эмчилнэ'
      ],
      link: '/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Шүд цайруулга',
      subtitle: 'Дээд зэргийн тоног төхөөрөмжтэй',
      description: 'Аюулгүй, үр дүнтэй цайруулга\nСкейлингтэй хамт хөнгөлөлттэй',
      features: [
        '1 удаагийн эмчилгээгээр шууд үр дүн',
        'Шүд гэмтээхгүй',
        'Боломжийн үнэ',
        'Osstem Beautis систем'
      ],
      link: '/whitening'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="고덕퍼스트치과"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Мэргэжлийн эмчилгээний чиглэл
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
                  {/* Icon Box - 80x80 */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="h-20 w-auto object-contain -mt-[18px]"
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
                    </div>
                  </div>
                </div>

                {/* Arrow Button - 64x64 - Absolute positioned */}
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
                      height={84}
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
                      height={84}
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

              {/* Bottom padding for card */}
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
