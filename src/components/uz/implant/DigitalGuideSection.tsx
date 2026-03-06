import Image from 'next/image';

export default function DigitalGuideSection() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Raqamli vs An'anaviy</h2>
            <p className="text-[#6b7280]">Nima uchun raqamli navigatsiyani tanlash kerak?</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 px-4">
              <div className="text-center font-bold text-[#006aff]">Raqamli navigatsiya</div>
              <div className="text-center font-bold text-[#9ca3af]">An'anaviy usul</div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[#f8f9fa] p-6 rounded-[24px] flex flex-col gap-3">
                <p className="text-center text-sm text-[#6b7280]">Kesmalar</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center font-bold text-[#374151]">Minimal yoki kesmalarsiz</div>
                  <div className="text-center text-[#6b7280]">Milk to'liq kesiladi</div>
                </div>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-[24px] flex flex-col gap-3">
                <p className="text-center text-sm text-[#6b7280]">Og'riq va Shish</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center font-bold text-[#374151]">Juda kam</div>
                  <div className="text-center text-[#6b7280]">Kuchli bo'lishi mumkin</div>
                </div>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-[24px] flex flex-col gap-3">
                <p className="text-center text-sm text-[#6b7280]">Operatsiya vaqti</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center font-bold text-[#374151]">Qisqa (10-20 daqiqa)</div>
                  <div className="text-center text-[#6b7280]">Uzoq (30-60 daqiqa)</div>
                </div>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-[24px] flex flex-col gap-3">
                <p className="text-center text-sm text-[#6b7280]">Tiklanish</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center font-bold text-[#374151]">Tezkor</div>
                  <div className="text-center text-[#6b7280]">Nisbatan sekin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

