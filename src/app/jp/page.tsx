import GNB from '@/components/jp/GNB';
import HeroSection from '@/components/jp/HeroSection';
import ZeroFailureSection from '@/components/jp/ZeroFailureSection';
import StatsSection from '@/components/jp/StatsSection';
import TreatmentSection from '@/components/jp/TreatmentSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
// import YouTubeSection from '@/components/jp/YouTubeSection';
import FAQSection from '@/components/jp/FAQSection';
import CTASection from '@/components/jp/CTASection';
import FooterSection from '@/components/jp/FooterSection';
import FixedCTAButton from '@/components/jp/FixedCTAButton';

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
            name: 'フルアーチインプラント・インプラント',
            description: 'コンピュータ解析による高度なデジタルガイド手術で安全・快適に、10年を責任保証します。',
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'ホワイトニング',
            description: '安全で効果的なホワイトニング、スケーリングと同時施術で50%割引',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: '親知らず抜歯',
            description: '3D CT精密診断で神経を傷つけず安全に抜歯',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: '虫歯治療・神経治療',
            description: '抜歯せず歯を残す治療、保存と専門医による精密治療',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: '歯周治療・スケーリング',
            description: '成人の80%が患う歯周病、定期的な管理で生涯健康な歯',
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
      name: 'メインメニュー',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: 'インプラント', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: 'ホワイトニング', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: '親知らず', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: '虫歯治療', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: '歯周治療', url: 'https://gdfirstdent.co.kr/gum-care' },
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