'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-20 pb-24 overflow-hidden">
      <div className="max-w-[430px] mx-auto px-4 relative">
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100">
              <span className="text-sm font-black uppercase tracking-widest italic">Pain-Free Medis</span>
            </div>
            
            <h1 className="text-[44px] font-bold text-gray-900 leading-[1.1] tracking-tighter">
              Безболезненное<br />
              <span className="text-blue-600">лечение кариеса</span>
            </h1>
            
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Честное лечение без лишних процедур. Мы сохраняем ваши зубы здоровыми и красивыми.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden">
            <Image
              src="/images/cavity_hero.jpg"
              alt="Лечение кариеса"
              fill
              className="object-cover"
            />
          </div>

          <Link href="/ru/consultation" className="w-full">
            <button className="w-full py-5 bg-[#006aff] hover:bg-[#0050c0] text-white text-xl font-bold rounded-[24px] transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]">
              Запись на ИИ-консультацию
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

