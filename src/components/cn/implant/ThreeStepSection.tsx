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
                高德First牙科
              </text>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-[32px] font-bold leading-[1.35] tracking-[-0.02em] text-black">
              高德First牙科独有的<br />
              3阶段临时牙
            </h2>
            <p className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#727582]">
              不是一次临时牙就结束<br />
              通过3个阶段的精密调整<br />
              打造如同自己牙齿般的舒适感
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
                alt="第1阶段临时"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              第1阶段临时
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              即刻恢复
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              手术后立即安装<br />
              可即刻恢复日常生活
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/crown.svg"
                alt="第2阶段咬合稳定"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              第2阶段咬合稳定
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              精密咬合调整
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              2周后根据个人情况<br />
              精细调整咬合状态
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/implant-group.svg"
                alt="第3阶段最终临时"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              第3阶段最终临时
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              完美咬合确认
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              最终修复体制作前<br />
              再次确认完美咬合
            </p>
          </div>

          {/* Final Step */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-[14px] items-center">
            <div className="w-20 h-20">
              <Image
                src="/icons/tooth-shine.svg"
                alt="最终修复"
                width={80}
                height={80}
              />
            </div>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#008095]">
              最终修复
            </p>
            <p className="text-2xl font-bold leading-[1.35] tracking-[-0.02em] text-black">
              终身我的牙齿
            </p>
            <p className="text-[17px] font-bold leading-[1.5] tracking-[-0.02em] text-[#5d5f6d] text-center">
              安装所有调整完成后<br />
              完美个性化的最终修复体
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
