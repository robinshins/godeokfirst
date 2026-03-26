export default function VideoSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-[60px] px-4 w-full max-w-[430px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              親知らず抜歯の全て<br />
              この映像で全てお伝えします
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              親知らず抜歯の時期、方法、注意事項まで<br />
              全ての情報を詳しくご説明します
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-gradient-to-br from-[#008095]/10 to-[#008095]/20 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#008095]/20 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#008095" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="font-bold text-[#008095] text-[15px]">映像準備中</p>
                <p className="text-[13px] text-[#008095]/70">コドクファースト歯科 親知らず抜歯映像がまもなくアップロードされます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
