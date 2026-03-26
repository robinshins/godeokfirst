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
              онцгой байх шалтгаан
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
 Их сургуулийн эмнэлэг <br />
 <span className="text-[#008095] text-[24px]">Имплант <br/>шүдний эмч нарт заадаг</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
 Имплант мэс засал, чухал.
 Их сургуулийн эмнэлэг мэс засал мэс засал хийх 
                <span className="font-bold text-[#333]"> Чосон их сургуулийн шүдний эмнэлгийн зочин профессор</span> биечлэн мэс засал хийнэ.
              </p>

 {/* эмч ажлын туршлага Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
 alt="Эмч Ли Донхён баталгаажуулалт"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="Эмч Ли Донхён ажлын туршлага болон Эрүүл мэндийн яам баталгаажуулалт"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                  />
                </div>
              </div>
              {/* эмч мэс засал зураг */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="Эмч Ли Донхён мэс засал "
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
 <p className="font-bold text-[#333] text-[15px] mb-1">Нийлмэл шүдний мэргэжилтэн </p>
 <p className="text-[13px] text-[#777] leading-[1.5]"> Имплант эцсийн хиймэл шүд <br/>Эрүүл мэндийн яам баталгаажуулалт мэргэжлийн эмч </p>
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
                      <p className="font-bold text-[#333] text-[15px] mb-1">Osstem·Point·Dentis Имплант судалгааны зөвлөлийн гишүүнвон</p>
 <p className="text-[13px] text-[#777] leading-[1.5]"> Имплант судалгааны зөвлөлийн гишүүнвон <br/>хамгийн сүүлийн үеийн технологи, тоног төхөөрөмжийг ашигладаг</p>
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
                Godeok First Dental үргэлж
                <br />
                <span className="text-[#008095]">2 удаа мэс засал хийдэг</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
 Ерөнхий эмч виртуал Имплант мэс засал
                <br />
                оновчтой байрлалыг загварчлаад бодит мэс засал хийнэ
              </p>

 {/* 3D дижитал навигаци */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <Image
                  src="/images/goduk_images/3d.webp"
                  alt="3D дижитал навигаци мэс засал"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

 {/* давуу тал дахин */}
              <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-xl p-4 mb-5 shadow-lg shadow-[#008095]/20">
                <p className="font-bold text-white text-[14px] text-center leading-[1.5]">
                  Хурдан, тав тухтай мэс заслаар
                  <br />
                  хавдар, өвдөлт, ясны шилжүүлэг хамгийн бага
                </p>
              </div>

              {/* 5шатлал процесс */}
              <div className="space-y-2">
                {[
                  { step: 1, title: '3D амны сканнер', desc: 'Амны хөндийг сканнердаж нарийвчилсан оношилгоо' },
                  { step: 2, title: 'Виртуал мэс заслын загвар', desc: 'Компьютер дээр оновчтой суулгах төлөвлөгөө' },
                  { step: 3, title: 'Чиглүүлэгч суурилуулах', desc: '1мм алдаагүй нарийвчилсан чиглүүлэгч' },
                  { step: 4, title: 'Хамгийн бага зүслэгтэй мэс засал', desc: 'Мэс заслын хугацаа богино, өвдөлт/хавдар бага' },
                  { step: 5, title: 'Виртуал мэс заслын баталгаажуулалт', desc: 'Алдаа багасгаж сэтгэл ханамж нэмэгдэнэ' }
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
 зүслэг Имплант &
                <br />
                <span className="text-[#008095]">Тухайн өдрийн суулгалт</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-4">
                Буйл зүсэхгүй тул өвдөлт, хавдар бага,
                <br />
                Хурдан сэргэлт боломжтой
              </p>

 {/* мэс засал */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#f8fbfd] mb-5 shadow-inner">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/goduk_images/flapless-implant-surgery.webp"
 alt="зүслэг Имплант мэс засал"
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
 <span className="font-bold"> зүслэг Имплант</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-white font-medium">
                    <li>• Буйл зүсэхгүйгээр жижиг нүхээр суулгах</li>
                    <li>• Цус алдалт, өвдөлт, хавдар хамгийн бага</li>
                    <li>• Мэс заслын дараа хурдан амьдралд буцах</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#edf2f7] rounded-xl p-5 text-[#333]">
                   <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                    <span className="font-black text-lg text-[#008095]">02</span>
 <span className="font-bold">шүд авах Тухайн өдрийн суулгалт</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
 <li>• шүд авах Имплант суулгалт</li>
                    <li>• Ирэлтийн тоо болон эмчилгээний хугацаа богиносно</li>
                    <li>• Буйлны яс алдагдлыг багасгах</li>
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
 Имплант 
                <br />
                <span className="text-[#008095]">Шинжлэх ухааны дараах арчилгаа</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
 Имплант шалтгаан &apos;үрэвсэл&apos;.<br/>
 <span className="font-bold text-[#333]"> </span> минут <br/>
 Имплант периимплантит вон зөрүү.
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] mb-3 space-y-4">
                <div>
                   <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Суулгахаас арчилгаа илүү чухал
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
 байгалийн шүд үрэвсэл Имплант.<br/>
 нарийвчилсан бактери минут <br/>
 арчилгаа.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-[#333] text-[15px] mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008095]">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
 периимплантит систем
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-[#666]">
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
 Имплант периимплантит 
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
 үрэвсэл 
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#008095] font-bold">•</span>
 насан туршдаа арчилгаа
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-[13px] text-[#888] bg-gray-50 p-3 rounded-lg leading-[1.5] border border-gray-100">
 <span className="font-bold text-[#008095]">Doctor&apos;s Note.</span> байгалийн шүд 3,000 вон. нарийвчилсан шүд.
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
                хамгийн багасуулгалт, хамгийн багазүслэг
                <br />
 <span className="text-[#008095]">хамгийн бага </span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6">
 нарийвчилсан дижитал 
                <br />
 шаардлагатай хамгийн бага явуулах
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
 { title:'хамгийн багасуулгалт', desc:'6, 4'},
 { title:'хамгийн багазүслэг', desc:'удаа хурдан Хамгийн бага зүслэгтэй мэс засал'},
 { title:'хамгийн бага', desc:'нарийвчилсан хамгийн бага явуулах'}
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
