import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="bg-gray-50 rounded-[48px] p-8 space-y-8">
          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/doctor_park.jpg"
              alt="Доктор"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Доктор Пак Квон Бин</h3>
              <p className="text-blue-600 font-bold italic">Главный врач Medis</p>
            </div>
            
            <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
              &quot;Мы не просто лечим кариес, мы восстанавливаем функцию и эстетику вашего зуба, используя самые современные технологии.&quot;
            </p>
            
            <div className="pt-4 border-t border-gray-200">
              <ul className="space-y-2">
                <li className="text-[11px] text-gray-400 font-bold flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  ЧЛЕН КОРЕЙСКОЙ АССОЦИАЦИИ СТОМАТОЛОГОВ
                </li>
                <li className="text-[11px] text-gray-400 font-bold flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  СПЕЦИАЛИСТ ПО ЦИФРОВОЙ РЕСТАВРАЦИИ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

