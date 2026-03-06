'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  const treatments = [
    {
      icon: '/icons/tooth.svg',
      title: '刷牙',
      badge: '每天必须',
      items: [
        { icon: '/icons/check-icon.svg', text: '可保持牙齿表面清洁' },
        { icon: '/icons/x-icon.svg', text: '无法去除牙结石' },
        { icon: '/icons/x-icon.svg', text: '无法触及牙龈线下方' }
      ]
    },
    {
      icon: '/icons/tooth-shine.svg',
      title: '洗牙',
      badge: '每年1次必须',
      items: [
        { icon: '/icons/check-icon.svg', text: '去除龈上牙结石' },
        { icon: '/icons/check-icon.svg', text: '预防和轻度治疗' },
        { icon: '/icons/x-icon.svg', text: '深层部位有限制' }
      ]
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: '牙龈治疗',
      badge: '必要时追加',
      items: [
        { icon: '/icons/check-icon.svg', text: '龈下深层治疗' },
        { icon: '/icons/check-icon.svg', text: '根面平整术使牙根光滑' },
        { icon: '/icons/check-icon.svg', text: '进展性疾病治疗' }
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
            <div className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-[32px] tracking-[-0.64px] w-full">
              <p className="mb-0">只刷牙和洗牙</p>
              <p>不够吗？</p>
            </div>
            <div className="font-['Pretendard,_sans-serif'] font-semibold leading-[1.4] text-[#e9ebf1] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">两种管理都非常重要</p>
              <p>但完美的管理很困难</p>
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
                  <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                    {treatment.title}
                  </p>
                </div>
                <div className="bg-[#e8f8f0] box-border flex items-center justify-center px-2.5 py-1.5 rounded-lg">
                  <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.4] text-[#15bd66] text-sm tracking-[-0.28px]">
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
                    <p className="font-['Pretendard,_sans-serif'] font-bold text-[17px] text-black tracking-[-0.34px] leading-[1.5]">
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
              <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                洗牙
              </p>
              <div className="bg-[#f3f6fb] box-border flex items-center justify-center px-2 py-1 rounded-lg">
                <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.4] text-[#9298a6] text-[15px] tracking-[-0.3px]">
                  vs
                </p>
              </div>
              <p className="font-['Pretendard,_sans-serif'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                牙龈治疗
              </p>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#006aff] box-border rounded-2xl overflow-hidden w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 w-[52px]"></td>
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      洗牙
                    </td>
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      牙龈治疗
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      范围
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          龈上
                        </p>
                        <p className="font-['Pretendard,_sans-serif'] font-medium text-[#5d5f6d] text-sm tracking-[-0.28px] leading-[1.4]">
                          (牙龈上方)
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          龈下
                        </p>
                        <p className="font-['Pretendard,_sans-serif'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          (牙龈下方)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      内容
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">去除牙结石</p>
                        <p>及牙菌斑</p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          使用刮治器
                        </p>
                        <p className="font-['Pretendard,_sans-serif'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          抗生素软膏
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      目的
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">预防及</p>
                        <p>轻度治疗</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0 text-[#5d5f6d]">预防及</p>
                        <p className="text-[#006aff]">中重度以上</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      必要
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">一般</p>
                        <p>不需要</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">需要</p>
                        <p>局部麻醉</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      适用
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">每年1次</p>
                        <p>19岁以上</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">需要治疗时</p>
                        <p>分次进行</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-['Pretendard,_sans-serif'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      对象
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">所有成人</p>
                        <p>必须管理</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard,_sans-serif'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">有牙龈疾病</p>
                        <p>的情况</p>
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
