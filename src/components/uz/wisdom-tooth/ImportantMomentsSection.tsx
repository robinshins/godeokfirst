import Image from 'next/image';

export default function ImportantMomentsSection() {
  const moments = [
    {
      title: 'Og\'riq bo\'lganda',
      desc: 'Donolik tishi atrofida milk shishib, kuchli og\'riq berganda.',
      image: '/images/pain.jpg'
    },
    {
      title: 'Tishlar siqilganda',
      desc: 'Donolik tishi yonidagi tishlarni surib, tish qatori buzilganda.',
      image: '/images/crowding.jpg'
    },
    {
      title: 'Ovqat tiqilganda',
      desc: 'Ovqat qoldiqlari tiqilib qolib, tozalash qiyin bo\'lganda va karies paydo bo\'lganda.',
      image: '/images/food.jpg'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Qachon oldirish kerak?</h2>
            <p className="text-[#6b7280]">Quyidagi holatlar kuzatilsa, albatta oldiring.</p>
          </div>

          <div className="flex flex-col gap-6">
            {moments.map((moment, index) => (
              <div key={index} className="flex gap-6 items-center p-6 bg-[#f8f9fa] rounded-[24px]">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0">
                  <Image src={moment.image} alt={moment.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#374151]">{moment.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-[1.5]">{moment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

