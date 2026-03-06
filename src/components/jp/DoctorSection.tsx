import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: '金東錫（キム・ドンソク）',
      position: '代表院長',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        '統合歯科学修士',
        '保健福祉部認定統合歯科専門医'
      ],
      details: [
        'ソウル大学歯科大学大学院先進歯科学専攻',
        'ソウル大学歯科大学大学院インプラント歯科学専攻',
        '世界口腔インプラント学会理事',
        '大韓顎顔面インプラント学会理事',
        'テキサスA&M大学補綴学研究グループメンバー',
        'オステムインプラント研究顧問',
        'ネオインプラント研究顧問',
        'ハイオッセンインプラント研究顧問',
        '大韓審美歯科学会認定会員',
        '大韓統合歯科学会正会員',
        '大韓保存歯科学会正会員',
        '健康保険審査評価院TMJ治療認定医'
      ]
    },
    {
      name: '裵仁惠（ペ・インヘ）',
      position: '保存歯科専門医',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        '歯科医師・薬剤師二重免許',
        '保健福祉部認定保存歯科専門医'
      ],
      details: [
        '釜山大学歯科病院保存科レジデント',
        '釜山大学歯科大学保存歯科学博士課程',
        '歯学修士首席卒業',
        '大韓保存歯科学会正会員',
        '大韓歯内療法学会正会員',
        '大韓接着歯科学会正会員',
        '大韓歯科材料学会会員',
        '大韓審美歯科学会会員',
        '前グッドスマイル歯科院長',
        '前プラント歯科院長'
      ]
    }
  ];

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="flex justify-center items-center w-[167.981px] h-[24px] gap-[4.8px]">
            <Image
              src="/icons/Logo.svg"
              alt="Medis Dental Clinic"
              width={168}
              height={24}
              className="object-contain"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#64b7ff] uppercase tracking-[2.04px] leading-[32px]">
            専門医間の協診システム
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            慶星メディス歯科
            <br />
            専門医療チーム
          </h2>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-col gap-[60px] mt-[60px]">
          {doctors.map((doctor, index) => (
            <div key={index} className="flex flex-col gap-8">
              {/* Doctor Image */}
              <div className="bg-white rounded-[20px] overflow-hidden shadow-lg h-[280px] relative">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} ${doctor.position}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Doctor Info */}
              <div className="text-white">
                <div className="flex items-center gap-2 mb-5">
                  <h3 className="text-3xl font-bold">{doctor.name}</h3>
                  <span className="text-lg font-bold">{doctor.position}</span>
                </div>

                <div className="text-2xl font-bold mb-8 leading-[1.6]">
                  {doctor.credentials.map((cred, i) => (
                    <p key={i} className={i === 0 ? 'mb-0' : ''}>{cred}</p>
                  ))}
                </div>

                <ul className="space-y-2 text-sm opacity-80">
                  {doctor.details.map((detail, i) => (
                    <li key={i} className="leading-[1.4] pl-5 relative before:content-['•'] before:absolute before:left-0">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
