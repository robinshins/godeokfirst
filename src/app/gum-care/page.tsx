import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';
import HeroSection from '@/components/gum-care/HeroSection';
import DoctorMessageSection from '@/components/gum-care/DoctorMessageSection';
import StatsSection from '@/components/gum-care/StatsSection';
import VideoSection from '@/components/gum-care/VideoSection';
import RiskSection from '@/components/gum-care/RiskSection';
import PhilosophySection from '@/components/gum-care/PhilosophySection';
import ComparisonSection from '@/components/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: '고덕잇몸치료 스케일링 | 고덕퍼스트치과',
  description: '평택 고덕 잇몸치료·스케일링 전문 치과. 통합치의학과 전문의가 직접 진료합니다. 잇몸질환, 치주염, 스케일링.',
  alternates: {
    canonical: 'https://godukfirst.com/gum-care',
  },
  openGraph: {
    title: '고덕잇몸치료 스케일링 | 고덕퍼스트치과',
    description: '평택 고덕 잇몸치료·스케일링 전문 치과. 통합치의학과 전문의가 직접 진료합니다.',
    url: 'https://godukfirst.com/gum-care',
    siteName: '고덕퍼스트치과',
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
