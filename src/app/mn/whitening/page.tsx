import type { Metadata } from 'next';
import GNB from '@/components/mn/GNB';
import FixedCTAButton from '@/components/mn/FixedCTAButton';
import FooterSection from '@/components/mn/FooterSection';
import WhiteningHero from '@/components/mn/whitening/WhiteningHero';
import WhiteningStats from '@/components/mn/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/mn/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/mn/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/mn/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/mn/whitening/CaseStudySection';
import PromotionSection from '@/components/mn/whitening/PromotionSection';
import DoctorSection from '@/components/mn/DoctorSection';
import WhyBestSection from '@/components/mn/WhyBestSection';
import LocationSection from '@/components/mn/LocationSection';

export const metadata: Metadata = {
  title: 'Teeth Whitening Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system. Comprehensive Dentistry Specialist treats directly.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/mn/whitening',
  },
  openGraph: {
    title: 'Teeth Whitening Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system.',
    url: 'https://gdfirstdent.co.kr/mn/whitening',
    siteName: 'Godeok First Dental',
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
