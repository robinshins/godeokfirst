import Image from 'next/image';

export default function AfterCareSection() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Umrbod parvarish</h2>
            <p className="text-[#6b7280]">Implant o'rnatishdan ko'ra uni asrash muhimroqdir.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden">
              <Image
                src="/images/aftercare.jpg"
                alt="Parvarish"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4 p-5 bg-[#f8f9fa] rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Image src="/icons/check-blue.svg" alt="Check" width={24} height={24} />
                </div>
                <p className="font-bold text-[#374151]">Doimiy tekshiruv va tozalash tizimi</p>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[#f8f9fa] rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Image src="/icons/check-blue.svg" alt="Check" width={24} height={24} />
                </div>
                <p className="font-bold text-[#374151]">Implantatsiya kafolat taloni beriladi</p>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[#f8f9fa] rounded-[20px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Image src="/icons/check-blue.svg" alt="Check" width={24} height={24} />
                </div>
                <p className="font-bold text-[#374151]">Og'iz bo'shlig'i gigienasi bo'yicha maslahatlar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

