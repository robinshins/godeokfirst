import type { Metadata } from 'next';
import GNB from '@/components/home/GNB';
import FixedCTAButton from '@/components/home/FixedCTAButton';
import FooterSection from '@/components/home/FooterSection';

import WisdomToothHero from '@/components/wisdom-tooth/WisdomToothHero';
import WisdomToothStats from '@/components/wisdom-tooth/WisdomToothStats';
import ImportantMomentsSection from '@/components/wisdom-tooth/ImportantMomentsSection';
import SymptomsSection from '@/components/wisdom-tooth/SymptomsSection';
import BeforeAfterSection from '@/components/wisdom-tooth/BeforeAfterSection';
import CheckupSection from '@/components/wisdom-tooth/CheckupSection';
import RiskLevelsSection from '@/components/wisdom-tooth/RiskLevelsSection';
import FeaturesSection from '@/components/wisdom-tooth/FeaturesSection';
import WhyNowSection from '@/components/wisdom-tooth/WhyNowSection';
import DoctorSection from '@/components/home/DoctorSection';
import WhyBestSection from '@/components/home/WhyBestSection';
import LocationSection from '@/components/home/LocationSection';
import FAQSection from '@/components/home/FAQSection';
import SloganSection from '@/components/home/SloganSection';

import { generateBreadcrumbSchema, generateMedicalServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '평택사랑니, 평택고덕 사랑니발치 | 고덕퍼스트치과',
  description: '평택 고덕 사랑니 발치. 통합치의학과 전문의가 직접 시술하는 안전한 사랑니 발치. 고난이도 매복 사랑니도 안심.',
  keywords: '고덕사랑니, 평택사랑니, 고덕동사랑니발치, 사랑니발치잘하는곳, 매복사랑니, 고덕퍼스트치과, 평택치과, 고덕치과',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/wisdom-tooth',
  },
  openGraph: {
    title: '평택 고덕 사랑니 발치 | 고덕퍼스트치과',
    description: '통합치의학과 전문의가 직접 시술하는 안전한 사랑니 발치. 고난이도 매복 사랑니도 안심.',
    url: 'https://gdfirstdent.co.kr/wisdom-tooth',
    siteName: '고덕퍼스트치과',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: '고덕퍼스트치과 - 사랑니 발치',
      },
    ],
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: '홈', url: 'https://gdfirstdent.co.kr' },
  { name: '사랑니 발치', url: 'https://gdfirstdent.co.kr/wisdom-tooth' }
]);

const medicalServiceSchema = generateMedicalServiceSchema({
  name: '사랑니 발치',
  description: '통합치의학과 전문의가 직접 시술하는 안전한 사랑니 발치. 고난이도 매복 사랑니, 수평매복 사랑니도 안전하게 발치.',
  url: 'https://gdfirstdent.co.kr/wisdom-tooth'
});

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }} />
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <WisdomToothHero />

      {/* Stats Section */}
      <WisdomToothStats />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Important Moments Section */}
      <ImportantMomentsSection />

      {/* Symptoms Section */}
      <SymptomsSection />

      {/* Checkup Section */}
      <CheckupSection />

      {/* Risk Levels Section */}
      <RiskLevelsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Why Now Section */}
      <WhyNowSection />

      {/* 공통 섹션 */}
      <DoctorSection />
      <SloganSection />
      <WhyBestSection />
      <LocationSection />
      <FAQSection page="home" />

      {/* Footer */}
      <FooterSection />

      {/* Add spacing for fixed bottom button */}
      <div className="h-[88px]" />
    </main>
  );
}
