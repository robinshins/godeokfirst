import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: '全体・部分インプラント',
      subtitle: '釜山南区インプラント手術件数No.1',
      description: 'コンピューター分析による安全で快適な高難度デジタルガイド手術。10年保証。',
      features: [
        '先進デジタルガイド手術',
        '意識下鎮静睡眠麻酔',
        '手術直後に仮歯提供',
        '代表院長が直接手術',
        '韓国最大規模のデジタル機器保有'
      ],
      link: '/jp/implant'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'ホワイトニング・ラミネート',
      subtitle: 'プレミアム機器',
      description: '安全で効果的なホワイトニング治療\nスケーリングと併用で50%割引',
      features: [
        '1回で即効果',
        '歯を傷めない',
        'リーズナブルな価格',
        'オフィスホワイトニング＆ラミネート可能'
      ],
      link: '/jp/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: '親知らず抜歯',
      subtitle: '安全で迅速な抜歯',
      description: '3D CT精密診断\n神経損傷のない安全な抜歯',
      features: [
        '無痛麻酔',
        '早期回復',
        '徹底したアフターケア'
      ],
      link: '/jp/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: '虫歯・根管治療',
      subtitle: '自然歯保存専門',
      description: '抜歯ではなく保存する治療\n保存専門医の精密治療',
      features: [
        '顕微鏡精密診断',
        'Curay虫歯検出',
        '無痛神経治療',
        '保険適用可能'
      ],
      link: '/jp/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: '歯周病治療・スケーリング',
      subtitle: '全身健康の基礎',
      description: '成人の80%が罹患する歯周病\n定期ケアで生涯健康な歯を',
      features: [
        'NSK varios 970専門機器',
        'ペリオクリーン管理',
        '無痛治療',
        '年1回保険適用可能'
      ],
      link: '/jp/gum-care'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-8 relative shrink-0 w-40">
            <Image
              src="/icons/Logo_black.svg"
              alt="Kyungsung Medis Dental Clinic"
              width={160}
              height={32}
              className="w-full h-full"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Specialized Treatments
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
                      className="w-full h-full object-contain"
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
                      {index === 0 && (
                        <p className="text-[13px] text-[#9a9ca8] leading-[1.5] tracking-[-0.28px]">
                          *Based on computer-guided digital guide surgery
                        </p>
                      )}
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
                      alt="Learn more"
                      width={32}
                      height={32}
                    />
                  </Link>
                ) : (
                  <button
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Learn more"
                      width={32}
                      height={32}
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
