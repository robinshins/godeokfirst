export default function WhiteningComparisonSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[375px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Какая процедура<br />
              подойдет мне?
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Сравните два варианта
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] rounded-[20px] w-full">
            <div className="flex flex-col gap-4 overflow-hidden rounded-[inherit] w-full">
              <div className="flex flex-col gap-[30px] px-4 py-6 w-full">
                <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center w-full">
                  Сравнение вариантов
                </p>

                <div className="bg-white border border-[#006aff] rounded-[10.671px] overflow-hidden w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#e9ebf1]">
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] px-2 py-[12px] w-[70px] text-left">&nbsp;</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.56px] text-[#5d5f6d] text-center px-2 py-[12px] w-[45%]">Перекисное<br />отбеливание</th>
                        <th className="font-bold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#5d5f6d] text-center px-2 py-[12px]">Ламинаты</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Время</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2 часа<br />(за 1 визит)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">2-3 визита<br />(1-2 недели)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Эффект</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">1-2 года<br />(при уходе дольше)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">10-15 лет<br />(полупостоянный)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Обточка</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Нет<br />(0мм)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Минимальная<br />(0.3мм)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Цена</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">200-300$<br />(всего)</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">500-800$<br />(за единицу)</td>
                      </tr>
                      <tr className="border-b border-[#e9ebf1]">
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Для кого</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Естественное<br />отбеливание</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Идеальные<br />зубы</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#5d5f6d] px-2 py-[8.536px] align-middle">Ограничения</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">24ч без<br />красящей еды</td>
                        <td className="font-bold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#5d5f6d] text-center px-2 py-[8.536px] align-middle">Избегать<br />твердую пищу</td>
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
