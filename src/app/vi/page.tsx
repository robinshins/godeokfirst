import GNB from '@/components/vi/GNB';
import HeroSection from '@/components/vi/HeroSection';
import ZeroFailureSection from '@/components/vi/ZeroFailureSection';
import StatsSection from '@/components/vi/StatsSection';
import TreatmentSection from '@/components/vi/TreatmentSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
// import YouTubeSection from '@/components/vi/YouTubeSection';
import FAQSection from '@/components/vi/FAQSection';
import CTASection from '@/components/vi/CTASection';
import FooterSection from '@/components/vi/FooterSection';
import FixedCTAButton from '@/components/vi/FixedCTAButton';

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
            name: 'Implant toàn hàm & Implant',
            description: 'Phẫu thuật định vị kỹ thuật số độ khó cao qua phân tích máy tính, an toàn và thoải mái, bảo hành 10 năm.',
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Tẩy trắng răng',
            description: 'Tẩy trắng an toàn và hiệu quả, giảm 50% khi kết hợp cạo vôi răng',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Nhổ răng khôn',
            description: 'Chẩn đoán chính xác bằng CT 3D, nhổ răng an toàn không tổn thương dây thần kinh',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Điều trị sâu răng & tủy răng',
            description: 'Điều trị bảo tồn thay vì nhổ răng, điều trị chính xác bởi bác sĩ chuyên khoa',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'Điều trị nướu & Cạo vôi răng',
            description: '80% người trưởng thành mắc bệnh nướu, răng khỏe mạnh suốt đời nhờ chăm sóc định kỳ',
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
      name: 'Menu chính',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: 'Implant', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: 'Tẩy trắng', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: 'Răng khôn', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: 'Điều trị sâu răng', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: 'Điều trị nướu', url: 'https://gdfirstdent.co.kr/gum-care' },
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