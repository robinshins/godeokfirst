import { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';

import ImplantHero from '@/components/jp/implant/ImplantHero';
import StatsSection from '@/components/jp/implant/StatsSection';
import VideoSection from '@/components/jp/implant/VideoSection';
import ThreeStepNewSection from '@/components/jp/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/jp/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/jp/implant/InHouseLabSection';
import AfterCareSection from '@/components/jp/implant/AfterCareSection';
import SpecialTechSection from '@/components/jp/implant/SpecialTechSection';
import SpeedSection from '@/components/jp/implant/SpeedSection';
import DigitalGuideSection from '@/components/jp/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/jp/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/jp/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/jp/implant/SkillDifferenceSection';
import SedationSection from '@/components/jp/cavity-treatment/SedationSection';
import WarrantySection from '@/components/jp/implant/WarrantySection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import YouTubeSection from '@/components/jp/YouTubeSection';
import FAQSection from '@/components/jp/FAQSection';

export const metadata: Metadata = {
  title: '韓国釜山インプラント歯科 | 慶星メディス歯科',
  description: '10年間再手術ゼロ、1,500件以上のデジタルインプラント実績。釜山南区No.1。院長が直接行う3段階仮歯システムとデジタルガイド手術。',
  keywords: [
    '韓国インプラント',
    '釜山インプラント',
    '韓国インプラント専門医',
    'デジタルインプラント',
    '韓国インプラント手術',
    '韓国歯科インプラント',
    '日本語対応インプラント韓国',
    '韓国デンタルツーリズム'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/jp/implant',
  },
  openGraph: {
    title: '韓国釜山インプラント歯科 | 慶星メディス歯科',
    description: '10年間再手術ゼロ、1,500件以上のデジタルインプラント実績。釜山南区No.1。',
    url: 'https://medisksu.co.kr/jp/implant',
    type: 'website',
    locale: 'ja_JP',
  }
};

export default function ImplantPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <ImplantHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Sedation Section */}
      <SedationSection />

      {/* Three Step Section */}
      <ThreeStepNewSection />

      {/* Speed Section */}
      <SpeedSection />

      {/* In-House Lab Section */}
      <InHouseLabSection />

      {/* After Care Section */}
      <AfterCareSection />

      {/* Special Tech Section */}
      <SpecialTechSection />

      {/* Digital Guide Section */}
      <DigitalGuideSection />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Real Patient Results Section */}
      <RealPatientResultsSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      <WarrantySection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="implant" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
