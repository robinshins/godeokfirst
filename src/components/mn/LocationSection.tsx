import Image from 'next/image';

export default function LocationSection() {
  return (
    <div id="location" className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold text-[#111827] leading-[1.3] tracking-[-0.64px]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
              Ирэх зам ба Цагийн хуваарь
            </h2>
          </div>

          {/* Map Placeholder/Image */}
          <div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-[#f3f4f6] border border-[#e5e7eb]">
            <Image
              src="/images/map-placeholder.jpg"
              alt="Байршил"
              fill
              className="object-cover"
            />
          </div>

          {/* Info Content */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#111827]">Байршил</h3>
              <div className="flex flex-col gap-1">
                <p className="text-[17px] text-[#374151] leading-[1.5]">
                  Пусан хот, Нам-гу дүүрэг, Сүён-ру 298, Кёнсон их сургуулийн буудал 5-р гарц, Даэёон таур 4-р давхар
                </p>
                <p className="text-[15px] text-[#6b7280]">
                  (Кёнсон их сургууль, Пүгён их сургуулийн буудлын 5-р гарцаас 10м)
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/hNbGVXnhd9zLKrBe9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white border border-[#e5e7eb] text-[#4285F4] h-12 rounded-[14px] font-bold text-base hover:bg-gray-50 transition-colors"
              >
                Google Maps
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#111827]">Цагийн хуваарь</h3>
              <div className="flex flex-col gap-2 bg-[#f8f9fa] p-5 rounded-[18px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#6b7280]">Даваа, Лхагва, Баасан</span>
                  <span className="font-bold text-[#374151]">09:30 - 18:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#006aff] font-semibold">Мягмар, Пүрэв (Орой)</span>
                  <span className="font-bold text-[#374151]">09:30 - 20:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6b7280]">Бямба гараг</span>
                  <span className="font-bold text-[#374151]">09:30 - 14:00</span>
                </div>
                <div className="h-[1px] bg-[#e5e7eb] my-1" />
                <div className="flex justify-between items-center">
                  <span className="text-[#6b7280]">Үдийн цай</span>
                  <span className="font-bold text-[#374151]">13:00 - 14:00</span>
                </div>
                <p className="text-[13px] text-[#9ca3af] mt-1 text-center">
                  * Бямба гарагт үдийн цайны цаггүй. Ням гараг болон баярын өдрүүдэд амарна.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-[#111827]">Утас</h3>
              <a
                href="tel:051-627-7475"
                className="flex items-center justify-center gap-2 bg-[#006aff] text-white h-14 rounded-[18px] font-bold text-lg"
              >
                <Image src="/icons/phone-white.svg" alt="Phone" width={20} height={20} />
                051-627-7475
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

