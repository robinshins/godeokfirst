import Image from 'next/image';

export default function TreatmentSystemSection() {
  const steps = [
    {
      title: 'Aniq tashxis',
      desc: 'Raqamli uskunalar yordamida milk yallig\'lanishi darajasi va suyak tuzilishi tahlil qilinadi.'
    },
    {
      title: 'Tish tozalash (Scaling)',
      desc: 'Ultratovushli uskunada tish yuzasidagi toshlar og\'riqsiz olib tashlanadi.'
    },
    {
      title: 'Milk tubini davolash',
      desc: 'Milk ostidagi chuqur yallig\'lanish va bakteriyalar maxsus asboblar bilan tozalanadi.'
    },
    {
      title: 'Profilaktika',
      desc: 'Doimiy parvarish rejasi tuziladi va milk kasalligi qaytalanishining oldi olinadi.'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <h2 className="text-[28px] font-bold text-[#111827] text-center">Davolash tizimi</h2>
          
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 p-6 border border-[#e9ebf1] rounded-[24px]">
                <div className="w-12 h-12 bg-[#006aff] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#374151] text-lg">{step.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-[1.5]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

