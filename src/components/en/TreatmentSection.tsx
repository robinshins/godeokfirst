import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Full & Single Dental Implants',
      subtitle: 'Highest number of implant surgeries in Busan Nam-gu',
      description: 'Safe and comfortable high-difficulty digital guide surgery with computer analysis. 10-year guarantee.',
      features: [
        'Advanced digital guide surgery',
        'Conscious sedation sleep anesthesia',
        'Temporary teeth provided immediately after surgery',
        'Surgery performed directly by head dentist',
        'Largest digital equipment inventory in Korea'
      ],
      link: '/en/implant'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Whitening & Laminate',
      subtitle: 'Premium equipment',
      description: 'Safe and effective whitening treatment\n50% discount when combined with scaling',
      features: [
        'Immediate results in 1 session',
        'No damage to teeth',
        'Reasonable pricing',
        'Both professional whitening and laminate available'
      ],
      link: '/en/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Wisdom Tooth Extraction',
      subtitle: 'Safe and rapid extraction',
      description: '3D CT precision diagnosis\nSafe extraction without nerve damage',
      features: [
        'Pain relief anesthesia',
        'Quick recovery',
        'Thorough post-care'
      ],
      link: '/en/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Cavity & Root Canal Treatment',
      subtitle: 'Natural tooth preservation specialist',
      description: 'Treatment that saves rather than extracts\nPrecision treatment by conservation specialist',
      features: [
        'Microscopic precision diagnosis',
        'Curay cavity detection',
        'Pain relief nerve treatment',
        'Insurance applicable'
      ],
      link: '/en/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Gum Care & Scaling',
      subtitle: 'Foundation of overall health',
      description: 'Gum disease affecting 80% of adults\nLifelong healthy teeth through regular care',
      features: [
        'NSK varios 970 specialized equipment',
        'Perioclean management',
        'Pain relief treatment',
        'Insurance applicable once per year'
      ],
      link: '/en/gum-care'
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
