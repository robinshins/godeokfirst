'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 тусгай төхөөрөмж',
      description: 'Японы NSK компанийн хамгийн сүүлийн үеийн хэт авианы скейлерээр буйлны гүн дэх нянг нарийн арилгана',
      features: [
        { label: 'iPiezo хөдөлгүүр', text: 'Автомат давтамж тохируулалтаар тогтвортой гаралт' },
        { label: 'Өндөр нарийвчлалтай үзүүр', text: 'Буйлны хөндийн гүнд хүрэх боломжтой' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Периоклин антибиотик тосон эмчилгээ',
      description: 'Миноциклин найрлагатай орон нутгийн антибиотикийг буйлны гүнд шууд тарьж эмчилнэ',
      features: [
        { label: 'Клиник батлагдсан', text: 'Дотоод гадаадын олон судалгааны багийн туршилтаар үр нөлөө батлагдсан' },
        { label: '7 хоног үргэлжилнэ', text: 'Нэг удаагийн тариалалтаар эмийн үйлчлэл 7 хоног үргэлжилнэ' },
        { label: 'Нян багасна', text: 'Red Complex нян 87.5% → 12.5% болж буурна' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4 шатлалт өвдөлт намдаах систем',
      description: [
        '"Шүдний эмчилгээ ийм тав тухтай байж болдог юм байна"',
        'Олон өвчтөнүүд гайхдаг шаталсан өвдөлт хаах систем'
      ],
      features: [
        { label: 'Зайлах мэдээгүйжүүлэлт', text: 'Амыг бүхэлд нь мэдээгүйжүүлэгч шингэнээр зайлж 1-р мэдрэмжийг бууруулна' },
        { label: 'Түрхэх мэдээгүйжүүлэлт', text: 'Тарилгын хэсэгт мэдээгүйжүүлэгч тос түрхэж 2-р хаалт' },
        { label: 'Өвдөлт намдаах цахилгаан мэдээгүйжүүлэгч', text: 'Компьютерийн удирдлагаар тогтмол хурдаар өвдөлтгүй тарина' },
        { label: 'Мэдрэлийн сувгийн мэдээгүйжүүлэгч', text: 'Гүн хэсгийг бүрэн өвдөлт хаалт' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">Кёнсон Мэдишийн</p>
            <p>буйлны эмчилгээний систем</p>
          </div>
        </div>

        {/* System Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {systems.map((system, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden rounded-[24px] w-full">
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start p-6 w-full">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-center text-white tracking-[-0.48px] w-full">
                  {system.title}
                </p>

                {Array.isArray(system.description) ? (
                  <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    <p className="mb-0">{system.description[0]}</p>
                    <p>{system.description[1]}</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    {system.description}
                  </p>
                )}

                <div className="flex flex-col gap-2.5 items-start w-full">
                  {system.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="font-['Pretendard'] text-white text-sm leading-[23px] tracking-[-0.56px] w-full">
                      <span className="font-bold">{feature.label}</span>
                      <span> : {feature.text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
