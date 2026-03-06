'use client';

import Image from 'next/image';

export default function InHouseLabSection() {
  const benefits = [
    {
      icon: '/icons/shield.svg',
      title: 'Хамгийн бат бөх түр шүд',
      description: 'Онцгой түншлэлийн гэрээтэй тусгай материалаар\nхагалгааны дараа шууд хоол идэж болно'
    },
    {
      icon: '/icons/tooth-xray-spot.svg',
      title: 'Эвдрэхэд шууд солино',
      description: 'Хэзээ ч гарч болзошгүй эвдрэлд санаа зовохгүй\nДотоод лабораторид шууд солино'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Шүдгүй өдөр тэг',
      description: 'Хагалгааны дараа эцсийн протез зүүх хүртэл шүдгүй өнгөрүүлэх өдөр нэг ч байхгүй'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          Шууд протезийн<br />
          имплант систем
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Дижитал процесс болон дижитал дотоод лабораториор <br />
        хурдан протез үйлдвэрлэлийг зорьдог<br />
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Fast and Precise Prosthetics */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Хурдан, нарийн протез үйлдвэрлэл"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Хурдан, нарийн протез үйлдвэрлэл
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Ерөнхий эмч арвин туршлагадаа тулгуурлан тав тухтай эмчилгээ үзүүлж, тээрэмдэх машин ашиглан протезийг өөрөө хийдэг<br />
              <br />
              Хийсний дараа тав тухгүй эсвэл гаж нөлөө байгаа эсэхийг дахин шалгаж, эмчилгээний дараа ч үргэлжлүүлэн арчилж, өвчтөнүүдийн сэтгэл ханамжийг дээшлүүлэхийн төлөө хичээдэг
            </p>
          </div>
        </div>

        {/* Without In-House Lab */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="Дотоод лаборатори байхгүй бол?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Дотоод лаборатори байхгүй бол?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Дотоод лаборатори байхгүй бол гадаад лабораторид протез захиалах тул хугацаа удаана<br />
              <br />
              Үйлдвэрлэл, засварын үйл явцыг дахин гаднаас захиалах төвөгтэй байдал болон нарийн засвар хийхэд хүндрэлтэй байдаг
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
