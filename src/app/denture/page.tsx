import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';

import ImplantHero from '@/components/denture/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '강동 고덕 전체임플란트, 틀니 | 고덕퍼스트치과',
  description: '강동구 고덕동 전체임플란트, 틀니. 조선대학교 치과병원 외래교수 역임, 서울대 치의학대학원 임플란트 우수상 수료 원장이 직접 진료합니다.',
  keywords: '강동틀니, 고덕틀니, 고덕동틀니, 명일동틀니, 강동전체임플란트, 고덕전체임플란트, 무치악임플란트, 올온포임플란트, 알론식스, 임플란트틀니, 오버덴처, 고덕퍼스트치과, 고덕치과, 강동구치과',
  alternates: {
    canonical: 'https://godukfirst.com/denture',
  },
  openGraph: {
    title: '강동 고덕 전체임플란트, 틀니 | 고덕퍼스트치과',
    description: '조선대학교 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 임플란트 1,200회+, 재수술 0건.',
    url: 'https://godukfirst.com/denture',
    siteName: '고덕퍼스트치과',
    type: 'website',
  },
};

// FAQPage 스키마
const faqSchema = generateFAQSchema(faqData.denture);

// BreadcrumbList 스키마
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://godukfirst.com' },
  { name: '전체임플란트·틀니', url: 'https://godukfirst.com/denture' }
]);

// MedicalProcedure 스키마
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '전체임플란트·틀니',
  description: '조선대학교 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 평생 씹는 즐거움을 되찾아드립니다.',
  url: 'https://godukfirst.com/denture'
});
import StatsSection from '@/components/denture/StatsSection';
import TreatmentOptionsSection from '@/components/denture/TreatmentOptionsSection';
import VideoSection from '@/components/denture/VideoSection';
import WhyBestNewSection from '@/components/denture/WhyBestNewSection';
import InHouseLabSection from '@/components/denture/InHouseLabSection';
import AfterCareSection from '@/components/denture/AfterCareSection';
import SpeedSection from '@/components/denture/SpeedSection';
import DigitalGuideSection from '@/components/implant/DigitalGuideSection';
import RealPatientResultsSection from '@/components/denture/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/implant/SkillDifferenceSection';
import SedationSection from '@/components/cavity-treatment/SedationSection';
// import WarrantySection from '@/components/implant/WarrantySection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import YouTubeSection from '@/components/home/YouTubeSection';
import MobileColumnSection from '@/components/home/MobileColumnSection';
import FAQSection from '@/components/home/FAQSection';
import SloganSection from '@/components/home/SloganSection';

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

      {/* Treatment Options Section - 치료 선택 가이드 */}
      <TreatmentOptionsSection />

      {/* Video Section */}
      <VideoSection />
      <MobileColumnSection page="denture" />

      {/* Why Best Section - 전국 1등인 이유 */}
      <WhyBestNewSection />

      {/* Sedation Section - 의식하진정요법 */}
      <SedationSection />


      {/* In-House Lab Section - 원내 기공소 */}
            {/* Speed Section - 속도와 차이 */}
      <SpeedSection />
      <InHouseLabSection />

      {/* After Care Section - 사후 관리 */}
      <AfterCareSection />

      {/* Digital Guide Section - 디지털 가이드 */}
      <DigitalGuideSection />


      {/* Real Patient Results Section - 실제 환자 결과 */}
      <RealPatientResultsSection />

      {/* Skill Difference Section - 실력이 다르면 결과가 다르다 */}
      <SkillDifferenceSection />

      {/* Warranty Section - 임플란트 보증제 */}
      {/* <WarrantySection /> */}

      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FAQSection page="denture" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
