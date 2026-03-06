import Image from 'next/image';

export default function VideoSection() {
  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Implantatsiya haqida</h2>
            <p className="text-[#6b7280]">Raqamli navigatsiya operatsiyasi qanday amalga oshiriladi?</p>
          </div>

          <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-black shadow-lg">
            <Image
              src="/images/implant-video-thumb.jpg"
              alt="Video"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-white p-6 rounded-[24px]">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#006aff]/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-[#006aff] font-bold">01</span>
              </div>
              <p className="text-[#374151] leading-[1.5]">
                Kompyuter tahlili orqali asab tolalari va jag' suyagi tuzilishi aniq belgilanadi.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#006aff]/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-[#006aff] font-bold">02</span>
              </div>
              <p className="text-[#374151] leading-[1.5]">
                Virtual operatsiya o'tkazilib, eng mos joylashuv tanlanadi.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#006aff]/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-[#006aff] font-bold">03</span>
              </div>
              <p className="text-[#374151] leading-[1.5]">
                Navigatsiya (yo'riqnoma) yordamida kesmalarsiz yoki minimal kesma bilan operatsiya tez yakunlanadi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

