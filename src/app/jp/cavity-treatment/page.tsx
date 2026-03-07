import { Metadata } from 'next';
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
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';
import VideoSection from '@/components/jp/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: '韓国釜山虫歯治療歯科 | 慶星メディス歯科',
  description: '先進的な虫歯・根管治療。釜山南区No.1。院長が直接治療する大学病院レベルのマイクロスコープとデジタル設備完備。',
  keywords: [
    '韓国虫歯治療',
    '釜山虫歯治療',
    '韓国根管治療',
    '韓国インレー',
    '韓国歯内療法',
    'マイクロスコープ歯科韓国',
    '日本語対応虫歯治療韓国',
    '韓国デンタルツーリズム'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/jp/cavity-treatment',
  },
  openGraph: {
    title: '韓国釜山虫歯治療歯科 | 慶星メディス歯科',
    description: '先進的な虫歯・根管治療。釜山南区No.1。マイクロスコープ完備。',
    url: 'https://gdfirstdent.com/jp/cavity-treatment',
    type: 'website',
    locale: 'ja_JP',
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
