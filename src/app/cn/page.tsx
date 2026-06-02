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
            name: '全口种植牙・种植牙',
            description: '通过计算机分析的高难度数字导航手术，安全舒适，质保10年。',
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: '牙齿美白',
            description: '安全有效的美白，洁牙同时享50%优惠',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: '智齿拔除',
            description: '3D CT精确诊断，不损伤神经安全拔除',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: '龋齿治疗・神经治疗',
            description: '以保留代替拔除，专科医生精密治疗',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: '牙周治疗・洁牙',
            description: '80%成人患有牙周病，定期护理终生健康牙齿',
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
      name: '主菜单',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: '种植牙', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: '美白', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: '智齿', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: '龋齿治疗', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: '牙周治疗', url: 'https://gdfirstdent.co.kr/gum-care' },
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