export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              Tất cả về Implant<br />
              chúng tôi sẽ cho bạn biết trong video này
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              Chúng tôi giải thích tất cả các phương pháp điều trị từ hàm giả, implant, implant toàn hàm, implant full arch đến implant kỹ thuật số
            </p>
          </div>

          {/* YouTube Video */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9kP02X04THc"
                title="Video hướng dẫn hoàn hảo về Implant"
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
                Kết quả được chứng minh<br />
                bởi các bệnh nhân thực tế
              </h2>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                Hãy tự mình kiểm tra tại sao họ chọn Nha khoa Medis<br />
                và tự tin giới thiệu cho những người xung quanh
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
                    title="Video kết quả điều trị bệnh nhân thực tế"
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
                    title="실제 환자 후기 영상 2"
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
                    src="https://www.youtube.com/embed/wZYlF4IJYd4"
                    title="실제 환자 후기 영상 3"
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

