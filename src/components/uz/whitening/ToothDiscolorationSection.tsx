import Image from 'next/image';

export default function ToothDiscolorationSection() {
  const causes = [
    {
      title: 'Kofe va Choy',
      desc: 'Doimiy kofe va choy iste\'mol qilish tish emalida dog\'lar hosil qiladi.',
      image: '/images/coffee.jpg'
    },
    {
      title: 'Chekish',
      desc: 'Tamaki tarkibidagi nikotin tishlarni juda tez sarg\'aytiradi.',
      image: '/images/smoking.jpg'
    },
    {
      title: 'Yosh o\'tishi',
      desc: 'Yosh o\'tgan sari tish emali yupqalashib, ichki sarg\'ish rang ko\'zga tashlanadi.',
      image: '/images/aging.jpg'
    }
  ];

  return (
    <div className="bg-[#fffafb] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Tish sarg'ayishi sabablari</h2>
            <p className="text-[#6b7280]">Tishingiz nima uchun rangini yo'qotgan?</p>
          </div>

          <div className="flex flex-col gap-6">
            {causes.map((cause, index) => (
              <div key={index} className="flex gap-6 items-center p-6 bg-white rounded-[24px] shadow-sm">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0">
                  <Image src={cause.image} alt={cause.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#374151]">{cause.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-[1.5]">{cause.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

