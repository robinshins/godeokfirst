export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              사랑니 발치의 모든 것<br />
              이 영상에서 다 알려드려요
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              사랑니 발치 시기, 방법, 주의사항까지<br />
              모든 정보를 자세히 설명해 드립니다
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-gradient-to-br from-[#008095]/10 to-[#008095]/20 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#008095]/20 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="font-bold text-[#008095] text-[15px]">영상 준비 중</p>
                <p className="text-[13px] text-[#008095]/70">고덕퍼스트치과 사랑니 발치 영상이 곧 업로드됩니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
