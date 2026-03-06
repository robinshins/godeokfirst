'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  const treatments = [
    {
      icon: '/icons/tooth.svg',
      title: 'Brushing',
      badge: 'Daily Essential',
      items: [
        { icon: '/icons/check-icon.svg', text: 'Can maintain tooth surface cleanliness' },
        { icon: '/icons/x-icon.svg', text: 'Cannot remove tartar' },
        { icon: '/icons/x-icon.svg', text: 'Cannot reach below gum line' }
      ]
    },
    {
      icon: '/icons/tooth-shine.svg',
      title: 'Scaling',
      badge: 'Annual Essential',
      items: [
        { icon: '/icons/check-icon.svg', text: 'Removes supragingival calculus' },
        { icon: '/icons/check-icon.svg', text: 'Prevention and mild treatment' },
        { icon: '/icons/x-icon.svg', text: 'Limited effectiveness for deep areas' }
      ]
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: 'Gum Treatment',
      badge: 'Additional as Needed',
      items: [
        { icon: '/icons/check-icon.svg', text: 'Deep subgingival treatment' },
        { icon: '/icons/check-icon.svg', text: 'Root planing for smooth surfaces' },
        { icon: '/icons/check-icon.svg', text: 'Treats advanced disease' }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0b1727] to-white w-full px-4 py-[60px] relative">
      {/* Background gradient */}
      <div className="absolute h-[711px] left-[calc(50%+5.5px)] top-[217.35px] -translate-x-1/2 w-[480px] pointer-events-none">
        <div className="absolute inset-[-56.26%_-83.33%]">
          <Image
            src="/images/stats-gradient.svg"
            alt=""
            fill
            className="block max-w-none object-contain"
          />
        </div>
      </div>

      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="flex flex-col gap-3 items-center justify-center text-center text-white w-full">
            <div className="font-['Pretendard'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
              <p className="mb-0">Isn&apos;t Brushing and Scaling</p>
              <p>Enough?</p>
            </div>
            <div className="font-['Pretendard'] font-semibold leading-[1.4] text-[#e9ebf1] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">Both are very important,</p>
              <p>but perfect care is difficult</p>
            </div>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col gap-6 items-start w-full">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-4 items-center justify-center p-6 rounded-[20px] w-full">
              {/* Header */}
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <div className="relative shrink-0 w-8 h-8">
                    <Image
                      src={treatment.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-['Pretendard'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                    {treatment.title}
                  </p>
                </div>
                <div className="bg-[#e8f8f0] box-border flex items-center justify-center px-2.5 py-1.5 rounded-lg">
                  <p className="font-['Pretendard'] font-bold leading-[1.4] text-[#15bd66] text-sm tracking-[-0.28px]">
                    {treatment.badge}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="bg-[#f3f6fb] box-border flex flex-col gap-3.5 items-start p-5 rounded-2xl w-full">
                {treatment.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 w-full">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="font-['Pretendard'] font-bold text-[17px] text-black tracking-[-0.34px] leading-[1.5]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Comparison Table */}
          <div className="bg-white border border-[#f3f6fb] box-border flex flex-col gap-4 items-center justify-center p-6 rounded-[20px] w-full">
            {/* Title */}
            <div className="flex gap-3 items-center justify-center w-full">
              <p className="font-['Pretendard'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                Scaling
              </p>
              <div className="bg-[#f3f6fb] box-border flex items-center justify-center px-2 py-1 rounded-lg">
                <p className="font-['Pretendard'] font-bold leading-[1.4] text-[#9298a6] text-[15px] tracking-[-0.3px]">
                  vs
                </p>
              </div>
              <p className="font-['Pretendard'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                Gum Treatment
              </p>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#006aff] box-border rounded-2xl overflow-hidden w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 w-[52px]"></td>
                    <td className="px-2 py-2 font-['Pretendard'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      Scaling
                    </td>
                    <td className="px-2 py-2 font-['Pretendard'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      Gum Treatment
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Range
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          Supragingival
                        </p>
                        <p className="font-['Pretendard'] font-medium text-[#5d5f6d] text-sm tracking-[-0.28px] leading-[1.4]">
                          (Above gums)
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          Subgingival
                        </p>
                        <p className="font-['Pretendard'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          (Below gums)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Method
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Tartar & Plaque</p>
                        <p>Removal</p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          Curette Use
                        </p>
                        <p className="font-['Pretendard'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          Antibiotic Ointment
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Purpose
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Prevention &</p>
                        <p>Mild Treatment</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0 text-[#5d5f6d]">Prevention &</p>
                        <p className="text-[#006aff]">Moderate+</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Anesthesia
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Generally</p>
                        <p>Not Needed</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Local Anesthesia</p>
                        <p>Required</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Schedule
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Annually</p>
                        <p>Age 19+</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">When Needed</p>
                        <p>Divided Sessions</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-['Pretendard'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Target
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">All Adults</p>
                        <p>Essential Care</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Those with</p>
                        <p>Gum Disease</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
