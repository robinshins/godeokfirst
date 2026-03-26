export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* Лейбл */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p
              className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              From the Doctor
            </p>
            <h2
              className="font-bold text-[28px] leading-[1.35] tracking-[-0.03em] text-black"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              десна только хорошо уход<br />
              натуральный зуб, пожизненно использовать может
            </h2>
          </div>

          {/* Сообщение врача */}
          <div
            className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5"
          >
            {/* Содержание */}
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
 Имплант получить пациентминут бесплатный.<br /><br />
                Большинство потеряло зубы не из-за самих зубов. <span className="text-[#008095] font-bold">Не ухаживали за дёснами вовремя</span> В итоге пришлось удалять. Таких случаев гораздо больше.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Лечение дёсен легко откладывать. Но достаточно чистки 1 раз в год и визита при первых симптомах, чтобы <span className="text-[#008095] font-bold">сохранить натуральные зубы на 20-30 лет дольше.</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Каким бы хорошим ни был имплант, он не сравнится с натуральным зубом.
              </p>
            </div>

            {/* Подпись */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Доктор Ли Донхён
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Специалист комплексной стоматологии · Godeok First Dental Главный врач
                </p>
              </div>
            </div>
          </div>

          {/* ключевой стоматология 3 */}
          <div className="flex flex-col gap-3">
            {[
              { num: '1лет 1раз', desc: 'чистка только  тоже установкакровеносный сосуд заболевание риск 14% снижение' },
              { num: '80%', desc: 'Распространённость заболеваний дёсен — у большинства нет симптомов' },
              { num: '3раз', desc: 'При запущенном пародонтите риск имплантации в 3 раза выше' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4"
              >
                <p
                  className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[72px]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.num}
                </p>
                <p
                  className="font-semibold text-[14px] leading-[1.5] text-[#3e3a3a] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
