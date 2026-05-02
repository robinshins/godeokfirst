import type { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';

import ImplantHero from '@/components/jp/denture/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '平沢・高徳 全顎インプラント・入れ歯 | コドクファースト歯科',
  description: '平沢市高徳エデュタウンの全顎インプラント·入れ歯専門歯科。統合歯科専門医が相談から手術、アフターケアまで直接診療。デジタルガイドシステム、3D CT精密診断、痛み軽減麻酔システム完備。日本語通訳サポート、夜間·土曜日診療可能。電話：031-611-3222',
  keywords: '평택틀니, 고덕틀니, 고덕동틀니, 평택전체임플란트, 고덕전체임플란트, 무치악임플란트, 올온포임플란트, 알론식스, 임플란트틀니, 오버덴처, コドクファースト歯科, 고덕치과, 평택치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/jp/denture',
  },
  openGraph: {
    title: '平沢・高徳 全顎インプラント・入れ歯 | コドクファースト歯科',
    description: '대학 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 임플란트 1,200회+, 재수술 0건.',
    url: 'https://gdfirstdent.co.kr/jp/denture',
    siteName: 'コドクファースト歯科',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'コドクファースト歯科 - 全顎インプラント・入れ歯',
      },
    ],
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.denture);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr/jp' },
  { name: '전체임플란트·틀니', url: 'https://gdfirstdent.co.kr/jp/denture' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '전체임플란트·틀니',
  description: '대학 치과병원 외래교수 역임 원장이 직접 진료하는 전체임플란트, 틀니 전문. 평생 씹는 즐거움을 되찾아드립니다.',
  url: 'https://gdfirstdent.co.kr/jp/denture'
});
import StatsSection from '@/components/jp/denture/StatsSection';
import TreatmentOptionsSection from '@/components/jp/denture/TreatmentOptionsSection';
// import VideoSection from '@/components/jp/denture/VideoSection';
import WhyBestNewSection from '@/components/jp/denture/WhyBestNewSection';
import InHouseLabSection from '@/components/jp/denture/InHouseLabSection';
import AfterCareSection from '@/components/jp/denture/AfterCareSection';
import SpeedSection from '@/components/jp/denture/SpeedSection';
import DigitalGuideSection from '@/components/jp/implant/DigitalGuideSection';
import RealPatientResultsSection from '@/components/jp/denture/RealPatientResultsSection';
import SkillDifferenceSection from '@/components/jp/implant/SkillDifferenceSection';
// import SedationSection from '@/components/jp/cavity-treatment/SedationSection';
// import WarrantySection from '@/components/jp/implant/WarrantySection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
// import YouTubeSection from '@/components/jp/YouTubeSection';
import MobileColumnSection from '@/components/jp/MobileColumnSection';
import FAQSection from '@/components/jp/FAQSection';
import SloganSection from '@/components/jp/SloganSection';

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
