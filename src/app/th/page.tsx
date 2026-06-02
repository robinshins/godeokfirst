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
            name: 'รากฟันเทียมทั้งปาก & รากฟันเทียม',
            description: 'ผ่าตัดด้วยระบบนำทางดิจิทัลความแม่นยำสูงผ่านการวิเคราะห์ด้วยคอมพิวเตอร์ ปลอดภัยสบาย รับประกัน 10 ปี',
            image: 'https://gdfirstdent.co.kr/images/implant-icon.png',
            url: 'https://gdfirstdent.co.kr/implant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'ฟอกสีฟัน',
            description: 'ฟอกสีฟันปลอดภัยและได้ผล ลด 50% เมื่อทำพร้อมขูดหินปูน',
            image: 'https://gdfirstdent.co.kr/icons/whitening.png',
            url: 'https://gdfirstdent.co.kr/whitening',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'ถอนฟันคุด',
            description: 'วินิจฉัยแม่นยำด้วย 3D CT ถอนฟันปลอดภัยไม่กระทบเส้นประสาท',
            image: 'https://gdfirstdent.co.kr/icons/extraction.png',
            url: 'https://gdfirstdent.co.kr/wisdom-tooth',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'รักษาฟันผุ & รักษารากฟัน',
            description: 'รักษาเพื่อเก็บรักษาฟันแทนการถอน รักษาแม่นยำโดยทันตแพทย์เฉพาะทาง',
            image: 'https://gdfirstdent.co.kr/icons/cavity.png',
            url: 'https://gdfirstdent.co.kr/cavity-treatment',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'รักษาเหงือก & ขูดหินปูน',
            description: '80% ของผู้ใหญ่เป็นโรคเหงือก ฟันแข็งแรงตลอดชีวิตด้วยการดูแลสม่ำเสมอ',
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
      name: 'เมนูหลัก',
      hasPart: [
        { '@type': 'SiteNavigationElement', name: 'รากฟันเทียม', url: 'https://gdfirstdent.co.kr/implant' },
        { '@type': 'SiteNavigationElement', name: 'ฟอกสีฟัน', url: 'https://gdfirstdent.co.kr/whitening' },
        { '@type': 'SiteNavigationElement', name: 'ฟันคุด', url: 'https://gdfirstdent.co.kr/wisdom-tooth' },
        { '@type': 'SiteNavigationElement', name: 'รักษาฟันผุ', url: 'https://gdfirstdent.co.kr/cavity-treatment' },
        { '@type': 'SiteNavigationElement', name: 'รักษาเหงือก', url: 'https://gdfirstdent.co.kr/gum-care' },
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