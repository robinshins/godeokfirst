import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-[#f8f9fa] w-full border-t border-[#e5e7eb]">
      <div className="max-w-[430px] mx-auto px-6 py-12">
        <div className="flex flex-col gap-10">
          {/* Logo and Clinics Info */}
          <div className="flex flex-col gap-6">
            <Image
              src="/icons/Logo_black.svg"
              alt="Кёнсон Мэдиш шүдний эмнэлэг"
              width={160}
              height={32}
              className="opacity-80"
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  <strong>Байгууллагын нэр:</strong> Кёнсон Мэдиш шүдний эмнэлэг
                </p>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  <strong>Төлөөлөгч:</strong> Ким Дунг Сог | <strong>Бизнес регистр:</strong> 617-18-54215
                </p>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                  <strong>Хаяг:</strong> Пусан хот, Нам-гу дүүрэг, Сүён-ру 298, Даэёон таур 4-р давхар
                </p>
              </div>
            </div>
          </div>

          {/* Contact and Links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-bold text-[#374151]">Утас: 051-627-7475</p>
              <p className="text-[14px] text-[#6b7280]">Факс: 051-627-7476</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[13px] text-[#9ca3af] underline">Нууцлалын бодлого</a>
              <a href="#" className="text-[13px] text-[#9ca3af] underline">Үйлчилгээний нөхцөл</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-4">
            <p className="text-[12px] text-[#9ca3af] leading-[1.6]">
              © 2024 Кёнсон Мэдиш шүдний эмнэлэг. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

