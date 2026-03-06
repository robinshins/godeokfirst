import Image from 'next/image';

export default function DoctorSection() {
  const doctors = [
    {
      name: '金东锡 院长',
      position: '院长',
      image: '/images/dr-kim-dongseok.jpg',
      credentials: [
        '综合牙科医学硕士',
        '保健福祉部认证 综合牙科专科医生'
      ],
      details: [
        '首尔大学牙医学研究生院 高级牙科学',
        '首尔大学牙医学研究生院 种植牙科学',
        '世界口腔种植学大会 理事',
        '韩国颌面种植学会 理事',
        '德州农工大学修复牙科研究小组 成员',
        'Osstem种植体 研究顾问',
        'Neo种植体 研究顾问',
        'Hiossen种植体 研究顾问',
        '韩国美容牙科学会 认证会员',
        '韩国综合牙科学会 正式会员',
        '韩国保守牙科学会 正式会员',
        '健康保险审查评价院 颞下颌关节治疗认证'
      ]
    },
    {
      name: '裴仁惠 院长',
      position: '保守治疗专科医生',
      image: '/images/dr-bae-inhye.png',
      credentials: [
        '双证：牙医师 & 药剂师',
        '保健福祉部认证 保守治疗专科医生'
      ],
      details: [
        '釜山大学牙科医院 保守治疗科 住院医师',
        '釜山大学牙医学院 保守治疗学博士在读',
        '牙医学硕士 最优秀毕业',
        '韩国保守牙科学会 正式会员',
        '韩国牙髓学会 正式会员',
        '韩国粘接牙科学会 正式会员',
        '韩国牙科材料学会 会员',
        '韩国美容牙科学会 会员',
        'Good Smile牙科 前院长',
        'Plant牙科 前院长'
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
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#64b7ff] tracking-[2.04px] leading-[32px]">
            各专科医生协作
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            庆星美迪斯牙科
            <br />
            专业医疗团队
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
