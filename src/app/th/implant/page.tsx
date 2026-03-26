import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';

import ImplantHero from '@/components/th/implant/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dental Implant Pyeongtaek | Godeok First Dental',
  description: 'Dental Implant Pyeongtaek. 대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 정밀 진단 시스템',
  keywords: '고덕임플란트, 평택임플란트, 고덕동임플란트, 평택임플란트잘하는곳, 고덕임플란트잘하는곳, 임플란트전문, Godeok First Dental, 평택치과, 고덕치과, 고덕동치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/th/implant',
  },
  openGraph: {
    title: 'Dental Implant Pyeongtaek | Godeok First Dental',
    description: '대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 1,200회 이상 식립 경험.',
    url: 'https://gdfirstdent.co.kr/th/implant',
    siteName: 'Godeok First Dental',
    type: 'website',
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.implant);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr/th' },
  { name: '임플란트', url: 'https://gdfirstdent.co.kr/th/implant' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '임플란트',
  description: '조선대학교 치과병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 가이드 시스템으로 정밀하고 안전한 시술.',
  url: 'https://gdfirstdent.co.kr/th/implant'
});
import VideoSection from '@/components/th/implant/VideoSection';
import StatsSection from '@/components/th/implant/StatsSection';
import WhyBestNewSection from '@/components/th/implant/WhyBestNewSection';
import AfterCareSection from '@/components/th/denture/AfterCareSection';
import BeforeAfterSection from '@/components/th/implant/BeforeAfterSection';
import SkillDifferenceSection from '@/components/th/implant/SkillDifferenceSection';
// import SedationSection from '@/components/th/cavity-treatment/SedationSection';
import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';
// import YouTubeSection from '@/components/th/YouTubeSection';
import MobileColumnSection from '@/components/th/MobileColumnSection';
import FAQSection from '@/components/th/FAQSection';
import SloganSection from '@/components/th/SloganSection';

export default function ImplantPage() {
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

      {/* Video Section */}
      <VideoSection />
      <MobileColumnSection page="implant" />

      {/* Why Best Section */}
      <WhyBestNewSection />

      {/* Sedation Section */}
      {/* <SedationSection /> */}

      <AfterCareSection />


      {/* Digital Guide Section */}
      {/* <DigitalGuideSection /> */}

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Skill Difference Section */}
      <SkillDifferenceSection />

      {/* Warranty Section */}
      {/* <WarrantySection /> */}

      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      {/* <YouTubeSection /> */}
      <FAQSection page="implant" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
