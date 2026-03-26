export default function TmjDoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* Header */}
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
              ВНЧС боль,<br />
 более 
            </h2>
          </div>

          {/* Doctor Message Card */}
          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
 &ldquo; &rdquo; и стоматология минут примерно много.<br /><br />
 только ВНЧС расстройство <span className="text-[#008095] font-bold">начальный лечение Однако, стоматология </span> лечение.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
 ВНЧС боль, результат, и т.д. общий симптом качество может. <span className="text-[#008095] font-bold">точный диагностика правильный лечение начало</span>.
              </p>
            </div>

            {/* Signature */}
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

          {/* Key Stats */}
          <div className="flex flex-col gap-3">
            {[
 { num:'70%', desc:'взрослый во время ВНЧС расстройство опыт стоимость'},
 { num:'3раз', desc:'стоматология риск — преждевременный лечение ключевой'},
 { num:'85%', desc:'сохранение лечение(стоимостьоперация) до стоимость'},
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
