import { Metadata } from 'next';
import GNB from '@/components/en/GNB';
import FixedCTAButton from '@/components/en/FixedCTAButton';
import FooterSection from '@/components/en/FooterSection';

import ImplantHero from '@/components/en/implant/ImplantHero';
import StatsSection from '@/components/en/implant/StatsSection';
import VideoSection from '@/components/en/implant/VideoSection';
import ThreeStepNewSection from '@/components/en/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/en/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/en/implant/InHouseLabSection';
import AfterCareSection from '@/components/en/implant/AfterCareSection';
import SpecialTechSection from '@/components/en/implant/SpecialTechSection';
import SpeedSection from '@/components/en/implant/SpeedSection';
import DigitalGuideSection from '@/components/en/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/en/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/en/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/en/implant/SkillDifferenceSection';
import SedationSection from '@/components/en/cavity-treatment/SedationSection';
import WarrantySection from '@/components/en/implant/WarrantySection';
import DoctorSection from '@/components/en/DoctorSection';
import WhyBestSection from '@/components/en/WhyBestSection';
import LocationSection from '@/components/en/LocationSection';
import YouTubeSection from '@/components/en/YouTubeSection';
import FAQSection from '@/components/en/FAQSection';

export const metadata: Metadata = {
  title: 'Korean Dental Implant Busan Korea | Kyungsung Medis Dental',
  description: '10 years with 0 implant re-surgeries. #1 in Busan Nam-gu with 1,500+ digital implant surgeries. Head doctor performs all procedures with 3-stage temporary teeth protocol.',
  keywords: [
    'dental implant Korea',
    'dental implant Busan',
    'Korean implant specialist',
    'implant surgery Korea',
    'digital guide implant',
    'dental implant clinic Korea',
    'implant dentist Busan',
    'dental tourism Korea implant',
    'English implant dentist Korea'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/en/implant',
  },
  openGraph: {
    title: 'Korean Dental Implant Busan Korea | Kyungsung Medis Dental',
    description: '10 years with 0 implant re-surgeries. #1 in Busan Nam-gu with 1,500+ digital implant surgeries. Head doctor performs all procedures.',
    url: 'https://medisksu.co.kr/en/implant',
    type: 'website',
    locale: 'en_US',
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
