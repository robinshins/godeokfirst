'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
 title:'NSK varios 970',
 description:'NSK буйл бактери нарийвчилсан арилгах',
      features: [
 { label:'iPiezo', text:''},
 { label:'нарийвчилсан', text:'буйлны боломжтой'}
      ]
    },
    {
      image: '/images/perioclean2.jpg',
 title:'эмчилгээ',
 description:'минут буйл тарилга эмчилгээ',
      features: [
 { label:'', text:'баталгаажуулалт'},
 { label:'', text:'тарилга хадгалах'},
 { label:'бактери', text:'Red Complex бактери 87.5% → 12.5%'}
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4шатлал өвдөлт намдаах систем',
      description: [
'"шүдний эмнэлэг эмчилгээ"',
'олон өвчтөнминут шатлал өвдөлт зөрүү систем'
      ],
      features: [
 { label:'зайлах мэдээ алдуулалт', text:'бүрэн мэдээ алдуулалт зайлах 1зөрүү'},
 { label:'түрхэлт мэдээ алдуулалт', text:'хэсэг мэдээ алдуулалт түрхэлт 2зөрүү зөрүү'},
 { label:'өвдөлт намдаах мэдээ алдуулалт', text:'хурд өвдөлт намдаах тарилга'},
 { label:'мэдрэл мэдээ алдуулалт', text:'хэсэг төгс өвдөлт зөрүү'}
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">Godeok First Dental</p>
            <p>буйл эмчилгээ систем</p>
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
              <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start p-6 w-full">
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
