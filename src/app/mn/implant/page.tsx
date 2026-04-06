import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';

import ImplantHero from '@/components/mn/implant/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dental Implant Pyeongtaek | Godeok First Dental',
  description: 'Dental Implant Pyeongtaek. 대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 정밀 진단 시스템',
  keywords: '고덕임플란트, 평택임플란트, 고덕동임플란트, 평택임플란트잘하는곳, 고덕임플란트잘하는곳, 임플란트전문, Godeok First Dental, 평택치과, 고덕치과, 고덕동치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/mn/implant',
  },
  openGraph: {
    title: 'Dental Implant Pyeongtaek | Godeok First Dental',
    description: '대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 1,200회 이상 식립 경험.',
    url: 'https://gdfirstdent.co.kr/mn/implant',
    siteName: 'Godeok First Dental',
    type: 'website',
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.implant);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr/mn' },
  { name: '임플란트', url: 'https://gdfirstdent.co.kr/mn/implant' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '임플란트',
  description: '조선대학교 치과병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 가이드 시스템으로 정밀하고 안전한 시술.',
  url: 'https://gdfirstdent.co.kr/mn/implant'
});
// import VideoSection from '@/components/mn/implant/VideoSection';
import StatsSection from '@/components/mn/implant/StatsSection';
import WhyBestNewSection from '@/components/mn/implant/WhyBestNewSection';
import AfterCareSection from '@/components/mn/denture/AfterCareSection';
import BeforeAfterSection from '@/components/mn/implant/BeforeAfterSection';
import SkillDifferenceSection from '@/components/mn/implant/SkillDifferenceSection';
// import SedationSection from '@/components/mn/cavity-treatment/SedationSection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';
// import YouTubeSection from '@/components/mn/YouTubeSection';
import MobileColumnSection from '@/components/mn/MobileColumnSection';
import FAQSection from '@/components/mn/FAQSection';
import SloganSection from '@/components/mn/SloganSection';

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
      {/* <VideoSection /> */}
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
