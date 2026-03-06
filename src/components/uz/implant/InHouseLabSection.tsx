import Image from 'next/image';

export default function InHouseLabSection() {
  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Ichki raqamli laboratoriya</h2>
            <p className="text-[#6b7280]">Professional texniklar klinika ichida protezlarni darhol tayyorlaydilar.</p>
          </div>

          <div className="relative w-full aspect-video rounded-[24px] overflow-hidden shadow-md">
            <Image
              src="/images/inhouse-lab.jpg"
              alt="Laboratoriya"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-[24px] flex flex-col gap-2 shadow-sm">
              <h3 className="font-bold text-[#374151] text-lg">Tezkor va Aniq</h3>
              <p className="text-[#6b7280]">Tashqaridan buyurtma qilinmagani uchun kutish vaqti kamayadi va tuzatishlar darhol amalga oshiriladi.</p>
            </div>
            <div className="bg-white p-6 rounded-[24px] flex flex-col gap-2 shadow-sm">
              <h3 className="font-bold text-[#374151] text-lg">Eng so'nggi 3D printer</h3>
              <p className="text-[#6b7280]">Raqamli ma'lumotlar asosida millimetr aniqligida protezlar ishlab chiqariladi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

