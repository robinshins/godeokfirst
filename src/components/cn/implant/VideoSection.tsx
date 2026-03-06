export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              通过本视频了解<br />
              种植牙的一切
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              从活动假牙、单颗种植牙、全口种植牙、<br />
              All-on-4到数字化种植牙，全面讲解所有治疗方法
            </p>
          </div>

          {/* YouTube Video */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9kP02X04THc"
                title="Complete Implant Guide Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Real Patient Results Video Section */}
          <div className="flex flex-col gap-6 pt-10">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
                真实患者亲证<br />
                真实治疗效果
              </h2>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                为什么选择美迪斯牙科，<br />
                又自信地推荐给周围的人，请直接确认
              </p>
            </div>

            {/* Patient Results YouTube Video */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GyzFVUfRqmk"
                    title="真实患者治疗效果视频"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/O4pDF0w17iE"
                    title="患者评价视频 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
