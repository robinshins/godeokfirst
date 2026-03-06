'use client';

import Image from 'next/image';

export default function TreatmentMethodsSection() {
  return (
    <div className="bg-white w-full py-[60px] px-4">
      <div className="max-w-[375px] mx-auto">
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <h2 className="font-['Pretendard_JP'] font-bold text-[32px] leading-[1.35] tracking-[-0.64px] text-black text-center w-full">
              Цоорол эмчлэх аргууд
            </h2>
            <p className="font-['Pretendard_JP'] font-semibold text-base leading-[1.4] tracking-[-0.32px] text-[#727582] text-center w-full">
              Цоорлын хэмжээнээс хамаарч хамгийн тохиромжтойг сонгоно
            </p>
          </div>

          {/* Treatment Methods */}
          <div className="flex flex-col gap-6 items-start w-full">
            {/* 레진 치료 */}
            <div className="bg-[#f8f9fb] rounded-[24px] w-full overflow-hidden">
              <div className="h-[200px] w-full relative overflow-hidden">
                <Image
                  src="/images/qray-photo2.jpg"
                  alt="Резин эмчилгээ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#e8f4ff] px-3 py-1 rounded-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#006aff]">
                        Жижиг цоорол
                      </p>
                    </div>
                  </div>
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                    Резин эмчилгээ
                  </h3>
                </div>
                <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#5d5f6d]">
                  Жижиг цоорлыг резин материалаар нөхдөг эмчилгээ.<br />
                  Шүдний өнгөтэй ижил тул гоо зүйн хувьд сайн бөгөөд ихэнхдээ нэг өдрийн дотор дуусна.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Нэг өдрийн эмчилгээ
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Байгалийн өнгө
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Хямд үнэтэй
                  </span>
                </div>
              </div>
            </div>

            {/* 인레이 치료 */}
            <div className="bg-[#f8f9fb] rounded-[24px] w-full overflow-hidden">
              <div className="h-[200px] w-full relative overflow-hidden">
                <Image
                  src="/images/microscope.jpg"
                  alt="Инлей эмчилгээ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#fff4e5] px-3 py-1 rounded-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#f57400]">
                        Дунд зэргийн цоорол
                      </p>
                    </div>
                  </div>
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                    Инлей эмчилгээ
                  </h3>
                </div>
                <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#5d5f6d]">
                  Цоорол арай том үед шаарддаг эмчилгээ.<br />
                  Шүдний хэлбэрийг тохируулан гадна дээрээс хатуу протез наадаг бөгөөд бат бөх, удаан эдэлнэ.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Бат бөх
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Нарийн тохирох
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Удаан эдлэх
                  </span>
                </div>
              </div>
            </div>

            {/* 신경치료 */}
            <div className="bg-[#f8f9fb] rounded-[24px] w-full overflow-hidden">
              <div className="h-[200px] w-full relative overflow-hidden">
                <Image
                  src="/images/microscope-nerve-canal.webp"
                  alt="Сувгийн эмчилгээ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#ffeef0] px-3 py-1 rounded-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#ff4b6e]">
                        Гүн цоорол
                      </p>
                    </div>
                  </div>
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                    Сувгийн эмчилгээ
                  </h3>
                </div>
                <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#5d5f6d]">
                  Цоорол мэдрэлд хүрсэн үед шаарддаг эмчилгээ.<br />
                  Халдварлагдсан мэдрэлийг авч, шүдний дотор цэвэрлэж, дүүргэн төрөлх шүдийг хадгална.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Төрөлх шүдийг хадгална
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Өвдөлт арилгана
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Мэргэжлийн эмчилгээ
                  </span>
                </div>
              </div>
            </div>

            {/* 크라운 치료 */}
            <div className="bg-[#f8f9fb] rounded-[24px] w-full overflow-hidden">
              <div className="h-[200px] w-full relative overflow-hidden">
                <Image
                  src="/images/crown-photo.png"
                  alt="Кроун эмчилгээ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#f0e6ff] px-3 py-1 rounded-full">
                      <p className="font-['Pretendard_JP'] font-semibold text-[13px] leading-[1.4] tracking-[-0.26px] text-[#8b5cf6]">
                        Хүнд гэмтэл
                      </p>
                    </div>
                  </div>
                  <h3 className="font-['Pretendard_JP'] font-bold text-[24px] leading-[1.35] tracking-[-0.48px] text-black">
                    Кроун эмчилгээ
                  </h3>
                </div>
                <p className="font-['Pretendard_JP'] font-medium text-[15px] leading-[1.6] tracking-[-0.3px] text-[#5d5f6d]">
                  Сувгийн эмчилгээний дараа эсвэл шүдний их хэсэг гэмтсэн үед.<br />
                  Шүдийг бүхэлд нь бүрхэж хамгаалах протез юм.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Хамгаалах функц
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Бат бөх материал
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#5d5f6d]">
                    Урт хугацааны хэрэглээ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
