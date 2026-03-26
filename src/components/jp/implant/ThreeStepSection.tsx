import Image from 'next/image';

export default function ThreeStepSection() {
  return (
    <div className="bg-white py-[60px] px-4 relative">
      {/* Background gradient effect */}
      <div className="absolute left-1/2 top-[379px] -translate-x-1/2 w-[480px] h-[636px] pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-blue-200/40 to-transparent blur-3xl"></div>
      </div>

      <div className="w-full relative">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-10">
          {/* Logo */}
          <div className="h-6 w-[168px]">
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none">
              <text x="0" y="18" fontFamily="Pretendard" fontSize="18" fontWeight="700" fill="#008095">
                コドクファースト歯科
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              コドクファースト歯科だけの<br />
              3段階仮歯
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              1回の仮歯で終わらせるのではなく<br />
              3段階にわたる精密調整を通じて<br />
              自分の歯のような快適さを実現します
            </p>
          </div>
        </div>

        {/* 4 Step Cards */}
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth.svg"
                alt="1次仮歯"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              1次仮歯
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              即時回復
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              手術直後、即時装着で<br />
              日常生活がすぐに可能です
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/crown.svg"
                alt="2次咬合安定"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              2次咬合安定
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              精密咬合調整
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              2週間後にオーダーメイドで<br />
              咬合状態を微細に調整します
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/implant-group.svg"
                alt="3次最終仮歯"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              3次最終仮歯
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              完璧な咬合確認
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              最終補綴物製作前に<br />
              完璧な咬合をもう一度確認します
            </p>
          </div>

          {/* Final Step */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth-shine.svg"
                alt="最終補綴"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              最終補綴
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              一生の歯
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              全ての調整が完了した完璧にパーソナライズされた<br />
              最終補綴物を装着します
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
