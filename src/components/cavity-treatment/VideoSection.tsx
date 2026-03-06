export default function VideoSection() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-3 text-center">
            <p
              className="text-[#008095] font-bold text-xs tracking-[0.12em] uppercase"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              YouTube
            </p>
            <h2
              className="text-[28px] font-bold leading-[1.35] tracking-[-0.56px] text-[#151a24]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              고덕퍼스트치과<br />
              유튜브 영상
            </h2>
            <p
              className="text-[15px] font-semibold leading-[1.6] text-[#727582]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              치료 과정과 치과 정보를<br />
              영상으로 확인하세요
            </p>
          </div>

          {/* Placeholder 1 */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video rounded-[20px] overflow-hidden bg-[#f3f6fb] flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#d1d6e0]">
              <div className="w-14 h-14 rounded-full bg-[#e6f7f8] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5L19 12L8 19V5Z" fill="#008095" />
                </svg>
              </div>
              <p
                className="text-[#9298a6] text-sm font-semibold text-center"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                영상 준비 중
              </p>
            </div>
          </div>

          {/* Placeholder 2 */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-video rounded-[20px] overflow-hidden bg-[#f3f6fb] flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#d1d6e0]">
              <div className="w-14 h-14 rounded-full bg-[#e6f7f8] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5L19 12L8 19V5Z" fill="#008095" />
                </svg>
              </div>
              <p
                className="text-[#9298a6] text-sm font-semibold text-center"
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
