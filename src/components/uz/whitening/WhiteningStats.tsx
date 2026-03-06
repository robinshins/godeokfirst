import Image from 'next/image';

export default function WhiteningStats() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-[28px] font-bold text-[#111827]">Medis oqartirishining afzalligi</h2>
            <p className="text-[#6b7280]">Nima uchun bizni tanlashadi?</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#fdf2f8] p-6 rounded-[32px] flex flex-col items-center text-center gap-2">
              <span className="text-3xl font-black text-[#db2777]">1-o'rin</span>
              <p className="font-bold text-[#374151] text-sm">Eng yuqori natija</p>
            </div>
            <div className="bg-[#fdf2f8] p-6 rounded-[32px] flex flex-col items-center text-center gap-2">
              <span className="text-3xl font-black text-[#db2777]">0%</span>
              <p className="font-bold text-[#374151] text-sm">Tish shikastlanishi</p>
            </div>
            <div className="bg-[#fdf2f8] p-6 rounded-[32px] flex flex-col items-center text-center gap-2">
              <span className="text-3xl font-black text-[#db2777]">1 soat</span>
              <p className="font-bold text-[#374151] text-sm">Qisqa vaqt</p>
            </div>
            <div className="bg-[#fdf2f8] p-6 rounded-[32px] flex flex-col items-center text-center gap-2">
              <span className="text-3xl font-black text-[#db2777]">50%</span>
              <p className="font-bold text-[#374151] text-sm">Chegirma (To'plam)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

