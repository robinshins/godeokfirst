'use client';

import Link from 'next/link';

export default function TmjTreatmentSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p
            className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            Treatment
          </p>
          <h2
            className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            高德First牙科的<br />
            <span className="text-[#008095]">颞下颌关节治疗系统</span>
          </h2>
          <p
            className="font-medium text-[#727582] text-[16px] leading-[1.6] tracking-[-0.02em]"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            根据症状和原因<br />进行分阶段定制治疗。
          </p>
        </div>

        {/* Treatment Steps */}
        <div className="flex flex-col gap-5">

          {/* Step 1 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">1</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                精密诊断
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              通过全景X光、临床检查、咬合分析，精密诊断颞下颌关节盘的位置和状态、肌肉紧张度、咬合状态。
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['全景X光拍摄', '颞下颌关节触诊与听诊', '咬合分析·张口量测量'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">2</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                急性期治疗
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              疼痛严重的急性期配合药物治疗和物理治疗，快速缓解疼痛、消除炎症。
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['消炎镇痛药·肌肉松弛剂处方', '热敷·冷敷指导', '下颌稳定运动教育'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#008095] rounded-[24px] p-6 flex flex-col gap-5 shadow-xl shadow-[#008095]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">3</span>
              </div>
              <h3
                className="font-bold text-[20px] text-white tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                合板（咬合稳定装置）治疗
              </h3>
            </div>
            <p
              className="text-white/80 text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              根据患者定制合板，分散施加在颞下颌关节上的异常力量，引导关节盘回到正常位置。
            </p>
            <div className="bg-white/10 rounded-[16px] p-4 flex flex-col gap-2">
              {['基于数字咬合分析的定制制作', '防止磨牙·咬紧牙关', '关节盘位置矫正', '通过定期咬合调整实现最优化'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center">
                <span className="text-white font-bold text-[16px]">4</span>
              </div>
              <h3
                className="font-bold text-[20px] text-black tracking-[-0.02em]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                根本原因解决·预防复发
              </h3>
            </div>
            <p
              className="text-[#727582] text-[15px] leading-[1.7]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              疼痛稳定后解决根本原因。通过不正咬合矫正、缺失牙齿修复、生活习惯改善教育等预防复发。
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['咬合调整·修复治疗', '生活习惯改善教育', '定期检查计划'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <Link href="/cn/consultation" className="w-full">
          <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
            <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              颞下颌关节咨询预约
            </p>
          </button>
        </Link>

      </div>
    </div>
  );
}
