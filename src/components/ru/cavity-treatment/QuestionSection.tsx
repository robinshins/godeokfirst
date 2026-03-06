export default function QuestionSection() {
  const questions = [
    {
      q: 'Будет ли больно во время лечения?',
      a: 'Мы используем современные анестетики и предлагаем седацию (сон), поэтому лечение проходит абсолютно безболезненно.'
    },
    {
      q: 'Сколько времени занимает процедура?',
      a: 'Простая пломба ставится за 30-40 минут. Благодаря нашей лаборатории, вкладки и коронки можно установить за один день.'
    },
    {
      q: 'Как долго прослужит пломба или коронка?',
      a: 'При правильном уходе реставрации служат от 5 до 10 лет и дольше. Мы даем гарантию на все виды работ.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight italic">FAQ</h2>
          <p className="text-gray-600 font-medium">Часто задаваемые вопросы</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="font-bold text-gray-900 mb-2 flex gap-3">
                <span className="text-blue-500 italic">Q.</span>
                <span>{item.q}</span>
              </div>
              <div className="text-sm text-gray-500 font-medium flex gap-3 leading-relaxed">
                <span className="text-gray-300 italic">A.</span>
                <span>{item.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

