import { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';
import WhiteningHero from '@/components/vi/whitening/WhiteningHero';
import WhiteningStats from '@/components/vi/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/vi/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/vi/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/vi/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/vi/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/vi/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/vi/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/vi/whitening/CaseStudySection';
import PromotionSection from '@/components/vi/whitening/PromotionSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import YouTubeSection from '@/components/vi/YouTubeSection';

export const metadata: Metadata = {
  title: 'Nha khoa Tẩy trắng răng Busan Hàn Quốc | Kyungsung Medis Dental',
  description: '1,000+ ca tẩy trắng với 0 tác dụng phụ. Số 1 quận Nam Busan. Tẩy trắng chuyên nghiệp và veneer kỹ thuật số bởi bác sĩ trưởng trực tiếp điều trị.',
  keywords: [
    'tẩy trắng răng Hàn Quốc',
    'tẩy trắng răng Busan',
    'veneer Hàn Quốc',
    'tẩy trắng chuyên nghiệp Busan',
    'nha khoa tẩy trắng Busan',
    'laminate Hàn Quốc',
    'tẩy trắng an toàn',
    'du lịch nha khoa Hàn Quốc',
    'tẩy trắng tiếng Việt Busan'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/vi/whitening',
  },
  openGraph: {
    title: 'Nha khoa Tẩy trắng răng Busan Hàn Quốc | Kyungsung Medis Dental',
    description: '1,000+ ca tẩy trắng với 0 tác dụng phụ. Số 1 quận Nam Busan. Tẩy trắng chuyên nghiệp và veneer kỹ thuật số.',
    url: 'https://gdfirstdent.com/vi/whitening',
    type: 'website',
    locale: 'vi_VN',
  }
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <WhiteningHero />

      {/* Stats Section */}
      <WhiteningStats />

      {/* Tooth Discoloration Section */}
      <ToothDiscolorationSection />

      {/* Video Section */}
      <WhiteningVideoSection />

      {/* Laminate Section */}
      <WhiteningLaminateSection />

      {/* Peroxide Whitening Section */}
      <WhiteningPeroxideSection />

      {/* Self vs Professional Section */}
      <SelfVsProfessionalSection />

      {/* Comparison Section */}
      <WhiteningComparisonSection />

      {/* Case Study Section */}
      <CaseStudySection />

      {/* Promotion Section */}
      <PromotionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FooterSection />
    </main>
  );
}
