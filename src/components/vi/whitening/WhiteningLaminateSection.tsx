'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function WhiteningLaminateSection() {
  const [showImages] = useState(false);

  return (
    <div className="bg-white w-full py-[60px] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute h-[636px] left-1/2 -translate-x-1/2 w-[375px] pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-gradient.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-[375px] mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-10 w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Tại sao? Nên chọn <br />
              <span className="text-[#006aff]">Mặt dán sứ Veneer kỹ thuật số không mài/mài tối thiểu</span> tại Medis Kyungsung?
            </h2>
            <p className="font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center">
              Chúng tôi tạo nên nụ cười hoàn hảo với thiết bị kỹ thuật số tối tân và chế độ bảo hành 2 năm
            </p>
          </div>

          {/* 실제 Before/After 이미지 */}
          <div className="flex flex-col gap-4 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-black text-center">
              Các ca thực hiện thực tế
            </h3>

            {/* Case 1 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before - 상단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-before.jpg"
                      alt="Mặt dán sứ Veneer Trước"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/vi/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="Khóa"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">Đăng nhập để xem ảnh Trước</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Trước
                      </p>
                    </div>
                  </div>
                </div>

                {/* After - 하단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case1-after.jpg"
                      alt="Mặt dán sứ Veneer Sau"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Sau
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-[20px] border border-[#e9ebf1] p-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                {/* Before - 상단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-before.jpg"
                      alt="Mặt dán sứ Veneer Trước"
                      fill
                      className={`object-cover ${!showImages ? 'blur-sm' : ''}`}
                    />
                  </div>
                  {!showImages && (
                    <Link href="/vi/login" className="absolute inset-0 cursor-pointer">
                      <div className="absolute inset-0 backdrop-blur-[10px] bg-white/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[52px] h-[52px] flex items-center justify-center">
                        <Image
                          src="/icons/lock.svg"
                          alt="Khóa"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full">
                        <p className="text-white text-xs font-medium whitespace-nowrap">Đăng nhập để xem ảnh Trước</p>
                      </div>
                    </Link>
                  )}
                  {/* Before Badge */}
                  <div className="absolute left-0 top-0 p-3 z-10">
                    <div className="bg-[#292a2f] rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Trước
                      </p>
                    </div>
                  </div>
                </div>

                {/* After - 하단 절반 */}
                <div className="bg-[#f3f6fb] h-[192px] overflow-hidden relative rounded-[20px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/laminate-before-after/case2-after.jpg"
                      alt="Mặt dán sứ Veneer Sau"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* After Badge SVG */}
                  <div className="absolute left-0 top-0 w-[196px] h-[86px]">
                    <Image
                      src="/images/after-badge.svg"
                      alt=""
                      width={196}
                      height={86}
                    />
                  </div>
                  {/* After Text */}
                  <div className="absolute left-0 top-0 p-3">
                    <div className="rounded-[10px] px-2.5 py-[5px]">
                      <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-white">
                        Sau
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}
            {!showImages && (
              <Link href="/vi/login" className="w-full">
                <button className="bg-white border border-[#e9ebf1] rounded-[18px] h-14 px-6 py-3 flex items-center justify-center w-full hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[18px] leading-[1.5] tracking-[-0.36px] text-[#006aff]">
                    Xem tất cả sau khi đăng nhập
                  </p>
                </button>
              </Link>
            )}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[24px] shadow-[0px_24px_50px_-12px_rgba(45,54,67,0.12)] p-6 flex flex-col gap-5 w-full">
            {/* 라미네이트란? */}
            <div className="bg-[#f3f6fb] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-black w-full">
                  Mặt dán sứ Veneer là gì?
                </p>
                <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] text-[#727582] w-full">
                  Là thủ thuật dán một miếng sứ (porcelain) mỏng có độ dày từ 0.3~0.7mm lên bề mặt trước của răng<br />
                  Giống như làm nail cho móng tay, bạn có thể coi đây là việc phủ một lớp &apos;tráng men trắng vĩnh viễn&apos; cho răng
                </p>
              </div>
            </div>

            {/* 핵심 장점 3가지 */}
            <div className="bg-[#006aff] rounded-[16px] p-5 flex flex-col gap-[14px] w-full">
              {[
                { title: 'Hoàn tất trong 24 giờ', desc: 'Thủ thuật nhanh chóng, sớm quay lại sinh hoạt bình thường (Phù hợp cho người bận rộn!)' },
                { title: 'Chế độ bảo hành 2 năm', desc: 'Có thể điều chỉnh ngay lập tức nếu bị nứt vỡ hoặc xỉn màu' },
                { title: 'Giá cả hợp lý', desc: 'Chính sách giá minh bạch và có hỗ trợ trả góp' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-0 w-full">
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-white whitespace-pre-line">
                    <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px]">
                      {benefit.title}
                    </p>
                    <p className="font-semibold text-[15px] leading-[1.4] tracking-[-0.3px] opacity-60">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 디지털 제작 과정 */}
          <div className="flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black text-center">
              Hệ thống sản xuất kỹ thuật số chính xác
            </h3>

            {/* 3D 디지털 스캔 영상 */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/digital-laminate-3d.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4 flex flex-col gap-3">
                <div>
                  <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                    Bước 1: Chẩn đoán ảo kỹ thuật số chính xác
                  </p>
                  <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                    Quét 3D răng bằng máy quét khoang miệng mà không cần lấy dấu gây khó chịu. Chẩn đoán và mô phỏng chính xác thông qua dữ liệu kỹ thuật số.
                  </p>
                </div>

                {/* 가상진단 특징 */}
                <div className="bg-white rounded-[12px] p-3 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">Báo cáo kết quả chẩn đoán:</span> Xem trước kết quả trước khi thực hiện thông qua chẩn đoán ảo
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#006aff] text-lg shrink-0">✓</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#37373e]">
                      <span className="font-bold text-[#006aff]">Chẩn đoán độ hài hòa với khuôn mặt:</span> Thiết kế nụ cười tự nhiên, phù hợp với khuôn mặt mà không lo răng quá trắng hay trông giả tạo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 밀링머신 제작 영상 */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/milling-machine.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  Bước 2: Sản xuất nhanh chóng bằng máy phay
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  Máy phay tối tân gia công chính xác khối sứ VITA MARK II. Hoàn tất trong vòng 24 giờ với chất liệu sứ có độ bền tương đương răng thật.
                </p>
              </div>
            </div>

            {/* 라미네이트 부착 영상 */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/laminate-fitting.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#f3f6fb] rounded-[16px] p-4">
                <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black mb-2">
                  Bước 3: Dán Veneer chính xác
                </p>
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                  Sau khi kiểm tra phục hình trước khi gắn, chúng tôi sẽ dán chính xác bằng kính hiển vi với kỹ thuật không mài hoặc mài tối thiểu.
                </p>
              </div>
            </div>
          </div>

          {/* 전문성 강조 */}
          <div className="bg-white rounded-[24px] border-2 border-[#006aff] p-6 flex flex-col gap-5 w-full">
            <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.4px] text-[#006aff] text-center">
              Sự chuyên nghiệp của Nha khoa Medis
            </h3>

            {/* 심미치과 펠로우 사진 */}
            <div className="bg-[#f3f6fb] rounded-[20px] overflow-hidden relative w-full aspect-[16/10]">
              <div className="relative w-full h-full -translate-x-[5%]">
                <Image
                  src="/images/cosmetic-dentistry-fellow.jpg"
                  alt="Chứng chỉ Fellow Nha khoa Thẩm mỹ"
                  fill
                  className="object-cover scale-[1.5]"
                />
              </div>
            </div>

            {/* 펠로우 설명 */}
            <div className="bg-gradient-to-br from-[#006aff] to-[#0052cc] rounded-[16px] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🏆</div>
                <p className="font-bold text-[17px] leading-[1.5] tracking-[-0.34px] text-white">
                  Thành viên Fellow của Hiệp hội Nha khoa Thẩm mỹ Hàn Quốc
                </p>
              </div>
              <div className="flex flex-col gap-2 text-white">
                <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] opacity-90">
                  <span className="font-bold">Fellow</span> là cấp độ chuyên gia cao nhất, cao hơn một bậc so với bác sĩ chuyên khoa thông thường
                </p>
                <div className="bg-white/10 rounded-[10px] p-3 flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">Hơn 10 năm kinh nghiệm chuyên môn</span> + Hơn 100 ca thành công
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">Chuyên gia được công nhận</span> qua các bài báo khoa học và hoạt động học thuật
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm shrink-0">•</span>
                    <p className="font-semibold text-[13px] leading-[1.4] tracking-[-0.26px]">
                      <span className="font-bold">Kỹ năng đạt trình độ cao nhất</span>, vượt qua kỳ kiểm định của Hiệp hội Nha khoa Thẩm mỹ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: '🏭', title: 'Hệ thống hợp tác với kỹ thuật viên nha khoa tại chỗ', desc: 'Có thể sản xuất và chỉnh sửa ngay lập tức tại phòng lab trong nha khoa' },
                { icon: '🔬', title: 'Thủ thuật không mài răng bằng kính hiển vi', desc: 'Bảo tồn răng thật bằng cách giảm thiểu tổn thương răng' },
                { icon: '💎', title: 'Khối sứ cao cấp VITA MARK II', desc: 'Độ bền và màu sắc tương đồng nhất với răng thật' }
              ].map((item, index) => (
                <div key={index} className="bg-[#f3f6fb] rounded-[16px] p-4 flex items-start gap-3">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[15px] leading-[1.5] tracking-[-0.3px] text-black">
                      {item.title}
                    </p>
                    <p className="font-semibold text-[14px] leading-[1.4] tracking-[-0.28px] text-[#727582]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/vi/consultation" className="w-full">
            <button className="bg-[#006aff] h-16 w-full rounded-[18px] px-6 py-4 hover:bg-[#0052cc] transition-colors">
              <p className="font-bold text-[20px] leading-[1.5] tracking-[-0.4px] text-white">
                Đặt lịch hẹn tư vấn Veneer
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

