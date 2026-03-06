import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';

import HeroSection from '@/components/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/cavity-treatment/OneDayInlaySection';
import SedationSection from '@/components/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';
import VideoSection from '@/components/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: '고덕충치치료 | 고덕퍼스트치과',
  description: '강동구 고덕 충치치료 전문 치과. 통합치의학과 전문의가 직접 진료합니다. 레진, 인레이, 신경치료, 트리오스5 디지털 스캔.',
  alternates: {
    canonical: 'https://godukfirst.com/cavity-treatment',
  },
  openGraph: {
    title: '고덕충치치료 | 고덕퍼스트치과',
    description: '강동구 고덕 충치치료 전문 치과. 통합치의학과 전문의가 직접 진료합니다.',
    url: 'https://godukfirst.com/cavity-treatment',
    siteName: '고덕퍼스트치과',
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
      <SedationSection />

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
