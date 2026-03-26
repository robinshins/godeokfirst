import type { Metadata } from 'next';
import GNB from '@/components/cn/GNB';
import FixedCTAButton from '@/components/cn/FixedCTAButton';
import FooterSection from '@/components/cn/FooterSection';
import WhiteningHero from '@/components/cn/whitening/WhiteningHero';
import WhiteningStats from '@/components/cn/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/cn/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/cn/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/cn/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/cn/whitening/CaseStudySection';
import PromotionSection from '@/components/cn/whitening/PromotionSection';
import DoctorSection from '@/components/cn/DoctorSection';
import WhyBestSection from '@/components/cn/WhyBestSection';
import LocationSection from '@/components/cn/LocationSection';

export const metadata: Metadata = {
  title: '高德牙齿美白 | 高德First牙科',
  description: '平泽·高德 Teeth whitening specialist. Safe with Osstem Beautis system. 综合牙科专家亲自治疗.',
  alternates: {
    canonical: 'https://gdfirstdent.com/cn/whitening',
  },
  openGraph: {
    title: '高德牙齿美白 | 高德First牙科',
    description: '平泽·高德 Teeth whitening specialist. Safe with Osstem Beautis system.',
    url: 'https://gdfirstdent.com/cn/whitening',
    siteName: '高德First牙科',
    type: 'website',
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
