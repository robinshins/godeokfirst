import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: '种植牙',
      subtitle: '数字化引导种植手术',
      description: '通过计算机分析进行高难度数字化引导手术，安全舒适，全程负责。',
      features: [
        '高难度数字化引导手术',
        '意识镇静疗法（睡眠麻醉手术）',
        '术后立即提供临时牙',
        '代表院长亲自手术',
        '数字化设备齐全'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: '假牙 / 全口种植',
      subtitle: '定制精密修复',
      description: '从舒适自然的假牙到\n全口种植牙定制设计',
      features: [
        '精密定制假牙制作',
        '全口种植牙 (All-on-4/6)',
        '种植覆盖义齿',
        '医保适用假牙'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: '龋齿治疗 & 根管治疗',
      subtitle: '天然牙保存专家',
      description: '拔牙前先保牙\n综合牙科专家的精密治疗',
      features: [
        '精密龋齿诊断',
        '疼痛缓解根管治疗',
        '天然牙保存',
        '医保适用'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: '智齿拔除',
      subtitle: '安全快速的拔牙',
      description: '3D CT精密诊断\n无神经损伤安全拔除',
      features: [
        '疼痛缓解麻醉',
        '快速恢复',
        '彻底的术后管理'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: '牙周治疗 & 洁牙',
      subtitle: '全身健康的起点',
      description: '80%的成人患有牙周疾病\n通过定期管理保持终身健康牙齿',
      features: [
        '专用设备治疗',
        'Perio Clean管理',
        '疼痛缓解治疗',
        '每年1次医保适用'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: '颞下颌关节治疗',
      subtitle: '颞下颌关节疼痛·开口障碍专科',
      description: '下巴有响声或疼痛吗？\n精密诊断后定制治疗',
      features: [
        '颞下颌关节精密诊断',
        '咬合稳定装置（合板）',
        '物理治疗·药物治疗',
        '综合牙科专家亲自诊疗'
      ],
      link: '/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: '牙齿美白',
      subtitle: '拥有顶级设备',
      description: '安全有效的美白治疗\n与洁牙同享优惠',
      features: [
        '1次治疗即见效果',
        '不损伤牙齿',
        '合理价格',
        '奥齿泰Beautis系统'
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
              alt="高德First牙科"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            专业诊疗领域
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
                      alt="查看详情"
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
                      alt="查看详情"
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
