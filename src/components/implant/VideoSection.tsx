export default function VideoSection() {
  return (
    <div className="w-full flex justify-center bg-[#f8fbfd] -mt-1">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <p className="text-[15px] font-bold text-[#4DC8D8] tracking-[3px] uppercase">
              VIDEO
            </p>
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-[#008095]">
              임플란트의 모든 것<br />
              영상으로 확인하세요
            </h2>
            <p className="text-base font-medium leading-[1.4] tracking-[-0.02em] text-[#3e3a3a]">
              고덕퍼스트치과 대표원장이<br />
              직접 설명해드립니다
            </p>
          </div>

          {/* YouTube Placeholder - 메인 영상 */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-[#e9ebf1] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-center px-6">
                <div className="w-16 h-16 rounded-full bg-[#008095]/20 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" fill="#008095" />
                  </svg>
                </div>
                <p className="text-[#008095] font-bold text-[15px]">영상 준비 중</p>
                <p className="text-[#727582] text-[13px] leading-[1.5]">고덕퍼스트치과 임플란트 영상을<br />곧 업로드할 예정입니다</p>
              </div>
            </div>
          </div>

          {/* Shorts Placeholder */}
          <div className="grid grid-cols-2 gap-4">
            {['임플란트 수술 과정', '임플란트 관리법'].map((title, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="relative w-full aspect-[9/16] rounded-[16px] overflow-hidden bg-[#e9ebf1] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-center px-3">
                    <div className="w-10 h-10 rounded-full bg-[#008095]/20 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" fill="#008095" />
                      </svg>
                    </div>
                    <p className="text-[#727582] text-[11px]">준비 중</p>
                  </div>
                </div>
                <p className="text-[13px] font-semibold text-[#3e3a3a] text-center leading-[1.3]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
