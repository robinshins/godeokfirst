export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              この動画でわかる<br />
              インプラントのすべて
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              義歯、インプラント、全体インプラント、オールオン4、<br />
              デジタルインプラントまで、すべての治療法を説明
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
                実際の患者様が証明する<br />
                リアルな治療結果
              </h2>
              <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
                なぜメディス歯科を選び、<br />
                自信を持って周りに推薦するのか、直接ご確認ください
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
                    title="実際の患者様治療結果動画"
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
                    title="患者様レビュー動画 2"
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
