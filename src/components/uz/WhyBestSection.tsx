import Image from 'next/image';

export default function WhyBestSection() {
  const seminars = [
    { image: '/images/seminar-3.png', title: 'Stomatologlar uchun implantatsiya ta\'limi' },
    { image: '/images/seminar-1.png', title: 'Pusan stomatologlar assotsiatsiyasi maxsus ma\'ruzasi' },
    { image: '/images/seminar-4.png', title: 'Raqamli implantatsiya mutaxassislik kursi' },
    { image: '/images/seminar/digital-prosthetics-lecture.jpg', title: 'Raqamli protezlash klinik ma\'ruzasi' },
    { image: '/images/seminar/megagen-digital-scan-seminar.jpg', title: 'Megagen raqamli skanerlash seminari' },
    { image: '/images/seminar/osstem-digital-guide-surgery-lecture.jpg', title: 'Osstem raqamli yo\'naltiruvchi jarrohlik ma\'ruzasi' }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="w-[167.981px] h-[24px] relative">
              <Image
                src="/icons/Logo_black.svg"
                alt="Medis Dental"
                width={148}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Nima uchun Kyungsung Medis
            <br />
            mamlakat bo'ylab eng yaxshi
          </h2>
        </div>

        {/* Reason 1: Rasmiy belgilangan kasalxona */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Pusan taniqli universitetlar,
              <br />
              muassasalar rasmiy belgilangan kasalxonasi
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              Ishonchli universitetlar va muassasalar tomonidan tanlangan hamkor tibbiyot muassasasi
            </p>
          </div>

          {/* Partner Institutions */}
          <div className="flex flex-col gap-3 w-full">
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/busan-univ-hospital.svg"
                alt="Pusan Milliy Universiteti kasalxonasi"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongguk-cm.jpg"
                alt="Dongguk CM"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/kyungsung-univ.png"
                alt="Kyungsung Universiteti"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongmyung-univ.svg"
                alt="Dongmyeong Universiteti"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/pukyong-univ.png"
                alt="Pukyong Milliy Universiteti"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>
        </div>

        {/* Reason 2: Implantatsiya belgilangan a'lo kasalxona */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Megagen/Osstem/Neo
              <br />
              Implantatsiya belgilangan a'lo kasalxona
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              Nafaqat a'lo jarrohlik kasalxonasi sifatida belgilangan,
              <br />
              balki klinik maslahatchi sifatida turli tadqiqot faoliyatlarida ham ishtirok etamiz
            </p>
          </div>

          {/* Scrolling Certifications */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3909.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3910.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3911.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3912.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3913.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3914.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3915.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3917.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3919.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/DSC00078.jpg"
                alt="Megagen Implant sertifikat belgisi"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3920.jpg"
                alt="Implantatsiya a'lo kasalxona sertifikati"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Reason 3: Ilmiy ma'ruzalar */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-[60px]">
            <p className="text-3xl font-bold text-[#006aff] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Butun mamlakat stomatologlariga
              <br />
              ilmiy ma'ruzalar
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              Boshqalar seminarlarni tinglayotganda,
              <br />
              Medis seminarlar o'tkazadi.
              <br />
              Mahorat farqi natija farqini yaratadi.
            </p>
          </div>

          {/* Scrolling Seminar Images */}
          <div className="overflow-x-auto flex gap-2 pb-4">
            {seminars.map((seminar, i) => (
              <div key={i} className="flex-none w-[320px]">
                <div className="aspect-[950/1148] rounded-xl overflow-hidden relative">
                  <Image
                    src={seminar.image}
                    alt={seminar.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[17px] font-bold text-[#727582] mt-2">{seminar.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reason 4: Highness hamkorligi */}
        <div className="px-8 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-14">
            <p className="text-3xl font-bold text-white mb-3">4</p>
            <div className="w-full h-px bg-white/20 mb-3" />
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Highness Implant bilan
              <br />
              implantatsiya maxsus uskunalar ishlab chiqish
            </h3>
            <div className="w-full h-px bg-white/20 mb-3" />
            <p className="text-base font-semibold text-[#e9ebf1]">
              Highness Implant bilan raqamli to'liq implantatsiya (to'liq yoy implantatsiya) maxsus uskunalar ishlab chiqishda ham ishtirok etayotgan soha tomonidan tan olingan mutaxassis
            </p>
          </div>

          <div className="w-[322px] h-[196px] mx-auto rounded-xl overflow-hidden relative">
            <Image
              src="/images/hyness-advisory-board.svg"
              alt="Highness Implant hamkorligi"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Reason 5: Qat'iy gigiena boshqaruvi */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">5</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Qat'iy gigiena boshqaruv tizimi
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              Infeksiya xavotiri bo'lmagan xavfsiz davolash muhitini yaratamiz
            </p>
          </div>

          {/* Tozalash xonasi rasmlari - skroll */}
          <div className="overflow-x-auto flex gap-3 pb-4 mb-8">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/sterilization-room2.webp"
                alt="Tozalash xonasi - sterilizatsiya tizimi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/sterilization-room1.webp"
                alt="Tozalash xonasi - to'liq dezinfeksiya tizimi"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Gigiena boshqaruvi xususiyatlari */}
          <div className="flex flex-col gap-6">
            {/* 15 bosqichli dezinfeksiya/sterilizatsiya tizimi */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                15 bosqichli dezinfeksiya/sterilizatsiya tizimi
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Qo'llanmaga muvofiq 15 bosqichli dezinfeksiya/sterilizatsiya jarayonini qat'iy bajaramiz va barcha xodimlar uchun muntazam treninglar o'tkazamiz.
              </p>
            </div>

            {/* 1 bemor 1 asbob tizimi */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                1 bemor 1 asbob tizimi
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Barcha asboblar va uskunalar qo'llanmaga muvofiq dezinfeksiya/sterilizatsiya qilinadi, bir martalik davolash asboblari hech qachon qayta ishlatilmaydi.
              </p>
            </div>

            {/* Maxsus dezinfeksiya boshqaruv tizimi */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                Maxsus dezinfeksiya boshqaruv tizimi
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Infeksiyani nazorat qilish bo'yicha maxsus menejer doimiy ishtirok etadi va barcha asboblarning dezinfeksiya/sterilizatsiyasini qat'iy boshqaradi.
              </p>
            </div>

            {/* Dezinfeksiya suvi tizimi */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                Gipoxlorit kislotali dezinfeksiya suvi tizimi
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Inson tanasiga zararsiz keyingi avlod dezinfektsiyalovchi HOCl (gipoxlorit kislota) ishlatiladi, shuning uchun davolanishni xavfsiz qabul qilishingiz mumkin.
              </p>
            </div>
          </div>

          {/* Ta'kidlash xabari */}
          <div className="mt-6 bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl border border-[#006aff]/20">
            <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff] text-center">
              Mukammal dezinfeksiya/sterilizatsiya bilan infeksiya xavotiri bo'lmagan xavfsiz davolash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
