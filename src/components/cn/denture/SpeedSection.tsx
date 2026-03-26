'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function SpeedSection() {
  return (
    <div className="w-full relative flex justify-center bg-[#0b1727] overflow-hidden">
      {/* Background gradient effect - full width */}
      <div className="absolute h-[711px] left-[calc(50%+0.5px)] top-[calc(50%+75.5px)] -translate-x-1/2 -translate-y-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/speed-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      {/* Content container with max-width */}
      <div className="box-border flex flex-col gap-10 items-start px-5 py-[70px] relative w-full max-w-[430px]">
        <FadeInSection className="flex flex-col gap-6 items-center relative shrink-0 w-full z-10">
          {/* Logo */}
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트牙科-로고-(화이트).png"
              alt="高德First牙科"
              width={168}
              height={24}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          {/* Title */}
          <h2 className="font-bold leading-[1.35] not-italic text-[#fefeff] text-[32px] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            修复 决定品质的<br />
            技工所的差异
          </h2>

          {/* Subtitle */}
          <p className="font-semibold leading-[1.5] not-italic text-[#6eb7bc] text-base text-center tracking-[-0.02em] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
            有比院内技工所更好的选择。
          </p>
        </FadeInSection>

        {/* Comparison Cards */}
        <FadeInSection delay={100} className="flex flex-col gap-4 w-full z-10">
          {/* 院内 技工所 方式 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              院内 技工所 运营 牙科
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  小规模 院内 技工所 → 专业性 限制
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  技工师1~2人规模难以验证
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✕</span>
                <p className="text-[#a0c4d4] text-[14px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  最新 设备·材料 更新 缓慢
                </p>
              </div>
            </div>
          </div>

          {/* VS */}
          <div className="flex justify-center">
            <div className="bg-[#008095] rounded-full px-4 py-1">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
          </div>

          {/* 高德First牙科 */}
          <div className="bg-gradient-to-r from-[#008095]/20 to-[#6eb7bc]/20 backdrop-blur-sm rounded-2xl p-5 border border-[#008095]/30">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              高德First牙科
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  通过大学医院和同事院长网络精选的专业技工所
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  配备最新CAD/CAM设备和专业人力
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  与院长紧密沟通实现精密咬合
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6eb7bc]">✓</span>
                <p className="text-white text-[14px] font-semibold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                  修复体品质不满意时立即重新制作应对
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bottom Note */}
        <FadeInSection delay={200} className="w-full z-10">
          <div className="bg-[#008095]/10 border border-[#008095]/20 rounded-xl p-5">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-2" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              💡 好的技工所就是实力
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              得益于担任大学医院客座教授期间积累的同事教授和院长们的网络，<span className="text-[#6eb7bc] font-bold">精选了经过验证的专业技工所</span>使用。保证比小规模院内技工所更高水平的修复体品质。
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
