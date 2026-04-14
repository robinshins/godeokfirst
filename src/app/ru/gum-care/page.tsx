import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';
import HeroSection from '@/components/ru/gum-care/HeroSection';
import DoctorMessageSection from '@/components/ru/gum-care/DoctorMessageSection';
import StatsSection from '@/components/ru/gum-care/StatsSection';
// import VideoSection from '@/components/ru/gum-care/VideoSection';
import RiskSection from '@/components/ru/gum-care/RiskSection';
import PhilosophySection from '@/components/ru/gum-care/PhilosophySection';
import ComparisonSection from '@/components/ru/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/ru/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/ru/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';

export const metadata: Metadata = {
  title: 'Gum Care & Scaling Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly. Gum disease, periodontitis, scaling.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/ru/gum-care',
  },
  openGraph: {
    title: 'Gum Care & Scaling Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Gum care & scaling specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.co.kr/ru/gum-care',
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
