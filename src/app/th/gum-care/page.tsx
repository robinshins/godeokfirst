import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';

import HeroSection from '@/components/th/gum-care/HeroSection';
import StatsSection from '@/components/th/gum-care/StatsSection';
import VideoSection from '@/components/th/gum-care/VideoSection';
import RiskSection from '@/components/th/gum-care/RiskSection';
import PhilosophySection from '@/components/th/gum-care/PhilosophySection';
import ComparisonSection from '@/components/th/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/th/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/th/gum-care/CaseStudiesSection';

import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import YouTubeSection from '@/components/th/YouTubeSection';
import FAQSection from '@/components/th/FAQSection';

export const metadata: Metadata = {
  title: 'รักษาเหงือกปูซาน | Kyungsung Medis Dental',
  description: 'รักษาฟันธรรมชาติของคุณไว้ด้วยการดูแลเหงือกที่ล้ำสมัย ป้องกันฟันโยกและกลิ่นปากด้วยระบบทำความสะอาดล้ำลึก 0 เคสผ่าตัดซ้ำใน 10 ปี',
  keywords: [
    'รักษาเหงือกปูซาน',
    'ขูดหินปูนปูซาน',
    'โรคเหงือกปูซาน',
    'ทันตกรรมปูซาน',
    'หมอฟันปูซาน',
    'คลินิกทันตกรรมปูซาน'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/th/gum-care',
  },
  openGraph: {
    title: 'รักษาเหงือกปูซาน | Kyungsung Medis Dental',
    description: 'รักษาฟันธรรมชาติของคุณไว้ด้วยการดูแลเหงือกที่ล้ำสมัย',
    url: 'https://medisksu.co.kr/th/gum-care',
    siteName: 'Kyungsung Medis Dental Clinic',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function GumCarePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
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

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}

