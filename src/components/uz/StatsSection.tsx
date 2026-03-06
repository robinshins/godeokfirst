import Image from 'next/image';

export default function StatsSection() {
  return (
    <div className="bg-gradient-to-b from-[#0b1727] to-white w-full relative">
      <div className="w-full flex justify-center">
        <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
              <div className="h-6 relative shrink-0 w-[168px]">
                <Image
                  src="/icons/Logo.svg"
                  alt="Kyungsung Medis Dental Clinic"
                  width={168}
                  height={24}
                  className="w-full h-full"
                />
              </div>

              <h2 className="font-bold leading-[1.35] text-[32px] text-center text-white tracking-[-0.64px] w-full">
                0 ta qayta operatsiya<br />
                Eng ko'p implantatsiya holatlari
              </h2>

              <p className="font-semibold leading-[1.4] text-[#e9ebf1] text-base text-center tracking-[-0.32px] w-full">
                Kyungsung Medis Dental butun umr davomida bir marta davolanishni va'da qiladi.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full z-10">
            {/* Card 1 */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p className="font-bold leading-[1] text-[72px] text-[#006aff]">0</p>
                <p className="font-bold leading-[1] text-[#006aff] text-2xl">holat</p>
              </div>
              <p className="font-bold text-[#37373e] text-[22px] text-center">10 yil ichida qayta operatsiya</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p className="font-bold leading-[1] text-[72px] text-[#006aff]">1,500 +</p>
                <p className="font-bold leading-[1] text-[#006aff] text-2xl">holat</p>
              </div>
              <p className="font-bold text-[#37373e] text-[22px] text-center">Raqamli implantatsiya soni</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white box-border flex flex-col gap-4 items-center px-4 py-10 relative rounded-2xl shrink-0 w-full">
              <div className="flex gap-3 items-baseline justify-center relative shrink-0 w-full">
                <p className="font-bold leading-[1] text-[72px] text-[#006aff]">2,700 +</p>
                <p className="font-bold leading-[1] text-[#006aff] text-2xl">holat</p>
              </div>
              <p className="font-bold text-[#37373e] text-[22px] text-center">Murakkab donolik tishlarini olish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

