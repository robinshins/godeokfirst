'use client';

import Image from 'next/image';

export default function DoctorProfileSection() {
  return (
    <div className="w-full py-[60px] px-4" style={{ background: 'linear-gradient(161deg, #021847 13.86%, #0B255C 19.07%, #000 28.55%)' }}>
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-start text-center text-white w-full">
            <h2 className="font-['Pretendard,sans-serif'] font-bold text-[36px] leading-[1.35] tracking-[-0.72px] w-full">
              拔牙？<br />
              还为时尚早！
            </h2>
            <p className="font-['Pretendard,sans-serif'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              牙体牙髓专科医生坚持保留到底
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="裴仁惠 牙体牙髓科院长"
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
                  <h3 className="font-['Pretendard,sans-serif'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] whitespace-nowrap">
                    裴仁惠
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[77px]">
                    <p className="font-['Pretendard,sans-serif'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      牙体牙髓科院长
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard,sans-serif'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>牙医 药师 双重执照</p>
                  <p>卫生福利部认证 牙体牙髓科专科医生</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>釜山大学牙科医院 牙体牙髓科 住院医师结业</li>
                <li>釜山大学 牙医学专业研究生院 博士结业<br />（牙体牙髓学）</li>
                <li>牙医学专业研究生院 牙医学硕士，第一名毕业</li>
                <li>大学牙体牙髓学会 正式会员</li>
                <li>大韩牙科根管治疗学会 正式会员</li>
                <li>韩国粘接牙医学会 正式会员</li>
                <li>大韩牙科材料学会 会员</li>
                <li>大韩美学牙科学会 会员</li>
                <li>前）Good Smile牙科 院长</li>
                <li>前）Plant牙科 院长</li>
              </ul>

              {/* 牙体牙髓科专业诊疗介绍 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard,sans-serif'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    为守护自然牙齿<br />特别的保留治疗
                  </h4>
                  <p className="font-['Pretendard,sans-serif'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    将保留自然牙齿视为牙医的使命，最大限度保留和守护自然牙齿。
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl w-full">
                  <div className="flex flex-col gap-4 items-start w-full">
                    {/* 诊疗项目 */}
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            根管治疗、再根管治疗
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            需要精细技术的根管治疗是牙体牙髓科的专业领域。
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            牙髓再生术
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            俗称儿童根管治疗的牙髓再生术，使生长停止的恒牙神经复活，让牙根继续生长。
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            外伤牙齿处置
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            通过丰富的临床经验，提前诊断外伤后牙齿的预后并迅速应对。
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            根尖切除术
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            利用显微镜去除以前需要拔除的牙根尖炎症，保留牙齿的治疗。
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
                          <p className="font-['Pretendard,sans-serif'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px]">
                            牙齿再植术
                          </p>
                          <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            拔除牙齿后去除引起炎症的部分，再重新植入的治疗。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 患者定制咨询强调 */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard,sans-serif'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 作为牙体牙髓科专科医生，基于对所有诊疗的丰富经验，与患者充分沟通后进行最必要的治疗。
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
                alt="裴仁惠院长显微镜诊疗照片"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard,sans-serif'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                保留自然牙齿的选择
              </p>
              <p className="font-['Pretendard,sans-serif'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                为了不拔牙坚持保留到底<br />用大学医院级显微镜精密治疗
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
