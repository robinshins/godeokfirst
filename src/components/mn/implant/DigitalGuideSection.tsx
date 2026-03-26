'use client';

import Image from 'next/image';

export default function DigitalGuideSection() {
  const steps = [
    {
      number: 1,
      image: '/images/goduk_images/digital-guide-1.png',
      description: 'Амны хөндийг сканнердах\n3D амны сканнер системээр нарийвчилсан оношлогоо'
    },
    {
      number: 2,
      image: '/images/goduk_images/digital-guide-2.png',
      description: 'Компьютерт загварчилсан амны бүтцийг харгалзан зүсэлтгүйгээр шүд суулгах төлөвлөгөө'
    },
    {
      number: 3,
      image: '/images/goduk_images/digital-guide-3.png',
      description: 'Чиглүүлэгч төхөөрөмжийг мэс заслын хэсэгт суурилуулж 1мм-ийн алдааг багасгах'
    },
    {
      number: 4,
      image: '/images/goduk_images/4.png',
      description: 'Хамгийн бага зүсэлтээр бусад эмчилгээнээс хурдан, өвдөлт болон хавдалтыг багасгах'
    },
    {
      number: 5,
      image: '/images/goduk_images/digital-guide-5.png',
      description: 'Нөхцөл байдлын дагуу загвар мэс засал хийж алдааг багасгаж, сэтгэл ханамжийг нэмэгдүүлэх'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="text-center w-full">
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight mb-5" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            고덕퍼스트치과는 항상
            <br />
            <span className="text-[#008095] relative inline-block">
              2 удаа мэс засал хийдэг
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="font-medium leading-[1.6] text-[#666] text-[15px] tracking-[-0.3px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            Ерөнхий эмч шууд виртуал имплант мэс заслаар
            <br />
            оновчтой суулгах байрлалыг загварчлан
            <br />
            бодит мэс заслыг гүйцэтгэнэ
          </p>
          <div className="mt-5 inline-block bg-gradient-to-r from-[#008095] to-[#006d80] px-6 py-4 rounded-2xl shadow-lg shadow-[#008095]/20">
            <p className="font-bold text-white text-[15px] leading-[1.5]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Хурдан, тав тухтай мэс заслаар
              <br />
              хавдалт, өвдөлт, яс шилжүүлгийг багасгах
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4 items-center relative shrink-0 w-full">
          {steps.map((step) => (
            <div key={step.number} className="group bg-white border border-[#edf2f7] rounded-3xl overflow-hidden w-full shadow-sm hover:border-[#008095] hover:shadow-lg transition-all duration-300">
              {/* Step Image */}
              <div className="relative w-full aspect-[343/200] bg-[#f8fbfd]">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}`}
                  fill
                  className="object-contain"
                />
                {/* Number Badge */}
                <div className="absolute left-4 bottom-4">
                  <div className="bg-gradient-to-br from-[#008095] to-[#006d80] flex items-center justify-center rounded-xl w-10 h-10 shadow-lg shadow-[#008095]/30">
                    <p className="font-bold text-white text-lg" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="p-5">
                <p className="font-medium leading-[1.6] text-[15px] text-[#3e3a3a] tracking-[-0.3px] whitespace-pre-line" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
