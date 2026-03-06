import Image from 'next/image';

export default function CaseStudySection() {
  const cases = [
    {
      title: 'To\'y oldidan tayyorgarlik',
      before: '/images/whitening-before-01.jpg',
      after: '/images/whitening-after-01.jpg',
      desc: 'Muhim kundan oldin 1 soat ichida tishlarini oqartirib, o\'ziga bo\'lgan ishonchi ortgan bemor.'
    },
    {
      title: 'Nikotin dog\'larini yo\'qotish',
      before: '/images/whitening-before-02.jpg',
      after: '/images/whitening-after-02.jpg',
      desc: 'Chekish natijasida hosil bo\'lgan sarg\'ish dog\'larni professional oqartirish bilan bartaraf etilgan holat.'
    }
  ];

  return (
    <div className="bg-[#fffafb] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Real natijalar</h2>
            <p className="text-[#6b7280]">Oqartirishdan keyingi o'zgarish</p>
          </div>

          <div className="flex flex-col gap-12">
            {cases.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-[#374151] px-2">{item.title}</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src={item.before} alt="Oldin" fill className="object-cover" />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Oldin</div>
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image src={item.after} alt="Keyin" fill className="object-cover" />
                    <div className="absolute top-2 left-2 bg-[#db2777]/80 text-white text-xs px-2 py-1 rounded">Keyin</div>
                  </div>
                </div>
                <p className="text-[#6b7280] leading-[1.6] px-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

