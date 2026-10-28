export default function JawBotoxDoctorMessageSection() {
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
              보톡스는 피부과에서만<br />
              맞는 게 아닙니다
            </h2>
          </div>

          {/* Doctor Message Card */}
          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                &ldquo;턱보톡스&rdquo;를 피부과 시술로만 알고 계신 분들이 많습니다.<br /><br />
                하지만 턱보톡스가 들어가는 <span className="text-[#008095] font-bold">교근(깨물근)은 음식을 씹는 저작근</span>입니다. 치아·교합·턱관절과 함께 움직이는 근육이라, 치과에서 매일 진단하고 치료하는 영역입니다.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                저는 턱보톡스를 턱선만 다듬는 주사가 아니라, <span className="text-[#008095] font-bold">이갈이와 턱 근육 과긴장을 다루는 치료의 한 방법</span>으로 봅니다. 그래서 주사 전에 이갈이·교합·턱관절 상태를 먼저 확인하고, 씹는 힘을 지키는 범위에서 용량과 위치를 정합니다.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#e9ebf1]">
              <div className="flex flex-col gap-0.5">
                <p
                  className="font-bold text-[15px] text-black tracking-[-0.02em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  이동현 원장
                </p>
                <p
                  className="font-medium text-[13px] text-[#9298a6] tracking-[-0.01em]"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  통합치의학과 전문의 · 턱관절장애교육연구회 수료 · 고덕퍼스트치과 대표원장
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="flex flex-col gap-3">
            {[
              { num: '10분', desc: '시술 시간 — 마취 없이 또는 표면마취 후 진행, 시술 후 바로 일상생활' },
              { num: '1~2주', desc: '교근 힘이 줄어드는 것을 느끼기 시작하는 시점 (개인차 있음)' },
              { num: '3~6개월', desc: '효과 지속 기간 — 이후 필요에 따라 재시술 (개인차 있음)' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#e9ebf1] rounded-2xl px-5 py-4"
              >
                <p
                  className="font-bold text-[22px] text-[#008095] tracking-[-0.03em] shrink-0 w-[84px]"
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
