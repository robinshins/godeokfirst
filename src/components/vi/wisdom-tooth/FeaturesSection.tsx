'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/surgeon.png',
      title: 'Kinh nghiệm lâm sàng phong phú',
      description: 'Nhổ răng khôn an toàn và chính xác bởi Giám đốc điều hành - Bác sĩ chuyên khoa Nha khoa Tổng quát'
    },
    {
      icon: '/images/clinic.png',
      title: 'Hệ thống điều trị một điểm (One-stop)',
      description: 'Hoàn tất từ chẩn đoán, nhổ răng đến chăm sóc sau phẫu thuật ngay trong ngày'
    },
    {
      icon: '/images/otoscope.png',
      title: 'Hệ thống gây tê giảm đau',
      description: 'Thủ thuật không lo đau đớn với thiết bị gây tê giảm đau hiện đại nhất'
    }
  ];

  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-center w-full">
              <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black whitespace-pre-line">
                {'Sự đặc biệt khi nhổ răng khôn\ntại nha khoa chúng tôi'}
              </h2>
              <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] whitespace-pre-line">
                {'Với kinh nghiệm hơn 2.700 ca và hệ thống bài bản,\nchúng tôi mang đến dịch vụ điều trị ở một đẳng cấp khác biệt'}
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-6 items-start w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-[24px] px-5 py-10 flex flex-col gap-5 items-center justify-end w-full"
                style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}
              >
                <div className="w-20 h-20 relative rounded-full overflow-hidden">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start text-center w-full">
                  <p className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-white w-full">
                    {feature.title}
                  </p>
                  <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#e9ebf1] whitespace-pre-line w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 대학병원급 난이도 발치 - 별도 강조 섹션 */}
          <div className="rounded-[24px] border-2 border-[#006aff] bg-white p-6 flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="w-16 h-16 bg-[#006aff] rounded-full flex items-center justify-center">
                <span className="text-[32px]">🏥</span>
              </div>
              <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
                Nhổ răng độ khó cấp bệnh viện đại học
              </h3>
              <p className="font-semibold text-[15px] leading-[1.5] tracking-[-0.3px] text-[#727582] text-center whitespace-pre-line">
                {'Bạn đã bao giờ nghe nha khoa thông thường bảo\n"Hãy đến bệnh viện lớn" hay "Hãy nhổ ở bệnh viện chuyên khoa" chưa?'}
              </p>
            </div>
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Răng khôn mọc ngầm phức tạp</span> - Nằm sâu trong nướu vẫn OK
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Răng khôn sát dây thần kinh</span> - Nhổ an toàn không lo tổn thương thần kinh
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#006aff] text-lg shrink-0">✓</span>
                <p className="font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-[#37373e]">
                  <span className="font-bold text-[#006aff]">Răng khôn mọc lệch nằm ngang</span> - Xử lý được cả những ca khó nằm ngang
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-4 w-full">
              <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-white text-center">
                Với kinh nghiệm hơn 2.700 ca, chúng tôi giải quyết<br />
                an toàn cả những ca khó ở trình độ bệnh viện đại học
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

