import type { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';

import HeroSection from '@/components/en/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/en/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/en/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/en/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/en/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/en/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/en/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/en/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/en/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/en/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';
// import VideoSection from '@/components/en/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Cavity Treatment | Godeok First Dental',
  description: 'Cavity and root canal treatment by a Comprehensive Dentistry Specialist. Resin, inlay, digital scan.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/en/cavity-treatment',
  },
  openGraph: {
    title: 'Cavity Treatment | Godeok First Dental',
    description: 'Cavity treatment by a Comprehensive Dentistry Specialist at Godeok First Dental.',
    url: 'https://gdfirstdent.co.kr/en/cavity-treatment',
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
      {/* <VideoSection /> */}

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
