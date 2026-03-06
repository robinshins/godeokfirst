import Image from 'next/image';

export default function WhyBestSection() {
  const seminars = [
    { image: '/images/seminar-3.png', title: 'Đào tạo implant cho nha sĩ' },
    { image: '/images/seminar-1.png', title: 'Bài giảng đặc biệt Hiệp hội Nha khoa Busan' },
    { image: '/images/seminar-4.png', title: 'Khóa chuyên gia implant kỹ thuật số' },
    { image: '/images/seminar/digital-prosthetics-lecture.jpg', title: 'Bài giảng lâm sàng phục hình kỹ thuật số' },
    { image: '/images/seminar/megagen-digital-scan-seminar.jpg', title: 'Hội thảo quét kỹ thuật số Megagen' },
    { image: '/images/seminar/osstem-digital-guide-surgery-lecture.jpg', title: 'Bài giảng phẫu thuật hướng dẫn kỹ thuật số Osstem' }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="w-[167.981px] h-[24px] relative">
              <Image
                src="/icons/Logo_black.svg"
                alt="Medis Dental"
                width={148}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Tại sao Kyungsung Medis
            <br />
            là tốt nhất cả nước
          </h2>
        </div>

        {/* Reason 1: Bệnh viện chỉ định chính thức */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Bệnh viện chỉ định chính thức
              <br />
              của các trường đại học nổi tiếng Busan
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              Cơ sở y tế hợp tác được các trường đại học và tổ chức uy tín lựa chọn
            </p>
          </div>

          {/* Partner Institutions */}
          <div className="flex flex-col gap-3 w-full">
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/busan-univ-hospital.svg"
                alt="Bệnh viện Đại học Busan"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongguk-cm.jpg"
                alt="Dongguk CM"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/kyungsung-univ.png"
                alt="Đại học Kyungsung"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/dongmyung-univ.svg"
                alt="Đại học Tongmyong"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="relative w-full aspect-[343/120] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/pukyong-univ.png"
                alt="Đại học Quốc gia Pukyong"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>
        </div>

        {/* Reason 2: Bệnh viện ưu tú được chỉ định về implant */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Megagen/Osstem/Neo
              <br />
              Bệnh viện ưu tú được chỉ định về implant
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              Không chỉ được chỉ định là bệnh viện phẫu thuật ưu tú
              <br />
              mà còn tham gia các hoạt động nghiên cứu với tư cách cố vấn lâm sàng
            </p>
          </div>

          {/* Scrolling Certifications */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3909.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3910.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3911.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3912.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3913.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3914.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3915.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3917.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3919.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/DSC00078.jpg"
                alt="Bảng chứng nhận Megagen Implant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-none w-[280px] aspect-[280/380] rounded-xl overflow-hidden shadow-md relative bg-[#1a1a1a]">
              <Image
                src="/images_official/IMG_3920.jpg"
                alt="Chứng nhận bệnh viện ưu tú về implant"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Reason 3: Bài giảng học thuật */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-[60px]">
            <p className="text-3xl font-bold text-[#006aff] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Bài giảng học thuật
              <br />
              cho nha sĩ toàn quốc
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              Khi người khác tham dự hội thảo,
              <br />
              Medis tổ chức hội thảo.
              <br />
              Sự khác biệt về năng lực tạo nên sự khác biệt về kết quả.
            </p>
          </div>

          {/* Scrolling Seminar Images */}
          <div className="overflow-x-auto flex gap-2 pb-4">
            {seminars.map((seminar, i) => (
              <div key={i} className="flex-none w-[320px]">
                <div className="aspect-[950/1148] rounded-xl overflow-hidden relative">
                  <Image
                    src={seminar.image}
                    alt={seminar.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[17px] font-bold text-[#727582] mt-2">{seminar.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reason 4: Hợp tác với Hiossen */}
        <div className="px-8 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-14">
            <p className="text-3xl font-bold text-white mb-3">4</p>
            <div className="w-full h-px bg-white/20 mb-3" />
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Phát triển thiết bị chuyên dụng
              <br />
              với Hiossen Implant
            </h3>
            <div className="w-full h-px bg-white/20 mb-3" />
            <p className="text-base font-semibold text-[#e9ebf1]">
              Chúng tôi cũng đang phát triển thiết bị chuyên dụng cho implant toàn hàm kỹ thuật số (Full-arch implant) cùng với Hiossen Implant, là chuyên gia được công nhận trong ngành
            </p>
          </div>

          <div className="w-[322px] h-[196px] mx-auto rounded-xl overflow-hidden relative">
            <Image
              src="/images/hyness-advisory-board.svg"
              alt="Hợp tác với Hiossen Implant"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Reason 5: Hệ thống quản lý vệ sinh nghiêm ngặt */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#006aff] mb-3">5</p>
            <h3 className="text-3xl font-bold text-[#0b1727] mb-3 leading-[1.35]">
              Hệ thống quản lý vệ sinh nghiêm ngặt
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              Tạo môi trường điều trị an toàn không lo nhiễm trùng
            </p>
          </div>

          {/* Hình ảnh phòng khử trùng - Cuộn */}
          <div className="overflow-x-auto flex gap-3 pb-4 mb-8">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/sterilization-room2.webp"
                alt="Phòng khử trùng - Hệ thống tiệt trùng"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/sterilization-room1.webp"
                alt="Phòng khử trùng - Hệ thống khử trùng kỹ lưỡng"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Đặc điểm quản lý vệ sinh */}
          <div className="flex flex-col gap-6">
            {/* Hệ thống khử trùng/tiệt trùng 15 bước */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                Hệ thống khử trùng/tiệt trùng 15 bước
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Tuân thủ nghiêm ngặt quy trình khử trùng/tiệt trùng 15 bước theo hướng dẫn, đào tạo định kỳ cho toàn bộ nhân viên.
              </p>
            </div>

            {/* Hệ thống 1 người 1 dụng cụ */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                Hệ thống 1 người 1 dụng cụ
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Khử trùng/tiệt trùng tất cả dụng cụ và thiết bị theo hướng dẫn, tuyệt đối không tái sử dụng dụng cụ điều trị dùng một lần.
              </p>
            </div>

            {/* Hệ thống quản lý khử trùng chuyên dụng */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                Hệ thống quản lý khử trùng chuyên dụng
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Quản lý viên kiểm soát nhiễm khuẩn chuyên trách thường trực quản lý nghiêm ngặt việc khử trùng/tiệt trùng tất cả dụng cụ.
              </p>
            </div>

            {/* Hệ thống nước khử trùng */}
            <div className="bg-[#f8f9fb] p-5 rounded-2xl">
              <h4 className="font-['Pretendard_JP'] font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-[#006aff] mb-2">
                Hệ thống nước khử trùng axit hypochlorous
              </h4>
              <p className="font-['Pretendard_JP'] font-semibold text-[15px] leading-[1.6] tracking-[-0.3px] text-[#2d3643]">
                Sử dụng HOCl (axit hypochlorous) - chất khử trùng thế hệ mới an toàn cho cơ thể, bạn có thể yên tâm điều trị.
              </p>
            </div>
          </div>

          {/* Thông điệp nhấn mạnh */}
          <div className="mt-6 bg-gradient-to-r from-[#006aff]/10 to-[#0099ff]/10 p-5 rounded-2xl border border-[#006aff]/20">
            <p className="font-['Pretendard_JP'] font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-[#006aff] text-center">
              Điều trị an toàn không lo nhiễm trùng với khử trùng/tiệt trùng hoàn hảo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
