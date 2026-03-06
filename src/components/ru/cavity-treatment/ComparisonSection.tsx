export default function ComparisonSection() {
  const points = [
    { title: 'Безболезненность', medis: 'Седация и современные анестетики', other: 'Только локальная анестезия' },
    { title: 'Оборудование', medis: '3D сканеры и микроскопы', other: 'Традиционные методы' },
    { title: 'Сроки', medis: 'Лечение за один день (One-Day)', other: 'Минимум 2-3 визита' },
    { title: 'Гарантия', medis: 'Долгосрочная гарантия качества', other: 'Ограниченная ответственность' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Почему Medis?
          </h2>
        </div>

        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="text-center font-black text-gray-300 uppercase tracking-[0.2em] text-[10px]">{point.title}</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-[10px] font-black text-blue-500 uppercase italic">Medis</div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{point.medis}</p>
                </div>
                <div className="space-y-2 border-l border-gray-100 pl-4">
                  <div className="text-[10px] font-black text-gray-300 uppercase italic">Другие</div>
                  <p className="text-sm font-medium text-gray-400 leading-tight">{point.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

