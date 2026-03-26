import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(블랙).png"
                alt="コドクファースト歯科"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            コドクファースト歯科が
            <br />
            最高である理由
          </h2>
        </div>

        {/* Reason 1: 統合歯科専門医 */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              保健福祉部認証
              <br />
              統合歯科専門医
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              代表院長が直接相談、手術、アフターケアまで責任を持ちます
            </p>
          </div>

          {/* 保健福祉部認証画像 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
              alt="保健福祉部認証 統合歯科専門医および院長経歴"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 2: インプラント研究諮問委員 */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              オステム、ポイント、デンティス
              <br />
              インプラント研究諮問委員
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              韓国代表インプラント企業の研究諮問委員として活動し
              <br />
              最新技術と設備を直接活用しています
            </p>
          </div>

          {/* 各種認証書画像 */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
              alt="オステム・ポイント・デンティス インプラント研究諮問委員 各種認証書"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reason 3: 最新デジタル設備 */}
        <div className="px-2 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              最新デジタル設備完備
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              3D CT、デジタルスキャナー、デジタルガイド手術システムなど
              <br />
              最先端設備で精密な診療を提供します
            </p>
          </div>

          {/* 施設画像スクロール */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
                alt="3D CTスキャナー設備"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
                alt="デジタルスキャナーとX-rayモニターを備えた診療室"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="最新設備を備えた手術室"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="OSSTEM ユニット完備 診療室"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
