import { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';
import HeroSection from '@/components/cn/gum-care/HeroSection';
import StatsSection from '@/components/cn/gum-care/StatsSection';
import VideoSection from '@/components/cn/gum-care/VideoSection';
import RiskSection from '@/components/cn/gum-care/RiskSection';
import PhilosophySection from '@/components/cn/gum-care/PhilosophySection';
import ComparisonSection from '@/components/cn/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/cn/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/cn/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import FAQSection from '@/components/cn/FAQSection';
import YouTubeSection from '@/components/cn/YouTubeSection';

export const metadata: Metadata = {
  title: '韩国釜山牙龈治疗牙科 | 庆星美迪斯牙科',
  description: '专业牙周疾病治疗和牙龈护理。釜山南区第一。院长亲自施术，配备先进数字化设备进行洗牙、深度清洁和牙龈手术。',
  keywords: [
    '韩国牙龈治疗',
    '釜山牙龈',
    '韩国牙周护理',
    '牙周炎韩国',
    '洗牙韩国',
    '牙龈手术韩国',
    '釜山牙龈治疗',
    '中文牙龈釜山',
    '韩国牙科旅游'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/cn/gum-care',
  },
  openGraph: {
    title: '韩国釜山牙龈治疗牙科 | 庆星美迪斯牙科',
    description: '专业牙周疾病治疗和牙龈护理。釜山南区第一。院长亲自施术。',
    url: 'https://gdfirstdent.com/cn/gum-care',
    type: 'website',
    locale: 'zh_CN',
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
