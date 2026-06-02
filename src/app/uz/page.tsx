import GNB from '@/components/uz/GNB';
import HeroSection from '@/components/uz/HeroSection';
import ZeroFailureSection from '@/components/uz/ZeroFailureSection';
import StatsSection from '@/components/uz/StatsSection';
import TreatmentSection from '@/components/uz/TreatmentSection';
import DoctorSection from '@/components/uz/DoctorSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';
// import YouTubeSection from '@/components/uz/YouTubeSection';
import FAQSection from '@/components/uz/FAQSection';
import CTASection from '@/components/uz/CTASection';
import FooterSection from '@/components/uz/FooterSection';
import FixedCTAButton from '@/components/uz/FixedCTAButton';

// Homepage JSON-LD
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ItemList
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            name: "To'liq jag' implantatsiyasi va implant",
            description: "Kompyuter tahliliga asoslangan yuqori aniqlikdagi raqamli yo'naltirilgan jarrohlik — xavfsiz va qulay, 10 yil kafolat.",
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Tishlarni oqartirish',
            description: "Xavfsiz va samarali oqartirish, tish toshini tozalash bilan 50% chegirma",
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Aql tishini olib tashlash',
            description: "3D KT aniq tashxisi bilan nervlarni shikastlamasdan xavfsiz olib tashlash",
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Karies va kanal davolash',
            description: "Olib tashlash o'rniga saqlash, mutaxassis tomonidan aniq davolash",
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'Milk davolash va tozalash',
            description: "Kattalarning 80% milk kasalligi bilan og'riydi, muntazam parvarish bilan umrbod sog'lom tishlar",
            image: 'https://gdfirstdent.co.kr/icons/gum.png',
            url: 'https://gdfirstdent.co.kr/gum-care',
          },
        },
      ],
    },
    // Site Navigation
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://gdfirstdent.co.kr/#navigation',
      name: 'Asosiy menyu',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: 'Implant', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: 'Oqartirish', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: 'Aql tishi', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: 'Karies davolash', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: 'Milk davolash', url: 'https://gdfirstdent.co.kr/gum-care' },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* <Banner /> */}
      <HeroSection />
      <ZeroFailureSection />
      <StatsSection />
      <TreatmentSection />
      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      {/* <YouTubeSection /> */}
      <FAQSection />
      <CTASection />
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}