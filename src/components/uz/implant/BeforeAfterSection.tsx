import Image from 'next/image';

export default function BeforeAfterSection() {
  const cases = [
    {
      title: 'To\'liq implantatsiya',
      before: '/images/case-before-01.jpg',
      after: '/images/case-after-01.jpg',
      desc: 'Barcha tishlarini yo\'qotgan bemorga raqamli navigatsiya orqali to\'liq implant o\'rnatildi.'
    },
    {
      title: 'Old tishlar implantatsiyasi',
      before: '/images/case-before-02.jpg',
      after: '/images/case-after-02.jpg',
      desc: 'Estetika muhim bo\'lgan old tishlar implantatsiyasi va vaqtinchalik tish o\'rnatish.'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Davolash natijalari</h2>
            <p className="text-[#6b7280]">Medis stomatologiyasining real holatlari</p>
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
                    <div className="absolute top-2 left-2 bg-[#006aff]/80 text-white text-xs px-2 py-1 rounded">Keyin</div>
                  </div>
                </div>
                <p className="text-[#6b7280] leading-[1.6] px-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[12px] text-[#9ca3af] text-center">
            * Natijalar har bir bemorda har xil bo'lishi mumkin. Operatsiyadan keyin shish yoki qon ketishi kabi asoratlar bo'lishi mumkinligi sababli mutaxassis bilan maslahatlashing.
          </p>
        </div>
      </div>
    </div>
  );
}

