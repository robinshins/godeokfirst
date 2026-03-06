import Image from 'next/image';

export default function RealPatientResultsSection() {
  const cases = [
    {
      age: '60 yoshli erkak',
      title: 'To\'liq implantatsiya',
      description: 'Tabiiy tishlari deyarli bo\'lmagan bemorga raqamli navigatsiya orqali 12 ta implant o\'rnatilib, bir kunda vaqtinchalik tish berilgan holat.',
      image: '/images/real-case-01.jpg'
    },
    {
      age: '50 yoshli ayol',
      title: 'Jag\' tishlari implantatsiyasi',
      description: 'Uzoq vaqt tishsiz yurish natijasida jag\' suyagi kamaygan bemorga suyak o\'stirish operatsiyasi bilan implant muvaffaqiyatli o\'rnatilgan holat.',
      image: '/images/real-case-02.jpg'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Real davolash hikoyalari</h2>
            <p className="text-[#6b7280]">Bemurlarimizning mamnuniyatli natijalari</p>
          </div>

          <div className="flex flex-col gap-8">
            {cases.map((item, index) => (
              <div key={index} className="bg-[#f8f9fa] rounded-[32px] overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#006aff] font-bold text-sm">{item.age}</span>
                    <h3 className="text-2xl font-bold text-[#374151]">{item.title}</h3>
                  </div>
                  <p className="text-[#6b7280] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

