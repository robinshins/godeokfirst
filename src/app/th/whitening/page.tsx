import type { Metadata } from 'next';
import GNB from '@/components/th/GNB';
import FixedCTAButton from '@/components/th/FixedCTAButton';
import FooterSection from '@/components/th/FooterSection';
import WhiteningHero from '@/components/th/whitening/WhiteningHero';
import WhiteningStats from '@/components/th/whitening/WhiteningStats';
import ToothDiscolorationSection from '@/components/th/whitening/ToothDiscolorationSection';
import WhiteningPeroxideSection from '@/components/th/whitening/WhiteningPeroxideSection';
import SelfVsProfessionalSection from '@/components/th/whitening/SelfVsProfessionalSection';
import CaseStudySection from '@/components/th/whitening/CaseStudySection';
import PromotionSection from '@/components/th/whitening/PromotionSection';
import DoctorSection from '@/components/th/DoctorSection';
import WhyBestSection from '@/components/th/WhyBestSection';
import LocationSection from '@/components/th/LocationSection';

export const metadata: Metadata = {
  title: 'Teeth Whitening Godeok | Godeok First Dental',
  description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system. Comprehensive Dentistry Specialist treats directly.',
  alternates: {
    canonical: 'https://gdfirstdent.co.kr/th/whitening',
  },
  openGraph: {
    title: 'Teeth Whitening Godeok | Godeok First Dental',
    description: 'Pyeongtaek Godeok Teeth whitening specialist. Safe with Osstem Beautis system.',
    url: 'https://gdfirstdent.co.kr/th/whitening',
    siteName: 'Godeok First Dental',
    type: 'website',
    images: [
      {
        url: '/고덕og이미지.png',
        width: 1200,
        height: 630,
        alt: 'Godeok First Dental - Teeth Whitening',
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
