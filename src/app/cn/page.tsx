import GNB from '@/components/cn/GNB';
import HeroSection from '@/components/cn/HeroSection';
import ZeroFailureSection from '@/components/cn/ZeroFailureSection';
import StatsSection from '@/components/cn/StatsSection';
import TreatmentSection from '@/components/cn/TreatmentSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
// import YouTubeSection from '@/components/cn/YouTubeSection';
import FAQSection from '@/components/cn/FAQSection';
import CTASection from '@/components/cn/CTASection';
import FooterSection from '@/components/cn/FooterSection';
import FixedCTAButton from '@/components/cn/FixedCTAButton';

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
            name: '전체임플란트 & 임플란트',
            description: '컴퓨터분석을 통한 고난도 디지털 가이드 수술로 안전하고 편안하게, 10년을 책임집니다.',
            image: 'https://gdfirstdent.com/images/implant-icon.png',
            url: 'https://gdfirstdent.com/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: '치아 미백',
            description: '안전하고 효과적인 미백 시술, 스케일링과 함께 50% 할인',
            image: 'https://gdfirstdent.com/icons/whitening.png',
            url: 'https://gdfirstdent.com/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: '사랑니 발치',
            description: '3D CT precise diagnosis으로 신경 손상없이 안전하게 발치',
            image: 'https://gdfirstdent.com/icons/extraction.png',
            url: 'https://gdfirstdent.com/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: '충치치료 & 신경치료',
            description: '발치 대신 살리는 치료, 보존과 전문의의 정밀 치료',
            image: 'https://gdfirstdent.com/icons/cavity.png',
            url: 'https://gdfirstdent.com/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: '잇몸치료 & 스케일링',
            description: '성인 80%가 앓는 잇몸질환, 정기적 관리로 평생 건강한 치아',
            image: 'https://gdfirstdent.com/icons/gum.png',
            url: 'https://gdfirstdent.com/gum-care',
          },
        },
      ],
    },
    // Site Navigation
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://gdfirstdent.com/#navigation',
      name: '메인 메뉴',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: '임플란트', url: 'https://gdfirstdent.com/implant' },
        { '@type': 'SiteNavigationElement', name: '미백', url: 'https://gdfirstdent.com/whitening' },
        { '@type': 'SiteNavigationElement', name: '사랑니', url: 'https://gdfirstdent.com/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: '충치치료', url: 'https://gdfirstdent.com/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: '잇몸치료', url: 'https://gdfirstdent.com/gum-care' },
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