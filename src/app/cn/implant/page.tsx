import { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';

import ImplantHero from '@/components/cn/implant/ImplantHero';
import StatsSection from '@/components/cn/implant/StatsSection';
import VideoSection from '@/components/cn/implant/VideoSection';
import ThreeStepNewSection from '@/components/cn/implant/ThreeStepNewSection';
import WhyBestNewSection from '@/components/cn/implant/WhyBestNewSection';
import InHouseLabSection from '@/components/cn/implant/InHouseLabSection';
import AfterCareSection from '@/components/cn/implant/AfterCareSection';
import SpecialTechSection from '@/components/cn/implant/SpecialTechSection';
import SpeedSection from '@/components/cn/implant/SpeedSection';
import DigitalGuideSection from '@/components/cn/implant/DigitalGuideSection';
import BeforeAfterSection from '@/components/cn/implant/BeforeAfterSection';
import RealPatientResultsSection from '@/components/cn/implant/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/cn/implant/SkillDifferenceSection';
import SedationSection from '@/components/cn/cavity-treatment/SedationSection';
import WarrantySection from '@/components/cn/implant/WarrantySection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import YouTubeSection from '@/components/cn/YouTubeSection';
import FAQSection from '@/components/cn/FAQSection';

export const metadata: Metadata = {
  title: '韩国釜山种植牙牙科 | 庆星美迪斯牙科',
  description: '10年种植牙零返修。釜山南区第一，1,500件以上数字化种植牙手术。院长亲自施术的3阶段临时牙系统。',
  keywords: [
    '韩国种植牙',
    '釜山种植牙',
    '韩国种植牙专家',
    '数字化种植牙',
    '种植牙手术韩国',
    '韩国牙科种植',
    '釜山牙科种植',
    '中文种植牙釜山',
    '韩国牙科旅游'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/cn/implant',
  },
  openGraph: {
    title: '韩国釜山种植牙牙科 | 庆星美迪斯牙科',
    description: '10年种植牙零返修。釜山南区第一，1,500件以上数字化种植牙手术。院长亲自施术。',
    url: 'https://medisksu.co.kr/cn/implant',
    type: 'website',
    locale: 'zh_CN',
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
