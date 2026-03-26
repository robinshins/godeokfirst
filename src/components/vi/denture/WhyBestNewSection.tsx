'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-start px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-6 overflow-clip relative shrink-0 w-[168px]">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={168}
              height={24}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center relative shrink-0 w-full">
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-[#008095] text-center tracking-[-0.64px] w-full" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
              Godeok First Dental <br />
              Lý do đặc biệt
            </h2>
          </div>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">

          {/* Lý do 1: Chuyên gia Nha khoa Tổng hợp + Giáo sư thỉnh giảng bệnh viện đại học */}
          <FadeInSection delay={100} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Được điều trị bởi
                <br />
                <span className="text-[#008095]">Chuyên gia Nha khoa Tổng hợp</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Giáo sư thỉnh giảng BV Nha khoa ĐH Chosun,<br />
                Hoàn thành xuất sắc khóa Implant, Sau đại học Nha khoa ĐH Seoul.<br />
                <span className="font-bold text-[#333]">Chuyên gia Nha khoa Tổng hợp</span> trực tiếp khám.
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="Chứng chỉ và chứng nhận Bác sĩ trưởng"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">Chứng chỉ · Chứng nhận</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/원장력 등 걸려있사진.jpg"
                    alt="Lý lịch Bác sĩ trưởng"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">Lý lịch Bác sĩ trưởng</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Lý do 2: Kinh nghiệm phẫu thuật phong phú */}
          <FadeInSection delay={200} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                1,200lần+ Implant
                <br />
                <span className="text-[#008095]">0 ca tái phẫu thuật</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Từ khi khai trương Godeok Edutown đến nay<br />
                Không có ca tái phẫu thuật Implant nào.<br />
                <span className="font-bold text-[#333]">Tay nghề được kết quả chứng minh</span>.
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/수술하모습.jpeg"
                  alt="Hình ảnh Phẫu thuật cấy ghép Implant"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8] space-y-3">
                {[
                  { label: 'Cấy Implant', value: '1.200 lần+' },
                  { label: 'Tái phẫu thuật từ khi khai trương Godeok Edutown', value: '0ca' },
                  { label: 'Sự hài lòng của bệnh nhân', value: '4.9 / 5.0' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[14px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.label}</span>
                    <span className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Lý do 3: Phẫu thuật chính xác kỹ thuật số */}
          <FadeInSection delay={300} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Chẩn đoán kỹ thuật số 3D
                <br />
                <span className="text-[#008095]">Phẫu thuật chính xác theo yêu cầu</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Thông qua phân tích CT 3D và hướng dẫn kỹ thuật số<br />
                cấy ở vị trí tối ưu hóa theo tình trạng xương.<br />
                <span className="font-bold text-[#333]">Cắt tối thiểu, ghép xương tối thiểu</span> giúp phục hồi nhanh.
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="Hướng dẫn Phẫu thuật cấy ghép Implant kỹ thuật số 3D"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Phân tích chính xác CT 3D', desc: 'Nắm bắt chính xác mật độ·độ dày xương bằng 3D' },
                  { title: 'Hướng dẫn phẫu thuật kỹ thuật số', desc: 'Cấy chính xác theo thiết kế' },
                  { title: 'Trang bị đầy đủ thiết bị mới nhất', desc: 'Có máy quét, hệ thống kỹ thuật số' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="bg-[#008095] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Lý do 4: Chăm sóc sau */}
          <FadeInSection delay={400} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Sau phẫu thuật
                <br />
                <span className="text-[#008095]">khám chịu trách nhiệm đến cùng</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Bác sĩ trưởng tư vấn từ tư vấn đến phẫu thuật, bảo trì<br />
                trực tiếp phụ trách. Không thay đổi bác sĩ giữa chừng<br />
                <span className="font-bold text-[#333]">Cùng một Bác sĩ trưởng từ đầu đến cuối</span> khám.
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] space-y-4">
                {[
                  { icon: '🔍', title: 'Kiểm tra định kỳ', desc: 'Kiểm tra tình trạng 6 tháng/lần' },
                  { icon: '🦷', title: 'Vệ sinh chuyên nghiệp', desc: 'Lấy cao răng phòng viêm quanh Implant' },
                  { icon: '📋', title: 'Kế hoạch chăm sóc cá nhân', desc: 'Bảo trì phù hợp tình trạng bệnh nhân' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-[#333] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.title}</p>
                      <p className="text-[13px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
