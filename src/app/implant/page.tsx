import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';

import ImplantHero from '@/components/implant/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '평택 고덕 임플란트 | 고덕퍼스트치과',
  description: '평택 고덕 임플란트. 대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 정밀 진단 시스템',
  keywords: '고덕임플란트, 평택임플란트, 고덕동임플란트, 평택임플란트잘하는곳, 고덕임플란트잘하는곳, 임플란트전문, 고덕퍼스트치과, 평택치과, 고덕치과, 고덕동치과',
  alternates: {
    canonical: 'https://godukfirst.com/implant',
  },
  openGraph: {
    title: '평택 고덕 임플란트 | 고덕퍼스트치과',
    description: '대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 1,200회 이상 식립 경험.',
    url: 'https://godukfirst.com/implant',
    siteName: '고덕퍼스트치과',
    type: 'website',
  },
};

// FAQPage 스키마
const faqSchema = generateFAQSchema(faqData.implant);

// BreadcrumbList 스키마
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://godukfirst.com' },
  { name: '임플란트', url: 'https://godukfirst.com/implant' }
]);

// MedicalProcedure 스키마
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '임플란트',
  description: '조선대학교 치과병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 가이드 시스템으로 정밀하고 안전한 시술.',
  url: 'https://godukfirst.com/implant'
});
import VideoSection from '@/components/implant/VideoSection';
import StatsSection from '@/components/implant/StatsSection';
import WhyBestNewSection from '@/components/implant/WhyBestNewSection';
import AfterCareSection from '@/components/denture/AfterCareSection';
import BeforeAfterSection from '@/components/implant/BeforeAfterSection';
import SkillDifferenceSection from '@/components/implant/SkillDifferenceSection';
// import SedationSection from '@/components/cavity-treatment/SedationSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import YouTubeSection from '@/components/home/YouTubeSection';
import MobileColumnSection from '@/components/home/MobileColumnSection';
import FAQSection from '@/components/home/FAQSection';
import SloganSection from '@/components/home/SloganSection';

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

      {/* Why Best Section - 전국 1등인 이유 */}
      <WhyBestNewSection />

      {/* Sedation Section - 의식하진정요법 */}
      {/* <SedationSection /> */}

      <AfterCareSection />


      {/* Digital Guide Section - 디지털 가이드 */}
      {/* <DigitalGuideSection /> */}

      {/* Before/After Section - 전후 사례 */}
      <BeforeAfterSection />

      {/* Skill Difference Section - 실력이 다르면 결과가 다르다 */}
      <SkillDifferenceSection />

      {/* Warranty Section - 임플란트 보증제 */}
      {/* <WarrantySection /> */}

      <DoctorSection />
      <SloganSection />
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
