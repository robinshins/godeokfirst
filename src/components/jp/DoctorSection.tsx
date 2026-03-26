import Image from 'next/image';

export default function DoctorSection() {
  const doctor = {
    name: 'イ・ドンヒョン',
    position: '代表院長',
    image: '/images/goduk_images/이동현원장님.jpeg',
    credentials: [
      '歯学修士',
      '統合歯科専門医（保健福祉部認証）'
    ],
    details: [
      '朝鮮大学校歯科病院 客員教授',
      'ソウル大学校歯学大学院 インプラント歯学 優秀賞修了',
      'ソウル大学校歯学大学院 高級歯学修了',
      'ソウル 京畿高等学校卒業',
      '京畿高等学校 同門歯科',
      '大韓統合歯学学会 正会員',
      'オステム、ポイント、デンティス インプラント研究諮問委員',
      'Pennsylvania univ. 根管治療課程修了',
      'ATC Implant Advanced 課程修了',
      'KAYA 歯科病院 Prosthetic Course 修了',
      'JPDA 小児歯科 臨床研修会修了',
      '顎関節障害教育研究会修了',
      '前）イピョナンセサン歯科 院長',
      '前）ファーストイン歯科 院長'
    ]
  };

  return (
    <div id="doctor" style={{ background: 'linear-gradient(161deg, #21314E 13.86%, #1a2740 19.07%, #0f1a2d 28.55%)' }}>
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="コドクファースト歯科"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <p className="text-[17px] font-['Pretendard_JP'] font-bold text-[#4DC8D8] uppercase tracking-[2.04px] leading-[32px]">
            統合歯科専門医 イ・ドンヒョン院長
          </p>
          <h2 className="text-[36px] font-['Pretendard_JP'] font-bold text-white leading-[1.35] tracking-[-0.72px] text-center">
            コドクファースト歯科
            <br />
            最高の医療チーム
          </h2>
        </div>

        {/* Doctor Card */}
        <div className="flex flex-col gap-8 mt-[60px]">
          {/* Doctor Image */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-lg h-[350px] relative">
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

        {/* Credentials Photo */}
        <div className="mt-12 rounded-[20px] overflow-hidden shadow-lg relative h-[250px]">
          <Image
            src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
            alt="コドクファースト歯科 院長経歴および認証"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
