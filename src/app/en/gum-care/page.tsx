import type { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';
import HeroSection from '@/components/en/gum-care/HeroSection';
import DoctorMessageSection from '@/components/en/gum-care/DoctorMessageSection';
import StatsSection from '@/components/en/gum-care/StatsSection';
import VideoSection from '@/components/en/gum-care/VideoSection';
import RiskSection from '@/components/en/gum-care/RiskSection';
import PhilosophySection from '@/components/en/gum-care/PhilosophySection';
import ComparisonSection from '@/components/en/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/en/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/en/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';

export const metadata: Metadata = {
  title: 'Gum Care & Scaling | Godeok First Dental',
  description: 'Gum disease treatment and scaling by a Comprehensive Dentistry Specialist.',
  alternates: {
    canonical: 'https://gdfirstdent.com/en/gum-care',
  },
  openGraph: {
    title: 'Gum Care & Scaling | Godeok First Dental',
    description: 'Gum disease treatment and scaling by a Comprehensive Dentistry Specialist.',
    url: 'https://gdfirstdent.com/en/gum-care',
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
