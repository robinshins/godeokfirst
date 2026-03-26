import Image from 'next/image';
import Link from 'next/link';

export default function TreatmentSection() {
  const treatments = [
    {
      icon: '/images/implant-icon.png',
      iconBg: 'bg-blue-50',
      title: 'Implant',
      subtitle: 'Phẫu thuật cấy ghép Implant kỹ thuật số',
      description: 'Phẫu thuật dẫn đường kỹ thuật số độ khó cao qua phân tích máy tính, an toàn và thoải mái, chịu tráchách nhiệm đến cùng.',
      features: [
        'Phẫu thuật dẫn đường kỹ thuật số độ khó cao',
        'Phẫu thuật gây mê qua an thần có ý thức',
        'Cung cấp răng tạm ngay sau phẫu thuật',
        'Bác sĩ trưởng trực tiếp phẫu thuật',
        'Trang bị đầy đủ thiết bị kỹ thuật số'
      ],
      link: '/implant'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Hàm giả / Implant toàn hàm',
      subtitle: 'Phục hình chính xác theo yêu cầu',
      description: 'Từ Hàm giả thoải mái tự nhiên\nđến Implant toàn hàm thiết kế theo yêu cầu',
      features: [
        'Chế tạo Hàm giả chính xác theo yêu cầu',
        'Implant toàn hàm (All-on-4/6)',
        'Hàm giả trên Implant (Overdenture)',
        'Có thể áp dụng bảo hiểm Hàm giả'
      ],
      link: '/denture'
    },
    {
      icon: '/icons/cavity.svg',
      iconBg: 'bg-orange-50',
      title: 'Điều trị sâu răng & Điều trị tủy',
      subtitle: 'Chuyên bảo tồn răng tự nhiên',
      description: 'Điều trị cứu răng thay vì nhổ\nĐiều trị chính xác của Chuyên gia Nha khoa Tổng hợp',
      features: [
        'Chẩn đoán sâu răng chính xác',
        'giảm đau Điều trị tủy',
        'Bảo tồn răng tự nhiên',
        'Bảo hiểm'
      ],
      link: '/cavity-treatment'
    },
    {
      icon: '/icons/extraction.svg',
      iconBg: 'bg-green-50',
      title: 'Nhổ răng khôn',
      subtitle: 'Nhổ răng an toàn và nhanh chóng',
      description: 'Nhổ răng an toàn không tổn thương thần kinh\nvới chẩn đoán chính xác 3D CT',
      features: [
        'Gây mê giảm đau',
        'Hồi phục nhanh',
        'Chăm sóc sau điều trị kỹ lưỡng'
      ],
      link: '/wisdom-tooth'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-pink-50',
      title: 'Điều trị nướu & Cạo vôi răng',
      subtitle: 'Khởi đầu sức khỏe toàn diện',
      description: '80% người lớn mắc bệnh nướu\nRăng khỏe mạnh suốt đời nhờ chăm sóc định kỳ',
      features: [
        'Điều trị sử dụng thiết bị đặc biệt',
        'Quản lý Perioclin',
        'Điều trị giảm đau',
        'Bảo hiểm áp dụng 1 lần/năm'
      ],
      link: '/gum-care'
    },
    {
      icon: '/icons/gum.svg',
      iconBg: 'bg-indigo-50',
      title: 'Điều trị khớp thái dương hàm',
      subtitle: 'Chuyên đau khớp thái dương hàm · Rối loạn há miệng',
      description: 'Hàm của bạn có tiếng kêu hoặc đau?\nĐiều trị theo yêu cầu sau chẩn đoán chính xác',
      features: [
        'khớp thái dương hàm Chẩn đoán chính xác',
        'Máng ổn định khớp cắn (Splint)',
        'Vật lý trị liệu · Điều trị thuốc',
        'Chuyên gia Nha khoa Tổng hợp trực tiếp khám'
      ],
      link: '/tmj'
    },
    {
      icon: '/icons/whitening.svg',
      iconBg: 'bg-purple-50',
      title: 'Tẩy trắng răng',
      subtitle: 'Sở hữu thiết bị cao cấp nhất',
      description: 'Tẩy trắng an toàn và hiệu quả\nGiảm giá khi kết hợp lấy cao răng',
      features: [
        'Hiệu quả ngay sau 1 lần điều trị',
        'Không tổn thương răng',
        'Giá hợp lý',
        'Hệ thống Osstem Beautis'
      ],
      link: '/whitening'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[375px] mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center justify-center relative shrink-0 w-full mb-10">
          <div className="h-11 relative shrink-0 overflow-hidden">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <h2 className="font-bold leading-[1.35] not-italic text-[36px] text-black text-center tracking-[-0.72px] w-full" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            Chuyên khoa điều trị
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
                      className="h-20 w-auto object-contain -mt-[18px]"
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
                      height={84}
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
                      height={84}
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
