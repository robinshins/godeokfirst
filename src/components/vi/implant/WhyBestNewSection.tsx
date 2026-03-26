'use client';

import Image from 'next/image';
import FadeInSection from '@/components/common/FadeInSection';

export default function WhyBestNewSection() {
  return (
    <div className="bg-[#f8fbfd] w-full flex justify-center">
      <div className="box-border flex flex-col gap-10 items-center px-6 py-[80px] relative w-full max-w-[430px]">
        {/* Header */}
        <FadeInSection className="text-center w-full mb-4">
          <div className="flex justify-center mb-6 opacity-80">
            <Image
              src="/고덕퍼스트치과-로고-(블랙).png"
              alt="Godeok First Dental"
              width={140}
              height={84}
              className="object-contain grayscale opacity-60"
            />
          </div>
          <h2 className="font-extrabold text-[32px] text-[#3e3a3a] leading-[1.3] tracking-tight">
            Godeok First Dental
            <br />
            <span className="text-[#008095] relative inline-block">
              Lý do đặc biệt
              <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#008095]/10 -z-10 rounded-full"></span>
            </span>
          </h2>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Reason 1 */}
          <FadeInSection delay={100}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[22px] font-bold text-[#3e3a3a] leading-[1.4] mb-4 break-keep">
                Với tư cách giáo sư thỉnh giảng bệnh viện đại học hiện tại<br />
                <span className="text-[#008095] text-[24px]">giảng dạy về Implant<br/>cho các nha sĩ</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                Phẫu thuật cấy ghép Implant, ai thực hiện là quan trọng nhất.
                Bệnh viện đại học, đã chủ trì các ca phẫu thuật khó
                <span className="font-bold text-[#333]"> Giáo sư thỉnh giảng BV Nha khoa Đại học Chosun</span> trực tiếp phẫu thuật.
              </p>

              {/* Lý lịch Bác sĩ trưởng hình ảnh Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
                    alt="Bác sĩ Lee Dong-hyun các chứng nhận"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/원장력 등 걸려있사진.jpg"
                    alt="Bác sĩ Lee Dong-hyun lý lịch và được Bộ Y tế Phúc lợi chứng nhận"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
              </div>
              {/* 원장 phẫu thuật 사진 */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/goduk_images/수술하모습.jpeg"
                  alt="Bác sĩ Lee Dong-hyun phẫu thuật phẫu thuật"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">Chuyên gia Nha khoa Tổng hợp khám có trách nhiệm</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">Từ Implant độ khó cao đến phục hình cuối<br/>chuyên gia được Bộ Y tế Phúc lợi chứng nhận trực tiếp chịu trách nhiệm</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8]">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <path d="M22 10v6M2 10v6" /><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M12 22V12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-[15px] mb-1">Osstem·Point·Dentis Cố vấn nghiên cứu Implant</p>
                      <p className="text-[13px] text-[#777] leading-[1.5]">Với tư cách cố vấn nghiên cứu của công ty Implant hàng đầu<br/>trực tiếp sử dụng công nghệ và thiết bị mới nhất</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 2 */}
          <FadeInSection delay={200}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Godeok First Dental luôn
                <br />
                <span className="text-[#008095]">phẫu thuật 2 lần</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                Bác sĩ trưởng trực tiếp phẫu thuật Implant mô phỏng
                <br />
                thiết kế vị trí cấy ghép tối ưu rồi tiến hành phẫu thuật thực tế
              </p>

              {/* Ảnh hướng dẫn kỹ thuật số 3D */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="3D Phẫu thuật dẫn đường kỹ thuật số"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              {/* Huy hiệu ưu điểm chính */}
              <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-4 mb-5 shadow-lg shadow-[#008095]/20">
                <p className="font-bold text-white text-[14px] text-center leading-[1.5]">
                  Phẫu thuật nhanh và thoải mái
                  <br />
                  Giảm thiểu sưng, đau và ghép xương
                </p>
              </div>

              {/* Quy trình 5 bước */}
              <div className="space-y-2">
                {[
                  { step: 1, title: 'Quét miệng 3D', desc: 'Quét bên trong miệng để chẩn đoán chính xác' },
                  { step: 2, title: 'Thiết kế phẫu thuật ảo', desc: 'Lập kế hoạch cấy ghép tối ưu trên máy tính' },
                  { step: 3, title: 'Lắp đặt hướng dẫn', desc: 'Thiết bị dẫn đường chính xác không sai 1mm' },
                  { step: 4, title: 'Phẫu thuật rạch tối thiểu', desc: 'Rút ngắn thời gian, giảm đau/sưng' },
                  { step: 5, title: 'Xác minh phẫu thuật mô phỏng', desc: 'Tăng sự hài lòng nhờ giảm thiểu sai số' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3 bg-[#f8fbfd] p-3 rounded-xl border border-[#eef4f8]">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#008095] to-[#006B7A] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-white text-[12px] font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#333]">{item.title}</p>
                      <p className="text-[12px] text-[#888]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 3 */}
          <FadeInSection delay={300}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Implant không cắt &
                <br />
                <span className="text-[#008095]">Cấy ghép trong ngày</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                Không cắt nướu nên ít đau và sưng
                <br />
                có thể Hồi phục nhanh
              </p>

              {/* phẫu thuật실 hình ảnh */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/goduk_images/flapless-implant-surgery.webp"
                    alt="Phẫu thuật cấy ghép Implant không cắt"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-5 text-white shadow-lg shadow-[#008095]/20">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/20 pb-2">
                    <span className="font-black text-lg">01</span>
                    <span className="font-bold">Implant không cắt</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-white font-medium">
                    <li>• Cấy qua lỗ nhỏ không cắt nướu</li>
                    <li>• Giảm thiểu chảy máu, đau, sưng</li>
                    <li>• Nhanh chóng trở lại sinh hoạt bình thường</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#edf2f7] rounded-xl p-5 text-[#333]">
                   <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <span className="font-black text-lg text-[#008095]">02</span>
                    <span className="font-bold">Cấy ghép trong ngày sau nhổ răng</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li>• Cấy Implant đồng thời với nhổ răng</li>
                    <li>• Giảm số lần đến khám và thời gian điều trị</li>
                    <li>• Giảm thiểu mất xương nướu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 4 */}
          <FadeInSection delay={400}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Yếu tố quyết định tuổi thọ Implant
                <br />
                <span className="text-[#008095]">Chăm sóc sau khoa học</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                Nguyên nhân chính gây thất bại Implant là viêm nhiễm.<br/>
                Phân tích vi khuẩn có hại <span className="font-bold text-[#333]">trong miệng mà mắt thường không thấy</span><br/>
                ngăn chặn triệt để viêm quanh Implant.
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] mb-3 space-y-4">
                <div>
                   <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Chăm sóc quan trọng hơn cấy ghép
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    Implant dễ bị viêm hơn răng tự nhiên.<br/>
                    Xác định phân bố vi khuẩn bằng kiểm tra chính xác<br/>
                    kéo dài tuổi thọ đáng kể với chăm sóc cá nhân hóa.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    Hệ thống phòng ngừa viêm quanh dựa trên dữ liệu
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      Theo dõi vi khuẩn gây viêm quanh Implant
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      Biện pháp phòng ngừa trước khi viêm xảy ra
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
                      Chăm sóc suốt đời dựa trên dữ liệu khách quan
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-[13px] text-[#888] bg-gray-50 p-3 rounded-lg leading-[1.5] border border-gray-100">
                <span className="font-bold text-[#008095]">Doctor&apos;s Note.</span> Giá trị của răng tự nhiên khoảng 30 triệu won. Chúng tôi bảo vệ răng quý giá của bạn bằng kiểm tra chính xác.
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Reason 5 */}
          <FadeInSection delay={500}>
          <div className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
               <span className="text-[100px] font-black text-[#008095] leading-none">5</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 05</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3">
                Cấy ghép tối thiểu, rạch tối thiểu
                <br />
                <span className="text-[#008095]">Ghép xương tối thiểu</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
                Với chẩn đoán kỹ thuật số chính xác
                <br />
                chỉ thực hiện thủ thuật tối thiểu cần thiết
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Cấy ghép tối thiểu', desc: 'Chỉ cần cấy 6 ở hàm trên, 4 ở hàm dưới vẫn chắc chắn' },
                  { title: 'Rạch tối thiểu', desc: 'Phẫu thuật rạch tối thiểu phục hồi nhanh' },
                  { title: 'Ghép xương tối thiểu', desc: 'Chỉ ghép xương tối thiểu với chẩn đoán chính xác' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-[#edf2f7] shadow-sm">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#f0f9ff] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#333] mb-0.5">{item.title}</p>
                      <p className="text-[13px] text-[#777] leading-[1.4]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeInSection>

        </div>
      </div>
    </div>
  );
}
