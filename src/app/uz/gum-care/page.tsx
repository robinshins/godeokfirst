import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';
import HeroSection from '@/components/uz/gum-care/HeroSection';
import DoctorMessageSection from '@/components/uz/gum-care/DoctorMessageSection';
import StatsSection from '@/components/uz/gum-care/StatsSection';
// import VideoSection from '@/components/uz/gum-care/VideoSection';
import RiskSection from '@/components/uz/gum-care/RiskSection';
import PhilosophySection from '@/components/uz/gum-care/PhilosophySection';
import ComparisonSection from '@/components/uz/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/uz/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/uz/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/uz/DoctorSection';
import WhyBestSection from '@/components/uz/WhyBestSection';
import LocationSection from '@/components/uz/LocationSection';
import FAQSection from '@/components/uz/FAQSection';

export const metadata: Metadata = {
  title: 'Gum Care & Scaling Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly. Gum disease, periodontitis, scaling.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/uz/gum-care',
  },
  openGraph: {
    title: 'Gum Care & Scaling Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.co.kr/uz/gum-care',
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
