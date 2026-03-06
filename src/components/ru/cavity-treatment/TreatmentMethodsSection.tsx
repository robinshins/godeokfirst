export default function TreatmentMethodsSection() {
  const methods = [
    {
      stage: 'Стадия 1: Пятно/Поверхностный',
      title: 'Реставрация (Композит)',
      desc: 'Минимальное вмешательство, восстановление цвета и формы за один визит.',
      icon: '✨'
    },
    {
      stage: 'Стадия 2: Средний кариес',
      title: 'Вкладка (Inlay)',
      desc: 'Когда полость слишком большая для пломбы, изготавливается точная керамическая вставка.',
      icon: '💎'
    },
    {
      stage: 'Стадия 3: Глубокий кариес',
      title: 'Коронка (Crown)',
      desc: 'Полная защита зуба после лечения каналов или при сильном разрушении.',
      icon: '👑'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.2]">
            Методы лечения<br />по стадиям кариеса
          </h2>
        </div>

        <div className="space-y-6">
          {methods.map((method, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white border border-gray-100 rounded-[32px] p-8 space-y-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="text-xs font-black text-blue-500 uppercase tracking-widest">{method.stage}</div>
                  <div className="text-3xl">{method.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

