'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhiteningLaminateSection() {
  return (
    <div className="bg-white w-full py-[60px]">
      <div className="max-w-[430px] mx-auto px-4">
        <div className="flex flex-col gap-10 w-full">

          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full text-center">
            <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              Laminate
            </p>
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              高德First牙科的<br />
              <span className="text-[#008095]">无磨除·最少磨除贴面</span>
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              数字精密制作打造自然的微笑
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 贴面란? */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                什么是贴面？
              </p>
              <p className="font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                将0.3~0.7mm厚度的薄瓷片（瓷贴面）贴附在牙齿前面的治疗。
                就像做美甲一样，可以理解为给牙齿&apos;永久美白涂层&apos;。
              </p>
            </div>

            {/* 핵심 优点 */}
            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: '无牙齿磨除', desc: '无磨除或最少磨除(0.3mm)保存天然牙' },
                { title: '自然的颜色', desc: 'VITA MARK II瓷 — 与牙齿最相似的硬度和透明度' },
                { title: '精密定制制作', desc: '基于数字扫描数据无误差的贴合' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 w-full">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="shrink-0 mt-[2px]">
                    <circle cx="11" cy="11" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <path d="M7 11l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex flex-col gap-0.5 text-white">
                    <p className="font-bold text-[16px] leading-[1.5] tracking-[-0.34px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.3px] opacity-75" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 专业性 强调 */}
          <div className="bg-white rounded-[24px] border-2 border-[#008095] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#008095] text-center" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              高德First牙科的 专业性
            </h3>

            <div className="bg-[#008095] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M10 2L2 5.5v5C2 15 5.6 18.6 10 20c4.4-1.4 8-5 8-9.5v-5L10 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  综合牙科专家 亲自 治疗
                </p>
              </div>
              <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5">
                {[
                  '美学结果通过事前数字模拟确认后进行',
                  '设计与脸型和肤色协调的自然微笑',
                  '治疗后不适最小化，可即时调整',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-white/60 text-sm shrink-0 mt-[1px]">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { title: '数字3D扫描', desc: '无需不便的取模，精密数据采集' },
                { title: 'VITA MARK II瓷', desc: '与天然牙最相似的硬度和颜色' },
                { title: '最少磨除·无磨除治疗', desc: '最小化牙齿损伤后保存天然牙' },
              ].map((item, i) => (
                <div key={i} className="bg-[#f3f6fb] rounded-[16px] p-4 flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]">
                    <circle cx="10" cy="10" r="9" stroke="#008095" strokeWidth="1.5" />
                    <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link href="/cn/consultation" className="w-full">
            <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                贴面咨询预约
              </p>
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
