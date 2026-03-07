import { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';
import HeroSection from '@/components/jp/gum-care/HeroSection';
import StatsSection from '@/components/jp/gum-care/StatsSection';
import VideoSection from '@/components/jp/gum-care/VideoSection';
import RiskSection from '@/components/jp/gum-care/RiskSection';
import PhilosophySection from '@/components/jp/gum-care/PhilosophySection';
import ComparisonSection from '@/components/jp/gum-care/ComparisonSection';
import TreatmentSystemSection from '@/components/jp/gum-care/TreatmentSystemSection';
import CaseStudiesSection from '@/components/jp/gum-care/CaseStudiesSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import FAQSection from '@/components/jp/FAQSection';
import YouTubeSection from '@/components/jp/YouTubeSection';

export const metadata: Metadata = {
  title: '韓国釜山歯周病治療歯科 | 慶星メディス歯科',
  description: '専門的な歯周病治療と歯肉ケア。釜山南区No.1。院長が直接治療するスケーリング、ディープクリーニング、最新デジタル設備完備。',
  keywords: [
    '韓国歯周病治療',
    '釜山歯肉治療',
    '韓国歯周病',
    '韓国スケーリング',
    '韓国歯肉手術',
    '歯周炎治療韓国',
    '日本語対応歯周病韓国',
    '韓国デンタルツーリズム'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/jp/gum-care',
  },
  openGraph: {
    title: '韓国釜山歯周病治療歯科 | 慶星メディス歯科',
    description: '専門的な歯周病治療と歯肉ケア。釜山南区No.1。',
    url: 'https://gdfirstdent.com/jp/gum-care',
    type: 'website',
    locale: 'ja_JP',
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
