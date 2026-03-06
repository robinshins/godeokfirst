import Image from 'next/image';

export default function SelfVsProfessionalSection() {
  return (
    <div className="bg-[#fffafb] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-[28px] font-bold text-[#111827]">Professional va Uyda</h2>
            <p className="text-[#6b7280]">Nima uchun klinikaga murojaat qilish kerak?</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[24px] flex flex-col gap-4 border border-[#fce7f3]">
              <div className="flex flex-col gap-1">
                <span className="text-[#db2777] font-bold text-sm">Professional</span>
                <p className="font-bold text-[#374151]">Klinikada oqartirish</p>
              </div>
              <ul className="flex flex-col gap-2 text-xs text-[#6b7280]">
                <li className="flex gap-1"><span>•</span> Yuqori konsentratsiya</li>
                <li className="flex gap-1"><span>•</span> Tezkor natija</li>
                <li className="flex gap-1"><span>•</span> Shifokor nazorati</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-[24px] flex flex-col gap-4 border border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 font-bold text-sm">Uyda</span>
                <p className="font-bold text-[#374151]">Mustaqil oqartirish</p>
              </div>
              <ul className="flex flex-col gap-2 text-xs text-[#6b7280]">
                <li className="flex gap-1"><span>•</span> Past konsentratsiya</li>
                <li className="flex gap-1"><span>•</span> Sekin natija</li>
                <li className="flex gap-1"><span>•</span> Milkda noqulaylik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

