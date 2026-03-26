import Image from 'next/image';
import Link from 'next/link';

export default function LocationSection() {
  return (
    <div className="bg-gradient-to-b from-white to-[#d8eaf5]">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <div className="flex justify-center mb-6">
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(블랙).png"
                alt="Godeok First Dental"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#292a2f] leading-[1.35] mb-8">
            Sogʼlom tishlar, baxtli tabassum uchun birinchi qadam
            <br />
            biz bilan birga
          </h2>
          <Link href="/uz/consultation" className="block w-full">
            <button className="w-full bg-[#008095] text-white text-xl font-bold py-4 rounded-[18px] hover:bg-[#006B7A] transition-colors">
              AI Maslahat
            </button>
          </Link>
        </div>

        {/* Interior Photos */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#292a2f] mb-4">Klinika binosi</h3>
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/로비사진.jpg"
                alt="Godeok First Dental foyye"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/데스크사진.jpg"
                alt="Godeok First Dental qabulxona"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/상담실.jpg"
                alt="Godeok First Dental maslahat xonasi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="Godeok First Dental davolash xonasi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/특진실.jpg"
                alt="Godeok First Dental VIP xona"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/소독실.jpg"
                alt="Godeok First Dental sterilizatsiya xonasi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/치과로고인테리어사진.jpg"
                alt="Godeok First Dental interer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Map & Contact Info */}
        <div className="space-y-6">
          {/* Map */}
          <div className="relative border-[5px] border-white rounded-2xl overflow-hidden h-[480px]">
            <Image
              src="/images/goduk_images/네이버지도캡처.png"
              alt="Godeok First Dental joylashuv"
              fill
              className="object-cover"
            />

            {/* Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[205px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Address & CTA */}
            <div className="absolute bottom-4 left-4 right-4 space-y-3">
              <div className="text-black font-semibold text-[15px] leading-[1.6]">
                <p className="mb-0">Kyonggi, Pyongtaek, Godeok-ro 250, Edusky, 4-qavat, 401, 402</p>
              </div>
              <Link
                href="https://naver.me/GSD1OqoS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white shadow-md text-[#01c17e] font-bold text-base py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                Yoʼnalishni koʼrish
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            {/* Ish vaqti */}
            <div className="space-y-3">
              <p className="text-base font-semibold text-[#727582]">Ish vaqti</p>
              <div className="text-[15px] font-semibold text-black leading-[1.8] space-y-1">
                <div className="flex">
                  <span className="min-w-[140px]">Dush / Pay (kechki qabul) :</span>
                  <span className="whitespace-nowrap">AM 10:00 – PM 09:00</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">Sesh / Chor / Jum :</span>
                  <span className="whitespace-nowrap">AM 10:00 – PM 07:00</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">Shanba :</span>
                  <span className="whitespace-nowrap">AM 09:30 – PM 02:00</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]"></span>
                  <span className="text-[13px] text-[#727582]">(Tushlik tanaffussiz)</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">Tushlik tanaffus :</span>
                  <span className="whitespace-nowrap">PM 01:00 – PM 02:00</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]"></span>
                  <span className="text-[13px] text-[#727582]">(Dush-Jum)</span>
                </div>
                <div className="flex">
                  <span className="min-w-[140px]">Dam olish :</span>
                  <span>Yakshanba va bayram kunlari</span>
                </div>
              </div>
            </div>

            {/* Qabulga yozilish */}
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-base font-semibold text-[#727582]">Qabulga yozilish</p>
                <p className="text-[15px] text-[#727582] leading-[1.6]">
                  Quyidagi tugmalar orqali AI band qilish, Telefon maslahat yoki Naver bron xizmatidan foydalanishingiz mumkin.
                </p>
              </div>

              {/* Band qilish tugmalari */}
              <div className="space-y-3">
                {/* AI band qilish tugmasi */}
                <Link
                  href="/uz/consultation"
                  className="w-full h-[56px] bg-[#008095] rounded-2xl flex items-center justify-center gap-2 hover:bg-[#006B7A] transition-colors"
                >
                  <span className="text-lg font-bold text-white">AI Uchrashuv</span>
                </Link>

                {/* Telefon tugmasi */}
                <Link
                  href="tel:031-611-3222"
                  className="w-full h-[56px] bg-white border-2 border-[#008095] rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-[#008095]">Telefon maslahat</span>
                    <span className="text-sm font-semibold text-[#727582]">031-611-3222</span>
                  </div>
                </Link>

                {/* Naver bron tugmasi */}
                <Link
                  href="https://naver.me/GSD1OqoS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[56px] bg-[#03c75a] rounded-2xl flex items-center justify-center gap-2 hover:bg-[#02b350] transition-colors"
                >
                  <span className="text-2xl font-bold text-white">N</span>
                  <span className="text-lg font-bold text-white">Naver bron</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
