import Image from 'next/image';

export default function SpeedSection() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold text-[#111827] leading-[1.2] tracking-[-0.64px]">
              Bir kun ichida<br />
              <span className="text-[#006aff]">Tezkor va Mukammal</span>
            </h2>
            <p className="text-lg text-[#6b7280] leading-[1.6]">
              Band insonlar uchun mo'ljallangan<br />
              Bir kunlik implantatsiya tizimi
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-[32px] flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Image src="/icons/time.svg" alt="Vaqt" width={24} height={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#6b7280] text-sm">Konsultatsiya + Operatsiya</span>
                  <span className="text-xl font-bold text-[#374151]">Bir kunda yakunlanadi</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Image src="/icons/recovery.svg" alt="Tiklanish" width={24} height={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#6b7280] text-sm">Tez tiklanish</span>
                  <span className="text-xl font-bold text-[#374151]">Kesmalarsiz usul</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden">
              <Image
                src="/images/speed-implant.jpg"
                alt="Tezkor implantatsiya"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[#6b7280] text-sm text-center">
              * Jag' suyagi holati yaxshi bo'lganda bir kunda amalga oshirish mumkin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

