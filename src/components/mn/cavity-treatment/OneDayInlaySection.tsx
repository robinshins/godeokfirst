'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: 'Хурдан эмчилгээ',
      description: 'Нэг өдрийн дотор дуусна\nӨдөр тутмын амьдралд саад болохгүй'
    },
    {
      icon: '/icons/shield.svg',
      title: 'Нарийн протез',
      description: 'Дижитал сканнер болон\nавтомат зүсэгчээр үйлдвэрлэнэ'
    },
    {
      icon: '/icons/smile.svg',
      title: 'Шууд хэрэглээ',
      description: 'Түр шүд хэрэггүй\nШууд хоол идэж болно'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          24 цагийн дотор дуусах<br />
          Дижитал инлей систем
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        Дижитал сканнер болон эмнэлэг доторх лаборатороор<br />
        хурдан эмчилгээг хичээж байна
        </p>
      </div>

      {/* Content Cards */}
      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* 디지털 스캔 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-1.png"
              alt="Дижитал скан"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Нарийн дижитал скан
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Амны доторх сканнераар 3D скан хийж шүдний хэлбэрийг бүрэн мэдээлнэ<br />
              <br />
              Тав тухгүй хэв авах шаардлагагүй, илүү нарийн, тав тухтай эмчилгээ. Дижитал мэдээллээр шууд протез үйлдвэрлэнэ
            </p>
          </div>
        </div>

        {/* 밀링머신 제작 */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/milling-machine.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Эмнэлэг доторх зүсэгчээр үйлдвэрлэл
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Дижитал скан мэдээллээр эмнэлэг доторх зүсэгчээр өндөр чанартай керамик блокыг зүснэ<br />
              <br />
              Гадны лаборатори руу илгээх шаардлагагүй тул хурдан. 24 цагийн дотор эмчилгээ дуусна
            </p>
          </div>
        </div>

        {/* 원내기공소가 없다면? */}
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/lab-2.png"
              alt="Эмнэлэг доторх лаборатори байхгүй бол?"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Эмнэлэг доторх лаборатори байхгүй бол?
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Гадны лаборатори руу протез үйлдвэрлүүлэхээр илгээх шаардлагатай тул дор хаяж 5-7 хоног хүлээнэ<br />
              <br />
              Олон удаа ирэх шаардлагатай, түр шүд хэрэглэхэд тав тухгүй, нарийн тохируулга хийхэд хэцүү
            </p>
          </div>
        </div>

        {/* Benefits */}
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#f0f7ff] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
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
