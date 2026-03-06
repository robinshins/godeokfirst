import Image from 'next/image';

export default function StatsSection() {
  const stats = [
    {
      label: '10 yil davomida',
      value: '0',
      unit: 'ta',
      description: 'Qayta operatsiya muvaffaqiyati'
    },
    {
      label: 'Jami implant',
      value: '10,000',
      unit: '+',
      description: 'O\'rnatilgan soni'
    },
    {
      label: 'Raqamli navigatsiya',
      value: '1,500',
      unit: '+',
      description: 'Aniq tashxisli operatsiya'
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="max-w-[430px] mx-auto px-4 py-16">
        <div className="flex flex-col gap-10">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-[28px] font-bold text-[#111827] leading-[1.3]">Raqamlarda muvaffaqiyat</h2>
            <p className="text-[#6b7280]">Ishonchli tajriba va natija</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#f8f9fa] p-8 rounded-[24px] flex flex-col items-center text-center gap-2">
                <span className="text-[#6b7280] text-sm">{stat.label}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[48px] font-black text-[#006aff]">{stat.value}</span>
                  <span className="text-xl font-bold text-[#006aff]">{stat.unit}</span>
                </div>
                <span className="text-[#374151] font-bold">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

