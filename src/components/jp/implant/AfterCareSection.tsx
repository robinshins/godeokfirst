'use client';

import Image from 'next/image';

export default function AfterCareSection() {
  const benefits = [
    {
      title: 'インプラント管理が必要な方',
      desc: 'インプラント周囲炎予防のための有害菌分析'
    },
    {
      title: '歯周病・口臭がひどい方',
      desc: '歯周疾患原因菌の精密分析およびオーダーメイドケア'
    },
    {
      title: '全身の健康が心配な方',
      desc: '口腔-腸連結軸分析で全身健康チェック'
    }
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="コドクファースト歯科"
              width={168}
              height={24}
              className="w-full h-full brightness-0 invert"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#6eb7bc] tracking-[3px] uppercase">
              SCIENTIFIC AFTERCARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              埋入よりも重要なのは<br />
              アフターケアです
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              &quot;一生お使いいただけるよう最後まで責任を持ちます&quot;<br />
              <span className="text-white/70 text-[14px]">韓国歯科初 NGS微生物検査導入</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">

          {/* マクロジェン協力バッジ */}
          <div className="w-full flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
              <p className="text-[#6eb7bc] text-[13px] font-bold" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                🧬 グローバルゲノム分析企業 <span className="text-white">マクロジェン</span> 協力
              </p>
            </div>
          </div>

          {/* 微生物検査画像 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[380px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/macrogen-microbiome-test.png"
                alt="マクロジェン NGS微生物検査"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-gradient-to-br from-[#008fd2] to-[#006aaa] box-border flex flex-col gap-3 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold leading-[1.35] not-italic text-[20px] text-white tracking-[-0.4px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                NGS次世代塩基配列分析
              </p>
              <p className="font-medium leading-[1.6] not-italic text-white/90 text-[14px] tracking-[-0.28px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                口腔内700種以上の微生物を精密分析し<br />
                虫歯・歯周炎原因菌を事前に把握します
              </p>
            </div>
          </div>

          {/* なぜ歯科で微生物検査を？ */}
          <div className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              なぜ歯科で微生物検査を？
            </p>
            <p className="text-white/90 text-[14px] leading-[1.7]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              口腔は <span className="text-[#6eb7bc] font-bold">&quot;体の健康が始まる入口&quot;</span>です。口腔内の有害菌は単に口の中にとどまらず、血流に乗って全身に広がり <span className="text-white font-bold">心血管疾患、糖尿病、認知症</span>などに影響を与える可能性があります。
            </p>
          </div>

          {/* 検査結果用紙画像 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[250px] relative shrink-0 w-full">
              <Image
                src="/images_official/macrogen-test-result.png"
                alt="微生物検査結果用紙"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-center p-4 relative shrink-0 w-full">
              <p className="font-bold text-white text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                個人別オーダーメイド分析レポート提供
              </p>
              <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                検査後2〜3週間以内に詳細結果をご案内
              </p>
            </div>
          </div>

          {/* 全身健康への影響 */}
          <div className="flex flex-col items-center overflow-hidden rounded-2xl relative shrink-0 w-full">
            <div className="h-[340px] relative shrink-0 w-full bg-white">
              <Image
                src="/images_official/microbiome-health-impact.png"
                alt="微生物が全身健康に与える影響"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-[#1a2a3a] box-border flex flex-col gap-2 items-start p-5 relative shrink-0 w-full">
              <p className="font-bold text-white text-[16px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                口腔微生物 → 全身健康への連結
              </p>
              <p className="text-[#a0c4d4] text-[13px] leading-[1.6]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                口腔内の有害菌が血管を通じて全身に広がり<br />
                様々な全身疾患に影響を与えます
              </p>
            </div>
          </div>

          {/* 検査推薦対象 */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              このような方におすすめします
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#008fd2] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white text-[15px] mb-1" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.title}
                      </p>
                      <p className="text-[#a0c4d4] text-[13px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 検査プロセス */}
          <div className="w-full">
            <p className="text-[#6eb7bc] text-[13px] font-bold mb-4 text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              検査は簡単です
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">💧</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>唾液採取</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>3分所要</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">🧬</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>NGS分析</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>マクロジェン</p>
              </div>
              <div className="text-[#6eb7bc]">→</div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="bg-[#008fd2] rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-white text-lg">📋</span>
                </div>
                <p className="text-white text-[13px] font-bold text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>結果相談</p>
                <p className="text-[#a0c4d4] text-[11px] text-center" style={{ fontFamily: '"NanumSquare", sans-serif' }}>2〜3週間後</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
