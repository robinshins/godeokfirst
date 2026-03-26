import type { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';

import ImplantHero from '@/components/cn/denture/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '平泽·高德 全口种植牙·假牙 | 高德First牙科',
  description: '平泽·高德동 전체임플란트, 틀니. 조선대학교 치과병원 외래교수 역임, 서울대 치의학대학원 임플란트 우수상 수료 원장이 직접 진료합니다.',
  keywords: '평택틀니, 고덕틀니, 고덕동틀니, 평택전체임플란트, 고덕전체임플란트, 무치악임플란트, 올온포임플란트, 알론식스, 임플란트틀니, 오버덴처, 高德First牙科, 고덕치과, 평택치과',
  alternates: {
    canonical: 'https://gdfirstdent.com/cn/denture',
  },
  openGraph: {
    title: '平泽·高德 全口种植牙·假牙 | 高德First牙科',
    description: '대학 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 임플란트 1,200회+, 재수술 0건.',
    url: 'https://gdfirstdent.com/cn/denture',
    siteName: '高德First牙科',
    type: 'website',
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.denture);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.com/cn' },
  { name: '전체임플란트·틀니', url: 'https://gdfirstdent.com/cn/denture' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '전체임플란트·틀니',
  description: '대학 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 평생 씹는 즐거움을 되찾아드립니다.',
  url: 'https://gdfirstdent.com/cn/denture'
});
import StatsSection from '@/components/cn/denture/StatsSection';
import TreatmentOptionsSection from '@/components/cn/denture/TreatmentOptionsSection';
import VideoSection from '@/components/cn/denture/VideoSection';
import WhyBestNewSection from '@/components/cn/denture/WhyBestNewSection';
import InHouseLabSection from '@/components/cn/denture/InHouseLabSection';
import AfterCareSection from '@/components/cn/denture/AfterCareSection';
import SpeedSection from '@/components/cn/denture/SpeedSection';
import DigitalGuideSection from '@/components/cn/implant/DigitalGuideSection';
import RealPatientResultsSection from '@/components/cn/denture/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/cn/implant/SkillDifferenceSection';
// import SedationSection from '@/components/cn/cavity-treatment/SedationSection';
// import WarrantySection from '@/components/cn/implant/WarrantySection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
// import YouTubeSection from '@/components/cn/YouTubeSection';
import MobileColumnSection from '@/components/cn/MobileColumnSection';
import FAQSection from '@/components/cn/FAQSection';
import SloganSection from '@/components/cn/SloganSection';

export default function DenturePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }} />
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <ImplantHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Treatment Options Section */}
      <TreatmentOptionsSection />

      {/* Video Section */}
      <VideoSection />
      <MobileColumnSection page="denture" />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}


      {/* In-House Lab Section */}
            {/* Speed Section */}
      <SpeedSection />
      <InHouseLabSection />

      {/* After Care Section */}
      <AfterCareSection />

      {/* Digital Guide Section */}
      <DigitalGuideSection />


      {/* Real Patient Results Section */}
      <RealPatientResultsSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      {/* <WarrantySection /> */}

      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      {/* <YouTubeSection /> */}
      <FAQSection page="denture" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
