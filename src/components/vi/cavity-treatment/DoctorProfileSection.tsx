'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              Nhổ răng?<br />
              Vẫn còn quá sớm!
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              Bác sĩ chuyên khoa bảo tồn sẽ cứu răng đến cùng
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Trưởng khoa Bảo tồn Bae In-hye"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col gap-10 items-start text-white w-full">
              {/* Name and Title */}
              <div className="flex flex-col gap-5 items-start w-full">
                <div className="flex gap-[10px] items-center text-center w-full">
                  <h3 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    Bae In-hye
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[120px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Trưởng khoa Bảo tồn
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>Sở hữu song bằng Bác sĩ & Dược sĩ</p>
                  <p>Chuyên gia Bảo tồn răng (Bộ Y tế chứng nhận)</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>Hoàn thành nội trú khoa Bảo tồn răng, BV Nha khoa ĐH Quốc gia Pusan</li>
                <li>Hoàn thành chương trình Tiến sĩ tại ĐH Nha khoa ĐH Quốc gia Pusan (Chuyên ngành Bảo tồn răng)</li>
                <li>Thạc sĩ Nha khoa, Tốt nghiệp Thủ khoa</li>
                <li>Thành viên chính thức của Hiệp hội Bảo tồn Nha khoa Hàn Quốc</li>
                <li>Thành viên chính thức của Hiệp hội Nội nha Hàn Quốc</li>
                <li>Thành viên chính thức của Hiệp hội Nha khoa Kết dính Hàn Quốc</li>
                <li>Thành viên của Hiệp hội Vật liệu Nha khoa Hàn Quốc</li>
                <li>Thành viên của Hiệp hội Nha khoa Thẩm mỹ Hàn Quốc</li>
                <li>Nguyên Viện trưởng Nha khoa Good Smile</li>
                <li>Nguyên Viện trưởng Nha khoa Plant</li>
              </ul>

              {/* 보존과 전문 진료 소개 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    Điều trị bảo tồn đặc biệt<br />để bảo vệ răng thật
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    Coi việc cứu răng thật là sứ mệnh của bác sĩ nha khoa, chúng tôi nỗ lực hết sức để cứu và bảo tồn răng thật.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* 진료 항목들 */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Điều trị tủy, Điều trị tủy lại
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Điều trị tủy đòi hỏi kỹ thuật tỉ mỉ là lĩnh vực chuyên môn của khoa Bảo tồn răng.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Tái tạo tủy răng (Pulpal regeneration)
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Giúp hồi sinh thần kinh của răng vĩnh viễn đã ngừng phát triển, cho phép chân răng tiếp tục lớn lên.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Xử lý răng bị chấn thương
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Chẩn đoán tiên lượng răng sau chấn thương và ứng phó nhanh chóng thông qua kinh nghiệm lâm sàng.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Phẫu thuật cắt chóp chân răng
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Loại bỏ viêm nhiễm ở chóp chân răng mà trước đây buộc phải nhổ bỏ bằng kính hiển vi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-blue.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Cấy lại răng (Dental replantation)
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Phương pháp nhổ răng ra, loại bỏ nguyên nhân gây viêm nhiễm rồi cấy lại răng vào vị trí cũ.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 환자 맞춤 상담 강조 */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 Với tư cách là chuyên gia bảo tồn, tôi sẽ tiến hành điều trị cần thiết nhất sau khi tư vấn kỹ lưỡng với bệnh nhân.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Microscope Treatment Photo */}
          <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
            <div className="h-[280px] w-full relative overflow-hidden">
              <Image
                src="/images/microscope-treatment-photo.jpg"
                alt="Bác sĩ Bae In-hye đang điều trị bằng kính hiển vi"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                Lựa chọn để cứu răng thật
              </p>
              <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                Để bảo tồn đến cùng mà không cần nhổ,<br />chúng tôi điều trị chính xác bằng kính hiển vi cấp đại học
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

