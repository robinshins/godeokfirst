import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'インプラント',
      subtitle: 'デジタルガイドインプラント手術',
      description: 'コンピュータ分析による高難度デジタルガイド手術で安全かつ快適に、最後まで責任を持ちます。',
      features: [
        '高難度デジタルガイド手術',
        '意識下鎮静法による無痛麻酔手術',
        '手術直後の仮歯提供',
        '代表院長による直接手術',
        'デジタル設備完備'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: '入れ歯 / 全顎インプラント',
      subtitle: 'オーダーメイド精密補綴',
      description: '快適で自然な入れ歯から\n全顎インプラントまでオーダーメイド設計',
      features: [
        '精密オーダーメイド入れ歯製作',
        '全顎インプラント（All-on-4/6）',
        'インプラント入れ歯（オーバーデンチャー）',
        '保険適用入れ歯可能'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: '虫歯治療 & 根管治療',
      subtitle: '天然歯保存専門',
      description: '抜歯の代わりに救う治療\n統合歯科専門医の精密治療',
      features: [
        '精密虫歯診断',
        '痛み軽減の根管治療',
        '天然歯保存',
        '保険適用'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: '親知らず抜歯',
      subtitle: '安全かつ迅速な抜歯',
      description: '3D CT精密診断で\n神経損傷なく安全に抜歯',
      features: [
        '痛み軽減麻酔実施',
        '早い回復',
        '徹底したアフターケア'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: '歯周病治療 & スケーリング',
      subtitle: '全身健康の始まり',
      description: '成人の80%が罹患する歯周病\n定期管理で生涯健康な歯を',
      features: [
        '特殊設備活用治療',
        'ペリオクリン管理',
        '痛み軽減治療',
        '年1回保険適用'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: '顎関節治療',
      subtitle: '顎関節痛・開口障害専門',
      description: '顎から音がしたり痛みがありますか？\n精密診断後オーダーメイド治療します',
      features: [
        '顎関節精密診断',
        '咬合安定装置（スプリント）',
        '物理治療・薬物治療',
        '統合歯科専門医による直接診療'
      ],
      link: '/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'ホワイトニング',
      subtitle: '最高級設備保有',
      description: '安全で効果的なホワイトニング施術\nスケーリングと合わせて割引',
      features: [
        '1回の施術で即効果',
        '歯へのダメージなし',
        'リーズナブルな価格',
        'オステム ビューティス システム'
      ],
      link: '/whitening'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="コドクファースト歯科"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            専門診療分野
          </h2>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col -mx-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`px-4 ${
                index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'
              }`}
            >
              {/* Card Header - Icon + Title */}
              <div className="relative mb-12 pt-10">
                <div className="flex flex-col gap-4">
                  {/* Icon Box - 80x80 */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="h-20 w-auto object-contain -mt-[18px]"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[33px] font-bold text-[#292a2f] leading-[1.35] tracking-[-0.72px]">
                      {treatment.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[17px] font-bold text-[#727582] leading-[1.5] tracking-[-0.36px]">
                        {treatment.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow Button - 64x64 - Absolute positioned */}
                {treatment.link ? (
                  <Link
                    href={treatment.link}
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="詳しく見る"
                      width={32}
                      height={84}
                    />
                  </Link>
                ) : (
                  <button
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="詳しく見る"
                      width={32}
                      height={84}
                    />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-5">
                {/* Description */}
                <p className="text-[20px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line tracking-[-0.48px] w-[343px]">
                  {treatment.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col">
                  {treatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`py-4 ${
                        idx !== treatment.features.length - 1
                          ? 'border-b border-[#e9ebf1]'
                          : ''
                      }`}
                    >
                      <p className="text-[16px] font-bold text-[#5d5f6d] leading-[1.5] tracking-[-0.36px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom padding for card */}
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
