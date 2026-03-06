import Image from 'next/image';

export default function WhyBestNewSection() {
  const points = [
    {
      title: 'Raqamli tashxis',
      description: '3D CT va 3 o\'lchamli skaner yordamida og\'iz bo\'shlig\'idagi barcha tishlarni aniq tashxislaymiz.',
      icon: '/icons/digital-scan.svg'
    },
    {
      title: 'Sizga moslangan',
      description: 'Har bir bemorning milk shakliga mos keladigan protez (custom abutment) qo\'llanadi, bu esa ovqat kirishining oldini oladi.',
      icon: '/icons/custom-fit.svg'
    },
    {
      title: 'Ichki laboratoriya',
      description: 'Klinika ichidagi laboratoriyada protezlar darhol tayyorlanadi, bu vaqtni tejaydi va aniqlikni oshiradi.',
      icon: '/icons/lab.svg'
    },
    {
      title: 'Umrbod kafolat',
      description: 'Operatsiyadan keyingi doimiy tekshiruv va parvarish tizimi bilan implantingizni umrbod himoya qilamiz.',
      icon: '/icons/warranty.svg'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Nima uchun Kyungsung Medis?</h2>
            <p className="text-[#6b7280]">Boshqalardan ajratib turuvchi 4 ta afzallik</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex gap-6 items-start p-6 rounded-[24px] border border-[#f3f4f6] hover:bg-[#f8f9fa] transition-colors">
                <div className="w-16 h-16 bg-[#006aff]/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Image src={point.icon} alt={point.title} width={32} height={32} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#374151]">{point.title}</h3>
                  <p className="text-[#6b7280] leading-[1.6]">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

