import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import HeroSection from '@/components/mn/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/mn/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/mn/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/mn/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/mn/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/mn/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/mn/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/mn/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/mn/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/mn/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
import FAQSection from '@/components/mn/FAQSection';
import VideoSection from '@/components/mn/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Cavity Treatment Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Cavity treatment specialist. Comprehensive Dentistry Specialist treats directly. Resin, inlay, root canal, TRIOS5 digital scan.',
  alternates: {
    canonical: 'https://gdfirstdent.com/mn/cavity-treatment',
  },
  openGraph: {
    title: 'Cavity Treatment Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Cavity treatment specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.com/mn/cavity-treatment',
    siteName: 'Godeok First Dental',
    type: 'website',
  },
};

export default function CavityTreatmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection />

      {/* Cases Section */}
      <CasesSection />


      {/* Blog Column Section */}
      <BlogColumnSection />


      {/* Question Section */}
      <QuestionSection />

      {/* Treatment Methods Section */}
      <TreatmentMethodsSection />

      {/* One Day Inlay Section */}
      <OneDayInlaySection />


      {/* Sedation Section */}
      {/* <SedationSection /> */}

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="cavity-treatment" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
