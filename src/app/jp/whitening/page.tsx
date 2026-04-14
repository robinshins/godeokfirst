import type { Metadata } from 'next';
import GNB from '@/components/jp/GNB';
import FixedCTAButton from '@/components/jp/FixedCTAButton';
import FooterSection from '@/components/jp/FooterSection';
import WhiteningHero from '@/components/jp/whitening/WhiteningHero';
import WhiteningStats from '@/components/jp/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/jp/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/jp/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/jp/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/jp/whitening/CaseStudySection';
import PromotionSection from '@/components/jp/whitening/PromotionSection';
import DoctorSection from '@/components/jp/DoctorSection';
import WhyBestSection from '@/components/jp/WhyBestSection';
import LocationSection from '@/components/jp/LocationSection';

export const metadata: Metadata = {
  title: '高徳ホワイトニング | コドクファースト歯科',
  description: '平沢・高徳 ホワイトニング専門歯科. オステムBeautisシステムで知覚過敏なく安全に. 統合歯科専門医が直接治療します.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/jp/whitening',
  },
  openGraph: {
    title: '高徳ホワイトニング | コドクファースト歯科',
    description: '平沢・高徳 ホワイトニング専門歯科. オステムBeautisシステムで知覚過敏なく安全に.',
    url: 'https://gdfirstdent.co.kr/jp/whitening',
    siteName: 'コドクファースト歯科',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'コドクファースト歯科 - ホワイトニング',
      },
    ],
  },
};

export default function WhiteningPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <GNB />
      <FixedCTAButton />

      <div className="h-[52px]" />

      <WhiteningHero />
      <ToothDiscolorationSection />
      <WhiteningPeroxideSection />
      <SelfVsProfessionalSection />
      <CaseStudySection />
      <PromotionSection />

      <DoctorSection />
      <WhyBestSection />
      <LocationSection />
      <FooterSection />
      <div className="h-[88px]" />
    </main>
  );
}
