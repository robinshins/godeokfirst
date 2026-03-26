import Image from 'next/image';

export default function AfterCareSection() {
  const careItems = [
    {
      icon: '🔍',
      title: 'Muntazam tekshiruv tizimi',
      desc: 'Implant oʼrnatilgandan keyin 3 oy, 6 oy, 1 yil oraligʼida aniq tekshiruv oʼtkazib muammolarni erta aniqlaydi.',
    },
    {
      icon: '🦷',
      title: 'Implant atrofini tozalash',
      desc: 'Maxsus jihozlar bilan implant atrofidagi bakteriya pardani olib tashlab, yalligʼlanish oldini olish uchun shaxsiy parvarish oʼtkazadi.',
    },
    {
      icon: '📋',
      title: 'Shaxsiy parvarish rejasi',
      desc: 'Ogʼiz holati boʼyicha shaxsiy parvarish rejasini tuzib, toʼgʼri tish yuvish va tish ipi ishlatish usulini oʼrgatadi.',
    },
  ];

  const steps = [
    { step: '1', title: 'Muntazam tekshiruv', desc: '3·6·12 oy oraligʼi' },
    { step: '2', title: 'Mutaxassis tozalash', desc: 'Yalligʼlanish oldini olish' },
    { step: '3', title: 'Tishlov tekshiruvi', desc: 'Chaynash kuchi muvozanati' },
    { step: '4', title: 'Umr boʼyi parvarish', desc: 'Doimiy keyingi javobgarlik' },
  ];

  return (
    <div className="bg-[#0b1727] w-full flex justify-center">
      <div className="box-border flex flex-col gap-[50px] items-center px-4 py-[60px] relative w-full max-w-[430px]">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
          <div className="h-8 overflow-clip relative shrink-0 w-[180px]">
            <Image
              src="/고덕퍼스트치과-로고-(화이트).png"
              alt="Godeok First Dental"
              width={375}
              height={84}
              className="h-20 w-auto object-contain -mt-[18px]"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center relative shrink-0 w-full">
            <p className="text-[14px] font-bold text-[#4DC8D8] tracking-[3px] uppercase">
              AFTER CARE
            </p>
            <h2 className="font-bold leading-[1.35] not-italic text-[32px] text-white text-center tracking-[-0.64px] w-full">
              Oʼrnatishdan muhimroq narsa<br />
              keyingi parvarishdir
            </h2>
            <p className="font-medium leading-[1.6] not-italic text-[#a0c4d4] text-[15px] text-center tracking-[-0.32px] w-full">
              &quot;Umr boʼyi foydalanishingiz uchun<br />
              oxirigacha javob beramiz&quot;
            </p>
          </div>
        </div>

        {/* Keyingi parvarish bandlari */}
        <div className="flex flex-col gap-4 w-full">
          {careItems.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#008095]/20 flex items-center justify-center shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-[16px] mb-1">{item.title}</p>
                  <p className="text-[#a0c4d4] text-[13px] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operatsiya xonasi surati */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/images/goduk_images/수술실.jpg"
            alt="Godeok First Dental operatsiya xonasi"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold text-[15px]">Toza va xavfsiz operatsiya muhiti</p>
            <p className="text-white/80 text-[13px]">Universitet shifoxonasi darajasida infektsiya nazorati tizimi</p>
          </div>
        </div>

        {/* 4 bosqichli jarayon */}
        <div className="w-full">
          <p className="text-[#4DC8D8] text-[13px] font-bold mb-5 text-center tracking-[2px]">
            Godeok First Dental keyingi parvarish jarayoni
          </p>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-2">
                <div className="bg-[#008095] rounded-full w-11 h-11 flex items-center justify-center">
                  <span className="text-white font-black text-[16px]">{s.step}</span>
                </div>
                <p className="text-white text-[12px] font-bold text-center">{s.title}</p>
                <p className="text-[#a0c4d4] text-[11px] text-center leading-[1.3]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Taʼkidlash xabari */}
        <div className="bg-gradient-to-r from-[#008095] to-[#006B7A] rounded-2xl p-5 w-full text-center shadow-lg">
          <p className="text-white font-bold text-[16px] leading-[1.5]">
            Implant operatsiyasidan keyin ham<br />
            Bosh shifokor shaxsan oxirigacha javob beradi
          </p>
        </div>
      </div>
    </div>
  );
}
