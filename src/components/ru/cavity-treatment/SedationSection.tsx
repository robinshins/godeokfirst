'use client';

import Image from 'next/image';

export default function SedationSection() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="space-y-4 text-center">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
              Седация в Medis
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-[1.2]">
              Страх перед стоматологом?<br />
              <span className="text-blue-600">Больше не проблема</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Проснитесь с готовой улыбкой. Комфортное лечение во сне.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/images/treatment_sedation.jpg"
              alt="Лечение под седацией"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl">💤</div>
                <div>
                  <div className="font-bold text-lg">Безопасная седация</div>
                  <div className="text-sm opacity-80 font-medium italic">Контроль анестезиолога 1:1</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-2">
              <div className="text-2xl">😴</div>
              <div className="font-bold text-gray-900">Глубокий сон</div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">Никакой боли и страха во время процедуры.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-2">
              <div className="text-2xl">⏱️</div>
              <div className="font-bold text-gray-900">Экономия времени</div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">Возможность вылечить все зубы за один визит.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

