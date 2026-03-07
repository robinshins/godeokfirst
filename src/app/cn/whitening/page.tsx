import { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';
import WhiteningHero from '@/components/cn/whitening/WhiteningHero';
import WhiteningStats from '@/components/cn/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/cn/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/cn/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/cn/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/cn/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/cn/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/cn/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/cn/whitening/CaseStudySection';
import PromotionSection from '@/components/cn/whitening/PromotionSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';
import YouTubeSection from '@/components/cn/YouTubeSection';

export const metadata: Metadata = {
  title: '韩国釜山美白牙科 | 庆星美迪斯牙科',
  description: '1,000件以上施术实绩，0例副作用。釜山南区第一。院长亲自施术的专业美白和数字化贴面。',
  keywords: [
    '韩国牙齿美白',
    '釜山美白',
    '韩国美白',
    '韩国贴面',
    '釜山贴面',
    '专业美白韩国',
    '韩国牙科美白',
    '中文美白釜山',
    '韩国牙科旅游'
  ],
  alternates: {
    canonical: 'https://gdfirstdent.com/cn/whitening',
  },
  openGraph: {
    title: '韩国釜山美白牙科 | 庆星美迪斯牙科',
    description: '1,000件以上施术实绩，0例副作用。釜山南区第一。院长亲自施术的专业美白和数字化贴面。',
    url: 'https://gdfirstdent.com/cn/whitening',
    type: 'website',
    locale: 'zh_CN',
  }
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <GNB />
      <FixedCTAButton />

      {/* Add spacing for fixed GNB */}
      <div className="h-[52px]" />

      {/* Hero Section */}
      <WhiteningHero />

      {/* Stats Section */}
      <WhiteningStats />

      {/* Tooth Discoloration Section */}
      <ToothDiscolorationSection />

      {/* Video Section */}
      <WhiteningVideoSection />

      {/* Laminate Section */}
      <WhiteningLaminateSection />

      {/* Peroxide Whitening Section */}
      <WhiteningPeroxideSection />

      {/* Self vs Professional Section */}
      <SelfVsProfessionalSection />

      {/* Comparison Section */}
      <WhiteningComparisonSection />

      {/* Case Study Section */}
      <CaseStudySection />

      {/* Promotion Section */}
      <PromotionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <YouTubeSection />
      <FooterSection />
    </main>
  );
}
