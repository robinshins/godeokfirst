import type { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';
import HeroSection from '@/components/cn/gum-care/HeroSection';
import DoctorMessageSection from '@/components/cn/gum-care/DoctorMessageSection';
import StatsSection from '@/components/cn/gum-care/StatsSection';
// import VideoSection from '@/components/cn/gum-care/VideoSection';
import RiskSection from '@/components/cn/gum-care/RiskSection';
import PhilosophySection from '@/components/cn/gum-care/PhilosophySection';
import ComparisonSection from '@/components/cn/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/cn/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/cn/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';

export const metadata: Metadata = {
  title: '高德牙周治疗·洁牙 | 高德First牙科',
  description: '平泽·高德 Gum care & scaling specialist. 综合牙科专家亲自治疗. Gum disease, periodontitis, scaling.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/cn/gum-care',
  },
  openGraph: {
    title: '高德牙周治疗·洁牙 | 高德First牙科',
    description: '平泽·高德 Gum care & scaling specialist. 综合牙科专家亲自治疗.',
    url: 'https://gdfirstdent.co.kr/cn/gum-care',
    siteName: '高德First牙科',
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
