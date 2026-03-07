import type { Metadata } from 'next';
import GNB from '@/components/uz/GNB';
import FixedCTAButton from '@/components/uz/FixedCTAButton';
import FooterSection from '@/components/uz/FooterSection';

import HeroSection from '@/components/uz/gum-care/HeroSection';
import StatsSection from '@/components/uz/gum-care/StatsSection';
import VideoSection from '@/components/uz/gum-care/VideoSection';
import RiskSection from '@/components/uz/gum-care/RiskSection';
import PhilosophySection from '@/components/uz/gum-care/PhilosophySection';
import ComparisonSection from '@/components/uz/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/uz/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/uz/gum-care/CaseStudiesSection';
import FAQSection from '@/components/uz/FAQSection';
import CTASection from '@/components/uz/CTASection';

export const metadata: Metadata = {
  title: 'Koreya Pusan Milk Davolash Stomatologiya | Kyungsung Medis Dental',
  description: 'Professional milk kasalligi va parodont davolash. Pusan Nam-gu 1-o\'rin. Bosh shifokor zamonaviy raqamli uskunalar bilan bevosita davolaydi.',
  keywords: [
    'Koreya milk davolash',
    'Pusan milk davolash',
    'Koreya parodont',
    'Tish tozalash Koreya',
    'Milk operatsiyasi Koreya',
    'Koreya stomatologiya milk',
    'O\'zbek milk Pusan',
    'Koreya stomatologiya turizmi'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/uz/gum-care',
  },
  openGraph: {
    title: 'Koreya Pusan Milk Davolash Stomatologiya | Kyungsung Medis Dental',
    description: 'Professional milk kasalligi va parodont davolash. Pusan Nam-gu 1-o\'rin.',
    url: 'https://gdfirstdent.com/uz/gum-care',
    type: 'website',
    locale: 'uz_UZ',
  }
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <HeroSection />
      <StatsSection />
      <VideoSection />
      <RiskSection />
      <PhilosophySection />
      <ComparisonSection />
      <TreatmentSystemSection />
      <CaseStudiesSection />
      <FAQSection page="gum" />
      <CTASection />
      <FooterSection />

      <div className="h-[88px]" />
    </main>
  );
}

