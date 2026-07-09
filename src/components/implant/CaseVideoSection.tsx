export default function CaseVideoSection() {
  return (
    <div id="implant-case-video" className="bg-white">
      <div className="max-w-[430px] mx-auto px-4 pt-0 pb-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-[15px] font-['Pretendard_JP'] font-bold text-[#008095] uppercase tracking-[2px] leading-[24px]">
            임플란트 환자 케이스
          </p>
          <h2 className="text-[26px] font-['Pretendard_JP'] font-bold text-[#21314E] leading-[1.4] tracking-[-0.5px] text-center">
            실제 임플란트 치료 과정을
            <br />
            케이스로 하나씩 설명드립니다
          </h2>
          <p className="text-[15px] font-['Pretendard_JP'] text-[#4F5971] leading-[1.6] text-center">
            치료 계획을 세우는 과정부터 수술까지,
            <br />
            원장이 직접 환자 사례를 짚어드립니다.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-[20px] shadow-lg aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/R-l2KLEv_ks"
            title="실제 임플란트 치료 과정 공개｜환자 사례로 보는 치료 계획부터 수술까지"
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
