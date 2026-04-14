import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import ImplantHero from '@/components/mn/denture/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Full-Arch Implants & Dentures | Godeok First Dental',
  description: 'Pyeongtaek Godeok동 전체임플란트, 틀니. 조선대학교 치과병원 외래교수 역임, 서울대 치의학대학원 임플란트 우수상 수료 원장이 직접 진료합니다.',
  keywords: '평택틀니, 고덕틀니, 고덕동틀니, 평택전체임플란트, 고덕전체임플란트, 무치악임플란트, 올온포임플란트, 알론식스, 임플란트틀니, 오버덴처, Godeok First Dental, 고덕치과, 평택치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/mn/denture',
  },
  openGraph: {
    title: 'Full-Arch Implants & Dentures | Godeok First Dental',
    description: '대학 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 임플란트 1,200회+, 재수술 0건.',
    url: 'https://gdfirstdent.co.kr/mn/denture',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - Full-Arch Implants & Dentures',
      },
    ],
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.denture);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr/mn' },
  { name: '전체임플란트·틀니', url: 'https://gdfirstdent.co.kr/mn/denture' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '전체임플란트·틀니',
  description: '대학 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 평생 씹는 즐거움을 되찾아드립니다.',
  url: 'https://gdfirstdent.co.kr/mn/denture'
});
import StatsSection from '@/components/mn/denture/StatsSection';
import TreatmentOptionsSection from '@/components/mn/denture/TreatmentOptionsSection';
// import VideoSection from '@/components/mn/denture/VideoSection';
import WhyBestNewSection from '@/components/mn/denture/WhyBestNewSection';
import InHouseLabSection from '@/components/mn/denture/InHouseLabSection';
import AfterCareSection from '@/components/mn/denture/AfterCareSection';
import SpeedSection from '@/components/mn/denture/SpeedSection';
import DigitalGuideSection from '@/components/mn/implant/DigitalGuideSection';
import RealPatientResultsSection from '@/components/mn/denture/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/mn/implant/SkillDifferenceSection';
// import SedationSection from '@/components/mn/cavity-treatment/SedationSection';
// import WarrantySection from '@/components/mn/implant/WarrantySection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
// import YouTubeSection from '@/components/mn/YouTubeSection';
import MobileColumnSection from '@/components/mn/MobileColumnSection';
import FAQSection from '@/components/mn/FAQSection';
import SloganSection from '@/components/mn/SloganSection';

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
      {/* <VideoSection /> */}
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
