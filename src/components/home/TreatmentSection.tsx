import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: '임플란트',
      subtitle: '디지털 가이드 임플란트 수술',
      description: '컴퓨터분석을 통한 고난도 디지털 가이드 수술로 안전하고 편안하게, 끝까지 책임집니다.',
      features: [
        '고난도 디지털 가이드 수술',
        '의식하진정요법을 통한 수면마취수술',
        '수술직후 임시치아 제공',
        '대표원장 직접 수술',
        '디지털 장비 완비'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: '틀니 / 전체 임플란트',
      subtitle: '맞춤형 정밀 보철',
      description: '편안하고 자연스러운 틀니부터\n전체 임플란트까지 맞춤 설계',
      features: [
        '정밀 맞춤 틀니 제작',
        '전체 임플란트 (All-on-4/6)',
        '임플란트 틀니(오버덴쳐)',
        '보험 적용 틀니 가능'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: '미백 & 라미네이트',
      subtitle: '최고급 장비 보유',
      description: '안전하고 효과적인 미백 시술\n스케일링과 함께 할인',
      features: [
        '1회 시술로 즉시 효과',
        '치아 손상 없음',
        '합리적인 가격',
        '전문가 미백과 라미네이트 모두 가능'
      ],
      link: '/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: '사랑니 발치',
      subtitle: '안전하고 신속한 발치',
      description: '3D CT 정밀 진단으로\n신경 손상없이 안전하게 발치',
      features: [
        '통증 완화 마취 시행',
        '빠른 회복',
        '철저한 사후관리'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: '충치치료 & 신경치료',
      subtitle: '자연치아 보존 전문',
      description: '발치 대신 살리는 치료\n통합치의학전문의의 정밀 치료',
      features: [
        '미세현미경 정밀 진단',
        '큐레이 충치 발견',
        '통증 완화 신경치료',
        '보험 적용'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: '잇몸치료 & 스케일링',
      subtitle: '전신 건강의 시작',
      description: '성인 80%가 앓는 잇몸질환\n정기적 관리로 평생 건강한 치아',
      features: [
        '특수장비 활용 치료',
        '페리오클린 관리',
        '통증 완화 치료',
        '연 1회 보험 적용'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: '틀니',
      subtitle: '맞춤형 정밀 틀니',
      description: '편안하고 자연스러운 틀니\n환자 맞춤형 정밀 제작',
      features: [
        '정밀 맞춤 제작',
        '자연스러운 외관',
        '편안한 착용감',
        '보험 적용 가능'
      ],
      link: '/denture'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-8 relative shrink-0">
            <Image
              src="/images/goduk_images/고덕퍼스트치과로고 1.svg"
              alt="고덕퍼스트치과"
              width={160}
              height={32}
              className="h-full w-auto object-contain"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            전문 진료 분야
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
                      alt="자세히 보기"
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
                      alt="자세히 보기"
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
