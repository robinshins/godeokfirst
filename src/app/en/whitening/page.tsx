import { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';
import WhiteningHero from '@/components/en/whitening/WhiteningHero';
import WhiteningStats from '@/components/en/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/en/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/en/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/en/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/en/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/en/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/en/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/en/whitening/CaseStudySection';
import PromotionSection from '@/components/en/whitening/PromotionSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import YouTubeSection from '@/components/en/YouTubeSection';

export const metadata: Metadata = {
  title: 'Korean Teeth Whitening Busan Korea | Kyungsung Medis Dental',
  description: '1,000+ whitening procedures with 0 side effects. #1 in Busan Nam-gu. Professional teeth whitening and digital laminate by head doctor.',
  keywords: [
    'teeth whitening Korea',
    'teeth whitening Busan',
    'Korean dental whitening',
    'laminate Korea',
    'veneer Korea',
    'professional whitening Busan',
    'dental whitening clinic Korea',
    'safe whitening Korea',
    'dental tourism whitening Korea'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/en/whitening',
  },
  openGraph: {
    title: 'Korean Teeth Whitening Busan Korea | Kyungsung Medis Dental',
    description: '1,000+ whitening procedures with 0 side effects. #1 in Busan Nam-gu. Professional teeth whitening and digital laminate.',
    url: 'https://gdfirstdent.com/en/whitening',
    type: 'website',
    locale: 'en_US',
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
