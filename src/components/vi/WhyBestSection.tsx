import Image from 'next/image';

export default function WhyBestSection() {
  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto">
        {/* Section Header */}
        <div className="text-center py-[60px]">
          <div className="flex justify-center items-center mb-4">
            <div className="h-11 relative shrink-0 overflow-hidden">
              <Image
                src="/고덕퍼스트치과-로고-(블랙).png"
                alt="Godeok First Dental"
                width={375}
                height={84}
                className="h-20 w-auto object-contain -mt-[18px]"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-black leading-[1.35]">
            Godeok First Dental
            <br />
            Lý do chúng tôi là tốt nhất
          </h2>
        </div>

        {/* Lý do 1: Chuyên gia Nha khoa Tổng hợp */}
        <div className="px-4 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">1</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              được Bộ Y tế Phúc lợi chứng nhận
              <br />
              Chuyên gia Nha khoa Tổng hợp
            </h3>
            <p className="text-[14px] font-semibold text-[#727582]">
              Bác sĩ trưởng trực tiếp tư vấn, phẫu thuật, chăm sóc sau điều trị
            </p>
          </div>

          {/* được Bộ Y tế Phúc lợi chứng nhận hình ảnh */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/원장력 등 걸려있사진.jpg"
              alt="được Bộ Y tế Phúc lợi chứng nhận Chuyên gia Nha khoa Tổng hợp và Lý lịch Bác sĩ trưởng"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Lý do 2: Cố vấn nghiên cứu Implant */}
        <div className="px-4 py-8 bg-gradient-to-b from-[#331f0c] via-[#584025] to-[#866947]">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-white mb-3">2</p>
            <h3 className="text-3xl font-bold text-[#f3f6fb] mb-3 leading-[1.35]">
              Osstem, Point, Dentis
              <br />
              Cố vấn nghiên cứu Implant
            </h3>
            <p className="text-[14px] font-semibold text-[#e9ebf1]">
              Hoạt động với tư cách cố vấn nghiên cứu của các công ty Implant hàng đầu Hàn Quốc
              <br />
              trực tiếp sử dụng công nghệ và thiết bị mới nhất
            </p>
          </div>

          {/* Ảnh các chứng nhận */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/goduk_images/각종인증서.png"
              alt="Các chứng nhận Cố vấn nghiên cứu Implant Osstem·Point·Dentis"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Lý do 3: Thiết bị kỹ thuật số mới nhất */}
        <div className="px-2 py-8 bg-white">
          <div className="text-center mb-10">
            <p className="text-3xl font-bold text-[#008095] mb-3">3</p>
            <h3 className="text-3xl font-bold text-[#21314E] mb-3 leading-[1.35]">
              Trang bị đầy đủ thiết bị kỹ thuật số mới nhất
            </h3>
            <p className="text-base font-semibold text-[#727582]">
              Hệ thống CT 3D, máy quét kỹ thuật số, Phẫu thuật dẫn đường kỹ thuật số, v.v.
              <br />
              cung cấp điều trị chính xác bằng thiết bị tiên tiến nhất
            </p>
          </div>

          {/* Cuộn ảnh cơ sở */}
          <div className="overflow-x-auto flex gap-3 pb-4">
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/스캐너사진.jpg"
                alt="Thiết bị máy quét CT 3D"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실사진.jpg"
                alt="Phòng khám với máy quét kỹ thuật số và màn hình X-ray"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/수술실.jpg"
                alt="Phòng phẫu thuật với thiết bị mới nhất"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-none w-[320px] aspect-[4/3] rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/goduk_images/진료실.jpg"
                alt="Phòng khám trang bị đầy đủ bộ OSSTEM"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
