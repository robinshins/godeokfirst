import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';

import HeroSection from '@/components/uz/cavity-treatment/HeroSection';
// import SedationSection from '@/components/uz/cavity-treatment/SedationSection';
import ComparisonSection from '@/components/uz/cavity-treatment/ComparisonSection';
import OneDayInlaySection from '@/components/uz/cavity-treatment/OneDayInlaySection';
import DoctorProfileSection from '@/components/uz/cavity-treatment/DoctorProfileSection';
import BeforeAfterSection from '@/components/uz/cavity-treatment/BeforeAfterSection';
import QuestionSection from '@/components/uz/cavity-treatment/QuestionSection';
import TreatmentMethodsSection from '@/components/uz/cavity-treatment/TreatmentMethodsSection';
import FAQSection from '@/components/uz/FAQSection';
import CTASection from '@/components/uz/CTASection';
import VideoSection from '@/components/uz/cavity-treatment/VideoSection';

export const metadata: Metadata = {
  title: 'Koreya Pusan Karies Davolash Stomatologiya | Kyungsung Medis Dental',
  description: 'Zamonaviy karies va kanal davolash. Pusan Nam-gu 1-o\'rin. Bosh shifokor universitetlar darajasidagi mikroskop va raqamli uskunalar bilan bevosita davolaydi.',
  keywords: [
    'Koreya karies davolash',
    'Pusan karies',
    'Koreya kanal davolash',
    'Stomatologiya inley Koreya',
    'Endodontiya Koreya',
    'Mikroskop stomatologiya Koreya',
    'O\'zbek karies Pusan',
    'Koreya stomatologiya turizmi'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/uz/cavity-treatment',
  },
  openGraph: {
    title: 'Koreya Pusan Karies Davolash Stomatologiya | Kyungsung Medis Dental',
    description: 'Zamonaviy karies va kanal davolash. Pusan Nam-gu 1-o\'rin. Bosh shifokor mikroskop bilan bevosita davolaydi.',
    url: 'https://gdfirstdent.com/uz/cavity-treatment',
    type: 'website',
    locale: 'uz_UZ',
  }
};

export default function CavityTreatmentPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <HeroSection />
      <VideoSection />
      {/* <SedationSection /> */}
      <ComparisonSection />
      <OneDayInlaySection />
      <DoctorProfileSection />
      <TreatmentMethodsSection />
      <BeforeAfterSection />
      <QuestionSection />
      <FAQSection page="home" />
      <CTASection />
      <FooterSection />

      <div className="h-[88px]" />
    </main>
  );
}

