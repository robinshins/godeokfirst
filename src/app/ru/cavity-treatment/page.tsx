import type { Metadata } from 'next';
import GNB from '@/components/ru/GNB';
import FixedCTAButton from '@/components/ru/FixedCTAButton';
import FooterSection from '@/components/ru/FooterSection';

import HeroSection from '@/components/ru/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/ru/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/ru/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/ru/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/ru/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/ru/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/ru/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/ru/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/ru/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/ru/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/ru/DoctorSection';
import WhyBestSection from '@/components/ru/WhyBestSection';
import LocationSection from '@/components/ru/LocationSection';
import FAQSection from '@/components/ru/FAQSection';
// import VideoSection from '@/components/ru/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Cavity Treatment Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Cavity treatment specialist. Comprehensive Dentistry Specialist treats directly. Resin, inlay, root canal, TRIOS5 digital scan.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/ru/cavity-treatment',
  },
  openGraph: {
    title: 'Cavity Treatment Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Cavity treatment specialist. Comprehensive Dentistry Specialist treats directly.',
    url: 'https://gdfirstdent.co.kr/ru/cavity-treatment',
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
