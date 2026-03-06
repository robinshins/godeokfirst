export default function WhiteningComparisonSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Qaysi muolaja<br />
              menga mos?
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Ikki variantni solishtiring
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
            <div className="flex flex-col gap-4 overflow-hidden rounded-[inherit] w-full">
              <div className="flex flex-col gap-[30px] px-4 py-6 w-full">
                <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                  Oqartirish variantlari taqqoslash
                </p>

                <div className="bg-white border border-[#006aff] rounded-[10.671px] overflow-hidden w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e9ebf1]">
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] px-2 py-[12px] w-[70px] text-left">&nbsp;</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.56px] text-[#5d5f6d] text-center px-2 py-[12px] w-[45%]">Vodorod<br />peroksid</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center px-2 py-[12px]">Laminat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Muolaja vaqti</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2 soat<br />(shu kuni)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">2-3 tashrif<br />(1-2 hafta)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Davom etish</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2 yil<br />(parvarish bilan uzayadi)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">10-15 yil<br />(yarim doimiy)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Tish kesish</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Yo'q<br />(0mm)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Minimal<br />(0.3mm)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Narx oralig'i</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">20-30 ming won<br />(hammasi)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Har biri<br />50-80 ming won</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Tavsiya etiladi</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Tabiiy<br />oqartirish istovchilar</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Mukammal tish<br />istovchilar</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Ehtiyotkorlik</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">24 soat<br />bo'yovchi ovqatdan saqlanish</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Qattiq ovqatdan<br />ehtiyot bo'lish</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
