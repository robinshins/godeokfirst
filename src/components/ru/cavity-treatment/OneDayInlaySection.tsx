import Image from 'next/image';

export default function OneDayInlaySection() {
  return (
    <section className="py-24 bg-[#0b1727] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      
      <div className="max-w-[430px] mx-auto px-4 relative">
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <div className="inline-block px-4 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              Digital Dentistry
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Вкладки за 1 день<br />
              <span className="text-blue-400">One-Day Inlay</span>
            </h2>
            <p className="text-gray-400 font-medium">
              Благодаря CAD/CAM и 3D-печати в собственной лаборатории
            </p>
          </div>

          <div className="relative aspect-square rounded-[48px] overflow-hidden">
            <Image
              src="/images/digital_lab.jpg"
              alt="Цифровая лаборатория"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1727] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase">Сканирование 3D</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75" />
                <span className="text-sm font-bold tracking-widest uppercase">Цифровой дизайн</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150" />
                <span className="text-sm font-bold tracking-widest uppercase">Фрезерование на месте</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1 tracking-tighter">01</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Дней ожидания</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1 tracking-tighter">100%</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Точность прилегания</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

