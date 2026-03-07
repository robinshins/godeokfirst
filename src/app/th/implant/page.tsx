import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';

import ImplantHero from '@/components/th/implant/ImplantHero';
import StatsSection from '@/components/th/implant/StatsSection';
import VideoSection from '@/components/th/implant/VideoSection';
import ThreeStepNewSection from '@/components/th/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/th/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/th/implant/InHouseLabSection';
import AfterCareSection from '@/components/th/implant/AfterCareSection';
import SpecialTechSection from '@/components/th/implant/SpecialTechSection';
import SpeedSection from '@/components/th/implant/SpeedSection';
import DigitalGuideSection from '@/components/th/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/th/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/th/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/th/implant/SkillDifferenceSection';
// import SedationSection from '@/components/th/cavity-treatment/SedationSection';
import WarrantySection from '@/components/th/implant/WarrantySection';
import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
import YouTubeSection from '@/components/th/YouTubeSection';
import FAQSection from '@/components/th/FAQSection';

export const metadata: Metadata = {
  title: 'รากฟันเทียมปูซาน | Kyungsung Medis Dental',
  description: 'นวัตกรรมรากฟันเทียมดิจิทัล 0 เคสผ่าตัดซ้ำใน 10 ปี อันดับ 1 ด้านรากฟันเทียมในปูซานนัมกู ประสบการณ์ 1,500+ เคส',
  keywords: [
    'รากฟันเทียมปูซาน',
    'รากฟันเทียมเกาหลี',
    'รากฟันเทียมดิจิทัล',
    'ทันตกรรมปูซาน',
    'หมอฟันปูซาน',
    'คลินิกทันตกรรมปูซาน'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/th/implant',
  },
  openGraph: {
    title: 'รากฟันเทียมปูซาน | Kyungsung Medis Dental',
    description: 'นวัตกรรมรากฟันเทียมดิจิทัล 0 เคสผ่าตัดซ้ำใน 10 ปี',
    url: 'https://gdfirstdent.com/th/implant',
    siteName: 'Kyungsung Medis Dental Clinic',
    locale: 'th_TH',
    type: 'website',
  },
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

      {/* Sedation Section - Will be created later under cavity-treatment */}
      {/* <SedationSection /> */}

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

