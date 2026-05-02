import type { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';

import ImplantHero from '@/components/jp/implant/ImplantHero';
import { faqData } from '@/lib/faqData';
import { generateFAQSchema, generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '平沢・高徳インプラント | コドクファースト歯科',
  description: '平沢市高徳エデュタウンのインプラント専門歯科。統合歯科専門医が相談から手術、アフターケアまで直接診療。3D CT精密診断とデジタルガイドシステムによる安全な施術、痛み軽減麻酔システム完備。日本語通訳サポート、夜間·土曜日診療可能。電話：031-611-3222',
  keywords: '고덕임플란트, 평택임플란트, 고덕동임플란트, 평택임플란트잘하는곳, 고덕임플란트잘하는곳, 임플란트전문, コドクファースト歯科, 평택치과, 고덕치과, 고덕동치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/jp/implant',
  },
  openGraph: {
    title: '平沢・高徳インプラント | コドクファースト歯科',
    description: '대학병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 1,200회 이상 식립 경험.',
    url: 'https://gdfirstdent.co.kr/jp/implant',
    siteName: 'コドクファースト歯科',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'コドクファースト歯科 - インプラント',
      },
    ],
  },
};

// FAQ Schema
const faqSchema = generateFAQSchema(faqData.implant);

// Breadcrumb Schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr/jp' },
  { name: '임플란트', url: 'https://gdfirstdent.co.kr/jp/implant' }
]);

// Medical Service Schema
const medicalServiceSchema = generateMedicalServiceSchema({
  name: '임플란트',
  description: '조선대학교 치과병원 외래교수 출신 원장이 직접 수술하는 대학병원급 임플란트. 디지털 가이드 시스템으로 정밀하고 안전한 시술.',
  url: 'https://gdfirstdent.co.kr/jp/implant'
});
// import VideoSection from '@/components/jp/implant/VideoSection';
import StatsSection from '@/components/jp/implant/StatsSection';
import WhyBestNewSection from '@/components/jp/implant/WhyBestNewSection';
import AfterCareSection from '@/components/jp/denture/AfterCareSection';
import BeforeAfterSection from '@/components/jp/implant/BeforeAfterSection';
import SkillDifferenceSection from '@/components/jp/implant/SkillDifferenceSection';
// import SedationSection from '@/components/jp/cavity-treatment/SedationSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
// import YouTubeSection from '@/components/jp/YouTubeSection';
import MobileColumnSection from '@/components/jp/MobileColumnSection';
import FAQSection from '@/components/jp/FAQSection';
import SloganSection from '@/components/jp/SloganSection';

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
