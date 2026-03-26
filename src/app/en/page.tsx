import GNB from '@/components/en/GNB';
import HeroSection from '@/components/en/HeroSection';
import ZeroFailureSection from '@/components/en/ZeroFailureSection';
import StatsSection from '@/components/en/StatsSection';
import TreatmentSection from '@/components/en/TreatmentSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
// import YouTubeSection from '@/components/en/YouTubeSection';
import FAQSection from '@/components/en/FAQSection';
import CTASection from '@/components/en/CTASection';
import FooterSection from '@/components/en/FooterSection';
import FixedCTAButton from '@/components/en/FixedCTAButton';

// Homepage JSON-LD structured data
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ItemList for carousel
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            name: 'Full-Arch & Dental Implants',
            description: 'Safe and comfortable digital guide surgery with computer analysis.',
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Teeth Whitening',
            description: 'Safe and effective whitening, discount with scaling',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Wisdom Tooth Extraction',
            description: '3D CT precise diagnosis for safe extraction without nerve damage',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Cavity & Root Canal Treatment',
            description: 'Saving teeth instead of extracting, precise treatment by a specialist',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'Gum Care & Scaling',
            description: '80% of adults suffer from gum disease, lifelong healthy teeth with regular care',
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
      name: 'Main Menu',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: 'Implants', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: 'Whitening', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: 'Wisdom Tooth', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: 'Cavity Treatment', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: 'Gum Care', url: 'https://gdfirstdent.co.kr/gum-care' },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Homepage JSON-LD */}
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