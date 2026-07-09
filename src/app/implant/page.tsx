import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';

import ImplantHero from '@/components/implant/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '평택 고덕 임플란트 | 고덕퍼스트치과',
  description: '평택 고덕 임플란트 전문 치과. 조선대학교 치과병원 외래교수 역임 통합치의학과 전문의가 상담부터 수술, 사후관리까지 직접 책임집니다. 3D CT 정밀 진단과 디지털 가이드 시스템으로 안전한 임플란트, 통증완화 마취 시스템 운영. 야간·토요일 진료 가능. 031-611-3222',
  keywords: '고덕임플란트, 평택임플란트, 고덕동임플란트, 평택임플란트잘하는곳, 고덕임플란트잘하는곳, 임플란트전문, 고덕퍼스트치과, 평택치과, 고덕치과, 고덕동치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/implant',
  },
  openGraph: {
    title: '평택 고덕 임플란트 | 고덕퍼스트치과',
    description: '대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 1,200회 이상 식립 경험.',
    url: 'https://gdfirstdent.co.kr/implant',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: '고덕퍼스트치과 - 평택 고덕 임플란트',
      },
    ],
  },
};

// FAQPage 스키마
const faqSchema = generateFAQSchema(faqData.implant);

// BreadcrumbList 스키마
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr' },
  { name: '임플란트', url: 'https://gdfirstdent.co.kr/implant' }
]);

// MedicalProcedure 스키마
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '임플란트',
  description: '조선대학교 치과병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 가이드 시스템으로 정밀하고 안전한 시술.',
  url: 'https://gdfirstdent.co.kr/implant'
});
// import VideoSection from '@/components/implant/VideoSection';
import StatsSection from '@/components/implant/StatsSection';
import WhyBestNewSection from '@/components/implant/WhyBestNewSection';
import AfterCareSection from '@/components/denture/AfterCareSection';
import BeforeAfterSection from '@/components/implant/BeforeAfterSection';
import CaseVideoSection from '@/components/implant/CaseVideoSection';
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
      {/* <VideoSection /> */}
      <MobileColumnSection page="implant" />

      {/* YouTube Section - 임플란트 Q&A */}
      <YouTubeSection />

      {/* Case Video Section - 실제 임플란트 환자 케이스 영상 */}
      <CaseVideoSection />

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
      {/* <YouTubeSection /> */}
      <FAQSection page="implant" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
