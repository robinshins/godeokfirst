import type { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';
import HeroSection from '@/components/jp/gum-care/HeroSection';
import DoctorMessageSection from '@/components/jp/gum-care/DoctorMessageSection';
import StatsSection from '@/components/jp/gum-care/StatsSection';
// import VideoSection from '@/components/jp/gum-care/VideoSection';
import RiskSection from '@/components/jp/gum-care/RiskSection';
import PhilosophySection from '@/components/jp/gum-care/PhilosophySection';
import ComparisonSection from '@/components/jp/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/jp/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/jp/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';

export const metadata: Metadata = {
  title: '高徳歯周病治療・スケーリング | コドクファースト歯科',
  description: '平沢・高徳 歯周病治療・スケーリング専門歯科. 統合歯科専門医が直接治療します. 歯周病、歯周炎、スケーリング.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/jp/gum-care',
  },
  openGraph: {
    title: '高徳歯周病治療・スケーリング | コドクファースト歯科',
    description: '平沢・高徳 歯周病治療・スケーリング専門歯科. 統合歯科専門医が直接治療します.',
    url: 'https://gdfirstdent.co.kr/jp/gum-care',
    siteName: 'コドクファースト歯科',
    type: 'website',
  },
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <HeroSection />
      <DoctorMessageSection />
      <StatsSection />
      <RiskSection />
      <PhilosophySection />
      <ComparisonSection />
      <TreatmentSystemSection />
      <CaseStudiesSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="gum-care" />

      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
