'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'Thiết bị đặc biệt NSK varios 970',
      description: 'Máy cạo vôi siêu âm mới nhất của NSK Nhật Bản, loại bỏ chính xác vi khuẩn sâu trong nướu',
      features: [
        { label: 'Động cơ iPiezo', text: 'Đảm bảo công suất ổn định bằng tự động điều chỉnh tần số' },
        { label: 'Đầu siêu chính xác', text: 'Có thể tiếp cận sâu trong túi nha chu' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Điều trị thuốc mỡ kháng sinh Periocline',
      description: 'Kháng sinh tại chỗ thành phần minocycline, tiêm trực tiếp vào sâu trong nướu để điều trị',
      features: [
        { label: 'Kiểm chứng lâm sàng', text: 'Hiệu quả được chứng nhận qua thử nghiệm lâm sàng của nhiều nhóm nghiên cứu trong và ngoài nước' },
        { label: 'Kéo dài 1 tuần', text: 'Một lần tiêm, thuốc duy trì hiệu lực trong 1 tuần' },
        { label: 'Giảm vi khuẩn', text: 'Vi khuẩn Red Complex giảm từ 87.5% → 12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: 'Hệ thống giảm đau 4 bước',
      description: [
        '"Không ngờ điều trị nha khoa lại có thể thoải mái thế này"',
        'Hệ thống chặn đau theo từng bước mà nhiều bệnh nhân ngạc nhiên'
      ],
      features: [
        { label: 'Gây tê súc miệng', text: 'Súc miệng bằng dung dịch gây tê để giảm nhạy cảm lần 1' },
        { label: 'Gây tê bôi', text: 'Bôi thuốc mỡ gây tê vào vị trí tiêm để chặn lần 2' },
        { label: 'Máy gây tê điện tử giảm đau', text: 'Tiêm giảm đau với tốc độ đều do máy tính điều khiển' },
        { label: 'Máy gây tê thần kinh', text: 'Chặn đau hoàn toàn đến vùng sâu' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">của Godeok First Dental</p>
            <p>Hệ thống Điều trị nướu</p>
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
              <div className="bg-[#21314E] box-border flex flex-col gap-6 items-start p-6 w-full">
                <p className="font-['Pretendard_JP'] font-bold leading-[1.35] text-2xl text-center text-white tracking-[-0.48px] w-full">
                  {system.title}
                </p>

                {Array.isArray(system.description) ? (
                  <div className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
                    <p className="mb-0">{system.description[0]}</p>
                    <p>{system.description[1]}</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard_JP'] font-semibold leading-[1.4] opacity-80 text-[#e9ebf1] text-[15px] text-center tracking-[-0.3px] w-full">
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
