import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: '全口 & 单牙种植',
      subtitle: '釜山南区种植牙手术量第一',
      description: '采用计算机分析的安全舒适高难度数字化导板手术。10年保修。',
      features: [
        '先进的数字化导板手术',
        '意识镇静睡眠麻醉',
        '术后立即提供临时牙',
        '院长亲自手术',
        '韩国最大规模的数字化设备'
      ],
      link: '/cn/implant'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: '美白 & 贴面',
      subtitle: '高端设备',
      description: '安全有效的美白治疗\n与洗牙一起做可享受50%折扣',
      features: [
        '一次治疗立即见效',
        '不伤害牙齿',
        '合理价格',
        '美白和贴面均可选择'
      ],
      link: '/cn/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: '智齿拔除',
      subtitle: '安全快速拔除',
      description: '3D CT精密诊断\n不伤害神经的安全拔除',
      features: [
        '无痛麻醉',
        '快速恢复',
        '彻底的术后护理'
      ],
      link: '/cn/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: '蛀牙 & 根管治疗',
      subtitle: '保留天然牙齿的专家',
      description: '能保留就不拔牙的治疗\n保守治疗专科医生的精密治疗',
      features: [
        '显微镜精密诊断',
        'Curay龋齿检测',
        '无痛神经治疗',
        '可申请保险'
      ],
      link: '/cn/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: '牙周护理 & 洗牙',
      subtitle: '全身健康的基础',
      description: '80%成年人患有牙周疾病\n定期护理保持终生健康牙齿',
      features: [
        'NSK varios 970专用设备',
        'Perioclean管理',
        '无痛治疗',
        '每年可申请一次保险'
      ],
      link: '/cn/gum-care'
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
            专业治疗项目
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
                          *基于计算机分析的数字化导板手术
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
