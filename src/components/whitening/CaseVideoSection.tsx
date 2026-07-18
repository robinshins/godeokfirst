export default function CaseVideoSection() {
  return (
    <div id="whitening-case-video" className="bg-white">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-[15px] font-['Pretendard_JP'] font-bold text-[#008095] uppercase tracking-[2px] leading-[24px]">
            실제 환자 케이스
          </p>
          <h2 className="text-[26px] font-['Pretendard_JP'] font-bold text-[#21314E] leading-[1.4] tracking-[-0.5px] text-center">
            검게 변한 잇몸,
            <br />
            치료가 가능할까요?
          </h2>
          <p className="text-[15px] font-['Pretendard_JP'] text-[#4F5971] leading-[1.6] text-center">
            치아와 잇몸의 변색이 고민이시라면,
            <br />
            원장이 직접 설명하는 환자 케이스를 확인해보세요.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-[20px] shadow-lg aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/OqtEFr6_bSA"
            title="검게 변한 잇몸, 치료가 가능할까요? | 실제 환자 케이스 공개"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-[12px] font-['Pretendard_JP'] text-[#9CA3AF] leading-[1.6] text-center">
          * 영상 속 사례는 개인에 따라 치료 방법과 결과가 다를 수 있습니다.
        </p>
      </div>
    </div>
  );
}
