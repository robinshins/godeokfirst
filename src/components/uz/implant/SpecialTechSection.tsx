import Image from 'next/image';

export default function SpecialTechSection() {
  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Medis maxsus texnologiyasi</h2>
            <p className="text-[#6b7280]">Xavfsizroq va mustahkamroq bo'lishi uchun.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[32px] shadow-sm flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[#006aff] font-bold">Sedatsiya (Uyqu terapiyasi)</span>
                <h3 className="text-2xl font-bold text-[#111827]">Og'riqsiz davolash</h3>
              </div>
              <p className="text-[#6b7280] leading-[1.6]">
                Stomatologiya qo'rquvi bor bemorlar uchun uyqu terapiyasi. Siz uxlab uyg'onganingizda operatsiya yakunlangan bo'ladi.
              </p>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/sleep-dentistry.jpg"
                  alt="Uyqu terapiyasi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[#006aff] font-bold">Uch o'lchamli navigatsiya</span>
                <h3 className="text-2xl font-bold text-[#111827]">Raqamli aniqlik</h3>
              </div>
              <p className="text-[#6b7280] leading-[1.6]">
                Operatsiyadan oldin virtual tahlil o'tkazib, asab tolalariga zarar yetkazmaydigan eng maqbul yo'lni tanlaymiz.
              </p>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/digital-guide-tech.jpg"
                  alt="Raqamli navigatsiya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

