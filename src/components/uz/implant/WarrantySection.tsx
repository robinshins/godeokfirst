import Image from 'next/image';

export default function WarrantySection() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Implantatsiya kafolati</h2>
            <p className="text-[#6b7280]">Medis tishlaringizni umrbod himoya qiladi.</p>
          </div>

          <div className="bg-[#0b1727] p-10 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#006aff] opacity-20 blur-[60px]" />
            
            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col gap-2">
                <span className="text-[#006aff] font-bold">Implant Body</span>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl font-bold text-white">Asosiy qism</h3>
                  <span className="text-[#006aff] text-2xl font-black">10 yil</span>
                </div>
              </div>

              <div className="h-[1px] bg-white/10 w-full" />

              <div className="flex flex-col gap-2">
                <span className="text-[#006aff] font-bold">Prosthetics</span>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl font-bold text-white">Protez</h3>
                  <span className="text-[#006aff] text-2xl font-black">3 yil</span>
                </div>
              </div>

              <p className="text-[#9ca3af] text-sm leading-[1.5] mt-4">
                * Kafolat muddati davomida doimiy tekshiruvlarga kelish talab etiladi.<br />
                * Bemorning e'tiborsizligi (baxtsiz hodisa, zarba va h.k.) natijasidagi shikastlanishlarga kafolat berilmaydi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

