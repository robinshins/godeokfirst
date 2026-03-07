import { Metadata } from 'next';
import GNB from '@/components/vi/GNB';
import FixedCTAButton from '@/components/vi/FixedCTAButton';
import FooterSection from '@/components/vi/FooterSection';
import HeroSection from '@/components/vi/gum-care/HeroSection';
import StatsSection from '@/components/vi/gum-care/StatsSection';
import VideoSection from '@/components/vi/gum-care/VideoSection';
import RiskSection from '@/components/vi/gum-care/RiskSection';
import PhilosophySection from '@/components/vi/gum-care/PhilosophySection';
import ComparisonSection from '@/components/vi/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/vi/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/vi/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/vi/DoctorSection';
import WhyBestSection from '@/components/vi/WhyBestSection';
import LocationSection from '@/components/vi/LocationSection';
import FAQSection from '@/components/vi/FAQSection';
import YouTubeSection from '@/components/vi/YouTubeSection';

export const metadata: Metadata = {
  title: 'Nha khoa Điều trị nướu Busan Hàn Quốc | Kyungsung Medis Dental',
  description: 'Điều trị bệnh nướu và chăm sóc nha chu chuyên nghiệp. Số 1 quận Nam Busan. Bác sĩ trưởng trực tiếp điều trị với thiết bị kỹ thuật số tiên tiến.',
  keywords: [
    'điều trị nướu Hàn Quốc',
    'điều trị nướu Busan',
    'chăm sóc nha chu Hàn Quốc',
    'bệnh nha chu Busan',
    'lấy cao răng Hàn Quốc',
    'phẫu thuật nướu Busan',
    'nha khoa nướu Busan',
    'du lịch nha khoa Hàn Quốc',
    'điều trị nướu tiếng Việt Busan'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/vi/gum-care',
  },
  openGraph: {
    title: 'Nha khoa Điều trị nướu Busan Hàn Quốc | Kyungsung Medis Dental',
    description: 'Điều trị bệnh nướu và chăm sóc nha chu chuyên nghiệp. Số 1 quận Nam Busan. Bác sĩ trưởng trực tiếp điều trị.',
    url: 'https://gdfirstdent.com/vi/gum-care',
    type: 'website',
    locale: 'vi_VN',
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
