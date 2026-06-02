import GNB from '@/components/mn/GNB';
import HeroSection from '@/components/mn/HeroSection';
import ZeroFailureSection from '@/components/mn/ZeroFailureSection';
import StatsSection from '@/components/mn/StatsSection';
import TreatmentSection from '@/components/mn/TreatmentSection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
// import YouTubeSection from '@/components/mn/YouTubeSection';
import FAQSection from '@/components/mn/FAQSection';
import CTASection from '@/components/mn/CTASection';
import FooterSection from '@/components/mn/FooterSection';
import FixedCTAButton from '@/components/mn/FixedCTAButton';

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
            name: 'Бүтэн эрүүний имплант ба имплант',
            description: 'Компьютер шинжилгээнд суурилсан өндөр нарийвчлалтай дижитал чиглүүлэгч мэс засал, аюулгүй тав тухтай, 10 жилийн баталгаа.',
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Шүд цайруулах',
            description: 'Аюулгүй үр дүнтэй цайруулалт, цэвэрлэгээтэй хамт 50% хямдрал',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Мэргэн ухааны шүд авах',
            description: '3D CT нарийвчилсан оношилгоогоор мэдрэл гэмтээхгүйгээр аюулгүй авах',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Цоорхой ба сувгийн эмчилгээ',
            description: 'Авах оронд хадгалах эмчилгээ, мэргэжлийн эмчийн нарийвчилсан эмчилгээ',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'Буйлны эмчилгээ ба цэвэрлэгээ',
            description: 'Насанд хүрэгчдийн 80% буйлны өвчтэй, тогтмол арчилгаагаар насан туршийн эрүүл шүд',
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
      name: 'Үндсэн цэс',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: 'Имплант', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: 'Цайруулах', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: 'Мэргэн ухааны шүд', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: 'Цоорхой эмчилгээ', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: 'Буйлны эмчилгээ', url: 'https://gdfirstdent.co.kr/gum-care' },
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