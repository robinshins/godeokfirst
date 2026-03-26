'use client';

export default function ZeroFailureSection() {
  return (
    <div className="bg-[#21314E] w-full">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-8 items-center px-4 py-12 w-full max-w-[430px]">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center w-full">
            <p className="text-[14px] font-semibold text-[#4DC8D8] tracking-[2px] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              SINCE OPEN
            </p>
            <h2 className="font-bold text-[28px] text-center text-white leading-[1.35] tracking-[-0.5px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              고덕 에듀타운<br />
              <span className="text-[#4DC8D8]">첫번째 치과</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#4DC8D8]/40 rounded-full" />
            <p className="text-[15px] text-white/80 text-center leading-[1.6] font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              처음부터 이 자리를 지켜온 치과.<br />
              대표원장이 직접, 끝까지 책임집니다.
            </p>
          </div>

          {/* Message */}
          <p className="text-[14px] text-white/50 text-center leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            담당 의사가 바뀌지 않습니다.<br />
            상담부터 수술, 사후관리까지<br />
            <span className="text-white/80 font-semibold">통합치의학전문의 이동현 원장</span>이 책임집니다.
          </p>
        </div>
      </div>
    </div>
  );
}
