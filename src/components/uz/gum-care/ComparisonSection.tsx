'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  const treatments = [
    {
      icon: '/icons/tooth.svg',
      title: 'Tish yuvish',
      badge: 'Har kuni shart',
      items: [
        { icon: '/icons/check-icon.svg', text: 'Tish yuzasini toza saqlash mumkin' },
        { icon: '/icons/x-icon.svg', text: 'Tish toshlarini olib tashlash mumkin emas' },
        { icon: '/icons/x-icon.svg', text: 'Milk chizig\'i ostiga yetmaydi' }
      ]
    },
    {
      icon: '/icons/tooth-shine.svg',
      title: 'Tish tozalash',
      badge: 'Yiliga 1 marta shart',
      items: [
        { icon: '/icons/check-icon.svg', text: 'Milk ustidagi tish toshlarini olib tashlash' },
        { icon: '/icons/check-icon.svg', text: 'Oldini olish va engil davolash' },
        { icon: '/icons/x-icon.svg', text: 'Chuqur joylar uchun cheklangan' }
      ]
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: 'Milk davolash',
      badge: 'Kerak bo\'lganda',
      items: [
        { icon: '/icons/check-icon.svg', text: 'Milk ostidagi chuqur davolash' },
        { icon: '/icons/check-icon.svg', text: 'Ildiz silliqlashtirish bilan ildizni tekislash' },
        { icon: '/icons/check-icon.svg', text: 'Og\'ir kasalliklarni davolash' }
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
            <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
              <p className="mb-0">Tish yuvish va tozalash</p>
              <p>yetarli emasmi?</p>
            </div>
            <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#e9ebf1] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">Ikkalasi ham juda muhim</p>
              <p>Lekin mukammal parvarish qiyin</p>
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
                  <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                    {treatment.title}
                  </p>
                </div>
                <div className="bg-[#e8f8f0] box-border flex items-center justify-center px-2.5 py-1.5 rounded-lg">
                  <p className="font-['Pretendard_JP'] font-bold leading-[1.4] text-[#15bd66] text-sm tracking-[-0.28px]">
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
                    <p className="font-['Pretendard_JP'] font-bold text-[17px] text-black tracking-[-0.34px] leading-[1.5]">
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
              <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                Tish tozalash
              </p>
              <div className="bg-[#f3f6fb] box-border flex items-center justify-center px-2 py-1 rounded-lg">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.4] text-[#9298a6] text-[15px] tracking-[-0.3px]">
                  vs
                </p>
              </div>
              <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                Milk davolash
              </p>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#006aff] box-border rounded-2xl overflow-hidden w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 w-[52px]"></td>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      Tish tozalash
                    </td>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      Milk davolash
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Soha
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          Milk usti
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#5d5f6d] text-sm tracking-[-0.28px] leading-[1.4]">
                          (supragingival)
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          Milk osti
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          (subgingival)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Mazmun
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Tish toshi va</p>
                        <p>yog'ni olib tashlash</p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          Kyuret ishlatish
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          Antibiotik malham
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Maqsad
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Oldini olish va</p>
                        <p>engil davolash</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0 text-[#5d5f6d]">Oldini olish va</p>
                        <p className="text-[#006aff]">o'rta-og'ir darajalar</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Kerak
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Odatda</p>
                        <p>kerak emas</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Mahalliy anesteziya</p>
                        <p>kerak</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Qo'llash
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Yiliga 1 marta</p>
                        <p>19 yoshdan katta</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Davolash kerak bo'lganda</p>
                        <p>bo'lib o'tkaziladi</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      Ob'ekt
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Barcha kattalarga</p>
                        <p>zarur parvarish</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">Milk kasalligi</p>
                        <p>mavjud bo'lganda</p>
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
