import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-[#f8f9fa] w-full border-t border-[#e5e7eb]">
      <div className="max-w-[430px] mx-auto px-6 py-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <Image
              src="/icons/Logo_black.svg"
              alt="Kyungsung Medis Dental"
              width={160}
              height={32}
              className="opacity-80"
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  <strong>Muassasa nomi:</strong> Kyungsung Medis Dental klinikasi
                </p>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  <strong>Vakil:</strong> Kim Dong Seok | <strong>Biznes reestri:</strong> 617-18-54215
                </p>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  <strong>Manzil:</strong> Pusan shahri, Nam-gu, Suyeong-ro 298, Daeyeon Tower 4-chi qavat
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-bold text-[#374151]">Tel: 051-627-7475</p>
              <p className="text-[14px] text-[#6b7280]">Faks: 051-627-7476</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[13px] text-[#9ca3af] underline">Maxfiylik siyosati</a>
              <a href="#" className="text-[13px] text-[#9ca3af] underline">Foydalanish shartlari</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[12px] text-[#9ca3af] leading-[1.6]">
              © 2024 Kyungsung Medis Dental. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

