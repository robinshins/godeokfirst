type PageType = 'home' | 'implant' | 'denture' | 'whitening' | 'wisdom-tooth' | 'cavity-treatment' | 'gum-care' | 'tmj';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  page?: PageType;
}

const faqData: Record<PageType, FAQ[]> = {
  home: [
    {
      question: 'Kompleks stomatologiya mutaxassisi\nnima?',
      answer: 'Kompleks stomatologiya mutaxassisi — Koreya Sog\u02BCliqni saqlash vazirligi tomonidan tasdiqlangan, implant, protezlash, konservativ stomatologiya, milklarni davolash kabi stomatologiyaning barcha sohalarida diagnostika va davolash olib borishi mumkin bo\u02BClgan shifokor. Godeok First Dental bosh shifokori Li Donhyon shaxsan maslahat, operatsiya va operatsiyadan keyingi parvarishni amalga oshiradi.'
    },
    {
      question: 'Boshqa tish shifoxonalaridan\nnima farqi bor?',
      answer: 'Godeok First Dental-da Koreya Sog\u02BCliqni saqlash vazirligi tasdiqlagan kompleks stomatologiya mutaxassisi shaxsan davolaydi. Masʼul shifokor tez-tez almashtiladigan boshqa joylardan farqli, maslahatdan operatsiya va keyingi parvarishgacha bitta shifokor javobgar. Seul milliy universitetining aspiranturasini tugatgan, Osstem/Point/Dentis implant tadqiqot maslahatchisi — boy klinik tajriba.'
    },
    {
      question: 'Davolash narxi\nqimmat bo\u02BClishi mumkin',
      answer: 'Godeok First Dental arzon narxda yuqori sifatli davolash taqdim etadi. Sug\u02BCurta qoplamini maksimal darajada foydalanamiz, shuningdek foizsiz bo\u02BClib to\u02BClash va aksiyalar orqali moliyaviy yukni kamaytiramiz. Bepul AI maslahat orqali taxminiy narxni oldindan bilib olishingiz mumkin.'
    },
    {
      question: 'Birinchi tashrif\nqanday bo\u02BCladi?',
      answer: 'Birinchi tashrifda 3D CT bilan aniq diagnostika o\u02BCtkaziladi. So\u02BCngra kompleks stomatologiya mutaxassisi 1:1 maslahat orqali individual davolash rejasini tuzib, usul, narx va muddatni batafsil tushuntiradi.'
    }
  ],
  denture: [
    {
      question: 'Protez yoki implant —\nqaysi biri mos?',
      answer: 'Narx muhim bo\u02BClsa, sug\u02BCurta bilan qoplanadigan protez mos. Chaynash kuchi va qulaylik istasangiz, implant yaxshiroq. Godeok First Dental-da suyak holati, yosh va byudjetni kompleks baholab, eng mos davolashni tavsiya qilamiz.'
    },
    {
      question: '65 yoshdan katta —\nsug\u02BCurta imtiyozi bormi?',
      answer: 'Ha, 65 yoshdan katta kishilarga 2 ta implantgacha sog\u02BCliq sug\u02BCurtasi qoplanadi. Protezlar ham sug\u02BCurtaga kiradi, bu xarajatlarni sezilarli kamaytiradi. Sug\u02BCurta tafsilotlarini tashrifda tushuntiramiz.'
    },
    {
      question: 'All on X implant —\nsuyak yetarli bo\u02BClmasa ham mumkinmi?',
      answer: 'Suyak hajmi yetarli bo\u02BClmasa ham mumkin. All on X suyak holati yaxshi joylarga implant o\u02BCrnatib, suyak qo\u02BCshish operatsiyasini minimallashtirad. 3D CT aniq diagnostikadan keyin imkoniyat aniqlanadi.'
    },
    {
      question: 'To\u02BCliq implant davolash\nqancha vaqt davom etadi?',
      answer: 'All on X o\u02BCrtacha 3-6 oy. An\u02BCanaviy to\u02BCliq implant suyak qo\u02BCshish zaruriyatiga qarab 6 oy — 1 yilgacha. Operatsiyadan keyin darhol vaqtincha protez o\u02BCrnatiladi, shuning uchun tishsiz bir kun ham bo\u02BClmaysiz.'
    },
    {
      question: 'To\u02BCliq implantdan keyin\nhammasini yeyish mumkinmi?',
      answer: 'Ha, davolash muvaffaqiyatli tugagandan keyin ovqatlanish cheklovi deyarli yo\u02BCq. Chaynash kuchi tabiiy tishlarning 80-90% gacha tiklanadi, go\u02BCsht, meva kabi qattiq ovqatlarni qulay yeyish mumkin.'
    },
  ],
  implant: [
    {
      question: 'Faqat to\u02BCliq implant\nqilasizmi?',
      answer: 'Yo\u02BCq. Godeok First Dental bitta tish implantidan to\u02BCliq implantgacha (All on X) barcha turdagi implant davolashni amalga oshiradi. Bitta implant uchun ham raqamli navigatsiya tizimi qo\u02BCllaniladi.'
    },
    {
      question: 'Raqamli navigatsiyali operatsiya —\nqimmitmi?',
      answer: 'Godeok First Dental arzon narxda yuqori sifatli implant davolash taqdim etadi. Raqamli navigatsiyaning aniqligi birinchi marta to\u02BCg\u02BCri natijani taʼminlab, uzoq muddatda tejamkorroq. 65+ yoshda sug\u02BCurta qoplanadi, foizsiz bo\u02BClib to\u02BClash va aksiyalar mavjud.'
    },
    {
      question: 'Operatsiyadan keyin darhol\novqat yeyish mumkinmi?',
      answer: 'Ha, mumkin. Operatsiyadan keyin darhol vaqtincha tish o\u02BCrnatiladi. Tishsiz bir kun ham bo\u02BClmaysiz va doimiy protez o\u02BCrnatilgunga qadar oddiy hayotingizni davom ettirasiz.'
    },
    {
      question: 'Raqamli navigatsiya\noddiy operatsiyadan nima farqi bor?',
      answer: 'Raqamli navigatsiyada og\u02BCiz bo\u02BCshlig\u02BCining 3D skanerlashi o\u02BCtkaziladi, keyin kompyuterda virtual operatsiya qilinadi. Bu implantning eng mos holatini minimal xato va minimal kesim bilan hisoblaydi. Natijada protsedura vaqti qisqaradi, og\u02BCriq, shishish va suyak qo\u02BCshish zarurati kamayadi.'
    },
    {
      question: 'Implant davolash\nqancha vaqt davom etadi?',
      answer: 'Og\u02BCiz bo\u02BCshlig\u02BCi holatiga qarab odatda 3-6 oy. Operatsiyadan keyin darhol vaqtincha tish ishlatish mumkin, implant to\u02BCliq yopishgandan keyin doimiy protez o\u02BCrnatiladi. Aniq muddatni 3D CT diagnostikadan keyin aytamiz.'
    },
    {
      question: 'Implant operatsiyasi\nog\u02BCriqli bo\u02BCladimi?',
      answer: 'Sedatsiya (uyqu narkozi) tufayli protsedura qulay o\u02BCtadi. Operatsiya vaqtida og\u02BCriqni deyarli sezmaysiz, operatsiyadan keyin ham raqamli navigatsiyaning minimal kesimi tufayli shishish va og\u02BCriq oddiy operatsiyaga nisbatan ancha kam. Tayinlangan og\u02BCriq qoldiruvchi dorilar yetarli.'
    },
    {
      question: 'Implant haqiqatan ham\nprotezdan yaxshimi?',
      answer: 'Ha, farq katta. Protez tabiiy tishlarning chaynash kuchining 30% ini saqlaydi, implant esa 80-90% gacha tiklaydi. Olish-kiyish zaruriyati yo\u02BCq, parvarish oddiy — tabiiy tish kabi. Implant umr bo\u02BCyi xizmat qiladi va tabassumga ishonch qaytaradi.'
    }
  ],
  whitening: [
    {
      question: 'Tish oqartirish —\nhammaga mosmi?',
      answer: 'Sog\u02BClom voyaga yetgan ko\u02BCpchilik tish oqartirish protsedurasi o\u02BCtkazishi mumkin. Lekin tish churishi yoki milklar kasalligi bo\u02BClsa, avval davolash kerak. Homilador va emizikli ayollarga tavsiya etilmaydi. Protseduradan oldin mutaxassis aniq diagnostika o\u02BCtkazadi.'
    },
    {
      question: 'Professional oqartirish\nuy oqartirishdan yaxshimi?',
      answer: 'Ha, farq katta. Shifoxonada yuqori konsentratsiyali vodorod peroksidi ishlatiladi — tezkor natija. Uy oqartirishda past konsentratsiyali vositalar ishlatiladi, natija cheklangan. Bundan tashqari, shifoxonada mutaxassis milklarni to\u02BCliq himoya qilgandan keyin protsedura o\u02BCtkazadi, bu ancha xavfsiz.'
    },
    {
      question: 'Oqartirishdan keyin tishlar\nsezgir bo\u02BClib qoladimi?',
      answer: 'Godeok First Dental eng zamonaviy oqartirish uskunasini ishlatadi, sezgirlikni kamaytiradigan tarkibiy qismlar bilan. Protseduradan oldin aniq diagnostika, keyin parvarish usullarini batafsil ko\u02BCrsatamiz.'
    },
    {
      question: 'Oqartirish natijasi\nqancha vaqt davom etadi?',
      answer: 'Odatda 1-2 yil davom etadi, ovqatlanish odatlari va parvarishga bog\u02BCliq. Qahva, vino kamaytirilsa, chekish to\u02BCxtatilsa va muntazam tozalash o\u02BCtkazilsa, natija uzoqroq saqlanadi.'
    },
    {
      question: 'Tozalash va oqartirishni\nbirga qilsam chegirma bormi?',
      answer: 'Ha, tozalash va oqartirishni birga qilsangiz chegirma beriladi. Tozalashdan keyin oqartirish qilsangiz natija yanada yaxshi.'
    }
  ],
  'wisdom-tooth': [
    {
      question: 'Aql tishini olish —\nalbatta kerakmi?',
      answer: 'Og\u02BCrimasa ham aql tishi milklar yallig\u02BClanishi, tish churishi, tishlashning buzilishiga olib kelishi mumkin. 3D CT aniq diagnostikadan keyin zaruriyat aniqlanadi. O\u02BCz vaqtida olinmasa o\u02BCtkir yallig\u02BClanish, yondagi tish shikasti, jag\u02BC bo\u02BCg\u02BCimi kasalligi kabi muammolar paydo bo\u02BClishi mumkin. Yosh bo\u02BClgan sari tiklash tezroq va asorat xavfi kamroq.'
    },
    {
      question: 'Murakkab aql tishini ham\nolish mumkinmi?',
      answer: 'Ha, mumkin. Godeok First Dental boy tajribaga va universitet shifoxonasi darajasidagi tizimga ega. Gorizontal va to\u02BCliq ko\u02BCmilgan, oddiy shifoxonalardan katta kasalxonaga yuboradigan murakkab holatlarni 3D CT aniq diagnostika bilan xavfsiz olib tashlaydi.'
    },
    {
      question: 'Aql tishini olish —\nog\u02BCriqli bo\u02BCladimi?',
      answer: 'Eng zamonaviy og\u02BCriq qoldirish narkoz tizimi protsedura vaqtidagi og\u02BCriqni deyarli yo\u02BCqotadi. Xavotirlanayotgan bemorlarga sedatsiya (uyqu narkozi) mavjud. Protseduradan keyin shishish va og\u02BCriqni tayinlangan dorilar bilan nazorat qiladi. Yosh bo\u02BClgan sari tezroq tiklanadi.'
    },
    {
      question: 'Aql tishini olgandan keyin\nqanday tavsiyalar bor?',
      answer: 'Olgandan keyin issiq, achchiq ovqatlardan saqlanib, yumshoq ovqat yeying. 2-3 kun og\u02BCir jismoniy mashqlar va saunadan saqlaning. Tayinlangan antibiotik va yallig\u02BClanishga qarshi dorilarni muntazam iching. Marlini 30 daqiqa — 1 soat tishlang, kuchli tish tozalash va naycha ishlatishdan saqlaning. Batafsil ko\u02BCrsatmalarni protseduradan keyin beramiz.'
    },
    {
      question: 'Aql tishini tez\nolish mumkinmi?',
      answer: '3D CT suratga olib diagnostikadan keyin darhol olish mumkin. Kompleks davolash tizimi bilan diagnostika, olish, keyingi parvarish — barchasini bir tashrifda tugatish mumkin. Lekin kuchli yallig\u02BClanish bo\u02BClsa, avval yallig\u02BClanishga qarshi davolash xavfsizroq. Individual muddatni aniqlaymiz.'
    },
  ],
  'cavity-treatment': [
    {
      question: 'Boshqa joyda olish kerak deyishdi —\nsaqlab qolish mumkinmi?',
      answer: 'Ha, ehtimol yuqori. Godeok First Dental-ning kompleks stomatologiya mutaxassisi aniq diagnostika o\u02BCtkazib, oddiy shifoxona topa olmagan saqlash usulini topadi. Tabiiy tishni saqlash bizning birinchi ustuvorimiz. Aniq diagnostikadan keyin eng yaxshi usulni tushuntiramiz.'
    },
    {
      question: 'Nerv kanali davolashi —\nog\u02BCriqli bo\u02BCladimi?',
      answer: 'Eng zamonaviy og\u02BCriq qoldirish narkoz tizimi og\u02BCriqni minimallashtirad. Xavotirlanayotgan bemorlarga sedatsiya mavjud. Mutaxassisning aniq davolashi takrorlanish va yon ta\u02BCsirlarni kamaytiradi, davolashdan keyin doimiy parvarish qilinadi.'
    },
    {
      question: 'Tish churishi davolash —\nuzoqmi?',
      answer: 'Boshlang\u02BCich churishni kompozit plomba bilan tez davolaydi. Keng churishni inley tizimi bilan davolaydi. Nerv kanali davolash kerak bo\u02BClsa 2-3 marta kelasiz, lekin aniq davolash kelish sonini kamaytiradi. Aniq muddatni tekshiruvdan keyin aytamiz.'
    },
    {
      question: 'Tish churishi davolash\nsug\u02BCurtaga kiradimi?',
      answer: 'Ha, aksariyat tish churishi davolash sog\u02BCliq sug\u02BCurtasiga kiradi. Kompozit plomba, nerv kanali davolash, toj — asosiy davolash sug\u02BCurta bilan mumkin. Inley/onleyda qo\u02BCshimcha to\u02BClov kerak bo\u02BClishi mumkin. Aniq narx va qoplash doirasini birinchi tashrifda tushuntiramiz.'
    }
  ],
  'tmj': [
    {
      question: 'Jag\u02BC tovush chiqaradi —\ndavolash kerakmi?',
      answer: 'Jag\u02BCdagi tovush bo\u02BCg\u02BCim diskining holati o\u02BCzgarganining belgisi. Og\u02BCrimasa ham, davolanmasa disk shikasti kuchayib, og\u02BCizni ochishda cheklov yoki surunkali og\u02BCriq paydo bo\u02BClishi mumkin.\n\nErta diagnostika bilan oddiy davolash orqali yaxshilanish mumkin.'
    },
    {
      question: 'Splint (tishlash barqarorlashtirgichi) —\nalbatta kerakmi?',
      answer: 'Tish g\u02BCijirlatish yoki tish siqish sabab bo\u02BClsa, splint eng samarali davolash usuli. U uyqu vaqtida jag\u02BC bo\u02BCg\u02BCimiga tushadigan haddan tashqari yukni taqsimlaydi va bo\u02BCg\u02BCimni himoya qiladi.\n\nSplint individual tayyorlanadi, muntazam tishlash sozlash davolash samaradorligini oshiradi.'
    },
    {
      question: 'Jag\u02BC bo\u02BCg\u02BCimi davolash\nqancha vaqt davom etadi?',
      answer: 'O\u02BCtkir og\u02BCriq dori va fizioterapiya bilan 1-2 haftada yaxshilanadi. Splint davolash odatda 3-6 oy.\n\nAlomatlar darajasi va sababiga bog\u02BCliq. Aniq muddatni diagnostikadan keyin aniqlaymiz.'
    },
    {
      question: 'Jag\u02BC bo\u02BCg\u02BCimi davolash\nsug\u02BCurtaga kiradimi?',
      answer: 'Jag\u02BC bo\u02BCg\u02BCimi diagnostikasi uchun rentgen, dori-darmon buyurmasi va boshqalar sog\u02BCliq sug\u02BCurtasiga kiradi. Splint davolash sug\u02BCurtaga kirmaydi, lekin uzoq muddatda operatsiyadan ancha tejamkor.\n\nNarx haqida maslahatda tushuntiramiz.'
    }
  ],
  'gum-care': [
    {
      question: 'Faqat tozalash yetarlimi?',
      answer: 'Tozalash — tish toshini olib tashlashning birinchi bosqichi. Lekin milklar kasalligi rivojlangan bo\u02BClsa, maxsus asboblar bilan milklarning chuqur qismlaridagi bakteriyalarni olib tashlash uchun aniq davolash kerak.\n\nHar 6 oyda milklar davolash qildirsa tabiiy tishlarni uzoq vaqt saqlash mumkin.'
    },
    {
      question: 'Milklar davolash —\nog\u02BCriqli bo\u02BCladimi?',
      answer: 'Xavotirlanmang. Og\u02BCriq qoldirish narkoz tizimimiz bor, shuning uchun davolash noqulayliksiz o\u02BCtadi.\n\nKo\u02BCpchilik bemorlar "Tish shifoxonasida davolash shunday qulay bo\u02BClishi mumkin ekan" deb hayron qolishadi.'
    },
    {
      question: 'Qanchalik tez-tez\nqildirish kerak?',
      answer: 'Asosiy tozalash yiliga 1 marta (sug\u02BCurta bilan), milklar davolash har 6 oyda.\n\nMilklar holati og\u02BCir bo\u02BClsa har 3 oyda parvarish. Muntazam parvarish implantsiz ham tabiiy tishlarni umr bo\u02BCyi saqlash imkonini beradi.'
    },
    {
      question: 'Sug\u02BCurta qoplami\nqanday?',
      answer: 'Tozalash yiliga 1 marta sog\u02BCliq sug\u02BCurtasiga kiradi. Milklar davolash kerak bo\u02BClsa sug\u02BCurta bilan bosqichma-bosqich o\u02BCtkazish mumkin.\n\nBatafsil ma\u02BClumotni maslahatda aytamiz.'
    },
    {
      question: 'Nega boshqa shifoxonalar milklar\ndavolashni taklif qilmaydi?',
      answer: 'Ochig\u02BCini aytganda, implantatsiya milklar davolashdan ko\u02BCproq daromad keltiradi. Shuningdek, milklar davolashdan keyin tish olish kerak bo\u02BClsa bemorlarning shikoyati paydo bo\u02BClishi mumkin, shuning uchun ko\u02BCpchilik shifoxonalar bundan qochadi.\n\nLekin biz tabiiy tishlarni saqlashni birinchi o\u02BCringa qo\u02BCyamiz, mutaxassisning aniq davolashi yuqori muvaffaqiyat ko\u02BCrsatkichiga ega.'
    }
  ]
};

export default function FAQSection({ page = 'home' }: FAQSectionProps) {
  const faqs = faqData[page];

  return (
    <div className="bg-white">
      <div className="max-w-[430px] mx-auto px-4 py-[60px]">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#292a2f] text-center mb-[60px]">
          Ko\u02BCp beriladigan savollar
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`py-10 space-y-5 ${
                index !== faqs.length - 1 ? 'border-b border-[#e9ebf1]' : ''
              }`}
            >
              <h3 className="text-[22px] font-bold text-black leading-[1.4] whitespace-pre-line">
                {faq.question}
              </h3>
              <p className="text-[17px] font-medium text-[#5d5f6d] leading-[1.59] pr-5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
