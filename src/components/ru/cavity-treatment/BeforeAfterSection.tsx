import Image from 'next/image';

export default function BeforeAfterSection() {
  const cases = [
    {
      title: 'Реставрация передних зубов',
      desc: 'Восстановление формы и цвета с помощью композитных материалов.',
      image: '/images/cavity_ba1.jpg'
    },
    {
      title: 'Керамическая вкладка',
      desc: 'Прочное и незаметное решение для жевательных зубов.',
      image: '/images/cavity_ba2.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Естественный результат
          </h2>
          <p className="text-gray-600 font-medium italic">Незаметное лечение — наша гордость</p>
        </div>

        <div className="space-y-12">
          {cases.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

