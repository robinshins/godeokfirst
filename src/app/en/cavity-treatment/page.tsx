import { Metadata } from 'next';
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
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';
import VideoSection from '@/components/en/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Korean Cavity Treatment Busan Korea | Kyungsung Medis Dental',
  description: 'Advanced cavity and root canal treatment. #1 in Busan Nam-gu. Head doctor performs all procedures with microscope and university hospital-level digital equipment.',
  keywords: [
    'cavity treatment Korea',
    'cavity treatment Busan',
    'root canal Korea',
    'dental inlay Korea',
    'endodontics Busan',
    'cavity filling Korea',
    'microscope dentistry Korea',
    'dental tourism cavity Korea',
    'English dentist cavity Korea'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/en/cavity-treatment',
  },
  openGraph: {
    title: 'Korean Cavity Treatment Busan Korea | Kyungsung Medis Dental',
    description: 'Advanced cavity and root canal treatment. #1 in Busan Nam-gu. Head doctor performs all procedures with microscope.',
    url: 'https://medisksu.co.kr/en/cavity-treatment',
    type: 'website',
    locale: 'en_US',
  }
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

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Question Section */}
      <QuestionSection />

      {/* Treatment Methods Section */}
      <TreatmentMethodsSection />

      {/* One Day Inlay Section */}
      <OneDayInlaySection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}

      {/* Doctor Profile Section */}
      <DoctorProfileSection />

      {/* Comparison Section */}
      <ComparisonSection />

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
