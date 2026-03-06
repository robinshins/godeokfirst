'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'NSK varios 970 Specialized Equipment',
      description: 'The latest ultrasonic scaler from NSK Japan for precise removal of bacteria deep in the gums',
      features: [
        { label: 'iPiezo Engine', text: 'Automatic frequency adjustment for stable output' },
        { label: 'Ultra-Precision Tip', text: 'Can access deep periodontal pockets' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Periocline Antibiotic Ointment Treatment',
      description: 'Direct injection of minocycline-based local antibiotic deep into the gums for treatment',
      features: [
        { label: 'Clinical Validation', text: 'Proven effective through multiple domestic and international clinical trials' },
        { label: 'One Week Duration', text: 'Single injection maintains efficacy for one week' },
        { label: 'Bacterial Reduction', text: 'Red Complex bacteria reduced from 87.5% to 12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: '4-Step Pain Relief System',
      description: [
        '"I didn\'t know dental treatment could be this comfortable"',
        'A step-by-step pain blocking system that surprises many patients'
      ],
      features: [
        { label: 'Gargle Anesthesia', text: 'First desensitization by gargling entire mouth with anesthetic' },
        { label: 'Topical Anesthesia', text: 'Second blocking by applying anesthetic ointment to injection site' },
        { label: 'Computer-Controlled Injection', text: 'Pain relief injection at constant speed via computer control' },
        { label: 'Nerve Block Anesthesia', text: 'Complete pain blocking for deep areas' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">Kyungsung University Medis</p>
            <p>Gum Treatment System</p>
          </div>
        </div>

        {/* System Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {systems.map((system, index) => (
            <div key={index} className="flex flex-col items-center overflow-hidden rounded-[24px] w-full">
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-[#0b1727] box-border flex flex-col gap-6 items-start p-6 w-full">
                <p className="font-['Pretendard'] font-bold leading-[1.35] text-2xl text-center text-white tracking-[-0.48px] w-full">
                  {system.title}
                </p>

                {Array.isArray(system.description) ? (
                  <div className="font-['Pretendard'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    <p className="mb-0">{system.description[0]}</p>
                    <p>{system.description[1]}</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    {system.description}
                  </p>
                )}

                <div className="flex flex-col gap-2.5 items-start w-full">
                  {system.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="font-['Pretendard'] text-white text-sm leading-[23px] tracking-[-0.56px] w-full">
                      <span className="font-bold">{feature.label}</span>
                      <span> : {feature.text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
