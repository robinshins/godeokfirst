import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Implants',
      subtitle: 'Digital Guide Implant Surgery',
      description: 'Safe and comfortable with computer-analyzed digital guide surgery. We take responsibility to the end.',
      features: [
        'Advanced digital guide surgery',
        'Sedation (sleep anesthesia) available',
        'Temporary teeth right after surgery',
        'Head doctor performs all surgeries',
        'Full digital equipment'
      ],
      link: '/en/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Dentures / Full-Arch Implants',
      subtitle: 'Custom Precision Prosthetics',
      description: 'From comfortable natural dentures\nto full-arch implants, custom designed',
      features: [
        'Precision custom denture fabrication',
        'Full-arch implants (All-on-4/6)',
        'Implant-supported dentures (overdenture)',
        'Insurance-covered dentures available'
      ],
      link: '/en/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Cavity & Root Canal Treatment',
      subtitle: 'Natural Tooth Preservation',
      description: 'Saving teeth instead of extracting\nPrecise treatment by a specialist',
      features: [
        'Precise cavity diagnosis',
        'Pain-minimized root canal',
        'Natural tooth preservation',
        'Insurance covered'
      ],
      link: '/en/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Wisdom Tooth Extraction',
      subtitle: 'Safe and Quick Extraction',
      description: '3D CT precise diagnosis for\nsafe extraction without nerve damage',
      features: [
        'Pain-minimized anesthesia',
        'Quick recovery',
        'Thorough aftercare'
      ],
      link: '/en/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Gum Care & Scaling',
      subtitle: 'Foundation of Overall Health',
      description: '80% of adults suffer from gum disease\nLifelong healthy teeth with regular care',
      features: [
        'Specialized equipment treatment',
        'Perioclean management',
        'Pain-minimized treatment',
        'Insurance covered once a year'
      ],
      link: '/en/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'TMJ Treatment',
      subtitle: 'TMJ Pain & Jaw Disorders',
      description: 'Clicking or pain in your jaw?\nCustom treatment after precise diagnosis',
      features: [
        'Precise TMJ diagnosis',
        'Occlusal stabilization splint',
        'Physical therapy & medication',
        'Treated by comprehensive dentistry specialist'
      ],
      link: '/en/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Teeth Whitening',
      subtitle: 'Premium Equipment',
      description: 'Safe and effective whitening\nDiscount with scaling',
      features: [
        'Immediate results in 1 session',
        'No tooth damage',
        'Affordable pricing',
        'Osstem Beautis System'
      ],
      link: '/en/whitening'
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
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Our Specialties
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
                      alt="Learn more"
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
                      alt="Learn more"
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
