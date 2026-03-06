import Image from 'next/image';

export default function BeforeAfterSection() {
  const cases = [
    {
      title: 'Chuqur karies va Inley',
      before: '/images/cavity-before-01.jpg',
      after: '/images/cavity-after-01.jpg',
      desc: 'Chuqur karies tozalanib, tish rangi bilan bir xil protez bilan to\'ldirilgan holat.'
    },
    {
      title: 'Kanal davolash va Kroun',
      before: '/images/cavity-before-02.jpg',
      after: '/images/cavity-after-02.jpg',
      desc: 'Yallig\'langan kanal tozalanib, tishni himoya qilish uchun kroun o\'rnatilgan holat.'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Davolash natijalari</h2>
            <p className="text-[#6b7280]">Karies davolashning real holatlari</p>
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
                    <div className="absolute top-2 left-2 bg-[#f97316]/80 text-white text-xs px-2 py-1 rounded">Keyin</div>
                  </div>
                </div>
                <p className="text-[#6b7280] leading-[1.6] px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

