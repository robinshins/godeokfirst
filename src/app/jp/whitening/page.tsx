import { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';
import WhiteningHero from '@/components/jp/whitening/WhiteningHero';
import WhiteningStats from '@/components/jp/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/jp/whitening/ToothDiscolorationSection';
import WhiteningVideoSection from '@/components/jp/whitening/WhiteningVideoSection';
import WhiteningLaminateSection from '@/components/jp/whitening/WhiteningLaminateSection';
import WhiteningPeroxideSection from '@/components/jp/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/jp/whitening/SelfVsProfessionalSection';
import WhiteningComparisonSection from '@/components/jp/whitening/WhiteningComparisonSection';
import CaseStudySection from '@/components/jp/whitening/CaseStudySection';
import PromotionSection from '@/components/jp/whitening/PromotionSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';
import YouTubeSection from '@/components/jp/YouTubeSection';

export const metadata: Metadata = {
  title: '韓国釜山ホワイトニング歯科 | 慶星メディス歯科',
  description: '1,000件以上のホワイトニング実績、副作用ゼロ。釜山南区No.1。院長が直接施術するプロフェッショナルホワイトニングとデジタルラミネート。',
  keywords: [
    '韓国ホワイトニング',
    '釜山ホワイトニング',
    '韓国ラミネート',
    '韓国ベニア',
    '韓国歯科ホワイトニング',
    'プロフェッショナルホワイトニング韓国',
    '日本語対応ホワイトニング韓国',
    '韓国デンタルツーリズム'
  ],
  alternates: {
    canonical: 'https://medisksu.co.kr/jp/whitening',
  },
  openGraph: {
    title: '韓国釜山ホワイトニング歯科 | 慶星メディス歯科',
    description: '1,000件以上のホワイトニング実績、副作用ゼロ。釜山南区No.1。',
    url: 'https://medisksu.co.kr/jp/whitening',
    type: 'website',
    locale: 'ja_JP',
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
