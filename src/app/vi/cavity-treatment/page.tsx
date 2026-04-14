import type { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';

import HeroSection from '@/components/vi/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/vi/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/vi/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/vi/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/vi/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/vi/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/vi/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/vi/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/vi/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/vi/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';
// import VideoSection from '@/components/vi/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Cavity Treatment Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Cavity treatment specialist. Comprehensive Dentistry Specialist treats directly. Resin, inlay, root canal, TRIOS5 digital scan.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/vi/cavity-treatment',
  },
  openGraph: {
    title: 'Cavity Treatment Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Cavity treatment specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.co.kr/vi/cavity-treatment',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - Cavity Treatment',
      },
    ],
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
