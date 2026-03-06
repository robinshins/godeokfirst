'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function WhiteningLaminateSection() {
  const [showImages] = useState(false);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              なぜ？キョンソン大学メディス<br />
              <span className="text-[#006aff]">無削除/最小削除デジタルラミネート</span>なのか？
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              最先端デジタル設備と2年保証で<br />
              完璧な笑顔をお作りします
            </p>
          </div>

          {/* 실제 Before/After 이미지 */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              実際の施術ケース
            </h3>

            {/* Case 1 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before - 상단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-before.jpg"
                      alt="ラミネート Before"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/jp/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="ロック"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">ログインしてBefore写真を見る</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After - 하단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-after.jpg"
                      alt="ラミネート After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before - 상단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-before.jpg"
                      alt="ラミネート Before"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/jp/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="ロック"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">ログインしてBefore写真を見る</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Before
                      </p>
                    </div>
                  </div>
                </div>

                {/* After - 하단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-after.jpg"
                      alt="ラミネート After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}
            {!showImages && (
              <Link href="/jp/login" className="w-full">
                <button className="bg-white border border-[#e9ebf1] rounded-[18px] h-14 px-6 py-3 flex items-center justify-center w-full hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-[#006aff]">
                    ログイン後すべて見る
                  </p>
                </button>
              </Link>
            )}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 라미네이트란? */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  ラミネートとは？
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  0.3~0.7mmの厚さの薄いセラミック（ポーセレン）片を歯の前面に貼り付ける施術です<br />
                  爪にネイルアートをするように、歯に「永久的なホワイトニングコーティング」を施すとお考えください
                </p>
              </div>
            </div>

            {/* 핵심 장점 3가지 */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: '24時間で完成', desc: '迅速な施術で早期に日常復帰（忙しい会社員OK!）' },
                { title: '2年保証制', desc: '破損や変色時はいつでもすぐに修正可能' },
                { title: '合理的な価格', desc: '透明な価格政策と分割払い可能' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 디지털 제작 과정 */}
          <div className="flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
              デジタル精密製作システム
            </h3>

            {/* 3D 디지털 스캔 영상 */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/digital-laminate-3d.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-3">
                <div>
                  <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                    1段階: デジタル精密バーチャル診断
                  </p>
                  <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                    不快な型取りなしに口腔スキャナーで歯を3Dスキャンします。デジタルデータで正確な診断とシミュレーションが可能です。
                  </p>
                </div>

                {/* 가상진단 특징 */}
                <div className="bg-white rounded-[12px] p-3 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">診断結果を見て実施:</span> バーチャル診断で施術前に結果を事前確認
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">お顔との調和診断:</span> 白すぎたり人工的に見える心配なく、顔に調和した自然な笑顔デザイン
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 밀링머신 제작 영상 */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/milling-machine.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  2段階: ミリングマシンで迅速製作
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  最先端ミリングマシンがVITA MARK IIブロックを精密加工します。自然歯に最も類似した強度のセラミックで24時間以内に完成します。
                </p>
              </div>
            </div>

            {/* 라미네이트 부착 영상 */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/laminate-fitting.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  3段階: ラミネート精密装着
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  製作前に補綴物を事前確認後、微細顕微鏡を使用して無削除または最小削除で精密に装着します。
                </p>
              </div>
            </div>
          </div>

          {/* 전문성 강조 */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              メディス歯科の専門性
            </h3>

            {/* 심미치과 펠로우 사진 */}
            <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-[16/10]">
              <div className="relative w-full h-full -translate-x-[5%]">
                <Image
                  src="/images/cosmetic-dentistry-fellow.jpg"
                  alt="審美歯科フェロー修了証"
                  fill
                  className="object-cover scale-[1.5]"
                />
              </div>
            </div>

            {/* 펠로우 설명 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🏆</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  大韓審美歯科学会フェロー会員
                </p>
              </div>
              <div className="flex flex-col gap-2 text-white">
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] opacity-90">
                  <span className="font-bold">フェロー（Fellow）</span>は一般専門医より一段階高い最上位専門家等級です
                </p>
                <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">10年以上の専門経歴</span> + 100件以上の成功ケース
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">論文発表および学術活動</span>が認められた専門家
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">審美歯科学会の審査</span>を通過した最高水準の実力
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: '🏭', title: '院内歯科技工士協業システム', desc: '院内技工所で即時製作および修正可能' },
                { icon: '🔬', title: '微細顕微鏡無削除施術', desc: '歯の損傷を最小化し自然歯を保存' },
                { icon: '💎', title: 'VITA MARK IIプレミアムブロック', desc: '自然歯に最も類似した強度と色調' }
              ].map((item, index) => (
                <div key={index} className="bg-[#f3f6fb] rounded-[16px] p-4 flex items-start gap-3">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                      {item.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/jp/consultation" className="w-full">
            <button className="bg-[#006aff] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#0052cc] transition-colors">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white">
                ラミネート相談予約
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
