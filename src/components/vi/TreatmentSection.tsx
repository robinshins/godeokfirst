import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Implant toàn hàm & Implant',
      subtitle: 'Số ca phẫu thuật implant nhiều nhất quận Nam, Busan',
      description: 'Phẫu thuật hướng dẫn kỹ thuật số độ khó cao với phân tích máy tính, an toàn và thoải mái, cam kết 10 năm.',
      features: [
        'Phẫu thuật hướng dẫn kỹ thuật số độ khó cao',
        'Phẫu thuật gây mê an thần có ý thức',
        'Cung cấp răng tạm ngay sau phẫu thuật',
        'Bác sĩ trưởng trực tiếp phẫu thuật',
        'Trang bị thiết bị kỹ thuật số lớn nhất Hàn Quốc'
      ],
      link: '/vi/implant'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Tẩy trắng & Dán sứ Laminate',
      subtitle: 'Sở hữu thiết bị cao cấp nhất',
      description: 'Tẩy trắng an toàn và hiệu quả\nGiảm 50% khi kết hợp lấy cao răng',
      features: [
        'Hiệu quả ngay sau 1 lần điều trị',
        'Không gây hại răng',
        'Giá cả hợp lý',
        'Có thể tẩy trắng chuyên nghiệp và dán sứ laminate'
      ],
      link: '/vi/whitening'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Nhổ răng khôn',
      subtitle: 'Nhổ răng an toàn và nhanh chóng',
      description: 'Chẩn đoán chính xác với CT 3D\nNhổ răng an toàn không tổn thương thần kinh',
      features: [
        'Gây tê giảm đau',
        'Phục hồi nhanh',
        'Chăm sóc hậu phẫu kỹ lưỡng'
      ],
      link: '/vi/wisdom-tooth'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Điều trị sâu răng & Điều trị tủy',
      subtitle: 'Chuyên gia bảo tồn răng tự nhiên',
      description: 'Điều trị bảo tồn thay vì nhổ răng\nĐiều trị chính xác bởi chuyên gia nha khoa bảo tồn',
      features: [
        'Chẩn đoán chính xác bằng kính hiển vi',
        'Phát hiện sâu răng bằng Qray',
        'Điều trị tủy giảm đau',
        'Áp dụng bảo hiểm'
      ],
      link: '/vi/cavity-treatment'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Điều trị nướu & Lấy cao răng',
      subtitle: 'Khởi đầu của sức khỏe toàn thân',
      description: '80% người lớn mắc bệnh nướu\nRăng khỏe suốt đời với chăm sóc định kỳ',
      features: [
        'Thiết bị đặc biệt NSK varios 970',
        'Chăm sóc Perio Clean',
        'Điều trị giảm đau',
        'Bảo hiểm áp dụng 1 lần/năm'
      ],
      link: '/vi/gum-care'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-8 relative shrink-0 w-40">
            <Image
              src="/icons/Logo_black.svg"
              alt="Kyungsung Medis Dental"
              width={160}
              height={32}
              className="w-full h-full"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Lĩnh vực điều trị chuyên môn
          </h2>
        </div>

        {/* Treatment Cards */}
        <div className="flex flex-col -mx-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`px-4 ${
                index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'
              }`}
            >
              {/* Card Header - Icon + Title */}
              <div className="relative mb-12 pt-10">
                <div className="flex flex-col gap-4">
                  {/* Icon Box - 80x80 */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center p-2">
                    <Image
                      src={treatment.icon}
                      alt={treatment.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[33px] font-bold text-[#292a2f] leading-[1.35] tracking-[-0.72px]">
                      {treatment.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-[17px] font-bold text-[#727582] leading-[1.5] tracking-[-0.36px]">
                        {treatment.subtitle}
                      </p>
                      {index === 0 && (
                        <p className="text-[13px] text-[#9a9ca8] leading-[1.5] tracking-[-0.28px]">
                          *Tiêu chuẩn phẫu thuật hướng dẫn kỹ thuật số qua phân tích máy tính
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Button - 64x64 - Absolute positioned */}
                {treatment.link ? (
                  <Link
                    href={treatment.link}
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Xem chi tiết"
                      width={32}
                      height={32}
                    />
                  </Link>
                ) : (
                  <button
                    className="absolute right-0 top-[42px] w-16 h-16 bg-white border border-[#f3f6fb] rounded-[18px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    style={{ boxShadow: '0 8px 24px -4px rgba(45, 54, 67, 0.25)' }}
                  >
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Xem chi tiết"
                      width={32}
                      height={32}
                    />
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col gap-5">
                {/* Description */}
                <p className="text-[20px] font-bold text-[#292a2f] leading-[1.35] whitespace-pre-line tracking-[-0.48px] w-[343px]">
                  {treatment.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col">
                  {treatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`py-4 ${
                        idx !== treatment.features.length - 1
                          ? 'border-b border-[#e9ebf1]'
                          : ''
                      }`}
                    >
                      <p className="text-[16px] font-bold text-[#5d5f6d] leading-[1.5] tracking-[-0.36px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom padding for card */}
              <div className="pb-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
