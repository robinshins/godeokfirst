'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4 bg-[#21314E]">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              Chuyên gia Nha khoa Tổng hợp<br />trực tiếp khám
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[20px] leading-[1.6] tracking-[-0.4px] w-full text-[#4DC8D8]">
              Godeok First Dental Bác sĩ trưởng
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Bác sĩ trưởng Lee Dong-hyun"
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
                    Lee Dong-hyun
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Bác sĩ trưởng
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>được Bộ Y tế Phúc lợi chứng nhận Chuyên gia Nha khoa Tổng hợp</p>
                  <p>Giáo sư thỉnh giảng BV Nha khoa Đại học Chosun</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>Tốt nghiệp Khoa Nha ĐH Chosun</li>
                <li>Hoàn thành chuyên khoa Nha khoa Tổng hợp BV Nha khoa ĐH Chosun</li>
                <li>Hội viên chính thức Hội Nha khoa Tổng hợp Hàn Quốc</li>
                <li>Hội viên chính thức Hội Implant Hàm mặt Hàn Quốc</li>
                <li>Chuyên gia Implant điều hướng kỹ thuật số</li>
                <li>Khám một lần Implant·Phục hình·Điều trị tủy</li>
              </ul>

              {/* 보존과 trước문 khám 소개 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    răng tự nhiên Điều trị bảo tồn đặc biệt<br />để bảo vệ răng tự nhiên
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    răng tự nhiên coi việc cứu răng là sứ mệnh của nha sĩ, cứu và bảo tồn răng tự nhiên tối đa.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* khám các hạng mục */}
                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Điều trị tủy, Tái điều trị tủy
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Điều trị tủy đòi hỏi kỹ thuật tinh tế là lĩnh vực chuyên môn của nha khoa bảo tồn.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Phẫu thuật tái sinh tủy
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Phẫu thuật tái sinh tủy còn gọi là điều trị tủy trẻ em, hồi sinh thần kinh của răng vĩnh viễn ngừng phát triển để chân răng tiếp tục mọc.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Xử lý răng chấn thương
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Thông qua kinh nghiệm lâm sàng đa dạng, chẩn đoán trước tiên hậu của răng sau chấn thương và ứng phó nhanh chóng.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
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
                            Là điều trị độ khó cao loại bỏ viêm ở chân răng vốn phải nhổ để bảo tồn.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 w-full">
                        <div className="shrink-0 w-5 h-5 mt-0.5">
                          <Image
                            src="/icons/check-teal.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            Phẫu thuật tái cấy răng
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Là điều trị nhổ răng, loại bỏ phần gây viêm rồi cấy lại.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* bệnh nhân 맞춤 tư vấn 강조 */}
                    <div className="bg-[#008095]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#008095]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 Với tư cách chuyên gia bảo tồn, dựa trên kinh nghiệm phong phú về mọi khám, tiến hành điều trị cần thiết nhất thông qua tư vấn đầy đủ với bệnh nhân.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 트리오스5 + trước문의 강조 카드 */}
          <div className="bg-gradient-to-br from-[#008095] to-[#006d80] rounded-[20px] p-6 w-full">
            <p className="font-['Pretendard_JP'] text-[12px] font-bold text-white/60 uppercase tracking-[2px] mb-3">WHY GODUK FIRST</p>
            <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] text-white mb-4">
              Chuyên gia Nha khoa Tổng hợp<br />trực tiếp khám từ sâu răng đến điều trị tủy
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Giáo sư thỉnh giảng BV Nha khoa ĐH Chosun',
                'Máy quét miệng Trios5 — Lấy dấu số chính xác',
                'sâu răng·inlay·Điều trị tủy Kinh nghiệm lâm sàng phong phú',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#4DC8D8] text-[13px]">✓</span>
                  <span className="text-white/90 text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
