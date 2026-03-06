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
              잇몸만 잘 관리해도<br />
              자연 치아, 평생 쓸 수 있습니다
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
                임플란트를 받으러 오시는 환자분들을 뵐 때마다 마음이 무거워집니다.<br /><br />
                대부분은 치아 자체가 나빠서가 아닙니다. <span className="text-[#008095] font-bold">잇몸을 제때 관리하지 못해서</span> 결국 뽑을 수밖에 없게 된 경우가 훨씬 더 많습니다.
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                잇몸 치료는 아프고 귀찮다고 미루기 쉽습니다. 하지만 1년에 한 번 스케일링, 이상이 느껴질 때 바로 내원하는 것만으로도 <span className="text-[#008095] font-bold">자연 치아를 20~30년 더 쓸 수 있습니다.</span>
              </p>
              <p
                className="font-semibold text-[16px] leading-[1.75] tracking-[-0.02em] text-[#2d3340]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                임플란트가 아무리 좋아도, 자연 치아를 이기는 보철물은 없습니다.
              </p>
            </div>

            {/* 서명 */}
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

          {/* 핵심 수치 3가지 */}
          <div className="flex flex-col gap-3">
            {[
              { num: '1년 1회', desc: '스케일링만 해도 심혈관 질환 위험 14% 감소' },
              { num: '80%', desc: '성인의 잇몸 질환 보유 — 대부분 자각 증상 없음' },
              { num: '3배', desc: '치주염 방치 시 임플란트가 필요해질 위험' },
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
