export default function DoctorMessageSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full flex justify-center">
        <div className="px-5 py-[60px] w-full max-w-[430px] flex flex-col gap-10">

          {/* 상단 레이블 */}
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
              Milkni yaxshi parvarish qilsangiz<br />
              tabiiy tishlarni umr boʼyi ishlatish mumkin
            </h2>
          </div>

          {/* 원장 메시지 카드 */}
          <div
            className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5"
          >
            {/* 인용 텍스트 */}
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Implant qoʼydirish uchun kelgan bemorlarni koʼrganimda har safar yuragim ogʼriydi.<br /><br />
                Koʼpchilik hollarda tishning oʼzi yomon boʼlgani uchun emas. <span className="text-[#008095] font-bold">Milkni oʼz vaqtida parvarish qilmaganligi</span> sababli oxir-oqibat sугʼurishga majbur boʼlgan holatlar ancha koʼp.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Milk davolash ogʼriqli va mashaqqatli deb kechiktirilishi oson. Lekin yiliga bir marta skalering va norahatlik sezilganda darhol tashrif buyurish bilan <span className="text-[#008095] font-bold">tabiiy tishlarni 20~30 yil koʼproq ishlatish mumkin.</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                Implant qanchalik yaxshi boʼlsa ham, tabiiy tishni yenga oladigan protez yoʼq.
              </p>
            </div>

            {/* 서명 */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Dr. Lee Dong-hyun
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  Kompleks stomatologiya mutaxassisi · Godeok First Dental bosh shifokori
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 수치 3가지 */}
          <div className="flex flex-col gap-3">
            {[
              { num: 'Yiliga 1', desc: 'Faqat skalering bilan yurak-qon tomir kasalliklari xavfi 14% kamayadi' },
              { num: '80%', desc: 'Kattalar orasida milk kasalligi — koʼpchilik belgilarni sezmaydi' },
              { num: '3 baravar', desc: 'Parodontitni davolamaslik implant kerak boʼlish xavfini oshiradi' },
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
