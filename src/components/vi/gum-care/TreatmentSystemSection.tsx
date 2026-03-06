'use client';

import Image from 'next/image';

export default function TreatmentSystemSection() {
  const systems = [
    {
      image: '/images/nsk970.png',
      title: 'Thiết bị đặc biệt NSK Varios 970',
      description: 'Máy lấy cao răng siêu âm mới nhất của NSK Nhật Bản, giúp loại bỏ chính xác vi khuẩn sâu trong nướu',
      features: [
        { label: 'Động cơ iPiezo', text: 'Đảm bảo công suất ổn định với khả năng tự động điều chỉnh tần số' },
        { label: 'Đầu tip siêu chính xác', text: 'Có thể tiếp cận sâu vào các túi nha chu' }
      ]
    },
    {
      image: '/images/perioclean2.jpg',
      title: 'Điều trị bằng thuốc mỡ kháng sinh Periocline',
      description: 'Thuốc kháng sinh tại chỗ chứa Minocycline, được tiêm trực tiếp vào sâu trong nướu để điều trị',
      features: [
        { label: 'Kiểm chứng lâm sàng', text: 'Hiệu quả được chứng nhận qua các thử nghiệm lâm sàng của nhiều nhóm nghiên cứu' },
        { label: 'Kéo dài một tuần', text: 'Hiệu quả của thuốc duy trì trong một tuần chỉ với một lần tiêm' },
        { label: 'Giảm vi khuẩn', text: 'Giảm vi khuẩn Red Complex từ 87.5% xuống còn 12.5%' }
      ]
    },
    {
      image: '/images/painless2.png',
      title: 'Hệ thống giảm đau 4 giai đoạn',
      description: [
        '"Hóa ra điều trị nha khoa cũng có thể thoải mái thế này"',
        'Hệ thống chặn đau từng bước khiến nhiều bệnh nhân ngạc nhiên'
      ],
      features: [
        { label: 'Gây tê súc miệng', text: 'Súc miệng bằng dung dịch gây tê để giảm cảm giác lần 1' },
        { label: 'Gây tê bề mặt', text: 'Bôi thuốc mỡ gây tê lên vùng tiêm để chặn đau lần 2' },
        { label: 'Máy gây tê điện tử', text: 'Điều khiển bằng máy tính để tiêm giảm đau với tốc độ ổn định' },
        { label: 'Máy gây tê ống thần kinh', text: 'Chặn đau hoàn hảo ngay cả ở những vùng sâu' }
      ]
    }
  ];

  return (
    <div className="bg-white w-full px-4 py-[60px]">
      <div className="max-w-[343px] mx-auto flex flex-col gap-[60px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <div className="font-['Pretendard_JP'] font-bold leading-[1.35] text-[32px] text-black text-center tracking-[-0.64px] w-full">
            <p className="mb-0">Hệ thống điều trị nướu</p>
            <p>duy nhất tại Nha khoa Medis</p>
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

