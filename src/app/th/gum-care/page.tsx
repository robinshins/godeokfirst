import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';
import HeroSection from '@/components/th/gum-care/HeroSection';
import DoctorMessageSection from '@/components/th/gum-care/DoctorMessageSection';
import StatsSection from '@/components/th/gum-care/StatsSection';
import VideoSection from '@/components/th/gum-care/VideoSection';
import RiskSection from '@/components/th/gum-care/RiskSection';
import PhilosophySection from '@/components/th/gum-care/PhilosophySection';
import ComparisonSection from '@/components/th/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/th/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/th/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import FAQSection from '@/components/th/FAQSection';

export const metadata: Metadata = {
  title: 'Gum Care & Scaling Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly. Gum disease, periodontitis, scaling.',
  alternates: {
    canonical: 'https://gdfirstdent.com/th/gum-care',
  },
  openGraph: {
    title: 'Gum Care & Scaling Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.com/th/gum-care',
    siteName: 'Godeok First Dental',
    type: 'website',
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
