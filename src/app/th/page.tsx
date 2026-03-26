import GNB from '@/components/th/GNB';
import HeroSection from '@/components/th/HeroSection';
import ZeroFailureSection from '@/components/th/ZeroFailureSection';
import StatsSection from '@/components/th/StatsSection';
import TreatmentSection from '@/components/th/TreatmentSection';
import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
// import YouTubeSection from '@/components/th/YouTubeSection';
import FAQSection from '@/components/th/FAQSection';
import CTASection from '@/components/th/CTASection';
import FooterSection from '@/components/th/FooterSection';
import FixedCTAButton from '@/components/th/FixedCTAButton';

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
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: '치아 미백',
            description: '안전하고 효과적인 미백 시술, 스케일링과 함께 50% 할인',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: '사랑니 발치',
            description: '3D CT precise diagnosis으로 신경 손상없이 안전하게 발치',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: '충치치료 & 신경치료',
            description: '발치 대신 살리는 치료, 보존과 전문의의 정밀 치료',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: '잇몸치료 & 스케일링',
            description: '성인 80%가 앓는 잇몸질환, 정기적 관리로 평생 건강한 치아',
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
      name: '메인 메뉴',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: '임플란트', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: '미백', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: '사랑니', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: '충치치료', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: '잇몸치료', url: 'https://gdfirstdent.co.kr/gum-care' },
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