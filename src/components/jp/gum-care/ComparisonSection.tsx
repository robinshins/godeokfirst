'use client';

import Image from 'next/image';

export default function ComparisonSection() {
  const treatments = [
    {
      icon: '/icons/tooth.svg',
      title: '歯磨き',
      badge: '毎日必須',
      items: [
        { icon: '/icons/check-icon.svg', text: '歯の表面を清潔に保つことが可能' },
        { icon: '/icons/x-icon.svg', text: '歯石の除去は不可能' },
        { icon: '/icons/x-icon.svg', text: '歯肉縁下には届かない' }
      ]
    },
    {
      icon: '/icons/tooth-shine.svg',
      title: 'スケーリング',
      badge: '年1回必須',
      items: [
        { icon: '/icons/check-icon.svg', text: '歯肉縁上の歯石除去' },
        { icon: '/icons/check-icon.svg', text: '予防および軽度の治療' },
        { icon: '/icons/x-icon.svg', text: '深い部位には限界がある' }
      ]
    },
    {
      icon: '/icons/tooth-loosen.svg',
      title: '歯肉治療',
      badge: '必要時追加',
      items: [
        { icon: '/icons/check-icon.svg', text: '歯肉縁下の深部治療' },
        { icon: '/icons/check-icon.svg', text: 'ルートプレーニングで根を滑らかに' },
        { icon: '/icons/check-icon.svg', text: '進行した疾患の治療' }
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
              <p className="mb-0">歯磨きとスケーリングだけで</p>
              <p>十分ではないですか?</p>
            </div>
            <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] text-[#e9ebf1] text-base tracking-[-0.32px] w-full">
              <p className="mb-0">両方のケアとも非常に重要です</p>
              <p>しかし完璧なケアは難しいです</p>
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
                スケーリング
              </p>
              <div className="bg-[#f3f6fb] box-border flex items-center justify-center px-2 py-1 rounded-lg">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.4] text-[#9298a6] text-[15px] tracking-[-0.3px]">
                  vs
                </p>
              </div>
              <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-black tracking-[-0.48px]">
                歯肉治療
              </p>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#006aff] box-border rounded-2xl overflow-hidden w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 w-[52px]"></td>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      スケーリング
                    </td>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-sm text-center tracking-[-0.28px] leading-[1.4]">
                      歯肉治療
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      範囲
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          歯肉縁上
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#5d5f6d] text-sm tracking-[-0.28px] leading-[1.4]">
                          (歯肉の上)
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          歯肉縁下
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          (歯肉の下)
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      内容
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">歯石およびプラーク</p>
                        <p>除去</p>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <div className="flex flex-col gap-0.5">
                        <p className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                          キュレット使用
                        </p>
                        <p className="font-['Pretendard_JP'] font-medium text-[#006aff] text-sm tracking-[-0.28px] leading-[1.4]">
                          抗生剤軟膏
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      目的
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">予防および</p>
                        <p>軽度の治療</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0 text-[#5d5f6d]">予防および</p>
                        <p className="text-[#006aff]">中等度以上</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      必要性
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">一般的に</p>
                        <p>不要</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">局所麻酔</p>
                        <p>必要</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e9ebf1]">
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      適用
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">年1回</p>
                        <p>満19歳以上</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">治療が必要な時</p>
                        <p>分けて進行</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 font-['Pretendard_JP'] font-semibold text-[#5d5f6d] text-[15px] tracking-[-0.3px] leading-[1.4]">
                      対象
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#5d5f6d] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">すべての成人</p>
                        <p>必須ケア</p>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-['Pretendard_JP'] font-bold text-[#006aff] text-[15px] text-center tracking-[-0.3px] leading-[1.4]">
                        <p className="mb-0">歯肉疾患が</p>
                        <p>ある場合</p>
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
