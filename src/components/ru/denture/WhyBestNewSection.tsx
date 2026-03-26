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
              Почему Godeok First Dental <br />
              особенны
            </h2>
          </div>
        </FadeInSection>

        {/* Reason Cards */}
        <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">

 {/* Reason 1: Специалист комплексной стоматологии + Университетская больница */}
          <FadeInSection delay={100} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">1</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 01</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Лечение у стоматолога,
                <br />
                <span className="text-[#008095]">Специалист комплексной стоматологии</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                стоматологической больницы Чосонбольница Бывший приглашенный профессор,<br />
                Стоматологии Сеульского национального университетааспирантура Имплант с отличием.<br />
                <span className="font-bold text-[#333]">Специалист комплексной стоматологии</span> лично лечение.
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/각종인증서.png"
 alt="врач и сертификация"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
 <span className="text-white text-[10px] font-medium"> · сертификация</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 h-[160px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/goduk_images/원장이력 등 걸려있는사진.jpg"
                    alt="врач квалификация"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute bottom-2 left-2 z-10">
                    <div className="bg-black/60 px-2 py-1 rounded-md">
                      <span className="text-white text-[10px] font-medium">врач квалификация</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Reason 2: богатый операция опыт */}
          <FadeInSection delay={200} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">2</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 02</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                1,200раз+ Имплант
                <br />
                <span className="text-[#008095]">0 случаев повторных операций</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 Годок Эдутаунвон после до<br />
 Повторная имплантация случаев один случаев тоже нет.<br />
 <span className="font-bold text-[#333]">результат и мастерство</span>.
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/수술하는모습.jpeg"
                  alt="Имплант операция "
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="bg-[#f8fbfd] rounded-xl p-4 border border-[#eef4f8] space-y-3">
                {[
                  { label: 'Имплант установка', value: '1,200раз+' },
                  { label: 'Годок Эдутаунвон после повторныйоперация', value: '0случаев' },
                  { label: 'Удовлетворенность пациентов', value: '4.9 / 5.0' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[14px] text-[#666]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.label}</span>
                    <span className="font-bold text-[#008095] text-[15px]" style={{ fontFamily: '"NanumSquare", sans-serif' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

 {/* Reason 3: точный операция */}
          <FadeInSection delay={300} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">3</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 03</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
 3D диагностика
                <br />
                <span className="text-[#008095]">точный индивидуально операция</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                3D CT минутанализ и цифровая навигация через<br />
                кость состояние оптимальный местоположение установка.<br />
 <span className="font-bold text-[#333]">минимальный разрез, Минимальная костная пластика</span> восстановление.
              </p>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/goduk_images/3d.webp"
 alt="3D Цифровая имплантация"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
 { title:'3D CT точный минутанализ', desc:'кость · 3D примерно'},
 { title:'операция', desc:'проектирование примерно установка'},
 { title:'новейший оборудование стоимость', desc:'сканер, система хранение'},
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

          {/* Reason 4: послеоперационный уход */}
          <FadeInSection delay={400} className="group bg-white rounded-3xl p-6 shadow-sm border border-[#edf2f7] hover:border-[#008095] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden relative w-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 select-none">
              <span className="text-[100px] font-black text-[#008095] leading-none">4</span>
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#008095]/10 text-[#008095] text-xs font-bold rounded-full mb-4">REASON 04</span>
              <h3 className="text-[24px] font-bold text-[#3e3a3a] leading-[1.3] mb-3" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                операция после
                <br />
                <span className="text-[#008095]">конец до ответственностьлечение</span>
              </h3>
              <p className="text-[15px] text-[#666] leading-[1.6] mb-6" style={{ fontFamily: '"NanumSquare", sans-serif' }}>
                Главный врач консультация от операция, поддержаниеуходдо<br />
 лично. во время сразу врач нет<br />
                <span className="font-bold text-[#333]">впервые от конец до такой врач</span> лечение.
              </p>

              <div className="bg-[#f8fbfd] rounded-xl p-5 border border-[#eef4f8] space-y-4">
                {[
 { icon:'🔍', title:'регулярный осмотр', desc:'6месяцев неделя примерно состояние проверка'},
 { icon:'🦷', title:'специалист', desc:'Имплант окружающий воспаление профилактика чистка'},
                  { icon: '📋', title: 'индивидуальный уход план', desc: 'пациент состояние подходящий индивидуальнотип поддержаниеуход' },
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
