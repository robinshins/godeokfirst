import { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';
import HeroSection from '@/components/en/gum-care/HeroSection';
import StatsSection from '@/components/en/gum-care/StatsSection';
import VideoSection from '@/components/en/gum-care/VideoSection';
import RiskSection from '@/components/en/gum-care/RiskSection';
import PhilosophySection from '@/components/en/gum-care/PhilosophySection';
import ComparisonSection from '@/components/en/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/en/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/en/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import FAQSection from '@/components/en/FAQSection';
import YouTubeSection from '@/components/en/YouTubeSection';

export const metadata: Metadata = {
  title: 'Korean Gum Treatment Busan Korea | Kyungsung Medis Dental',
  description: 'Professional gum disease treatment and periodontal care. #1 in Busan Nam-gu. Head doctor performs scaling, deep cleaning, and gum surgery with advanced digital equipment.',
  keywords: [
    'gum treatment Korea',
    'gum treatment Busan',
    'periodontal care Korea',
    'gum disease Korea',
    'scaling Korea',
    'gum surgery Busan',
    'periodontitis Korea',
    'dental tourism gum Korea',
    'English dentist gum Korea'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/en/gum-care',
  },
  openGraph: {
    title: 'Korean Gum Treatment Busan Korea | Kyungsung Medis Dental',
    description: 'Professional gum disease treatment and periodontal care. #1 in Busan Nam-gu. Head doctor performs all procedures.',
    url: 'https://medisksu.co.kr/en/gum-care',
    type: 'website',
    locale: 'en_US',
  }
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      <HeroSection />
      <StatsSection />
      <VideoSection />
      <RiskSection />
      <PhilosophySection />
      <ComparisonSection />
      <TreatmentSystemSection />
      <CaseStudiesSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="gum-care" />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
