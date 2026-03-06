export default function VideoSection() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">

          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <h2
              className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              잇몸 건강의 모든 것<br />
              이 영상에서 다 알려드려요
            </h2>
            <p
              className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              잇몸질환의 원인부터 치료법,<br />
              예방법까지 한 번에 정리해 드립니다
            </p>
          </div>

          {/* Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-[#f0f7fa] flex flex-col items-center justify-center gap-3 border border-[#d2e9f3]">
              <div className="w-16 h-16 rounded-full bg-[#008095]/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M10 7L22 14L10 21V7Z" fill="#008095" />
                </svg>
              </div>
              <p
                className="text-[#008095] font-semibold text-[15px] tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                영상 준비 중
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
