import Image from 'next/image';

export default function SymptomsSection() {
  return (
    <div className="bg-[#f0fdf4] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Olib tashlamasa nima bo'ladi?</h2>
            <p className="text-[#6b7280]">Donolik tishidan kelib chiqadigan muammolar</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-8 rounded-[32px] flex flex-col gap-4 shadow-sm border border-[#dcfce7]">
              <h3 className="text-xl font-bold text-[#16a34a]">Milk yallig'lanishi</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                Tozalash qiyin bo'lgani uchun bakteriyalar ko'payib, milk shishishi va yiringlashi xavfi bor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[32px] flex flex-col gap-4 shadow-sm border border-[#dcfce7]">
              <h3 className="text-xl font-bold text-[#16a34a]">Yon tishning kariesi</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                Donolik tishi va uning yonidagi asosiy tish orasida karies paydo bo'lib, ikkala tishni ham yo'qotish xavfi tug'iladi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[32px] flex flex-col gap-4 shadow-sm border border-[#dcfce7]">
              <h3 className="text-xl font-bold text-[#16a34a]">Tish kistasi</h3>
              <p className="text-[#6b7280] leading-[1.6]">
                Tish atrofida kista paydo bo'lib, jag' suyagini yemirilishiga olib kelishi mumkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

