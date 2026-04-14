import type { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';

import HeroSection from '@/components/jp/cavity-treatment/HeroSection';
import BeforeAfterSection from '@/components/jp/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/jp/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/jp/cavity-treatment/TreatmentMethodsSection';
import OneDayInlaySection from '@/components/jp/cavity-treatment/OneDayInlaySection';
// import SedationSection from '@/components/jp/cavity-treatment/SedationSection';
import DoctorProfileSection from '@/components/jp/cavity-treatment/DoctorProfileSection';
import ComparisonSection from '@/components/jp/cavity-treatment/ComparisonSection';
import CasesSection from '@/components/jp/cavity-treatment/CasesSection';
import BlogColumnSection from '@/components/jp/cavity-treatment/BlogColumnSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';
// import VideoSection from '@/components/jp/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: '高徳虫歯治療 | コドクファースト歯科',
  description: '平沢・高徳 虫歯治療専門歯科. 統合歯科専門医が直接治療します. レジン、インレー、根管治療、TRIOS5デジタルスキャン.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/jp/cavity-treatment',
  },
  openGraph: {
    title: '高徳虫歯治療 | コドクファースト歯科',
    description: '平沢・高徳 虫歯治療専門歯科. 統合歯科専門医が直接治療します.',
    url: 'https://gdfirstdent.co.kr/jp/cavity-treatment',
    siteName: 'コドクファースト歯科',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'コドクファースト歯科 - 虫歯治療',
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
