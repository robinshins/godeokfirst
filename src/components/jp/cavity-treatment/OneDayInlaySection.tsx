'use client';

import Image from 'next/image';

export default function OneDayInlaySection() {
  const benefits = [
    {
      icon: '/icons/clock-fast.svg',
      title: '不快な型取りなし',
      description: '粘着性印象材の代わりに超高速3Dスキャンで\n快適に歯の形態を採得します'
    },
    {
      icon: '/icons/shield.svg',
      title: '精密オーダーメイド補綴',
      description: 'デジタルデータ基盤で\n誤差を最小化したインレーを製作します'
    },
    {
      icon: '/icons/smile.svg',
      title: '検証された専門技工所',
      description: '院長が直接厳選した専門技工所で\n高品質セラミック補綴物を製作します'
    }
  ];

  return (
    <div className="bg-white w-full flex justify-center">
      <div className="box-border flex flex-col gap-[60px] items-start px-4 py-[60px] relative w-full max-w-[430px]">
      <div className="flex flex-col gap-3 items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <h2 className="font-bold leading-[1.35] text-[32px] text-black tracking-[-0.64px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          TRIOS5デジタルスキャンで<br />
          より精密に
        </h2>
        <p className="font-semibold leading-[1.4] text-[#727582] text-base tracking-[-0.32px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          不快な型取りなしに3Dスキャンで<br />
          インレー・クラウンをオーダーメイド製作します
        </p>
      </div>

      <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/images/트리오스5.jpg"
              alt="TRIOS5口腔スキャナー"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              TRIOS5口腔スキャナー
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              3Shapeの最新口腔スキャナーで粘着性印象材なしに超高速3Dスキャンが可能です<br />
              <br />
              水分のある口腔環境でも誤差なく歯の形態を正確に採得し、よりフィットするインレーを製作します
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center overflow-clip relative rounded-[24px] shrink-0 w-full">
          <div className="h-[192px] relative shrink-0 w-full">
            <Image
              src="/cases/충치치료/인레이제거후스캔채득.jpg"
              alt="インレー除去後スキャン採得"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start not-italic p-6 relative shrink-0 text-center w-full">
            <p className="font-bold leading-[1.35] text-2xl text-white tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              治療直後にすぐスキャン
            </p>
            <p className="font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] tracking-[-0.3px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              虫歯除去および形成が完了したらすぐ口腔スキャンを実施します<br />
              <br />
              スキャンデータを専門技工所に転送し精密にオーダーメイド製作されたインレーを完成します
            </p>
          </div>
        </div>

        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white box-border flex flex-col gap-5 items-center justify-center p-6 relative rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] shrink-0 w-full">
            <div className="relative shrink-0 size-[80px] bg-[#e6f7f8] rounded-2xl flex items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </div>
            <p className="font-bold leading-[1.35] text-2xl text-black text-center tracking-[-0.48px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.title}
            </p>
            <p className="font-bold leading-[1.5] text-[#5d5f6d] text-[17px] text-center tracking-[-0.34px] w-full whitespace-pre-line" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
