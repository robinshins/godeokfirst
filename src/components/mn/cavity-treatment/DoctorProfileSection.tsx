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
              Шүд авах уу?<br />
              Эрт байна!
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-[24px] leading-[1.6] tracking-[-0.48px] w-full">
              Шүд хадгалах мэргэжилтэн эцэс хүртэл эмчилнэ
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            {/* Doctor Image Card */}
            <div className="bg-white rounded-[20px] shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] w-full overflow-hidden">
              <div className="h-[280px] w-full relative overflow-hidden">
                <Image
                  src="/images/cavity-doctor-profile.png"
                  alt="Шүд хадгалах мэргэжилтэн Бэ Ин Хё эмч"
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
                    Бэ Ин Хё эмч
                  </h3>
                  <div className="flex flex-col h-full justify-end w-[120px]">
                    <p className="font-['Pretendard_JP'] font-bold text-[18px] leading-[1.5] tracking-[-0.36px]">
                      Шүд хадгалах мэргэжилтэн
                    </p>
                  </div>
                </div>
                <div className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.6] tracking-[-0.48px] whitespace-nowrap">
                  <p>Шүдний эмч, эм зүйчийн тусгай зөвшөөрөлтэй</p>
                  <p>ЭМНЗЯ-аас баталгаажуулсан шүд хадгалах мэргэжилтэн</p>
                </div>
              </div>

              {/* Credentials List */}
              <ul className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.4] tracking-[-0.3px] opacity-80 w-full space-y-[10px] list-disc pl-[22.5px]">
                <li>Пусан Үндэсний Их Сургуулийн Шүдний Эмнэлэгт шүд хадгалах сургалт дүүргэсэн</li>
                <li>Пусан Үндэсний Их Сургуулийн Шүдний дээд сургуулийн докторын сургалт дүүргэсэн<br />(Шүд хадгалах чиглэл)</li>
                <li>Шүдний их эмч хамгийн өндөр үнэлгээтэй төгссөн</li>
                <li>Их сургуулийн шүд хадгалах нийгэмлэгийн гишүүн</li>
                <li>Солонгосын сувгийн эмчилгээний нийгэмлэгийн гишүүн</li>
                <li>Солонгосын шүдний наалдах нийгэмлэгийн гишүүн</li>
                <li>Солонгосын шүдний материалын нийгэмлэгийн гишүүн</li>
                <li>Солонгосын шүдний гоо сайхны нийгэмлэгийн гишүүн</li>
                <li>Өмнө нь Гүүд Смайл Шүдний Эмнэлгийн захирал</li>
                <li>Өмнө нь Плант Шүдний Эмнэлгийн захирал</li>
              </ul>

              {/* 보존과 전문 진료 소개 */}
              <div className="flex flex-col gap-6 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <h4 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px]">
                    Төрөлх шүдийг хадгалах<br />онцгой эмчилгээ
                  </h4>
                  <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] opacity-80">
                    Төрөлх шүдийг хадгалах нь шүдний эмчийн үүрэг гэж итгэдэг тул төрөлх шүдийг аль болох хадгалж, эмчилж хичээдэг
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
                            Сувгийн эмчилгээ, дахин сувгийн эмчилгээ
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Өндөр нарийвчлал шаарддаг сувгийн эмчилгээ нь шүд хадгалах мэргэжлийн онцлог чиглэл юм
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
                            Хонхорцог сэргээх
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Хүүхдийн сувгийн эмчилгээ гэж нэрлэгддэг эмчилгээ бөгөөд байнгын шүдний зогссон мэдрэлийг дахин ургуулж, шүдний үндэс хөгжихэд туслана
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
                            Гэмтсэн шүдний эмчилгээ
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Олон төрлийн клиникийн туршлагаар гэмтсэн шүдийг хурдан оношлож, арга хэмжээ авна
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
                            Үндэсний үзүүр огтлох мэс засал
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Өмнө нь авах шаардлагатай байсан үндэсний үрэвсэлийг микроскопоор арилгаж шүдийг хадгалах эмчилгээ
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
                            Шүд дахин суулгах
                          </p>
                          <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] opacity-80">
                            Шүдийг авч, үрэвслийн шалтгааныг арилгаж, дахин суулгах эмчилгээ
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 환자 맞춤 상담 강조 */}
                    <div className="bg-[#006aff]/20 backdrop-blur-sm px-4 py-3 rounded-xl w-full border border-[#006aff]/30">
                      <p className="font-['Pretendard_JP'] font-semibold text-[14px] leading-[1.5] tracking-[-0.28px] text-white">
                        💡 Шүд хадгалах мэргэжилтний хувьд өвчтөн бүрт нарийн зөвлөгөө өгч, баялаг туршлагаас хамгийн шаардлагатай эмчилгээг санал болгоно
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
                alt="Бэ Ин Хё эмч микроскопоор эмчилж байна"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-purple-50">
              <p className="font-['Pretendard_JP'] font-bold text-[16px] leading-[1.5] tracking-[-0.32px] text-[#006aff] text-center">
                Төрөлх шүдийг хадгалах сонголт
              </p>
              <p className="font-['Pretendard_JP'] font-medium text-[14px] leading-[1.5] tracking-[-0.28px] text-[#5d5f6d] text-center mt-1">
                Шүд авахгүйгээр хадгалахын тулд<br />их сургуулийн түвшний микроскопоор нарийн эмчилнэ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
