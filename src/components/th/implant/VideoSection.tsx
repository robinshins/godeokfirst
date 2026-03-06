import Image from 'next/image';

export default function VideoSection() {
  return (
    <div className="bg-[#0b1727] w-full text-white">
      <div className="box-border flex flex-col gap-10 items-center px-4 py-[60px] relative w-full max-w-[430px] mx-auto text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold leading-[1.35] text-[32px] tracking-[-0.64px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ชมวิดีโอแนะนำ<br />รากฟันเทียมดิจิทัล
          </h2>
          <p className="font-medium text-white/60 text-lg" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            ทำความเข้าใจขั้นตอนการผ่าตัดที่ทันสมัยที่สุด<br />
            ในเวลาเพียงไม่กี่นาที
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
          <Image
            src="/images/implant-video-thumb.jpg"
            alt="รากฟันเทียมดิจิทัล"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <div className="w-16 h-16 bg-[#006aff] rounded-full flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

