import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';
import HeroSection from '@/components/mn/gum-care/HeroSection';
import DoctorMessageSection from '@/components/mn/gum-care/DoctorMessageSection';
import StatsSection from '@/components/mn/gum-care/StatsSection';
import VideoSection from '@/components/mn/gum-care/VideoSection';
import RiskSection from '@/components/mn/gum-care/RiskSection';
import PhilosophySection from '@/components/mn/gum-care/PhilosophySection';
import ComparisonSection from '@/components/mn/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/mn/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/mn/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
import FAQSection from '@/components/mn/FAQSection';

export const metadata: Metadata = {
  title: 'Gum Care & Scaling Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly. Gum disease, periodontitis, scaling.',
  alternates: {
    canonical: 'https://gdfirstdent.com/mn/gum-care',
  },
  openGraph: {
    title: 'Gum Care & Scaling Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.com/mn/gum-care',
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
