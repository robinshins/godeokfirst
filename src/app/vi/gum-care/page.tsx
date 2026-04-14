import type { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';
import HeroSection from '@/components/vi/gum-care/HeroSection';
import DoctorMessageSection from '@/components/vi/gum-care/DoctorMessageSection';
import StatsSection from '@/components/vi/gum-care/StatsSection';
// import VideoSection from '@/components/vi/gum-care/VideoSection';
import RiskSection from '@/components/vi/gum-care/RiskSection';
import PhilosophySection from '@/components/vi/gum-care/PhilosophySection';
import ComparisonSection from '@/components/vi/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/vi/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/vi/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';

export const metadata: Metadata = {
  title: 'Gum Care & Scaling Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly. Gum disease, periodontitis, scaling.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/vi/gum-care',
  },
  openGraph: {
    title: 'Gum Care & Scaling Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.co.kr/vi/gum-care',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - Gum Care & Scaling',
      },
    ],
  },
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <HeroSection />
      <DoctorMessageSection />
      <StatsSection />
      <RiskSection />
      <PhilosophySection />
      <ComparisonSection />
      <TreatmentSystemSection />
      <CaseStudiesSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="gum-care" />

      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
