'use client';

import Link from 'next/link';

export default function TmjTreatmentSection() {
  return (
    <div className="bg-[#f8f9fb] w-full py-[80px] px-5">
      <div className="max-w-[430px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-[#008095] font-bold text-[13px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Pretendard, sans-serif' }}>Treatment</p>
          <h2 className="font-bold text-[30px] leading-[1.3] tracking-[-0.04em] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            コドクファースト歯科の<br />
            <span className="text-[#008095]">顎関節治療システム</span>
          </h2>
          <p className="font-medium text-[#727582] text-[16px] leading-[1.6] tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            症状と原因に応じて<br />段階別オーダーメイド治療を行います。
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center"><span className="text-white font-bold text-[16px]">1</span></div>
              <h3 className="font-bold text-[20px] text-black tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>精密診断</h3>
            </div>
            <p className="text-[#727582] text-[15px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              パノラマX-ray、臨床検査、咬合分析を通じて顎関節ディスクの位置と状態、筋肉の緊張度、咬合状態を精密に診断します。
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['パノラマX-ray撮影', '顎関節触診および聴診', '咬合分析・開口量測定'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" /><path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center"><span className="text-white font-bold text-[16px]">2</span></div>
              <h3 className="font-bold text-[20px] text-black tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>急性期治療</h3>
            </div>
            <p className="text-[#727582] text-[15px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              痛みがひどい急性期には薬物治療と物理治療を併行し、迅速に痛みを軽減し炎症を鎮めます。
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['消炎鎮痛剤・筋弛緩剤処方', '温湿布・冷湿布ガイド', '顎安定運動法の教育'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" /><path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#008095] rounded-[24px] p-6 flex flex-col gap-5 shadow-xl shadow-[#008095]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><span className="text-white font-bold text-[16px]">3</span></div>
              <h3 className="font-bold text-[20px] text-white tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>スプリント（咬合安定装置）治療</h3>
            </div>
            <p className="text-white/80 text-[15px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              患者オーダーメイドのスプリントを製作し、顎関節にかかる異常な力を分散させ、関節ディスクが正常位置に戻るよう誘導します。
            </p>
            <div className="bg-white/10 rounded-[16px] p-4 flex flex-col gap-2">
              {['デジタル咬合分析基盤のオーダーメイド製作', '歯ぎしり・食いしばり防止', '関節ディスク位置矯正', '定期的な咬合調整で最適化'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" /><path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <p className="text-[14px] font-semibold text-white/90" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 flex flex-col gap-5 shadow-[0_4px_20px_-4px_rgba(21,26,36,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008095] flex items-center justify-center"><span className="text-white font-bold text-[16px]">4</span></div>
              <h3 className="font-bold text-[20px] text-black tracking-[-0.02em]" style={{ fontFamily: 'Pretendard, sans-serif' }}>根本原因解決・再発防止</h3>
            </div>
            <p className="text-[#727582] text-[15px] leading-[1.7]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              痛みが安定した後は根本原因を解決します。不正咬合矯正、欠損歯補綴、生活習慣改善教育などで再発を予防します。
            </p>
            <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-2">
              {['咬合調整・補綴治療', '生活習慣改善教育', '定期検査プログラム'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" stroke="#008095" strokeWidth="1.5" /><path d="M5 8L7 10L11 6" stroke="#008095" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <p className="text-[14px] font-semibold text-[#2d3340]" style={{ fontFamily: 'Pretendard, sans-serif' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="/jp/consultation" className="w-full">
          <button className="bg-[#008095] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#006d80] transition-colors border-none">
            <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              顎関節相談を予約する
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}
