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
              턱관절 통증,<br />
              참으면 더 나빠집니다
            </h2>
          </div>

          {/* Doctor Message Card */}
          <div className="bg-[#f8f9fb] rounded-[24px] p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                &ldquo;턱에서 소리가 나는데 괜찮겠지&rdquo; 하고 방치하시는 분들이 정말 많습니다.<br /><br />
                하지만 턱관절 장애는 <span className="text-[#008095] font-bold">초기에 치료하면 간단하지만, 방치하면 만성화</span>되어 치료가 어려워집니다.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                턱관절 통증은 두통, 어깨 결림, 이명 등 전신 증상으로 이어질 수 있습니다. <span className="text-[#008095] font-bold">정확한 진단이 올바른 치료의 시작</span>입니다.
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
                  통합치의학과 전문의 · 고덕퍼스트치과 대표원장
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="flex flex-col gap-3">
            {[
              { num: '70%', desc: '성인 인구 중 턱관절 장애 경험 비율' },
              { num: '3배', desc: '방치 시 만성화 위험 — 조기 치료가 핵심' },
              { num: '85%', desc: '보존적 치료(비수술)로 호전되는 비율' },
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
